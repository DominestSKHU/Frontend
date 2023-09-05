// ;

// import Navbar from "@/components/Navbar";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

type Props = {};

function Home({}: Props) {
  console.log("token");

  // const router = useRouter();
  // const [token, setToken] = useState(true);

  // useEffect(() => {
  //   const authToken = localStorage.getItem("authToken");

  //   if (!authToken) {
  //     router.push("/login");
  //   } else {
  //     setToken(true);
  //   }
  // }, []);

  return null;
  // return <>{token && <Navbar />}</>;
}

export default Home;
