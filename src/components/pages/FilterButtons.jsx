/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FilterButtons = ({ selectedImages, deleteSelectedImages,handleReorderImages }) => {
	return (
		<div>
			<div className="m-5 gap-4">
				<button className="bg-red-300 p-4 rounded-md text-black">
					{selectedImages.length}
					Files selected
				</button>
				<button
					className="bg-red-300 p-4 ml-3 rounded-md text-black"
					onClick={handleReorderImages}
				>
					Reorder
				</button>
				<button
					className="bg-red-500 p-4 ml-3 rounded-md text-black"
					// onClick={(id) => deleteSelectedImages(id)}
                    onClick={deleteSelectedImages}
				>
					Delete Selected
				</button>
				<button
					className="bg-blue-300 p-4 ml-3 rounded-md text-black"
					// onClick={() => setFeatured(featuredImage)}
				>
					Set Featured
				</button>
			</div>
		</div>
	);
};

export default FilterButtons;
