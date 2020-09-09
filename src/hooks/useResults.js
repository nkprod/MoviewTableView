import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = (searchTerm) => {
    axios
      .get("https://reactnative.dev/movies.json")
      .then((response) => {
        console.log("getting data from axios", response.data);
        setResults(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something went wrong");
      });

    // try {
    //   const response = await axios.get("", {
    //     params: {},
    //   });
    //   setResults(response.movies);
    // } catch (err) {
    //   console.log(err);
    //   setErrorMessage("Something went wrong");
    // }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};
