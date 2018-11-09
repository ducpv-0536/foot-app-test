import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill, {Quill} from 'react-quill';
import ImageResize from 'quill-image-resize-module';
import VideoResize from 'quill-video-resize-module';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import './editor.scss';

console.log(VideoResize);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/videoResize', VideoResize);

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            editorHtml: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this)
    }

    getValue() {
        return this.state.editorHtml;
    }

    handleChange(html) {
        this.setState({editorHtml: html});
    }

    render () {
        return (
            <div className='editor-wrapper'>
                <ReactQuill
                    theme={'snow'}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

Editor.modules = {
    imageResize: {
        displayStyles: {
            backgroundColor: 'black',
            border: 'none',
            color: 'white'
            // other camelCase styles for size display
        }
    },
    videoResize: {
        displayStyles: {
            backgroundColor: 'black',
            border: 'none',
            color: 'white'
            // other camelCase styles for size display
        }
    },
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
        {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
}

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

Editor.propTypes = {
    placeholder: PropTypes.string,
}
