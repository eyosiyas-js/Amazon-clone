import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, subtotal } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";
import Currency from "react-currency-formatter";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(subtotal);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="flex">
        <div className="lg:flex max-w-screen-lg mx-auto  ">
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
            />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">
                {items.length === 0
                  ? "Your Basket is empty"
                  : "shopping Basket"}
              </h1>
              {items.map((item, i) => (
                <CheckOutProduct
                  key={item.i}
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  rating={item.rating}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 ">
          {items.length > 0 && (
            <>
              <h2 className="">
                <Currency quantity={total} currency="EUR" />
                Subtotal ({items.length})<span></span>
              </h2>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
