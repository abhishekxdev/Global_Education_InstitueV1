import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'B.A. Graduate, 2023',
      text: 'GEI provided me with an exceptional learning experience. The faculty is incredibly supportive, and the practical approach to education helped me develop real-world skills that are invaluable in my career today.',
    },
    {
      name: 'Rahul Patel',
      role: 'B.Sc. Student',
      text: 'The blend of theoretical knowledge and hands-on learning at GEI is remarkable. The institute has state-of-the-art facilities and the teachers genuinely care about student success. I feel well-prepared for my future.',
    },
    {
      name: 'Anjali Verma',
      role: 'B.A. Student',
      text: 'Choosing GEI for my postgraduate studies was the best decision. The curriculum is comprehensive, and the emphasis on critical thinking and creativity has transformed my perspective on education and learning.',
    },
    {
      name: 'Vikram Singh',
      role: 'B.Ed. Graduate, 2022',
      text: 'The B.Ed. program at GEI equipped me with practical teaching skills and educational theories. The supportive environment and experienced mentors helped shape me into a confident educator ready to inspire students.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from students and alumni about their transformative experiences at Global Education Institute
          </p>
        </div>

        <div className="relative overflow-hidden pause-on-hover">
          <div className="flex animate-marquee gap-8 w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-[400px] flex-shrink-0"
              >
                <div className="flex items-start mb-6">
                  <Quote className="text-orange-500 w-10 h-10 flex-shrink-0" />
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
