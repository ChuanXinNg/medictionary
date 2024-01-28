"use client"
import { Button } from "@/components/ui/button"
import { ComboboxDemo } from "@/components/ui/combobox";
import MedicalTermsSelector from "@/components/medicalCard";
import MyForm from "@/components/ui/myform";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button onClick={() => {console.log("Hello World!!")}}>Button</Button>
        <ComboboxDemo/>
        <MyForm/>
        
      </div>

      


    </main>
  );
}
