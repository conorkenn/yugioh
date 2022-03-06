import React from 'react';
import './styles/App.css';
import YugiohCard from './components/YugiohCard';


class App extends React.Component<any, any>{
  constructor(props: any){
    super(props)
    this.state={
      cards: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((res) => res.json())
      .then((json) =>{
        this.setState({
          cards: json,
          DataIsLoaded: true
        });
      })
  }

  render() {
    const {DataisLoaded, cards} = this.state;
    return(
      <div className='container'>
        <main className='main'>
          <div className="cardLayout">
              <YugiohCard name='Blue Eyes Ultimate Dragon' img='https://ms.yugipedia.com//8/87/BlueEyesUltimateDragon-LDS2-EN-UR-1E.png' atk='4500' def='3800'/>
              <YugiohCard name='Blue Eyes Ultimate Dragon' img='https://ms.yugipedia.com//8/87/BlueEyesUltimateDragon-LDS2-EN-UR-1E.png' atk='4500' def='3800'/>
              <YugiohCard name='Blue Eyes Ultimate Dragon' img='https://ms.yugipedia.com//8/87/BlueEyesUltimateDragon-LDS2-EN-UR-1E.png' atk='4500' def='3800'/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
