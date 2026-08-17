type BookingPayload = {
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

// Sends the internal notification to STILLE. Returns false (without failing the
// submission) while the sender domain is still being verified.
export async function notifyBookingRequest(data: BookingPayload): Promise<boolean> {
  try {
    const { sendTemplateEmail } = await import("./email-templates/send-email");
    const result = await sendTemplateEmail("booking-request", "kontakt@stillehome.dk", {
      templateData: data,
    });
    return result.sent;
  } catch (error) {
    console.error("Booking notification failed", error);
    return false;
  }
}
