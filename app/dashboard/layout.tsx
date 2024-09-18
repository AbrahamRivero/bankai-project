import { cn } from "@/lib/utils";
import { Fragment } from "react";
import Navbar from "./_components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
    </Fragment>
  );
}
