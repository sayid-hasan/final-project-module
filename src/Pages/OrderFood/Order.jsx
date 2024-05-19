import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import ourShop from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/UseMenu";

import OrderTab from "./OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <div className="">
        <Cover
          image={ourShop}
          title={`OUR SHOP`}
          subtitle={`Would you like to try a dish?`}
          mainmenu={true}
          height={"700px"}
        ></Cover>
      </div>
      <div className="my-28">
        {" "}
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
          }}
        >
          <TabList
            style={{
              textAlign: "center",
              marginBottom: "48px",
              border: 0,
              fontSize: "24px",
              font: "Inter",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            <Tab id="controlled-tabs" selectedClassName="text-[#BB8506]   ">
              Salad
            </Tab>
            <Tab id="controlled-tabs" selectedClassName="text-[#BB8506]  ">
              pizza
            </Tab>
            <Tab id="controlled-tabs" selectedClassName="text-[#BB8506]  ">
              soups
            </Tab>
            <Tab id="controlled-tabs" selectedClassName="text-[#BB8506]  ">
              desserts
            </Tab>
            <Tab id="controlled-tabs" selectedClassName="text-[#BB8506]  ">
              drinks
            </Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
