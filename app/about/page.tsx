import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-3/4 md:1/2 mx-auto my-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        baserency
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome to the Currency Converter! This project is a simple tool
        designed to help you convert currencies effortlessly. Built with{" "}
        <strong>Next.js</strong> and styled using <strong>ShadCN</strong>, it is
        fast, responsive, and user-friendly.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Tech stack
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <strong>Next.js:</strong> A React framework that enables server-side
          rendering and static site generation for optimal performance.
        </li>
        <li>
          <strong>ShadCN:</strong> A modern styling library that provides a
          clean and minimalistic design.
        </li>
        <li>
          <strong>Cloudflare:</strong> Hosting the application to ensure fast
          loading times and reliability.
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        How It Works
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The currency converter fetches real-time exchange rates and allows users
        to convert between different currencies with ease. Just enter the
        amount, select the currencies, and get instant results!
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        License
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This project is open-source and licensed under the{" "}
        <strong>MIT License</strong>. Feel free to use, modify, and distribute
        the code.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Future Improvements
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We plan to add more features in the future, including:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Support for more currencies.</li>
        <li>User accounts for saving favorite currencies.</li>
        <li>Historical exchange rate charts.</li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Feedback and Contributions
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We welcome feedback and contributions! If you have suggestions or would
        like to contribute, please checkout our{" "}
        <Button variant="link" className="p-0" asChild>
          <Link href="https://github.com/hammadmajid/baserency">GitHub</Link>
        </Button>
        .
      </p>
    </main>
  );
}
