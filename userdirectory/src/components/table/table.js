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

  componentDidMount() {
    API.ApiSearch()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm,
      });
    }
  };
  render() {
    return <div></div>;
  }
}

export default Table;
