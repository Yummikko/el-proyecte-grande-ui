import React, { Component } from "react";

class HideShow extends Component {
  constructor() {
    super();
    this.state = {
      showHideFName: true,
      showHideLName: true,
      showHideMessage: false
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.hideAll = this.hideAll.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideFName":
        this.setState({ showHideFName: !this.state.showHideFName });
        this.setState({ showHideMessage: false });
        break;
      case "showHideLName":
        this.setState({ showHideLName: !this.state.showHideLName });
        this.setState({ showHideMessage: false });
        break;
      default: console.log(null);
    }
  }

  hideAll() {
    this.setState({ showHideFName: !this.state.showHideFName });
    this.setState({ showHideLName: !this.state.showHideLName });
    this.setState({ showHideMessage: !this.state.showHideMessage });
  }

  render() {
    const { showHideFName, showHideLName, showHideMessage } = this.state;
    return (
      <div>
        <table>
          <tbody>
          {showHideFName && (
            <tr>
              <td>First Name :</td>
              <td>
                <input type="text" id="fName" />
              </td>
            </tr>
          )}
          {showHideLName && (
            <tr>
              <td>Last Name :</td>
              <td>
                <input type="text" id="lName" />
              </td>
            </tr>
          )}
          {showHideFName && showHideLName && (
            <tr>
              <td>
                <button onClick={() => this.hideAll()}>Submit</button>
              </td>
            </tr>
          )}
          {showHideMessage && (
            <tr>
              <td>
                Success
              </td>
            </tr>
          )}
          <tr>
            <td>
              <button onClick={() => this.hideComponent("showHideFName")}>
                Hide First Name
              </button>
            </td>
            <td>
              <button onClick={() => this.hideComponent("showHideLName")}>
                Hide Last Name
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HideShow;