import React from "react";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BackTop>
          <div style={style}><UpCircleOutlined /></div>
        </BackTop>
      </>
    );
  }
}