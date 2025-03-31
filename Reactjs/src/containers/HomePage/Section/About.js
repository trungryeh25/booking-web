import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về trgn312
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="470"
              src="https://www.youtube.com/embed/34Na4j8AVgA"
              title="The Weeknd - Starboy ft. Daft Punk (Official Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className="content-right">
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
            <span class="badge badge-secondary">New</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
