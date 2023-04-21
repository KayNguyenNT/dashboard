import { Layout, Menu } from "antd";
import MainHeader from "./main-header";
import { useRouter } from "next/router";

import React, { useState } from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const { Header, Content, Sider } = Layout;

const items = [
  getItem("Dashboard", "1", <MailOutlined />),
  getItem("Calendar", "z2", <CalendarOutlined />),
  getItem("Contacts", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem("Companies", "7", <SettingOutlined />),
  getItem("Points", "8", <CalendarOutlined />),
  getItem("Stages", "9", <CalendarOutlined />),
  getItem("Reports", "10", <CalendarOutlined />),
  getItem("Tag", "2", <CalendarOutlined />),
  getItem("Collapse", "11", <CalendarOutlined />),
  getItem("Segments", "12", <CalendarOutlined />),
  getItem("Component", "13", <CalendarOutlined />),
  getItem("Campagins", "14", <CalendarOutlined />),
  getItem("Channels", "15", <CalendarOutlined />),
];

const LayoutPart = (props) => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  const router = useRouter();

  const onChangePage = (e) => {
    router.push(`/app-admin/${e.domEvent.target.innerHTML.toLowerCase()}`);
  };

  return (
    <div>
      <Layout>
        <Header style={{ height: 98 }}>
          <MainHeader />
        </Header>
        <Content>
          <Layout style={{ paddingTop: 20 }}>
            <Sider width={250} style={{}}>
              <Menu
                style={{ width: 250, height: "100%" }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode={mode}
                theme={theme}
                items={items}
                onClick={onChangePage}
              />
            </Sider>
            <Content style={{ paddingLeft: 20, paddingRight: 10 }}>
              <main>{props.children}</main>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutPart;
