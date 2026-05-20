import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                await appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ 
                    ...data, 
                    userId: userData?.$id 
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        // Entire container wrapper with rich warm styling
        <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 sm:p-6 bg-stone-50/40 rounded-2xl border border-stone-200/60 max-w-7xl mx-auto">
            
            {/* Left Section: Main Content Editor (Takes 2 columns on large screens) */}
            <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm">
                <div>
                    <Input
                        label="Post Title"
                        placeholder="Enter an engaging title..."
                        className="mb-1 focus:ring-2 focus:ring-rose-700/20 border-stone-200"
                        {...register("title", { required: true })}
                    />
                </div>
                <div>
                    <Input
                        label="URL Slug"
                        placeholder="url-slug-auto-generated"
                        className="mb-1 focus:ring-2 focus:ring-rose-700/20 border-stone-200 text-stone-500 bg-stone-50/50"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                </div>
                <div className="prose max-w-none">
                    <RTE label="Content Body" name="content" control={control} defaultValue={getValues("content")} />
                </div>
            </div>

            {/* Right Section: Media & Metadata (Takes 1 column) */}
            <div className="space-y-6 bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm h-fit">
                
                {/* File Upload Area */}
                <div className="space-y-2">
                    <Input
                        label="Featured Cover Image"
                        type="file"
                        className="mb-1 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-stone-100 file:text-stone-700 hover:file:bg-stone-200 border-stone-200"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                </div>

                {/* Existing Image Preview (Visible during Edit mode) */}
                {post && (
                    <div className="w-full space-y-2">
                        <label className="text-sm font-medium text-stone-700 block">Current Cover Image</label>
                        <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50 aspect-[16/10]">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="w-100 h-100 object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Status Selection */}
                <div>
                    <Select
                        options={["active", "inactive"]}
                        label="Post Visibility Status"
                        className="mb-1 border-stone-200 focus:ring-2 focus:ring-rose-700/20 text-stone-800 capitalize"
                        {...register("status", { required: true })}
                    />
                </div>

                {/* Submit / Update Action Button (Converted to Rose Gold theme) */}
                <div className="pt-2">
                    <Button 
                        type="submit" 
                        bgColor={post ? "bg-amber-700 hover:bg-amber-800" : "bg-rose-700 hover:bg-rose-800"} 
                        className="w-full py-3 font-semibold text-white rounded-xl shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        {post ? "Update Article" : "Publish Article"}
                    </Button>
                </div>
                
            </div>
        </form>
    );
}