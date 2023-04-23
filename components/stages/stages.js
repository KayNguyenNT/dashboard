import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Usernam",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phones",
  },
  {
    title: "Address",
    dataIndex: "website",
    key: "address",
  },
];

function StagesComponent({ dataUser }) {
  let dataUserAddKey = [];
  if (dataUser) {
    dataUserAddKey = dataUser.map((user, index) => {
      return {
        ...user,
        key: `user${index}`,
      };
    });
  }

  return (
    <div>
      <Table columns={columns} dataSource={dataUserAddKey} />
    </div>
  );
}

export default StagesComponent;
