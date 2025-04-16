import React from "react";
import { Space, Switch } from "antd";

export const ToggleTheme = ({ dark, setDark }) => (
    <Switch
      checkedChildren="Dark"
      unCheckedChildren="Light"
      checked={dark}
      onChange={() => setDark(!dark)}
    />
);