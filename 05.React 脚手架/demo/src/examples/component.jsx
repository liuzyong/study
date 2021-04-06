import { Component } from "react";

class Card extends Component {
    render(){
        const {title, children} = this.props

        return (
            <div className="card">
                <div className="title">{title}</div>
                <div className="content">{children}</div>
            </div>
        )
    }
}


export {
    Card,
}