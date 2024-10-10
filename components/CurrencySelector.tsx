"use client";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";

type Currency = {
  code: string;
  country: string;
};

const currencies: Currency[] = [
  {
    code: "PKR",
    country: "Pakistan",
  },
  {
    code: "USD",
    country: "United States",
  },
  {
    code: "BTC",
    country: "Bitcoin",
  },
];

export default function CurrencySelector() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useWindowDimensions().width >= 768 ? true : false;
  const [selectedCurrency, setSelectedCurrency] =
    React.useState<Currency | null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedCurrency ? (
              <>{selectedCurrency.code + " - " + selectedCurrency.country}</>
            ) : (
              <>Select currency</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <CurrencyList
            setOpen={setOpen}
            setSelectedCurrency={setSelectedCurrency}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedCurrency ? (
            <>{selectedCurrency.code + " - " + selectedCurrency.country}</>
          ) : (
            <>Select currency</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CurrencyList
            setOpen={setOpen}
            setSelectedCurrency={setSelectedCurrency}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CurrencyList({
  setOpen,
  setSelectedCurrency,
}: {
  setOpen: (open: boolean) => void;
  setSelectedCurrency: (currency: Currency | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter currency..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {currencies.map((currency) => (
            <CommandItem
              key={currency.code}
              value={currency.code}
              onSelect={(value) => {
                setSelectedCurrency(
                  currencies.find((currency) => currency.code === value) || null
                );
                setOpen(false);
              }}
            >
              {currency.code + " - " + currency.country}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

function useWindowDimensions() {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
