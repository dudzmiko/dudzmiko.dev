'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';

export function LanguageToggle() {
    const [isPending, setIsPending] = useState(false);
    const [currentLocale, setCurrentLocale] = useState<Locale>('en');

    useEffect(() => {
        const cookieLocale = document.cookie.includes('NEXT_LOCALE=pl') ? 'pl' : 'en';
        setCurrentLocale(cookieLocale as Locale);
    }, []);

    const toggleLanguage = async () => {
        setIsPending(true);

        const newLocale: Locale = currentLocale === 'pl' ? 'en' : 'pl';
        await setUserLocale(newLocale);
        setCurrentLocale(newLocale);

        setIsPending(false);
    };

    return (
        <Button
            variant='outline'
            className='size-10 bg-transparent p-0 text-muted-foreground transition-colors duration-200 hover:text-foreground'
            onClick={toggleLanguage}
            disabled={isPending}
        >
            {currentLocale === 'en' ? (
                <Icons.PL className='size-[1.5rem]' />
            ) : (
                <Icons.UK className='size-[1.5rem]' />
            )}
            <span className='sr-only'>Toggle language</span>
        </Button>
    );
}
