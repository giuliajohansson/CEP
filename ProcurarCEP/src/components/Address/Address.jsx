export default function Address({street, district, city, state}) {
    return (
        <div className="Address">
            <h3>Endereço</h3>
            <b>Rua: </b>{street} <br/>
            <b>Bairro: </b>{district} <br/>
            <b>Cidade: </b>{city} <br/>
            <b>Estado: </b> {state}
        </div>
    )
}