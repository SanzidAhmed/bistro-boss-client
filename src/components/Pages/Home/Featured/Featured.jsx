import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed my-10 ">
            <div className=" bg-slate-500 bg-opacity-25 pt-10">
                <SectionTitle
                    heading="Feature Item"
                    subHeading="Check it out"
                ></SectionTitle>
                <div className="md:flex justify-center items-center py-8 px-16 gap-10 ">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="space-y-6 py-10">
                        <p>July 10, 1997</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro totam cum reprehenderit aliquam quidem sunt eum fugit in incidunt iure, officia tempore aliquid praesentium impedit blanditiis, modi voluptatum doloribus alias ex facere quae quisquam. Neque ipsam quasi expedita hic eveniet at, totam provident omnis veniam saepe ab illum perferendis exercitationem?</p>
                        <button className="btn btn-outline text-green-500 hover:border-yellow-500  border-yellow-500 hover:bg-yellow-500 border-0 border-b-4">Order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;