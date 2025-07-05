"use client";

import React from "react";
import UpdateDashboardData from "../../../components/dashboard/dashboard-crud/update-dashboard-data";
import useUploadCVData from "../../../hooks/useUploadCVData";
import { CategoryType, DataItem } from "../../../types/type";

const Page = () => {
  const { data, isLoading, error } = useUploadCVData({ itemQuantity: 1 });

  if (isLoading) return <p className="p-[300px]">Loading...</p>;
  if (error) return <div>Error: {error}</div>;

  return (
    <UpdateDashboardData
      data={data as DataItem[]}
      category={CategoryType.uploadCV}
    />
  );
};

export default Page;
