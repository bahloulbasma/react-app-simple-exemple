import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('mario');
    const [isPending, setIsPending]=useState(true);
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body, author}
        console.log(blog);
        fetch('http://localhost:4000/blogs',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })



    }
    return ( 
        <div className="create">
            <h2> Add new Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e)=>{ setTitle(e.target.value) }} required/>
                <label> Blog Body </label>
                <textarea value={body} onChange={(e)=>{ setBody(e.target.value) }} required></textarea>
                <label>Blog Author</label>
                <select value={author}  onChange={(e)=>{ setAuthor(e.target.value) }} required>
                    <option value ="mario">mario</option>
                    <option value ="luiji">luiji</option>
                    <option value ="yoshi">yoshi</option>
                </select>
                <button>Add blog </button>
            </form>

        </div>
     );
}
 
export default Create;