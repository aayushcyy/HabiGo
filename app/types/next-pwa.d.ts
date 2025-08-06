// types/next-pwa.d.ts

declare module "next-pwa" {
  import { NextConfig } from "next";

  interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    [key: string]: any;
  }

  export default function withPWA(
    config: NextConfig & { pwa?: PWAOptions }
  ): NextConfig;
}

export interface CustomDate {
  dateN: number;
  day: string;
}
