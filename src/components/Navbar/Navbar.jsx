import { Logo, search, favorite, cart } from "../../assets"
import CustomButton from "../CustomBtn"
import { Category } from "../../utils/Сonstants"
const Navbar = () => {
    return (
        <div className="w-[1280px] mx-auto ">
            <div className="flex items-center justify-center pt-5">
                <img src={Logo} alt="logo" />
                <CustomButton
                    btnType="button"
                    btnStyle="border-2 px-6 py-2 text-xl font-normal rounded ml-10 text-white"
                    btnText="Каталог"
                />
                <div className="relative">
                    <img src={search} alt="search" className="absolute top-2.5 left-24 w-[20px] " />
                    <input type="text" className="w-[505px] h-[40px] bg-[#2B2244] px-12 ml-20" placeholder="Поиск.." />
                </div>

                <div className="ml-20">
                    <img src={favorite} alt="favorite" className="w-8 mx-auto" />
                    <h1 className="text-white">Избранное</h1>
                </div>
                <div className="ml-10">
                    <img src={cart} alt="cart" className="w-8 mx-auto" />
                    <h1 className="text-white">Корзина</h1>
                </div>
                <CustomButton
                    btnType="button"
                    btnStyle="border-2 px-6 py-2 text-xl font-medium bg-white rounded ml-10 text-[#1F1A2D]"
                    btnText="Войти"
                />
            </div>

            <div className="mt-7">
                {
                    Category.map((val) => (
                        <CustomButton
                            key={val.id}
                            btnText={val.name}
                            btnStyle="border-2 rounded-lg px-3.5 mx-2 py-1 text-white "
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Navbar