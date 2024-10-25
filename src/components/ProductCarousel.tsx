import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import db from "@/db/db";
import { formatCurrency } from "@/lib/formatters";
import { cache } from "@/lib/cache";

type Product = {
  id: string;
  name: string;
  priceInCents: number;
  imagePath: string;
};

const getTopProducts = cache(async (): Promise<Product[]> => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { priceInCents: "desc" },
    take: 3,
    select: {
      id: true,
      name: true,
      priceInCents: true,
      imagePath: true,
    },
  });
}, ["/products", "getTopProducts"]);

export default async function ProductCarousel() {
  const products = await getTopProducts();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold mb-4">
                      {formatCurrency(product.priceInCents / 100)}
                    </p>
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
