import axios from "axios";

export const categoriesList = async (Token: string | undefined) => {
  if (!Token) return [];
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/my-categories`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    return response.data?.data?.categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};
