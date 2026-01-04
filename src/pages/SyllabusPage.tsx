import { BookOpen, Download, FileText } from 'lucide-react';

export default function SyllabusPage() {
  const courses = [
    {
      name: "B.A. B.Ed",
      syllabi: [
        { title: "Ist Year ALL SUBJECT", link: "https://drive.google.com/file/d/1cwes95T7ah-DVx4hgE39Z3fQ9FM2YbBz/view?usp=sharing" },
        { title: "IInd Year ALL SUBJECT", link: "https://drive.google.com/file/d/1BeTYrCOrjgje44T_Zyj1Lj-hG2suQZWU/view?usp=sharing" },
        { title: "IIIrd Year ALL SUBJECT", link: "https://drive.google.com/file/d/1sN5tVWKERTQCPtYGEOu_Df-cDi0T6CTw/view?usp=drive_link" },
        { title: "IVth Year ALL SUBJECT", link: "https://drive.google.com/file/d/1DRxH-9HsZZxVHem8w_cCfTxELBVr5obY/view?usp=sharing" },
      ]
    },
    {
      name: "B.Sc. B.Ed",
      syllabi: [
        { title: "Ist Year ALL SUBJECT", link: "https://drive.google.com/file/d/1V78Yp2MX4gXnSNnk2OBqnVdAawEY8Zm6/view?usp=sharing" },
        { title: "IInd Year ALL SUBJECT", link: "https://drive.google.com/file/d/1DiND0VldB73m91JRkgi7xmJHMRNM5c4Q/view?usp=sharing" },
        { title: "IIIrd Year ALL SUBJECT", link: "https://drive.google.com/file/d/1UStoPEah0FkUzloPoae_FWMFVsY2IQaY/view?usp=sharing" },
        { title: "IVth Year ALL SUBJECT", link: "https://drive.google.com/file/d/1sgNC2pSok5SLcr8St2nNCCU2l4PTMjxF/view?usp=sharing" },
      ]
    }
  ];

  const allSyllabi = courses.flatMap((course) => 
    course.syllabi.map((syllabus) => ({
      name: `SYLLABUS ${course.name} ${syllabus.title}`,
      link: syllabus.link
    }))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-8 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Syllabus</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="overflow-x-auto border border-gray-200 rounded-sm">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 font-bold text-gray-700 text-sm w-20 border-r border-gray-200">S. No.</th>
                <th className="py-3 px-4 font-bold text-gray-700 text-sm border-r border-gray-200">Name</th>
                <th className="py-3 px-4 font-bold text-gray-700 text-sm w-32">Link</th>
              </tr>
            </thead>
            <tbody>
              {allSyllabi.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-600 text-sm border-r border-gray-200">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm uppercase border-r border-gray-200">
                    {item.name}
                  </td>
                  <td className="py-3 px-4">
                    <a 
                      href={item.link} 
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
