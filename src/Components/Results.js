import React from 'react';
//import './Results.css';
import { Listing } from './Listing';

export class Results extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.toggleResults = this.toggleResults.bind(this);
        this.resultsBar = this.resultsBar.bind(this);
    }

    toggleResults() {
        this.props.toggleResults(document.getElementById("sort").value);
    }

    resultsBar() {
        if (this.props.searchTerm) {
            return (
                <div className="flex justify-center">
                    <p className="inline-block 
                                    text-left
                                    h-4 mt-2 
                                    p-1 pr-3 
                                    text-xs">
                                    {`Results for ${this.props.searchTerm}`}
                    </p>
                    {/* <button onClick={this.toggleResults} className=" inline-block
                             border border-gray-500 text-xs my-2 p-1 px-2 rounded">
                            {this.props.resultsDisplay}
                    </button> */}
                    
                    <select id="sort" onChange={this.toggleResults}
                    className="h-7 mt-2
                    text-xs border rounded text-center border-gray-500">
                        <option value="⚡️ Trending ⚡️">⚡️ Trending ⚡️</option>
                        <option value="Highest price first ▲">Highest price first ▲</option>
                        <option value="Lowest price first ▼">Lowest price first ▼</option>
                    </select>


                </div>
            )
        } else {
            return
        }
    }

    render() {
        return (
        <div className="">
            {this.resultsBar()}
            <div className="results
                    w-full flex flex-wrap justify-center">
                    
                    {this.props.Data.map(
                        (listing) => {
                            return <Listing listing={listing}/>
                        }
                    )}
            



            </div>
            
        </div>


        )
    }
}