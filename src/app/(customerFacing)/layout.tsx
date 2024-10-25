import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function CustomerFacingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen bg-background relative">
        <Nav>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/shipping">Shipping</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/refer">Refer Friends</NavLink>
        </Nav>
        {children}
      </div>
    </>
  );
}
