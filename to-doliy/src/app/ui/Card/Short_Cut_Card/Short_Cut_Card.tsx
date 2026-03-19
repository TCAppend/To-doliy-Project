'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface Log {
  id: number;             
  name: string;           
  description: string;    
  startTime?: number;     // store as timestamp (ms)
  endTime?: number;       
  duration: number;       // total ms
}

export default function Short_Cut_Card() {

    return (
        <div className="bg-[#F9D965] p-4 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Short-Cut Timer</h2>
              <p>List</p>
          </div>
    );
}