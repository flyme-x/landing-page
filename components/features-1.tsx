"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import placeholder from "@/public/images/placeholder.png";

export function Features1() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
        </div>
        <div className="flex flex-col flex-1 items-start gap-6">
          <div className="flex flex-col gap-3 items-start">
            <Badge className="gap-1.5 bg-primary/10 text-primary">Features</Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
              Your All-in-One Travel Companion
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xl">
            FlyMe simplifies travel planning by transforming social media inspiration into bookable
            trips. Discover, plan, and book your next adventure with ease.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Discover travel inspiration from your favorite social media platforms.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Create and customize your perfect itinerary with our easy-to-use planning tools.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Book flights, hotels, and activities directly through FlyMe.
              </p>
            </div>
          </div>
          <div>
            <Button variant="default" size="default">
              Coming soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
