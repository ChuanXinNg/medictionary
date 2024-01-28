"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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

import { MedicalTerms } from "../../app/data"

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(MedicalTerms);

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
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? MedicalTerms.find((framework) => framework.term === value)?.term
              : "Select framework..."}
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
            <CommandGroup>
              {searchResults.map((framework) => (
                <CommandItem
                  key={framework.term}
                  value={
                    `Category: ${framework.category}\n`
                    + `Definition: ${framework.definition}\n`
                  }
                  onSelect={handleSelect}
                >
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
      <p>You selected: {selectedValue}</p>
    </div>
  );
}