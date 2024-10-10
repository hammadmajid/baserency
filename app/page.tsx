import {Button} from "@/components/ui/button"
import Link from "next/link";
import {ArrowRight, Info} from 'lucide-react';
import * as React from "react";

export default function Home() {
    return (
        <main className=" mx-auto w-3/4 md:w-1/2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                baserency
            </h1>
            <p className="text-foreground leading-7 [&:not(:first-child)]:mt-2">A minimal currency converter made with NextJs</p>
            <div className="flex gap-2 mt-12">
                <Button asChild>
                    <Link href="/converter">
                        Get started
                        <ArrowRight className="ml-1 w-5"/>
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link href="/about">
                        <Info/>
                    </Link>
                </Button>
            </div>
        </main>
    );
}
