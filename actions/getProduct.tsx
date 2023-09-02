import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (productid: string): Promise<Product> => {
  const res = await fetch(`${url}/${productid}`, { cache: "no-cache" });
  return res.json();
};
export default getProduct;
