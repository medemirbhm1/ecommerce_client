import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/ProductList";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("4acc24ca-28c7-4e8a-9cba-46373a715453");
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
