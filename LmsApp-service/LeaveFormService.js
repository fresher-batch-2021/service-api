class LeaveFormService{

    /*
    this function return all Leave Application
    */
    async getAllLeaveApplications(){
        leaveForms = [
            {
              name: "Renis",
              employeeId: "2855",
              team: "smart App",
              leaveDays: "08/08/2021",
              leaveType: "Sick Leave",
              reason: "Fever",
            },
            {
              name: "Casio",
              employeeId: "1448",
              team: "DataZap",
              leaveDays: "11/08/2021",
              leaveType: "Casual Leave",
              reason: "Function",
            },
          ];
          return leaveForms;
    }
}