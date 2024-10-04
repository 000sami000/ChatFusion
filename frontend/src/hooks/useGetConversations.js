import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getConversationUser_ } from "../api";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);

  const getConversations = async (searchinput) => {
    setLoading(true);
    try {
      let data_ = null;
      if (searchinput) {
        const { data } = await getConversationUser_(searchinput);
        data_ = data;
      } else {
        const { data } = await getConversationUser_();

        data_ = data;
      }

      if (data_.error) {
        throw new Error(data_.error);
      }
      return data_;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getConversations };
};
export default useGetConversations;
