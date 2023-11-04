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

	// let imageSource = item?.image || item?.id; // Assume it's an original image
	let imageSource = item?.photo || item?.image || item?.id;
	// Check if the item has a photo property (Blob URL)

	// if (item?.photo) {
	// 	imageSource = item?.photo;
	// }

	//className="card card-compact w-80 relative shadow-lg bg-white rounded-md hover:brightness-50 border-4 border-slate-600"

	return (
		<div>
			<div
				key={index}
				draggable
				onDragStart={(e) => onDragStart(e, index)}
				onDragEnd={onDragEnd}
				onDrop={onDrop}
				className={`card card-compact w-80 relative shadow-lg bg-white rounded-md hover:brightness-50 border-4 border-slate-600 ${
					isDragging ? "opacity-50" : ""
				}`}
			>
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
				{/* <SampleTwo
					isDrag={isDrag}
					draggedImageIndex={draggedImageIndex}
					imageSource={imageSource}
				/> */}
			</div>
		</div>
	);
};

export default SingleImage;
