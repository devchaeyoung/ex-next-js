import { BASE_URL } from "@/constants/api";
import { Product } from "@/type/product";

export async function GET() {
  const res = await fetch(`${BASE_URL}/products`, {
    next: {
      revalidate: 20,
      tags: ["new"],
    },
  });

  const data: Product[] = await res.json();
  const newData = data.filter((p) => p.isNew);
  return Response.json({ data: newData });
}
