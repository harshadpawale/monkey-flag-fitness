"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ClassScheduleDay } from "@/lib/site-data";

export function Timetable({ days }: { days: ClassScheduleDay[] }) {
  return (
    <section id="timetable" className="scroll-mt-32 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
          Weekly class timetable
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl">
          Sixty minutes. Find a slot that fits the work week.
        </h2>
        <Tabs defaultValue={days[0]?.id} className="mt-10 gap-6">
          <TabsList
            variant="line"
            className="h-auto w-full flex-wrap justify-start gap-0 rounded-none border-b border-zinc-800 p-0"
          >
            {days.map((day) => (
              <TabsTrigger
                key={day.id}
                value={day.id}
                className="rounded-none px-4 py-3 font-heading text-xs uppercase tracking-[0.16em] data-active:text-primary"
              >
                {day.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((day) => (
            <TabsContent key={day.id} value={day.id}>
              <p className="mb-6 text-sm text-zinc-400">{day.subtitle}</p>
              <div className="border border-zinc-800">
                {day.slots.map((slot) => (
                  <div
                    key={`${day.id}-${slot.time}-${slot.name}`}
                    className="grid grid-cols-[88px_1fr_auto] items-center gap-4 border-b border-zinc-800 px-4 py-4 last:border-b-0 sm:grid-cols-[120px_1fr_auto] sm:px-6"
                  >
                    <span className="font-heading text-lg tracking-wide text-primary">
                      {slot.time}
                    </span>
                    <div>
                      <p className="font-heading text-base uppercase tracking-[0.08em]">
                        {slot.name}
                      </p>
                      {slot.notes ? (
                        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                          {slot.notes}
                        </p>
                      ) : null}
                    </div>
                    <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {slot.duration}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
