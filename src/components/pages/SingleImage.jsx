/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DragAndDrop from "./DragAndDrop";

const SingleImage = ({
	item,
	index,
	selectedImages,
	handleImageSelect,
	draggedImage,
	onDragStart,
	onDragEnd,
	onDrop,
}) => {
	// console.log(item);

	// Select image
	const isSelected = selectedImages.includes(item?.id);

	// Condition for image
	let imageSource = item?.photo || item?.image || item?.id;

	//Ternary operator for fetured image
	const isFeatured = index === 0;
	const imageClasses = isFeatured
		? "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 rounded-lg w-full h-full" // Larger size for the featured image
		: "col-span-1 w-full h-full rounded-lg"; // Smaller size for the regular

	return (
		<div
			key={index}
			draggable
			onDragStart={(e) => onDragStart(e, item)}
			onDragEnd={onDragEnd}
			onDrop={onDrop}
			className={`card card-compact w-full h-full relative hover:brightness-50 border-2 border-slate-300 ${
				draggedImage ? "opacity-50" : ""
			} ${imageClasses}`}
		>
			<button onClick={() => handleImageSelect(item?.id)}>
				<input
					className="cursor-pointer h-4 w-4 mt-3 absolute"
					type="checkbox"
					checked={isSelected}
				/>
				<img
					className="h-full w-full object-cover rounded-md"
					src={imageSource}
					alt={`Image ${item?.id}`}
				/>
			</button>
		</div>
	);
};

export default SingleImage;
