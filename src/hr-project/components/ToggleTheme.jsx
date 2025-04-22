import React from "react";
import { Switch } from "antd";
import { useHrStore } from "../store/store";

export const ToggleTheme = () => {
  const { dark, setDark } = useHrStore();
  return (
    <Switch
      checkedChildren="Dark"
      unCheckedChildren="Light"
      checked={dark}
      onChange={setDark}
    />
  );
};
