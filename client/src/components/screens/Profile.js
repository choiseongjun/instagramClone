import React from 'react'

function Profile() {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '18px 0px',
                borderBottom:"1px solid grey"
            }}>
                    <div>
                        <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
                            src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        />
                    <div>
                        <h4>ramesh verma</h4>
                        <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                            <h4>40 posts</h4>
                            <h4>40 followers</h4>
                            <h4>40 follwing</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1594954825820-e9ebfd9d0e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
               
            </div>
        </div>
    )
}

export default Profile
