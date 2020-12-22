import React from 'react';
import './App.css';
import { SearchBar } from './Components/SearchBar';
import { Results } from './Components/Results';
import fetch from 'node-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      AccessToken: "",
      ExpiryDate: 0,
      resultsDisplay: "Highest price first ▲",
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.setData = this.setData.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.state.resultsDisplay === "Highest price first ▲" ? this.setState({ resultsDisplay: "Lowest price first ▼"}) : this.setState({ resultsDisplay: "Highest price first ▲"})
    this.setData(this.searchTerm);
  }

  async setData(searchQuery) {
    if (!searchQuery) {
      alert("I need to know what to look for!");
      return;
    }

    
    if (new Date().getTime() > this.state.ExpiryDate) {
      console.log("this app does not have an access token")
      console.log("getting access token")

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Sm9zZXBoVW4tTG9tYS1QUkQtMTk5YWQwZDkwLWY0Y2QyYjg4OlBSRC05OWFkMGQ5MDRiYjEtZjYzMS00OGMyLTkwNTQtYTQ5Yg==");
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Cookie", "ebay=%5Esbf%3D%23%5E; dp1=bu1p/QEBfX0BAX19AQA**6379634c^");
      
      var urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "client_credentials");
      urlencoded.append("scope", "https://api.ebay.com/oauth/api_scope");
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      
      fetch("https://loma-cors.herokuapp.com/https://api.ebay.com/identity/v1/oauth2/token", requestOptions)
          .then(response => response.json())
          .then(jsonresponse => {
            this.setState({
              AccessToken: jsonresponse.access_token,
              ExpiryDate: new Date().getTime() + jsonresponse.expires_in
            })
          })
          .catch(error => console.log('error', error));
    }

    var ebayHeaders = new Headers();
    ebayHeaders.append("Content-Type", "application/json");
    ebayHeaders.append("X-EBAY-C-MARKETPLACE-ID", "EBAY_US");
    ebayHeaders.append("X-EBAY-C-ENDUSERCTX", "affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>");
    ebayHeaders.append("Authorization", `Bearer ${this.state.AccessToken}`);
    ebayHeaders.append("Cookie", "ebay=%5Esbf%3D%23%5E; dp1=bu1p/QEBfX0BAX19AQA**637963c1^");
    
    var ebayrequestOptions = {
      method: 'GET',
      headers: ebayHeaders,
      redirect: 'follow'
    };

    const ebayresponse = await fetch(`https://loma-cors.herokuapp.com/https://api.ebay.com/buy/browse/v1/item_summary/search?q=${searchQuery}&limit=20`, ebayrequestOptions);
    const jsonresponse = await ebayresponse.json();
    const ebayData = jsonresponse.itemSummaries;
    const ebayDataParsed = ebayData.map(
        (listing) => {
            return {
                title: listing.title,
                price: listing.price.value,
                description: "this is from ebay",
                image: listing.image.imageUrl,
                url: listing.itemWebUrl,
                site: "ebay"
            }
        }
    )


    const depop_url = "https://api.apify.com/v2/datasets/6J3TCMGMaOjy3oogA/items?format=json&clean=1";
    const depopResponse = await fetch(depop_url);
    const depopData = await depopResponse.json();
    const depopDataFiltered = depopData.filter( listing => 
      listing.title.includes(searchQuery || listing.title.includes(searchQuery)))
    
    const depopDataParsed = depopDataFiltered.map(
      (listing) => {
        if (listing.price === null) {
          return listing;
        }
        return {
          title: listing.title,
          price: listing.price.substring(1),
          description: listing.description,
          image: listing.image,
          url: listing.url,
          site: "depop"
        }
      }
    )

    const gumtree_url = "https://api.apify.com/v2/datasets/eEsv8eI15DcPD5ytB/items?format=json&clean=1"
    const gumtreeResponse = await fetch(gumtree_url);
    const gumtreeData = await gumtreeResponse.json();
    const gumtreeDataFiltered = gumtreeData.filter( listing =>
      listing.title.includes(searchQuery || listing.title.includes(searchQuery)));

    const gumtreeDataParsed = gumtreeDataFiltered.map(
      listing => {
        return {
          title: listing.title,
          price: listing.price.substring(1),
          description: listing.description,
          image: listing.image,
          url: listing.url,
          site: "gumtree"
        }
      }
    )

    //ebay//


    const finalData = [];
    finalData.push(...ebayDataParsed,...depopDataParsed,...gumtreeDataParsed)

    function highest( a, b ) {
      if ( Number(a.price) < Number(b.price) ){
        return 1;
      }
      if ( Number(a.price) > Number(b.price) ){
        return -1;
      }
      return 0;
    }

    function lowest( a, b ) {
      if ( Number(a.price) < Number(b.price) ){
        return -1;
      }
      if ( Number(a.price) > Number(b.price) ){
        return 1;
      }
      return 0;
    }

    this.state.resultsDisplay === "Highest price first ▲" ? 
    this.setState({
      //Data: finalData.filter(element => parseFloat(element.price) > 5)
      Data: finalData.sort(highest)
    }) : this.setState({
      //Data: finalData.filter(element => parseFloat(element.price) > 5)
      Data: finalData.sort(lowest)
    })

  }

  handleChange(searchQuery) {
    this.setState({ searchTerm: searchQuery });
    this.setData(searchQuery);
  }
  render() {
    return (
      <div className="App bg-gray-100 w-screen h-screen">
          <SearchBar onChange={this.handleChange}/>
          <Results Data={this.state.Data} 
                  resultsDisplay={this.state.resultsDisplay}
                  toggleResults={this.toggleDisplay}
                  searchQuery={this.state.searchTerm}
                  search={this.handleChange}/>
  
      </div>
    );
  }

  }


export default App;
