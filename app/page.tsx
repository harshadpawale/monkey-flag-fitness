import { CoachesSection } from "@/components/sections/coaches";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OwnersCorner } from "@/components/sections/owners-corner";
import { Pillars } from "@/components/sections/pillars";
import { StoriesFaq } from "@/components/sections/stories-faq";
import { Timetable } from "@/components/sections/timetable";
import { TrainTrack } from "@/components/sections/traintrack";
import { coaches, events, faqs, ownerPosts, schedule, testimonials } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <HowItWorks />
      <CoachesSection coaches={coaches} />
      <Timetable days={schedule} />
      <OwnersCorner events={events} posts={ownerPosts} />
      <TrainTrack />
      <StoriesFaq stories={testimonials} faqs={faqs} />
    </>
  );
}
