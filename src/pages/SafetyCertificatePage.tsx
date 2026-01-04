import { Shield, ExternalLink, FileText } from 'lucide-react';

export default function SafetyCertificatePage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Building Safety Certificate</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official safety certificate verifying compliance with building regulations and safety standards.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <FileText className="w-24 h-24 text-orange-500" />
            <h3 className="text-2xl font-semibold text-gray-900">View Safety Certificate</h3>
            <p className="text-gray-600 text-center max-w-2xl">
              Click the button below to view the official building safety certificate document.
            </p>
            <a
              href="https://drive.google.com/file/d/1pp2fBlFmX66YSq9ssQ1ggidd99ql7W9j/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5" />
              Open Certificate Document
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
