// the day will be what you make it, so rise like the sun and burn..
import { useState } from "react";

let clearTime;
function PageFigma() {
    const [allValue, setAllValue] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        second: 0
    });
    const startTimer = () => {
        const distance = new Date("may 27, 2023") - new Date();
        distance < 0 ? clearInterval(clearTime) : setAllValue({
            ...allValue,
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(distance / (1000 * 60 * 60) % 24),
            minutes: Math.floor((distance / 1000 / 60) % 60),
            second: Math.floor((distance / 1000) % 60)
        })
    };
    clearTime = setInterval(() => {
        startTimer()
    }, 1000);

    return (
        <>
            <div className="text-center my-4">
                <h1 className="burn">Burn, Auction, Raffle and Trade</h1>
                <h3>from leading creators and brands</h3>
            </div>
            
            <div className="text-center container grrid backImg my-5">
                <div className="backTxt">
                    <button className="info text-center">
                        <div>
                            <img className="pngBtn" src="https://i.stack.imgur.com/ILTQq.png" alt="sd" />
                            UPCOMING
                        </div>
                    </button>
                    <div className="py-5 aprr">
                        <p>Mon, Apr 18</p>
                        <p className="dr24">Darko #2452</p>
                        <button className="info my-4">View</button>
                    </div>
                </div>
            </div>
            <h1 className="timeTable">{`${allValue.days}d:${allValue.hours}h:${allValue.minutes}m:${allValue.second}s`}</h1>
            <h1 className="top my-5">Top Collections</h1>

            <div className="container grrid">
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img">

                            </div>
                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://cdn.pixabay.com/photo/2023/01/07/09/20/ai-generated-7702855__340.jpg" alt="asa" />
                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>

                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img">

                            </div>
                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://cdn.pixabay.com/photo/2023/01/07/09/19/ai-generated-7702851_1280.jpg" alt="asa" />
                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>
                            <div className="line img"></div>

                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://static.displate.com/857x1200/displate/2023-03-03/e7b9d3fc30d1cd26bf9a14e047abd49a_b1e82183cfd81cd9f55f213e7c9bc3c2.jpg" alt="asa" />
                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
            </div>
            <div className="container grrid my-5">
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img"></div>

                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://cdnb.artstation.com/p/assets/images/images/052/517/593/large/mikey-bergman-1a939abf-7773-4c2c-9f99-0ee146d015c0.jpg?1660008557" alt="asa" />

                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img"></div>

                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://images.nightcafe.studio/jobs/IEx7tbo9VcSFgfLW1105/IEx7tbo9VcSFgfLW1105_2x.jpg?tr=w-1600,c-at_max" alt="dd" />
                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img"></div>

                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://img.freepik.com/premium-photo/kawaii-baby-dragon-cute-bright-colorful-3d-render-animation-adorable-dragon-baby-with-large-eyes-realistic-scales-his-natural-habitat-digital-art-style-illustration-painting_743201-2234.jpg" alt="asa" />

                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
            </div>
            <div className="container grrid">
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img"></div>

                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rX6DiBgIoKzSt9hWNdaHjabmF5VwSbdEsdayFc8eIJSjJBOrPIyReMtGZeFv0E0quts&usqp=CAU" alt="asa" />
                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img"></div>
                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5LvzC8RVf-Z_GHU8vT2bVvW5lO7H8YMt-CRKzAO2IsM3iKgfcrt_cRVf7LKSQsY0y-M&usqp=CAU" alt="asa" />
                        </div>
                    </div>
                    <div className="my-4 container  grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container  grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
                <div className="drag">
                    <div className="Main_img">
                        <div className="d-flex between mx-3 my-1">
                            <div className="text-center img">
                                <p className="text-white-50">MoonRank</p>
                                <p className="Clr">1239</p>
                            </div>

                            <div className="line img"></div>

                            <div className="text-center img">
                                <p className="text-white-50">HowRare.is Rank</p>
                                <p className="Clr">1862</p>
                            </div>
                        </div>
                        <div className="text-center img">
                            <img className="cardImg" src="https://wallpaperaccess.com/full/111699.jpg" alt="asa" />
                        </div>
                    </div>
                    <div className="my-4 container grrid d-flex str">
                        <p>
                            <strong>Price:</strong> <span className="text-white-50">5642.31 sol</span>
                        </p>
                        <span className="text-white-50">($ 1,512.48)</span>
                    </div>
                    <div className="boxMin container grrid text-center">
                        <h3 className="drko">Darko #2634</h3>
                        <p className="drko">Drakos Unchained - The Eruption</p>
                    </div>
                </div>
            </div>

            <h1 className="topp">Raffle Tickets</h1>

            <div className="container grrid lines my-5"></div>
            <div className="container grrid my-5">
                <div className="coinsBox mx-2">
                    <div className="raf">
                        <h1 className="py-2">Raffle Tickets</h1>
                    </div>
                    <div className="text-center d-flex space">
                        <div>
                            <div className="minBorder"></div>
                            <div className="minBorders"></div>
                            <div className="minBorder"></div>
                        </div>
                        <div className="mx-5">
                            <img className="coinImg" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png" alt="coins" />
                        </div>
                        <div>
                            <div className="minBorder"></div>
                            <div className="minBorder my-5"></div>
                            <div className="minBorder"></div>
                        </div>
                    </div>
                    <div className="text-center my-2 Unchained">
                        <p className="to">Darko Unchained</p>
                    </div>
                </div>

                <div className="coinsBox mx-2">
                    <div className="raf">
                        <h1 className="py-2">Raffle Tickets</h1>
                    </div>
                    <div className="text-center d-flex space">
                        <div>
                            <div className="minBorder"></div>
                            <div className="minBorders"></div>
                            <div className="minBorder"></div>
                        </div>
                        <div className="mx-5">
                            <img className="coinImg" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png" alt="coins" />
                        </div>
                        <div>
                            <div className="minBorder"></div>
                            <div className="minBorder my-5"></div>
                            <div className="minBorder"></div>
                        </div>
                    </div>
                    <div className="text-center my-2 Unchained">
                        <p className="to">Darko Unchained</p>
                    </div>
                </div>

                <div className="coinsBox mx-2">
                    <div className="raf">
                        <h1 className="py-2">Raffle Tickets</h1>
                    </div>
                    <div className="text-center d-flex space">
                        <div>
                            <div className="minBorder"></div>
                            <div className="minBorders my-5"></div>
                            <div className="minBorder"></div>
                        </div>
                        <div className="mx-5">
                            <img className="coinImg" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png" alt="coins" />
                        </div>
                        <div>
                            <div className="minBorder"></div>
                            <div className="minBorder my-5"></div>
                            <div className="minBorder"></div>
                        </div>
                    </div>
                    <div className="text-center my-2 Unchained">
                        <p className="to">Darko Unchained</p>
                    </div>
                </div>
            </div>
            <div className="container grrid lines my-5"></div>
            <h1 className="topp">Raffle State</h1>


            <div className="container grrid my-5">
                <div className="secdrag">
                    <div className="secMain_img text-center">
                        <div className="text-center">
                            <img className="cardImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0349ec83167135.5d34653fb6a15.jpg" alt="asa" />
                        </div>
                        <div className="text-center">
                            <h1>Darko #2634</h1>
                        </div>
                        <div className="container grrid winner d-flex">
                            <p>936 sold</p>
                            <p>170 winner</p>
                        </div>
                        <div className="lin"></div>
                        <div className="d-flex minBoxCen">
                            <div className="minBoxx mx-2"></div>
                            <div>
                                <p className="colr">Raffle open!</p>
                            </div>
                        </div>
                        <button className="infos">viwe Raffle</button>
                    </div>
                </div>

                <div className="seccdrag">
                    <div className="seccMain_img text-center">
                        <div className="text-center">
                            <img className="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KB-5op1AHnKnLfsqflf3_ogJtsIcUjIObA&usqp=CAU" alt="asa" />
                        </div>
                        <div className="text-center">
                            <h1>Darko #2634</h1>
                        </div>
                        <div className="container grrid winner d-flex">
                            <p>936 sold</p>
                            <p>170 winner</p>
                        </div>
                        <div className="lin"></div>
                        <div className="d-flex minBoxCen">
                            <div className="minsBoxx mx-2"></div>
                            <div>
                                <p className="colrs text-white-50">Raffle open!</p>
                            </div>
                        </div>
                        <button className="infosun">viwe Raffle</button>
                    </div>
                </div>

                <div className="seccdrag">
                    <div className="seccMain_img text-center">
                        <div className="text-center">
                            <img className="cardImg" src="https://as2.ftcdn.net/jpg/05/62/55/89/220_F_562558916_oSH0bi02tTMeKSJ0mdvhF2Lnyw9zeUAD.jpg" alt="asa" />
                        </div>
                        <div className="text-center">
                            <h1>Darko #2634</h1>
                        </div>
                        <div className="container grrid winner d-flex">
                            <p>936 sold</p>
                            <p>170 winner</p>
                        </div>
                        <div className="lin"></div>
                        <div className="d-flex minBoxCen">
                            <div className="minsBoxx mx-2"></div>
                            <div>
                                <p className="colrs text-white-50">Raffle open!</p>
                            </div>
                        </div>
                        <button className="infosun">viwe Raffle</button>
                    </div>
                </div>
            </div>
            <h1 className="topp">Auctions State</h1>
            <div className="container grrid my-5">
                <div className="secdrag">
                    <div className="secMain_img text-center">
                        <div className="text-center">
                            <img className="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrF3NmjgRq4RHeU3Wfc4KI32EHZeLFLy-jpD_ZYuW-6z02QvI1c7OtFa2SbyUEj8Guwk&usqp=CAU" alt="asa" />
                        </div>
                        <div className="text-center">
                            <h1>Darko #2634</h1>
                        </div>
                        <div className="container grrid winner d-flex">
                            <p>936 sold</p>
                            <p>170 winner</p>
                        </div>
                        <div className="lin"></div>
                        <div className="d-flex minBoxCen">
                            <div className="minBoxx mx-2"></div>
                            <div>
                                <p className="colr">Raffle open!</p>
                            </div>
                        </div>
                        <button className="infos">viwe Raffle</button>
                    </div>
                </div>

                <div className="seccdrag ">
                    <div className="seccMain_img text-center">
                        <div className="text-center">
                            <img className="cardImg" src="https://pbs.twimg.com/media/Fef7i4EXwAATXpq?format=jpg&name=4096x4096" alt="asa" />
                        </div>
                        <div className="text-center">
                            <h1>Darko #2634</h1>
                        </div>
                        <div className="container grrid winner d-flex">
                            <p>936 sold</p>
                            <p>170 winner</p>
                        </div>
                        <div className="lin"></div>
                        <div className="d-flex minBoxCen">
                            <div className="minsBoxx mx-2"></div>
                            <div>
                                <p className="colrs text-white-50">Raffle open!</p>
                            </div>
                        </div>
                        <button className="infosun">viwe Raffle</button>
                    </div>
                </div>

                <div className="seccdrag">
                    <div className="seccMain_img text-center">
                        <div className="text-center">
                            <img className="cardImg" src="https://www.shutterstock.com/image-illustration/super-cute-funny-small-red-260nw-2269249459.jpg" alt="asa" />
                        </div>
                        <div className="text-center">
                            <h1>Darko #2634</h1>
                        </div>
                        <div className="container grrid winner d-flex">
                            <p>936 sold</p>
                            <p>170 winner</p>
                        </div>
                        <div className="lin"></div>
                        <div className="d-flex minBoxCen">
                            <div className="minsBoxx mx-2"></div>
                            <div>
                                <p className="colrs text-white-50">Raffle open!</p>
                            </div>
                        </div>
                        <button className="infosun">viwe Raffle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageFigma;