/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DragAndDrop from "./DragAndDrop";
import SampleTwo from "./SampleTwo";
import SampleOne from "./SampleOne";

const SingleImage = ({
	item,
	index,
	selectedImages,

	handleImageSelect,

	onDragStart,
	onDragEnd,
	isDragging,
	onDrop,
}) => {
	// console.log(item);
	// const { image, id } = item;
	const isSelected = selectedImages.includes(item?.id);
	const isFeatured = index === 0;
	// let imageSource = item?.image || item?.id; // Assume it's an original image
	let imageSource = item?.photo || item?.image || item?.id;
	const imageClasses = isFeatured
    ? "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 rounded-lg" // Larger size for the featured image w-full h-full border-2 rounded-lg col-start-1 col-end-3
    : "col-span-1 w-full h-full rounded-lg"; // Smaller size for the regular images lg:w-40 lg:h-40 md:w-full md:h-full  border-2 rounded-lg


	// if (item?.photo) {
	// 	imageSource = item?.photo;
	// }

	//className="card card-compact w-80 relative shadow-lg bg-white rounded-md hover:brightness-50 border-4 border-slate-600"

	
	return (
		<div
				key={index}
				draggable
				onDragStart={(e) => onDragStart(e, index)}
				onDragEnd={onDragEnd}
				onDrop={onDrop}
				// className={`relative shadow-lg bg-white rounded-md hover:brightness-50 border-4 border-slate-600 ${
				// 	isDragging ? "opacity-50" : ""
				// } ${index === 0 ? " md:col-span-2 md:row-span-2" : " col-span-1"}`}


				className={`relative shadow-lg hover:brightness-50 border-2 border-slate-600 ${
					isDragging ? "opacity-50" : ""
				  } ${imageClasses}`}
				
			>
				<button onClick={() => handleImageSelect(item?.id)}>
					<input
						className="cursor-pointer mt-3 absolute"
						type="checkbox"
						checked={isSelected}
					/>
					<img
						className="h-full w-full object-cover border-2"
						src={imageSource}
						alt={`Image ${item?.id}`}
					/>
				</button>
				
			</div>
	);
};

export default SingleImage;
