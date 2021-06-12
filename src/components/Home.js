import { HomeStyle, HomeImg, Discription } from "../styles";
import'../Ani.css'
const Home = () => {
  return (
  //   <div >
  //     <HomeStyle>Jordan best hiking trails</HomeStyle>
  //     <Discription>
  //     Whether you wish to walk for one hour or a few days we have picked the top hiking trails in Jordan that offer something for everyone. There is truly nothing comparable to hiking in Jordan. Through desert treks to mountain climbs, Jordan is brimming with rewarding hikes. There are many routes across the country to suit all time lengths and fitness levels.
  //     </Discription>
  //             <HomeImg 
  //       src="https://theincredibleglobe.com/wp-content/uploads/2021/01/Highest-Rated-Trekking-Places-7.webp"
  //       alt="Hiking"
  //  />   
  //   </div>

<div >
  <section>
  <div className="container">
    <div className="background-img">
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="content">
        <HomeStyle>Jordan best hiking trails</HomeStyle>

               {/* <HomeImg 
         src=""
         alt="Hiking"
    />    */}
        </div>
        
      </div>
    </div>
  </div>
</section>  
<Discription>
  Whether you wish to walk for one hour or a few days we have picked the top hiking trails in Jordan that offer something for everyone. There is truly nothing comparable to hiking in Jordan. Through desert treks to mountain climbs, Jordan is brimming with rewarding hikes. There are many routes across the country to suit all time lengths and fitness levels.
       </Discription></div>
  );
};

export default Home;
