/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer";

const Main = () => {
	return (
		<div>
			<Outlet></Outlet>
			<Footer />
		</div>
	);
};

export default Main;
