"use client";
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from "next/image";
import { PartyData } from '@/utils/types/PartyI';
import dynamic from 'next/dynamic';
const DialogCenterWithSingleAction = dynamic(() => import('./DialogCenterWithSingleAction'), { ssr: false });

export default function DialogVote({ open, setOpen, index }: { open: boolean, setOpen: (value: boolean) => void, index: number }) {
    const apiBaseUrl = process.env.API_BASE_URL;
    const [openCheckVote, setOpenCheckVote] = useState<boolean>(false)

    const [isLoading, setIsLoading] = useState(false);

    const votePartySimulation = async (): Promise<any> => {
        setIsLoading(true);
        setOpen(false)
        try {
            // const response = await fetch(`${apiBaseUrl}/v1/vote`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         id_partido: party?.id_partido,
            //     }),
            // });
            // if (!response.ok) {
            //     throw new Error('Failed to fetch data');
            // }
            // await new Promise(resolve => setTimeout(resolve, 700));
            // const data = await response.json();
            setOpenCheckVote(true)
            setIsLoading(false);
            setTimeout(() => {
                setOpenCheckVote(false)
            }, 2000);
            return true;
        } catch (error) {
            console.error('Error en el simulador:', error);
            await new Promise(resolve => setTimeout(resolve, 400));
            setOpenCheckVote(true)
            setIsLoading(false);
            setTimeout(() => {
                setOpenCheckVote(false)
            }, 2000);
            throw error;
        }
    };

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
            )}
            <DialogCenterWithSingleAction openCheckVote={openCheckVote} setOpenCheckVote={setOpenCheckVote} candidateName={!!index ? `Candidato ${index+1}` : ''} />
            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-30" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
                        <div className="flex h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <Dialog.Panel className="transform text-left  text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className='rounded-lg overflow-hidden shadow-2xl'>
                                        <div className="relative flex w-full items-center bg-white p-4">
                                            <button
                                                type="button"
                                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close</span>
                                                X
                                            </button>
                                            <div className="w-full">
                                                {index && (
                                                    <div className="group relative border border-gray-800 overflow-hidden">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        <div className="overflow-hidden bg-gray-100">
                                                            <Image
                                                                className="object-cover object-center"
                                                                src="https://placehold.co/300x400" alt={`Image alt ${index}`}
                                                                width={250}
                                                                height={50}
                                                                style={{
                                                                    width: 'auto',
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex bg-white bg-opacity-75 items-center justify-center space-x-8 text-xs font-medium text-gray-900">
                                                            <h3>Candidato {index+1}</h3>
                                                        </div>
                                                        <div className="overflow-hidden bg-gray-100">
                                                            <Image
                                                                className="object-cover object-center"
                                                                src="https://placehold.co/300x100" alt={`Image party alt ${index}`}
                                                                width={250}
                                                                height={50}
                                                                style={{
                                                                    width: 'auto',
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-2 text-right sm:px-6 flex w-full items-center justify-center">
                                            <button onClick={() => votePartySimulation()} className="inline-flex justify-center rounded-md bg-gray-500 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">Votar</button>                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

