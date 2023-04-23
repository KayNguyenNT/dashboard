import { Button, Col, Row, Input, Checkbox, Table, Modal } from "antd";
import CreateCompanies from "./create-companies";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const columns = [
  {
    title: <Checkbox></Checkbox>,
    dataIndex: "name",
    key: "Check",
    render: () => <Checkbox></Checkbox>,
  },
  {
    title: "Company name",
    dataIndex: "companyname",
    key: "companyname",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Company Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Company Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Company Website",
    dataIndex: "website",
    key: "website",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "# contact",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
];
const data = [
  {
    key: "1",
    companyname: "John Brown",
    email: "company@gmail.com",
    website: "Mywebsite.com",
    score: 32,
    address: "New York No. 1 Lake Park",
    contact: ["nice", "developer"],
    ID: "1",
  },
  {
    key: "2",
    companyname: "Jim Green",
    email: "company@gmail.com",
    website: "Mywebsite.com",
    score: 42,
    address: "London No. 1 Lake Park",
    contact: ["loser"],
    ID: "1",
  },
  {
    key: "3",
    companyname: "Joe Black",
    email: "company@gmail.com",
    website: "Mywebsite.com",
    score: 32,
    address: "Sydney No. 1 Lake Park",
    contact: ["cool", "teacher"],
    ID: "1",
  },
];

function Companies() {
  const { Search } = Input;
  const [open, setOpen] = useState(false);

  const HandleClose = (value) => {
    setOpen(value);
  };

  const onRegisterCompany = () => {
    setOpen(true);
  };

  return (
    <div className="Companies">
      <Row className="flex">
        <Col span={8}>
          <p className="text-2xl">Companies</p>
        </Col>
        <Col className="text-end" span={16}>
          <Button onClick={onRegisterCompany}>
            <PlusOutlined />
            New
          </Button>
        </Col>
        <Modal
          centered
          open={open}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          width={1000}
          closable={false}
        >
          <CreateCompanies fnClose={HandleClose} />
        </Modal>
      </Row>
      <Row className="mt-4">
        <Col className="h-fit" span={24}>
          <Search
            allowClear
            style={{
              width: 304,
            }}
            placeholder="Search..."
          />
        </Col>
      </Row>
      <Table className="mt-10" columns={columns} dataSource={data} />
    </div>
  );
}

export default Companies;
