import BlogContainer from "@/components/containers/blog";
import BoxBeneficios from "@/components/containers/boxbeneficios";
import BoxCronograma from "@/components/containers/boxcronograma";

import BoxGarante from "@/components/containers/boxgarante";
import BoxParceiros from "@/components/containers/boxparceiros";
import BoxPatrocinadores from "@/components/containers/boxpatrocinadores";
import BoxPrincipal from "@/components/containers/boxprincial";
import BoxSobre from "@/components/containers/boxsobre";

const Home = () => {
    return (
        <div>
            <BoxPrincipal />
            <BoxBeneficios />
            <BoxSobre />
            <BoxGarante />
            <BoxCronograma />
            <BoxPatrocinadores />
            <BlogContainer />
            <BoxParceiros />

        </div>
    )
}

export default Home;