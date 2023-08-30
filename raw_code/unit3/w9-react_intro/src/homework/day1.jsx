import React from "react";

export const ButtonComponent = (props) => {
  return <button className="w-25 h-25">{props.label}</button>;
};

export class ImageComponent extends React.Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} className="w-25 h-25" />
    );
  }
}
