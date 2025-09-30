export const menuList = [
  {
    id: 1,
    path: '/schools',
    label: 'Schools',
    dropDownMenu: false,
  },
  {
    id: 2,
    path: '#',
    label: 'What We Offer',
    dropDownMenu: [
      {
        id: 1,
        path: '/overview',
        label: 'Overview',
      },
      {
        id: 2,
        path: '/supplemental-transportation',
        label: 'Supportive Student Transportation',
      },
      {
        id: 3,
        path: '/safety',
        label: 'Safety',
      },
    ],
  },
  {
    id: 3,
    path: '/apply-to-drive',
    label: 'Apply To Drive',
    dropDownMenu: false,
  },
];
