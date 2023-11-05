/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import SingleImage from "./SingleImage";
import imageData from "../../data";
import DragAndDrop from "./DragAndDrop";
import Header from "./Header";

const ImageGallery = () => {
	const [images, setImages] = useState(imageData);
	const [selectedImages, setSelectedImages] = useState([]);

	const [draggedIndex, setDraggedIndex] = useState(null);
    const [draggedImage, setDraggedImage] = useState(null);

	//Toggle selecting image function
	const handleImageSelect = (imageId) => {
		// Toggle the selected state of an image
		setSelectedImages((prevSelectedImages) => {
			if (prevSelectedImages.includes(imageId)) {
				return prevSelectedImages.filter((id) => id !== imageId);
			} else {
				return [...prevSelectedImages, imageId];
			}
		});
	};

	// Image delete function
	const deleteSelectedImages = () => {
		const remainingImages = images.filter(
			(image) => !selectedImages.includes(image.id)
		);
		setImages(remainingImages);
		setSelectedImages([]); // Clear selected images after deletion
	};

	// Function for upload image or drag-and-drop
	const handleFileChange = (e) => {
		const selectedFiles = e.target.files;

		const newImages = Array.from(selectedFiles).map((file, index) => {
			const id = images.length + index + 1;
			const photo = URL.createObjectURL(file);

			return { id, photo };
		});

		// console.log("New images:", images, newImages);
		setImages([...images, ...newImages]);
	};

	// Image drag over function
	const handleDragOver = (e) => {
		e.preventDefault();

		if (e.target && e.target.children[0] && e.target.children[0].alt) {
			setDraggedIndex(e.target.children[0].alt);
		}
	};

	// Drag start function
	const handleDragStart = (index) => {
		setDraggedIndex(index);
	};

	// Image drag end function
	const handleDragEnd = () => {
		setDraggedIndex(null);
	};

	// Iamge drop function
	const handleDrop = (targetIndex) => {
		if (draggedIndex === null || targetIndex === draggedIndex) return;

		const newImages = [...images];
		const [draggedImage] = newImages.splice(draggedIndex, 1);
		newImages.splice(targetIndex, 0, draggedImage);

		setImages(newImages);
        setDraggedIndex(null)
	};
	return (
		<>
			
			<Header
				selectedImages={selectedImages}
				deleteSelectedImages={deleteSelectedImages}
			/>

			<hr />

			<section className="h-full w-full p-5">
				<div
					className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 rounded-lg mt-11 mb-24"
					onDragOver={handleDragOver}
				>
					{images.map((item, index) => (
						<SingleImage
							key={item.id}
							item={item}
							selectedImages={selectedImages}
							index={index}
							handleImageSelect={handleImageSelect}
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
							isDragging={index === draggedIndex}
							onDrop={() => handleDrop(index)}
						></SingleImage>
					))}

					{/* last section */}
					<DragAndDrop handleFileChange={handleFileChange} />
				</div>
			</section>
		</>
	);
};

export default ImageGallery;
