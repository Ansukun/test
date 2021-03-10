import React from "react";
import Top from "../components/BackTop";
import { auth } from '../firebase'

import HeroSection from "../components/HeroSection";
import { useHistory , link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import history from "../history"
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchBar from "../components/searchBar";
import { Avatar, Image } from "antd";
import "antd/dist/antd.css";
import "./AppBar.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  TeamOutlined,
  LogoutOutlined,
  SettingOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { IconButton, Paper } from "@material-ui/core";

const { Header, Sider, Content, Footer } = Layout;


export default class Appbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }


  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

   
  render() {
    return (
      <>
      
      <Layout
        style={{
          overflow: "auto",
          minHeight: "100vw",
          width: "100%",
          left: 0,
          
        }}
      >
        <Sider
          width="150"
          position="fixed"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <Avatar
              size={{
                xs: 50,
                sm: 50,
                md: 50,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              src={
                <Image src="https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/home_new%2Fic_logo.svg?alt=media&token=831e344c-4eee-40ac-afdf-8928ab81bcb9" />
              }
            />
          </div>

          <Menu theme="dark" mode="inline" 
          defaultSelectedKeys={["1"]}>
            
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            
            
            <Link  to = "/AddClient">
            <Menu.Item key="2" icon={<TeamOutlined />}>
              Clients 
            </Menu.Item>
            </Link>
            
            <Menu.Item key="3" icon={<AuditOutlined />}>
              Invoice
            </Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined spin />}>
              Settings
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined   onClick ={() => auth.signOut()}/>}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Top />
          
            <Header
              className="site-layout-background"
              style={{ padding: 0,margin: 0, display: "block",top:0,position:'sticky',}}
            >
              
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <span
                style={{
                  fontSize: "2rem",
                  padding: 10,
                  display: "-ms-inline-flexbox",
                  fontFamily: "Roboto Mono",
                }}
              >
                NEXTSACKS
              </span>
              <Image.PreviewGroup>
                <Image
                  width={25}
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
              </Image.PreviewGroup>
              <IconButton style={{ float: "right", margin: "auto" }}>
                <Avatar
                  size={"default"}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </IconButton>
              <IconButton
                style={{
                  color: "black",
                  size: "medium",
                  position: "relative",
                  float: "right",
                  display: "block",
                  margin: 10,
                }}
              >
                <Badge color="secondary" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Header>
            
            <HeroSection/>
           
           
          
          <Paper
            elevation={3}
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <Content className="site-layout-background">
              <SearchBar />
            </Content>
          </Paper>
          <Paper>
            <Footer
              style={{
                borderTop: "1px solid #e8e8e8",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              Nextstack Design ©2021 Created by Xtech BA2S
            </Footer>
          </Paper>
        </Layout>
      </Layout>
      </>
    );
  }
}




