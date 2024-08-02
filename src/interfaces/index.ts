export interface IMaintenanceLogs {
  date: string;
  description: string;
  technician: string;
}

export interface IDrones {
  id: string;
  status: string;
  flight_hours: number;
  battery_status: string;
  last_known_location: number[];
  current_mission: string;
  maintenance_logs: IMaintenanceLogs[];
}

export interface IDroneData {
  drones: IDrones[];
  users: [
    {
      username: string;
      password: string;
    }
  ];
}
