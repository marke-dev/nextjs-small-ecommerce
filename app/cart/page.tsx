import CartRow from "@/lib/components/CartRow";
import Link from "next/link";

export default function Cart() {
  const ColumnTitle = () => {
    return (
      <thead className="bg-gray-900">
        <tr>
          <th><p>Product</p> </th>
          <th><p>Name</p></th>
          <th><p>Price</p></th>
          <th><p>Quantity</p></th>
        </tr>
      </thead>
    );
  };

  return (
    <main className=" min-h-screen  p-24">

      <table className="table-fixed w-full">

          <ColumnTitle />

          <CartRow />

      </table>
      <Link href={'/checkout'}><button className=" bg-sky-600 text-white rounded-md py-2 px-4 float-end mt-5 text-xl">Payment</button></Link>
    </main>
  );
}
