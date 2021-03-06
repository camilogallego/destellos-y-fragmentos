import React, { Component } from "react";
import Auth from "@aws-amplify/auth";
import Login from "../components/login";
import CreateBriefcase from "../components/createBriefcase";
import UpdateBriefcase from "../components/updateBriefcase";
import "./administrator.css";
import Errors from "components/errors";

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.auth = this.auth.bind(this);
    this.errorFunc = this.errorFunc.bind(this);
    this.state = {
      loggedIn: false,
      err: false,
      section: null,
    };
  }

  errorFunc() {
    if (this.state.err) {
      this.setState({ err: false });
    }
  }
  async componentDidMount() {
    let existToken = localStorage.getItem(
      "CognitoIdentityServiceProvider.k38fqmdpqt4jasnuh8c8n2o3h.mauricio.idToken"
    );
    if (existToken) {
      this.setState({ loggedIn: true });
    }
  }

  auth(state) {
    Auth.signIn(state.user, state.password)
      .then((success) => {
        console.log("success", success);
        this.setState({ loggedIn: true });
      })
      .catch((err) => {
        console.log("err", err);
        this.setState({ err: true });
      });
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <div className="containersBtn">
            <div className="containerBtn">
              <button
                className="btn"
                onClick={() => this.setState({ section: true })}
              >
                crear nuevo portafolio
              </button>
            </div>
            <div className="containerBtn">
              <button
                className="btn"
                onClick={() => this.setState({ section: false })}
              >
                agregar fotos a un portafolio
              </button>
            </div>
          </div>
          <div>
            {this.state.section ? <CreateBriefcase /> : <UpdateBriefcase />}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.err ? <Errors /> : null}
          <Login errorFunc={this.errorFunc} auth={this.auth} />
        </div>
      );
    }
  }
}

export default Administrator;
