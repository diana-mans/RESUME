import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import React from 'react';


class App extends React.Component {
  //Изначальное состояние приложения
  state = {
    name: '',
    receiptId: 0,
    price1:  0,
    price2: 0,
  };
  //Перехватывает то, что ввел пользователь и обновляет состояние приложения
  handleChange = ({target: { value, name }}) => this.setState({ [name]: value });

  //Создает и скачивает файл PDF
  createAndDownloadPdf = () => {
    //Axios.post отправляет запрос на сервер 
    //Первый параметр - url
    //Второй параметр - тело запроса (обычно объекты)
    axios.post('/create-pdf', this.state)
      //После выполнения запроса методом get выполяет еще один запрос на сервер
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }
  //Рендерит наш state
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
        <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
        <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
        <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;
