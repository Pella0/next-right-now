import { isBrowser } from '@unly/utils';
import NextHead from 'next/head';
import React from 'react';

import { NRN_DEFAULT_SERVICE_LABEL } from '../../constants';
import { I18nLocale } from '../../types/I18nLocale';
import { SUPPORTED_LOCALES } from '../../utils/i18n';

export type HeadProps = {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  favicon?: string;
  additionalContent?: React.ReactElement;
}

/**
 * Custom Head component
 *
 * https://github.com/zeit/next.js#populating-head
 */
const Head: React.FunctionComponent<HeadProps> = (props): JSX.Element => {
  const defaultDescription = 'Flexible production-grade boilerplate with Next.js 9, Zeit and TypeScript. Includes multiple opt-in presets using GraphQL, Analytics, CSS-in-JS, Monitoring, End-to-end testing, Internationalization, CI/CD and B2B multiple single-tenants (monorepo) support';
  const defaultOGURL = 'https://github.com/UnlyEd/next-right-now';
  const defaultOGImage = 'https://storage.googleapis.com/the-funding-place/assets/images/Logo_TFP_quadri_horizontal.svg';
  const defaultFavicon = 'https://storage.googleapis.com/the-funding-place/assets/images/default_favicon.ico';

  const {
    title = NRN_DEFAULT_SERVICE_LABEL,
    description = defaultDescription,
    ogImage = defaultOGURL,
    url = defaultOGImage,
    favicon = defaultFavicon,
    additionalContent,
  } = props;

  if (isBrowser()) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const WebFontLoader = require('webfontloader');

    // Load our fonts. Until they're loaded, their fallback fonts will be used
    // This fixed an issue when loading fonts from external sources that don't show the text until the font is loaded
    // With this, instead of not showing any text, it'll show the text using its fallback font, and then show the font once loaded
    // Note that we must load the font file synchronously to avoid a FOUT effect (see <link> below)
    // XXX See https://www.npmjs.com/package/webfontloader#custom
    WebFontLoader.load({
      custom: {
        families: ['neuzeit-grotesk'],
      },
    });
  }

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/touch-icon.png" />
      <link rel="apple-touch-icon" href="/touch-icon.png" />
      <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href={favicon} />
      <link rel="stylesheet" href="/static/fonts/CircularStd-Book/font.css" media="all" />
      <link rel="stylesheet" href="/static/fonts/NeuzeitGrotesk/font.css" media="all" />

      {
        SUPPORTED_LOCALES.map((supportedLocale: I18nLocale) => {
          // Google best practice for SEO https://webmasters.googleblog.com/2011/12/new-markup-for-multilingual-content.html
          // Google accepts relative links for hreflang
          // See https://stackoverflow.com/questions/28291574/are-relative-links-valid-in-link-rel-alternate-hreflang-tags
          // See https://webmasters.googleblog.com/2013/04/5-common-mistakes-with-relcanonical.html
          return (
            <link key={supportedLocale?.name} rel="alternate" hrefLang={supportedLocale?.name || 'en'} href={`/${supportedLocale?.name || 'en'}`} />
          );
        })
      }

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Detect outdated browser and display a popup about how to upgrade to a more recent browser/version */}
      {/* XXX See public/static/CDN/README.md */}
      {/*
        XXX DISABLED because of https://github.com/mikemaccana/outdated-browser-rework/issues/57#issuecomment-620532590
          TLDR; Display false-positive warnings on embedded browsers if they're too old and the user can't do anything about it (e.g: Facebook Chrome, Linkedin Chrome, etc.)
      */}
      {/*<script async={true} src="https://storage.googleapis.com/the-funding-place/assets/libs/outdated-browser-rework/outdated-browser-rework.min.js" />*/}
      {/*<link rel="stylesheet" href="https://storage.googleapis.com/the-funding-place/assets/libs/outdated-browser-rework/outdated-browser-rework.css" />*/}

      {
        additionalContent && (
          additionalContent
        )
      }

    </NextHead>
  );
};

export default Head;