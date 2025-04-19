import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ReactNode, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bell, CheckCircle, Ticket } from "lucide-react";
export const Route = createLazyFileRoute("/user/account/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto px-28 h-[70vh] py-10">
      <Tabs defaultValue="editProfile" className="w-full  flex gap-3">
        <div className="navigation w-1/5">
          <AccountNavigation />
        </div>
        <div className="display w-full h-[37rem] ">
          <Display>
            <TabsContent value="editProfile">
              <DisplayEditProfile />
            </TabsContent>
            <TabsContent value="orders">
              <DisplayBooking />
            </TabsContent>
            <TabsContent value="notifications">
              <DisplayNotification />
            </TabsContent>
            <TabsContent value="voucher">
              <DisplayVoucher />
            </TabsContent>
            <TabsContent value="loan">
              <DisplayLoan />
            </TabsContent>
          </Display>
        </div>

        {/* <UserSidebarMenu />
      <ProfileMenu /> */}
      </Tabs>
    </div>
  );
}

const AccountNavigation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <h3>Admin</h3>
        </CardTitle>
        <CardDescription>Jl.Kusuma Bhakti no 13</CardDescription>
      </CardHeader>
      <CardContent>
        <TabsList className="flex flex-col gap-2 justify-start items-start h-auto bg-transparent">
          <TabsTrigger
            value="editProfile"
            className="flex gap-2 items-start justify-start w-full"
          >
            <img src="/svg/avatar.svg" alt="" className="w-auto h-6" />
            <span>Edit Profile</span>
          </TabsTrigger>

          <TabsTrigger
            value="orders"
            className="flex gap-2 items-start justify-start w-full"
          >
            <img src="/svg/basket.svg" alt="" className="w-auto h-8" />
            <span>Pesanan Saya</span>
          </TabsTrigger>

          <TabsTrigger
            value="notifications"
            className="flex gap-2 items-start justify-start w-full"
          >
            <img src="/svg/notification.svg" alt="" className="w-auto h-8" />
            <span>Notifikasi</span>
          </TabsTrigger>

          <TabsTrigger
            value="voucher"
            className="flex gap-2 items-start justify-start w-full"
          >
            <img src="/svg/disccount.svg" alt="" className="w-auto h-8" />
            <span>Voucher</span>
          </TabsTrigger>

          <TabsTrigger
            value="loan"
            className="flex gap-2 items-start justify-start w-full"
          >
            <img src="/svg/money.svg" alt="" className="w-auto h-8" />
            <span>Pinjaman</span>
          </TabsTrigger>
        </TabsList>
      </CardContent>
      <CardFooter className="border-t pt-4 mt-4 flex justify-end">
        <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition duration-200 shadow-sm">
          Log Out
        </button>
      </CardFooter>
    </Card>
  );
};

const Display = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Card className="h-full">{children}</Card>
    </>
  );
};

