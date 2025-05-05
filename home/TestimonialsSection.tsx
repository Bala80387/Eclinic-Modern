
import React from 'react';

const testimonials = [
  {
    content: "The online consultation was incredibly convenient. The doctor was attentive and took time to understand my concerns. The follow-up was also excellent.",
    author: "Sarah Johnson",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    content: "I've been taking my family to Eclinic for years. The pediatric care is exceptional and the staff always makes my children feel comfortable.",
    author: "Michael Chen",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    content: "The emergency care team saved my life. Their quick response and expertise made all the difference. I can't thank them enough.",
    author: "David Rodriguez",
    role: "Emergency Patient",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    content: "The dental department is fantastic! Modern equipment, pain-free procedures, and a friendly team. My smile has never looked better.",
    author: "Emily Watson",
    role: "Dental Patient",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-eclinic-600 tracking-wider uppercase">Patient Stories</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">What Our Patients Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real experiences from people who have trusted us with their health and wellness.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-md p-6 relative animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-eclinic-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.902-2.97a6.342 6.342 0 0 1 2.56-2.1c.386-.16.81-.25 1.254-.404.56-.2 1.156-.37 1.704-.694.714-.428 1.216-1.004 1.603-1.76.143-.253.283-.513.475-.726.085-.086.194-.125.34-.137.274-.023.51.012.772.195.262.183.372.425.378.65.9.238-.097.453-.22.635-.375.56-.907 1.03-1.465 1.438-.557.407-1.137.765-1.713 1.14-.426.28-.826.595-1.22.92-.247.204-.47.43-.652.7a3.35 3.35 0 0 0-.296.435c-.06.104-.056.22-.037.344.02.12.073.22.156.276.586.392 1.37.297 1.93-.215.643-.586 1.027-1.395 1.108-2.246.066-.71.017-1.415-.144-2.117-.09-.39-.242-.87-.428-1.304-.285-.674-.62-1.23-1.028-1.774-.57-.756-1.258-1.393-2.06-1.935-1.054-.712-2.247-1.018-3.51-.882-.917.1-1.73.486-2.283 1.104-.557.614-.813 1.466-.628 2.376.2.98.677 1.785 1.255 2.456.66.77 1.45 1.272 2.286 1.67.51.245 1.033.417 1.55.608.366.137.73.263 1.065.45.334.182.637.398.908.642.543.498.9 1.144.944 1.904.022.397-.01.802-.13 1.21a3.012 3.012 0 0 1-.433.99c-.143.232-.298.434-.49.607-.15.135-.34.254-.54.288-.304.05-.58-.088-.79-.27-.136-.113-.23-.262-.308-.428a2.812 2.812 0 0 1-.257-1.214c-.008-.32-.03-.607.046-.897.076-.29.213-.564.327-.836.24-.574.17-1.008-.237-1.298-.41-.29-1.186-.232-1.74.183-.428.318-.698.766-.837 1.262-.147.522-.13 1.04-.028 1.56.066.33.173.624.33.9.16.277.35.546.554.806.388.486.844.916 1.45 1.146.478.184 1.462.207 1.834 0z"/>
                </svg>
              </div>
              
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
