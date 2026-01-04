import { FileText, IndianRupee, Users, Download, GraduationCap, ExternalLink, Scale, ClipboardList } from 'lucide-react';

export default function StudentZonePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-orange-500 mb-4">Student Zone</h1>
          <p className="text-white text-lg">Access all student resources and information</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center border-b-4 border-orange-500 pb-4 inline-block">Admission & Fee</h1>

            {/* Quick Action Cards */}
            <div className="mb-12 grid grid-cols-1 gap-4">
                {/* Admitted Student List Card */}
                <a 
                    href="https://drive.google.com/file/d/1I1W_Ft0Qcjobb4E9EQjYnk3mjFf53ins/preview?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 p-4 rounded-xl flex items-center gap-4"
                >
                    <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition-colors">
                        <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1 text-gray-900">Admitted Student List</h3>
                        <p className="text-gray-600 text-sm">View and download admitted students list</p>
                    </div>
                    <Download className="w-6 h-6 ml-auto text-gray-400 group-hover:text-orange-500 transition-colors" />
                </a>

                {/* Admission Policy Card */}
                <a 
                    href="https://drive.google.com/file/d/13pGwtIHLOLZyDz0zXYJUGI4kUQcTegd_/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 p-4 rounded-xl flex items-center gap-4"
                >
                    <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                        <Scale className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1 text-gray-900">Admission Policy</h3>
                        <p className="text-gray-600 text-sm">Read our admission policy and guidelines</p>
                    </div>
                    <FileText className="w-6 h-6 ml-auto text-gray-400 group-hover:text-green-500 transition-colors" />
                </a>

                {/* Admission Form Card */}
                <a 
                    href="https://drive.google.com/file/d/1qniBOtLVX0WxGC-XvoodyelbOEW-RZqf/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all duration-300 p-4 rounded-xl flex items-center gap-4"
                >
                    <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors">
                        <ClipboardList className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1 text-gray-900">Admission Form</h3>
                        <p className="text-gray-600 text-sm">Download admission form</p>
                    </div>
                    <Download className="w-6 h-6 ml-auto text-gray-400 group-hover:text-purple-500 transition-colors" />
                </a>

                {/* Check Result Card */}
                <a 
                    href="https://results.jnvuiums.in/(S(kloxothu0anzsyho3hc1yhi4))/Results/ExamResult.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 p-4 rounded-xl flex items-center gap-4"
                >
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1 text-gray-900">Check Result</h3>
                        <p className="text-gray-600 text-sm">View your examination results online</p>
                    </div>
                    <ExternalLink className="w-6 h-6 ml-auto text-gray-400 group-hover:text-blue-500 transition-colors" />
                </a>
            </div>

            {/* Fee Details Course wise */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <IndianRupee className="w-8 h-8 text-orange-600" />
                    <h2 className="text-2xl font-bold text-gray-800">Fee Details Course wise</h2>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
                    <table className="w-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                <th className="px-6 py-4 text-left font-semibold tracking-wide">S.No.</th>
                                <th className="px-6 py-4 text-left font-semibold tracking-wide">Name of Class</th>
                                <th className="px-6 py-4 text-left font-semibold tracking-wide">Tuition Fees</th>
                                <th className="px-6 py-4 text-left font-semibold tracking-wide">Exam Fee</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-orange-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">1</td>
                                <td className="px-6 py-4 text-gray-800 font-semibold">B.A. Semester (NEP2020) Course</td>
                                <td className="px-6 py-4 text-gray-700">3000/- Per Semester</td>
                                <td className="px-6 py-4 text-gray-600 italic">As Per University</td>
                            </tr>
                            <tr className="hover:bg-orange-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">2</td>
                                <td className="px-6 py-4 text-gray-800 font-semibold">B.Sc. Semester (NEP2020) Course</td>
                                <td className="px-6 py-4 text-gray-700">8000/- Per Semester</td>
                                <td className="px-6 py-4 text-gray-600 italic">As Per University</td>
                            </tr>
                            <tr className="hover:bg-orange-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">3</td>
                                <td className="px-6 py-4 text-gray-800 font-semibold">M.A. Geography Semester (NEP2020) Course</td>
                                <td className="px-6 py-4 text-gray-700">4000/- Per Semester</td>
                                <td className="px-6 py-4 text-gray-600 italic">As Per University</td>
                            </tr>
                            <tr className="hover:bg-orange-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">4</td>
                                <td className="px-6 py-4 text-gray-800 font-semibold">B.Ed (4 Years)</td>
                                <td className="px-6 py-4 text-gray-700">₹27,000/year</td>
                                <td className="px-6 py-4 text-gray-600 italic">As Per University</td>
                            </tr>
                            <tr className="hover:bg-orange-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">5</td>
                                <td className="px-6 py-4 text-gray-800 font-semibold">D.El.Ed (2 Years)</td>
                                <td className="px-6 py-4 text-gray-700">₹16,555/year</td>
                                <td className="px-6 py-4 text-gray-600 italic">As Per University</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Rules & Regulations for Fees */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
                <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-8 h-8 text-gray-700" />
                    <h2 className="text-2xl font-bold text-gray-800">Rules & Regulations for Fees</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                    {[
                        "Every student seeking admission in the college shall have to deposit her/his fees by the last date. In case, the fees is not deposited by the due date admission will be considered null & void.",
                        "It is mandatory to deposit the fee for the whole session even if the student seeks admission in the mid-session.",
                        "Information about university fee will be pasted on the College Notice Board at an appropriate time. You will have to deposit your form & the fees before the last date. The college will not be responsible for any fault on your part.",
                        "Caution money will be refunded within one year of passing the last examination. Applications for its refund are invited in the month of November & caution money is returned from December to January.",
                        "Fee will not be refunded to drop out or failed students.",
                        "Fees once deposited is not refundable in any condition except the caution money.",
                        "The regular students whose results are not declared till the last date depositing the fee are required to fill the admission forms within 15 days from the date of declaration of results; otherwise they will have to pay the late fee prescribed by the college. Students with special achievements at national and international level can avail special concession. For this, the Principal should be contacted along with the relevant certificates.",
                        "Brilliant students of the college belonging to the economically weaker sections of the society can be given maximum concession. No other fee concession is given. An income certificate & a description of dependent from a first class magistrate is necessary to claim assistance.",
                        "Students with special achievements at national and international level can avail special concession. For this, the Principal should be contacted along with the relevant certificates."
                    ].map((rule, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm mt-0.5">
                                {index + 1}
                            </span>
                            <span className="leading-relaxed">{rule}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
