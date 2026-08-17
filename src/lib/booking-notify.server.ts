export type BookingPayload = {
  navn: string;
  email: string;
  telefon: string;
  adresse: string;
  postnummer: string;
  stoerrelse: string;
  etager: string;
  badevaerelser: string;
  besked: string;
  service: string;
  frequency: string;
  addons: Record<string, string>;
};

export const NOTIFY_RECIPIENT = "kontakt@stillehome.dk";

// Sends the internal notification to STILLE. A failure here must never break
// the visitor's submission — the request is already stored.
export async function notifyBookingRequest(
  data: BookingPayload,
  idempotencyKey?: string,
): Promise<boolean> {
  try {
    const { sendTemplateEmail } = await import("./email-templates/send-email");
    const result = await sendTemplateEmail("booking-request", NOTIFY_RECIPIENT, {
      templateData: { ...data },
      ...(idempotencyKey ? { idempotencyKey: `booking-request-${idempotencyKey}` } : {}),
      replyTo: data.email,
    });
    return result.sent;
  } catch (error) {
    console.error("Booking notification failed", error);
    return false;
  }
}
