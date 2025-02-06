import { redirect } from "next/navigation"

type Props = { params : {id : string;}}
function ProductView({params}:Props) {
  const id = parseInt(params.id, 10 )
  return redirect(`/product/${id}`);
}

export default ProductView