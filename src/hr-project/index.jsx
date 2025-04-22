import { useState } from "react";
import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { ToggleTheme } from "./components/ToggleTheme";
import { Account } from "./components/Account";
import { ConfigTheme } from "./components/ConfigTheme";
import { menuItems } from "./pages/admin/constants/menuItem";
import { AdminTable } from "./pages/admin/AdminTable";
import { AdminForm } from "./pages/admin/AdminForm";

export default function HrHome() {
  const [tabsMenu, setTabsMenu] = useState("");

  const handleClick = (e) => {
    const subMenu = menuItems.flatMap((menu) => menu.children);
    const items = subMenu.find((item) => item.key === e.key);
    setTabsMenu(items);
  };

  return (
    <>
      <ConfigTheme>
        <Layout style={layoutStyle.layout}>
          {/* Menu Bar  */}
          <Sider width="20%" style={layoutStyle.sider}>
            <Menu
              style={layoutStyle.menu}
              onClick={handleClick}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["menu1"]}
              mode="inline"
              items={menuItems}
            />
          </Sider>

          <Layout style={layoutStyle.content}>
            {/* Header & Toggle Theme & Account  */}
            <Header style={layoutStyle.header}>
              <p style={layoutStyle.text}>{tabsMenu.label}</p>
              <div style={layoutStyle.account}>
                <ToggleTheme />
                <Account />
              </div>
            </Header>

            {/* Table  */}
            <Content>
              {tabsMenu.type === "new employee" ? (
                <AdminForm />
              ) : (
                <AdminTable tabsMenu={tabsMenu} />
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
    padding: 16,
  },
  sider: {
    background: "none",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    background: "none",
  },
  text: {
    fontSize: "1.5rem",
    marginLeft: "16px",
  },
  account: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  content: {
    minHeight: "100vh",
  },
  menu: {
    height: "100%",
    borderRadius: "1rem",
  },
};
