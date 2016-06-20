import { RouterConfig }	from '@angular/router';
import { BrothersComponent } from './brothers.component';
import { BrotherListComponent } from './brother-list/brother-list.component';
import { BrotherDetailComponent } from './brother-detail/brother-detail.component';

export const BrotherRoutes: RouterConfig = [
  {
    path: '/brothers',
    component: BrothersComponent,
    children: [
      { path: '/',    component: BrotherListComponent, index: true },
      { path: '/:id', component: BrotherDetailComponent, }
    ]
  }
];