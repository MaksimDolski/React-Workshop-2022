import { allAuthRoles } from "../utils";

import { CreateDepartmentPage } from ".";

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
        path: "/departments/department-create",
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
