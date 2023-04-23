import React from "react";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { Search } = Input;
import Image from "next/image";
import { useRouter } from "next/router";

function MainHeader() {
  const router = useRouter();

  return (
    <div className="bg-white fixed top-0 left-0 z-10 w-full">
      <div className="mainSize flex items-center">
        <div className="w-48 flex justify-center">
          <Image
            className="w-ful hover:cursor-pointer"
            src="/images/logo.svg"
            alt="Logo"
            width="100"
            height="100"
            onClick={() => router.push("/app-admin/companies")}
          />
        </div>
        <div className="w-full items-center flex justify-between">
          <div className="flex items-center">
            <BellOutlined style={{ fontSize: "20px" }} />
            <Search
              allowClear
              style={{
                width: 250,
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
  );
}

export default MainHeader;