const DisplayBooking = () => {
  const [count, setCount] = useState(0);

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const cards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        );
      },
    },
    {
      description: "Babbu Maan",
      title: "Mitran Di Chhatri",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience.
            Born in the village of Khant Maanpur in Punjab, India, he has become
            a cultural icon in the Punjabi music industry. <br /> <br /> His
            songs often reflect the struggles and triumphs of everyday life,
            capturing the essence of Punjabi culture and traditions. With a
            career spanning over two decades, Babu Maan has released numerous
            hit albums and singles that have garnered him a massive fan
            following both in India and abroad.
          </p>
        );
      },
    },

    {
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for
            their powerful sound and intense performances that resonate deeply
            with their audience. Formed in Los Angeles, California, they have
            become a cultural icon in the heavy metal music industry. <br />{" "}
            <br /> Their songs often reflect themes of aggression, social
            issues, and personal struggles, capturing the essence of the heavy
            metal genre. With a career spanning over four decades, Metallica has
            released numerous hit albums and singles that have garnered them a
            massive fan following both in the United States and abroad.
          </p>
        );
      },
    },
    {
      description: "Led Zeppelin",
      title: "Stairway To Heaven",
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Led Zeppelin, a legendary British rock band, is renowned for their
            innovative sound and profound impact on the music industry. Formed
            in London in 1968, they have become a cultural icon in the rock
            music world. <br /> <br /> Their songs often reflect a blend of
            blues, hard rock, and folk music, capturing the essence of the 1970s
            rock era. With a career spanning over a decade, Led Zeppelin has
            released numerous hit albums and singles that have garnered them a
            massive fan following both in the United Kingdom and abroad.
          </p>
        );
      },
    },
    {
      description: "Mustafa Zahid",
      title: "Toh Phir Aao",
      src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
            renowned for its intense storyline and powerful performances.
            Directed by Mohit Suri, the film has become a significant work in
            the Indian film industry. <br /> <br /> The movie explores themes of
            love, redemption, and sacrifice, capturing the essence of human
            emotions and relationships. With a gripping narrative and memorable
            music, &quot;Aawarapan&quot; has garnered a massive fan following
            both in India and abroad, solidifying Emraan Hashmi&apos;s status as
            a versatile actor.
          </p>
        );
      },
    },
  ];
  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <CardHeader>
          <CardTitle>Pesanan Saya</CardTitle>
          <CardDescription>
            <Command className="rounded-lg border shadow-xs md:min-w-[450px]">
              <CommandInput placeholder="Type a command or search..." />
            </Command>
          </CardDescription>
          <div className="categoriesBooking ">
            <TabsList className="w-full justify-around gap-1">
              <TabsTrigger value="all" className="w-full bg-white">
                Semua
              </TabsTrigger>
              <TabsTrigger className="w-full bg-white" value="notPaid">
                Belum Bayar
              </TabsTrigger>
              <TabsTrigger className="w-full bg-white" value="packing">
                Sedang Dikemas
              </TabsTrigger>
              <TabsTrigger className="w-full bg-white" value="onDelivery">
                Dikirim
              </TabsTrigger>
              <TabsTrigger className="w-full bg-white" value="finish">
                Selesai
              </TabsTrigger>
              <TabsTrigger className="w-full bg-white" value="cancel">
                Dibatalkan
              </TabsTrigger>
            </TabsList>
          </div>
        </CardHeader>
        <CardContent>
          <TabsContent value="all" className="overflow-y-auto   h-[24rem]">
            {cards.map((card, id) => (
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <motion.div
                      key={`card-${card.title}-${id}`}
                      className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-muted dark:hover:bg-muted/50 rounded-xl cursor-pointer"
                    >
                      <div className="flex gap-4 items-center text-sm py-2">
                        <motion.div className="w-[120px] font-semibold text-neutral-700">
                          B003972504182
                        </motion.div>

                        <div className="flex flex-col w-[200px]">
                          <motion.h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                            {card.title}
                          </motion.h3>
                          <motion.p className="text-neutral-600 dark:text-neutral-400">
                            {card.description}
                          </motion.p>
                        </div>

                        <motion.p className="w-[100px] text-neutral-600 dark:text-neutral-400">
                          18-03-02
                        </motion.p>

                        <motion.p className="w-[120px] text-neutral-600 dark:text-neutral-400">
                          belum bayar
                        </motion.p>

                        <motion.h3 className="w-[120px] text-neutral-600 dark:text-neutral-400">
                          Rp 100.000
                        </motion.h3>

                        <motion.p className="w-[80px] text-neutral-600 dark:text-neutral-400">
                          9 Items
                        </motion.p>

                        <motion.p className="w-[100px] text-neutral-600 dark:text-neutral-400">
                          10.000 pv
                        </motion.p>
                      </div>
                    </motion.div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableCaption>
                        <p className="hidden">
                          A list of your recent invoices.
                        </p>
                        <div className="flex gap-2 justify-end">
                          <button className="shadow-md hover:shadow-lg hover:bg-blue-600 px-8 py-2 bg-blue-500 rounded-md text-white font-light transition duration-200 ease-linear">
                            Bayar
                          </button>
                          <button className="shadow-md hover:shadow-lg hover:bg-amber-600 px-8 py-2 bg-amber-500 rounded-md text-white font-light transition duration-200 ease-linear">
                            Edit
                          </button>
                          <button className="shadow-md hover:shadow-lg hover:bg-red-600 px-8 py-2 bg-red-500 rounded-md text-white font-light transition duration-200 ease-linear">
                            Hapus
                          </button>
                        </div>
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Invoice</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice) => (
                          <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">
                              {invoice.invoice}
                            </TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">
                              {invoice.totalAmount}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={3}>Total</TableCell>
                          <TableCell className="text-right">
                            $2,500.00
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </TabsContent>
          <TabsContent value="notPaid">belum bayar</TabsContent>
          <TabsContent value="packing">dikemas</TabsContent>
          <TabsContent value="onDelivery">dikirim</TabsContent>
          <TabsContent value="finish">selesai</TabsContent>
          <TabsContent value="cancel">batal</TabsContent>
        </CardContent>
      </Tabs>
    </>
  );
};

const DisplayEditProfile = () => {
  const [edit, setOnEdit] = useState(false);

  type ProfileData = {
    fullName: string;
    phone: string;
    email: string;
    password: string;
  };

  const profileData: ProfileData = {
    fullName: "John Doe",
    phone: "081234567890",
    email: "johndoe@example.com",
    password: "12345678",
  };
  return (
    <>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Kelola informasi profil Anda untuk mengontrol, melindungi dan
          mengamankan akun
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4 px-4 pt-2">
          <div>
            <Label className="font-bold " htmlFor="fullName">
              Nama Lengkap
            </Label>
            <Input
              type="text"
              id="fullName"
              defaultValue={profileData?.fullName}
              className="mt-2"
              disabled={!edit}
              placeholder="masukan nama lengkap"
            />
          </div>

          <div>
            <Label className="font-bold " htmlFor="phone">
              Nomor Telepon
            </Label>
            <Input
              type="tel"
              id="phone"
              disabled={!edit}
              defaultValue={profileData?.phone}
              className="mt-2"
              placeholder="masukan phone"
            />
          </div>

          <div>
            <Label className="font-bold " htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              disabled={!edit}
              defaultValue={profileData?.email}
              className="mt-2"
              placeholder="masukan email"
            />
          </div>
          <div>
            <Label className="font-bold " htmlFor="email">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              disabled={!edit}
              defaultValue={profileData?.password}
              className="mt-2"
            />
          </div>
        </form>
        <div className="m-4 btn-action flex gap-2">
          <Button
            onClick={() => setOnEdit(true)}
            className={`transition-all duration-300 ease-in-out transform px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 hover:shadow-md ${
              !edit
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            Edit
          </Button>

          <div className="flex gap-2">
            <Button
              onClick={() => setOnEdit(false)}
              className={`transition-all duration-300 ease-in-out transform px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 hover:shadow-md ${
                edit
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              cancel
            </Button>
            <Button
              onClick={() => setOnEdit(false)}
              className={`transition-all duration-300 ease-in-out transform px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 hover:shadow-md ${
                edit
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              selesai
            </Button>
          </div>
        </div>
      </CardContent>
    </>
  );
};

const DisplayNotification = () => {
  const dummyNotifications = [
    {
      id: "notif-1",
      title: "Transaksi Berhasil",
      message: "Pembayaran sebesar Rp 100.000 telah berhasil diproses.",
      createdAt: "2025-04-18 09:45",
      isRead: false,
    },
    {
      id: "notif-2",
      title: "Promo Spesial!",
      message: "Dapatkan diskon hingga 50% hanya hari ini.",
      createdAt: "2025-04-17 15:22",
      isRead: true,
    },
    {
      id: "notif-3",
      title: "Pengingat Pembayaran",
      message: "Jatuh tempo pembayaran Anda tinggal 1 hari lagi.",
      createdAt: "2025-04-16 08:10",
      isRead: false,
    },
    {
      id: "notif-4",
      title: "Update Profil",
      message: "Profil Anda telah diperbarui dengan sukses.",
      createdAt: "2025-04-15 12:30",
      isRead: true,
    },
  ];

  const [notifications, setNotifications] = useState(dummyNotifications);
  const [checkedNotifications, setCheckedNotifications] = useState<string[]>(
    []
  );
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  const toggleNotificationSelection = (id: string) => {
    setCheckedNotifications((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deleteSelectedNotifications = () => {
    setNotifications((prev) =>
      prev.filter((notif) => !checkedNotifications.includes(notif.id))
    );
    setCheckedNotifications([]);
    setShowDeleteButtons(false);
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Notifikasi</CardTitle>
        <CardDescription>
          Kelola informasi profil Anda untuk mengontrol, melindungi dan
          mengamankan akun
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex justify-end mb-4">
          {showDeleteButtons ? (
            <button
              onClick={deleteSelectedNotifications}
              className="text-red-600 text-sm hover:underline"
            >
              Hapus Terpilih
            </button>
          ) : (
            <button
              onClick={() => setShowDeleteButtons(true)}
              className="text-blue-600 text-sm hover:underline"
            >
              Aktifkan Mode Hapus
            </button>
          )}
        </div>
        <div className="overflow-y-auto   h-[24rem]">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className="w-full p-6 mb-2 border-darkblue05 shadow-none rounded-lg transition-all duration-300 ease-in-out relative cursor-pointer"
            >
              <div className="flex items-start justify-between w-full">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-darkblue05 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                      {notification.title}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-slate-100 mt-0.5">
                      {notification.message}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {showDeleteButtons ? (
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={checkedNotifications.includes(notification.id)}
                      onChange={() =>
                        toggleNotificationSelection(notification.id)
                      }
                    />
                  ) : (
                    <div className="flex items-center justify-end w-[20px]">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          notification.isRead ? "bg-gray-500" : "bg-green-500"
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end text-xs text-gray-400 mt-2">
                {notification.createdAt}
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </>
  );
};

const DisplayVoucher = () => {
  const dummyVouchers = [
    {
      id: "voucher-1",
      title: "Diskon 30% Hotel",
      message: "Dapatkan diskon 30% untuk pemesanan hotel minimum Rp 500.000",
      createdAt: "2025-04-18 09:00",
      isUsed: false,
    },
    {
      id: "voucher-2",
      title: "Cashback Rp 50.000",
      message: "Cashback untuk pembayaran dengan dompet digital",
      createdAt: "2025-04-17 14:45",
      isUsed: true,
    },
  ];

  const [vouchers, setVouchers] = useState(dummyVouchers);

  return (
    <>
      <CardHeader>
        <CardTitle>Voucher</CardTitle>
        <CardDescription>
          Gunakan voucher untuk mendapatkan diskon dan penawaran spesial!
        </CardDescription>
      </CardHeader>

      <CardContent>
        {vouchers.map((voucher) => (
          <Card
            key={voucher.id}
            className="w-full p-6 mb-2 border-darkblue05 shadow-none rounded-lg transition-all duration-300 ease-in-out relative cursor-pointer"
          >
            <div className="flex items-start justify-between w-full">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-darkblue05 flex items-center justify-center">
                  <Ticket className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col">
                  <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                    {voucher.title}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-slate-100 mt-0.5">
                    {voucher.message}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-end w-[20px]">
                  <CheckCircle
                    className={`w-4 h-4 ${
                      voucher.isUsed ? "text-gray-400" : "text-green-500"
                    }`}
                    title={
                      voucher.isUsed ? "Sudah digunakan" : "Belum digunakan"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end text-xs text-gray-400 mt-2">
              {voucher.createdAt}
            </div>
          </Card>
        ))}
      </CardContent>
    </>
  );
};

const DisplayLoan = () => {
  const cards = [
    {
      id: "item-1",
      title: "Summertime Sadness",
      description: "Lana Del Rey",
    },
    {
      id: "item-2",
      title: "Mitran Di Chhatri",
      description: "Babbu Maan",
    },
    {
      id: "item-3",
      title: "For Whom The Bell Tolls",
      description: "Metallica",
    },
  ];

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
  ];

  return (
    <>
      <CardHeader>
        <CardTitle>Detail Pinjaman</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-2 h-[25rem] overflow-y-auto"
        >
          {cards.map((card) => (
            <AccordionItem key={card.id} value={card.id}>
              <AccordionTrigger>
                <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-between text-left">
                  <div className="flex flex-col">
                    <span className="font-semibold">{card.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {card.description}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">Belum Bayar</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableCaption>
                    <div className="flex justify-end gap-2 mt-2">
                      <button className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Bayar
                      </button>
                    </div>
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Metode</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell>{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {invoice.totalAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>

                {/* Footer info tambahan */}
                <div className="mt-4 border-t pt-4 text-sm text-muted-foreground grid gap-2">
                  <div className="flex justify-between">
                    <span>Tanggal Jatuh Tempo</span>
                    <span>25 April 2025</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <CardFooter className="bg-red-50 border-t border-red-300 mt-4 p-4 rounded-b-md">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center text-red-700 font-semibold text-sm">
              <span className="flex items-center gap-1">
                <span className="text-lg">⚠️</span> Batas Peminjaman
              </span>
              <span className="text-base">Rp 1.000.000</span>
            </div>
            <p className="text-xs text-red-600 italic">
              Segera lunasi agar dapat memesan produk kembali!
            </p>
          </div>
        </CardFooter>
      </CardContent>
    </>
  );
};
