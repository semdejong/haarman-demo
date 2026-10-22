"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

type Variant = "grid" | "strip" | "feature";

export default function Gallery({
  photos,
  variant = "grid",
  priority = false,
}: {
  photos: Photo[];
  variant?: Variant;
  priority?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef(0);
  const current = active === null ? null : photos[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setActive(null);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  function step(delta: number) {
    setActive((index) => {
      if (index === null) return index;
      return (index + delta + photos.length) % photos.length;
    });
  }

  const listClass =
    variant === "strip"
      ? "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
      : variant === "feature"
        ? "max-w-[900px]"
        : "columns-1 gap-4 sm:columns-2 lg:columns-3";

  return (
    <>
      <ul className={listClass}>
        {photos.map((photo, index) => (
          <li
            key={photo.src}
            className={
              variant === "strip"
                ? "w-[82vw] max-w-[420px] shrink-0 snap-start"
                : variant === "feature"
                  ? "max-w-[900px]"
                  : "gallery-card mb-4 break-inside-avoid"
            }
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className="mount block w-full text-left"
            >
              <span className={`mount-media block ${variant === "strip" ? "relative aspect-[4/3]" : ""}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  priority={priority && index === 0}
                  sizes={
                    variant === "feature"
                      ? "(max-width: 900px) 100vw, 900px"
                      : "(max-width: 640px) 86vw, (max-width: 1024px) 46vw, 380px"
                  }
                  className={
                    variant === "strip"
                      ? "absolute inset-0 h-full w-full max-w-none object-cover"
                      : "h-auto w-full"
                  }
                />
                <span className="tone" />
              </span>
              <span className="mt-2 block px-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                {photo.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Foto vergroot"
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(event) => {
          touchX.current = event.changedTouches[0]?.clientX ?? 0;
        }}
        onTouchEnd={(event) => {
          const end = event.changedTouches[0]?.clientX ?? 0;
          const delta = end - touchX.current;
          if (delta > 48) step(-1);
          if (delta < -48) step(1);
        }}
      >
        {current ? (
          <div className="flex max-h-[calc(100vh-1.5rem)] flex-col">
            <div className="flex items-center justify-between gap-3 px-3 py-2">
              <p className="font-display text-sm uppercase tracking-[0.14em] text-straw">{current.caption}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex min-h-11 items-center px-3 font-display text-sm uppercase tracking-wide"
              >
                Sluiten
              </button>
            </div>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="(max-width: 900px) 100vw, 900px"
              className="mx-auto h-auto max-h-[68vh] w-auto max-w-full"
              style={{ maxWidth: 900 }}
            />
            <p className="px-4 py-3 text-sm leading-relaxed text-paper/90">{current.alt}</p>
            {photos.length > 1 ? (
              <div className="flex gap-2 px-3 pb-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex min-h-11 flex-1 items-center justify-center border border-white/30 font-display text-sm uppercase tracking-wide"
                >
                  Vorige
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex min-h-11 flex-1 items-center justify-center bg-white font-display text-sm uppercase tracking-wide text-ink"
                >
                  Volgende
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
