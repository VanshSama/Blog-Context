import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Paginition = () => {
    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return (
        <div className="w-full bg-white border-t-2 border-gray-300 flex justify-center items-center fixed bottom-0">
            <div className="flex flex-row justify-between items-center w-11/12 max-w-[670px] py-2">
                <div className="flex flex-row gap-x-2">
                    {   page > 1 &&
                        <button onClick={() => handlePageChange(page-1)} className="rounded-md border-2 border-gray-300 px-[21px] py-1 text-center">
                            Prev
                        </button>
                    }

                    {
                        page < totalPages && 
                        <button onClick={() => handlePageChange(page+1)} className="rounded-md border-2 border-gray-300 px-[20.5px] py-1 text-center font-[400]">
                            Next
                        </button>
                    }
                </div>

                <div>
                    <p className="font-medium">
                        Page {page} of {totalPages}
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default Paginition