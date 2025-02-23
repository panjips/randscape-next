"use client";
import { useEffect, useState } from "react";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { URL_IMAGE } from "@/utils/constants";

export default function Landing() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${URL_IMAGE}/random?q=landscape&cache=true`
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
    <Layout backgroundColor="bg-slate-50">
      <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-8 xl:gap-16 items-center py-16 lg:py-24">
        <div className="h-full w-full">
          {isLoading ? (
            <div className="rounded-tl-3xl rounded-bl-3xl shadow-lg h-64 lg:h-96 w-full object-cover animate-pulse bg-slate-200"></div>
          ) : (
            <div className="relative h-64 lg:h-96 w-full">
              <Image
                src={imageSrc || ""}
                alt="Always Random Image"
                fill
                className="rounded-tl-3xl rounded-bl-3xl shadow-lg object-cover"
              />
            </div>
          )}
        </div>
        <div className="h-full w-full flex items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-700">
              <span className="text-blue-600 text-4xl lg:text-5xl">
                Randscape
              </span>{" "}
              <br /> Image API Generator
            </h1>
            <p className="text-sm lg:text-base text-slate-700 mt-2 md:mt-3">
              Get inspired with <strong>Randscape</strong>, the{" "}
              <strong>free image API </strong>
              that lets you discover stunning visuals effortlessly. Use queries
              to find custom images and take advantage of built-in caching for
              faster performance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
