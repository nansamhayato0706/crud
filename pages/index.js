import axios from "axios";
import { Layout } from "@/components/Layout";
import { ProductCards } from "@/components/ProductCards";

export default function HomePage({ products }) {
  return (
    <Layout>
      {products.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: { products },
  };
};
