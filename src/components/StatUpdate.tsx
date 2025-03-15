"use client";

import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStat } from "../redux/statSlice";

export default function StatUpdate() {
    const [buttonActive, setButtonActive] = useState(false);
    const [rankError, setRankError] = useState("");
    const [percentileError, setPercentileError] = useState("");
    const [scoreError, setScoreError] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const rank = Number(formData.get("rank"));
        const percentile = Number(formData.get("percentile"));
        const score = Number(formData.get("score"));

        let hasError = false;

        if (isNaN(Number(rank))) {
            setRankError("Rank must be a number");
            hasError = true;
        } else {
            setRankError("");
        }

        if (isNaN(Number(percentile)) || Number(percentile) < 0 || Number(percentile) > 100) {
            setPercentileError("Percentile must be a number between 0 and 100");
            hasError = true;
        } else {
            setPercentileError("");
        }

        if (isNaN(Number(score)) || Number(score) < 0 || Number(score) > 15) {
            setScoreError("Score must be a number between 0 and 15");
            hasError = true;
        } else {
            setScoreError("");
        }

        if (hasError) {
            return;
        }

        const data = { rank, percentile, score };
        dispatch(updateStat(data));
        setButtonActive(false);
    };

    function UpdateButton() {
        return (
            <div
                className={` ${
                    buttonActive ? "absolute" : "hidden"
                } max-w-[612px] z-10 bg-white border border-[var(--border)] p-4 rounded-md left-1/3 top-1/3`}
            >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <p className="text-black font-bold">Update Scores</p>
                        <Image src={"/html.png"} width={24} height={24} alt="HTML" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4 justify-between text-left">
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-800 p-2 py-[1px] text-white rounded-full">
                                    1
                                </span>
                                <label htmlFor="rank" className="font-normal text-black">
                                    Update your <span className="font-bold">Rank</span>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="rank"
                                    id="rank"
                                    className="border p-1 outline-none focus:border-blue-400 text-sm text-black rounded-md"
                                    required
                                />
                                {rankError && (
                                    <p className="text-red-500 text-xs">{rankError}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 justify-between text-left">
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-800 p-2 py-[1px] text-white rounded-full">
                                    2
                                </span>
                                <label htmlFor="percentile" className="font-normal text-black">
                                    Update your <span className="font-bold">Percentile</span>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="percentile"
                                    id="percentile"
                                    className="border p-1 outline-none focus:border-blue-400 text-sm text-black rounded-md"
                                    required
                                />
                                {percentileError && (
                                    <p className="text-red-500 text-[9px]">{percentileError}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 justify-between text-left">
                            <div className="flex gap-4 items-center">
                                <span className="bg-blue-800 p-2 py-[1px] text-white rounded-full">
                                    3
                                </span>
                                <label htmlFor="score" className="font-normal text-black">
                                    Update your{" "}
                                    <span className="font-bold">Current Score (out of 15)</span>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="score"
                                    id="score"
                                    className="border p-1 outline-none focus:border-blue-400 text-sm text-black rounded-md"
                                    required
                                />
                                {scoreError && (
                                    <p className="text-red-500 text-xs">{scoreError}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="space-x-6 flex justify-end">
                        <button
                            onClick={() => setButtonActive(false)}
                            className="px-1 cursor-pointer text-sm border border-blue-600 rounded-md text-blue-600 py-2"
                            type="button"
                        >
                            cancel
                        </button>
                        <button
                            className="px-4 cursor-pointer text-sm border bg-blue-800 rounded-md text-white py-2"
                            type="submit"
                        >
                            save
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="border flex rounded-md items-center border-[var(--border)] w-fit p-3 space-x-2">
            <Image src={"/html.png"} width={48} height={48} alt="HTML" />
            <div className="text-sm text-black">
                <p className="font-extrabold">Hyper Text Markup Language</p>
                <p className="text-xs">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
            </div>
            <button
                onClick={() => setButtonActive(true)}
                className="bg-indigo-900 px-4 py-2 rounded-lg text-xs text-white cursor-pointer"
            >
                Update
            </button>
            <UpdateButton />
        </div>
    );
}
