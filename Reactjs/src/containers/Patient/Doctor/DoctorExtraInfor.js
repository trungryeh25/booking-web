import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { getExtraInforDoctorById } from "../../../services/userService";
import "./DoctorExtraInfor.scss";
import { FormattedMessage } from "react-intl";
import NumberFormat from "react-number-format";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
      extraInfor: {},
    };
  }

  async componentDidMount() {
    if (this.props.doctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }

    if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }

  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };

  render() {
    let { isShowDetailInfor, extraInfor } = this.state;
    let { language } = this.props;

    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="heading-banner">
            <FormattedMessage id="patient.extra-doctor-infor.heading-banner" />
          </div>
          <div className="clinic-banner">
            {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ""}
          </div>
          <div className="clinic-address">
            {extraInfor && extraInfor.addressClinic
              ? extraInfor.addressClinic
              : ""}
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="hide">
              <FormattedMessage id="patient.extra-doctor-infor.price" /> -{" "}
              {extraInfor &&
                extraInfor.priceTypeData &&
                language === LANGUAGES.VI && (
                  <NumberFormat
                    className="currency"
                    value={extraInfor.priceTypeData.valueVi}
                    displayType="text"
                    thousandSeparator={true}
                    suffix={" VND"}
                  />
                )}{" "}
              {extraInfor &&
                extraInfor.priceTypeData &&
                language === LANGUAGES.EN && (
                  <NumberFormat
                    className="currency"
                    value={extraInfor.priceTypeData.valueEn}
                    displayType="text"
                    thousandSeparator={true}
                    suffix={" $"}
                  />
                )}{" "}
              <span
                className="display-detail"
                onClick={() => this.showHideDetailInfor(true)}
              >
                <FormattedMessage id="patient.extra-doctor-infor.more-infor" />{" "}
              </span>
            </div>
          )}

          {isShowDetailInfor === true && (
            <>
              <div className="heading-banner">
                <FormattedMessage id="patient.extra-doctor-infor.price" />
              </div>
              <div className="body-banner">
                <div className="main-infor-banner">
                  <span className="left">
                    <FormattedMessage id="patient.extra-doctor-infor.fee" />
                  </span>
                  <span className="right">
                    {extraInfor &&
                      extraInfor.priceTypeData &&
                      language === LANGUAGES.VI && (
                        <NumberFormat
                          className="currency"
                          value={extraInfor.priceTypeData.valueVi}
                          displayType="text"
                          thousandSeparator={true}
                          suffix={" VND"}
                        />
                      )}{" "}
                    {extraInfor &&
                      extraInfor.priceTypeData &&
                      language === LANGUAGES.EN && (
                        <NumberFormat
                          className="currency"
                          value={extraInfor.priceTypeData.valueEn}
                          displayType="text"
                          thousandSeparator={true}
                          suffix={" $"}
                        />
                      )}{" "}
                  </span>
                </div>
                <div className="content-banner">
                  {extraInfor && extraInfor.note ? extraInfor.note : ""}
                </div>
              </div>
              <div className="payment">
                <FormattedMessage id="patient.extra-doctor-infor.method" />:{" "}
                {extraInfor &&
                extraInfor.paymentTypeData &&
                language === LANGUAGES.VI
                  ? extraInfor.paymentTypeData.valueVi
                  : ""}
                {extraInfor &&
                extraInfor.paymentTypeData &&
                language === LANGUAGES.EN
                  ? extraInfor.paymentTypeData.valueEn
                  : ""}
              </div>
              <div className="hide">
                <span
                  className="display-detail"
                  onClick={() => this.showHideDetailInfor(false)}
                >
                  <FormattedMessage id="patient.extra-doctor-infor.hide-i" />
                </span>{" "}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
