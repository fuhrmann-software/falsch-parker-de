'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SocialButton } from '@/components/buttons/socialButton';
import { AppButton } from '@/components/buttons/appButton';
import { Apple } from '@/components/icons/apple';
import { Android } from '@/components/icons/android';
import { ScrollToTopButton } from '@/components/buttons/scrollToTopButton';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';
import { socials } from '@/components/footer/socials';
import { DesktopLinks } from '@/components/footer/components/desktop/desktopLinks';
import { MobileLinks } from '@/components/footer/components/mobile/mobileLinks';
import styles from './styles.module.scss';

const Footer = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const router = useRouter();
  const goToContactUs = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className='flex gap-20 max-lg:contents'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <span className='text-6xl max-lg:text-4xl'>
                Mehr Falschparker <br /> auf Ihren Parkplätzen?
              </span>
              <span className='text-xl font-light opacity-50 max-lg:text-base'>
                Wir sind hier, um Ihnen bei der Lösung des Problems zu helfen
              </span>
            </div>
            <ArrowDotButton theme='light' onClick={goToContactUs}>
              Kontaktieren Sie uns
            </ArrowDotButton>
            <div className='contents max-lg:hidden'>
              <div className='flex flex-col gap-1'>
                <span className='text-xl font-light opacity-50'>
                  Oder rufen Sie uns einfach an.
                </span>
                <Link
                  href='tel:+41 44 123 45 67'
                  className='w-fit text-2xl transition duration-300 hover:opacity-50'>
                  +41 76 561 88 37
                </Link>
              </div>
              <div className='flex gap-2'>
                {socials.map((social) => (
                  <SocialButton
                    key={social.link}
                    href={social.link}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <DesktopLinks lang={lang} />
            <MobileLinks lang={lang} />
          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-between font-light max-lg:grid-cols-1 max-lg:flex-col max-lg:place-items-stretch max-lg:gap-2'>
          <div className='flex flex-col items-center gap-2 lg:hidden'>
            <AppButton icon={Apple}>App Store</AppButton>
            <AppButton icon={Android}>Google Play</AppButton>
          </div>
          <span className='text-sm opacity-50 max-lg:mt-4 max-lg:text-center max-lg:text-xs'>
            Copyright © 2024 | All rights reserved
          </span>
          <div className='justify-self-end max-lg:hidden'>
            <ScrollToTopButton onClick={scrollToTop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
