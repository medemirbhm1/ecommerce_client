import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import getCategories from "@/actions/getCategories";
import NavActions from "./NavActions";

const Nav = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-semibold text-xl">MM</p>
          </Link>
          <MainNav data={categories} />
          <NavActions />
        </div>
      </Container>
    </div>
  );
};

export default Nav;
