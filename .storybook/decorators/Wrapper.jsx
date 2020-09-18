import React from "react";
import State from "../../src/state";

/*
	Provides access to context to stories
*/

const Wrapper = (story) => <State>{story()}</State>;

export default Wrapper;
