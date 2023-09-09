import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/ProductList";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c2aeceb3-d18c-4dd5-9e10-833b59b9652e");
  return (
    <div>
      <Container>
        <div className="space-y-1O pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
