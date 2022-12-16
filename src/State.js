import React from "react";

class Animal extends React.Component {
    constructor(passer) {
        super(passer);
        this.state = {Type: "Monkey"};
    }
    render() {
        return (
            <>
                <p>My Animal {this.state.Type}</p>
            </>
        )
    }
}

export default Animal;