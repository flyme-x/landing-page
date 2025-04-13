"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const MotionBadge = motion.create(Badge);

export function Hero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -top-24 size-full opacity-80 overflow-hidden -z-10">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-radial-[at_50%_25%] from-foreground/10 via-foreground/5 via-20% to-80% to-transparent" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full [translate:5%_-50%] bg-radial-[at_50%_25%] from-foreground/10 via-foreground/5 via-20% to-80% to-transparent" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-radial-[at_50%_25%] from-foreground/10 via-foreground/5 via-20% to-80% to-transparent" />
        <div className="hidden md:block w-140 h-320 -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-radial-[at_50%_25%] from-foreground/10 via-foreground/5 via-20% to-80% to-transparent" />
        <div className="hidden md:block h-320 absolute right-0 top-0 w-60 rotate-45 rounded-full [translate:-5%_-50%] bg-radial-[at_50%_25%] from-foreground/10 via-foreground/5 via-20% to-80% to-transparent" />
        <div className="hidden md:block h-320 -translate-y-87.5 absolute right-0 top-0 w-60 rotate-45 bg-radial-[at_50%_25%] from-foreground/10 via-foreground/5 via-20% to-80% to-transparent" />
      </div>
      <div className="container flex flex-col gap-6 items-center">
        <MotionBadge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 text-primary gap-2 pl-0.5"
        >
          <Badge className="text-xs font-medium rounded-sm">New</Badge>
          Coming Soon
          <Icon icon="lucide:chevron-right" className="size-4" />
        </MotionBadge>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance text-center"
        >
          From Inspiration to Itinerary: Your Next Adventure Starts Here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl text-balance text-center"
        >
          Transform your social media travel inspiration into bookable trips. Discover, plan, and
          book your next adventure with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.30000000000000004 }}
          viewport={{ once: true }}
        >
          <Button variant="default" size="default">
            Join the Waitlist
          </Button>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
          viewport={{ once: true }}
          src="/images/placeholder.png"
          className="rounded-md mt-4 max-w-4xl w-full"
        ></motion.img>
      </div>
    </section>
  );
}
