import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/shipping">Shipping</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/refer">Refer Friends</NavLink>
      </Nav>
      {/* <div className="container my-6">{children}</div> */}
    </>
  );
}
