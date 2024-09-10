import { ThemeProvider } from '@/components/theme-provider'
import { CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import { HighlightInit } from '@highlight-run/next/client'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Contact from '@/components/contact'

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    metadataBase: new URL(CONFIG.siteUrl),
    title: {
        default: CONFIG.name,
        template: `${CONFIG.name} | %s`,
    },
    description: CONFIG.descriptionRaw,
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale();

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <>
            {process.env.NODE_ENV === 'production' && (
                <HighlightInit
                    projectId={'ng2wmv0g'}
                    serviceName='my-nextjs-frontend'
                    tracingOrigins
                    networkRecording={{
                        enabled: true,
                        recordHeadersAndBody: true,
                        urlBlocklist: [],
                    }}
                />
            )}
            <html lang={locale} suppressHydrationWarning>
                <body
                    className={cn(
                        'min-h-screen bg-background from-[#43434330] via-[#32323230] via-25% font-sans antialiased dark:bg-gradient-to-b',
                        fontSans.variable
                    )}
                >
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <NextIntlClientProvider messages={messages}>
                            <main className='mx-auto max-w-2xl py-4 md:pt-10'>
                                {children}
                                <Contact />
                            </main>
                        </NextIntlClientProvider>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
