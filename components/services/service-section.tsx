"use client";

import useServiceData, { ServiceType } from "../../hooks/useServiceData";
import ServiceCard from "./service-card";

const ServiceSection = () => {
  const { data, isLoading, error } = useServiceData({ itemQuantity: 4 });

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-3xl mb-0">Services</h1>
      <p className=" tablet:px-[100px]">
      I offer expert mechanical design and visualization services using SolidWorks, CATIA Composer, and Revit. Additionally, I create interactive 3D web experiences with Three.js and build modern web apps using Next.js.
      </p>
      <div className=" flex flex-col gap-3 tablet:flex-row">
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>getting error when fetching the data</p>
        ) : (
          data.map((service: ServiceType) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              id={""}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
