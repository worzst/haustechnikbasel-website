/// <reference types="astro/client" />

declare function gtag(...args: unknown[]): void;

interface Window {
  dataLayer: Record<string, unknown>[];
}
