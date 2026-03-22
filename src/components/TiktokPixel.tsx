// @ts-nocheck
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function TiktokPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialization is now handled in layout.tsx <head>
    // This component only handles SPA route changes.
  }, []);

  useEffect(() => {
    // Track page views on route change
    if ((window as any).ttq) {
      (window as any).ttq.page();
    }
  }, [pathname, searchParams]);

  return null;
}
