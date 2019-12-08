import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import GlobalConstant from '../config/config';

export class DataService{

    constructor() {
        this.defaultHeader = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          };
    }

    /**
     * Method to fetch API data
     */
    getApiResponseData(){
        return  ajax(GlobalConstant.API_URL + GlobalConstant.PORTFOLIO).pipe(map(resObj => resObj),
                catchError(error => {
                    console.log('+----------------- Error: ', error);
                    return of(error);
                })
            );
    }

    /**
     * Method to fetch API data in JSON object
     */
    getApiResponseAsJson(){
        //var apiUrl = 'http://localhost:3001/portfolioItems';
        return  fromFetch(GlobalConstant.API_URL + GlobalConstant.PORTFOLIO)
                .pipe(switchMap(resObj => {
                    if (resObj.ok) {
                        return resObj.json();
                    }
                    else {
                        return of({ error: true, message: `Error ${resObj.status}` });
                    }
                }),
                catchError(error => {
                    console.log('+----------------- Error: ', error);
                    return of(error);
                })
        );
    }

    getApiResponseAsJsonExample(){

        console.log('+----------------- Portfolio JSON Data : ', GlobalConstant.API_URL + GlobalConstant.PORTFOLIO);
        //return PortfolioData;
    }





    // fetchSubscription = Rx.Observable.from(fetch('http://swapi.co/api/people/1'))
    //     .flatMap((res) => Rx.Observable.from(res.json()) )
    //     .subscribe((fetchRes) => {
    //         console.log('fetch sub', fetchRes);
    //     });
}
