import { FileText, ExternalLink } from 'lucide-react';

const adminDocuments = [
  {
    title: 'Society Member List',
    fileId: '1Nldo87nUpepBgvO1QDnenKhuxk4mE28W',
    description: 'Official list of society members and stakeholders.',
  },
];

export default function AdministrativeDocumentsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Administrative Documents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View our official administrative documents and records.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {adminDocuments.map((doc) => (
              <div key={doc.fileId} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-center">
                  <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    {doc.title}
                  </h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700 mb-6">{doc.description}</p>
                  <a
                    href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
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
