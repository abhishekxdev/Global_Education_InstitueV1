export default function AccountsPage() {
  const financialDocuments = [
    {
      title: 'Balance Sheet',
      format: 'PDF Format',
      lastUpdated: 'Feb 1, 2025',
      downloadUrl: null,
    },
    {
      title: 'Income and Expenditure Statement',
      format: 'PDF Format',
      lastUpdated: 'Feb 1, 2025',
      downloadUrl: null,
    },
    {
      title: 'Receipts and Payments',
      format: 'PDF Format',
      lastUpdated: 'Feb 1, 2025',
      downloadUrl: null,
    },
    {
      title: 'Not For Profit Certificate',
      format: 'PDF Format',
      lastUpdated: 'Dec 20, 2025',
      downloadUrl: 'https://drive.google.com/file/d/1K2luJLtLu21FA8sU5v4aASQV0y4K75iz/view?usp=sharing',
    },
  ];

  return (
    <main className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl font-bold text-black mb-2">Financial Reports</h1>
          <p className="text-gray-600 text-lg mb-12">Financial Year: 2024-2025</p>

          <div className="space-y-6">
            {financialDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h2 className="text-xl font-bold text-black mb-1">{doc.title}</h2>
                  <p className="text-gray-600">
                    {doc.format} • Last Updated: {doc.lastUpdated}
                  </p>
                </div>
                {doc.downloadUrl ? (
                  <a
                    href={doc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 whitespace-nowrap"
                  >
                    Download
                  </a>
                ) : (
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 whitespace-nowrap">
                    Download
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
