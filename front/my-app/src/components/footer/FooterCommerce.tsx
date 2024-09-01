
"use client";
//context
import { useAuth } from "@/contexts/AuthContext";
import { Footer } from "flowbite-react";

export function Footerr() {

  const {token} = useAuth();
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="/">Home</Footer.Link>
        <Footer.Link href="/contact">Contact</Footer.Link>
        <Footer.Link href="#">About</Footer.Link>
        {token ? null: <Footer.Link href="/login">Login</Footer.Link>}
      </Footer.LinkGroup>
    </Footer>
  );
}
