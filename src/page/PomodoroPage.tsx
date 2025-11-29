import { useState, useEffect, useRef } from 'react';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

export default function PomodoroPage() {
    const [mode, setMode]           = useState<TimerMode>('pomodoro');
    const [timeLeft, setTimeLeft]   = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const timerDurations = {
        pomodoro:   25 * 60,
        shortBreak: 5 * 60,
        longBreak:  15 * 60,
    };

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = window.setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleTimerComplete();
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, timeLeft]);

    const handleTimerComplete = () => {
        setIsRunning(false);
        if (mode === 'pomodoro') {
            setPomodorosCompleted((prev) => prev + 1);
        }
    };

    const handleModeChange = (newMode: TimerMode) => {
        setMode(newMode);
        setTimeLeft(timerDurations[newMode]);
        setIsRunning(false);
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(timerDurations[mode]);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getProgressPercentage = () => {
        return ((timerDurations[mode] - timeLeft) / timerDurations[mode]) * 100;
    };

    return (
        <div className="w-full min-h-screen bg-linear-to-br from-blue-50 to-purple-50 p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Pomodoro Timer
                    </h1>
                    <p className="text-gray-600">
                        Stay focused and productive with the Pomodoro Technique
                    </p>
                </div>

                {/* Main Timer Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                    {/* Mode Selector */}
                    <div className="flex justify-center gap-3 mb-8">
                        <button
                            onClick={() => handleModeChange('pomodoro')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                mode === 'pomodoro'
                                    ? 'bg-red-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Pomodoro
                        </button>
                        <button
                            onClick={() => handleModeChange('shortBreak')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                mode === 'shortBreak'
                                    ? 'bg-green-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Short Break
                        </button>
                        <button
                            onClick={() => handleModeChange('longBreak')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                mode === 'longBreak'
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Long Break
                        </button>
                    </div>

                    {/* Timer Display */}
                    <div className="relative mb-8">
                        {/* Progress Circle */}
                        <div className="relative w-64 h-64 mx-auto">
                            <svg className="transform -rotate-90 w-64 h-64">
                                <circle
                                    cx="128"
                                    cy="128"
                                    r="120"
                                    stroke="#e5e7eb"
                                    strokeWidth="8"
                                    fill="none"
                                />
                                <circle
                                    cx="128"
                                    cy="128"
                                    r="120"
                                    stroke={mode === 'pomodoro' ? '#ef4444' : mode === 'shortBreak' ? '#10b981' : '#3b82f6'}
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 120}`}
                                    strokeDashoffset={`${2 * Math.PI * 120 * (1 - getProgressPercentage() / 100)}`}
                                    strokeLinecap="round"
                                    className="transition-all duration-1000"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-gray-800">
                                        {formatTime(timeLeft)}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
                                        {mode === 'pomodoro' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={toggleTimer}
                            className={`w-48 py-4 rounded-full font-bold text-lg transition-all shadow-lg ${
                                isRunning
                                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                                    : 'bg-green-500 hover:bg-green-600 text-white'
                            }`}
                        >
                            {isRunning ? '⏸ Pause' : '▶ Start'}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="w-32 py-4 rounded-full font-bold text-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-3xl shadow-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                            <div className="text-3xl font-bold text-red-500">
                                {pomodorosCompleted}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                                Pomodoros Today
                            </div>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div className="text-center flex-1">
                            <div className="text-3xl font-bold text-blue-500">
                                {Math.floor((pomodorosCompleted * 25) / 60)}h {(pomodorosCompleted * 25) % 60}m
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                                Focus Time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
