/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DragAndDrop from "./DragAndDrop";
import SampleTwo from "./SampleTwo";

const SingleImage = ({
	item,
	index,
	deleteSelectedImages,
	selectedImages,
	handleImageSelect,
}) => {
	// console.log(item);
	// const { image, id } = item;
	const isSelected = selectedImages.includes(item?.id);

	let imageSource = item.image; // Assume it's an original image

	// Check if the item has a photo property (Blob URL)
	
	if (item.photo) {
		imageSource = item.photo;
	}
	return (
		<div>
			<div key={index} className="card card-compact w-80 relative shadow-lg bg-white rounded-md hover:brightness-50 border-4 border-slate-600">
				<button onClick={() => handleImageSelect(item?.id)}>
					<input
						
						className="cursor-pointer mt-2 absolute"
						type="checkbox"
						checked={isSelected}
						
					/>
					<figure>
						<img
							className="rounded-sm"
							src={imageSource}
							alt={`Image ${item?.id}`}
						/>
					</figure>
				</button>
			</div>

			{/* second section */}

			{/* <DragAndDrop></DragAndDrop> */}
			{/* <SampleTwo></SampleTwo> */}
		</div>
	);
};

export default SingleImage;
