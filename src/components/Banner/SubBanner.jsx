import banner from '../../assets/banner.jpg'

const SubBanner = () => {

    return (
        <div className="max-w-[69.375rem] max-h-[38.188rem] rounded-4xl bg-[#b573eb11] border mx-auto ">
            <div className='w-full h-full'>
            <img src={banner} className='w-full object-fill rounded-4xl p-3 max-w-[69.375rem] max-h-[38.188rem]' alt="" />
            </div>
        </div>
    );
};

export default SubBanner;