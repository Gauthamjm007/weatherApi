import React from "react";
import NavbarPage from "../NavBar/NavBar";
import { MDBDataTable } from "mdbreact";
import { connect } from "react-redux";

function CoronaCasesTable(props) {
  const datatable = {
    columns: [
      {
        label: "State",
        field: "State",
        sort: "asc",
        width: 200,
      },
      {
        label: "Confirmed",
        field: "Confirmed",
        sort: "desc",
        width: 150,
      },
      {
        label: "Active",
        field: "Active",
        sort: "desc",
        width: 150,
      },
      {
        label: "Recovered",
        field: "Recovered",
        sort: "desc",
        width: 150,
      },
      {
        label: "Deaths",
        field: "Deaths",
        sort: "desc",
        width: 150,
      },
    ],
    rows: props.coronaCases,
  };

  return (
    <>
      <NavbarPage />
      <MDBDataTable
        striped
        bordered
        small
        data={datatable}
        hover
        entries={38}
        order={["Confirmed", "asc"]}
      ></MDBDataTable>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    coronaCases: state.coronaCases,
  };
};
export default connect(mapStateToProps)(CoronaCasesTable);
