'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EmployeePage() {

  const [employees, setEmployees] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch('/api/employees').then(res => {
      res.json().then(employees => {
        setEmployees(employees);
      });
    });
  }, []);

  if (loading) {
    return 'Loading employee info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link
          className="button flex"
          href={'/employees/new'}>
          <span>Create new Employee</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8 p-4">Edit Employee:</h2>
        <div className="grid grid-cols-3 gap-2" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', width: '100%' }}>
          {employees?.length > 0 && employees.map(emp => (
            <Link
              key={emp._id}
              href={'/employees/edit/'+emp._id}
              className="rounded-lg p-4"
              style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div className="relative" style={{ width: '100%', height: '200px' }}>
                <Image
                  className="rounded-md"
                  src={emp.image} alt={''} width={200} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="text-center font-semibold mt-2">
                {emp.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
