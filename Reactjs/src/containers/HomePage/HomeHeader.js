import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { withRouter } from "react-router";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div
                className="header-logo"
                onClick={() => this.returnToHome()}
              ></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id="homeheader.specialty" />{" "}
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id="homeheader.medical-facility" />{" "}
                  </b>
                </div>
                <div className="subs-title">
                  {" "}
                  <FormattedMessage id="homeheader.select-clinic" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id="homeheader.doctor" />{" "}
                  </b>
                </div>
                <div className="subs-title">
                  {" "}
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    {" "}
                    <FormattedMessage id="homeheader.medical-package" />
                  </b>
                </div>
                <div className="subs-title">
                  {" "}
                  <FormattedMessage id="homeheader.general-health-checkup" />{" "}
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>{" "}
                <FormattedMessage id="homeheader.support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VI
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>

        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up">
              <div className="title base">
                {" "}
                <FormattedMessage id="banner.base" />
              </div>
              <div className="title comprehensive">
                <FormattedMessage id="banner.comprehensive" />
              </div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Find everything" />
              </div>
            </div>
            <div className="content-down">
              <div className="options">
                <div className="option-child">
                  <div className="icon-child">
                    <i className="far fa-hospital"></i>
                  </div>
                  <div className="text-child">
                    {" "}
                    <FormattedMessage id="banner.specialist-consultation" />{" "}
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i class="fas fa-ambulance"></i>
                  </div>
                  <div className="text-child">
                    {" "}
                    <FormattedMessage id="banner.telemedicine" />{" "}
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-notes-medical"></i>
                  </div>
                  <div className="text-child">
                    {" "}
                    <FormattedMessage id="banner.general_check-up" />{" "}
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-syringe"></i>
                  </div>
                  <div className="text-child">
                    {" "}
                    <FormattedMessage id="banner.test" />{" "}
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-first-aid"></i>
                  </div>
                  <div className="text-child">
                    {" "}
                    <FormattedMessage id="banner.mental_health" />{" "}
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-tablets"></i>
                  </div>
                  <div className="text-child">
                    {" "}
                    <FormattedMessage id="banner.dentist" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
