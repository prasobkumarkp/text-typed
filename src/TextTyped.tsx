import * as React from 'react';
import './TextTyped.css'

export interface ITextTypedProps extends React.Props<TextTyped> {
    texts: string[]
}

export default class TextTyped extends React.Component<ITextTypedProps, any> {

    private ref: any;
    private counter: number = 0;
    private timer: any;
    private currentText: string;
    private currentTextsIndex: number = 0;

    public typeText = () => {
        this.currentText = this.props.texts[this.currentTextsIndex];
        if (this.counter < this.currentText.length && this.ref !== null && this.ref.innerText !== null) {
            this.ref.innerText += this.currentText.charAt(this.counter);
            this.counter++;
            this.timer = setTimeout(() => this.typeText(), 30);
        } else {
            clearTimeout(this.timer);
            setTimeout(() => {
                if (this.ref !== null && this.ref.innerText !== null) {
                    this.counter = this.ref.innerText.length;
                    this.removeText();
                }
            }, 2000)
        }
    }

    public removeText = () => {
        if (this.counter > 0) {
            if (this.ref !== null && this.ref.innerText !== null) {
                this.ref.innerText = this.ref.innerText.slice(0, -1);
                this.counter--;
                this.timer = setTimeout(() => this.removeText(), 50);
            }
        } else {
            clearTimeout(this.timer);
            this.counter = 0;
            if (this.props.texts.length > this.currentTextsIndex + 1) {
                this.currentTextsIndex++;
            } else {
                this.currentTextsIndex = 0;
            }
            this.typeText();
        }
    }

    public componentDidMount() {
        if (this.props.texts.length > 0 && this.ref.innerText !== null) {
            this.typeText();
        }
    }

    public render() {
        return <div>
            <span ref={(div) => this.ref = div} />
            <span className='cursor' />
        </div>
    }
}