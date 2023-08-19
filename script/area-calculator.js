function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);
    console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}
function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length= parseFloat(rectangleLengthText);
    console.log(length);

    const area = width * length;
    console.log(area);

    const triangleArea = document.getElementById('rectangle-area');
    triangleArea.innerText = area;

    if(isNaN(width) || isNaN(length)){
        alert('please insert a number');
        return;
    }
}

function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    console.log(base);

    const high = getInputValue('Parallelogram-base');
    console.log(high);

    const area = base * high;
    console.log(area);
    setInnerText('Parallelogram-area',area)
}

function calculateEllipseArea(){
    const EllipseFirstRadius =getInputValue('Ellipse-first-radius');
    const EllipseSecondRadius = getInputValue('Ellipse-second-radius');
    const sorafat = 3.1416 * EllipseFirstRadius * EllipseSecondRadius;
    setInnerText('Ellipse-area',sorafat);
}

function getInputValue(FieldId){
    const inputField = document.getElementById(FieldId);
    const inputFieldValue = inputField.value;
    const value = parseFloat(inputFieldValue);
    return value;
}

function setInnerText(elementId,fat){
    const element = document.getElementById(elementId);
    element.innerText = fat;
}