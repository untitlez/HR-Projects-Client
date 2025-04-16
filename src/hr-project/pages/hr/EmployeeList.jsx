import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  allColumns,
  positionColumns,
  leaveColumns,
  timeColumns,
} from "../../constants/columnItem";

export const EmployeeList = ({ tabsMenu, ...rest }) => {
  const URL = "/src/hr-project/data.json";
  const [users, setUsers] = useState([]);
  
  // Fetch Data
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(URL);
        setUsers(data);
      } catch (error) {
        console.error("error :", error);
      }
    }

    fetchData();
  }, []);

  // Tab Menu to >> Data Table 
  const positions = users.filter((item) => item.position === tabsMenu.label);
  const leave = users.filter((item) => item.leaveDays);

  const useTableConfig = () => {
    if (tabsMenu.type === "position") {
      return { columns: positionColumns, data: positions };
    }
  
    if (tabsMenu.type === "leaveManagement") {
      return { columns: leaveColumns, data: leave };
    }
    
    if (tabsMenu.type === "timeAttendance") {
      return { columns: timeColumns, data: leave };
    }
  
    return { columns: allColumns, data: users };
  };
  
  const { columns, data } = useTableConfig();
  
  return <Table rowKey="id" columns={columns} dataSource={data} {...rest} />;
};
