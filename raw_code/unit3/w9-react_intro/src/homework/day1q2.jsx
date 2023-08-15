import React from "react";

class ImageComponent extends React.Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} className="w-25 h-25"/>;
    }
}

export default ImageComponent;