import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
            <div className="text-gray-500 max-w-1xl mx-auto mt-4 flex flex-col gap-4 mb-3 text-center">
              <p>
                Welcome to <span className="text-primary font-semibold"><span className="text-black">gigis </span>pizza</span>, where passion for pizza meets a commitment to quality and flavor. 
                Nestled in the heart of <span className="text-primary font-bold">Coorg</span>, our pizzeria is a culinary heaven for pizza enthusiasts and food lovers 
                alike. <br/>With a rich heritage rooted in traditional Italian recipes and a dash of innovation,
                <br/>we craft each pizza with the finest, freshest ingredients.
              </p>
               <p>
                  We believe in the power of a perfectly baked crust, the allure of premium cheeses, and the harmony 
                  of handpicked toppings. Our skilled chefs bring years of experience to the kitchen, ensuring that every pizza is a
                  masterpiece of taste and texture.
               </p>
               <p>
               Thank you for choosing <span className="text-primary font-semibold"><span className="text-black">gigis </span> pizza</span> as your go-to destination for pizzas.
                We look forward to serving you and creating moments of joy around our tables. 
               </p>
            </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+918197548696">
            +91 8197548696
          </a>
        </div>
      </section>
    </>
  )
}
