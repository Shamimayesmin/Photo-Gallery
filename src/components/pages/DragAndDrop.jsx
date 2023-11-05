/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { BsImage } from "react-icons/bs";
const DragAndDrop = ({ handleFileChange }) => {
	return (
		<div className="card card-compact relative border-2 border-dashed rounded-lg hover:bg-gray-50 transition-colors ease-linear p-4">
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
			<div className="h-full w-full flex flex-col pt-4 justify-center items-center gap-y-4 py-5">
				<BsImage className="w-7 h-7" />
				<span>Add image</span>
			</div>
		</div>
	);
};

export default DragAndDrop;

