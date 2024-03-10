
import Navbar from "../../Components/ui/Navbar";
import Footer from '../../Components/ui/Footer'

const UserLayout = ({ children }) => {
  return (
   <div>
    <Navbar/>
      <div>
      {children}
      </div>
      <Footer/>
   </div>
  );
};

export default UserLayout;

