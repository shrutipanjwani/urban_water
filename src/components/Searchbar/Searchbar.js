import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "./Searchbar.css";

const names = [
  "Brian",
  "Caley",
  "Casey",
  "Caroline",
  "Chris",
  "David",
  "Misha",
];
const escapeRegexCharacters = (str) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return names.filter((name) => regex.test(name));
};

const getSuggestionValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => suggestion;

const onSuggestionSelected = (  event,  { suggestion, suggestionValue, method }) => {
  event.preventDefault();
  console.log("ping... ", suggestion, suggestionValue, method);
};

const renderInputComponent = (inputProps) => (
  <div className="inputContainer">
    {/* <img
        className="icon"
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
      /> */}
    <input {...inputProps} />
  </div>
);

//  import image from '../components/images/div_1_image.jpg';
class Searchbar extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange,
    };
    return (
      <header>
        <div className="title">
          <h1>Simple and reliable maps</h1>
          <p>We are Water Experts committed to your livelihoods</p>
          <h2>Flood Risk Maps</h2>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSuggestionSelected}
            inputProps={inputProps}
            renderInputComponent={renderInputComponent}
          />
          {/* <input type="text" className="searchCtrlGeocoderInput" placeholder="Enter Address, Post Code, City" aria-label></input> */}
          <p className="para">
            Our maps provide flood risk information and flood protection
            intervention in an easy to use format. Check out our maps below.
          </p>
        </div>
      </header>
    );
  }
}
export default Searchbar;
