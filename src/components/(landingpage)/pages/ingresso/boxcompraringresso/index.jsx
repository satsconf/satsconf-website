const BoxComprarIngresso = () => {
  return (
    <div id="bgBoxComprarIngresso ">
      <div className="BoxIngresso">
        <button type="" className="btnIngressoPrimary"></button>
        <button type="" className="btnIngressoSecondary"></button>
        <div className="formPagamento">
          <form id="formBtnIngresso-btc">
            <label htmlFor="valor-btc">Valor em BTC:</label>
            <input type="number" id="valor-btc" />
            <button type="submit">Enviar</button>
          </form>
          <form id="formBtnIngresso-rs">
            <label htmlFor="valor-rs">Valor em R$</label>
            <input type="number" id="valor-btc" />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="containerBgcomprar">
            
        </div>
      </div>
    </div>
  );
};

export default BoxComprarIngresso;
