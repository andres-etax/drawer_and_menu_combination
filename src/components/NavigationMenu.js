import React from "react"
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined
} from "@ant-design/icons"
import { Menu } from "antd"

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    }
}

const items = [
    getItem("Navigation One", "sub1", <MailOutlined />),

    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
        getItem("Option 1", "1"),
        getItem("Option 2", "2")
    ]),

    getItem("Navigation Three", "sub4", <SettingOutlined />)
]

const NavigationMenu = () => {
    return (
        <div>
            <Menu style={{ width: 256, paddingRight: '5px' }} mode="vertical" items={items} />
        </div>
    )
}

export default NavigationMenu
