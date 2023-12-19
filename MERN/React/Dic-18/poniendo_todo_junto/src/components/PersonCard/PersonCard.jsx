

import { Component } from "react";
import styles from "./PersonCard.module.css";

import firework from "./assets/firework.gif";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        const { age } = this.props;
        this.state = {
            age: age,
            birthday: false,
        };
    }

    render() {
        const { firstname, lastname, hairColor, gender } = this.props;
        const handleBirthday = () => {
            console.log(this.state);
            this.setState({ age: this.state.age + 1 });
            this.setState({ birthday: true });

            setTimeout(() => {
                this.setState({ birthday: false });
            }, 5000)

        };

        return (
            <div className={`${styles.personCard} ${gender === "male" ? styles.maleCard : styles.femaleCard}`}>
                <h1>{lastname},{firstname}</h1>
                <p>Edad: {this.state.age}</p>
                <p>Color Cabello: {hairColor}</p>
                <button type="button" onClick={handleBirthday} >Cumpleaños {firstname} {lastname}</button>

                {
                    this.state.birthday &&
                    <img src={firework} alt="firework" />
                }

            </div>
        )
    }
}

export default PersonCard;