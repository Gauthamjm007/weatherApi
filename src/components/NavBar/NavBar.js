import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { connect } from "react-redux";
import { startfetchWeather } from "../../action/weatherDataAction";
import { Link } from "react-router-dom";

function NavbarPage(props) {
  const [isOpen, setisOpen] = React.useState(false);

  const handleWeatherFetch = (lat, long) => {
    console.log(lat, long, "data");
    props.dispatch(startfetchWeather(lat, long));
  };

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("weatherapp_log", "false");
  };

  return (
    <MDBNavbar color="purple" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Weather & Corona </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/home">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/weather/state/Banglore">Weather</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/signup" onClick={handleLogout}>
              Logout
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right style={{ marginRight: 50 }}>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle caret color="yellow">
                Banglore
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                {props.states.map((data) => {
                  return (
                    <MDBDropdownItem
                      key={data.state}
                      onClick={() => handleWeatherFetch(data.lat, data.lon)}
                    >
                      <Link to={`/weather/state/${data.state}`}>
                        {data.state}
                      </Link>
                    </MDBDropdownItem>
                  );
                })}
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps)(NavbarPage);
