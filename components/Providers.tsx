import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider localization={esES}>{children}</ClerkProvider>;
};

export default Providers;
