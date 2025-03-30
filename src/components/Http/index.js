import axios, { Axios } from "axios";

export const getRecipes = async (tags = "", size = "20", id) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: size,
      tags: tags,
      id: id,
    },
    headers: {
      "x-rapidapi-key": "74974e81d5msh5453e50348878c5p151530jsn6d510ad1acaf",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
};
