import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CatalogSidebar from "./CatalogSidebar";
import { FilterIcon } from "lucide-react";

export function DrawerDemo() {
  return (
    <Drawer closeThreshold={3}>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          className="w-full flex items-center gap-x-1 font-bold text-[16px]"
        >
          <FilterIcon /> Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full">
          <CatalogSidebar />
        </div>
      <DrawerClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
