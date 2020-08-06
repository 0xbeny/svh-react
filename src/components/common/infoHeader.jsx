import React, { Component } from "react";
import { getHeaderInfoData } from "../../services/services";

class InfoHeader extends Component {
  state = {
    headerInfo: [],
  };
  componentDidMount() {
    this.setState({ headerInfo: getHeaderInfoData() });
  }
  render() {
    const { headerInfo } = this.state;
   
    const infoDivParentClass =
      "row text-center p-2 align-items-center svh-info ";
    return (
      <div className={infoDivParentClass}>
        {headerInfo.map((info) => (
          <div key={info.key} className={info.divClass}>
            {info.meta + " "}
            <i className={info.FAname} aria-hidden="true"></i>
          </div>
        ))}
      </div>
    );
  }
}

export default InfoHeader;
