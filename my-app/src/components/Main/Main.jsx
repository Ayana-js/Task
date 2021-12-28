import axios from "axios";
import React from "react";
import Category from "../Category/Category";
import s from './Main.module.css'


class Main extends React.Component {
    state = {
        icons: [],
        service: []
    }
    componentDidMount() {
       axios.get('https://60ab66305a4de40017cc9fbf.mockapi.io/api/category')
       .then(res => {
        const icons = res.data
        this.setState({ icons })
    })

        axios.get('https://60ab66305a4de40017cc9fbf.mockapi.io/api/category/2/service')
        .then(res => {
            const service = res.data
            this.setState({ service })
        })
    }

    render() {
        return <div className={s.wrap}>
        <Category icons={this.state.icons}/>
        </div>
    }
}

export default Main