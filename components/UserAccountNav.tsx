"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { ShoppingCart, AppWindow } from "lucide-react";

const UserAccountNav = () => {
  return (
    <SignedIn>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Carrito"
            labelIcon={
              <ShoppingCart className="text-blue-600 h-4 w-4 mr-1.5" />
            }
            href="/shopping-cart"
          />
          <UserButton.Link
            label="Dashboard"
            labelIcon={<AppWindow className="text-blue-600 h-4 w-4 mr-1.5" />}
            href="/dashboard"
          />
          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>
      </UserButton>
    </SignedIn>
  );
};

export default UserAccountNav;
