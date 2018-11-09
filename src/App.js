import React from 'react';
import ImageUpload from './components/image-upload';
import InputName from './components/input-name';
import Editor from './components/editor';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit() {
		let data = {
			images: this.images.getValue(),
			name: this.name.getValue(),
			content: this.content.getValue()
		};
		console.log(data);
		alert(`Submit: ${JSON.stringify(data)}`);
	}

    render() {
		return (
			<div className='app center'>
				<div className='header'>
					<ImageUpload ref={r => this.images = r} />
					<InputName ref={r => this.name = r} />
				</div>
				<Editor ref={r => this.content = r} />
				<div className='btn btn-submit' onClick={this.onSubmit}>Submit</div>
    		</div>
		);
    }
}

export default App;
