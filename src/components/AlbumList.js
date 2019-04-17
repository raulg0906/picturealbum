import React, { Component } from 'react';
import Heading from './Heading.js'
import GridView from './GridView'
import axios from 'axios';

class AlbumList extends Component {
    state = {
        items: []
    }
    
    componentDidMount(){
        axios.get('http://localhost:3001/Albums').then(resp=>{
        const items = resp.data.map((item) => {
            return{
                path:'/Album/' + item.id,
                url: item.pic,
                name: item.name,
                id: item.id
            }
        })
        this.setState({
            items: items
        })
        })

    }
  render() {
    return (
     <div>
         <Heading>My Albums</Heading>
         <GridView items={this.state.items} />
     </div>
    )
  }
}

export default AlbumList;
