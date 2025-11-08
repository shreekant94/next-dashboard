import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { InvoicesContent } from './invoices-content';

export async function InvoicesWrapper({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  return (
    <Suspense fallback={<InvoicesTableSkeleton />}>
      <InvoicesContent query={query} currentPage={currentPage} />
    </Suspense>
  );
}