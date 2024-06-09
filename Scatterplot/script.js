

const myLinearScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, 100])

// Use the scale function
  console.log(myLinearScale(0));
  console.log(myLinearScale(0.5));
  console.log(myLinearScale(50));

//read data from csv
d3.csv("data/Scatterplot.csv")
  .then(function (data) {
    
  //clean the data - change data to numeric
  data.forEach(function(data) {
    data.petalLength = +Number(data.petalLength);
    data.petalWidth = +Number(data.petalWidth);
    data.sepalWidth = +Number(data.sepalWidth);
    data.sepalLength = +Number(data.sepalLength);
    
  })

  console.log(data)

})

// Min and Max function

// We use this to determine our scales
// 1) load the data
// 2) map data to extract values - sepal length
// 3) calculate minimum/maximum value
// 4) use d3.extent to calculate min and max value
d3.csv("data/Scatterplot.csv").then(function(data) {
  const myValues = data.map(data => +data.sepalLength)

  const minValue = d3.min(myValues)
  const maxValue = d3.max(myValues)
  const extentValues = d3.extent(myValues)

  console.log(myValues);
  console.log("Minimum value of sepal length is: ", minValue);
  console.log("Maximum value of sepal length is: ", maxValue);
  console.log(extentValues);
})

//We use this to create a linear scale
//1) extract sepal length values - convert them to numbers
//2) calculate the extent value of sepal length
d3.csv("data/Scatterplot.csv").then(function(data) {
  const myValues = data.map(data => +data.sepalLength)
  const extentValues = d3.extent(myValues)

  console.log(extentValues);


//create a linear scale
// 1) create a linear scale function - d3.scaleLinear()
// 2) set the domain scale - use extent value
// 3) sets the desired output range

  const linearScale = 
    d3.scaleLinear()
      .domain(extentValues)
      .range([0,1])(5.5)

      console.log(linearScale)
  })


//Ordinal scales



