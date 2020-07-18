import React,{ useState,useEffect} from 'react'
import M from 'materialize-css';
import {useHistory} from 'react-router-dom'

function CreatePost() {
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")

    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }else{
                    
                    M.toast({html:"성공적으로 저장되었습니다",classes:"#81c784 green lighten-2"})
                    history.push('/')
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    },[url])

    const postDetails=()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","dxdwozdsb")

        fetch("https://api.cloudinary.com/v1_1/dxdwozdsb/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            console.log(data)
        })
        .catch(err=>{
            console.log(err);
        })
        
        
    }
    return (
        <div className="card input-filed"
            style={{
                margin:"30px auto",
                maxWidth:"500px",
                padding:"20px",
                textAlign:"center"
            }} >
            <input type="text" placeholder="title" 
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" 
            placeholder="body"
            value={body}
            onChange={(e)=>setBody(e.target.value)} />
            <div class="file-field input-field">
                <div class="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file"
                     onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>postDetails()}>
                    Submit
            </button>
        </div>
    )
}

export default CreatePost
