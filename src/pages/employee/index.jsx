import { Card, Layout } from "antd";
const { Header, Sider, Content } = Layout;

import { useMenuStore } from "../../store/store";
import { menuItems } from "../employee/constants/menuItem";
import { leaveDays, personal } from "./constants/personalData";

import { ConfigTheme } from "../../components/ConfigTheme";
import { ToggleTheme } from "../../components/ToggleTheme";
import { Account } from "../../components/Account";
import { MenuBar } from "../../components/MenuBar";
import { MyProfile } from "./MyProfile";
import { LeaveForm } from "./LeaveForm";

export default function EmployeeHome() {
  const { tabsMenu } = useMenuStore();

  return (
    <>
      <ConfigTheme>
        <Layout style={layoutStyle.layout}>
          {/* Menu Bar  */}
          <Sider width="20%" breakpoint="lg" style={layoutStyle.sider}>
            <MenuBar
              menuItems={menuItems}
              type="profile"
              label="My Profile"
              theme="dark"
              defaultSelectedKeys="sub1-1"
            />
          </Sider>

          <Card style={layoutStyle.layoutContent}>
            {/* Header & Toggle Theme & Account  */}
            <Header style={layoutStyle.header}>
              <p style={layoutStyle.textHead}>{tabsMenu.label}</p>
              <div style={layoutStyle.account}>
                <ToggleTheme />
                <Account
                  fullName={personal.fullName}
                  position={personal.position}
                />
              </div>
            </Header>

            {/* Table  */}
            <Content style={layoutStyle.content}>
              {tabsMenu.type === "request" ? (
                <LeaveForm personal={personal} />
              ) : (
                <div>
                  <MyProfile
                    personal={personal}
                    leaveDays={leaveDays}
                    tabsMenu={tabsMenu}
                  />
                </div>
              )}
            </Content>
          </Card>
        </Layout>
      </ConfigTheme>
    </>
  );
}

// Style
const layoutStyle = {
  layout: {
    gap: 16,
    padding: 32,
    minHeight: "100vh",
  },
  sider: {
    background: "none",
  },
  layoutContent: {
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    background: "none",
  },
  textHead: {
    fontSize: 24,
  },
  account: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  content: {
    padding: 16,
  },
};
