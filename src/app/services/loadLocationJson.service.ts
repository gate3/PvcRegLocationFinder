import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoadLocationJson {
  private _url= 'assets/states_lgas.json';
  private locations:Array<any> = []

  constructor(private _http: Http) {}

  getStates () {
    return this._http.get(this._url)
      .map((response: Response) => {
        this.locations = response.json()
        return this.locations.map(l=>l.state.name)
      });
  }

  getLgas (state:string) {
    return this.locations
                .filter(s=>s.state.name === state)
                .map(l=>l.state.locals)
  }
}