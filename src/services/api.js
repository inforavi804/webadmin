import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, catchError, delay } from 'rxjs/operators';
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

    /**
     * Method to send data to the corresponding API
     * @param {*} url 
     * @param {*} reqBody 
     * @param {*} optionalHeaders 
     */
    postDataToAPI(url, reqBody, optionalHeaders) {
        this.resetOptionalHeaders();
        this.setOptionalHeaders(optionalHeaders);

        return ajax({
            url: GlobalConstant.API_URL + url,
            method: 'POST',
            headers: this.defaultHeaders,
            body: reqBody
        }).pipe(
            delay(2000),
            map(response => response),
            catchError(error => {
                console.log('+---------- Error: ', error);
                return of(error);
            })
        );
    }
    
    /**
     * Method to set optional headers
     */
    setOptionalHeaders(optionalHeaders) {
        if (typeof optionalHeaders === 'object'){
            Object.assign(this.defaultHeaders, optionalHeaders);
        }
    }
    
    /**
     * Resetting here optional headers
     */
    resetOptionalHeaders() {
        var allKeys = Object.keys(this.defaultHeaders);
        for (var key in allKeys) {
            if (["Content-Type", "Cache-Control", "Pragma"].indexOf(allKeys[key]) === -1) {
                delete this.defaultHeaders[allKeys[key]];
            }
        }
    }
}
