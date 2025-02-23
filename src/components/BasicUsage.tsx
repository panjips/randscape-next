import Layout from "@/layouts/Layout";
import { URL_NEXT } from "@/utils/constants";

export default function BasicUsage() {
  return (
    <Layout>
      <div className="py-12 w-full flex flex-col items-center gap-2 md:gap-4">
        <h2 className="text-center font-bold text-2xl md:text-3xl text-slate-700">
          Basic usage
        </h2>
        <p className="text-sm lg:text-base text-center text-slate-700">
          Easy to get a random image from a query and display it instantly,
          making development <strong>smoother</strong> and more{" "}
          <strong>efficient</strong>.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-screen-md overflow-x-auto">
          <p className="text-sm md:text-base text-blue-400 text-center hover:text-blue-500 transition-colors whitespace-nowrap">
            {URL_NEXT}/random?q=
            <strong className="border-b">YOUR_QUERY</strong>
          </p>
        </div>

        <p className="text-sm lg:text-base text-center text-slate-700 mt-2">
          Need consistent and more faster image, you can also use{" "}
          <strong>caching</strong>.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-screen-md overflow-x-auto">
          <p className="text-sm md:text-base text-blue-400 text-center hover:text-blue-500 transition-colors whitespace-nowrap">
            {URL_NEXT}/random?q=
            <strong className="border-b">YOUR_QUERY</strong>
            &cache=
            <strong className="border-b">true</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
}
