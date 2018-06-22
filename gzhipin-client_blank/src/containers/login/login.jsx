import React,{Component}from 'react'
import {connect} from 'react-redux'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'
class Login extends Component{
    state={
        username:'',
        password:''
    }
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    login=()=>{
        console.log(this.state)
    }
    goRegister=()=>{
        this.props.history.replace('/register')
    }
    render(){
        return (
            <div>
                <NavBar type='primary'>用户登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={(val)=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码' onChange={(val)=>{this.handleChange('password',val)}}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goRegister}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect()(Login)