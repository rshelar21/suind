export const droneData = {
  users: [{ username: "admin", password: "password123" }],
  drones: [
    {
      id: "Drone1",
      status: "Available",
      flight_hours: 120,
      battery_status: "80%",
      last_known_location: [40.712776, -74.005974],
      current_mission: "Survey field A",
      maintenance_logs: [
        {
          date: "2024-01-10",
          description: "Battery replacement",
          technician: "John Doe",
        },
        {
          date: "2024-02-15",
          description: "Rotor inspection",
          technician: "Jane Smith",
        },
      ],
    },
    {
      id: "Drone2",
      status: "In-flight",
      flight_hours: 200,
      battery_status: "50%",
      last_known_location: [34.052235, -118.243683],
      current_mission: "Inspect irrigation system",
      maintenance_logs: [
        {
          date: "2024-03-05",
          description: "Firmware update",
          technician: "Alice Johnson",
        },
        {
          date: "2024-04-22",
          description: "Motor calibration",
          technician: "Bob Lee",
        },
      ],
    },
    {
      id: "Drone3",
      status: "Maintenance",
      flight_hours: 95,
      battery_status: "60%",
      last_known_location: [41.878113, -87.629799],
      current_mission: "N/A",
      maintenance_logs: [
        {
          date: "2024-05-12",
          description: "Propeller replacement",
          technician: "Charlie Brown",
        },
        {
          date: "2024-06-30",
          description: "GPS module repair",
          technician: "Diana Prince",
        },
      ],
    },
  ],
};
