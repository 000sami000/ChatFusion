import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authcontext";
import { signin_ } from "../api";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async ({username, password}) => {

        console.log(username,password,"??>?>?>?>")
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		try {
			const {data}= await signin_({username, password});
			if (data.error) {
				throw new Error(data.error);
			}
   
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {

			toast.error(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}