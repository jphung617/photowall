import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleSubmit(submit) {
        submit.preventDefault();
        const imageLink = submit.target.elements.link.value
        const description = submit.target.elements.description.value
        const post = {
            id: Number(new Date),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
        <div>
            <h1> Photowall </h1>
 
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button className='button'> 
                        Post
                    </button>
                </form>
            </div>
        </div>
        )
    }
}

export default AddPhoto