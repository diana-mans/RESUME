import styles from './App.scss';
import axios from 'axios';
import { saveAs } from 'file-saver';
import React from 'react';

class App extends React.Component {
  //Изначальное состояние приложения
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  };
  //Перехватывает то, что ввел пользователь и обновляет состояние приложения
  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  //Создает и скачивает файл PDF
  createAndDownloadPdf = () => {
    //Axios.post отправляет запрос на сервер
    //Первый параметр - url
    //Второй параметр - тело запроса (обычно объекты)
    axios
      .post('/create-pdf', this.state)
      //После выполнения запроса методом get выполяет еще один запрос на сервер
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      });
  };
  //Рендерит наш state
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Customer name" name="name" onChange={this.handleChange} />
        <br />
        <input
          type="number"
          placeholder="Receipt ID"
          name="receiptId"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="First item price"
          name="price1"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Second item price"
          name="price2"
          onChange={this.handleChange}
        />
        <br />
        <button className="btn btn-success" onClick={this.createAndDownloadPdf}>
          Download PDF
        </button>
      </div>
    );
  }
}

export default App;
