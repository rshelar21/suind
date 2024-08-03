import { droneData } from "../../data";
import { IDrones } from "../../interfaces";
import { Link } from "react-router-dom";
import Pills from "../common/Pills";

const DronCard: React.FC<{
  drone: IDrones;
}> = ({ drone }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer flex flex-col border border-gray-200">
      <div className="">
        <img
          src="/assets/images/drone.jpg"
          alt=""
          className="object-cover w-full h-[160px] rounded-lg"
        />
      </div>

      <div className="pt-2 flex flex-col gap-2">
        <p className="font-bold text-lg text-black">{drone?.id}</p>
        <Pills status={drone?.status} />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="px-6 pt-6">
        <h1 className="font-bold text-4xl text-gray-800">Drones Overview</h1>
        <p className="font-normal text-sm pt-1 text-black">
          Click on a drone to view more details
        </p>
        <div className="w-full grid grid-cols-3 gap-6 pt-4">
          {droneData?.drones?.map((drone, index) => (
            <Link to={`/drone/${drone?.id?.toLowerCase()}`} key={`${drone?.id}-${index}`}>
              <DronCard key={drone?.id} drone={drone} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
