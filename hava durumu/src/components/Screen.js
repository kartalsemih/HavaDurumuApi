import React from 'react'
import { Weather, useDays } from './ContextWeather';
import '../App.css'



// images
import bulutluImg from "../img/bulutlu.png";
import gunesliImg from "../img/gunesli.jpg";
import yagmurluImg from "../img/yagmurlu.png";
import karliImg from "../img/karli.jpg";
// images

function Screen() {
    return (
        <Weather>
            <ScreenContent />
        </Weather>
    );
}

function ScreenContent() {

    const cityOptions = [
        "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin",
        "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
        "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan",
        "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul",
        "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir",
        "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş",
        "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas",
        "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
    ];

    const { days, status, city, degrees, pickCity } = useDays();

    const handleCitySelect = (city) => {
        pickCity.setGetCity(city);
    };

    return (
        <div>
            <div className='App pt-3'>
                <h1>{city.name}</h1>
                <div className="container mt-3">
                    <div className="row  ">
                        <div className="col-lg-12 ">
                            <div className="row justify-content-center ">
                                <div className="col-lg-2">
                                    <div className="card" style={{ height: '262px', backgroundColor: '#2ECC71  ' }} >
                                        <img src={status.status1 === "Clouds" ? bulutluImg :
                                            status.status1 === "Clear" ? gunesliImg :
                                                status.status1 === "Rain" ? yagmurluImg :
                                                    status.status1 === "Snow" ? karliImg : ""}
                                            className="card-img-top mx-auto mt-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                        <div className="card-body">
                                            <p className="card-text">{days.day1}</p>
                                            en yüksek : <strong>{degrees.degree1max}&deg;</strong>
                                            <br />
                                            en düşük : <strong>{degrees.degree1min}&deg;</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="card" style={{ height: '262px', backgroundColor: '#58D68D' }} >
                                        <img src={status.status2 === "Clouds" ? bulutluImg :
                                            status.status2 === "Clear" ? gunesliImg :
                                                status.status2 === "Rain" ? yagmurluImg :
                                                    status.status2 === "Snow" ? karliImg : ""}
                                            className="card-img-top mx-auto mt-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                        <div className="card-body">
                                            <p className="card-text">{days.day2}</p>
                                            en yüksek : <strong>{degrees.degree2max}&deg;</strong>
                                            <br />
                                            en düşük : <strong>{degrees.degree2min}&deg;</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="card" style={{ height: '262px', backgroundColor: '#82E0AA ' }} >
                                        <img src={status.status3 === "Clouds" ? bulutluImg :
                                            status.status3 === "Clear" ? gunesliImg :
                                                status.status3 === "Rain" ? yagmurluImg :
                                                    status.status3 === "Snow" ? karliImg : ""}
                                            className="card-img-top mx-auto mt-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                        <div className="card-body">
                                            <p className="card-text">{days.day3}</p>
                                            en yüksek : <strong>{degrees.degree3max}&deg;</strong>
                                            <br />
                                            en düşük : <strong>{degrees.degree3min}&deg;</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="card" style={{ height: '262px', backgroundColor: '#ABEBC6' }} >
                                        <img src={status.status4 === "Clouds" ? bulutluImg :
                                            status.status4 === "Clear" ? gunesliImg :
                                                status.status4 === "Rain" ? yagmurluImg :
                                                    status.status4 === "Snow" ? karliImg : ""}
                                            className="card-img-top mx-auto mt-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                        <div className="card-body">
                                            <p className="card-text">{days.day4}</p>
                                            en yüksek : <strong>{degrees.degree4max}&deg;</strong>
                                            <br />
                                            en düşük : <strong>{degrees.degree4min}&deg;</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="card" style={{ height: '262px', backgroundColor: '#D5F5E3' }} >
                                        <img src={status.status5 === "Clouds" ? bulutluImg :
                                            status.status5 === "Clear" ? gunesliImg :
                                                status.status5 === "Rain" ? yagmurluImg :
                                                    status.status5 === "Snow" ? karliImg : ""}
                                            className="card-img-top mx-auto mt-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                        <div className="card-body">
                                            <p className="card-text">{days.day5}</p>
                                            en yüksek : <strong>{degrees.degree5max}&deg;</strong>
                                            <br />
                                            en düşük : <strong>{degrees.degree5min}&deg;</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown mt-5">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Şehir Seçiniz
                    </button>
                    <ul className="dropdown-menu dropdown-scroll">
                        {cityOptions.map((city, index) => (
                            <li key={index} onClick={() => handleCitySelect(city)}>
                                <a className="dropdown-item" href="#">{city}</a>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Screen