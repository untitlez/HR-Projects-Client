import { ConfigProvider, theme } from "antd";
import { useHrStore } from "../store/store";

export const ConfigTheme = ({ children }) => {
  const { dark } = useHrStore();

  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
