import React from "react";
import API from "../../utils/API";
import Search from "../search/search";
import "../table/table.css";
import DateFormat from "dateformat";
import react, { Component } from "react";

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
    return (
      <div>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />

        <div className="table-responsive">
          <table className="table table-striped table-resposive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  First Name{" "}
                  <span className="downArrow" onClick={this.sortByFName}></span>
                </th>
                <th>
                  Last Name{" "}
                  <span className="downArrow" onClick={this.sortByLName}></span>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB </th>
              </tr>
            </thead>

            {this.state.results &&
              this.state.results.map((item) =>
                item.name.first.toLowerCase().includes(this.state.search) ? (
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td>
                        <img
                          src={item.picture.thumbnail}
                          className="rounded-circle"
                          alt="thumbnail"
                        />
                      </td>
                      <td>{item.name.first}</td>
                      <td>{item.name.last}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                    </tr>
                  </tbody>
                ) : item.name.last.toLowerCase().includes(this.state.search) ? (
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td>
                        <img
                          src={item.picture.thumbnail}
                          className="rounded-circle"
                          alt="thumbnail"
                        />
                      </td>
                      <td>{item.name.first}</td>
                      <td>{item.name.last}</td>
                      <td>{item.phone} </td>
                      <td>{item.email}</td>
                      <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                    </tr>
                  </tbody>
                ) : null
              )}
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
