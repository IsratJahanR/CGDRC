const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Child Growth & Development Research Centre</h3>
            <p className="text-gray-400 text-sm">
              Compassionate care for mothers and children through every stage of development.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Pregnancy Counselling</li>
              <li>Child Development</li>
              <li>Family Therapy</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Care Guides</li>
              <li>Community Forum</li>
              <li>Educational Materials</li>
              <li>Emergency Contacts</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: cgdrc@gmail.com</li>
              <li>Phone: +1 (555) 123-CARE</li>
              <li>Emergency: +1 (555) 911-HELP</li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Child Growth & Development Research Centre. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;