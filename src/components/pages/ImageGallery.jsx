/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import SingleImage from "./SingleImage";
import FilterButtons from "./FilterButtons";
import imageData from "../../data";
import DragAndDrop from "./DragAndDrop";


const ImageGallery = () => {
	const [images, setImages] = useState(imageData);
	const [selectedImages, setSelectedImages] = useState([]);
	const [isDrag, setIsDrag] = useState(false);
	const [dragImage, setDragImage] = useState(null);
	const [draggedImageIndex, setDraggedImageIndex] = useState(null);
	const [draggedIndex, setDraggedIndex] = useState(null);
	const [draggedImage, setDraggedImage] = useState(null);
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

	const deleteSelectedImages = () => {
		const remainingImages = images.filter(
			(image) => !selectedImages.includes(image.id)
		);
		setImages(remainingImages);
		setSelectedImages([]); // Clear selected images after deletion
	};

	const handleFileChange = (e) => {
		const selectedFiles = e.target.files;
		console.log("Selected files:", selectedFiles);

		const newImages = Array.from(selectedFiles).map((file, index) => {
			const id = images.length + index + 1;
			const photo = URL.createObjectURL(file);
			console.log("Created URL for file:", photo);

			return { id, photo };
		});

		console.log("New images:", images, newImages);
		setImages([...images, ...newImages]);
		// setImageFiles([]);
	};

	const handleDragOver = (e) => {
		e.preventDefault();

		if (e.target && e.target.children[0] && e.target.children[0].alt) {
			setDraggedImageIndex(e.target.children[0].alt);
		}
	};

	const handleDragStart = (e, index) => {
		setDraggedIndex(index);
	};

	const handleDragEnd = () => {
		setDraggedIndex(null);
	};

	const handleDrop = (targetIndex) => {
		if (draggedIndex === null || targetIndex === draggedIndex) return;

		const newImages = [...images];
		const [draggedImage] = newImages.splice(draggedIndex, 1);
		newImages.splice(targetIndex, 0, draggedImage);

		setImages(newImages);
	};
	return (
		<>
			<FilterButtons
				
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
