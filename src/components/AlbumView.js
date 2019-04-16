import React, { Component } from 'react';
import Axios from 'axios';


class AlbumView extends Component {
    state={
        images:[]
    }

    componentDidMount(){
        const id = this.props.match.params.id
        Axios.get('http://localhost:3001/albums/17_embed=images')
    }
  render() {
    return (
     <div>
         
     </div>
    )
  }
}

export default AlbumView;
