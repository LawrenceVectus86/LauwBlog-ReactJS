import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import AllBlogs from "./Pages/allBlogs/AllBlogs";
import NoPage from "./Pages/Nopage/Nopage";
import BlogInfo from "./Pages/blogInfo/BlogInfo";
import AdminLogin from "./Pages/Admin/adminLogin/AdminLogin";
import Dashboard from "./Pages/Admin/dashboard/Dashboard";
import MyState from "./Context/data/myState";
import CreateBlog from "./Pages/Admin/createBlog/CreateBlog";
import { Toaster } from "react-hot-toast";
import PropTypes from 'prop-types';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRouteForAdmin = ({ children }) => {
  // PropTypes validation for children
  ProtectedRouteForAdmin.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const user = JSON.parse(localStorage.getItem('user'))
  if (user?.user?.email === "calvin@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}