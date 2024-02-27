import Order from "../../../models/Order";
import Product from "../../../models/Product";
import { ConnectToDb } from "../../../utils/DB";

export const GET = async () => {
  try {
    await ConnectToDb();

    const oreders = await Order.find().sort({ createdAt: -1 });

    return new Response(JSON.stringify(oreders), { status: 201 });
  } catch (err) {
    return new Response("Faild to get orders", { status: 500 });
  }
};
export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  await ConnectToDb();
  await Order.findByIdAndDelete(id);
  return NextResponse.json({ message: "Order deleted" }, { status: 200 });
};

export const POST = async (req) => {
  try {
    const { items, totalPrice, fullName, phoneNumber, wilaya, address } =
      await req.json();

    await ConnectToDb();
    const dbProductPrices = await Product.find(
      {
        _id: { $in: items.map((x) => x._id) },
      },
      "price"
    );
    // const dbProductQuantity=items.map(x=>({

    // }))
    const dbOrderItems = items.map((x) => ({
      ...x,
      product: x._id,

      price: dbProductPrices.find((x) => x._id === x._id).price,
      _id: undefined,
    }));

    const newOrder = new Order({
      items: dbOrderItems,
      fullName,
      phoneNumber,
      wilaya,
      address,
      totalPrice,
    });
    const createOrder = await newOrder.save();

    return new Response(JSON.stringify(createOrder), { status: 201 });
  } catch (err) {
    return new Response("Faild to create Order", { status: 500 });
  }
};
