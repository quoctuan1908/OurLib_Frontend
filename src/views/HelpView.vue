<template>
  <div class="help-center">
    <h1 class="text-center">Help Center</h1>
    <ul class="faq-list rounded">
      <li>
        <h3>How to use my website?</h3>
        <p>My website is designed with user-friendliness in mind, ensuring that visitors can navigate effortlessly through its features and content. Each page is optimized for a seamless experience, with responsive design that adapts to any device, making it equally accessible on smartphones, tablets, and desktops.</p>
      </li>
      <li>
        <h3>How to borrow a book?</h3>
        <p>To borrow a book, simply click the "Borrow" button on that book's page. I will process your request as quickly as possible. You can track your request on your personal page by clicking on your avatar and then selecting "Your Account."</p>
      </li>
      <li>
        <h3>How to watch your request?</h3>
        <p>You account -> Select filter type -> Click on "Load" button below to show requests list</p>
      </li>
    </ul>
    <h2 class="guidelines-title">Library Website Rules and Guidelines</h2>
    <ol class="guidelines-list rounded">
      <li>
        <p><strong>User Registration:</strong></p>
        <p>Users must register for an account to borrow materials and access certain features. Ensure that personal information is kept secure.</p>
      </li>
      <li>
        <p><strong>Respect Copyright:</strong></p>
        <p>Users must adhere to copyright laws when accessing and using digital resources. Unauthorized reproduction or distribution of copyrighted materials is prohibited.</p>
      </li>
      <li>
        <p><strong>Appropriate Use:</strong></p>
        <p>The website and its resources are intended for educational and informational purposes. Users should not misuse the site for illegal activities or harassment.</p>
      </li>
      <li>
        <p><strong>Borrowing Policies:</strong></p>
        <p>Clearly outline borrowing limits, duration, and renewal processes. Users should be aware of fines for late returns and other penalties.</p>
      </li>
      <li>
        <p><strong>Privacy Policy:</strong></p>
        <p>Inform users about how their personal information is collected, used, and protected. Ensure compliance with applicable privacy laws.</p>
      </li>
    </ol>
  </div>
</template>

<style>
.help-center {
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: larger;
  max-width: 800px;
  margin: auto;
}

.text-center {
  text-align: center;
}

.faq-list, .guidelines-list {
  background-color: white;
  margin: 20px 0;
  padding-left: 20px;
  list-style-type: none;
}

.guidelines-title {
  padding: 10px 0;
}

h3 {
  margin-top: 15px;
}

p {
  margin: 5px 0;
}

/* Responsive styles */
@media (max-width: 600px) {
  .help-center {
    font-size: medium;
  }
}
</style>