import DrawOnView from "@/components/DrawOnView";
import { timeline } from "@/lib/site";

export default function Timeline() {
  return (
    <DrawOnView className="timeline">
      <ol className="relative space-y-8 border-l-0 pl-8">
        <span className="timeline-rule" aria-hidden />
        {timeline.map((event) => (
          <li key={event.year} className="relative">
            <span className="absolute -left-8 top-1 h-3 w-3 border border-brand bg-paper" aria-hidden />
            <p className="font-display text-3xl font-semibold text-brand">{event.year}</p>
            <p className="mt-2 max-w-xl text-base leading-relaxed">{event.text}</p>
          </li>
        ))}
      </ol>
    </DrawOnView>
  );
}
