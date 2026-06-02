import React from "react";
import PropertyDetailsClient from "@/components/PropertyDetailsClient";
import { propertiesData } from "@/data/properties";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return propertiesData.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = propertiesData.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetailsClient property={property} />;
}
