import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const cotraveller = [
  {
    id: 1,
    name: "Md Sujon Howlader Hossain",
    relationship: "Brother",
    email: "sujon@gmail.com",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*eefdtj*_ga*OTMyMzQyMTY4LjE3NTkxMzM4ODM.*_ga_8JE65Q40S6*czE3NTkxMzM4ODMkbzEkZzEkdDE3NTkxMzM5MTgkajI1JGwwJGgw",
  },
  {
    id: 2,
    name: "Md Sujon Howlader Hossain",
    relationship: "Brother",
    email: "sujon@gmail.com",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*eefdtj*_ga*OTMyMzQyMTY4LjE3NTkxMzM4ODM.*_ga_8JE65Q40S6*czE3NTkxMzM4ODMkbzEkZzEkdDE3NTkxMzM5MTgkajI1JGwwJGgw",
  },
  {
    id: 3,
    name: "Md Sujon Howlader Hossain",
    relationship: "Brother",
    email: "sujon@gmail.com",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?_gl=1*eefdtj*_ga*OTMyMzQyMTY4LjE3NTkxMzM4ODM.*_ga_8JE65Q40S6*czE3NTkxMzM4ODMkbzEkZzEkdDE3NTkxMzM5MTgkajI1JGwwJGgw",
  },
];
export default function CoTraveller() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
      {cotraveller.map((cotraveller) => (
        <Card key={cotraveller.id} className="p-2">
          <CardHeader>
            <Button className="ml-auto text-center bg-transparent hover:opacity-80 transition duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 "
              >
                <path
                  d="M16.607 3.00598C16.8457 2.76644 17.1293 2.57637 17.4416 2.44664C17.7538 2.31692 18.0886 2.25009 18.4268 2.25C18.7649 2.24991 19.0998 2.31655 19.4121 2.4461C19.7245 2.57565 20.0082 2.76557 20.247 3.00498L20.997 3.75598C21.236 3.99467 21.4256 4.27814 21.555 4.59017C21.6844 4.90221 21.751 5.23668 21.751 5.57448C21.751 5.91227 21.6844 6.24674 21.555 6.55878C21.4256 6.87081 21.236 7.15428 20.997 7.39298L13.397 14.997C13.1583 15.2361 12.8747 15.4257 12.5626 15.5551C12.2505 15.6845 11.9159 15.751 11.578 15.751H9C8.80109 15.751 8.61032 15.672 8.46967 15.5313C8.32902 15.3907 8.25 15.1999 8.25 15.001V12.439C8.25 11.757 8.52 11.103 9.002 10.621L16.607 3.00598Z"
                  fill="#0066FF"
                />
                <path
                  d="M11.943 2.25H12C12.1989 2.25 12.3897 2.32902 12.5303 2.46967C12.671 2.61032 12.75 2.80109 12.75 3C12.75 3.19891 12.671 3.38968 12.5303 3.53033C12.3897 3.67098 12.1989 3.75 12 3.75C9.857 3.75 8.326 3.752 7.162 3.908C6.02 4.062 5.345 4.352 4.848 4.848C4.352 5.345 4.062 6.02 3.908 7.162C3.752 8.326 3.75 9.857 3.75 12C3.75 14.143 3.752 15.674 3.908 16.838C4.062 17.98 4.352 18.655 4.848 19.152C5.345 19.648 6.02 19.938 7.162 20.092C8.326 20.248 9.857 20.25 12 20.25C14.143 20.25 15.674 20.248 16.838 20.092C17.98 19.938 18.655 19.648 19.152 19.152C19.648 18.655 19.938 17.98 20.092 16.838C20.248 15.674 20.25 14.142 20.25 12C20.25 11.8011 20.329 11.6103 20.4697 11.4697C20.6103 11.329 20.8011 11.25 21 11.25C21.1989 11.25 21.3897 11.329 21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12V12.057C21.75 14.13 21.75 15.762 21.579 17.037C21.403 18.347 21.034 19.391 20.212 20.212C19.391 21.034 18.346 21.402 17.038 21.579C15.762 21.75 14.13 21.75 12.057 21.75H11.943C9.87 21.75 8.238 21.75 6.963 21.579C5.653 21.403 4.609 21.034 3.788 20.212C2.966 19.391 2.598 18.346 2.421 17.038C2.25 15.762 2.25 14.13 2.25 12.057V11.943C2.25 9.87 2.25 8.238 2.421 6.963C2.597 5.653 2.966 4.609 3.788 3.788C4.609 2.966 5.654 2.598 6.962 2.421C8.238 2.25 9.87 2.25 11.943 2.25Z"
                  fill="#0066FF"
                />
              </svg>
            </Button>
            <div className="mx-auto">
              <img
                src={cotraveller.image}
                alt={cotraveller.name}
                className="aspect-square size-24 rounded-full"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-bold tracking-tight">{cotraveller.name}</h3>
            <p className="text-base tracking-tight text-gray-500">
              {cotraveller.relationship}
            </p>
            <p className="text-base tracking-tight text-gray-700">
              {cotraveller.email}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
