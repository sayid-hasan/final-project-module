import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import ourShop from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div>
        <Cover
          image={ourShop}
          title={`OUR SHOP`}
          subtitle={`Would you like to try a dish?`}
          mainmenu={true}
          height={"700px"}
        ></Cover>
      </div>
      <div className="mt-28">
        {" "}
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
          }}
        >
          <TabList
            style={{
              border: "0",
              fontSize: "24px",
              font: "Inter",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            <Tab
              style={{
                border: 0,
              }}
            >
              Title 1
            </Tab>
            <Tab
              style={{
                border: 0,
              }}
            >
              Title 2
            </Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
