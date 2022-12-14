import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const cd = [
  {
    title: "Camera SoftShell Component",
    desciption: "Protect your lenses, extra water proof.",
    name: "",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
    url: "",
  },
  {
    title: "",
    desciption: "",
    name: "",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
    url: "",
  },
  {
    title: "",
    desciption: "",
    name: "",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
    url: "",
  },
  {
    title: "",
    desciption: "",
    name: "",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
    url: "",
  },
];

const Recommand = () => {
  const cards = cd.map((item) => {
    const firstRow =
      cd.indexOf(item) === 0 || cd.indexOf(item) === 3 ? "col-span-2" : "";
    return (
      <Card
        className={`w-[100%] h-[500px] bg-center bg-cover ${firstRow} flex flex-col items-center justify-center
        max-sm:h-[360px]`}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <h1
          className="text-white font-extrabold text-lg tracking-wide"
          style={{ textShadow: "#000000 0 0 4px" }}
        >
          {item.title}
        </h1>
        <p
          className="text-slate-200 text-md"
          style={{ textShadow: "#000000 0 0 2px" }}
        >
          {item.desciption}
        </p>
        <Button
          className="shadow-sm my-6"
          bgColor="white"
          hoverColor="white"
          color="black"
        >{`SHOP ${item.name} NOW`}</Button>
      </Card>
    );
  });

  return (
    <section className="p-3">
      <div className="grid grid-cols-2 gap-4 max-w-[1080px] m-auto">
        {cards}
      </div>
    </section>
  );
};

export default Recommand;
