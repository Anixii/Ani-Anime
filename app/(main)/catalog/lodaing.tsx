import { CardSkeleton } from "@/app/ui/sekeletons/Sekelonts";
import React from "react";

const CatalogLoading = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
      {[...Array(30)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </section>
  );
};

export default CatalogLoading;
