import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

class Editor extends React.Component {
	_cm: CodeMirror.Editor

	componentDidMount() {
		this._cm = CodeMirror(this.refs.container, {
      theme: 'p5-widget',
      value: this.props.content,
      lineNumbers: true,
      mode: 'javascript'
    });
    this._cm.on('change', () => {
      this.props.updateFile("sketch.js", this._cm.getValue());
    });
	}

	componentDidUpdate(prevProps) {
		if (this.props.content !== prevProps.content &&
        this.props.content !== this._cm.getValue()) {
      this._cm.setValue(this.props.content);
    }
	}

	componentWillUnmount() {
		this._cm = null;
	}

	render() {
		return <div ref="container" className="editor-holder"></div>;
	}
}

export default Editor;