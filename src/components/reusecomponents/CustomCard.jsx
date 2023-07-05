/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { favorite } from "../../assets"
import CustomBtn from "../CustomBtn"

const CustomCard = ({props}) => {
    // console.log(props);
    return (
        <div>
            <div className={  `flex justify-evenly items-center bg-[#2B2244] mb-10 w-[300px] h-[220px] pr-2 rounded-lg`}>

                <div className="pl-3 rounded-lg w-[270px] h-[160px] mb-5">
                    <img src={props.card_img}
                        className="w-[130px]  h-[190px]"
                        alt="python" />
                </div>

                <div id="second_part">

                    <div className="flex justify-evenly flex items-center ">
                        <span className="flex justify-center items-center pl-6">
                            <img src="https://i.pinimg.com/originals/98/4d/22/984d22fce5cae2c01473f4abe8063fd1.png"
                                className="w-[20px] "
                                alt="star" />
                            <h1 className="text-white">4.9</h1>
                        </span>
                        <img src={favorite} alt="favorite" className="w-8 h-6 ml-[120px] mr-2 mx-auto" />
                    </div>

                    <div className="pt-4">
                        <h1 className="text-white text-[15px] h-[80px] pl-1.5 h-[100%] font-normal">{props.title}</h1>
                        <h1 className="text-[14px] font-normal text-gray-300 pl-1.5 h-[100%]">{props.author}</h1>

                        <div className="flex justify-between items-center mt-6 ml-1 h-[20px]">
                            <CustomBtn
                                btnType="button"
                                btnStyle="border-2 px-2 py-[2px] text-[14px] font-medium bg-white rounded  text-[#1F1A2D]"
                                btnText="В корзину"
                            />
                            <h1 className="text-[20px] text-white">{props.price}₽</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomCard