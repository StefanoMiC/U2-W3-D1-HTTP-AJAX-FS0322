const getRemoteData = function (url, callback) {
  // HANDLING THE NETWORK REQUEST (HTTP)
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //...
  //...

  if (error) {
    callback(error);
  } else {
    callback(null, data);
  }
};

let getData = function (url, callback) {
  // Performing HTTP REQUEST...
  // let data = result of the request

  callback(data);
};

getData("https://whatever.com/users/1283712", function (user) {
  getData("https://whatever.com/posts/" + user.name, function (blogPosts) {
    getData("https://whatever.com/comments/" + blogPosts[0].id, function (comments) {
      // USE COMMENTS IN OUR PAGE
      // DOM MANIPULATION

      console.log(comments);
    });
  });
});

function greet() {
  console.log("HI");
}

const greet = function () {
  console.log("HI");
};
greet();

const greetArrow = () => {
  console.log("HI");
};

const sum = () => 3 + 2;

getData("https://whatever.com/users/1283712", (err, user) => {
  if (err) {
    console.log(err);
  } else {
    getData("https://whatever.com/posts/" + user.name, blogPosts =>
      getData("https://whatever.com/comments/" + blogPosts[0].id, comments => {
        // USE COMMENTS IN OUR PAGE
        // DOM MANIPULATION

        console.log(comments);
      })
    );
  }
});

// PROMISES

getData("https://whatever.com/users/1283712")
  .then(user => getData("https://whatever.com/posts/" + user.name))
  .then(blogPosts => getData("https://whatever.com/comments/" + blogPosts[0].id))
  .then(comments => {
    // USE COMMENTS IN OUR PAGE
    // DOM MANIPULATION

    console.log(comments);
  })
  .catch(error => console.log(error));
