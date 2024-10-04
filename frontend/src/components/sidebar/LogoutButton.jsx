import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<TbLogout2 className='text-[35px] text-white p-1 cursor-pointer hover:text-[#3c3c3c] hover:bg-[#ffffff6b] rounded-md' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;