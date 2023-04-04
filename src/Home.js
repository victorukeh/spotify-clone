import React, { useEffect } from "react";
import Category from "./components/Category";
import { useDataLayerValue } from "./DataLayer";
import "./Home.css";
const Home = () => {
  const [{ categories }, dispatch] = useDataLayerValue();
  // useEffect(() => {
  //   onClick()
  // }, [])
  if (categories) console.log("Category: ", categories[0]);

  return (
    <div className="home">
      <h1 style={{ fontSize: "25px", paddingTop: "3%", paddingBottom: "2%" }}>Categories</h1>
      <div className="home__content">
        {categories && (
          categories.map((category) => <Category
            text={category.name}
            image={category.icons[0].url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
