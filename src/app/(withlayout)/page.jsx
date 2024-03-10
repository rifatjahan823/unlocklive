import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import ChoseUs from '../../Components/ChoseUs/ChoseUs'
import ChoseMenu from '../../Components/ChoseMenu/ChoseMenu'
import Creation from '../../Components/Creation/Creation'
import Recipes from '../../Components/Recipes/Recipes'


const HomePage = () => {
    return (
        <div>
          <Hero/>
          <About/>
          <ChoseUs/>
          <ChoseMenu/>
          <Recipes/>
          <Creation/>
        </div>
    );
};

export default HomePage;