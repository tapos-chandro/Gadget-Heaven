import Menu from "./Menu";

const Menus = () => {

    const menusData = [
        {
            id: 1,
            product:'All Product',
        },
        {   
            id: 2,
            product:'Laptop',
        },
        {
            id: 3,
            product: 'Phones',
        },
        {
            id: 4,
            product: 'Accessories',
        },
        {
            id:5,
            product: 'Smart Watches',
        },
        {
            id:6,
            product: 'MacBook',
        },
        {
            id: 7,
            product:'Iphone',
        }
        
        

    ]

    return (
        <div className="flex flex-col gap-3 bg-white py-6 rounded-2xl p-6">
            {
                menusData.map(menu => <Menu menu={menu}  key={menu.id} ></Menu>)
            }
        </div>
    );
};

export default Menus;