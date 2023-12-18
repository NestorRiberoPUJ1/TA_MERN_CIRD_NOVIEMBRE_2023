import { Component } from "react";
import styles from "./PersonCard.module.css";


class PersonCard extends Component {


    render() {

        const { firstName, lastName, age, hairColor } = this.props;

        return (
            <div className={styles.card}>
                <h1 className={styles.titulo}>{lastName},{firstName} </h1>
                <p>Edad: {age}</p>
                <p>Color de cabello: {hairColor}</p>
            </div>
        )
    }

}

export default PersonCard;