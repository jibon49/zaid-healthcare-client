import product1 from "/product4.png"

const ProductsCard = () => {
    return (
        <div className="mt-20 grid grid-cols-3 gap-5 max-w-7xl mx-auto">

            <div className="hero bg-base-200 border-accent border-2">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={product1} className="w-16 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Vitamin E</h1>
                        <p className="py-3">সারা বাংলাদেশ ফ্রি ডেলিভারি</p>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product1} className="w-16 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Vitamin E</h1>
                        <p className="py-6">সারা বাংলাদেশ ফ্রি ডেলিভারি</p>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product1} className="w-16 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Vitamin E</h1>
                        <p className="py-6">সারা বাংলাদেশ ফ্রি ডেলিভারি</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;