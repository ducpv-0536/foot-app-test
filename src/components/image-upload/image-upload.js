import React from 'react';
import Dropzone from 'react-dropzone';
import './image-upload.scss';

export default class InputImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
        this.onDrop = this.onDrop.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    onDrop(files) {
        if (files.length === 0) {
            return;
        }

        const images = this.state.images.concat(files.map((file, idx) => ({
            file,
            id: `${idx}${Date.now()}`
        })));
        this.setState({images});
    }

    onClickImage(event) {
        event.stopPropagation();
    }

    onRemoveImage(imageId, event) {
        event.stopPropagation();
        this.setState({images: this.state.images.filter((image) => imageId !== image.id)});
    }

    getValue() {
        return this.state.images;
    }

    renderPreview() {
        return this.state.images.map(item => (
            <div key={item.id} className='dropzone_preview-item'>
                <img src={URL.createObjectURL(item.file)} alt='' onClick={this.onClickImage} />
                <div onClick={this.onRemoveImage.bind(this, item.id)} className='dropzone_remove-item'>x</div>
            </div>
        ));
    }

    render() {
        return (
            <Dropzone
                className='dropzone input-image-wrapper'
                multiple={this.props.multiple}
                onDrop={this.onDrop}
                accept='image/*'
            >
                <div className='dropzone_placeholder'>
                    <svg
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='camera-retro'
                        className='svg-inline--fa fa-camera-retro fa-w-16'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                    >
                        <path fill='currentColor' d='M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z'></path>
                    </svg>
                    Up hình ảnh thành phẩm
                </div>
                <div className='dropzone_previews'>
                    {this.renderPreview()}
                </div>
            </Dropzone>
        );
    }
}
