"use client";
import { Button } from "@nextui-org/react";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function PaginationControls({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "20";

  return (
    <div className="flex gap-2 w-full items-center justify-center mt-4">
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/shop/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
        startContent={<GoArrowLeft />}
      >
        Prev
      </Button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/shop/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
        endContent={<GoArrowRight />}
      >
        Next
      </Button>
    </div>
  );
}

export default PaginationControls;
