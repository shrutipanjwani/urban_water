import React, {useState} from "react";
import Autosuggest from "react-autosuggest";
import "./Searchbar.css";


//  import image from '../components/images/div_1_image.jpg';
const Searchbar = ({featureSet}) => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const escapeRegexCharacters = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const getSuggestions = (value) => {
        
        const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());

        if (escapedValue === "") {
            return [];
        }
        const inputLength = escapedValue.length;
        const sugs = []

        // const regex = new RegExp("^" + escapedValue, "i");
        featureSet.map(function(feature){
            if(feature.text.toLowerCase().slice(0, inputLength) === escapedValue) {
                sugs.push(feature.text)
            }
        })
        // const sugs = featureSet.filter(feature => feature.text.toLowerCase() === value.trim().toLowerCase());

        return inputLength === 0 ? [] : sugs;
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

    const onChange = (event, { newValue, method }) => {
        setValue(newValue);
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: "Type 'c'",
        value,
        onChange: onChange,
    };
    return (
        <header>
            <div className="title">
                <h1>Simple and reliable maps</h1>
                <p>We are Water Experts committed to your livelihoods</p>
                <h2>Flood Risk Maps</h2>
                <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
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
export default Searchbar;
