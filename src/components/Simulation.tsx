"use client"

import Image from "next/image"
import { useState } from "react";
import { PartyData } from "@/utils/types/PartyI";
// import { politicalParties } from "@/utils/data/politicalParties";
import dynamic from "next/dynamic";
import React from "react";
const DialogVote = dynamic(() => import('./DialogVote'), { ssr: false });

export default function Simulation() {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedParty, setSelectedParty] = useState<number>({} as number)
    return (
        <>
            <div className="mx-auto max-w-7xl py-4 sm:py-6 ">
                <div className="grid gap-3 grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
                    {Array.from({ length: 38 }).map((_, i) => (
                        <React.Fragment key={`party-${i}`}>
                            {i === 12 || i === 21 ? (
                                <div key={`spacer-${i}`} className="hidden md:block" />
                            ) : null}
                            <button type="button" onClick={() => {
                                setSelectedParty(i)
                                setOpen(true)
                            }} key={i} className="group relative border border-gray-400 overflow-hidden">
                                <div className="overflow-hidden bg-gray-100">
                                    <Image className="object-cover object-center" src="https://placehold.co/60x70" alt={`Image alt ${i}`} width={200} height={50} priority />
                                </div>
                                <div className="flex bg-white bg-opacity-75 items-center justify-center space-x-8 text-xxs font-medium text-gray-900">
                                    <p>Candidato {i+1}</p>
                                </div>
                                <div className="overflow-hidden bg-gray-100">
                                    <Image className="object-cover object-center" src="https://placehold.co/100x50" alt={`Image party alt ${i}`} width={250} height={50} />
                                </div>
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <DialogVote open={open} setOpen={setOpen} index={selectedParty} />
        </>
    )
}



