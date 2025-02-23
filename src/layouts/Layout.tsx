import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  backgroundColor?: string;
}

export default function Layout({
  children,
  backgroundColor = "bg-white",
}: LayoutProps) {
  return (
    <section
      className={`${backgroundColor} w-full px-6 md:px-8 lg:px-16 xl:px-48`}
    >
      {children}
    </section>
  );
}
