/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import imageData from "../../data";
import { BsImage } from "react-icons/bs";
const DragAndDrop = ({ handleFileChange }) => {
	return (
		<div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear mb-11 m-10">
			<input
				type="file"
				title="Upload photo..."
				name="image"
				id="image"
				accept="image/*"
				multiple
				className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
				onChange={handleFileChange}
			/>
			<div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
				<BsImage className="w-7 h-7" />
				<span>Add image</span>
			</div>
		</div>
	);
};

export default DragAndDrop;

