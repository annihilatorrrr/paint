import {line} from "../../_snowpack/pkg/bresenham-zingl.js";
import {clearContext} from "../helpers/clear-context.js";
import {drawCircle} from "../helpers/draw-circle.js";
export class LineTool {
  constructor() {
    this.startPosition = {x: 0, y: 0};
  }
  onPointerDown(x, y, {previewContext, context}, color) {
    if (previewContext && context) {
      this.startPosition = {x, y};
      previewContext.fillStyle = context.fillStyle = color.stroke.value;
    }
  }
  onPointerMove(x, y, {previewContext, canvas, lineWidth}) {
    if (canvas && previewContext) {
      this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
    }
  }
  onPointerUp(x, y, {previewContext, context, canvas, lineWidth}) {
    if (previewContext && context && canvas) {
      this.drawLine(x, y, context, previewContext, canvas, lineWidth);
    }
  }
  drawLine(x, y, targetContext, previewContext, canvas, lineWidth) {
    clearContext(previewContext);
    line(x, y, this.startPosition.x, this.startPosition.y, (x2, y2) => {
      drawCircle(x2, y2, lineWidth, targetContext);
    });
  }
}