# Linear Scale

**SOURCE**:
* Observable lecture: https://youtu.be/Crp8UX-eQB0?list=PLOHIJAFwtkEcK_mLLScnX2B-yHDjzSxuR
* Additional reference: https://medium.com/@john.goodman/getting-started-with-d3-js-6de226320878

---------------------
**What is a scale?**
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







