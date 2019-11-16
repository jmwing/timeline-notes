import React from 'react';

interface NoteTitleProps {
    title: string;
    titleChangeHandler: (newTitle: string) => any;
}

interface NoteTitleState {
    editing: boolean;
    titleValue: string;
}

export class NoteTitle extends React.Component<NoteTitleProps, NoteTitleState> {
    inputRef = React.createRef<HTMLInputElement>();

    constructor(props: NoteTitleProps) {
        super(props);

        this.state = { editing: false, titleValue: props.title};
    }

    render() {
        return (
            <div className="note-title">
                <input type="text"
                    ref={this.inputRef}
                    onClick={this.handleClick.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    value={this.state.titleValue} />
            </div>
        )
    }

    handleClick(e: React.MouseEvent) {
        this.setState({ editing: true });
    }

    handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            e.preventDefault();

            this.props.titleChangeHandler(this.state.titleValue)
            this.setState({ editing: false});
        }
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({ titleValue: e.currentTarget.value});
    }

    handleBlur(e: React.FocusEvent) {
        this.setState({titleValue: this.props.title});
    }
}