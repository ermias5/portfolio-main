"use client";

import Image from "next/image";
import React from "react";
import { ProjectType } from "../../hooks/useProjectData";
import imagePlaceholder from "../../public/subtract.png";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

const ProjectCard: React.FC<ProjectType> = ({
  imageUrl,
  title,
  description,
}) => {


  const [open, setOpen] = React.useState(false);



  return (
    <>
      <Card className="pb-4 px-0 pt-0 hover:cursor-pointer rounded-t-3xl" onClick={() => setOpen(true)}>
        <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl ">
          <Image
            src={imageUrl ?? imagePlaceholder}
            alt={`my ${title} image`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-0">
          <h3 className="text-sm text-darkorange-100">{title}</h3>
        </CardHeader>
        <CardDescription className="mx-auto text-left px-5 w-full max-w-[270px] pt-0">
          <h1 className="mt-2 text-sm text-gray-700 line-clamp-2 dark:text-black">
            {description}
          </h1>
        </CardDescription>
      </Card>




      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>

            <Image
              src={imageUrl ?? imagePlaceholder}
              alt={`my ${title} image`}
              width={600}
              height={400}
              className="rounded-lg mt-4"
            />
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>

  )
}

export default ProjectCard;
