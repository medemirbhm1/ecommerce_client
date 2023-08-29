import { Product } from "@/types";
import qs from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  const searchUrl = qs.stringifyUrl({
    url,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeid: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(searchUrl, { cache: "no-store" });
  return res.json();
};
export default getProducts;
