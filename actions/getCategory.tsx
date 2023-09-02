import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (categoryid: string): Promise<Category> => {
  const res = await fetch(`${url}/${categoryid}`, { cache: "no-cache" });
  return res.json();
};
export default getCategory;
