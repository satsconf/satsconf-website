import BoxBeneficios from "@/components/(landingpage)/containers/boxbeneficios";
import BoxCronograma from "@/components/(landingpage)/containers/boxcronograma";
import BoxGarante from "@/components/(landingpage)/containers/boxgarante";
import BoxParceiros from "@/components/(landingpage)/containers/boxparceiros";
import BoxPatrocinadores from "@/components/(landingpage)/containers/boxpatrocinadores";
import BoxPrincipal from "@/components/(landingpage)/containers/boxprincipal";
import BoxSobre from "@/components/(landingpage)/containers/boxsobre";
import ConvidadosPaginaPrincipal from "@/components/(landingpage)/containers/convidadospaginaprincipal";
import FAQComponent from "@/components/(landingpage)/containers/faq";


const Home = () => {
  return (
    <div className="container">
      <BoxPrincipal />
      <BoxBeneficios />
      <BoxSobre />
      <ConvidadosPaginaPrincipal />
      <BoxGarante />
      <BoxCronograma />
      <BoxPatrocinadores />
      <BoxParceiros />
      <FAQComponent />
   
    </div>
  );
};

export default Home;
