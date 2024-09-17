import { SignInButton, SignedOut } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="mx-auto w-full px-2.5 sm:px-4">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <Image src="/favicon.svg" width={30} height={30} alt="logo" />
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            {userId ? (
              <>
                <Link
                  href="/shop"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Tienda
                </Link>

                <Link
                  href="/events"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Eventos
                </Link>

                <Link
                  href="/about-us"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sobre Nosotros
                </Link>

                <Link
                  href="/contact-us"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Contáctenos
                </Link>
                <UserAccountNav />
              </>
            ) : (
              <SignedOut>
                <SignInButton />
              </SignedOut>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
