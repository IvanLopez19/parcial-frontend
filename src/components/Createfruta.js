import React,{Component} from 'react';
import axios from 'axios';

export default class Navegacion extends Component{

    state={
        frutas:[],
        nombre:'',
        peso:'',
        color:'',
        arboles:'',
        calorias:''
    }
    async componentDidMount(){
        const res=await axios.get('http://localhost:4200/frutas');
        this.setState({
            frutas: res.data
        })
    }

    getfruta = async () => {
        const res = await axios.get('http://localhost:4200/frutas');
        this.setState({
            frutas: res.data
        });
    }

    onChangenombre = e => {
        this.setState({
            nombre: e.target.value
        })
    }

    onChangepeso = e => {
        this.setState({
            peso: e.target.value
        })
    }

    onChangecolor = e => {
        this.setState({
            color: e.target.value
        })
    }

    onChangearbol = e => {
        this.setState({
            arboles: e.target.value
        })
    }

    onChangecalorias = e => {
        this.setState({
            calorias: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4200/frutas', {
            nombre: this.state.nombre,
            peso: this.state.peso,
            color: this.state.color,
            arboles: this.state.arboles,
            calorias: this.state.calorias
        });
        this.setState({ nombre: ''} ,{ peso: ''},{ color: ''},{ calorias: ''},{ arboles: ''});
        this.getfruta();
    }

    deletefruta = async (frutaId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4200/frutas/' + frutaId);
            this.getfruta();
        }
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Ingresar nueva fruta</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.nombre}
                                    type="text"
                                    onChange={this.onChangenombre}
                                />
                                <input
                                    className="form-control"
                                    value={this.state.peso}
                                    type="text"
                                    onChange={this.onChangepeso}
                                />
                                <input
                                    className="form-control"
                                    value={this.state.color}
                                    type="text"
                                    onChange={this.onChangecolor}
                                />
                                <input
                                    className="form-control"
                                    value={this.state.calorias}
                                    type="text"
                                    onChange={this.onChangecalorias}
                                />
                                <input
                                    className="form-control"
                                    value={this.state.arboles}
                                    type="text"
                                    onChange={this.onChangearbol}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.frutas.map(fruta => (
                                <li className="list-group-item list-group-item-action" key={fruta._id} onDoubleClick={() => this.deletefruta(fruta._id)}>
                                    {fruta.nombre}<br/>
                                    {fruta.calorias}<br/>
                                    {fruta.arboles}<br/>
                                    {fruta.color}<br/>
                                    {fruta.peso}<br/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
