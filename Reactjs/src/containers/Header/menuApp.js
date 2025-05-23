// Menu for admin
export const adminMenu = [
  // Quản lý người dùng
  {
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.crud",
        link: "/system/user-manage",
      },
      {
        name: "menu.admin.crud-redux",
        link: "/system/user-redux",
      },
      {
        name: "menu.admin.manage-doctor",
        link: "/system/manage-doctor",
      },
      // {
      //   name: "menu.admin.manage-admin",
      //   link: "/system/user-admin",
      // },
      // Quản lý lịch làm việc của bác sĩ
      {
        name: "menu.doctor.manage-schedule",
        link: "/doctor/manage-schedule",
      },
    ],
  },

  // Quản lý phòng khám
  {
    name: "menu.admin.clinic",
    menus: [
      {
        name: "menu.admin.manage-clinic",
        link: "/system/manage-clinic",
      },
    ],
  },

  // Quản lý chuyên khoa
  {
    name: "menu.admin.specialty",
    menus: [
      {
        name: "menu.admin.manage-specialty",
        link: "/system/manage-specialty",
      },
    ],
  },

  // Quản lý cẩm nang
  {
    name: "menu.admin.handbook",
    menus: [
      {
        name: "menu.admin.manage-handbook",
        link: "/system/manage-handbook",
      },
    ],
  },
];

// Menu for doctor
export const doctorMenu = [
  {
    // Quản lý lịch làm việc của bác sĩ
    name: "menu.admin.manage-user",
    menus: [
      {
        // quản lý kế hoạch khám bệnh của bác sĩ
        name: "menu.doctor.manage-schedule",
        link: "/doctor/manage-schedule",
      },
      {
        // quản lý bệnh nhân khám bệnh của bác sĩ
        name: "menu.doctor.manage-patient",
        link: "/doctor/manage-patient",
      },
    ],
  },
];
