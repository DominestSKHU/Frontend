import axios from "axios";

export const Imageborder = async (idname: string[]) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/image-types/${idname[1]}`
    );
    return response;
  } catch (error) {
    console.error("이미지 정보를 가져오는 동안 오류 발생:", error);
    throw error;
  }
};
/*
useEffect(() => {
    if (!router.query.id) {
      <p>잠시만 기다리세요</p>;
      return;
    }
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/image-types/${router.query.id}`
      )
      .then((response) => {
        setImageData(response.data.data.postDetail);
        console.log(response.data.data.postDetail);
      })
      .catch((error) => {
        console.error("이미지 정보를 가져오는 동안 오류 발생:", error);
        console.log(router.query.id);
      });
  }, [router.query.id]);*/
