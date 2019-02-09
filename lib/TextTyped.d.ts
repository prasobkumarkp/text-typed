import * as React from 'react';
import './TextTyped.css';
export interface ITextTypedProps extends React.Props<TextTyped> {
    texts: string[];
}
export default class TextTyped extends React.Component<ITextTypedProps, any> {
    private ref;
    private counter;
    private timer;
    private currentText;
    private currentTextsIndex;
    typeText: () => void;
    removeText: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
