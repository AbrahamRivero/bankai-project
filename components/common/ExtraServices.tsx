import { HeadphonesIcon, Shield, Trophy, Truck } from "lucide-react";

const ExtraServices = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center">
          <Trophy className="w-12 h-12 text-amber-500 mr-4" />
          <div>
            <h3 className="font-semibold">High Quality</h3>
            <p className="text-sm text-gray-600">crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center">
          <Shield className="w-12 h-12 text-amber-500 mr-4" />
          <div>
            <h3 className="font-semibold">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center">
          <Truck className="w-12 h-12 text-amber-500 mr-4" />
          <div>
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-sm text-gray-600">Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center">
          <HeadphonesIcon className="w-12 h-12 text-amber-500 mr-4" />
          <div>
            <h3 className="font-semibold">24 / 7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
