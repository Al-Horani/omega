
import { Medicine } from "react-flaticons"
import { Link } from "react-router-dom"

const ControlPanal = () => {
  return (
    <div className="mx-auto w-1/6 h-screen">
        <div className=" h-screen flex flex-col">
            <div className="h-3/4 pt-12">
                <Link to={""} className="w-full flex items-center gap-x-4 justify-center">
                    <Medicine size={22} className="text-slate-500"/>
                    <span>الأدوية</span>
                </Link>
            </div>
            <div className="h-1/4">

            </div>

        </div>
    </div>
  )
}

export default ControlPanal