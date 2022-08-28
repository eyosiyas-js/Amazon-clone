import React, { useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {useRouter} from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const [user, setUser] = useState();
  const router = useRouter()
  const items = useSelector(selectItems)


  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user.displayName);
    });
  };

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 bg-yellow-400 rounded-md hover:bg-yellow-500 flex-grow cursor-pointer ">
          <input
            type="text"
            className="p-2 h-full flex-grow rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          <div onClick={signIn} className="cursor-pointer hover:underline">
            <p>HI {user}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="cursor-pointer hover:underline flex items-center relative"
          >
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full hover:bg-yellow-500  text-black font-bold md:right-10">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3">
        <p className="cursor-pointer hover:underline flex items-center">
          <MenuIcon className="h-6" />
          All
        </p>
        <p className="cursor-pointer hover:underline">Prime Video</p>
        <p className="cursor-pointer hover:underline">Amazon Business</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="hidden lg:inline-flex">Eletronics</p>
        <p className="hidden lg:inline-flex">Food & Grocery</p>
        <p className="hidden lg:inline-flex">Prime</p>
        <p className="hidden lg:inline-flex">Buy Again</p>
        <p className="hidden lg:inline-flex">Shoper Toolkit</p>
        <p className="hidden lg:inline-flex">Health & personal Care</p>
      </div>
    </header>
  );
}

export default Header;
