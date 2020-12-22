import React from 'react';
import logo180 from '../assets/logo180.png';
//import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleTyping= this.handleTyping.bind(this);
    }
    
    componentDidMount() {
        const handleEnter = (e) => {
            if (e.keyCode === 13) {
                this.props.onChange(document.getElementById("searchQuery").value)
            }

        }

        document.getElementById("searchQuery").addEventListener("keypress", handleEnter)
  
    }
   
    handleChange() {
        //alert("Change!");
        const searchQuery = document.getElementById("searchQuery").value;
        this.props.onChange(searchQuery);
    }

    handleTyping() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.handleChange();
        }, 1000);
      }

    // type() {
    //     const placeholders = [
    //         "Nintendo Switch Lite",
    //         "Converse size 7",
    //         "Black goodie"
    //     ];

    //     let count = 0;
    //     let index = 0;
    //     let currentText = " ";
    //     let letter = " ";

    //     function typing() {
    //         if (count === placeholders.length) {
    //             count = 0;
    //         }

    //         currentText = texts[count];
            
    //         if (letter.length === currentText.length) {
    //             count++;
    //             index = 0
    //         }

    //         setTimeout(typing, 400);
    //     }}

    render() {
        return (
            <div className="SearchBar">
                    <a href="/">
                        <img src={logo180} alt="logo" 
                            className="
                                w-20 sm:w-28 md:w-32 lg:w-36 py-3
                                block
                                mx-auto
                            "
                    //onClick={window.location.reload()}
                    />
                    </a>


                    <div className="flex flex-wrap justify-center">
                    <input
                        id="searchQuery"
                        //onChange={this.handleTyping}
                        placeholder="Find anything secondhand."
                        className="
                            border border-gray-200 
                            h-8 w-9/12 lg:w-7/12
                            rounded  
                            pl-5 pr-3
                            align-center
                            text-sm text-center italic
                            "
                        //onChange={this.handleChange}
                        >
                    </input>

                    <button 
                        className="SearchButton
                            bg-red-500 w-9
                            h-8
                            ml-2
                            rounded
                            text-gray-100
                            text-sm"
                        onClick={this.handleChange}>🔍
                    </button>


                    
                    </div>   
            </div>
        )
    }
}