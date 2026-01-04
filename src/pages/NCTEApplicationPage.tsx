import { CheckCircle, ExternalLink } from 'lucide-react';

const ncteDocuments = [
  {
    title: 'NCTE Recognition Order',
    fileId: '1KikvbmcPsRufDsUlA_6yFZMvb8Ur1QMU',
    description: 'Official NCTE Recognition Order Document',
  },
];

export default function NCTEApplicationPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NCTE Recognition</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View our official NCTE recognition and accreditation documents.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {ncteDocuments.map((doc) => (
              <div key={doc.fileId} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 text-center">
                  <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {doc.title}
                  </h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700 mb-6">{doc.description}</p>
                <a
                  href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Document
                </a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
