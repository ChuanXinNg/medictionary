"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Divide } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { MedicalTerm, MedicalTerms } from "../../app/data"

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(MedicalTerms);
  const [term, setTerm] = React.useState<MedicalTerm | null>(null);

  const handleSearch = (searchValue: string) => {
    const filteredFrameworks = MedicalTerms.filter((framework) =>
      framework.term.includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredFrameworks);
  };

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
    setSelectedValue(currentValue);
    let key = currentValue;
    console.log("Selected key: " + key)
    MedicalTerms.forEach((medicalterm) => {
      if (medicalterm.term.toLowerCase() == key) {
        setTerm(medicalterm);
      }
    });
  };

  return (
    <div style={{margin: "0 auto", width: "100%", alignItems: "center"}}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            style={{overflowX: "scroll", margin: "0 auto", display: "block"}}
          >
            {term
              ? term.term
              : "Select Medical Term"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder="Search framework..."
              onChange={(e) => {
                setValue(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup  style={{overflowY: "scroll", maxHeight: "300px" }}>
              {searchResults.map((framework) => (
                <CommandItem
                  key={framework.term}
                  value={framework.term}
                  onSelect={handleSelect} item={framework}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.term ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.term}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Display the selected value */}
      {/* <p>You selected: {selectedValue}</p> */}
      {<div style={{backgroundColor: "rgb(251, 255, 219)", margin: "0 5%", padding: "15px", display: "block", borderRadius: "20px", border: "solid 0.5px"}}>
        <p>Category: {term?.category}</p><br />
        <p>Term: {term?.term}</p><br />
        <p>Definition: {term?.definition}</p><br />
        <p>Layman Terms: {term?.laymanTerm}</p><br />
        <p>Normal Range: {term?.normalRange}</p><br />
        <p>Details: {term?.details}</p>
      </div>}

    </div>
  );
}