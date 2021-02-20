import React, {useState, useContext} from "react";
import Autosuggest from "react-autosuggest";
import { useHistory,Switch, Route } from "react-router-dom";
import uwContext from '../../context/uw/uwContext';
import "./Searchbar.css";


//  import image from '../components/images/div_1_image.jpg';
const SearchInput = () => {
    const {selectedPlace, setPlace} = useContext(uwContext)
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [featureSet, setFeatureSet] = useState([]);
    
    const history = useHistory();

    const escapeRegexCharacters = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    
    const getFeatureSet = value => {
        // fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}&types=address,region,poi,country,district,locality,neighborhood,postcode&country=gb`)

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}&types=region,country,district,neighborhood,postcode&country=gb`)
        .then(response => response.json())
        .then(data => setFeatureSet(data.features))
    };

    const getSuggestions = (value) => {
        const sugs = [];
        const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());

        if (escapedValue === "") {
            return sugs;
        }

        // const inputLength = escapedValue.length;
        getFeatureSet(escapedValue);

        featureSet.map(function(feature){
            sugs.push(feature.text)
        })
        return sugs;
    };

    const getSuggestionValue = (suggestion) => suggestion;

    const renderSuggestion = (suggestion) => suggestion;

    const onSuggestionSelected = (  event,  { suggestion, suggestionValue, method }) => {
        event.preventDefault();
        let place = suggestion.replace(/\s+/g, '-').toLowerCase()

        const selectedFeature = featureSet.filter(function(feature) {
            if(feature.text == suggestion) {
                feature.sanitised = suggestion.replace(/\s+/g, '-').toLowerCase()
                return feature
            }
        })

        const result = {
            selectedFeature: selectedFeature
        }
        setPlace(result);
        history.push('/explore-towns/flood-risk-map-' + place);
    };

    const renderInputComponent = (inputProps) => (
        <div className="inputContainer">
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
        setFeatureSet([]);
    };

    const inputProps = {
        placeholder: (window.location.pathname != '/' && selectedPlace.text) ? selectedPlace.text : "Type Enter ZIP Code, City, or State",
        value,
        onChange: onChange
    };
    return (
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
    );
}
export default SearchInput;
