import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FAQItem, Testimonial } from "@/lib/site-data";
import { SITE_LINKS } from "@/lib/site-data";

const categories: FAQItem["category"][] = [
  "Newcomers & Intro Sessions",
  "Training & Scaling",
  "TrainTrack App & Memberships",
];

export function StoriesFaq({
  stories,
  faqs,
}: {
  stories: Testimonial[];
  faqs: FAQItem[];
}) {
  return (
    <section id="faq" className="scroll-mt-32 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
          Member stories
        </p>
        <h2 className="mt-3 text-3xl sm:text-5xl">The floor, in their words</h2>
        <div className="mt-10 grid gap-px border border-zinc-800 bg-zinc-800 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.id} className="bg-[#121316] p-6 sm:p-8">
              <p className="font-heading text-[11px] tracking-[0.18em] text-primary">
                {story.highlight}
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">&ldquo;{story.quote}&rdquo;</p>
              <p className="mt-6 font-heading text-sm tracking-[0.12em]">{story.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                {story.tenure}
              </p>
            </article>
          ))}
        </div>

        <h2 className="mt-20 text-3xl sm:text-5xl">Questions. Straight answers.</h2>
        <div className="mt-10 space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 font-heading text-sm tracking-[0.2em] text-primary">
                {category}
              </h3>
              <Accordion className="border border-zinc-800 px-4">
                {faqs
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-zinc-800">
                      <AccordionTrigger className="py-4 font-heading text-left text-sm uppercase tracking-[0.08em] hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-sm leading-7 text-zinc-400">
                        {item.htmlAnswer ? (
                          <p
                            dangerouslySetInnerHTML={{ __html: item.htmlAnswer }}
                          />
                        ) : (
                          item.answer
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
