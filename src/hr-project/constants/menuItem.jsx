import {
  HistoryOutlined,
  PieChartOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    key: "menu1",
    label: "Position",
    icon: <TeamOutlined />,
    children: [
      { key: "sub1-1", type: "position", label: "HR Officer" },
      { key: "sub1-2", type: "position", label: "Marketing Specialist" },
      { key: "sub1-3", type: "position", label: "Sales Executive" },
      { key: "sub1-4", type: "position", label: "Accountant" },
      { key: "sub1-5", type: "position", label: "Frontend Developer" },
      { key: "sub1-6", type: "position", label: "Backend Developer" },
    ],
  },
  {
    key: "menu2",
    label: "Leave Management",
    icon: <SolutionOutlined />,
    children: [
      { key: "sub2-1", type: "leaveManagement", label: "Approval" },
      { key: "sub2-2", type: "leaveManagement", label: "Calendar" },
    ],
  },
  {
    key: "menu3",
    label: "Time Attendance",
    icon: <HistoryOutlined />,
    children: [{ key: "sub3-1", type: "timeAttendance", label: "Time Attendance" }],
  },
  {
    key: "menu4",
    label: "Reports & Analytics",
    icon: <PieChartOutlined />,
    children: [
      { key: "sub4-1", type: "reports", label: "Reports" },
      { key: "sub4-2", type: "reports", label: "Analytics" },
    ],
  },
];
