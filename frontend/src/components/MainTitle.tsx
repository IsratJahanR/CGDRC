import { Button } from "@/components/ui/button";

const MainTitle = () => {
  return (
    <section className="bg-gradient-to-r from-healthcare-blue to-healthcare-teal text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          MomCare Platform
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Pregnancy & Child Counselling
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Your trusted companion for pregnancy journey and child development. 
          Connect with certified counsellors and access personalized care for you and your child.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-healthcare-blue hover:bg-gray-100 text-lg px-8 py-3">
            Find a Counsellor
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-blue text-lg px-8 py-3">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainTitle;