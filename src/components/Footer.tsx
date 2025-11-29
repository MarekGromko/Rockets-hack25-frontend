import { useLocation, useNavigate } from "react-router";

interface TabItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const tabs: TabItem[] = [
  { id: "home", label: "Home", icon: "🏠", path: "/" },
  { id: "habits", label: "Activity", icon: "✓", path: "/pomodoro" },
  { id: "stats", label: "Reports", icon: "📊", path: "/reports" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <nav className="flex justify-around items-center h-16 max-w-4xl mx-auto px-4">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-2xl mb-1">{tab.icon}</span>
              <span
                className={`text-xs font-medium ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-1 bg-blue-600 rounded-t-full" />
              )}
            </button>
          );
        })}
      </nav>
    </footer>
  );
}
