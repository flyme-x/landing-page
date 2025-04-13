"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.png";

export function Features() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-col flex-1 items-start gap-6">
          <div className="flex flex-col gap-3 items-start">
            <Badge className="gap-1.5 bg-primary/10 text-primary">Features</Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
              Discover, Plan, and Book Your Adventure
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xl">
            Transform your travel inspiration into reality with FlyMe. Discover real trips from
            influencers, copy itineraries as smart templates, and book everything with pre-filled
            links.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Explore authentic travel experiences shared by influencers and fellow travelers.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Copy itineraries as smart templates and customize them to fit your travel style.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Book flights, hotels, and activities with pre-filled links, saving you time and
                effort.
              </p>
            </div>
          </div>
          <div>
            <Button variant="default" size="default">
              Coming soon
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}
