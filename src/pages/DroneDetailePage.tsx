import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import { useParams } from "react-router-dom";
import { IDrones } from "../interfaces";
import { droneData } from "../data";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Pills from "../components/common/Pills";

const DroneDetailePage = () => {
  const { id } = useParams();
  const [drone, setDrone] = useState<IDrones>();

  useEffect(() => {
    if (id) {
      const selectedDrone = droneData?.drones?.find((drone) => drone?.id?.toLowerCase() === id);
      setDrone(selectedDrone);
    }
  }, [id]);
  return (
    <Layout showSidebar showNavbar>
      <div className="px-6 pt-6">
        <div className="pb-4 ">
          <Link to="/" className="flex items-center text-gray-500 gap-1 ">
            <p className="font-medium">Back to Dashboard</p>
            <IoIosArrowForward className="-mb-1" />
          </Link>
        </div>

        <h1 className="text-5xl text-gray-950 font-bold">
          {drone?.id} Details
        </h1>

        <div className="p-4 rounded-lg shadow-lg bg-white mt-4">
          <div className="flex items-start gap-7">
            <div>
              <img
                src="/assets/images/drone.jpg"
                alt=""
                className="object-cover h-[150px]  rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Pills status={drone?.status} />

              <div>
                <span className="font-semibold">Flight Hours:</span>{" "}
                <span>{drone?.flight_hours}</span>
              </div>
              <div>
                <span className="font-semibold">Last Known Location:</span>{" "}
                <span>{drone?.last_known_location}</span>
              </div>
              <div>
                <span className="font-semibold">Battery Status:</span>{" "}
                <span>{drone?.battery_status}</span>
              </div>
              <div>
                <span className="font-semibold">Currnet Mission:</span>{" "}
                <span>{drone?.current_mission}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg shadow-lg bg-white mt-4">
          <h3 className="text-black text-xl font-semibold">Maintenance Logs</h3>

          <div className="w-full pt-4">
            <table className="w-full ">
              <thead className="border ">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">Date</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Description
                  </th>
                  <th className="px-4 py-2 border border-gray-300 ">
                    Technician
                  </th>
                </tr>
              </thead>
              <tbody>
                {drone?.maintenance_logs?.map((log, index) => (
                  <tr key={`${log.date}-${index}`} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">
                      {log.date}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {log.description}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {log.technician}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DroneDetailePage;
