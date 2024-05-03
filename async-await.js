// async await
async function getCart() {
  let data = await fetch(window.Shopify.routes.root + "cart.js", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
  cart = data;
  return data;
}

// try...catch
async function getCart() {
  let data;
  try {
    const response = await fetch(window.Shopify.routes.root + "cart.js", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
  cart = data;
  return data;
}

// async await with promises
async function addCompareAtPrice(cart) {
  const requests = cart.items?.map(async (item) => {
    try {
      const response = await $.ajax({
        url: "/products/" + item.handle + ".js",
        dataType: "json",
      });
      item["compare_at_price"] = 0; // Initialize to 0 by default
      response.variants.forEach((variant) => {
        if (
          variant.compare_at_price != null &&
          variant.id === item.variant_id
        ) {
          item["compare_at_price"] = variant.compare_at_price;
        }
      });
    } catch (error) {
      console.error("Failed to fetch product data for", item.handle, error);
    }
  });

  await Promise.all(requests); // Wait for all AJAX requests to complete
  return cart;
}
