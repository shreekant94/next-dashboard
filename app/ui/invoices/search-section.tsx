import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';

export async function SearchSection({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  
  return (
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Search placeholder="Search invoices..." />
      <CreateInvoice />
    </div>
  );
}