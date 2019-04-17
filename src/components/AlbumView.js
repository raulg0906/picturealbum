import React, { Component } from 'react';
import axios from 'axios';
import Heading from './Heading'
import GridView from './GridView'
import AlbumNav from './AlbumNav';

class AlbumView extends Component {
    state={
        items:[],
        heading:'',
        albums:[]
    }

 getAlbum(id) {
    axios.get(`http://localhost:3001/Albums/${id}?_embed=pictures`).then(resp => {
        const items = resp.data.pictures.map((item) => {
            return{
                path:'/Album/' + item.id,
                url: item.picture,
                name: item.name,
                id: item.id
            }
        })
        this.setState({
            items,
            heading: resp.data.name
        })
    })
 }

componentWillReceiveProps(newprops) {
    if(newprops.match.params.id !== this.props.match.params.id) {
        const id = newprops.match.params.id
        this.getAlbum(id)
    }   
}

    componentDidMount(){
        const id = this.props.match.params.id
        this.getAlbum(id)

        axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
                albums:resp.data
            })
        })

    }
  render() {
    return (
       <div>
         <Heading>{this.state.heading}</Heading>
         <div className="sidecontainer">
           <AlbumNav albums ={this.state.albums} />
         <GridView items={this.state.items} />
         </div>
     </div>
    )
  }
}

export default AlbumView;
