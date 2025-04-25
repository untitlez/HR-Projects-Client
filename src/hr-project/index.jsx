import { Card, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import { ConfigTheme } from "./components/ConfigTheme";
import { Background } from "./components/Background";
import { LoginForm } from "./pages/auth";

export default function HomePage() {
  return (
    <>
      <ConfigTheme>
        <Layout className="h-screen relative">
          <Content width="100%" className="grid place-content-center">
            <Background />
            <Card title="Sign In" className="w-full max-w-sm">
              <LoginForm />
            </Card>
          </Content>
        </Layout>
      </ConfigTheme>
    </>
  );
}
