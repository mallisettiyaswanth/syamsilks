"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  category: "men" | "women";
  price: number;
  image: string;
}

const dummyProducts: Product[] = [
  {
    id: "men-shirt-1",
    name: "Men Shirt 1",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-shirt-2",
    name: "Men Shirt 2",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-shirt-3",
    name: "Men Shirt 3",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-shirt-4",
    name: "Men Shirt 3",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-shirt-5",
    name: "Men Shirt 3",
    category: "men",
    price: 5000,
    image: "#",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "men" | "women"
  >("all");

  const filteredProducts =
    selectedCategory === "all"
      ? dummyProducts
      : dummyProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-purple-50">
        <Header />
        <main className="container mx-auto px-6 py-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center"
          >
            Shirts Collection
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
