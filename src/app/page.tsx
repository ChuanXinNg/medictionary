"use client"
import Image from "next/image";
import MyForm from "./logic";
import { ComboboxDemo } from "@/components/ui/combobox";
import { Combo } from "next/font/google";

export default function Home() {
  return (
    
    <main>
      <h1>Medictionary</h1>
      <div className="search-wrapper">
        <MyForm/>
        <ComboboxDemo/>
      </div>
      
    </main>
  );
}
