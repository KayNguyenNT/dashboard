import React from "react";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Layout, Menu } from "antd";
const { Search } = Input;

const items = ["1"].map((key) => ({
  key,
  label: (
    <div className="bg-white fixed top-0 left-0 z-10 w-full">
      <div className="mainSize flex items-center">
        <div className="w-48 flex justify-center">
          <div className="w-20">
            <img className="w-full" src="/images/logo.svg" />
          </div>
        </div>
        <div className="w-full items-center flex justify-between">
          <div className="flex items-center">
            <BellOutlined style={{ fontSize: "20px" }} />
            <Search
              allowClear
              style={{
                width: 304,
              }}
            />
          </div>
          <div className="flex items-center">
            <div className="mr-10">User</div>
            <SettingOutlined />
          </div>
        </div>
      </div>
    </div>
  ),
}));

function MainHeader() {
  return (
    /*  <div className="bg-white fixed top-0 z-10 w-full">
      <div className="mainSize flex items-center">
        <div className="w-48 flex justify-center">
          <div className="w-20">
            <img className="w-full" src="/images/logo.svg" />
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <BellOutlined style={{ fontSize: "20px" }} />
            <Search
              allowClear
              style={{
                width: 304,
                height: 5,
              }}
            />
          </div>
          <div className="flex">
            <div className="mr-10">User</div>
            <SettingOutlined />
          </div>
        </div>
      </div>
    </div> */
    <Menu
      mode="horizontal"
      selectable={false}
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
}

export default MainHeader;
