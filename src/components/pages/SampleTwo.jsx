/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SampleTwo = ({ isDrag, draggedImageIndex, imageSource }) => {
	return (
		isDrag &&
		Number(draggedImageIndex) === Number(imageSource) && <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed rounded-lg z-50">Drop here</div>
	);
};

export default SampleTwo;
