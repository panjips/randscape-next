"use client";
import { useState, useEffect } from "react";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { URL_IMAGE, URL_NEXT } from "@/utils/constants";

export default function AdvanceUsage() {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${URL_IMAGE}/random/resize?q=lion&w=300&h=300&cache=true`
        );
        if (!response.ok) throw new Error("Image failed to load");
        const blob = await response.blob();
        setImageSrc(URL.createObjectURL(blob));
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <Layout>
      <div className="py-12">
        <h2 className="text-center font-bold text-2xl md:text-3xl text-slate-700">
          More advance usage
        </h2>

        <div className="grid grid-cols-12 items-center gap-4 md:gap-8 mt-4 xl:mt-6 mx-auto">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-2">
            <h3 className="font-semibold text-xl md:text-2xl text-slate-800">
              Resize Image
            </h3>
            <p className="text-slate-700">
              If you need some size customization, you can easily adjust the
              width and height.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg w-full lg:w-fit  mt-1 overflow-x-auto">
              <p className="text-sm md:text-base text-blue-400 hover:text-blue-500 transition-colors whitespace-nowrap">
                {URL_NEXT}/random?q=
                <strong className="border-b">YOUR_QUERY</strong>&w=
                <strong className="border-b">WIDTH</strong>&h=
                <strong className="border-b">HEIGHT</strong>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
            {isLoading ? (
              <div className="rounded-xl shadow-lg h-[300px] w-[300px] object-cover animate-pulse bg-slate-200"></div>
            ) : (
              <Image
                src={imageSrc || ""}
                alt="Always Random Image"
                width={300}
                height={300}
                className="rounded-xl shadow-lg object-cover"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
          ;
        </div>
      </div>
    </Layout>
  );
}
