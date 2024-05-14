'use client';
import DeleteButton from "@/components/DeleteButton";
import Left from "@/components/icons/Left";
import EditableImage from "@/components/layout/EditableImage";
import MenuItemForm from "@/components/layout/MenuItemForm";
import EmployeeForm from "../../../../components/layout/EmployeeForm";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Link from "next/link";
import {redirect, useParams} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function EditEmployee() {

  const {id} = useParams();

  const [employee, setEmployee] = useState(null);
  const [redirectToEmployees, setRedirectToEmployees] = useState(false);
  const {loading, data} = useProfile();

  useEffect(() => {
    fetch('/api/employees').then(res => {
      res.json().then(emps => {
        const emp = emps.find(e => e._id === id);
        setEmployee(emp);
      });
    })
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    data = {...data, _id:id};
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/employees', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving data',
      success: 'Saved',
      error: 'Error',
    });

    setRedirectToEmployees(true);
  }

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/employees?_id='+id, {
        method: 'DELETE',
      });
      if (res.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted',
      error: 'Error',
    });

    setRedirectToEmployees(true);
  }

  if (redirectToEmployees) {
    return redirect('/employees');
  }

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={'/employees'} className="button">
          <Left />
          <span>Show all Employees</span>
        </Link>
      </div>
      <EmployeeForm employee={employee} onSubmit={handleFormSubmit} />
      <div className="mt-4 max-w-2xl mx-auto">
        <div className="max-w-md mx-auto pl-4 pr-8">
          <DeleteButton
            label="Delete Employee details"
            onDelete={handleDeleteClick}
          />
        </div>
      </div>
    </section>
  );
}