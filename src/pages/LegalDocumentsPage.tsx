import { FileText } from 'lucide-react';

const documents = [
  { title: 'Land Document', fileId: '1wBjM1bUQ7nxI7k7ikES8JXuvT_d1DTuw' },
  { title: 'Land Use Certificate', fileId: '1Ns0eK9kD1186VJZNVm4qpiptI1vD92sf' },
  { title: 'Building Map', fileId: '1SdvVW5I_vcCfSSVWLuTUp11f8fVGcich' },
  { title: 'Building Completion Certificate', fileId: '188EqrXiYIRGNfc050Vk8j9ve4sA4Ig_a' },
  { title: 'Layout Plan', fileId: '1Nwiy6lqV5ZkelxNK6xDwcKFdSL1UxMo9' },
  { title: 'Building Safety Certificate', fileId: '1pp2fBlFmX66YSq9ssQ1ggidd99ql7W9j' },
  { title: 'Encumbrance Certificate', fileId: '1fW5SG8VPfyUAe2QlI37AJUklER8GHEq-' },
  { title: 'Matution Certificate', fileId: '1fPqQzDKjB9B2uWn2V2L-EuqPTQGAbVaA' },
  { title: 'Affidavit', fileId: '1BwtoZZP1_ANqIXE75-MNJxcalZsLZk5y' },
  { title: 'Authorization Affidavit', fileId: '1PtjyodJTsbQmx8mAbDReo6F3-QtZZmqU' },
  { title: 'University Affiliation (UG & B.Ed)', fileId: '1vkTtSE3YUTF2xXcrEG_E7UGCZIkA4BaQ' },
  { title: 'Admitted Student List', fileId: '1I1W_Ft0Qcjobb4E9EQjYnk3mjFf53ins' },
  { title: 'Conversion Order', fileId: '1e7NW16SCaYoxYc6_rCCyB74gemHt9kQB' },
  { title: 'Executive Committee List', fileId: '1bh35yUg1LLmzoZxcuBiT7pwQJlKijdR2' },
  { title: 'BEd. NCTE NOC', fileId: '1dTf9qRnyD0TFFAePLlYkP56eqVsAIhhX' },
  { title: 'Bikaner NOC', fileId: '1wWfXEjpxrKfVYMacz0Z5ZfggoVHhrmN-' },
  { title: 'BSTC Gov Letter', fileId: '1jNAgfk-iJ3nzWTjRpTJbnw0FUSUEEbhX' },
  { title: 'NOC', fileId: '1vVe2C_-YtpaPaLzpZnybqsSjkGuPbj5e' },
  { title: 'NCTE Recognition order', fileId: '135OUrL9nCV139-D8YzX61JYbSF_scluQ' },
];

export default function LegalDocumentsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">College Document</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View our official documents and certificates.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-sm shadow-sm">
          <table className="min-w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#a9281a] border-b border-gray-200 text-white">
                <th className="py-3 px-4 font-bold text-sm w-20 border-r border-gray-300">S. No.</th>
                <th className="py-3 px-4 font-bold text-sm border-r border-gray-300">Document Name</th>
                <th className="py-3 px-4 font-bold text-sm w-32">Link</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-600 text-sm border-r border-gray-200">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm border-r border-gray-200">
                    {doc.title}
                  </td>
                  <td className="py-3 px-4">
                    <a 
                      href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
                    >
                      Read More
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
