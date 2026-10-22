import { OfferteLink, PhoneLink } from "@/components/Buttons";

export default function MobileBar() {
  return (
    <div
      data-section="bel-balk"
      className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-white/10 bg-brand p-2 md:hidden"
    >
      <PhoneLink variant="light" compact className="flex-1">
        Bel 0573 - 431400
      </PhoneLink>
      <OfferteLink variant="light" compact className="flex-1">
        Werkopname aanvragen
      </OfferteLink>
    </div>
  );
}
