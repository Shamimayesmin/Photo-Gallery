/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleImage = ({ item,selectedImages ,index,handleImageSelect}) => {
	console.log(item);
	const { image, id } = item;
	return (
		<div>
			<div className="card card-compact shadow-lg bg-white w-80 rounded-md hover:brightness-50">
				<input
					className="cursor-pointer mt-2"
					type="checkbox"
					checked={selectedImages.includes(index)}
					onChange={() => handleImageSelect(index)}
				/>
				<figure>
					<img className="drop-shadow-xl rounded-lg" src={image} alt="Shoes" />
				</figure>
			</div>

			{/* second section */}
		</div>
	);
};

export default SingleImage;
