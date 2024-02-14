import { useState } from "react";
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Inputs from "../../ui/components/Inputs";
import Buttons from "../../ui/components/Buttons";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "loading";
  const formErrors = useActionData();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">First Name</label>
          <Inputs
            customStyles="grow"
            className="inputs"
            type="text"
            name="customer"
            placeholder="First name"
            value={`${name}`}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <Inputs
              customStyles="w-full"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={`${phone}`}
              onChange={(e) => {
                setPhone(e.target.value);
                formErrors.phone = "";
              }}
              required
            />
            {formErrors?.phone && (
              <p className="mt-2 w-fit rounded-md bg-red-100 p-1 text-xs text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <Inputs
              customStyles="w-full"
              type="text"
              name="address"
              placeholder="Address"
              value={`${address}`}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex items-center gap-5">
          <input
            className="h-5 w-5 accent-sky-500 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Buttons type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing your order.." : "Order now"}
          </Buttons>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = `Sorry but we need a valid phone number to contact you. Please try again.`;
  }
  if (Object.keys(errors).length > 0) return errors;
  return null;
  // const newOrder = await createOrder(order);
  // return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
