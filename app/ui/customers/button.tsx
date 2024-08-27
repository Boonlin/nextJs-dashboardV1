import { deleteCustomer } from '@/app/lib/actions';
import { PencilSquareIcon } from '@heroicons/react/20/solid';
import { PencilIcon, PlusIcon, TrashIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create a customer</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/customers/${id}/edit`}
    className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {

    const deleteCustomerWithId = deleteCustomer.bind(null,id);
  return (
    <>
        <Link  href={`/dashboard/customers/${id}/delete`}
       className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-red-500" />
      </Link>
    </>
  );  
}
export function CustomerDetails({ id }: { id: string }) {
  
return (
  <>
    <Link
    href={`/dashboard/customers/${id}/detail`}
    className="rounded-md border p-2 hover:bg-gray-100"
    >
      <UserGroupIcon className="w-5" />
    </Link>
  </>
);  
}
import React from 'react'

export default function CancelBtn( ) {
  return (
    <>
    <Link 
      href={`/dashboard/customers`}
    className="rounded-md border p-2 hover:bg-gray-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
    </Link>

    </>
  )
}
