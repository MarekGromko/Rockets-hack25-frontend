import { useState, useEffect } from 'react';

export default function ReportsPage() {
    const [report,      setReport] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchReport = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            // TODO: Replace with your actual Gemini AI API endpoint
            const response = await fetch('/api/generate-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Add any necessary parameters for your Gemini AI request
                body: JSON.stringify({
                    // Add your request parameters here
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch report');
            }

            const data = await response.json();
            setReport(data.report || data.text || '');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            console.error('Error fetching report:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        
    });

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                📊 AI Report
                            </h1>
                            <p className="text-gray-600">
                                Generated insights and analysis from Gemini AI
                            </p>
                            <button
                                onClick={fetchReport}
                                disabled={isLoading}
                                className={`px-6 py-3 mt-4 rounded-lg font-semibold transition-all shadow-lg ${
                                    isLoading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                }`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Generating...
                                    </span>
                                ) : (
                                    '🔄 Generate New Report'
                                )}
                            </button>
                        </div>
                        
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h3 className="font-semibold text-red-800 mb-1">
                                    Error Loading Report
                                </h3>
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Report Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-16">
                            <div className="animate-pulse space-y-4 w-full">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    ) : report ? (
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                                {report}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="text-6xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                No Report Generated Yet
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Click the button above to generate a new AI report
                            </p>
                        </div>
                    )}
                </div>

                {/* Info Footer */}
                {report && (
                    <div className="bg-blue-50 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">💡</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-blue-900 mb-1">
                                    About This Report
                                </h3>
                                <p className="text-blue-700 text-sm">
                                    This report was generated using Gemini AI. The insights are 
                                    based on your habit tracking data and activity patterns.
                                </p>
                                <div className="mt-3 flex items-center gap-4 text-xs text-blue-600">
                                    <span>📅 Generated: {new Date().toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span>🔢 Words: {report.split(/\s+/).length}</span>
                                    <span>•</span>
                                    <span>📝 Characters: {report.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
