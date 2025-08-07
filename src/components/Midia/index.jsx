// eslint-disable-next-line react/prop-types
export default function Midia({ size = 50 }) {
    return (
        <div className='midia'>
            <a href="#">
                <img src={`https://img.icons8.com/?size=${size}&id=19318&format=png&color=000000`} alt='Youtube' />
            </a>
            <a href="#">
                <img src={`https://img.icons8.com/material-rounded/${size}/000000/github.png`} alt='GitHub' />
            </a>
            <a href="#">
                <img src={`https://img.icons8.com/?size=${size}&id=Xy10Jcu1L2Su&format=png&color=000000`} alt='Instagram' />
            </a>
            <a href="#">
                <img src={`https://img.icons8.com/color/${size}/000000/facebook.png`} alt='Facebook' />
            </a>
            <a href="#">
                <img src={`https://img.icons8.com/color/${size}/000000/tiktok.png`} alt='Tiktok' />
            </a>
            <a href="#">
                <img src={`https://img.icons8.com/?size=${size}&id=13930&format=png&color=000000`} alt='Linkedin' />
            </a>
        </div>
    )
}