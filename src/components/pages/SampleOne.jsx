/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import imageData from "../../data";

const SampleOne = () => {
	const [images, setImages] = useState(imageData);
	
	const [selectedImages, setSelectedImages] = useState([]);
	const [featuredImage, setFeaturedImage] = useState(null);
	const [imageFiles, setImageFiles] = useState([]);

	const addImage = (url) => {
		const newImage = { id: Date.now(), url: url };
		setImages([...images, newImage]);
	};

	const onDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const reorderedImages = Array.from(images);
		const [reorderedItem] = reorderedImages.splice(result.source.index, 1);
		reorderedImages.splice(result.destination.index, 0, reorderedItem);

		setImages(reorderedImages);
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
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable
					droppableId="image-gallery"
					direction="horizontal"
				>

					{(provided)=>(
						<div ref={provided.innerRef}
						{...provided.droppableProps}
						className="bg-blue-300 my-10">
							{images.map((image, index)=>(
								<Draggable key={image.id} draggableId={image.id.toString()} index={index}>
								{(provided) => (
								  <div
								  
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									className="gap-3 w-80 grid border-2 mt-4"
								  >
									<img className="" src={image.image} alt={`Image ${image.id}`} />
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
	);
};

export default SampleOne;


{/* {imageData.map((item, index) => {
					return (
						<button>
							<div
								className=" bg-white w-80 rounded-md hover:brightness-50"
								key={index}
							>
								<div className="z-50">
									<input
                                    className="cursor-pointer"
										type="checkbox"
										checked={selectedImages.includes(index)}
										onChange={() => handleImageSelect(index)}
									/>
								</div>
								<div className="z-30">
									<img
										className="w-80 rounded-md"
										src={item.image}
										alt=""
									/>
								</div>
							</div>
						</button>
					);
				})} */}
