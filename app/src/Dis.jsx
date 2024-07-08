import React from 'react'

const Dis = (props) => {
    return (
        <div>
            <div className="card" style={{ "width": "30rem", margin: "auto", marginTop: "3vh" }}>
                <div className="card-body">
                    <h1 className="card-title">Dear {props.name}</h1> <br />
                    <h4 className="card-subtitle mb-2 ">Teri Gaand Faad Dunga <br />  <br /> Bhen k Lund  <br /><br /> Gaaaaaanduuu</h4>
                </div>
            </div>
        </div>
    )
}

export default Dis
