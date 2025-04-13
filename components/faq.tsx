"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

export function Faq() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-10 md:flex-row items-start">
        <div className="flex flex-col flex-1 items-start gap-6 max-w-96">
          <div className="flex flex-col gap-3 items-start">
            <Badge className="gap-1.5 bg-primary/10 text-primary">FAQ</Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.
          </p>
          <div>
            <Button variant="default" size="default">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start gap-6 w-full">
          <Accordion collapsible type="single" className="flex flex-col gap-4 w-full">
            <Card className="shadow-none py-0">
              <CardContent className="px-0">
                <AccordionItem value="DmoqiQ4TEac" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline items-center p-6">
                    <span className="font-semibold text-base">Is FlyMe an agency?</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className="size-4 transition-transform duration-200"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-base">
                      Nope. We’re not here to sell you random packages. FlyMe is a planning and
                      discovery tool that helps you recreate the trips you see online — with easy
                      booking links from trusted platforms.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="shadow-none py-0">
              <CardContent className="px-0">
                <AccordionItem value="iKXUSqB8cBd" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline items-center p-6">
                    <span className="font-semibold text-base">What’s inside a FlyMe itinerary</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className="size-4 transition-transform duration-200"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-base">
                      A full day-by-day breakdown Hotel suggestions Flights (based on your location
                      & dates) Must-visit attractions A map and booking links And yes — you can edit
                      anything.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="shadow-none py-0">
              <CardContent className="px-0">
                <AccordionItem value="KsTQCuTOSSu" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline items-center p-6">
                    <span className="font-semibold text-base">Do I have to pay to use FlyMe?</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className="size-4 transition-transform duration-200"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-base">
                      No! Browsing and copying trips is free. We may add optional premium features
                      in the future (like custom planning or VIP upgrades), but the core platform
                      will always be free to explore.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="shadow-none py-0">
              <CardContent className="px-0">
                <AccordionItem value="ZEHsQX3wFOY" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline items-center p-6">
                    <span className="font-semibold text-base">Can I trust the trip plans?</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className="size-4 transition-transform duration-200"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-base">
                      Yes. Many of our itineraries are created by real travelers or locals, and
                      marked with trust badges. Plus, you can see ratings, notes, and feedback from
                      the FlyMe community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="shadow-none py-0">
              <CardContent className="px-0">
                <AccordionItem value="hP0OpFxqwsx" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline items-center p-6">
                    <span className="font-semibold text-base">
                      I’m a creator — do I need to build the itinerary myself?
                    </span>
                    <Icon
                      icon="lucide:chevron-down"
                      className="size-4 transition-transform duration-200"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-base">
                      Nope! Just send us your video or outline, and we’ll help build the trip for
                      you (especially during early access). You’ll get your own trip page to share
                      and start earning.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
