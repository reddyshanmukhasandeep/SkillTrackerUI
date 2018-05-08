import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { UrlProviderService } from './url-provider.service'
import { Observable } from 'rxjs/Observable';
import { Associate } from '../models/associate';

@Injectable()
export class AssociateService {

  private associateUrl: string
  constructor(private http: HttpClient, private urlproviderService: UrlProviderService) {
    this.associateUrl = urlproviderService.getCompleteURL("associate/");
  }

  getAssociates(): Observable<Associate[]> {

    return this.http.get<Associate[]>(this.associateUrl);
  }
  postAssociate(associate): Observable<Associate> {
    return this.http.post<Associate>(this.associateUrl, associate);
  }
  deleteAssociate(id) {
    return this.http.delete(this.associateUrl+id)
  }
  getAssociateByName(name): Observable<Associate[]> {
    const uri: string = this.associateUrl + "searchByName";
    let params = new HttpParams();
    params = params.append('name', name);
    return this.http.get<Associate[]>(uri, { params: params });
  }

  getAssociateByMobile(mobile): Observable<Associate[]> {
    const uri: string = this.associateUrl + "searchByMobile";
    let params = new HttpParams();
    params = params.append('mobile', mobile);
    return this.http.get<Associate[]>(uri, { params: params });
  }
  getAssociateByEmail(email): Observable<Associate[]> {
    const uri: string = this.associateUrl + "searchByEmail";
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.get<Associate[]>(uri, { params: params });
  }
  putAssociate(associate): Observable<Associate> {
    return this.http.put<Associate>(this.associateUrl, associate);

  }
  getAssociateById(id): Observable<Associate> {
    return this.http.get<Associate>(this.associateUrl+id);

  }
}