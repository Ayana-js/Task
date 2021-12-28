import React from "react";
import s from '../Main/Main.module.css'
import { NavLink } from "react-router-dom";
import Service from "../Service/Service";
import error from '../../img/error.jpg'


class Category extends React.Component {
    
    render() {
    return <div className={s.category}>         
    {this.props.icons.map(i => <div> <NavLink to='/service'>
        <object data={i.logo} type="image/jpg">
            <img src={error} alt="404" className={s.logo} />
        </object> </NavLink> <p>{i.title}</p> </div>)}
    </div>
    }
}

export default Category