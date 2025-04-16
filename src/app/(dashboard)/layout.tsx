import Menu from "@/components/Menu";
import NavBar from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
      <div className="w-[15%] md:w-[8%] lg:w-[20%] xl:w-[17%] ">
        {/* LEFT */}
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start p-4"
          title="Lama Dev School Management Dashboard">
          <Image src="/logo.png" alt="Logo" height={32} width={32} />
          <span className=" hidden lg:block" >School</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[85%] md:w-[92%] lg:w-[80%] xl:w-[83%] bg-[#F7F8FA] overflow-y-scroll">
        {/* RIGHT */}
        <NavBar />
        {children}
      </div>
    </div>
  );
}
