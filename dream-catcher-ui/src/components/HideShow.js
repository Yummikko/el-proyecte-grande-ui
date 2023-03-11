import React, { Component } from "react";

class HideShow extends Component {
  constructor() {
    super();
    this.state = {
      showHideFName: true,
      showHideLName: true
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  
  hideComponent(name) {
    switch (name) {
      case "showHideNName":
        this.setState({ showHideFName: !this.state.showHideFName });
        break;
      case "showHideEmail":
        this.setState({ showHideLName: !this.state.showHideLName });
        break;
      default: console.log("null");
    }
  }

  render() {
        const { showHideNName, showHideEmail } = this.state;
        return (
            <div>
            <table>
                {showHideNName && (
                <tr>
                    <td>Nick Name :</td>
                    <td>
                    <input type="text" id="nName" />
                    </td>
                </tr>
                )}
                {showHideEmail && (
                <tr>
                    <td>Email :</td>
                    <td>
                    <input type="text" id="email" />
                    </td>
                </tr>
                )}
                {showHideNName && showHideEmail && (
                <tr>
                    <td>
                    <button>Submit</button>
                    </td>
                </tr>
                )}
                <tr>
                <td>
                    <button onClick={() => this.hideComponent("showHideNName")}>
                    Hide Nick Name
                    </button>
                </td>
                <td>
                    <button onClick={() => this.hideComponent("showHideEmail")}>
                    Hide Email
                    </button>
                </td>
                </tr>
            </table>
            </div>
        );
    }
}

export default HideShow;