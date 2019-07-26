import React, { Component } from 'react';




class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            description: "",
            price: 0
        }

    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit= e => {
    e.preventDefault()
    const newGoal = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
    }
    this.setState(prevState => ({
        name: "",
        description: "",
        price: 0

    }))
}

// useEffect(() =>{
//     (data.getTransaction),
//     [data.getTransaction]
// })

    render() {
        return (
            <div id="profileContainer" >

                <h1>Profile</h1>

                <from className="goalContainer" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name your Goal!"
                    />
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="description"
                    />
                    <input
                        type="number"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        placeholder="price"
                    />

                    <button className="goalButton">Submit</button>

                </from>


            </div>
        )
    }

}

export default Profile