class ApiClient {
  getRectangles(width, height) {
    const maxRectangles = Math.floor(Math.min(width, height) / 10);
    const numRectangles = Math.floor(Math.random() * maxRectangles) + 1;

    const rectangles = [];

    for (let i = 0; i < numRectangles; i++) {
      const xMin = Math.floor(Math.random() * width);
      const yMin = Math.floor(Math.random() * height);
      const rectWidth = Math.floor(Math.random() * (width - xMin));
      const rectHeight = Math.floor(Math.random() * (height - yMin));

      rectangles.push({
        xMin,
        yMin,
        xMax: xMin + rectWidth,
        yMax: yMin + rectHeight,
      });
    }

    return rectangles;
  }
}

export default ApiClient;