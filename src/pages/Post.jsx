import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import appwriteService from "../appwrite/config"
import { Button, Container } from "../components/index"
import parse from "html-react-parser"
import { useSelector } from "react-redux"

const Post = () => {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post)
                else navigate("/")
            })
        } else navigate("/")
    }, [slug, navigate])

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage)
                navigate("/")
            }
        })
    }

    return post ? (
        <div className="py-12 bg-stone-50/10 min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200/60 shadow-sm overflow-hidden p-4 sm:p-8 space-y-8">

                    {/* Header Action Grid for Authors */}
                    {isAuthor && (
                        <div className="flex justify-end items-center gap-3 pb-4 border-b border-stone-100">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-amber-700 hover:bg-amber-800" className="text-sm px-4 py-2">
                                    Edit Post
                                </Button>
                            </Link>
                            <Button bgColor="bg-stone-200 hover:bg-stone-300" textColor="text-stone-800" onClick={deletePost} className="text-sm px-4 py-2">
                                Delete
                            </Button>
                        </div>
                    )}

                    {/* Premium Large Art Banner */}
                    <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-stone-100 aspect-video">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            // w-full aur h-full use karein taaki container center rahe
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Main Typography Header */}
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 leading-tight">
                            {post.title}
                        </h1>
                        <div className="h-[2px] w-20 bg-rose-700/60 rounded-full" />
                    </div>

                    {/* Parsed Dynamic Content Canvas */}
                    <div className="prose prose-stone max-w-none text-stone-800 font-sans leading-relaxed tracking-wide space-y-4 browser-css">
                        {parse(post.content)}
                    </div>

                </div>
            </Container>
        </div>
    ) : null
}

export default Post