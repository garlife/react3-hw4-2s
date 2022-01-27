import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./ClassComponent.js"
import FunctionalComponent from "./FunctionalComponent";

ReactDOM.render(<>
<FunctionalComponent />,
<ClassComponent />
</>, document.getElementById("root"));
