/**
 * @file MenuFunctions.tsx
 * @fileoverview This file contains the menu items and their icons.
 */

import {
  homeOutline, homeSharp, helpCircleOutline, helpCircleSharp,
  sendOutline, sendSharp, lockClosedOutline, lockClosedSharp,
  documentTextOutline, documentTextSharp,
  logoAppleAppstore, logoGooglePlaystore,
  closeCircleOutline, helpOutline, closeCircleSharp
} from 'ionicons/icons';


export interface AppPage {
  title: string;
  url: string;
  iosIcon: string;
  mdIcon: string;
  redirect?: true;
  lineBreak?: true;
};

export const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'About',
    url: '/about',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp
  },
  {
    title: 'Contact Us',
    url: '/contact',
    iosIcon: sendOutline,
    mdIcon: sendSharp,
    lineBreak: true,
  },
  {
    title: 'Privacy Policy',
    url: '/privacy-policy',
    iosIcon: lockClosedOutline,
    mdIcon: lockClosedSharp,
  },
  {
    title: 'Terms & Conditions',
    url: '/terms-and-conditions',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp,
    lineBreak: true,
  },
  {
    title: 'Delete tellU Account',
    url: '/delete-account',
    iosIcon: closeCircleOutline,
    mdIcon: closeCircleSharp,
  },
  {
    title: 'Forgot Password',
    url: '/forgot-password',
    iosIcon: helpOutline,
    mdIcon: helpCircleSharp,
    lineBreak: true,
  },
  {
    title: 'iOS App Store',
    url: 'https://apps.apple.com/us/app/tellu/id6443764288?ign-itscg=30200&ign-itsct=apps_box_link',
    iosIcon: logoAppleAppstore,
    mdIcon: logoAppleAppstore,
    redirect: true
  },
  {
    title: 'Google Play Store',
    url: 'https://play.google.com/store/apps/details?id=com.tellU.v3.quantum',
    iosIcon: logoGooglePlaystore,
    mdIcon: logoGooglePlaystore,
    redirect: true
  }
];
