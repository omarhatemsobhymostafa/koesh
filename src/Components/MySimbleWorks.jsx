import React from 'react'

export default function MyWorks() {
    return (
        <div className='all' id='my-works'>
            <h2 className="header">My Works</h2>
            <div className="container">
                <div className="card">

                    <h2>My first Game</h2>
                    <p>
                        You Must Escape form Camera Bottom to survive
                    </p>
                    <a href='https://koeshg332211.itch.io/k-one' className="hire" style={{ width: "100%" }}>Play</a>
                </div>

                <div className="card">

                    <h2>Bunny man</h2>
                    <p>
                        a Platformer game that you kill bees and insects
                    </p>
                    <a href='https://koeshg332211.itch.io/bunnyman' className="hire" style={{ width: "100%" }}>Play</a>
                </div>



            </div>
        </div>
    )
}
