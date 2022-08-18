import './App.css';
import React,{useState , useEffect} from 'react'
import Navbar from './Navbar';
import { ArrowBack } from 'react-ionicons'
function App() {
  const data = [
    {
      name: "تپسی کلاسیک",
      des: "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
      img: "https://tapsi.ir/images/home/illus-classic.png"
    },
    {
      name: "تپسی تلفنی",
      des: "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
      img: "https://tapsi.ir/images/home/illus-tel.webp"
    },
    {
      name: "تپسی لاین",
      des: "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.",
      img: "https://tapsi.ir/images/home/illus-line.webp"
    },
    {
      name: "موتوپیک",
      des: "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
      img: "https://tapsi.ir/images/home/illus-motopeyk.webp"
    },
    {
      name: "اتوپیک",
      des: "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است",
      img: "https://tapsi.ir/images/home/illus-autopeyk.webp"
    },
    {
      name: "تپسی پلاس",
      des: "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
      img: "https://tapsi.ir/images/home/illus-plus.webp"
    },
    {
      name: "تاکسی",
      des: "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.",
      img: "https://tapsi.ir/images/home/illus-taxi.webp"
    },
    {
      name: "همیار",
      des: "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
      img: "https://tapsi.ir/images/home/illus-hamyar.webp"
    },
  ];
  const [type, settype] = useState(data[0])
  const [avali, setavali] = useState(true)
  const [dovomi, setdovomi] = useState(false)
  const [sevomi, setsevomi] = useState(false)
  const [charomi, setcharomi] = useState(false)
  const [panjomi, setpanjomi] = useState(false)
  const [shishomi, setshishomi] = useState(false)
  const [haftomi, sethaftomi] = useState(false)
  const [hashtomi, sethashtomi] = useState(false)
  const Icons = (props) =>{
    return(
      <>
      <div className="icons" onClick={x}>
            <img className={props.classs} src={props.img} alt={props.imgname}/>
            <h1>{props.name}</h1>
        </div>
      </>
    )
  }
  const x = (e) =>{
    let alt = e.target.alt
    if (alt == "classic"){
      settype(data[0])
      setavali(true)
      setdovomi(false)
      setsevomi(false)
      setcharomi(false)
      setpanjomi(false)
      setshishomi(false)
      sethaftomi(false)
      sethashtomi(false)
    } else if(alt == "tel"){
      settype(data[1])
      setavali(false)
      setdovomi(true)
      setsevomi(false)
      setcharomi(false)
      setpanjomi(false)
      setshishomi(false)
      sethaftomi(false)
      sethashtomi(false)
    } else if(alt == "line"){
      settype(data[2])
      setavali(false)
      setdovomi(false)
      setsevomi(true)
      setcharomi(false)
      setpanjomi(false)
      setshishomi(false)
      sethaftomi(false)
      sethashtomi(false)
    } else if(alt == "moto"){
      settype(data[3])
      setavali(false)
      setdovomi(false)
      setsevomi(false)
      setcharomi(true)
      setpanjomi(false)
      setshishomi(false)
      sethaftomi(false)
      sethashtomi(false)
    } else if(alt == "auto"){
      settype(data[4])
      setavali(false)
      setdovomi(false)
      setsevomi(false)
      setcharomi(false)
      setpanjomi(true)
      setshishomi(false)
      sethaftomi(false)
      sethashtomi(false)
    } else if(alt == "plus"){
      settype(data[5])
      setavali(false)
      setdovomi(false)
      setsevomi(false)
      setcharomi(false)
      setpanjomi(false)
      setshishomi(true)
      sethaftomi(false)
      sethashtomi(false)
    } else if(alt == "taxi"){
      settype(data[6])
      setavali(false)
      setdovomi(false)
      setsevomi(false)
      setcharomi(false)
      setpanjomi(false)
      setshishomi(false)
      sethaftomi(true)
      sethashtomi(false)
    } else if(alt == "ham"){
      settype(data[7])
      setavali(false)
      setdovomi(false)
      setsevomi(false)
      setcharomi(false)
      setpanjomi(false)
      setshishomi(false)
      sethaftomi(false)
      sethashtomi(true)
    }
  }

  return (
    <>
    <Navbar />
    <div className="contain">
      <div className="banner">
        <div className="banner-img">
          <img src="https://tapsi.ir/images/home/banner.jpg" alt="banner" />
        </div>
        <div className="card">
          <h1>تپسی</h1>
          <h3>اپلیکیشن درخواست خودرو و پیک</h3>
          <div className="app-btn">
            <input type="submit" value="دانلود اپلیکیشن مسافران" />
            <input type="submit" value="وب اپلیکیشن مسافران" />
          </div>
          <div className="app-btn2">
            <input type="submit" value="دانلود اپلیکیشن رانندگان" />
            <input type="submit" value="ثبت‌نام راننده" />
          </div>
        </div>
      </div>
    </div>
    <div className="serv">
      <div className="serv-head">
        <h1>سرویس‌های تپسی</h1>
      </div>
        <div className="serv-icons">
          <Icons name="تپسی کلاسیک" img="https://tapsi.ir/images/home/cc-classic.png" imgname="classic" classs={avali?"active-icon":null}/>
          <Icons name="تپسی تلفنی" img="https://tapsi.ir/images/home/cc-tel.png" imgname="tel" classs={dovomi?"active-icon":null}/>
          <Icons name="تپسی لاین" img="https://tapsi.ir/images/home/cc-line.png" imgname="line" classs={sevomi?"active-icon":null}/>
          <Icons name="موتوپیک" img="https://tapsi.ir/images/home/cc-motopeyk.png" imgname="moto" classs={charomi?"active-icon":null}/>
          <Icons name="اتوپیک" img="https://tapsi.ir/images/home/cc-autopeyk.png" imgname="auto" classs={panjomi?"active-icon":null}/>
          <Icons name="تپسی پلاس" img="https://tapsi.ir/images/home/cc-plus.png" imgname="plus" classs={shishomi?"active-icon":null}/>
          <Icons name="تاکسی" img="https://tapsi.ir/images/home/cc-taxi.png" imgname="taxi" classs={haftomi?"active-icon":null}/>
          <Icons name="همیار" img="https://tapsi.ir/images/home/cc-hamyar.png" imgname="ham" classs={hashtomi?"active-icon":null}/>
        </div>
      <div className="serv-des">
        <img src={type.img} alt="classic" />
        <div className="des-head">
          <h1>{type.name}</h1>
          <p>
          {type.des}
          </p>
        </div>
      </div>
    <div className="vizheh">
      <img src="https://tapsi.ir/images/home/i-mac.png" alt="i-mac" />
      <div className="vizhe-text">
        <h1>خدمات تپسی ویژه کسب‌وکارها</h1>
        <p>پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.</p>
        <div className="etelaat-bo">
          <p className='etelaat'> <ArrowBack className="icon"
          color={'#ff5722'}
          height="20px"
          width="20px"
          /> اطلاعات بیشتر سرویس سازمانی</p>
        </div>
        <button className='login-vizheh'>ورود و ثبت نام پنل سازمانی</button>
      </div>
    </div>
    <div className="kharid-etebar">
      <div className="kharid-text">
        <h1>خرید کد اعتبار تپسی</h1>
        <p>کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند.
این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را دارند.</p>
      <button className='login-vizheh'>خرید کد اعتبار و تخفیف</button>
      </div>
      <img src="https://tapsi.ir/images/home/macbook.png" alt="macbook" />
    </div>
    <div className="emkanat">
      <ul>
        <li className="sub1-m">امکانات هوشمند
          <p className='sub1'>سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما</p>
        </li>
        <li className='sub2-m'>دسترس‌پذیری برای توان‌یابان
          <p className='sub2'>امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر کمیسیون از سفر مسافران ویلچردار</p>
        </li>
        <li className="sub3-m">درخواست تلفنی
          <p className="sub3">امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰</p>
        </li>
        <li className='sub4-m'>امکانات هوشمند
          <p className='sub4'>امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی</p>
        </li>
      </ul>
    </div>
    <div className="test"></div>
    </div>
    </>
  );
}

export default App;
