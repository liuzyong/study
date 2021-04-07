import React from 'react'

const h = React.createElement;
export default class Cars extends React.Component {

    render() {
        const { title, children } = this.props
        // return <div >
        //     <p className="My-b">{title}</p>
        //     <p>{children}</p>
        // </div >

        return h("div", {}, [
            h("div", {}, `${title}`),
            h("div", {}, `${children}`),
        ]);

    }
}