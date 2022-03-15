export const Article = (props) => {

    /* console.log(props.data.id);
    console.log(props.data.text); */
    const {titre, description} = props.data
    return <div className="col">
        <h3>{titre}</h3>
        <br/>
        <p>{description}</p>
    </div>
}