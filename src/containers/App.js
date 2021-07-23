import React, {Component}  from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Navbar from '../components/Navigation/Navigation';
import Loader from './loader';
import client from './client.jpg';

class App extends Component{

    constructor(){
        super()
        this.state={
            robots: [],
            searchfeild: '',
            isButtonClicked: false
        }
    }

    onButtonSubmit = () => {
        this.setState({isButtonClicked: !this.isButtonClicked})
        const timer = setTimeout(() => {
            fetch('https://reqres.in/api/users?page=1').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({robots: users.data})
            });
        }, 3000);
        return () =>clearTimeout(timer);
    }
    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){

        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.first_name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        
        if(this.state.robots.length === 0 && this.state.isButtonClicked === false){
            return (
              <>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
                <h1 className='tc'>Please click on "Get Users" to get all details!</h1>
                <br></br><br></br>
                <center><img src={client} alt="Client" /></center>

              </>
            );

        }

        else if(this.state.robots.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='tc'>Loading...</h1>
                  <Loader className='loader'></Loader>
                </>
              );
        }

        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div className='tc'>
                      <h1>Client Info</h1>
                      <SearchBox searchChange={this.onSearchChange}/>
                      <Scroll>
                        <CardList robots={filteredRobots}/>
                      </Scroll>

                  </div>
                 </>
              );

        }

    }
}

export default App;
