

const Features = () => {
    return (
        <div className="mt-20 p-4 md:p-20 bg-[#337744] text-white
        ">
            {/* max-w-7xl mx-auto */}
            <div className="flex flex-col md:flex-row justify-around gap-32">
                <h1 className="text-4xl font-bold"><span className="text-[#609A33]">Essential Features</span> of
                    Our health supplement</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda porro expedita eaque magnam possimus perspiciatis. Id deleniti aliquam voluptatem quo?</p>
            </div>
            <div className="mt-20 flex text-justify flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <img className="w-16" src="/recycle.png" alt="" />
                        <h1 className="text-xl font-bold mt-5">Natural Ingredients</h1>
                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque ipsum eligendi voluptates tempora possimus quisquam cupiditate aperiam placeat debitis!</p>
                    </div>

                    <div>
                        <img className="w-16" src="/recycle.png" alt="" />
                        <h1 className="text-xl font-bold mt-5">Natural Ingredients</h1>
                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque ipsum eligendi voluptates tempora possimus quisquam cupiditate aperiam placeat debitis!</p>
                    </div>

                    <div>
                        <img className="w-16" src="/recycle.png" alt="" />
                        <h1 className="text-xl font-bold mt-5">Natural Ingredients</h1>
                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque ipsum eligendi voluptates tempora possimus quisquam cupiditate aperiam placeat debitis!</p>
                    </div>

                    <div>
                        <img className="w-16" src="/recycle.png" alt="" />
                        <h1 className="text-xl font-bold mt-5">Natural Ingredients</h1>
                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque ipsum eligendi voluptates tempora possimus quisquam cupiditate aperiam placeat debitis!</p>
                    </div>
                </div>
                <div className="mt-5">
                    <video className="w-full md:w-4/5 mx-auto" controls>
                        <source src="/morning.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </div>
    );
};

export default Features;