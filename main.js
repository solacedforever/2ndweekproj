
function question1() {
  // Answer:
  let sum = 0;
  let avg = 0;
  for (i = 0; i < data.length; i++) {
    sum += data[i].price;
    }
  let avgloop = sum / data.length;
  console.log(avgloop);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let moo = [];
  data.forEach(function(item) {
    if (item.price <= 18 && item.price >= 14 && item.currency_code === "USD") {
      moo.push(item.title);
    }
  });
  console.log(moo);
}

//
//
// let cost = [];
// for (var i = 0; i > data.length; i++) {
//   let value = data[i].price;
//   if (value <= 14 && value <= 18) {
//     cost.push(value);
//   }
//   console.log(cost);
// }
//


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  for (c in data) {
    if (data[c].currency_code === "GBP"); {
      console.log(data[c].title, data[c].price, "pounds")
    }
  }
}
//
// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let wooditems = []
  for (w in data) {
    if (data[w].materials) {
      let materials = data[w].materials;
      for (i in materials) {
        if (materials[i] === "wood") {
          wooditems.push(data[w].title);
        }
      }
    }
  }
  console.log(wooditems);
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  data.forEach(function(item) {
    if (item.materials.length > 8) {
      console.log(item.title, item.quantity,
        item.materials.forEach(function(material) {
          console.log("The items are ", material)
        }));
    }
  });
}

  // 6: How many items were made by their sellers?
  // Answer:
  function question6() {
    // Answer:
    let seller = 0
    data.forEach(function(item) {
      if (seller.who_made === "i_did") {
        seller ++
      }
    });
    console.log(seller + "made by themselves");
}
