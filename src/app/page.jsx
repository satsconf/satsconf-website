
import BoxBeneficios from "@/components/(landingpage)/containers/boxbeneficios";

import BoxCronograma from "@/components/(landingpage)/containers/boxcronograma";

import BoxGarante from "@/components/(landingpage)/containers/boxgarante";
import BoxParceiros from "@/components/(landingpage)/containers/boxparceiros";
import BoxPatrocinadores from "@/components/(landingpage)/containers/boxpatrocinadores";
import BoxPrincipal from "@/components/(landingpage)/containers/boxprincial";
import BoxSobre from "@/components/(landingpage)/containers/boxsobre";


const Home = () => {
    return (
        <div>
            <BoxPrincipal />
            <BoxBeneficios />
            <BoxSobre />
            <BoxGarante />
            <BoxCronograma />
            <BoxPatrocinadores />
            <BoxParceiros />
        </div>
    )
}

export default Home;