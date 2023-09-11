import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "../css/drawer1.css";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Navigation One",
    "sub1",
    <Link to="a">
      <MailOutlined />
    </Link>
  ),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem(
      "Option 1",
      "1",
      <Link to="b">
        <SettingOutlined />
      </Link>
    ),
    getItem(
      "Option 2",
      "2",
      <Link to="b">
        <SettingOutlined />
      </Link>
    ),
  ]),

  getItem(
    "Navigation Three",
    "sub3",
    <Link to="c">
      <SettingOutlined />
    </Link>
  ),
];

const NavigationMenu = () => {
  return (
    <div>
      <Menu id="navMenu" mode="vertical" items={items} />
    </div>
  );
};

export default NavigationMenu;
