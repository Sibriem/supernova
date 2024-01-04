"use client"

import { useState, useEffect } from 'react';

export default function Testpage() {

const nameList = [{firstName: "Johan", lastName: "Strauss"}, {firstName: "Steve", lastName: "Bucknall"}];

const nameJSON = JSON.stringify(nameList);

localStorage.setItem('names', nameJSON);

const localName = JSON.parse(localStorage.getItem('names'));



  return (
    <main>
    <div>
     {localName.map((name) => (
        <p>{name.firstName + " " + name.lastName}</p>
        
     ))}
     </div>
    </main>
  );
  }
