function CheckoutForm(props) {
  console.log("props", props);

  return (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="id" value={props.prod_id} />
      <input type="hidden" name="price" value={props.price} />
      <button type="submit" id="checkout-button">
        Buy Now
      </button>
    </form>
  );
}

export { CheckoutForm };
