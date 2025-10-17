import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid}= useParams();
    return(
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    User Page
                </h2>
                <p className="mt-6 text-gray-600">
                    Welcome, User ID: {userid}
                </p>
            </div>
        </div>
    )

}

export default User