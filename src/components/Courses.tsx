import { Users, Calendar, Building } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'Bachelor of Arts',
      image: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 320,
      intake: 4,
      description: null,
    },
    {
      title: 'Bachelor in Science',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 120,
      intake: 2,
      description: null,
    },
    {
      title: 'Diploma in Elementary Education',
      subtitle: '(D.El.Ed.)',
      image: 'https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 100,
      intake: 2,
      description: null,
    },
    {
      title: 'Bachelor in Education',
      image: 'https://images.pexels.com/photos/8500398/pexels-photo-8500398.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: 100,
      intake: 2,
      description: 'BA B.Ed / B.Sc B.Ed (4 year Integrated)',
    },
    {
      title: 'RSCIT',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      students: null,
      intake: null,
      description: null,
    },
  ];

  return (
    <section id="courses" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 text-lg">
            We offer various courses that matches your passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                {(course.students || course.intake) && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    {course.students && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>
                          {course.students} ({course.intake} Intake)
                        </span>
                      </div>
                    )}
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <Building className="w-4 h-4 text-blue-500" />
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                  {course.subtitle && (
                    <span className="block text-base font-semibold text-gray-700">
                      {course.subtitle}
                    </span>
                  )}
                </h3>

                {course.description && (
                  <p className="text-gray-600 text-sm mt-3">{course.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
