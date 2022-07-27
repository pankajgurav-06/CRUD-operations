import {
  HttpClient,
  HttpErrorResponse,
  // HttpErrorResponse,
  // HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const token = `eyJraWQiOiJna09LR0ptTVNIcWRUYWVTbW42aTFyMzQ0SmVSekdGd0JYckJLSU1sbW1JPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhN2JmOGRjMi02YWVmLTQyZTEtYmJlMS1jZmJmNDAxNDE2NGEiLCJjb2duaXRvOmdyb3VwcyI6WyJDYW5kaWRhdGUiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImJpcnRoZGF0ZSI6IjEyLTA1LTIwMjIiLCJwcm9maWxlIjoicHJvZmlsZVwvbXJIYW5rZXkuanBnIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfY0s4a1M5dndSIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImE3YmY4ZGMyLTZhZWYtNDJlMS1iYmUxLWNmYmY0MDE0MTY0YSIsImdpdmVuX25hbWUiOiJQYXZhbiIsIm9yaWdpbl9qdGkiOiIyYmNjMDA4NS00NDY3LTRmYmEtYWM2OS01NmY4YTU0MjRkZjAiLCJhdWQiOiI0M3F0OWpqYnFhNXZ2bmQ2NW1kZWlvb21pYiIsImV2ZW50X2lkIjoiMzk1ZDJiZDktNDcyZi00MjU5LWIyNjYtZDRhYjEzMWM2M2YyIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTM1NDgxODIsInBob25lX251bWJlciI6Iis5MTg4NzY3NDU2ODkiLCJleHAiOjE2NTM2MzQ1ODIsImlhdCI6MTY1MzU0ODE4MiwiZmFtaWx5X25hbWUiOiJobCIsImp0aSI6IjA5ZWU4NDhlLTdkYjgtNDAzYS1iM2MwLTgwYmM5YjlhYjdhMSIsImVtYWlsIjoidGVzdHVzZXI5NkBtYWlsaW5hdG9yLmNvbSJ9.gF0DuF3TfvejvWWzWSXGGEVWAIzyHOsqEnhtb98xtOfPcb_s4GiPly90q9OS77Q-pOPGZE7Z-Inlyj4SvNuTFtwS6hYxFUFxR3pu9yp7bWTCDdAUfS1BYXZcP1wWkb51iLQBpzkgQuF5daguKsVH4Wt8BQhJawbPaCa4yF_Y-8RSNU9GzS-Tv1W6kESkjWAIRyqv2bZ84-CbRFnrYjff2WB4YwBmRDuVExBN86krJm8-kvypJ5EOcn3sNK7kQ7aKAZqbgW22mQJTHPgVu-s30_SQNabakAtcv3xw8DYPzD5denCfWMTmEJkCbTozE5_adcYlaIEIlSHGy1KsF1Fe5A`
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${token}`
  })
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postNote(data: any) :Observable<any[]> {
    return this.http.post<any>('https://credentiauatapi.examroom.ai/client/api/form/AddNote',data, httpOptions );
  }


  getNote(): Observable<any[]> {
    return this.http.get<any>('https://credentiauatapi.examroom.ai/client/api/form/getnotes?noteTypeId=5&candidateId=5');
  }

  putNote(data: any, id: number) {
    return this.http.put<any>(
      'https://credentiauatapi.examroom.ai/client/api/form/updatenote' + id,
      data
    );
  }

  deleteNote(id: number) {
    return this.http.delete<any>( 
      `https://credentiauatapi.examroom.ai/client/api/form/deletenote?personFormNoteId=${id}` , httpOptions);
  }
  

}
