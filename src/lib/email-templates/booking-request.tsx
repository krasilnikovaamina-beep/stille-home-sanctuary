import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  navn?: string
  email?: string
  telefon?: string
  adresse?: string
  postnummer?: string
  stoerrelse?: string
  etager?: string
  badevaerelser?: string
  besked?: string
  service?: string
  frequency?: string
  addons?: Record<string, string>
}

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '32px 28px', maxWidth: '580px' }
const heading = { fontSize: '26px', fontWeight: 400 as const, color: '#1a1a18', margin: '0 0 4px' }
const eyebrow = {
  fontSize: '10px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: '#8a8783',
  fontFamily: 'Helvetica, Arial, sans-serif',
  margin: '0 0 20px',
}
const label = {
  fontSize: '10px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#8a8783',
  fontFamily: 'Helvetica, Arial, sans-serif',
  margin: '0 0 2px',
}
const value = { fontSize: '15px', color: '#1a1a18', margin: '0 0 16px', lineHeight: '1.6' }
const hr = { borderColor: '#e6e3de', margin: '24px 0' }

function Field({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <Section>
      <Text style={label}>{name}</Text>
      <Text style={value}>{children}</Text>
    </Section>
  )
}

const Email = ({
  navn,
  email,
  telefon,
  adresse,
  postnummer,
  stoerrelse,
  etager,
  badevaerelser,
  besked,
  service,
  frequency,
  addons = {},
}: Props) => {
  const addonEntries = Object.entries(addons)
  return (
    <Html lang="da" dir="ltr">
      <Head />
      <Preview>{`Ny forespørgsel fra ${navn || 'kunde'}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>STILLE</Text>
          <Heading style={heading}>Ny forespørgsel</Heading>
          <Hr style={hr} />
          <Field name="Navn">{navn || '—'}</Field>
          <Field name="E-mail">{email || '—'}</Field>
          <Field name="Telefon">{telefon || '—'}</Field>
          <Hr style={hr} />
          <Field name="Service">{service || '—'}</Field>
          <Field name="Fast frekvens">{frequency || '—'}</Field>
          <Field name="Tilvalg">
            {addonEntries.length
              ? addonEntries.map(([n, f]) => `${n} — ${f}`).join(' · ')
              : 'Ingen tilvalg valgt'}
          </Field>
          <Hr style={hr} />
          <Field name="Adresse">{[adresse, postnummer].filter(Boolean).join(', ') || '—'}</Field>
          <Field name="Størrelse">{stoerrelse ? `${stoerrelse} m²` : '—'}</Field>
          <Field name="Etager">{etager || '—'}</Field>
          <Field name="Badeværelser">{badevaerelser || '—'}</Field>
          <Hr style={hr} />
          <Field name="Besked">{besked || '—'}</Field>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Ny forespørgsel — ${data['navn'] || 'kunde'}${data['service'] ? ` · ${data['service']}` : ''}`,
  displayName: 'Booking-forespørgsel (intern)',
  to: 'kontakt@stillehome.dk',
  previewData: {
    navn: 'Sofie Lindberg',
    email: 'sofie@example.dk',
    telefon: '+45 20 12 34 56',
    adresse: 'Strandvejen 12',
    postnummer: '2900',
    stoerrelse: '180',
    etager: '2',
    badevaerelser: '2',
    besked: 'Vi har to katte og foretrækker formiddage.',
    service: 'STILLE Signature',
    frequency: 'Hver 14. dag',
    addons: { Vinduespudsning: 'Hver måned', Tøjvask: 'Hver uge' },
  },
} satisfies TemplateEntry