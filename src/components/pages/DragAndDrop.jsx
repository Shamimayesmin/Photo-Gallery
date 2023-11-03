/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import imageData from "../../data";
const DragAndDrop = () => {
	const [images, setImages] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);
	const [featuredImage, setFeaturedImage] = useState(null);
	const [imageFiles, setImageFiles] = useState([]);

	const addImage = (url) => {
		const newImage = { id: Date.now(), url: url };
		setImages([...images, newImage]);
	};

	

	const deleteSelectedImages = () => {
		const remainingImages = images.filter(
			(image, index) => !selectedImages.includes(index)
		);
		setImages(remainingImages);
		setSelectedImages([]);
	};

	const setFeatured = (image) => {
		setFeaturedImage(image);
	};

	// const handleImageSelect = (index) => {
	// 	// Check if the image is already selected
	// 	if (selectedImages.includes(index)) {
	// 		// Deselect the image by removing it from the selectedImages array
	// 		setSelectedImages(
	// 			selectedImages.filter((selectedIndex) => selectedIndex !== index)
	// 		);
	// 	} else {
	// 		// Select the image by adding its index to the selectedImages array
	// 		setSelectedImages([...selectedImages, index]);
	// 	}
	// };

	const reorderImages = () => {
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
		// Add the selected files to the imageFiles state
		setImageFiles([...imageFiles, ...selectedFiles]);
	};

	const handleAddImage = () => {
		// Process imageFiles and add them to the gallery
		const newImages = imageFiles.map((file) => {
			return {
				id: Date.now(),
				url: URL.createObjectURL(file), // Use a URL.createObjectURL to display the uploaded image
			};
		});

		setImages([...images, ...newImages]);

		// Clear the input field after adding the images
		setImageFiles([]);
	};

	// const onDragEnd = (result) => {
	// 	if (!result.destination) return;

	// 	const items = Array.from(images);
	// 	const [reorderedItem] = items.splice(result.source.index, 1);
	// 	items.splice(result.destination.index, 0, reorderedItem);

	// 	setImages(items);
	// };
	const onDragEnd = (result) => {
		if (!result.destination) {
		  return; // Drop was not in a valid droppable area
		}
	
		const updatedImages = [...images];
		const [reorderedImage] = updatedImages.splice(result.source.index, 1);
		updatedImages.splice(result.destination.index, 0, reorderedImage);
	
		setImages(updatedImages);
	  };
	
	  const deleteImages = () => {
		const updatedImages = images.filter((image) => !image.selected);
		setImages(updatedImages);
	  };
	
	  const toggleFeature = (imageId) => {
		const updatedImages = images.map((image) => ({
		  ...image,
		  isFeatured: image.id === imageId,
		}));
		setImages(updatedImages);
	  };

	return (
		<div>
			<div className="bg-red-400 border-2 p-5 my-10">
				<button onClick={deleteImages}>Delete Selected</button>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="image-gallery">
						{(provided) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								{imageData.map((image, index) => (
									<Draggable
										key={image.id}
										draggableId={image.id.toString()}
										index={index}
									>
										{(provided) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<div className="image-card bg-blue-500 p-7 border-2">
													<img src={image.image} alt={`Image ${image.id}`} />
													<button className="p-2 bg-slate-400" onClick={() => toggleFeature(image.id)}>
														{image.isFeatured ? "Unset Feature" : "Set Feature"}
													</button>
													<button className="p-2 bg-red-400" onClick={() => deleteImages(index)}>
														Delete
													</button>
												</div>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</div>
	);
};

export default DragAndDrop;

const handleDragOver =(e)=>{
	e.preventDefault();

  }

  const handleDrop = (e)=>{
	e.preventDefault();
  }




