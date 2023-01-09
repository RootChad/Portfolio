import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useAppContext } from "../context";
export default function Single() {
    const params = useLocation();
    const {posts} = useAppContext();
    const post = posts.find(post=>post._id === params?.state?.id);
    debugger
    return(
        <>
            <Link to="/">Back</Link>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </>
    )
}