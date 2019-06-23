import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

/**
 * 注入一个类时,需要用@Injectable标注
 * 并在module文件provide
 */
@Injectable({
  providedIn: 'root'
})
export class FishHttpService {
  public server;
  public http;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.server = ' https://guoyuxiang.cn/';
  }

  public get(url, type: string, params?: object, callBack?: (res) => void) {
    let httpParams = new HttpParams();
    for (const key of Object.keys(params)) {
      httpParams = httpParams.set(key, params[key]);
    }
    this.http.get(this.server + url, {params: httpParams, responseType: type})
      .subscribe(res => {
        callBack(res);
      });
  }

  public post(url, data?: object, callBack?: (res) => void, options?: object) {
    this.http.post(this.server + url, data, options)
      .subscribe(res => {
        callBack(res);
      });
  }

  public put(url, data?: object, callBack?: (res) => void, options?: object) {
    this.http.put(this.server + url, data, options)
      .subscribe(res => {
        callBack(res);
      });
  }

  public delete(url, params?: object, callBack?: (res) => void) {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    this.http.delete(this.server + url, {params: httpParams})
      .subscribe(res => {
        callBack(res);
      });
  }
}
