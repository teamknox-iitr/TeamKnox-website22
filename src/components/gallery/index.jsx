import React from "react";
import ImageGallery from 'react-image-gallery';
import './gallery.css';

const Gallery = () => {
    const images = [
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/Cognizance/IMG-20220327-WA0002-01_9TKCax97Y.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209781263',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/Cognizance/20220326_150558-01_m1lzgjlA_.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209782485',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/Cognizance/WhatsApp_Image_2022-03-28_at_9.27.51_PM_qkJjHi6Kfp.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209783061',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/Cognizance/IMG_6677-01_NhP-r2s4S.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209787050',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/DSC_5648__1__P3_dr8dJw.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209835285',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/20220409_131926_HDR_JXbmJRgiI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209829585',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/20220409_132403_9rYYKXAD5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209828179',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/IMG_5008_T4nwxu-F4.HEIC?ik-sdk-version=javascript-1.4.3&updatedAt=1654209807883',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/IMG_2001_xmplz39tl.HEIC?ik-sdk-version=javascript-1.4.3&updatedAt=1654209807540',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/IMG_2944_KUSXthwnq.HEIC?ik-sdk-version=javascript-1.4.3&updatedAt=1654209804848',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/20220407_115729_csfZuLoxo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209789064',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/20220406_123736_HDR_ZCPzRDaz6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209788949',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2022/20220408_155556_HDR_8lBiFZOFP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209788864',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_6046_grrBC5icWT.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209839817',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_5606_3EDHVL-5vG.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209840102',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/Brake_Event_DoiguLjHY.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209838867',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_5410_iyfuBwfhzp.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209839196',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/100_Team_KNOx_j8zK-9879.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209839383',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_4051_525IK6AaG.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209838845',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_5047_v22L_LhIS.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209838418',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_5839_sKtHTPSe7.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209839330',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_4308_5OmonJ5Qn.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209830368',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_20200126_095402_qzh840ja4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209818935',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_6553_tV7nlY0_3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209810876',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_20200109_183722_I9whzak3s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209805788',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG20200109183827_7WQjglUpF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209801605',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/1._Director_and_Faculty_Advisors_nv3QGZxZ6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209791507',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2020/IMG_20200109_210057_950_s2DZZje7s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209791174',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2019/Photo_Main_Building_VqLZoCY8z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209839858',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2019/Photo_BAJA_Event_ArEnnJn_H5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209840249',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2019/Photo_Virtuals_gXMDwLrud.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209804417',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/BAJA_2019/Photo_BAJA_2019_XMxghpgha.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1654209802703',
        },
        {
          original: 'https://ik.imagekit.io/difw0fvlzb/Gallery/gallery/32703915_2115901878450638_2744777203597180928_n_xIQWsuclp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654209780611',
        }
    ];
    return (
        <div className="gallery">
            <ImageGallery items={images} />
        </div>
    )
}

export default Gallery;