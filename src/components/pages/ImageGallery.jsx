/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import SingleImage from "./SingleImage";
import FilterButtons from "./FilterButtons";
import imageData from "../../data";
import DragAndDrop from "./DragAndDrop";
import SampleOne from "./SampleOne";
import SampleTwo from "./SampleTwo";

const ImageGallery = () => {
	const [images, setImages] = useState(imageData);
	const [selectedImages, setSelectedImages] = useState([]);
	const [imageFiles, setImageFiles] = useState([]);
	const [isDrag, setIsDrag] = useState(false);
	const [dragImage, setDragImage] = useState(null);
	const [draggedImageIndex, setDraggedImageIndex] = useState(null);

	// const [draggedIndex, setDraggedIndex] = useState(null);
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

	// Reorder image

	const handleReorderImages = () => {
		// Create a copy of the current images array
		const reorderedImages = Array.from(images);

		// Sort the reorderedImages array based on the order of selectedImages
		reorderedImages.sort((a, b) => {
			const indexA = images.indexOf(a);
			const indexB = images.indexOf(b);
			return selectedImages.indexOf(indexA) - selectedImages.indexOf(indexB);
		});

		// Update the state with the reordered images
		setImages(reorderedImages);
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

	const handleDragStart = (img) => {
		setIsDrag(true);
		setDragImage(img);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		const fromIndex = draggedImageIndex;
		const toIndex = e.target.getAttribute("data-index");

		if (fromIndex !== toIndex) {
			const updatedImages = [...images];
			const [draggedImage] = updatedImages.splice(fromIndex, 1);
			updatedImages.splice(toIndex, 0, draggedImage);

			setImages(updatedImages);
		}

		setDraggedImageIndex(null);
	};

	return (
		<>
			<FilterButtons
				handleReorderImages={handleReorderImages}
				selectedImages={selectedImages}
				deleteSelectedImages={deleteSelectedImages}
			/>

			<div
				className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 m-8"
				onDragOver={handleDragOver}
			>
				{images.map((item, index) => (
					<div
						key={item.id}
						data-index={index}
						draggable
						handleDragStart={handleDragStart}
						handleDragOver={handleDragOver}
						handleDrop={handleDrop}
					>
						<SingleImage
							key={item.id}
							item={item}
							selectedImages={selectedImages}
							setSelectedImages={setSelectedImages}
							index={index}
							handleImageSelect={handleImageSelect}
							deleteSelectedImages={deleteSelectedImages}
							draggable
							handleDragStart={handleDragStart}
							handleDragOver={handleDragOver}
							handleDrop={handleDrop}
						></SingleImage>
					</div>
				))}

				<DragAndDrop handleFileChange={handleFileChange} />
			</div>

			
		</>
	);
};

export default ImageGallery;
