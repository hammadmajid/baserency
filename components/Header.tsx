"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Github, Moon, Sun} from "lucide-react";
import * as React from "react"
import {useTheme} from "next-themes"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

function ModeToggle() {
    const {setTheme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function Header() {
    return (
        <header className="flex justify-between items-center p-6 md:w-3/4 xl:w-1/2 md:mx-auto">
            <Link href="/" className="font-semibold text-lg">baserency</Link>
            <div className="flex justify-center items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/hammadmajid/baserency" target="_blank">
                        <Github/>
                    </Link>
                </Button>
                <ModeToggle/>
            </div>
        </header>
    )
}