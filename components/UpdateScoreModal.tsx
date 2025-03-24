"use client"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

export default function UpdateScoreModal({
  isOpen,
  closeModal,
  rank,
  setRank,
  percentile,
  setPercentile,
  score,
  setScore,
}: {
  isOpen: boolean
  closeModal: () => void
  rank: string
  setRank: (value: string) => void
  percentile: string
  setPercentile: (value: string) => void
  score: string
  setScore: (value: string) => void
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all">
                <Dialog.Title className="text-lg font-bold">Update Scores</Dialog.Title>
                <div className="space-y-6 mt-4">
  {/* Rank */}
  <div className="flex items-center gap-6 ml-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
      <span>1</span>
    </div>
    <div className="flex w-full justify-between items-center">
      <span className="font-medium">Update your <span className="font-bold">Rank</span></span>
      <input
        type="text"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        className="w-32 p-2 border rounded-md border-black"
      />
    </div>
  </div>

  {/* Percentile */}
  <div className="flex items-center gap-6 ml-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
      <span>2</span>
    </div>
    <div className="flex w-full justify-between items-center">
      <span className="font-medium">Update your <span className="font-bold">Percentile</span></span>
      <input
        type="text"
        value={percentile}
        onChange={(e) => setPercentile(e.target.value)}
        className="w-32 p-2 border rounded-md border-black"
      />
    </div>
  </div>

  {/* Score */}
  <div className="flex items-center gap-1 ml-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
      <span>3</span>
    </div>
    <div className="flex w-full justify-between items-center">
      <span className="font-medium">Update your <span className="font-bold">Current Score (out of 15)</span></span>
      <input
        type="text"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="w-32 p-2 border rounded-md border-black"
      />
    </div>
  </div>
</div>


                <div className="flex justify-end gap-2 mt-4">
                  <button className="border px-4 py-2" onClick={closeModal}>
                    Cancel
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2" onClick={closeModal}>
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
