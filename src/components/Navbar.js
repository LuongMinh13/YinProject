import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/Navbar.css";
import DropdownMenu from "./DropdownMenu";

function NavBar({ isHomePage }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
    setIsSelect(true);
  };

  const handleMouseLeave = () => {
    setIsSelect(false);
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="">
        <div className={isHomePage ? " header" : "header isNotHomePage"}>
          <div className="header-head _container">
            <Link className="header-logo" to="/">
              <svg
                className="header-inner-logo__icon"
                viewBox="0 0 1038 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M248.739 92.7841V155H214.009V45.9091H247.034V65.9375H248.241C250.656 59.2614 254.776 54.0294 260.599 50.2415C266.423 46.4062 273.36 44.4886 281.409 44.4886C289.08 44.4886 295.732 46.2169 301.366 49.6733C307.048 53.0824 311.452 57.8646 314.577 64.0199C317.749 70.1278 319.312 77.2775 319.264 85.4688V155H284.534V92.2869C284.581 86.2263 283.043 81.4915 279.918 78.0824C276.84 74.6733 272.555 72.9688 267.062 72.9688C263.417 72.9688 260.197 73.7737 257.403 75.3835C254.657 76.946 252.527 79.1951 251.011 82.1307C249.544 85.0663 248.786 88.6174 248.739 92.7841Z"
                  fill="white"
                />
                <path
                  d="M157.009 155V45.9091H191.739V155H157.009ZM174.409 33.196C169.532 33.196 165.342 31.5862 161.838 28.3665C158.334 25.0994 156.582 21.1695 156.582 16.5767C156.582 12.0312 158.334 8.14867 161.838 4.92898C165.342 1.66193 169.532 0.0284004 174.409 0.0284004C179.333 0.0284004 183.524 1.66193 186.98 4.92898C190.484 8.14867 192.236 12.0312 192.236 16.5767C192.236 21.1695 190.484 25.0994 186.98 28.3665C183.524 31.5862 179.333 33.196 174.409 33.196Z"
                  fill="white"
                />
                <path
                  d="M0.764205 9.54545H40.0398L70.7926 70.4119H72.071L102.824 9.54545H142.099L88.9034 106.42V155H53.9602V106.42L0.764205 9.54545Z"
                  fill="white"
                />
                <path
                  d="M981.861 198.182C971.491 198.182 962.614 196.738 955.227 193.849C947.841 190.961 942.041 187.008 937.827 181.989C933.613 176.97 931.08 171.288 930.227 164.943L963.111 163.097C963.726 165.322 964.863 167.263 966.52 168.92C968.224 170.578 970.426 171.856 973.125 172.756C975.871 173.655 979.091 174.105 982.784 174.105C988.608 174.105 993.414 172.685 997.202 169.844C1001.04 167.05 1002.95 162.15 1002.95 155.142V135.966H1001.75C1000.37 139.328 998.291 142.334 995.497 144.986C992.704 147.637 989.223 149.721 985.057 151.236C980.938 152.751 976.203 153.509 970.852 153.509C962.898 153.509 955.606 151.662 948.977 147.969C942.396 144.228 937.116 138.452 933.139 130.639C929.209 122.779 927.244 112.67 927.244 100.312C927.244 87.5758 929.28 77.0881 933.352 68.8494C937.424 60.5634 942.751 54.4318 949.332 50.4545C955.961 46.4773 963.087 44.4886 970.71 44.4886C976.439 44.4886 981.34 45.483 985.412 47.4716C989.531 49.4129 992.917 51.9223 995.568 55C998.22 58.0777 1000.23 61.2737 1001.61 64.5881H1002.6V45.9091H1037.19V155.426C1037.19 164.659 1034.87 172.448 1030.23 178.793C1025.59 185.137 1019.1 189.943 1010.77 193.21C1002.43 196.525 992.798 198.182 981.861 198.182ZM982.926 128.224C987.14 128.224 990.739 127.112 993.722 124.886C996.705 122.661 999.001 119.465 1000.61 115.298C1002.22 111.132 1003.03 106.136 1003.03 100.312C1003.03 94.3939 1002.22 89.304 1000.61 85.0426C999.048 80.7339 996.752 77.4195 993.722 75.0994C990.739 72.7794 987.14 71.6193 982.926 71.6193C978.617 71.6193 974.972 72.803 971.989 75.1705C969.006 77.5379 966.733 80.8759 965.17 85.1847C963.655 89.446 962.898 94.4886 962.898 100.312C962.898 106.136 963.679 111.132 965.241 115.298C966.804 119.465 969.053 122.661 971.989 124.886C974.972 127.112 978.617 128.224 982.926 128.224Z"
                  fill="white"
                />
                <path
                  d="M838.739 92.7841V155H804.009V45.9091H837.034V65.9375H838.241C840.656 59.2614 844.776 54.0294 850.599 50.2415C856.423 46.4062 863.36 44.4886 871.409 44.4886C879.08 44.4886 885.732 46.2169 891.366 49.6733C897.048 53.0824 901.452 57.8646 904.577 64.0199C907.749 70.1278 909.312 77.2775 909.264 85.4688V155H874.534V92.2869C874.581 86.2263 873.043 81.4915 869.918 78.0824C866.84 74.6733 862.555 72.9688 857.062 72.9688C853.417 72.9688 850.197 73.7737 847.403 75.3835C844.657 76.946 842.527 79.1951 841.011 82.1307C839.544 85.0663 838.786 88.6174 838.739 92.7841Z"
                  fill="white"
                />
                <path
                  d="M716.761 156.847C709.801 156.847 703.622 155.687 698.224 153.366C692.874 150.999 688.636 147.448 685.511 142.713C682.434 137.931 680.895 131.941 680.895 124.744C680.895 118.684 681.96 113.57 684.091 109.403C686.222 105.237 689.157 101.851 692.898 99.2472C696.638 96.643 700.947 94.678 705.824 93.3523C710.701 91.9792 715.909 91.0559 721.449 90.5824C727.652 90.0142 732.647 89.4223 736.435 88.8068C740.223 88.1439 742.969 87.2206 744.673 86.0369C746.425 84.8059 747.301 83.0776 747.301 80.8523V80.4972C747.301 76.8513 746.046 74.0341 743.537 72.0455C741.027 70.0568 737.642 69.0625 733.381 69.0625C728.788 69.0625 725.095 70.0568 722.301 72.0455C719.508 74.0341 717.732 76.7803 716.974 80.2841L684.943 79.1477C685.89 72.5189 688.329 66.6004 692.259 61.392C696.236 56.1364 701.681 52.017 708.594 49.0341C715.554 46.0038 723.911 44.4886 733.665 44.4886C740.625 44.4886 747.041 45.3172 752.912 46.9744C758.783 48.5843 763.897 50.9517 768.253 54.0767C772.609 57.1544 775.971 60.9422 778.338 65.4403C780.753 69.9384 781.96 75.0758 781.96 80.8523V155H749.29V139.801H748.438C746.496 143.494 744.01 146.619 740.98 149.176C737.997 151.733 734.47 153.651 730.398 154.929C726.373 156.207 721.828 156.847 716.761 156.847ZM727.486 134.119C731.226 134.119 734.588 133.362 737.571 131.847C740.601 130.331 743.016 128.248 744.815 125.597C746.615 122.898 747.514 119.773 747.514 116.222V105.852C746.52 106.373 745.313 106.847 743.892 107.273C742.519 107.699 741.004 108.101 739.347 108.48C737.689 108.859 735.985 109.19 734.233 109.474C732.481 109.759 730.8 110.019 729.19 110.256C725.923 110.777 723.13 111.581 720.81 112.67C718.537 113.759 716.785 115.18 715.554 116.932C714.37 118.636 713.778 120.672 713.778 123.04C713.778 126.638 715.057 129.384 717.614 131.278C720.218 133.172 723.509 134.119 727.486 134.119Z"
                  fill="white"
                />
                <path
                  d="M612.932 157.06C601.473 157.06 591.625 154.716 583.386 150.028C575.195 145.294 568.874 138.712 564.423 130.284C560.02 121.809 557.818 111.984 557.818 100.81C557.818 89.5881 560.02 79.7633 564.423 71.3352C568.874 62.8598 575.195 56.2784 583.386 51.5909C591.625 46.8561 601.473 44.4886 612.932 44.4886C624.39 44.4886 634.215 46.8561 642.406 51.5909C650.645 56.2784 656.966 62.8598 661.369 71.3352C665.82 79.7633 668.045 89.5881 668.045 100.81C668.045 111.984 665.82 121.809 661.369 130.284C656.966 138.712 650.645 145.294 642.406 150.028C634.215 154.716 624.39 157.06 612.932 157.06ZM613.145 130.852C617.312 130.852 620.839 129.574 623.727 127.017C626.616 124.46 628.817 120.909 630.332 116.364C631.895 111.818 632.676 106.562 632.676 100.597C632.676 94.536 631.895 89.233 630.332 84.6875C628.817 80.142 626.616 76.5909 623.727 74.0341C620.839 71.4773 617.312 70.1989 613.145 70.1989C608.836 70.1989 605.19 71.4773 602.207 74.0341C599.272 76.5909 597.023 80.142 595.46 84.6875C593.945 89.233 593.188 94.536 593.188 100.597C593.188 106.562 593.945 111.818 595.46 116.364C597.023 120.909 599.272 124.46 602.207 127.017C605.19 129.574 608.836 130.852 613.145 130.852Z"
                  fill="white"
                />
                <path
                  d="M412.009 155V9.54545H447.165V67.9261H504.48V9.54545H539.565V155H504.48V96.5483H447.165V155H412.009Z"
                  fill="white"
                />
              </svg>
            </Link>
            <div className="header-nav">
              <div className="header-nav__wrap">
                <div
                  className="header-dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="header-dropdown__title">
                    <span className="header-dropdown__title-text">works</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="menu_svg"
                    >
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        style={{ fill: "white" }}
                      />
                    </svg>
                  </div>
                  {isDropdownVisible && <DropdownMenu />}
                </div>
                <Link
                  className={
                    isSelect
                      ? "header-inner-nav__link onHover"
                      : "header-inner-nav__link"
                  }
                  to="/about"
                >
                  <span className="header-inner-nav__link-text">about </span>
                </Link>
                <Link
                  className={
                    isSelect
                      ? "header-inner-nav__link onHover"
                      : "header-inner-nav__link"
                  }
                >
                  <span className="header-inner-nav__link-text">
                    send request{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;