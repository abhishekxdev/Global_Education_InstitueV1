export default function InstituteInfo() {
  const stats = [
    { value: '15+', label: 'Certified Teachers' },
    { value: '1000+', label: 'Students' },
    { value: '5+', label: 'Courses' },
    { value: '20+', label: 'Awards Won' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-l-4 border-blue-600 pl-6 py-4 bg-white">
          <p className="text-xl md:text-2xl text-gray-700 italic">
            "True Education Goes Beyond Books; It Builds Minds, Skills, And Character."
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
          <div className="absolute inset-0">
            {/* Background image removed as per white background request */}
            <div className="absolute inset-0 bg-white"></div>
          </div>

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-orange-500">Global</span>{' '}
              <span className="text-blue-500">Education</span>{' '}
              <span className="text-black">Institute</span>
            </h2>

            <div className="max-w-3xl mb-16">
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                Global Education Institute (GEI), located in Sanchore, Rajasthan, is a premier
                educational institution dedicated to fostering academic excellence and
                holistic development in students. Established in 2013, the institute is affiliated
                with Jai Narain Vyas University, Jodhpur, and offers a wide range of
                undergraduate and postgraduate programs aimed at providing students with
                a solid academic foundation and a bright future. GEI is committed to creating
                a learning environment that promotes intellectual growth, creativity, and
                critical thinking. The institute offers a variety of programs in fields such as Arts,
                Science, and Education, catering to the diverse academic interests of students.
                With a focus on practical learning, the institute ensures that students gain
                hands-on experience and are well-prepared for the challenges of the real
                world.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
