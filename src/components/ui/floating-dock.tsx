// FloatingDock.tsx
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";
import { TabsList, TabsTrigger } from "./tabs";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  onChange,
  currentValue,
}: {
  items: { title: string; icon: React.ReactNode; value: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  onChange?: (value: string) => void;
  currentValue?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        onChange={onChange}
        currentValue={currentValue}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        onChange={onChange}
        currentValue={currentValue}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  onChange,
  currentValue,
}: {
  items: { title: string; icon: React.ReactNode; value: string }[];
  className?: string;
  onChange?: (value: string) => void;
  currentValue?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <TabsList className="bg-transparent">
      <div className={cn("relative block md:hidden", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <TabsTrigger
                      value={item.value}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                        currentValue === item.value
                          ? "bg-gray-300 dark:bg-neutral-700"
                          : "bg-gray-50 dark:bg-neutral-900"
                      )}
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                    </TabsTrigger>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </button>
      </div>
    </TabsList>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  onChange,
  currentValue,
}: {
  items: { title: string; icon: React.ReactNode; value: string }[];
  className?: string;
  onChange?: (value: string) => void;
  currentValue?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          title={item.title}
          icon={item.icon}
          value={item.value}
          isActive={item.value === currentValue}
          onClick={onChange}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  value,
  onClick,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  value: string;
  onClick?: (value: string) => void;
  isActive?: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <button onClick={() => onClick?.(value)}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full",
          isActive
            ? "bg-gray-300 dark:bg-neutral-700"
            : "bg-gray-200 dark:bg-neutral-800"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}
