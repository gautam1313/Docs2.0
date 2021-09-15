import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
  return (
    <header className="sticky t-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" color="blue" size="5xl" />
      <h1 className="text-gray-700 text-2xl">Docs</h1>
      <div className="ml-5 md:ml-20 px-5 py-2 flex flex-grow text-gray-600 items-center bg-gray-100 rounded-lg focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-grow px-5 text-base"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 border-0 h-20 w-20"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png"
        loading="lazy"
        alt=""
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
      />
    </header>
  );
};

export default Header;
