"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

function Blog() {
  const [users, setusers] = useState<User[]>([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Veri çekilemedi knk");

        const data = await res.json();
        setusers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occured");
        }
      } finally {
        setloading(false);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  if (loading) return <p>Yükleniyor knk...</p>;
  if (error) return <p>Hata var: {error}</p>;
  return (
    <div>
      <h2>Main Blog</h2>
      <div className="grid grid-cols-2 gap-2">
      {users.map((user) => (
        <Link className="bg-lime-400 p-2" key={user.id} href={`/blog/${user.name}`}>
          {user.name}
        </Link>
      ))}
      </div>
      <p>Burasi children</p>
    </div>
  );
}

export default Blog;
