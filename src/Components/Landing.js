import React from 'react';
import depop from '../assets/depop.png';
import ebay from '../assets/ebay.png';
import gumtree from '../assets/gumtree.png';
import facebook from '../assets/facebook.png';
import freecycle from '../assets/Freecycle.png';
import etsy from '../assets/Etsy.png';
import preloved from '../assets/Preloved.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebookicon from '../assets/facebookicon.png'

import sketch from '../assets/LOMAsketch.JPG';
import search from '../assets/search.JPG';
import pin from '../assets/pin.JPG';
import community from '../assets/community.JPG';

export class Landing extends React.Component {

    render() {
        return (
    <div>
        <div className="
                flex items-center flex-col
            ">
            <h2 className="
            font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl
            pt-4
            ">
            Ask Loma first.
            </h2>

            <p className="
                py-3 px-5 leading-tight indent-1 text-sm lg:text-lg
                w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2
                ">

<span className="pl-5 sm:pl-7">Checking </span>for a secondhand option when you shop is a great way to <span className="text-red-500 font-semibold">get more for your money</span> and <span className="text-green-600 font-semibold">fight product waste. </span>
And now, you can check all of the top sites and compare them in one place. </p>

            <img src={sketch} alt="Sketch by Nicole Miles, depicting 6 types of Loma customers"
            className="w-screen sm:w-10/12 lg:w-3/4
            " />
        </div>

        <div className="
                    bg-gray-50
                    flex flex-wrap justify-center
                    p-7 w-screen ">
                <img src={depop} alt="depop logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <img src={facebook} alt="facebook logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <img src={gumtree} alt="gumtree logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <img src={ebay} alt="ebay logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <div className="sm:w-screen"/>
                <img src={freecycle} alt="freecycle logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <img src={etsy} alt="etsy logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <img src={preloved} alt="preloved logo"className="h-5 sm:h-8 mb-3 mx-5" />
                <p className="text-center text-sm w-screen italic">
                    ...and more coming!
                </p>
        </div>

        <div className="
            w-screen
            flex justify-center flex-wrap
        ">
            <div className="
                FEATURE1
                rounded-lg border
                h-36 w-80
                mt-4 mx-4 sm:mx-2
                overflow-hidden flex justify-between
            ">
                <img src={pin} alt="community posts" className="
                    h-36
                "/>
                <div className="
                    blurb
                    flex flex-col justify-center
                    h-36 w-52">
                        <h2 className="leading-tight text-lg font-bold px-2 py-1"> 
                        Collect
                        </h2>
                        <p className="leading-tight px-2 pb-2 text-sm">
                       Pin, save and compare your finds from all the different sites.
                        </p>
                </div>
            </div>
            <div className="
                FEATURE2
                rounded-lg border
                h-36 w-80
                mt-4 mx-4 sm:mx-2
                overflow-hidden flex justify-between
            ">
                <img src={search} alt="community posts" className="
                    h-36
                "/>
                <div className="
                    blurb
                    flex flex-col justify-center
                    h-36 w-52">
                        <h2 className="leading-tight font-bold text-lg px-2 py-1"> 
                            Discover
                        </h2>
                        <p className="leading-tight text-sm px-2 pb-2">
                            Search the entire secondhand universe in one click.
                        </p>
                </div>
            </div>
            <div className="
                FEATURE3
                rounded-lg border
                h-36 w-80
                my-4 mx-4 sm:mx-2
                overflow-hidden flex justify-between
            ">
                <img src={community} alt="community posts" className="
                    h-36
                "/>
                <div className="
                    blurb
                    flex flex-col justify-center
                    h-36 w-52
                    ">
                        <h2 className="leading-tight font-bold px-2 py-1 text-lg"> 
                            Connect
                        </h2>
                        <p className="leading-tight px-2 pb-2 text-sm">
                            Get suggestions and offers from a community of secondhand shoppers.
                        </p>
                </div>
            </div>
        </div>
        <div className="FOOTER
        h-32 flex justify-between sm:justify-center items-center
        bg-gray-50
        ">
            <p className=" text-xs text-gray-300 pl-5 pr-6">© 2020 LoopMarket Ltd.</p>
            <div className="flex flex-wrap justify-end items-center">
                <a href="mailto:heyjoseph@asklomafirst.com" className="text-xs leading-none rounded border border-gray-300 font-bold text-gray-400 w-16 p-2 mx-4 my-2 text-center">E-mail</a>
                
                <div className="flex flex-row mx-2">
                <a href="https://instagram.com/asklomafirst" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram icon" className="h-6 pr-2"/></a>
                <a href="https://twitter.com/asklomafirst" target="_blank" rel="noreferrer"><img src={twitter} alt="instagram icon" className="h-6 pr-2"/></a>
                <a href="https://facebook.com/asklomafirst"target="_blank" rel="noreferrer"><img src={facebookicon} alt="instagram icon" className="h-6 pr-2"/></a>
                </div>
               
                    
            </div>

        </div>
    </div>
        )
    }
}