export default function createReportObject(employeesList) {
  const all = {
    allEmployees: employeesList,
    getNumberOfDepartments(departments) {
      return Object.keys(departments).length;
    },
  };
  return all;
}
