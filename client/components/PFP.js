import React from 'react';
import overlayImg from 'assets/overlay.png'

const CANVAS_SIZE = 1024;

class PFP extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.loadImage(this.props.image)
    }
    componentWillReceiveProps(nextProps) {
        this.loadImage(nextProps.image)
    }
    loadImage(url) {
        let img = new Image();
        img.onload = () => {
            let dims = {
                width: img.width,
                height: img.height
            }
            this.drawOnCanvas(img, dims);
        }
        img.crossOrigin = "anonymous";
        img.src = url;
    }
    drawOnCanvas(img, dims) {
        let c = this.canvas;
        let ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height)
        
        let { width, height } = dims;

        let smallest = Math.min(width, height);
        let dx = 0;
        let dy = 0;
        let dWidth = CANVAS_SIZE;
        let dHeight = CANVAS_SIZE;
        let sx = (width - smallest) / 2;
        let sy = (height - smallest) / 2;
        let sWidth = smallest;
        let sHeight = smallest;


        ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        this.drawOverlay(ctx);
    }
    drawOverlay(ctx) {
        let overlay = new Image()
        overlay.onload = () => {
            ctx.drawImage(overlay, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        }
        overlay.crossOrigin = "anonymous";
        overlay.src = overlayImg
    }
    openCanvas = () => {
        this.saveLink.href = this.canvas.toDataURL("image/png");
        this.saveLink.download = "profpic.png";
        this.saveLink.click()
    }
    registerCanvas = canvas => { this.canvas = canvas };
    registerLink = link => { this.saveLink = link };
    render() {
        return <div className="Picture">
            <a ref={this.registerLink} style={{ 'display': 'none' }} />
            <canvas
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                ref={this.registerCanvas}
                onClick={this.openCanvas}
            />
        </div>
    }    
}

export default PFP;