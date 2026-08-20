import Logo from "../../assets/Images/Logo_GeoLucas.png";

export function Cabecalho() {
    return (
        <header>
            <section>
                <img src={Logo} alt="Calculadora com óculos e números." />
                <h1>GeoLucas</h1>
            </section>
        </header>
    );
}