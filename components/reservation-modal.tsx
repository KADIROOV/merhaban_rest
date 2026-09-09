"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2 } from "lucide-react";

export function ReservationModal({ trigger }: { trigger: React.ReactNode }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setTimeout(() => setSubmitted(false), 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <CheckCircle2 className="h-10 w-10 text-ember" />
            <DialogTitle>{t.reservation.title}</DialogTitle>
            <DialogDescription>{t.reservation.submitNote}</DialogDescription>
            <Button variant="outline" onClick={() => handleOpenChange(false)}>
              {t.reservation.close}
            </Button>
          </div>
        ) : (
          <>
            <DialogTitle className="mb-1">{t.reservation.title}</DialogTitle>
            <div className="hairline w-16 mb-6" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label={t.reservation.name}>
                <input
                  required
                  type="text"
                  autoComplete="name"
                  className="w-full bg-transparent border border-hairline/50 focus:border-ember px-3 py-2.5 text-sm outline-none transition-colors"
                />
              </Field>
              <Field label={t.reservation.phone}>
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="+998 __ ___ __ __"
                  className="w-full bg-transparent border border-hairline/50 focus:border-ember px-3 py-2.5 text-sm outline-none transition-colors"
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label={t.reservation.date}>
                  <input
                    required
                    type="date"
                    className="w-full bg-transparent border border-hairline/50 focus:border-ember px-3 py-2.5 text-sm outline-none transition-colors"
                  />
                </Field>
                <Field label={t.reservation.time}>
                  <input
                    required
                    type="time"
                    className="w-full bg-transparent border border-hairline/50 focus:border-ember px-3 py-2.5 text-sm outline-none transition-colors"
                  />
                </Field>
              </div>
              <Field label={t.reservation.guests}>
                <input
                  required
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={2}
                  className="w-full bg-transparent border border-hairline/50 focus:border-ember px-3 py-2.5 text-sm outline-none transition-colors"
                />
              </Field>
              <Button type="submit" className="mt-2 w-full">
                {t.reservation.submit}
              </Button>
              <p className="text-xs text-text-muted text-center">
                {t.reservation.submitNote}
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-menu text-text-muted font-display">
        {label}
      </span>
      {children}
    </label>
  );
}
