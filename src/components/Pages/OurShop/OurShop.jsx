import Cover from "../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OurShop = () => {

    const categories = ['popular','pizza', 'dessert', 'soup', 'salad', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    
    const popular = menu.filter(item => item.category === 'popular');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Our shop || Bistro Boss</title>
            </Helmet>
            <Cover img={coverImg} title={"Our Shop"} subtitle={"Would you like to try a dish?"}></Cover>
            <div className="my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="flex justify-center mb-4">
                        <TabList className="tabs gap-4">
                            <Tab className="tab-bordered border-yellow-400">Popular menu</Tab>
                            <Tab className="tab-bordered border-yellow-400">Pizza</Tab>
                            <Tab className="tab-bordered border-yellow-400">Desert</Tab>
                            <Tab className="tab-bordered border-yellow-400">Soup</Tab>
                            <Tab className="tab-bordered border-yellow-400">Salad</Tab>
                            <Tab className="tab-bordered border-yellow-400">Drinks</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OrderTab items={popular}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;