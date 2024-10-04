import { Navigate, Route ,Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { useAuthContext } from "./context/Authcontext"
import Profile from "./pages/profile/Profile"
import { logout_ } from "./api"
import { useEffect } from "react"
import { jwtDecode } from "jwt-decode";

function App() {
   const {authUser}=useAuthContext();
  
    useEffect(() => {
      async function isAuth() {
        const token = authUser?.token_;
        if (token) {
          let decodedtoken = jwtDecode(token);
  
          if (decodedtoken.exp * 1000 < new Date().getTime()) {
            try {
              await logout_(); // this will clear the cookie
              localStorage.removeItem("chat-user");
  
              window.location.reload();
            } catch (error) {
              console.error("Error logging out", error);
            }
          }
        }
      }
      isAuth();
    }, []);
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center ">
 

     <div className="w-full">
     <Routes>
         <Route path="/" element={authUser? <Home/>: <Navigate to="/login"/>}/>
         <Route path="/login" element={authUser? <Navigate to="/"/>:<Login/>}/>
         <Route path="/signup" element={authUser? <Navigate to="/"/>:<Signup/>}/>
         <Route path="/profile" element={authUser? <Profile/>:<Login/>}/>
     </Routes>
     </div>
     </div>
    </>
  )
}

export default App
