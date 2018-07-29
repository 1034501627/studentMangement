import { NgModule } from '@angular/core';

import { StudentMangementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StudentMangementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StudentMangementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StudentMangementSharedCommonModule {}
