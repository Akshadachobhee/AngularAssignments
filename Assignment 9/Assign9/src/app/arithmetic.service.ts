import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor()
   {
     function Add(Val1:number,Val2:number)
     {
      var iRet = 0
      iRet = Val1+Val2
      return iRet
     }
     function Sub(Val1:number,Val2:number)
     {
      var iRet = 0
      iRet = Val1-Val2
      return iRet
     }
    return 0
   }
}
