import React from "react";
import SearchInput from "./SearchInput";
import "./Searchbar.css";


//  import image from '../components/images/div_1_image.jpg';
const Searchbar = () => {
    return (
        <header>
            <div className="title space-y-3">
                <h1 className="text-5xl ">Simple and reliable maps</h1>
                <p>We are Water Experts committed to your livelihoods</p>
                <h2 className="text-2xl">Flood Risk Maps</h2>
                <SearchInput />
                <p className="para">
                Our maps provide flood risk information and flood protection
                intervention in an easy to use format. Check out our maps below.
                </p>
            </div>
        </header>
    );
}
export default Searchbar;
