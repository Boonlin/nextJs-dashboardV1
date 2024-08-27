import { fetchCustomerById } from '@/app/lib/data';
import { CustomersTableType } from '@/app/lib/definitions';
import Form from '@/app/ui/customers/edit-form';
import CustomersTable from '@/app/ui/customers/table';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;  
    const [customer] = await fetchCustomerById(id);
    const cust = {
      ...customer, // assuming originalCustomer is the source object
      total_pending: parseFloat(customer.total_pending), // Convert string to number
      total_paid: parseFloat(customer.total_paid), // Similarly for total_paid if needed
      // Other properties remain unchanged
    };
      if(!customer){
        notFound();
      }
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'customers', href: '/dashboard/customers' },
          {
            label: 'Edit customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={cust}/>
    </main>
  );
}