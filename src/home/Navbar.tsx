
import { Search } from "react-flaticons";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="w-full">
        <header className=" mx-auto w-5/6 h-12 flex-between ">
          <h2 className="font-bold text-2xl c ">أوميغا</h2>
          <Link to={"/search"}>
            <Search className="c cursor-pointer "  size={22} />
          </Link>
        </header>
    </div>
  )
}

export default Navbar