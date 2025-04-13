"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative py-36">
      <div className="container flex flex-col gap-6 items-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
          Ready to Turn Inspiration Into Reality?
        </h2>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Whether you’re a dreamer, traveler, or content creator — FlyMe gives you the tools to
          travel like the people you follow.
        </p>
        <form className="flex gap-2">
          <Input
            placeholder="Enter your email to get notified"
            className="bg-secondary border-none min-w-54"
          />
          <Button variant="default" size="default">
            Join the Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
}
