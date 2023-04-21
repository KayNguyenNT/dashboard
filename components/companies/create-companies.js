import { Row, Col, Button, Input, Tooltip, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const data = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
  },
];

const CreateCompanies = (props) => {
  const handleClose = () => {
    props.fnClose(false);
  };
  return (
    <div className="CreateCompanies">
      <Row className="shadow-two py-2">
        <Col className="text-xl" span={6}>
          Create A New Company
        </Col>
        <Col className="flex justify-end" span={18}>
          <Button className="bg-primary-teral-color">Save</Button>
          <Button className="bg-primary-teral-color ">Save & Close</Button>
          <Button className="bg-primary-red-color" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="bg-primary-grey-color">Merge</Button>
        </Col>
      </Row>

      <Row className="py-5" gutter={24}>
        <Col span={8}>
          <div className="shadow">
            <div className="px-2 py-2 bg-primary-grey-color">Core</div>
            <div className="px-2 py-2">Professional</div>
          </div>
          <div>
            <p className="font-bold">Score</p>
            <Input
              placeholder="0"
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
          </div>
          <p className="font-bold">Company Owner</p>
          <div>
            <Select
              placeholder="Choose one..."
              style={{
                width: "100%",
              }}
              options={data}
            />
          </div>
        </Col>

        <Col className="shadow pt-2 pb-4" span={16}>
          <Row>
            <Col span={24}>
              <h2>Core</h2>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <p className="font-bold">Company Name</p>
              <Input />
            </Col>
            <Col span={12}>
              <p className="font-bold">Company Email</p>
              <Input />
            </Col>
          </Row>
          <p className="font-bold">Company Address</p>

          <Row gutter={[24, 12]}>
            <Col span={24}>
              <Input placeholder="Address1" />
            </Col>

            <Col span={24}>
              <Input placeholder="Address2" />
            </Col>

            <Col span={12}>
              {" "}
              <Input placeholder="City" />
            </Col>
            <Col span={12}>
              <Select
                placeholder="State"
                style={{
                  width: "100%",
                }}
                options={data}
              />
            </Col>
            <Col span={12}>
              {" "}
              <Input placeholder="Zip Code" />
            </Col>
            <Col span={12}>
              <Select
                placeholder="Country"
                style={{
                  width: "100%",
                }}
                options={data}
              />
            </Col>
          </Row>

          <Row className="">
            <Col span={24}>
              <p className="font-bold">Phone</p>
              <Input placeholder="Phone" />
            </Col>

            <Col span={24}>
              <p className="font-bold">Website </p>
              <Input placeholder="Website" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default CreateCompanies;
