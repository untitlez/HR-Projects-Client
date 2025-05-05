import { useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { useMenuStore } from "../../store/store";
import { menuItems } from "../admin/constants/menuItem";

import { ConfigTheme } from "../../components/ConfigTheme";
import { ToggleTheme } from "../../components/ToggleTheme";
import { MenuBar } from "../../components/MenuBar";
import { Account } from "../../components/Account";
import { AdminForm } from "./AdminForm";
import { AdminInfo } from "./AdminInfo";

export default function AdminHome() {
  const [users, setUsers] = useState([]);
  const { tabsMenu } = useMenuStore();
  const URL = "/src/data.json";

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(URL);
        setUsers(data);
      } catch (error) {
        throw error("Sorry, something went wrong.", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ConfigTheme>
        <Layout style={layoutStyle.layout}>
          {/* Menu Bar  */}
          <Sider width="20%" breakpoint="xl" style={layoutStyle.sider}>
            <MenuBar
              menuItems={menuItems}
              type="reports"
              label="All Employee"
              theme="light"
              defaultSelectedKeys="sub3-1"
            />
          </Sider>

          <Layout>
            {/* Header & Toggle Theme & Account  */}
            <Header style={layoutStyle.header}>
              <p style={layoutStyle.textHead}>{tabsMenu.label}</p>
              <div style={layoutStyle.account}>
                <ToggleTheme />
                <Account fullName="Shiba" position="Admin Officer" />
              </div>
            </Header>

            {/* Table  */}
            <Content style={layoutStyle.content}>
              {tabsMenu.type === "new employee" ? (
                <AdminForm />
              ) : (
                <AdminInfo users={users} tabsMenu={tabsMenu} />
              )}
            </Content>
          </Layout>
        </Layout>
      </ConfigTheme>
    </>
  );
}

// Style
const layoutStyle = {
  layout: {
    gap: 8,
    padding: 32,
    minHeight: "100vh",
  },
  sider: {
    background: "none",
  },
  menu: {
    height: "100%",
    borderRadius: 10,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    background: "none",
  },
  textHead: {
    fontSize: 24,
    marginLeft: 16,
  },
  account: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  content: {
    padding: 16,
    paddingRight: 0,
  },
};
