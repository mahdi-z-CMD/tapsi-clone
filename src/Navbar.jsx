import React,{useEffect , useState} from 'react'
import './Navbar.css'
import { Menu } from 'react-ionicons'
import { Close } from 'react-ionicons'
const Navbar = () =>{
    const [arz, setarz] = useState(0)
    const menu = document.querySelector(".icon-menu")
    const close = document.querySelector(".icon-close")
    const drop = document.querySelector(".drop")
    let x = true
    const open_close = () =>{
        if (window.innerWidth <= 664) {
            if (x) {
                menu.style.display = "none"
                close.style.display = "block"
                drop.style.display = "block"
                x = false
            } else {
                menu.style.display = "block"
                drop.style.display = "none"
                close.style.display = "none"
                x = true
            }
        }
    }
    useEffect(() => {
        const updateWindowDimensions = () => {
          const newHeight = window.innerWidth;
          setarz(newHeight);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
      }, []);
    try {
        if (arz >= 664) {
            menu.style.display = "none"
            close.style.display = "none"
            
         } else {
            menu.style.display = "block"
            close.style.display = "none"
         }
    } catch (error) {
    }
    return(
        <>
        <div className="navbar">
            <div className="icon-menu">
            <Menu
                color={'#00000'}
                height="40px"
                width="40px"
                onClick={open_close}
                />
            </div>
            <div className="icon-close">
            <Close
                color={'#00000'}
                height="40px"
                width="40px"
                onClick={open_close}
                />
            </div>
            <nav>
                <ul>
                    <li><a href="#">پشتیبانی</a></li>
                    <li><a href="#">معرفی راننده</a></li>
                    <li><a href="#">خدمات کسب‌وکارها</a></li>
                    <li><a href="#">فرصت‌های شغلی</a></li>
                    <li><a href="#">وبلاگ</a></li>
                    <li><a href="#" className='download-btn'>دانلود تپسی</a></li>
                </ul>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="22" viewBox="0 0 102 22">
                        <g fill-rule="evenodd">
                            <path fill="#000" d="M102 5.946h-3.222v4.28H91.8v-4.28h-3.221v4.28h-5.637a1.878 1.878 0 0 1-1.879-1.872V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873 1.878 1.878 0 0 1-1.879-1.873V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873h-1.879V5.946h-3.22v4.28h-17.18v3.212h3.758v.535c0 2.656-2.167 4.816-4.831 4.816-2.664 0-4.832-2.16-4.832-4.816v-3.746H37.58v3.746c0 4.426 3.613 8.027 8.053 8.027 4.44 0 8.052-3.6 8.052-8.027v-.535H68.985a5.09 5.09 0 0 0 3.489-1.381 5.09 5.09 0 0 0 3.49 1.38 5.09 5.09 0 0 0 3.489-1.38 5.089 5.089 0 0 0 3.489 1.38H102V5.947z"></path>
                            <path fill="#000" d="M84.702 19.297h3.854V22h3.304v-5.946h-7.158zM102 0h-6.561v2.973H102z"></path>
                            <path fill="#FF5B35" d="M26.842 11.297H10.737V5.946h16.105zM26.842 22H0v-5.351h26.842z"></path>
                        </g>
            </svg>
        </div>
        <div className="drop">
            <ul>
                    <li><a href="#">پشتیبانی</a></li>
                    <li><a href="#">معرفی راننده</a></li>
                    <li><a href="#">خدمات کسب‌وکارها</a></li>
                    <li><a href="#">فرصت‌های شغلی</a></li>
                    <li><a href="#">وبلاگ</a></li>
                </ul>
            </div>
        </>
    )
}
export default Navbar;