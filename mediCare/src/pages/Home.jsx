import { useEffect } from "react";
import { DOC_URL } from "../constants";


const Home = () => {

  const fetchData = async () => {
    const data = await fetch(DOC_URL);
    const json = await data.json();
    console.log(json);
  };
  
   useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>
      <h1 className="text-6xl w-fit">hello</h1>
      <h1>hello</h1>
  

    </div>
  );
};

export default Home;
