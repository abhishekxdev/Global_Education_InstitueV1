import { Users, Calendar, Building } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: 'Bachelor of Arts',
      image: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 320,
      intake: 4,
      description: 'A comprehensive undergraduate program focusing on humanities, social sciences, and liberal arts. This course develops critical thinking, communication skills, and cultural awareness. Career prospects include roles in education, journalism, civil services, public relations, social work, and further academic research.',
    },
    {
      title: 'Bachelor in Science',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 120,
      intake: 2,
      description: 'A rigorous program designed to provide a strong foundation in scientific principles and practical applications. Students gain analytical and problem-solving skills through laboratory work and theoretical study. Graduates can pursue careers in research, healthcare, biotechnology, data science, environmental science, and academia.',
    },
    {
      title: 'Diploma in Elementary Education',
      subtitle: '(D.El.Ed.)',
      image: 'https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 100,
      intake: 2,
      description: 'A specialized teacher training program aimed at preparing educators for primary and upper primary schools. The curriculum covers child psychology, pedagogy, and classroom management. This qualification is essential for aspiring teachers who wish to shape young minds and contribute to foundational education.',
    },
    {
      title: 'Bachelor in Education',
      image: 'https://images.pexels.com/photos/8500398/pexels-photo-8500398.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 100,
      intake: 2,
      description: 'BA B.Ed / B.Sc B.Ed (4 year Integrated). An integrated dual-degree program combining subject knowledge with pedagogical skills. This course is ideal for students committed to a career in secondary and higher secondary education. It streamlines the path to becoming a qualified teacher, saving one year compared to pursuing degrees separately.',
    },
    {
      title: 'RSCIT',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: null,
      intake: null,
      description: 'Rajasthan State Certificate in Information Technology. A state-recognized IT literacy course designed to empower learners with essential computer skills. Covering basics of computers, internet usage, and productivity tools, this certification enhances employability in various government and private sector jobs.',
    },
    {
      title: 'M.A.',
      subtitle: '(History, Geography, Political Science, Hindi)',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: null,
      intake: null,
      description: 'Master of Arts program offering specialization in History, Geography, Political Science, and Hindi. This advanced degree deepens knowledge and research skills in the chosen field, preparing students for higher academic pursuits and professional roles.',
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-gray-600 text-lg">
            We offer various courses that matches your passion
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="px-6 py-4 text-left font-semibold">Course Name</th>
                <th className="px-6 py-4 text-left font-semibold">Students</th>
                <th className="px-6 py-4 text-left font-semibold">Intake</th>
                <th className="px-6 py-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{course.title}</div>
                    {course.subtitle && (
                      <div className="text-sm text-gray-600">{course.subtitle}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {course.students ? (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span>{course.students}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {course.intake ? (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>{course.intake}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {course.description ? (
                      <span>{course.description}</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
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
