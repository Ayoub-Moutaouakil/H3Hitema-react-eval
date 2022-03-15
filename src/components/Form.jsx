import {useState} from "react"

export const Form = (props) => {
    const [form, setForm] = useState({titre : "" , description : ""})
    const [visibility, setVisibility] = useState(false);

    function handleChange(e){
        // récupérer la valeur saisie en fonction du champ 
        console.log(e.target.name); 
        console.log(e.target.value); 
        const { name , value } = e.target ;
        // exécuter un setForm => mise à jour du state => relancer un render 
        setForm({...form , [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault(); //  bloquer le rechargement de page 
        const {titre, description} = form ;
        if(titre.length > 0 && description.length > 0){
            props.setData((prevData) => {
                prevData.articles.push({titre : titre, description : description})
                //console.log( { ...prevData , articles : prevData.articles  })
                return { ...prevData , articles : prevData.articles  }
            })
            setForm({titre : "" , article : ""}) // vider le formulaire
        }else {
            alert("veuillez compléter les deux champs ")
        }
    }

    function handleVisibility(){
        setVisibility(!visibility);
    }

    return <div className="col-10">
        <button onClick={handleVisibility}>Cacher ou afficher le formulaire</button>

        { visibility ?
        <div className="col-10">
            <h2>Formulaire de contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="titre" value={form.titre} onChange={handleChange} />
                <textarea  id="" cols="30" rows="10"  className="form-control my-3" name="description" onChange={handleChange} value={form.description}></textarea>
                <input type="submit" className="btn btn-outline-dark" />
            </form>
        </div>

        :

        <h1>Pas de formulaire</h1>

        }
    </div>
}

// récupérer les valeurs saisies dans le formulaire 
// 1 state qui permet de stocker les valeurs dans le formulaire 
// 2 modifier le html input / textarea 
//    - name 
//    - onChange 
//    - value 
// 3 value={state.nom}
// 4 onChange={fonction}
// 5 submit  
