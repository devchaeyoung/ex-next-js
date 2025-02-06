import NewProductList from "@/components/NewProductList";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/server-action";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Home() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries : {
        staleTime: 1000,
      }
    }
  })

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col p-10 gap-6">
        <NewProductList/>
        <ProductList />
      </section>
    </HydrationBoundary>
  );
}
