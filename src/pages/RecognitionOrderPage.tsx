import { Award, ExternalLink, FileText } from 'lucide-react';

const recognitionDocuments = [
  {
    title: 'UG Affiliation',
    fileId: '1vkTtSE3YUTF2xXcrEG_E7UGCZIkA4BaQ',
    description: 'Official Undergraduate Program Affiliation Certificate',
  },
  {
    title: 'B.Ed Affiliation',
    fileId: '1vkTtSE3YUTF2xXcrEG_E7UGCZIkA4BaQ',
    description: 'Bachelor of Education Program Affiliation Certificate',
  },
];

export default function RecognitionOrderPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Award className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Affiliation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our institute is officially recognized and affiliated with leading educational authorities.
            View our official recognition orders and affiliation certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recognitionDocuments.map((doc) => (
            <div key={doc.fileId} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {doc.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">{doc.description}</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Document
                  </a>
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${doc.fileId}`}
                    className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    <FileText className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
