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

// Sends the internal notification to STILLE. Email sending activates once the
// sender domain is verified; until then the request is stored and this returns false.
export async function notifyBookingRequest(data: BookingPayload): Promise<boolean> {
  console.log("Booking request received", { email: data.email, service: data.service });
  return false;
}
