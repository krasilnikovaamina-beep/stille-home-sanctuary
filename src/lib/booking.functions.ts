import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  navn: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  telefon: z.string().trim().max(40).optional().default(""),
  adresse: z.string().trim().max(160).optional().default(""),
  postnummer: z.string().trim().max(10).optional().default(""),
  stoerrelse: z.string().trim().max(10).optional().default(""),
  etager: z.string().trim().max(4).optional().default(""),
  badevaerelser: z.string().trim().max(4).optional().default(""),
  besked: z.string().trim().max(1000).optional().default(""),
  service: z.string().trim().max(80).optional().default(""),
  frequency: z.string().trim().max(80).optional().default(""),
  addons: z.record(z.string().max(80), z.string().max(80)).default({}),
});

export type BookingInput = z.input<typeof schema>;

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: inserted, error } = await supabaseAdmin.from("booking_requests").insert({
      navn: data.navn,
      email: data.email,
      telefon: data.telefon,
      adresse: data.adresse,
      postnummer: data.postnummer,
      stoerrelse: data.stoerrelse,
      etager: data.etager,
      badevaerelser: data.badevaerelser,
      besked: data.besked,
      service: data.service,
      frequency: data.frequency,
      addons: data.addons,
    }).select("id").single();
    if (error) throw new Error(`Kunne ikke gemme forespørgslen: ${error.message}`);

    const { notifyBookingRequest } = await import("./booking-notify.server");
    const notified = await notifyBookingRequest(data, inserted?.id);
    return { ok: true as const, notified };
  });
