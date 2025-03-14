import React from 'react'

const Card = ({imagen}) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={imagen} className="card-img-top" alt="..." style={{height:"10rem"}} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

export default Card