"use client";
import React, { useMemo, useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Textarea,
  Button,
  Image,
} from "@nextui-org/react";

const options = [
  { label: "Gataux", value: 1 },
  { label: "Chocolat", value: 2 },
  { label: "Citron", value: 3 },
  { label: "Fruit", value: 4 },
  { label: "Fraise", value: 5 },
];

function ProductForm() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUploadInput = async (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "kika_upload");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/djbkujkg/image/upload`,
      { method: "POST", body: formData }
    ).then((s) => s.json());
    setImage(res.url);
  };

  const CreateHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      name === "" ||
      image === "" ||
      price === "" ||
      description === "" ||
      inStock === "" ||
      categories === null
    ) {
      setError("You must fullfill all input!");
      setLoading(false);
      return;
    }
    try {
      const slug = name.replace(" ", "-");

      let category = categories.toString().split(",");

      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          name,
          slug,
          image,
          price,
          description,
          inStock,
          categories: category,
        }),
      });

      setCategories([]);
      setName("");
      setDescription("");
      setPrice("");
      setInStock(false);
      setImage("");

      if (response.ok) {
        setLoading(false);
        console.log("u have created a product");
        return;
      }
    } catch (err) {
      setError("check your connextion");
      setLoading(false);
      return;
    }
  };

  return (
    <form
      onSubmit={CreateHandler}
      className="flex h-full text-background p-8 flex-col gap-4 "
    >
      <h1 className="text-xl font-bold border-b text-start px-4 py-5">
        Create a Product
      </h1>
      <Input
        isRequired
        radius="sm"
        type="text"
        value={name}
        labelPlacement="outside"
        placeholder="ex:chocolat"
        label="name"
        onChange={(e) => setName(e.target.value)}
        className="outline-none rounded-sm"
      />
      <Input
        isRequired
        radius="sm"
        type="number"
        label="Price"
        placeholder="0.00"
        labelPlacement="outside"
        onChange={(e) => setPrice(e.target.value)}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">DZ</span>
          </div>
        }
      />
      <Select
        label="Categories"
        radius="sm"
        isRequired
        labelPlacement="outside"
        placeholder="Select an categories"
        selectionMode="multiple"
        className="max-w-xs"
        onChange={(e) => setCategories(e.target.value)}
      >
        {options.map((option) => (
          <SelectItem
            key={option.label}
            value={option.label}
            radius="sm"
            className=" capitalize"
          >
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Textarea
        label="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="Description"
        labelPlacement="outside"
        isRequired
      />
      <input type="file" onChange={(e) => handleUploadInput(e.target.files)} />
      {image && (
        <Image
          width={300}
          height={200}
          alt="NextUI hero Image with delay"
          src={`https://app.requestly.io/delay/1000/${image}`}
        />
      )}
      <Select
        label="inStock"
        placeholder="select"
        onChange={(e) => setInStock(e.target.value)}
        isRequired
        defaultSelectedKeys={["false"]}
      >
        <SelectItem value="false" key="false">
          Non
        </SelectItem>
        <SelectItem value="true" key="true">
          Oui
        </SelectItem>
      </Select>
      {/* <select
          name="inStock"
          value={inStock}
          onChange={(e) => setInStock(e.target.value)}
          id="inStock"
        >
          <option value="False">No</option>
          <option value="True">Yes</option>
        </select> */}
      {error && <h1 className="text-red-500 bg-red-300 px-3 py-2">{error}</h1>}
      <Button
        type="submit"
        radius="sm"
        variant="shadow"
        isLoading={loading}
        className="bg-background text-text"
      >
        Create Product
      </Button>
    </form>
  );
}

export default ProductForm;
