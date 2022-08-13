import './App.css';
import Navbar from './Navbar';

function App() {
  const Icons = (props) =>{
    return(
      <>
      <div className="icons">
            <img className={props.class} src={props.img} alt={props.imgname} />
            <h1>{props.name}</h1>
        </div>
      </>
    )
  }
  const x = () =>{
    console.log("object");
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
          <Icons name="تپسی کلاسیک" img="https://tapsi.ir/images/home/cc-classic.png" imgname="classic" class="active-icon" onClick={x}/>
          <Icons name="تپسی تلفنی" img="https://tapsi.ir/images/home/cc-tel.png" imgname="تپسی تلفنی"/>
          <Icons name="تپسی لاین" img="https://tapsi.ir/images/home/cc-line.png" imgname="تپسی لاین"/>
          <Icons name="موتوپیک" img="https://tapsi.ir/images/home/cc-motopeyk.png" imgname="موتوپیک"/>
          <Icons name="اتوپیک" img="https://tapsi.ir/images/home/cc-autopeyk.png" imgname="اتوپیک"/>
          <Icons name="تپسی لاین" img="https://tapsi.ir/images/home/cc-plus.png" imgname="تپسی لاین"/>
          <Icons name="تاکسی" img="https://tapsi.ir/images/home/cc-taxi.png" imgname="تاکسی"/>
          <Icons name="همیار" img="https://tapsi.ir/images/home/cc-hamyar.png" imgname="همیار"/>
        </div>
      <div className="serv-des">
        <img src="https://tapsi.ir/images/home/illus-classic.png" alt="classic" />
        <div className="des-head">
          <h1>تپسی کلاسیک</h1>
          <p>
          با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
