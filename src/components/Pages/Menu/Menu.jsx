import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import bgImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Our menu || Bistro Boss</title>
            </Helmet>
            <Cover img={bgImg} title={"Our Menu"} subtitle={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHeading="Don't miss" heading="Todays offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title={"dessert"} route={"dessert"} img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} route={"pizza"}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg} route={"soup"}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg} route={"salad"}></MenuCategory>
            
        </div>
    );
};

export default Menu;