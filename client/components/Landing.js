import React from 'react';

import PFP from 'containers/PFP'
import ExamplePicture from './ExamplePicture'
import FbImageButton from 'containers/FbImageButton'
import CustomImageButton from 'containers/CustomImageButton'
import Video from './Video'
import { monologue, credits } from 'json/mudd.json';
import { text } from 'json/landing.json';

class Landing extends React.Component {
    componentDidMount() {
        this.props.getPFP();
    }
    getAppContents = (loaded, hasCustomImage, hasFbImage) => {
        if (loaded === false) {
            return [
                <ExamplePicture blank={true} />,
                <div className="buttons">
                    <FbImageButton />
                    <CustomImageButton />
                </div>
            ];
        }
        if (hasCustomImage === true) {
            return [
                <PFP custom />,
                <div className="buttons">
                    <FbImageButton />
                    <CustomImageButton selected />
                </div>
            ]
        }
        if (hasFbImage === true) {
            return [
                <PFP facebook/>,
                <div className="buttons">
                    <FbImageButton selected />
                    <CustomImageButton />
                </div>
            ]
        }
        return [
            <ExamplePicture />,
            <div className="buttons">
                <FbImageButton />
                <CustomImageButton />
            </div>
        ]
    }
    renderLine = (line, i) => <p className="line" key={i} children={line} />
    render() {
        const { loaded, hasCustomImage, hasFbImage } = this.props;

        const iLines = <div className="intro" children={text.map(this.renderLine)} />
        const mLines = <div className="monologue" children={monologue.map(this.renderLine)} />
        const creditEl = <p className="monologue-credit" children={credits} />

        const secondLine = (loaded && (hasCustomImage || hasFbImage)) ?
            "Click below to save" :
            "Add a filter to your profile picture"

        return <div className="Landing">
            <div className="Header"><h1>I'm a Proud Shitholer.</h1></div>
            <div className="intro-section">
                {iLines}
            </div>    
            <div className="picture-section">
                <h1>From a "shithole country" and proud of it?</h1>
                <h2 children={secondLine} />
                {this.getAppContents(loaded, hasCustomImage, hasFbImage)}
            </div>
            <div className="video-section">
                <Video />
                {mLines}
                {creditEl}
            </div>
        </div>
    }
}

export default Landing
