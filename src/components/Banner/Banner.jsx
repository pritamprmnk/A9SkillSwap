import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[250px] md:h-[400px] lg:h-[550px]">
            
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                    src="/assets/WatercolorPaintingWorkshop.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full h-full">
                <img
                    src="/assets/BasicWoodworkingSkills.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full h-full">
                <img
                    src="/assets/BeginnerPhotographyEssentials.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full h-full">
                <img
                    src="/assets/YogaforStressRelief.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;
