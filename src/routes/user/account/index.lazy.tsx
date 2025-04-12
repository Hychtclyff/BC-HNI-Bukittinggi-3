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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Route = createLazyFileRoute("/user/account/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto px-28 flex gap-3 h-[70vh] py-10">
      <div className="navigation w-1/4">
        <AccountNavigation />
      </div>
      <div className="display w-full h-full">
        <Display />
      </div>
      {/* <UserSidebarMenu />
      <ProfileMenu /> */}
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
        <ul className="font-medium flex flex-col gap-y-3">
          <li className="flex gap-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <img src="/svg/avatar.svg" alt="" className="w-auto h-6" />
                  <h3>Edit Profile</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>Profile</li>
                    <li>Ubah Password</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li className="flex gap-2">
            <img src="/svg/basket.svg" alt="" className="w-auto h-8 " />
            <h3> Pesanan Saya</h3>
          </li>
          <li className="flex gap-2">
            <img src="/svg/notification.svg" alt="" className="w-auto h-8 " />
            <h3> notifikasi</h3>
          </li>
          <li className="flex gap-2">
            <img src="/svg/disccount.svg" alt="" className="w-auto h-8 " />
            <h3> vocher</h3>
          </li>{" "}
          <li className="flex gap-2">
            <img src="/svg/money.svg" alt="" className="w-auto h-8 " />
            <h3> Pinjaman</h3>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <p>Log Out</p>
      </CardFooter>
    </Card>
  );
};

const Display = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <p>title</p>
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};
