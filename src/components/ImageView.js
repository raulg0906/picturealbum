import React, { Component } from 'react';
import axios from 'axios';


class ImageView extends Component {
  state = {
      image: ''
  }
  
    componentDidMount(){
        const id =this.props.match.params.name
        axios.get(`http://localhost:3001/pictures/${id}`).then(resp => {
            this.setState({
                image: resp.data
            })
        })
  }
    render() {
    return (
     <div>
         <img alt='' src= {this.state.image} />
     </div>
    )
  }
}

export default ImageView;
