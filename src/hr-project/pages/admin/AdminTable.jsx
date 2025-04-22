import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  allColumns,
  leaveColumns,
  positionColumns,
} from "./constants/TableItem";

export const AdminTable = ({ tabsMenu }) => {
  // Fetch Data
  const URL = "/src/hr-project/data.json";
  const [users, setUsers] = useState([]);

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
  const position = users.filter((item) => item.position === tabsMenu.label);
  const leave = users.filter((item) => item.approval);

  const useTableConfig = () => {
    if (tabsMenu.type === "position") {
      return { columns: positionColumns, data: position };
    }

    if (tabsMenu.type === "approval") {
      return { columns: leaveColumns, data: leave };
    }

    return { columns: allColumns, data: users };
  };

  // Default Table
  const { columns, data } = useTableConfig();

  return <Table rowKey="id" columns={columns} dataSource={data} />;
};
