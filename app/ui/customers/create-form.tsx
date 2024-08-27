"use client";
import { createCustomer, StateCus } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState } from "react";

export default function Page() {
  const initialState: StateCus = { message: null, errors: {} };

  const [state, formAction] = useActionState(createCustomer, initialState);

  return (
    <form action={formAction} className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Customer name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              step="0.01"
              placeholder="enter name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <UserCircleIcon  className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state.errors?.name}</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="em" className="mb-2 block text-sm font-medium">
          Customer email
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              step="0.01"
              placeholder="enter email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </div>
          <div className=" relative mt-2 rounded-md">
            Image url
  <input type="text" name="img_url" placeholder="Image URL" required    className="peer block mt-2 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"/>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" color="primary">
          Create customer
        </Button>
      </div>
    </form>
  );
}
