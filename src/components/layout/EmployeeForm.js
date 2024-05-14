import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import EditableImage from "@/components/layout/EditableImage";
import {useEffect, useState} from "react";

export default function EmployeeForm({onSubmit,employee}) {
  const [image, setImage] = useState(employee?.image || '');
  const [name, setName] = useState(employee?.name || '');
  const [deliveryArea, setDeliveryArea] = useState(employee?.deliveryArea || '');
  const [phone, setPhone] = useState(employee?.phone || '');
  const [email, setEmail] = useState(employee?.email || '');
  const [streetAddress, setStreetAddress] = useState(employee?.streetAddress || '');


  return (
    <form
      onSubmit={ev =>
        onSubmit(ev, {
          image,name,deliveryArea,phone,email,streetAddress,
        })
      }
      className="mt-8 max-w-2xl mx-auto">
      <div
        className="md:grid items-start gap-4"
        style={{gridTemplateColumns:'.3fr .7fr'}}>
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Employee name</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            value={streetAddress}
            onChange={ev => setStreetAddress(ev.target.value)}
          />
          <label>Delivery Area</label>
          <input
            type="text"
            value={deliveryArea}
            onChange={ev => setDeliveryArea(ev.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={ev => setPhone(ev.target.value)}
          />
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}