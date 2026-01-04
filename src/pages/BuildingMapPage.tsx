import { Building2, ExternalLink } from 'lucide-react';

const documents = [
  {
    title: 'Building Map',
    fileId: '1SdvVW5I_vcCfSSVWLuTUp11f8fVGcich',
  },
  {
    title: 'Building Completion',
    fileId: '188EqrXiYIRGNfc050Vk8j9ve4sA4Ig_a',
  },
  {
    title: 'Layout Plan',
    fileId: '1Nwiy6lqV5ZkelxNK6xDwcKFdSL1UxMo9',
  },
];

export default function BuildingMapPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Building2 className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Building Maps & Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View our official building maps, completion certificates, and layout plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documents.map((doc) => (
            <div key={doc.fileId} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{doc.title}</h3>
                <a
                  href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <a
                  href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Document
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
