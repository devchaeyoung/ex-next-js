"use server";
import { Product } from "@/type/product";
import { BASE_URL } from "@/constants/api";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "force-cache",
  });
  const data: Product[] = await res.json();

  return { data };
}
