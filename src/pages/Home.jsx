import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components/index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import assets from '../assets/assets.js'

const Home = () => {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        appwriteService.getActivePosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full bg-stone-50/20'>
            {/* 1. Hero/Banner Section */}
            <section className="relative w-full overflow-hidden">
                {/* 1. Image Layer (Background) */}
                <div className="relative w-full h-150"> {/* height apni marzi se set karein */}
                    <img
                        src={assets.bg1}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay taki text readable ho */}
                    <div className="absolute inset-0 bg-stone-900/30"></div>
                </div>

                {/* 2. Text Layer (Image ke upar) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
                            <span className="text-lg font-bold tracking-widest text-rose-700 uppercase block">
                                Welcome to Narrative
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-black leading-tight tracking-tight">
                                Where ideas look clean, warm, and meaningful.
                            </h1>
                            <p className="text-base sm:text-lg text-black font-sans max-w-xl mx-auto leading-relaxed">
                                Discover deeply informative insights on modern tech stacks, elegant layouts, and visual concepts cleanly captured here.
                            </p>
                            {!authStatus && (
                                <div className="pt-4">
                                    <Link
                                        to="/login"
                                        className="inline-block bg-rose-700 hover:bg-rose-800 text-white font-medium px-8 py-3.5 rounded-xl shadow-md transition-all duration-200"
                                    >
                                        Login to Explore Articles
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            </section>

            {/* 2. About Section */}
            <section className="py-16 bg-white border-b border-stone-200/40">
                <Container>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-2 items-center">

                        {/* Image Container - Width aur Height fix ki gayi hai */}
                        <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-6 flex justify-center">
                            <img
                                src={assets.about}
                                alt="About"
                                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-sm"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="md:col-span-2 text-stone-600 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
                            <h2 className="text-2xl font-serif font-medium text-stone-900">
                                About Our Space
                            </h2>
                            <div className="h-0.5 w-12 bg-rose-700/60 rounded-full mt-2" />
                            <p>
                                We believe that clean technical architectures deserve crisp presentation layouts. This space is structured dynamically utilizing full-stack tools to streamline content, code execution logic, and minimalist interfaces.
                            </p>
                            <p className="text-stone-500 text-xs">
                                Frameworks deployed: React, Appwrite Headless DB, Redux Architecture, Tailwind CSS Engine.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Dynamic Article Grid Section */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="px-4 mb-10">
                        <h3 className="text-xl sm:text-2xl font-serif font-medium text-stone-900">
                            Featured Narrative Articles
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-500 mt-1 font-sans">
                            {posts.length > 0 ? "Latest stories synchronized from production" : "Awaiting active feeds"}
                        </p>
                    </div>

                    {posts.length === 0 ? (
                        <div className="mx-4 text-center py-20 bg-white rounded-2xl border border-stone-200/60 shadow-sm">
                            <h4 className="text-lg font-serif text-stone-800">
                                {!authStatus ? "Authentication required to preview data streams." : "No posts discovered."}
                            </h4>
                            {!authStatus && (
                                <p className="text-sm text-stone-500 mt-2 font-sans">
                                    Please <Link to="/login" className="text-rose-700 font-medium underline underline-offset-4">Sign In</Link> to lift authorization locks.
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                            {posts.map((post) => (
                                <div key={post.$id} className="h-full">
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </div>
    )
}

export default Home