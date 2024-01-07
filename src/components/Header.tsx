import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import logoImage from "../images/logos/RRIconWithNameSide.png";
import Button from "./Button";

function MobileNavLink({ href, children }: any) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: any) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <nav className="flex h-20">
      <Popover>
        <Popover.Button
          className="relative z-10 mt-5 flex h-10 w-10 items-center justify-center"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MobileNavIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="relative top-full mt-4 flex flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 "
            >
              <MobileNavLink href="#services">Services</MobileNavLink>
              {/* <MobileNavLink href="#calc">Calculator</MobileNavLink>
              <MobileNavLink href="#pricing">Pricing</MobileNavLink>*/}
              <MobileNavLink href="#faq">FAQ's</MobileNavLink>
              <MobileNavLink href="#contact">Contact Us</MobileNavLink>
              <hr className="m-2 border-slate-300/40" />
              <MobileNavLink href="https://demo.rapidreports.org/">
                Demo
              </MobileNavLink>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
      <div className="absolute right-48 h-20 w-28 pl-10">
        <Link href="#" aria-label="Home">
          <Image src={logoImage} alt={"logo"} className="scale-150 pt-5" />
        </Link>
      </div>
    </nav>
  );
}

const DesktopHeader = () => {
  return (
    <nav className="hidden md:relative md:z-50 md:flex md:justify-center md:gap-52">
      <div className="flex items-center md:mx-56 md:gap-x-12">
        <div className="relative h-20 w-28 md:h-24 md:w-44">
          <Link href="#" aria-label="Home">
            <Image src={logoImage} alt={"logo"} className="scale-150 pt-5" />
          </Link>
        </div>

        <div className="hidden md:flex md:w-full md:justify-center md:gap-x-6 md:pl-96">
          <a href="#services" className="text-xl">
            Services
          </a>
          {/* <a href="#calc" className="text-xl">
            Calculator
          </a> */}
          {/* <a href="#pricing" className="text-xl">
            Pricing
          </a> */}
          <a href="#faq" className="text-xl">
            FAQ's
          </a>
          <a href="#contact" className="text-xl">
            Contact Us
          </a>
        </div>
      </div>
      <div className="items-center gap-x-5 md:flex md:gap-x-8">
        <div className="hidden md:block">
          <Button target="_blank" href="https://demo.rapidreports.org/">
            <span>Free Demo</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <>
      <nav className="hidden md:flex">
        <DesktopHeader />
      </nav>
      <nav className="md:hidden">
        <MobileNavigation />
      </nav>
    </>
  );
};

export default Header;
