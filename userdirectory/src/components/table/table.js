import React from "react";
import API from "../../utils/API";
import Search from "../search/search";
import "../table/table.css";
import DateFormat from "dateformat";

import React, { Component } from "react";

class Table extends React.Component {
  state = {
    search: "",
    sortOrder: "",
    results: [],
  };
  render() {
    return <div></div>;
  }
}

export default Table;
