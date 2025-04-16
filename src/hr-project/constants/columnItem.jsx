import { Button } from "antd";

export const allColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Type",
    dataIndex: "employmentType",
    key: "employmentType",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Button>Edit</Button>,
  },
];

export const positionColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "employmentType",
    key: "employmentType",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Service (Years)",
    dataIndex: "yearsOfService",
    key: "yearsOfService",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Button>Edit</Button>,
  },
];

export const leaveColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Type",
    dataIndex: "employmentType",
    key: "employmentType",
  },
  {
    title: "Sick Leave",
    key: "sickLeave",
    render: (_, record) => record.leaveDays.sickLeave ?? "-",
  },
  {
    title: "Personal Leave",
    key: "personalLeave",
    render: (_, record) => record.leaveDays.personalLeave ?? "-",
  },
  {
    title: "Vacation Leave",
    key: "vacationLeave",
    render: (_, record) => record.leaveDays.vacationLeave ?? "-",
  },
  {
    title: "Action",
    key: "action",
    render: () => {
      return (
        <>
          <Button type="primary" className="mr-2">Yes</Button>
          <Button danger>No</Button>
        </>
      );
    },
  },
];

export const timeColumns = [
  {
    title: "Name",
    dataIndex: "fullName",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Time In",
    dataIndex: "เวลาเข้างาน",
    key: "timeIn",
  },
  {
    title: "Time Out",
    dataIndex: "เวลาออกงาน",
    key: "timeOut",
  },
  {
    title: "Sick Leave",
    key: "sickLeave",
    render: (_, record) => record.leaveDays.sickLeave ?? "-",
  },
  {
    title: "Personal Leave",
    key: "personalLeave",
    render: (_, record) => record.leaveDays.personalLeave ?? "-",
  },
  {
    title: "Vacation Leave",
    key: "vacationLeave",
    render: (_, record) => record.leaveDays.vacationLeave ?? "-",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Button danger>View Report</Button>
  },
];