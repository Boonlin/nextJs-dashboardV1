import { fetchCustomerById } from "@/app/lib/data";
import CancelBtn from "@/app/ui/customers/button";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
export default async function CustomerDetails({
  params,
}: {
  params: { id: string };
}) {
  const [customer] = await fetchCustomerById(params.id);

  if (!customer) {
    return <p>Customer not found</p>;
  }

  return (
    <>
      <h1 className="mb-6 text-xl text-blue">Customers / Customer Details</h1>
      <Card className="max-w-[340p rounded-xl bg-gray-50 p-4 w-1/2 shadow-sm">
        <CardHeader className="justify-between">
          <div className="flex gap-3">
            <Image
               isZoomed
               width={80}
              radius="full"
              src={customer.image_url}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {customer.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {customer.email}
              </h5>
            </div>
          </div>

          <Button
            className="bg-transparent text-foreground border-default-200"
            color="primary"
            radius="full"
            size="sm"
            variant="solid"
          ></Button>
          <CancelBtn />
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>Frontend developer and UI/UX </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi nulla iusto suscipit, a temporibus excepturi rerum quam dignissimos aliquam, sunt, laborum neque consequatur ab animi rem magni aperiam. Ipsam?</p>
          <p className="text-xl my-6 ">
            {customer.total_invoices==0 ? customer.name:customer.total_invoices }
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
            {customer.total_invoices == 1 ? "Invoice" : customer.total_invoices == 0 ? "new customer":customer.total_invoices !== 0  || 1? "Invoives": customer.total_invoices}
          </p>
        </CardBody>
        <CardFooter className="gap-3 mt-2 bg-white rounded-md">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">
              <span>
                {customer.total_paid! == "$0.00" ? "$0" : customer.total_paid}
              </span>
              <span className="text-green-900"> Paid</span>
            </p>
          </div>
          <div className="flex gap-1 ml-10">
            <p className="font-semibold text-default-400 text-smal">
              <span>
                {customer.total_pending! == "$0.00"
                  ? "$0"
                  : customer.total_pending}
              </span>
              <span className="text-red-900"> Pending</span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
