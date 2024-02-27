import Product from "../../../models/Product";
import { ConnectToDb } from "../../../utils/DB";

export const POST = async (req) => {
  const { name, slug, image, price, description, inStock, categories } =
    await req.json();
  try {
    await ConnectToDb();

    const newPeoduct = new Product({
      name,
      slug,
      image,
      price,
      description,
      inStock,
      categories,
    });

    await newPeoduct.save();
    return new Response(JSON.stringify(newPeoduct, { status: 201 }));
  } catch (err) {
    return new Response("Failed to create a new Product", { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await ConnectToDb();
    const product = await Product.find();
    return new Response(JSON.stringify(product, { status: 201 }));
  } catch (err) {
    return new Response("Failed to get Product", { status: 500 });
  }
};

export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  await ConnectToDb();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
};
