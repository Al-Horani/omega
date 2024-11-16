import Storage from "./Storage";
import Sales from "./Sales";
import Settings from "./Settings";
import AddMedicine from "./AddMedicine";

const MainOperation = () => {
  return (
    <div className="w-screen min-h-screen ">
        <div className="grid grid-cols-2 w-5/6  h-full mx-auto gap-2">
            <AddMedicine/>
            <Storage/>
            <Sales/>
            <Settings/>
        </div>
    </div>
  )
}

export default MainOperation