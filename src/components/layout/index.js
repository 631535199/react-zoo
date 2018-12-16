import React from "react";
import Routers from "../../routes/Routers";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content } = Layout;

const layout = () => (
  <div>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">homepage</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">aboutpage</Link>
          </Menu.Item>
          <Menu.Item key="3">listpage</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Routers />
        </div>
      </Content>
    </Layout>
  </div>
);

export default layout;
