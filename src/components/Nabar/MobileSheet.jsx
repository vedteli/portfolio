import { Button } from "@/components/ui/button"
import { HamburgerIcon } from "lucide-react"
import "./MobileSheet.css"

import {  
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription } 
from "@/components/ui/sheet"

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-menu-icon lucide-menu">
            <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
        </svg>
      </SheetTrigger>

      <SheetContent className='sheet-bg-color'>
        <SheetHeader>
          <SheetTitle>
            this is title
          </SheetTitle>
          <SheetDescription>
            this is description
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter>
          <SheetClose>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}