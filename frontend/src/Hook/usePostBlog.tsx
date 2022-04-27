import axios from "axios";
import {LocalBlogPost} from "../Interface/LocalBlogPost";

export default function usePostBlog() {
    return (token: string, blog: LocalBlogPost) => {
        return axios({
            url: "http://localhost:2345/post-blog.php",
            method:"post",
            data: new URLSearchParams({
                title: blog.title,
                content: blog.content
            }),
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.data)
    }
}
