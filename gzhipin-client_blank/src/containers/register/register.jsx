import React,{Component}from 'react'
import {connect} from 'react-redux'
import {NavBar,WingBlank,List,InputItem,Radio,Button,WhiteSpace} from 'antd-mobile'

import Logo from '../../components/logo/logo'
const ListItem=List.Item
class Register extends Component{
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    }
    register=()=>{
        console.log(this.state)
    }
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    goLogin=()=>{
        this.props.history.replace('/login')
    }
    render(){
        return (
            <div>
                <NavBar type='primary'>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={(val)=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码' onChange={(val)=>{this.handleChange('password',val)}}>密码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请确认密码' onChange={(val)=>{this.handleChange('password2',val)}}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <ListItem>用户类型：
                            &nbsp;&nbsp;<Radio onChange={()=>{this.handleChange('type','dashen')}} checked={this.state.type==='dashen'}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;<Radio onChange={(val)=>{this.handleChange('type','laoban')}} checked={this.state.type==='laoban'}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect()(Register)
