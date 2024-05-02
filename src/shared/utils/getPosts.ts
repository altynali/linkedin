import axios from "axios";
import postsApi from "../config/axiosConfig";
import { useEffect, useState } from "react";
import { PostType } from "../types/postType";

export const useGetPosts = (): {loading: boolean, data: PostType[]} => {
const [loading, setLoading] = useState(true);
const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await postsApi.get('');
        setData(response);
      } catch (error) {
        const errorData = axios.isAxiosError(error) ? error.response?.data : error;
        throw Error(errorData);
      }
      setLoading(false);
    }

    fetchData();
  }, []); 

  return {loading, data}
}

