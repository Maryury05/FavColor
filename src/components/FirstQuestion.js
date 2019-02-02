import React, { Component } from 'react';
import SecondQuestion from './SecondQuestion';

class FirstQuestion extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    }
  }

  valideSeason() {
    var selected = document.allseason.season.value;
    if (selected === 'otoño') {
      console.log('Te gusta el otoño');
    } else if (selected === 'verano') {
      console.log('Te gusta el verano');
    } else if (selected === 'primavera') {
      console.log('Te gusta el primavera');
    } else if (selected === 'invierno') {
      console.log('Te gusta el invierno');
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <div tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5>¿Qué Temporada te gusta más?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form name="allseason">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="season" value="otoño" onClick={this.valideSeason}/>
                    <label className="form-check-label" htmlFor="otoño">
                      Otoño
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="season" value="invierno" onClick={this.valideSeason}/>
                    <label className="form-check-label" htmlFor="invierno">
                      Invierno
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="season" id="primavera" value="primavera" onClick={this.valideSeason}/>
                    <label className="form-check-label" htmlFor="primavera">
                      Primavera
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="season" id="verano" value="verano" onClick={this.valideSeason}/>
                    <label className="form-check-label" htmlFor="verano">
                      Verano
                    </label>
                  </div>
                </form>
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {!this.state.isHidden && <SecondQuestion />}
      </div>
    );
  }
}

export default FirstQuestion;
