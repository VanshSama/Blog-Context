import React, { useContext } from "react";
// import Card from "./Card";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
        // Consume
    const {posts ,loading} = useContext(AppContext);
    // console.log('Printing posts :- ',posts);

    return (
        <div className="w-11/12 max-w-[670px] flex flex-col gap-y-8 mt-24 mb-24">
            {
                loading ? (<Spinner />) : 
                (
                    posts.length === 0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    )
                     :
                    (
                        posts.map((post) => {
                            return <div key={post.id} className="">
                                <h2 className="font-bold text-[19px]">
                                    {post.title}
                                </h2>

                                <p>
                                    By <span className="italic">{post.author}</span> on <span className="underline font-semibold text-sm">{post.category}</span>
                                </p>

                                <p>
                                    Posted On <span>{post.date}</span>
                                </p>

                                <p className="mt-3 text-[17.5px]">
                                    {post.content}
                                </p>

                                <div className="flex flex-row gap-x-2 mt-2"> 
                                    {post.tags.map((tag, index) => {
                                        return <span key={index} className="text-blue-700 underline font-semibold text-[13px]">{`#${tag}`}</span>
                                    })}
                                </div>
                            </div>
                        })
                    )
                )
            }
        </div>
    );
}

export default Blogs