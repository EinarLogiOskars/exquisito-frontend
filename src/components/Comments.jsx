import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = (props) => {
    
    if(!props.token) {
        return(
            <div>Please login to view and post comments</div>
        );
    };

    const [comments, setComments] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const [commentBody, setCommentBody] = useState('');

    useEffect(() => {
        const url = `https://exquisito-web.onrender.com/api/v1/reviews/${props.reviewId}/comments`;
        const headers = JSON.parse(props.token);
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            "uid": headers['uid'],
            "client": headers['client'],
            "access-token": headers['uToken']
        }}).then((res) => {
            if(res.headers['access-token'] !== '') {
                const userToken = {
                    client: res.headers['client'],
                    uid: res.headers['uid'],
                    uToken: res.headers['access-token'],
                    username: headers['username'],
                    id: headers['id']
                };
                props.setToken(JSON.stringify(userToken));
            }
            setComments(res.data);
            setLoading(false);    
        });
    }, []);

    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleString(
            "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
        );
    };

    const allComments = comments.map((comment, index) => (
        <div key={index} className="">
            <div className="card my-5">
                <label className="card-header">{comment.commenter} - {formatTime(comment.created_at)}</label>
                <p className="lead text-center card-body">{comment.comment_body}</p>
            </div>
        </div>
    ));

    const noComments = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No comments yet!
            </h4>
        </div>
    );

    if(!isLoading) {
        comments.map((comment) => {
        });
    };

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        const headers = JSON.parse(props.token);
        console.log(headers)
        const url = `https://exquisito-web.onrender.com/api/v1/reviews/${props.reviewId}/comments`
        const form = new FormData();
        form.append('user_id', headers['id']);
        form.append('commenter', headers['username'])
        form.append('comment_body', commentBody);

        axios
            .post(url, form, { headers: {
                "uid": headers['uid'],
                "client": headers['client'],
                "access-token": headers['uToken']
            } }).then((res) => {
                console.log(props.token)
                console.log(res)
                if(res.headers['access-token'] !== '') {
                    const userToken = {
                        client: res.headers['client'],
                        uid: res.headers['uid'],
                        uToken: res.headers['access-token'],
                        username: headers['username'],
                        id: headers['id']
                    };
                    props.setToken(JSON.stringify(userToken));
                }
            });
    };

    return (
        <div>
            {comments.length > 0 ? allComments : noComments}
            <div>
                <form onSubmit={onSubmit}>
                    <label className="lead" htmlFor="commentBody">Post comment</label>
                    <textarea 
                            id="commentBody" 
                            name="commentBody" 
                            className="form-control my-2"
                            required 
                            onChange={(event) => onChange(event, setCommentBody)}/>
                    <button className="btn custom-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Comments;