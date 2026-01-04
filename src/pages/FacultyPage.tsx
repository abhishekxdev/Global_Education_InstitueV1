import { Download, GraduationCap, Award, BookOpen, Users, Trophy, Star } from 'lucide-react';

export default function FacultyPage() {
  const facultyQualities = [
    {
      icon: GraduationCap,
      title: "Highly Qualified",
      description: "All faculty members hold advanced degrees (M.A., M.Sc., Ph.D.) from prestigious universities"
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "Years of practical teaching experience combined with industry insights"
    },
    {
      icon: BookOpen,
      title: "Research & Publications",
      description: "Active contributors to academic research with numerous publications in reputed journals"
    },
    {
      icon: Users,
      title: "Student-Centric Approach",
      description: "Dedicated to personalized mentorship and holistic student development"
    },
    {
      icon: Trophy,
      title: "Award-Winning Educators",
      description: "Recognized for excellence in teaching and contribution to education"
    },
    {
      icon: Star,
      title: "Continuous Learning",
      description: "Regular participation in workshops, seminars, and professional development programs"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Faculty</h1>
          <p className="text-orange-400 text-lg">Meet our experienced and dedicated teaching staff</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Faculty Qualities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Our Faculty Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyQualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{quality.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{quality.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Faculty Lists Section */}
        <div className="bg-white rounded-lg p-12 shadow-md mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Faculty Lists</h2>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/11CD9QDh4EFeFpeyHAIe6rVKrwCVeQkbz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors flex items-center gap-3 text-lg font-semibold shadow-md hover:shadow-lg"
            >
              <Download className="w-6 h-6" />
              B.A(B.Ed)/ B.Sc(B.Ed) Faculty List
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-400 text-lg mb-4">
            For faculty-related queries, please contact the administrative office
          </p>
          <p className="text-orange-400 text-lg">
            Phone: +91 9950885151 | Email: globalsanchore@email.com
          </p>
        </div>
      </div>
    </div>
  );
}
