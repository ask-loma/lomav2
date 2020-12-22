import React from 'react';
import depop from '../assets/depop.png';
import ebay from '../assets/ebay.png';
import gumtree from '../assets/gumtree.png';
import facebook from '../assets/facebook.png';
import imagePlaceholder from '../assets/gallery.png'; 
import etsy from '../assets/Etsy.png'; 
import trashnothing from '../assets/Freecycle.png';
//import './Listing.css';

const truncate100 = (input) => input.length > 100 ? `${input.substring(0, 100)}...` : input;
const truncate50 = (input) => input.length > 35 ? `${input.substring(0, 35)}...` : input;

export class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.openWindow = this.openWindow.bind(this);
        this.logo = this.logo.bind(this);


    }

    logo() {
        if (this.props.listing.site === "ebay") { return ebay; }
        else if (this.props.listing.site === "depop") { return depop; }
        else if (this.props.listing.site === "gumtree") { return gumtree; }
        else if (this.props.listing.site === "facebook") { return facebook; }
        else if (this.props.listing.site === "etsy") { return etsy; }
        else if (this.props.listing.site === "trashnothing") {return trashnothing; }
        else { return ; }
    }

    openWindow() {
        window.open(this.props.listing.url);
    }

    render() {
        return (

            <div className="Listing
            
            border  bg-white
            h-36 w-90
            mx-2 my-1 rounded-lg sm:mx-1
            flex flex-wrap justify-center
            cursor-pointer
            overflow-hidden

            " listing={this.props.listing} onClick={this.openWindow}>
                <div className="image
                rounded-l-lg
                w-36 h-36 object-cover flex items-center
                
                ">
                    <img src={this.props.listing.image ? this.props.listing.image : imagePlaceholder} alt="Thumbnail" className="rounded-l-lg w-36 border-r object-cover h-36"/>
                </div>

                <div className="text
                rounded-r-lg
                h-36 w-52
                flex flex-col items-start">

                    <h3 className=" rounded-tr-lg w-52 h-18 pt-2 pl-3  pr-2 font-black leading-tight text-left text-sm overflow-ellipsis">{truncate50(this.props.listing.title)}</h3>
                    <p className=" px-3 pt-2 text-xs overflow-ellipsis overflow-hidden h-28 w-52 text-left leading-tight ">{truncate100(this.props.listing.description)}</p>

                    <div className="
                    w-52 rounded-br-lg
                    flex flex-row justify-between items-center pb-1
                    ">
                            <p className=" pl-3 font-bold text-sm py-1 text-green-500 ">£{this.props.listing.price}</p>
                            <div className="pt-2 pr-2 pb-2"><img src={this.logo()} className="h-4" alt={this.props.listing.site}/> </div>
                    </div>

                   
                </div>

                
           </div>
        )
    }
}