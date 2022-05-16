import { allAuthRoles } from "../utils";

import { CreateDepartmentPage, DEPARTMENT_ROUTES } from ".";

export const departmentMenu = [
  {
    collapse: true,
    name: "Departments",
    icon: "ni ni-single-02 text-primary",
    state: "departmentCollapse",
    path: "departmentMenu",
    key: "departmentMenu",
    allowedRoles: [...allAuthRoles],
    views: [
      {
        path: DEPARTMENT_CREATE,
        name: "Create Department",
        miniName: "CD",
        component: <CreateDepartmentPage />,
        layout: "/admin",
        key: "Departments/CreateDepartment",
        allowedRoles: [...allAuthRoles],
      },
    ],
  },
];
