/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Image = () => {
	const [images, setImages] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);
	const [featuredImage, setFeaturedImage] = useState(null);
	const [imageFiles, setImageFiles] = useState([]);

	const addImage = (url) => {
		const newImage = { id: Date.now(), url: url };
		setImages([...images, newImage]);
	};

	const onDragEnd = (result) => {
		if (!result.destination) return;

		const items = Array.from(images);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setImages(items);
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

	const handleImageSelect = (index) => {
		// Check if the image is already selected
		if (selectedImages.includes(index)) {
			// Deselect the image by removing it from the selectedImages array
			setSelectedImages(
				selectedImages.filter((selectedIndex) => selectedIndex !== index)
			);
		} else {
			// Select the image by adding its index to the selectedImages array
			setSelectedImages([...selectedImages, index]);
		}
	};

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

	return (
		<div>
			<div>
				{/* Add Image form */}
				<div className="p-20 rounded-md border border-pink-400 w-[420px]">
					<label className="p-5" htmlFor="">
						{" "}
						Drag and drop or
					</label>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={handleFileChange}
					/>
				</div>

				<button
					className="bg-yellow-400 mt-3 p-3 rounded-md text-black"
					onClick={handleAddImage}
				>
					Add Images
				</button>

				{/* Gallery Images */}
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="gallery">
						{(provided) => (
							<ul {...provided.droppableProps} ref={provided.innerRef}>
								{images.map((image, index) => (
									<Draggable
										key={image.id}
										draggableId={image.id}
										index={index}
									>
										{(provided) => (
											<div>
												<li
													className="p-4"
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
												>
													<button
														className="p-3 rounded-md text-black mt-3"
														onClick={() => handleImageSelect(index)}
													>
														<img src={image.url} alt={`Image ${index}`} />
													</button>
												</li>
											</div>
										)}
									</Draggable>
								))}
							</ul>
						)}
					</Droppable>
				</DragDropContext>

				{/* Control Buttons (Reorder, Delete, Set Featured) */}
			</div>
		</div>
	);
};

export default Image;
