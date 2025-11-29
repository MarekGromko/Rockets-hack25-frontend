interface HeaderProps {
    userName?: string;
}

export default function Header({ userName = "User" }: HeaderProps) {
    return (
        <header className="bg-white w-full py-2">
            <div className="flex px-4 p-2-4 max-w-2xl mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl">🚀</div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Habit Tracker
                        </h1>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1">
                        <span className="text-xl">👤</span>
                        <span className="font-medium text-gray-700">{userName}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
