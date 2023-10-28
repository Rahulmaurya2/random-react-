"use client";
import Header from "./Components/Header";
import Facts from "./Components/Fact";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Header />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 px-5 py-10 bg-teal-700 m-1 hover:bg-teal-600">
        <div class="box-content h-32 w-full md:w-32 p-4 border-4 m-5 hover:bg-teal-200 bg-teal-400">
          <Link href="/Product1" className="mx-5 font-bold text-lg">
            Get Image
          </Link>
        </div>
        <div class="box-content h-32 w-full md:w-32 p-4 border-4 m-5 hover:bg-teal-200 bg-teal-400">
          <Link href="/Product2" className="mx-5 font-bold text-lg">
            PasswordG
          </Link>
        </div>
        <div class="box-content h-32 w-full md:w-32 p-4 border-4 m-5 hover:bg-teal-200 bg-teal-400">
          <Link href="/Product3" className="mx-5 font-bold text-lg">
            Get Data
          </Link>
        </div>
        <div class=" content-left box-content h-32 w-full md:w-32 p-4 border-4 m-5 hover:bg-teal-200 bg-teal-400 flex-initial">
          <Link href="/Product4" className="mx-5 font-bold text-lg">
            CurrencyC
          </Link>
        </div>
        <div class="box-content h-32 w-full md:w-32 p-4 border-4 m-5 hover:bg-teal-200 bg-teal-400">
          <Link href="/Product5" className="mx-5 font-bold text-lg">
            To-do-list
          </Link>
        </div>
      </div>

      <Facts />
    </>
  );
};

export default page;
