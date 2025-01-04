import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function AppSideBar({ children }: { children: React.ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent side="left" className="space-y-3">
                <SheetHeader>
                    <SheetTitle className="text-2xl text-start">Stack AI</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                    {["Home", "About", "Contact"].map((item, index) => (
                        <Button key={index} variant="ghost" className="justify-start">{item}</Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
