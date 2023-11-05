/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Header = ({ selectedImages, deleteSelectedImages, setImages }) => {
	return (
		<div className="py-4 px-5">
			<div className="flex flex-row justify-between items-center">
				<h1 className="text-xl font-semibold">
					{" "}
					{selectedImages.length === 0 ? (
						"Photos"
					) : (
						<>
							<input
								type="checkbox"
								name="select"
								id="select"
								checked={selectedImages.length > 0}
								className="h-4 w-4 accent-blue-500 cursor-pointer"
								onChange={() => setImages([])}
							/>
							{selectedImages.length} Files Selected
						</>
					)}
				</h1>

				<button
					className="p-2 rounded-md text-xl font-semibold text-red-500 hover:bg-red-500 hover:text-white"
					onClick={deleteSelectedImages}
				>
					Delete Selected
				</button>
			</div>
		</div>
	);
};

export default Header;
