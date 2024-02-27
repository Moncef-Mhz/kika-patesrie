"use client";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orderModal, setOrderModal] = useState();
  const [size, setSize] = useState("xl");

  const fetchOrders = async () => {
    const res = await fetch("/api/Orders");
    const data = await res.json();

    setOrders(data);
  };
  // console.log(orders);
  useEffect(() => {
    fetchOrders();
  }, []);

  const showModal = (item) => {
    setOrderModal(item);
    onOpen();
  };

  const handleRemove = async (id) => {
    const confirm = window.confirm("are you sure?");
    console.log("remove");
    if (confirm) {
      const res = await fetch(`/api/Orders?id=${id}`, { method: "DELETE" });
      setOrders(orders.filter((item) => item._id !== id));
    }
  };

  return (
    <div className="p-7">
      <h1 className="text-lg font-medium text-background border-b border-background/25 px-4 py-2">
        Orders
      </h1>
      <div className="flex flex-col items-start gap-4 mt-2">
        {orders?.map((item) => (
          <React.Fragment key={item._id}>
            <div
              onClick={() => console.log(item.wilaya)}
              className="w-full flex h-full  justify-between  bg-slate-50 p-2 rounded"
            >
              <div className="flex flex-col h-full">
                <h1>
                  <span className="font-bold">Nom:</span> {item.fullName}
                </h1>
                <h1>
                  <span className="font-bold">Telephone:</span>{" "}
                  {item.phoneNumber}
                </h1>
                <h1>
                  <span className="font-bold">Wilaya:</span> {item.wilaya}
                </h1>
                <h1>
                  <span className="font-bold">Adress:</span> {item.address}
                </h1>
              </div>
              <div className=" flex  flex-col items-center justify-between">
                <div
                  className="cursor-pointer "
                  onClick={() => showModal(item)}
                >
                  <BsThreeDots size={18} />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
        <Modal
          radius="sm"
          scrollBehavior="inside"
          size={size}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Order Info
                </ModalHeader>
                <ModalBody>
                  {orderModal?.items?.map((product) => (
                    <div key={product._id} className="flex items-center gap-4">
                      <img
                        className="object-cover rounded-md w-[100px] h-[100px]"
                        alt={product.name}
                        src={`https://app.requestly.io/delay/500/${product.image}`}
                      />
                      <div>
                        <h1 className="">
                          <span className="font-bold">Name: </span>
                          {product.name}
                        </h1>
                        <h1 className="">
                          <span className="font-bold">Qty: </span>
                          {product.quantity}
                        </h1>
                        <h1 className="">
                          <span className="font-bold">TotalPrice: </span>
                          {product.price * product.quantity} DA
                        </h1>
                      </div>
                    </div>
                  ))}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="danger" onPress={() => handleRemove(item._id)}>
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default OrderPage;
