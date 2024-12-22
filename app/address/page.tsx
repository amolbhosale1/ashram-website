export default function Address() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h1>
            <div className="prose">
              <p className="text-gray-600">
                Babaji Ashram<br />
                123 Spiritual Path<br />
                Rishikesh, Uttarakhand<br />
                India - 249201
              </p>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How to Reach</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>By Air: Nearest airport is Jolly Grant Airport (30km)</li>
                <li>By Train: Rishikesh Railway Station (5km)</li>
                <li>By Bus: Rishikesh Bus Stand (3km)</li>
              </ul>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d78.12345678901234!3d30.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzM0LjQiTiA3OMKwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}