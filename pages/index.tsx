import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Head from "next/head";
import { IProduct } from "../components/Product";

interface IIndexProps {
  products: IProduct[]
}
const Index = (props: IIndexProps) => {
  return (
    <div className="app">
    <Head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ZDk1NGE2ZDAtNjM1OC00OWUyLWEzYzItMDU2ODFmMThlMmI4NjM3MjgyNDYyMTUwNjc3NTgw" id="snipcart"></script>
<link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
 <link rel="shortcut icon" href="/static/PizzaSvg.png" />
</Head>
<Header />
<main className="main">
  <img src="/static/pizzaSvg.svg" alt="a" className="background-image" />
  <div className="promotional-message">
    <h3>Pizza delivery</h3>
    <h2>Hot Pizza</h2>
    <p>An <strong>exclusive hot pizza</strong> available for everyone.</p>
  </div>
  <ProductList products={props.products} />
  <Contact />
</main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_pep", name: "Peperoni", price: 9.50, image: "../static/Peperoni.jpeg", description: "Pepperoni is an American variety of salami, made from a cured mixture of pork and beef seasoned with paprika or other chili pepper. Pepperoni is characteristically soft, slightly smoky, and bright red in color. Thinly sliced pepperoni is a popular pizza topping in American pizzerias."} as IProduct,
      {id: "nextjs_oli", name: "Oliva", price: 11, image: "../static/Oliva.jpeg",description: "some description"} as IProduct,
      {id: "nextjs_vet", name: "Veterano", price: 9.50, image: "../static/Veterano.jpeg", description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."} as IProduct,
      {id: "nextjs_adr", name: "Adriano", price: 10.00, image: "../static/Adriano.jpeg", description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."} as IProduct,
    ]
  }
}

export default Index
