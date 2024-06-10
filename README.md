# Scatter Plot

**SOURCE**:
* Observable lecture: https://youtu.be/Crp8UX-eQB0?list=PLOHIJAFwtkEcK_mLLScnX2B-yHDjzSxuR
* Additional reference: https://medium.com/@john.goodman/getting-started-with-d3-js-6de226320878

---------------------
**Linear scale vs Ordinal Scale**
---------------------
- a functions that maps an abstract dimension of data to a visual representation
- two types - linear and ordinal

  ![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/4a8f096f-a002-4f7f-89f9-3ce612a269db)

---------------------
**Read data using d3.csv function**
---------------------
- I am using the data provided by Observable tutorial obtained from their website
- See data folder to access it
- The steps below is a demonstration of how we can manipulate the data and view it in our browser
- This data will then be used to create a linear scale and we can map a value to it
- First we need to load the data from csv file using d3.csv() method
- Then the data has to be cleaned because the numeric values are in string, so we need to change that ebfore we can do anything
  
  ![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/0f5019af-358a-4da2-a4a0-dcda71c54e40)

---------------------
**Use d3.extent to determine the min and max value of a scale**
---------------------

**This is the hard way of finding out the values without using d3.extent. (well it's not too hard but it requires more code lol)

  ![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/c372d409-715c-4f7e-8953-926b80401d9d)

**This is how we use d3.extent**

![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/ff9afc60-8837-4170-8eef-1b1fbf4025e3)

---------------------
**Create a linear scale and map a value**
---------------------

* please note that this code can't be executed in isolation from the rest of the function explained above because we derived the extent values directly from csv file
* It needs to run in the same function block
  
  ![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/e3693e9d-a45d-42ae-94f9-4891f2f6a664)


---------------------
**Create an Ordinal scale and map a value**
---------------------

![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/6bd4ba7d-81d4-4dd6-bb8f-85fbb542003c)


---------------------
**CANVAS**
---------------------

**Definition**:
- The medium which we render our visualization
- D3.js uses SVG to render visual elements.
  1) SVG - Scalable Vector Graphics
  2) It describes 2-D vector graphics
  3) We can create scatterplots, bar charts and line graphs by binding data to SVG elements.
- By default it is a blank white canvas
- If we add a circle without giving  coordinates, it places it at the top left corner
- When creating a chart, we need to add some margins so the axes don’t get cut off


**Summary of creating basic canvas for data visualization**:
- Declare the SVG
- Supply width and height
- Increase the width and height by those margins
- Create a container to handle for those margins

**Create SVG**

![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/ab4af744-8731-4d40-82f7-986c554dd3aa)


**Create container  Group <g> element**
- It's appended to SVG element
- Remember that the SVG is located at the top left corner by default
- So we have to use 'transform' attribute to move (translate) the g element to the right and then down the canvas
  1) We use margin's left value to move it to the right
  2) And margin's top value to move it down
  3) This will ensure the all elements inside the group positioned within margins and leave space around edges

![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/d4eaa315-b88c-45f7-aa9c-259577753b66)

**Data Join**:
- How to create objects for the numbers of datapoints in our data set
- Objects: Circles, rectangles, lines
- To join the data with SVG elements, we compare the 2 sets and determine whether we need to enter, update or exit the general update pattern
- How do we know there is no existing elements?
  1) We start our join by trying to select all the elements we want
  2) Compare to data
  3) Evaluate with a join
     
![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/e00036e6-9dae-4c30-9159-29f4591e16f5)


---------------------
**SCATTER PLOT**
---------------------

![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/71a01619-8ebd-4604-ad3e-ecb8d19ed5c6)

---------------------
**ERROR-SOLUTION**
---------------------
- I had problem executing the codes
- So I changed the way I calculate the extent values.
- Instead of passing 'extentValues' in the left, I use the one on the right
- The extentValues only calculate for length, not width. And also it doesn’t specify what kind of property (width/length) I want. so it doesnt make sense to use that. idk why i passed it in the first place lol 🤡
- The codes run after I debug it this way 🎉

![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/6c3a51a0-0f10-465f-9083-45e79415f6dd)


![image](https://github.com/asyikin22/D3.js-Basics/assets/148519441/d37cf34e-bf83-4fe0-a754-96e35645f984)








