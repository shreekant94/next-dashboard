import { fetchInvoicesPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export async function InvoicesContent({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const totalPages = await fetchInvoicesPages(query);

  return (
    <>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}