import BoxBeneficios from "@/components/containers/boxbeneficios";
import BoxCronograma from "@/components/containers/boxcronograma";

import BoxGarante from "@/components/containers/boxgarante";
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
        </div>
    )
}

export default Home;