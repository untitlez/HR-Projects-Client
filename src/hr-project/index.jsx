import { useState } from "react";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import { ToggleTheme } from "./components/ToggleTheme";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { EmployeeList } from "./pages/hr/EmployeeList";
import { Account } from "./components/Account";
import { menuItems } from "./constants/menuItem";

export default function HrHome() {
  const [dark, setDark] = useState(true);
  const [tabsMenu, setTabsMenu] = useState("");

  const handleClick = (e) => {
    const items = menuItems.flatMap((menu) => menu.children);
    const pathItems = items.find((item) => item.key === e.key);
    setTabsMenu(pathItems);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Layout className="min-h-screen gap-2 p-4">
          <Sider width="20%" style={{ background: "none" }}>
            <Menu
              className="h-full rounded-2xl "
              onClick={handleClick}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["menu1"]}
              mode="inline"
              items={menuItems}
            />
          </Sider>
          <Content className="flex flex-col">
            <div className="flex justify-end items-center gap-4 py-4">
              <p className="text-2xl flex-1 ml-4">{tabsMenu.label}</p>
              <ToggleTheme dark={dark} setDark={setDark} />
              <Account />
            </div>
            <EmployeeList tabsMenu={tabsMenu} className="min-h-screen"/>
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  );
}
