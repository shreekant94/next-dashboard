import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesWrapper } from '@/app/ui/invoices/invoices-wrapper';
import { SearchSection } from '@/app/ui/invoices/search-section';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Invoices',
};

export default function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <Suspense fallback={<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">Loading...</div>}>
        <SearchSection searchParams={searchParams || Promise.resolve({})} />
      </Suspense>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <InvoicesWrapper searchParams={searchParams || Promise.resolve({})} />
      </Suspense>
    </div>
  );
}