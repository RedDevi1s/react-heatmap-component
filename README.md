# React Heatmap Component
A react component version of `heatmap.js`
## Usage
The component only needs four parameters, data point, image url, image width and height, and an optional config Object. You can refer to
[`heatmap.js documentation`](http://www.patrick-wied.at/static/heatmapjs)) for more details
```js
import Heatmap  from 'react-heatmap-component'
    const dataPoints = {
        max: 100,
        min: 0,
        data: [{
            x: 50,
            y: 20,
            value: 64
        }, {
            x: 23,
            y: 11,
            value: 55
        }]
    }
    <Heatmap
        imgUrl={imgUrl}
        dataPoint={dataPoint}
        height={height}
        width={width}
    />
```
## Develop
**build**
```js
npm run build
```
**dev**  
Source code is in the `lib` folder
```js
npm run dev
```