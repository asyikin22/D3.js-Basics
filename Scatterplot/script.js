//Linear scale (without data set)
const myLinearScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, 100])

// Use the scale function
  console.log(myLinearScale(0));
  console.log(myLinearScale(0.5));
  console.log(myLinearScale(50));


//Ordinal scale (without data set)
const myFruit = d3.scaleOrdinal()
  .domain(["strawberry", "durian", "lemon"])
  .range(["red", "green", "yellow"]);

  console.log(myFruit("durian"))
  console.log(myFruit("strawberry"))
  console.log(myFruit("lemon"))

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

//Ordinal scales (with data set)
//We need to filter the data - extract species name and removes duplicates
//this will result in an array of unique species name
d3.csv("data/Scatterplot.csv").then(function(data) {
  const mySpecies = data.map(data => data.species)

  console.log(mySpecies)

  const newAray = Array.from(new Set(data.map((data) => data.species)))

  console.log(newAray)

  //How to use scale
    const myFlower = d3.scaleOrdinal()
      .domain(newAray)
      .range(["blue", "violet", "pink"]) // setosa, versicolor, virginica

      console.log(myFlower("setosa"))
      console.log(myFlower("versicolor"))
      console.log(myFlower("virginica"))

      // Create an SVG
// Set width, height, margin and container to put the margin in

{
  const width = 600;
  const height = 400;
  const margin = { top: 20, bottom: 20, left: 20, right:20 }

  const svg = d3
    .create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("border", "5px dotted #FF0000")

  //container (akin to <div> in HTML)
  //We use 'transform' to move svg to right and then down to center it

  const g = svg 
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)

    // g.append("rect").attr("width", width).attr("height", height)

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d["sepalLength"]))
      .range([0, width])

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d["sepalWidth"]))
      .range([height, 0])

    const myFlower = d3
      .scaleOrdinal()
      .domain(newAray)
      .range(["blue", "violet", "pink"])

    g.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", 5)
    .attr("cx", (data) => x(data.sepalLength))
    .attr("cy", (data) => y(data.sepalWidth))
    .style("fill", (data) => myFlower(data.species))

  document.body.append(svg.node()) 
}
})
  






