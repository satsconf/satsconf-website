import BoxBeneficios from "@/components/containers/boxbeneficios";
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
        </div>
    )
}

export default Home;