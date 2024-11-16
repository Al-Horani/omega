
// import { ArrowRight } from "react-flaticons"
import { ArrowSmallRight } from "react-flaticons";
import { Link } from "react-router-dom";

const BasicSearch = () => {
  return (
    <div className="min-w-screen min-h-screen">
        <div className="bg-slate-100">
            <div className="h-12 w-5/6 mx-auto flex items-center gap-x-2 ">
                <Link to={"/home"}>
                    <ArrowSmallRight className="c cursor-pointer "  size={36}/>
                </Link>
                <input type="search" name="" id="" placeholder="ابحث هنا" className="h-full caret-color bg-transparent  w-full border-none outline-none px-4" />
            </div>
        </div>
    </div>
  )
}

export default BasicSearch