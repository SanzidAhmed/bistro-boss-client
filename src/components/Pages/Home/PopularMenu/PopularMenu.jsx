
// import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import bannerImg from '../../../../assets/home/banner.jpg'


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section>
            {/* <SectionTitle
            subHeading={"From our menu"}
            heading={"Popular Items"} 
            ></SectionTitle>
            <div className="grid gap-10 md:grid-cols-2 my-10">
                {
                    popular.map(item => <MenuItems
                    key={item._id}
                    item = {item}
                    ></MenuItems>)
                }
            </div> */}

            <MenuCategory title="Bistro Boss" img={bannerImg} heading={"Popular Menu"} subHeading="Check it out" items={popular} route={"popular"} subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></MenuCategory>
        </section>
    );
};

export default PopularMenu;