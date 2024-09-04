import AccsGrid from "@/components/AccsGrid";
import HomeBotoesGrid from "@/components/HomeBotoesGrid";
import BotoesBtn from "@/components/BotoesBtn";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  const isNome = "sim";
  
  return (
    <main className="flex flex-col bg-white items-center justify-between">
      <Sidebar />
      <div className="p-4 md:pt-8"><HomeBotoesGrid /></div>
      <div className="p-4 md:pt-0"><HomeBotoesGrid isNomes={isNome} /></div>
      
      <AccsGrid />
    </main>
  );
}
