import { Button } from "@/app/components/button";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import LinkButton from "./link-button";

export default function NavBar() {
  return (
    <header className="fixed z-10 overflow-hidden top-0 w-full lg:py-4 py-3  bg-white">
      <nav className="flex lg:h-20 h-8  items-center justify-between max-w-5xl px-4 mx-auto">
        <Link href="#">
          <Image
            src={Logo}
            alt="logo"
            className="object-contain w-auto h-8 lg:h-14"
          />
        </Link>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size={"icon"}>
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Fingoo</SheetTitle>
                <SheetDescription>나만의 투자분석 친구</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col divide-y *:py-6 mt-4">
                <LinkButton href="#intro" variant={"ghost"}>
                  Introduction
                </LinkButton>
                <LinkButton href="#team" variant={"ghost"}>
                  Team
                </LinkButton>
                <LinkButton
                  href="https://link.tumblbug.com/IYCIxg52rJb"
                  variant={"ghost"}
                >
                  Crowd Funding
                </LinkButton>
                <LinkButton href="#contact" variant={"ghost"}>
                  Connect Us
                </LinkButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex space-x-4">
          <LinkButton href="#intro" variant={"ghost"}>
            Introduction
          </LinkButton>
          <LinkButton href="#team" variant={"ghost"}>
            Team
          </LinkButton>
          <LinkButton
            href="https://link.tumblbug.com/IYCIxg52rJb"
            variant={"ghost"}
          >
            Crowd Funding
          </LinkButton>
          <LinkButton href="#contact" variant={"ghost"}>
            Connect Us
          </LinkButton>
        </div>
      </nav>
    </header>
  );
}
