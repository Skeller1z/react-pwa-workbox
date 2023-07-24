import React from 'react';
import WhyUs1 from '../../Assets/images/whyus1.png';
import WhyUs2 from '../../Assets/images/pile-coins-forming-graph.jpg';
import WhyUs3 from '../../Assets/images/8104960.jpg';
import WhyUs4 from '../../Assets/images/business-concept-with-team-close-up.jpg';

type Props = {};

const WhyUsSection = (props: Props) => {
  return (
    <>
    <div className='relative '>
      <div className='absolute top-24 right-[720px] bg-orange-300 w-[80px] h-[80px] rounded-full animate-bounce animate-infinite animate-duration-[3000ms]'></div>
      <div className='absolute top-20 right-[700px] bg-orange-500 w-[50px] h-[50px] rounded-full animate-bounce animate-infinite animate-duration-[3000ms]'></div>
      <section className="h-screen justify-center overflow-y-auto" id="WhyUsSection">
        <div className="text-center pt-[150px] pb-[50px]">
          <span className="font-semibold text-[5vh] text-gray-700 uppercase animate-fade-down animate-once animate-ease-linear animate-fade-right animate-once">
            WHY US?
          </span>
        </div>

        {/* card */}
        <div className="flex flex-wrap ml-10 mr-10 justify-center sm:justify-between ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover: duration-300">
            <img className="w-full" src={WhyUs1} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Gain The Trust</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #trust
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #franchise
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #console
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover: duration-300">
            <img className="w-full" src={WhyUs2} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Cost Reduction</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #spend
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #graph
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #cost
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover: duration-300">
            <img className="w-full" src={WhyUs3} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Simplify</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #docs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #person
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #system
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover: duration-300">
            <img className="w-full" src={WhyUs4} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">We Are The First</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #first
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #services
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #bsv
              </span>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>

  );
};

export default WhyUsSection;
