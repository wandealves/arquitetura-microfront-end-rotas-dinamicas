
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { map, Observable } from 'rxjs';

import { loadRemoteModule } from '@angular-architects/module-federation';

@Injectable({ providedIn: 'root' })
export class RouteLoaderService {
  private http = inject(HttpClient);

loadRoutes(): Observable<Routes> {
  return this.http.get<any[]>('http://localhost:3000/routes.json').pipe(
    map((routes) =>{
      return routes.map(route =>({
        path: route.path,
        loadComponent: () =>
          loadRemoteModule({
            type: route.type,
            remoteEntry: route.remoteEntry,
            exposedModule: route.exposedModule,
          }).then((m) => m.AppComponent),
      }));
    }
    )
  );
}
}
