import React from 'react';
import loading from '../assets/loading.gif';

// const texts = ["websites", "illustrations", "pancakes"];
// let count = 0;
// let index = 0;
// let currentText = " ";
// let letter = "";

// function type() {
//     if (count === texts.length) {
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);

//     document.getElementById("input").placeholder = letter;
    
//     if (letter.length === currentText.length) {
//         count++;
//         index = 0
//     }
// }

// function changeText() {
//     document.getElementById("text").innerHTML = "waiting on eBay";
    
// };


export class LoadingPop extends React.Component {
    render() {
        return (
            <div className="flex flex-col justify-center">
                <img className="mx-auto mt-20" src={loading} alt="loading"/>
                <p className="text-sm mx-auto">This'll only take a few seconds...</p>

            </div>
            
            
        )
    }
}