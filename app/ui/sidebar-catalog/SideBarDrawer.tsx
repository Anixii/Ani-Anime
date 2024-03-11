import * as React from "react" 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import CatalogSidebar from "./CatalogSidebar"

 
export function DrawerDemo() {

 
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full">
            <CatalogSidebar/>
        </div>
      </DrawerContent>
    </Drawer>
  )
}