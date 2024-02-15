/**
 * Gantt DataSource
 */
export let blogData: Object[] = [
    {
      TaskID: 1,
      BlogName: 'Gantt Blogs',
      StartDate: new Date('04/02/2024'),
      EndDate: new Date('05/10/2024'),
      subtasks: [
        {
          TaskID: 2,
          BlogName:
            'Using Microsoft Project Files with Syncfusion JavaScript Gantt Chart',
          StartDate: new Date('04/02/2024'),
          EndDate: new Date('04/10/2024'),
          Progress: 100,
          resources:[1]
        },
        {
          TaskID: 3,
          BlogName: 'Solution to handling Large Data set in Blazor Gantt Chart',
          StartDate: new Date('04/08/2024'),
          EndDate: new Date('04/23/2024'),
          Progress: 55,
          resources:[2]
        },
        {
          TaskID: 4,
          BlogName:
            'Using JavaScript Gantt Chart in SharePoint Web Parts for Effective Project Management',
          StartDate: new Date('04/24/2024'),
          EndDate: new Date('05/10/2024'),
          subtasks: [
            {
              TaskID: 5,
              BlogName:
                'Using JavaScript Gantt Chart in SharePoint Web Parts for Effective Project Management: Part 1',
              StartDate: new Date('04/24/2024'),
              EndDate: new Date('05/05/2024'),
              Progress: 90,
              resources:[3]
            },
            {
              TaskID: 6,
              BlogName:
                'Using JavaScript Gantt Chart in SharePoint Web Parts for Effective Project Management: Part 2',
              StartDate: new Date('05/06/2024'),
              EndDate: new Date('05/10/2024'),
              Predecessor: '5FS',
              Progress: 53,
              resources:[4]
            },
          ],
        },
      ],
    },
    {
      TaskID: 7,
      BlogName: 'Grid Blogs',
      StartDate: new Date('04/02/2024'),
      EndDate: new Date('04/26/2024'),
      subtasks: [
        {
          TaskID: 8,
          BlogName:
            'Perform CRUD Operations in a React Data Grid Using Redux: A Complete Guide',
          StartDate: new Date('04/03/2024'),
          EndDate: new Date('04/09/2024'),
          Progress: 65,
          resources:[5]
        },
        {
          TaskID: 9,
          BlogName:
            'Empowering Mobile Users with Syncfusion React Data Grid’s Adaptive UI Layout',
          StartDate: new Date('04/10/2024'),
          EndDate: new Date('04/16/2024'),
          Progress: 70,
          resources:[6]
        },
        {
          TaskID: 10,
          BlogName: 'Tree Grid vs. Data Grid: Which One Should You Choose',
          StartDate: new Date('04/16/2024'),
          EndDate: new Date('04/26/2024'),
          Progress: 45,
          resources:[2]
        },
      ],
    },
  ];
  