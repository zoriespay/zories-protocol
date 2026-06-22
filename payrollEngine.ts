export interface Employee {
  wallet: string;
  amount: number;
}

export async function processPayroll(
  employees: Employee[]
) {
  return employees.map((employee) => ({
    ...employee,
    status: "paid"
  }));
}
