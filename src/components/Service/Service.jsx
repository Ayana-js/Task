import React from "react";
import axios from "axios";
import s from './Service.module.css'
import error from '../../img/error.jpg'

class Service extends React.Component {
    state = {
        service: []
    }
    componentDidMount() {
        axios.get('https://60ab66305a4de40017cc9fbf.mockapi.io/api/category/2/service')
        .then(res => {
            const service = res.data
            this.setState({ service })
        })
    }
    render() {
    return <div className={s.wrap}> 
        <div className={s.service}>
        {this.state.service.map(ser => <div> 
            <object data={ser.logo} type="image/jpg">
                <img src={error} alt="404" className={s.logo} />
            </object> <p> {ser.title} </p></div> )}
        </div>
    </div>
    }}

export default Service