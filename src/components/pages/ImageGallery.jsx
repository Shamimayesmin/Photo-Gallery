/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import img1 from "../assets/images/image-1.webp";
import img2 from "../assets/images/image-2.webp";
import img3 from "../assets/images/image-3.webp";
import img4 from "../assets/images/image-4.webp";
import img5 from "../assets/images/image-5.webp";
import img6 from "../assets/images/image-6.webp";
import img7 from "../assets/images/image-7.webp";
import img8 from "../assets/images/image-8.webp";
import img9 from "../assets/images/image-9.webp";
import img10 from "../assets/images/image-10.jpeg";
import img11 from "../assets/images/image-11.jpeg";
import SingleImage from "./SingleImage";
import Image from "./Image";
// import "../../styles/gallery.css"

const ImageGallery = () => {
	const [images, setImages] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);

	const imageData = [
		{
			image: img1,
			id: 1,
		},
		{
			image: img2,
			id: 2,
		},
		{
			image: img3,
			id: 3,
		},
		{
			image: img4,
			id: 4,
		},
		{
			image: img5,
			id: 5,
		},
		{
			image: img6,
			id: 6,
		},
		{
			image: img7,
			id: 7,
		},
		{
			image: img8,
			id: 8,
		},
		{
			image: img9,
			id: 9,
		},
		{
			image: img10,
			id: 10,
		},
		{
			image: img11,
			id: 11,
		},
	];

	// total selected files in the checkbox
	const handleImageSelect = (index) => {
		if (selectedImages.includes(index)) {
			// Deselect the image
			setSelectedImages(
				selectedImages.filter((selectedIndex) => selectedIndex !== index)
			);
		} else {
			// Select the image
			setSelectedImages([...selectedImages, index]);
		}
	};

	// Reorder image

	return (
		<>
			<div>
				<div className="m-5 gap-4">
					<button className="bg-red-300 p-4 rounded-md text-black">
						{selectedImages.length}
						Files selected
					</button>
					<button
						className="bg-red-300 p-4 ml-3 rounded-md text-black"
						// onClick={()=>reorderImages(id)}
					>
						Reorder
					</button>
					<button
						className="bg-red-500 p-4 ml-3 rounded-md text-black"
						// onClick={deleteSelectedImages}
					>
						Delete Selected
					</button>
					<button
						className="bg-blue-300 p-4 ml-3 rounded-md text-black"
						// onClick={() => setFeatured(featuredImage)}
					>
						Set Featured
					</button>
				</div>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 m-14">
				{imageData.map((item, index) => (
					<SingleImage 
                    key={item.id} 
                    item={item}
                    selectedImages={selectedImages}
                    index={index}
                    handleImageSelect={handleImageSelect}
                    
                    ></SingleImage>
				))}

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
			</div>

			<div className="grid lg:grid-cols-3 md:{grid-cols-2 sm:grid-cols-1">
				<Image></Image>
			</div>
			
		</>
	);
};

export default ImageGallery;
