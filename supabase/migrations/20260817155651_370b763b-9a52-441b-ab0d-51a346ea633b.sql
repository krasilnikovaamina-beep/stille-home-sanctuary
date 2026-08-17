CREATE TABLE public.booking_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  navn text NOT NULL,
  email text NOT NULL,
  telefon text,
  adresse text,
  postnummer text,
  stoerrelse text,
  etager text,
  badevaerelser text,
  service text,
  frequency text,
  addons jsonb NOT NULL DEFAULT '{}'::jsonb,
  besked text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.booking_requests TO service_role;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;