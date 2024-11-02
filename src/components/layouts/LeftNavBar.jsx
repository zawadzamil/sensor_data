import React, {useState} from 'react';
import {Layout, Menu} from "antd";
import Link from "next/link";
import {MAIN_NAVS} from "@/helpers/Navs";
const { Sider, Content } = Layout;
const LeftNavBar = () => {
    const items = MAIN_NAVS;
    const [collapsed, setCollapsed] = useState(false);
    return (

        <div>


            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical "/>

                <Menu
                    theme="dark"
                    mode="inline"
                    style={{height:'100vh', backgroundColor:'#101840', paddingTop : '1rem'}}
                    defaultSelectedKeys={['0']}
                    items={items?.map((item, index) => {
                        return{
                            key: index,
                            label:  <Link href={item.path}> {item.title}</Link>
                        };
                    })}
                />
            </Sider>
        </div>
    );
};

export default LeftNavBar;