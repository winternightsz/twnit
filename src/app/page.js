import AccsGrid from "@/components/AccsGrid";
import HomeBotoesGrid from "@/components/HomeBotoesGrid";
import BotoesBtn from "@/components/BotoesBtn";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  const isNome = "sim";
  
  return (
    <main className="flex flex-col bg-white sm:flex-row">
      
      <aside id="default-sidebar" class="hidden sm:block sm:static sm:z-40 sm:w-64 sm:h-screen" aria-label="Sidebar">
        <Sidebar HomeBotoesGrid isNomes={isNome} />
      </aside>
      <div className="sm:p-9 flex flex-col items-center">
      {/* <div className="md:p-4 md:pt-8"><HomeBotoesGrid /></div>
      <div className="md:p-4 md:pt-0"><HomeBotoesGrid isNomes={isNome} /></div>  */}
      <AccsGrid />
      </div>
    </main>
  );
}
