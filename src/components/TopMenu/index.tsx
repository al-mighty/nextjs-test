import { Menu } from "antd"

const TopMenu=()=>{
    return <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="mail" icon={null}>
            Navigation One
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={null}>
            <Menu.Item key="two" icon={null}>
                Navigation Two
            </Menu.Item>
            <Menu.Item key="three" icon={null}>
                Navigation Three
            </Menu.Item>
            <Menu.ItemGroup title="Item Group">
                <Menu.Item key="four" icon={null}>
                    Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={null}>
                    Navigation Five
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu.SubMenu>
    </Menu>
}

export default TopMenu;