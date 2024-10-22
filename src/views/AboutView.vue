<template>
  <div>
    <div class="row">
      <div class="col-md-6 context">
        <h1>About Us</h1>
        <p>
          Welcome to our library, a vibrant community hub dedicated to fostering a love of reading
          and learning. Join us in celebrating knowledge and creativity!
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/about-us-image/cozy-library.jpg" class="form-control" height="350px" />
      </div>
    </div>
    <div class="row d-flex flex-md-row-reverse">
      <div class="col-md-6 context">
        <h1>Our Mission</h1>
        <p>
          At [Library Name], our mission is to foster a love of reading and lifelong learning by
          providing access to diverse resources, programs, and services. We strive to create an
          inclusive community space that empowers individuals, ignites curiosity, and supports
          education for all ages.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/about-us-image/ourmission.jpg" class="form-control" height="350px" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 context">
        <h1>Our Story</h1>
        <p>
          Once upon a time, in a small town, a group of passionate book lovers gathered in a cozy
          corner of a community center. They dreamed of a place where stories could come alive,
          where knowledge was freely shared, and where everyone felt welcome. With determination and
          a handful of donated books, they transformed that corner into a vibrant library.
        </p>
        <p>
          Today, our library stands as a testament to the power of community and the magic of books.
          We continue to inspire curiosity, promote literacy, and nurture a love for lifelong
          learning. Join us on this journey, and be part of our story!
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/about-us-image/ourstory.png" class="form-control" height="350px" />
      </div>
    </div>
    <div class="row">
      <h1 class="text-center d-block">OurLib By Numbers</h1>
      <div class="row p-4">
        <div class="col-md-4 text-center numberBlock">
          <img src="../assets/about-us-image/icons/time-zone_5594186.png" class="numberImage" />
          <p class="largerText">1 Global Offices</p>
        </div>
        <div class="col-md-4 text-center numberBlock">
          <img src="../assets/about-us-image/icons/workforce_16864284.png" class="numberImage" />
          <p class="largerText">1 Employee</p>
        </div>
        <div class="col-md-4 text-center numberBlock">
          <img src="../assets/about-us-image/icons/rating_4149882.png" class="numberImage" />
          <p class="largerText">7B+ Customers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.context {
  padding: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: larger;
}
.numberImage {
  width: 150px;
}
.largerText {
  font-size: larger;
}
</style>
