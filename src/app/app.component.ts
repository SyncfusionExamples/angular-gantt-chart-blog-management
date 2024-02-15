import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { blogData } from './datasource';
import { EditSettingsModel, LabelSettings } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    templateUrl:  `app.component.html`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: object;
    public editSettings?: EditSettingsModel;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public resourceFields: { id: string; name: string; unit: string; }| any;
    public labelSettings?: object;
    public splitterSettings?: object;
    public projectResources: Object[] = [
      { resourceId: 1, resourceName: 'Martin Tamer'},
      { resourceId: 2, resourceName: 'Rose Fuller' },
      { resourceId: 3, resourceName: 'Margaret Buchanan' },
      { resourceId: 4, resourceName: 'Fuller King'},
      { resourceId: 5, resourceName: 'Davolio Fuller' },
      { resourceId: 6, resourceName: 'Van Jack' },
  ];
    public ngOnInit(): void {
        this.data =  blogData;
        this.projectStartDate = new Date('03/31/2024');
        this.labelSettings = {rightLabel: 'resources'};
        this.splitterSettings = { columnIndex: 3 };
        this.projectEndDate= new Date('05/05/2024');
        this.resourceFields = {
          id: 'resourceId',
          name: 'resourceName'
        };
        this.taskSettings = {
          id: 'TaskID',
          name: 'BlogName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          dependency: 'Predecessor',
          child: 'subtasks',
          resourceInfo: 'resources'
        };
        this.editSettings = {
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
          allowTaskbarEditing: true,
          showDeleteConfirmDialog: true,
        };
        this.toolbar = [
          'Add',
          'Edit',
          'Update',
          'Delete',
          'Cancel',
          'ExpandAll',
          'CollapseAll',
        ];
    }
}