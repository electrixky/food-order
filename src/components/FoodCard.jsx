import React from 'react';
import {AiFillStar} from "react-icons/ai";

const FoodCard = () => {
    return (
        <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg">
            <img
                src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
                alt="Onion Pizza"
                className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div>
                <h2>Onion Pizza</h2>
                <span>₴150</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, pariatur.</p>
            <div>
                <span>
                    <AiFillStar/> 4.5
                </span>
            </div>
        </div>
    );
};

export default FoodCard;