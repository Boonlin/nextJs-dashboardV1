
import { lusitana } from "@/app/ui/fonts";
import Table from "@/app/ui/customers/table"
import Search from "@/app/ui/search";
import { CreateCustomer } from "@/app/ui/customers/button";

export default async function Page({searchParams}:{searchParams?:{query?:string} })  {
    const query = searchParams?.query || '';
    return (
    <div className="w-full"> 
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-5 ">
        <Search  placeholder="Enter customer name or email"/>
        <CreateCustomer />
      </div>
   ​​​​​​​​​     < Table query={query}  />
      <div className="mt-1 flex w-full justify-center"></div>
    </div>
  );
}
