import React from "react";

const Header = () => {
    return (
        <div className="w-full fixed top-0">
            <header className="text-center w-full bg-white border-b-2 shadow-md py-4">
                <h1 className="font-bold uppercase text-3xl">
                    Falcon Blogs
                </h1>
            </header>
        </div>
    );
}

export default Header