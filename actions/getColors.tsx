import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};
export default getColors;
