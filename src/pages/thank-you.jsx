import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Newsletter - Centro Ippico Falcone</title>
        <meta
          name="description"
          content="Grazie per aver sottoscritto la nostra newsletter"
        />
      </Head>
      <SimpleLayout
        title="Grazie per aver sottoscritto la nostra newsletter"
        intro="Riceverai una email quando pubblicheremo nuovi contenuti"
      />
    </>
  )
}
