import React from 'react'
import styles from './FormDelivery.module.css'

class FormDelivery extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            form: {
                checkReact: false,
                checkVue: false,
                checkAngular: false,
                stickerQuantity: 1,
                notes: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(event) {
        if (this.state.form.stickerQuantity < 100) {
            const form = { ...this.state.form, stickerQuantity: this.state.form.stickerQuantity + 1 };
            this.setState({ form });
        }
    }

    decrement(event) {
        if (this.state.form.stickerQuantity > 0) {
            const form = { ...this.state.form, stickerQuantity: this.state.form.stickerQuantity - 1 };
            this.setState({ form });
        }
    }

    handleChange(event) {
        this.setState({ form: event.target.value });
    }

    handleSubmit(event) {
        alert(`Pedido enviado com sucesso!
        React: ${this.state.form.stickerQuantity} adesivos
        Vue: ${this.state.form.stickerQuantity} adesivos
        Angular: ${this.state.form.stickerQuantity} adesivos
        
        Observações: ${this.state.form.notes}`);
        event.preventDefault();
    }



    render() {



        return (
            <div className="container mt-3 mb-3 w-50">
                <div className={styles.divHeader}>
                    <div className={styles.headerLeft}>
                        <p>Formulário</p>
                        <p>para compra de</p>
                        <p><strong>Pacote de adesivos</strong></p>
                    </div>
                </div>

                <form className={styles.form} onSubmit={this.handleSubmit}>
                    {/* opção de adesivos */}
                    <span className={styles.title}>Quais adesivos:</span>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkReact" value={this.state.form.checkReact} />
                        <label className="form-check-label" htmlFor="checkReact">React</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkVue" value={this.state.form.checkVue} />
                        <label class="form-check-label" htmlFor="checkVue">Vue</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkAngular" value={this.state.form.checkAngular} />
                        <label className="form-check-label" htmlFor="checkAngular">Angular</label>
                    </div>

                    {/* Contador de adesivos */}
                    <span className={styles.title}>Quantos adesivos de cada?</span>
                    <div className="form-group">
                        <button id="less" className={styles.inputNumberDecrement} type="button" onClick={this.decrement}>-</button>
                        <input type="text" id="valueInput" className={styles.inputNumber} value={this.state.form.stickerQuantity} />
                        <button id="plus" className={styles.inputNumberIncrement} type="button" onClick={this.increment}>+</button>
                    </div>

                    {/* Observações */}
                    <span className={styles.title}>Observações:</span>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows='8'
                            value={this.state.form.notes}></textarea>
                        <label htmlFor="floatingTextarea">Alguma dúvida? Recado?</label>
                    </div>

                    <div className={styles.divFooter}>
                        <div className={styles.btnfooter}>
                            <button type="submit" className={styles.buttonFooter} onChange={this.handleChange}>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}


export default FormDelivery;