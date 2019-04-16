import React from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

const GridView =(props)=> (
    <div className='grid'>
        {props.items.map(item =>(
            <Link key ={'grid-view' +item.id} to={item.path}>
                <div className="grid-item">
                    <img  alt= {item.name} src={item.url} />
                    <h3>{item.name}</h3>
                </div>
            </Link>
        ))}
    </div>
    )

    GridView.propTypes= {
        items: propTypes.array
    }

    export default GridView