import styled from 'styled-components';

const DefaultSkyStyle = styled.div`
  --duration: ${(props) => props.duration || '24s'};
  --dur-start: ${(props) => props.durStart || '12s'};

  background: #0d133a;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: -1;

  svg:not(:root) {
    overflow: hidden;
  }

  /* Animation globals
  ---------------------------------------------- */
  #bottom,
  .counter:before,
  #lensFlare,
  .sunMask {
    animation-duration: var(--duration);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: var(--dur-start);
  }

  /* Background gradients
  ---------------------------------------------- */
  #sky {
    height: 60%;
    margin-bottom: -6px;
    position: absolute;
    top: 0;
    z-index: 2;
  }
  #sky-rect {
    height: 100%;
  }

  #reflection,
  #sunMask {
    height: 40%;
    position: absolute;
    top: 60%;
    z-index: 4;
  }
  #reflection-rect {
    height: 100%;
  }
  #sunMask {
    background: #0d133a;
    height: 40%;
    position: absolute;
    top: 60%;
    width: 100%;
  }
  /* Sun
  ---------------------------------------------- */
  .sunMask {
    position: absolute;
    width: 100%;
    height: 100%;
    mask-image: gradient(
      linear,
      left 50%,
      left 60%,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    z-index: 4;
    mix-blend-mode: screen;
  }

  .sun {
    width: 100%;
    padding-bottom: 100%;
    position: absolute;
    right: -51%;
    top: -330%;
  }
  .sun div {
    background: transparent
      url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/21555/sun.svg);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .suncrane {
    position: absolute;
    width: 21%;
    height: 4%;
    background: transparent;
    margin: auto;
    top: 57%;
    left: 0;
    right: 0;
  }
  .sun:before {
    display: block;
    content: ' ';
    /* animation: var(--duration) linear infinite; */
    position: absolute;
    width: 120%;
    height: 120%;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/21555/glare.svg)
      no-repeat scroll center;
    top: -10%;
    left: -10%;
    background-size: 100%;
  }

  .sun:after {
    display: block;
    content: ' ';
    position: absolute;
    background: white;
    width: 10%;
    height: 10%;
    top: 45%;
    border-radius: 100%;
    margin: auto;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 80px 30px white;
  }

  /* Lens flare
  ---------------------------------------------- */
  .lighting {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 8;
    opacity: 0.3;
    mask-image: gradient(
      linear,
      left 50%,
      left 60%,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 1))
    );
    mix-blend-mode: screen;
    pointer-events: none;
    filter: blur(3px);
  }
  .lighting .suncrane {
    width: 100%;
  }
  #lensFlare {
    transform: rotate(16deg) translate3d(9%, -47%, 0px) scale(1);
  }

  /* Vignette
  ---------------------------------------------- */
  .vignette {
    background: radial-gradient(transparent 60%, rgb(1, 14, 39) 130%);
    background-size: cover;
    height: 100%;
    z-index: 9;
    position: absolute;
    width: 100%;
    pointer-events: none;
  }

  /* Stars
  ---------------------------------------------- */
  .stars {
    height: 100%;
    z-index: 2;
    position: absolute;
    width: 100%;

    overflow: hidden;
  }
  .starWrap {
    height: 60%;
    width: 100%;
    position: relative;
  }
  .starProject {
    overflow: hidden;
  }
  .starReflect {
    overflow: hidden;
    height: 40%;
    opacity: 0.9;
    top: 1%;
  }
  #stars {
    position: absolute;
    width: 120%;
    border-radius: 100%;
    margin: auto;
    left: -10%;
    right: 0;
    animation: stars var(--duration) linear infinite;
    animation-delay: var(--dur-start);
    transform: rotate(0deg);
    top: -35%;
  }

  @keyframes stars {
    100% {
      transform: rotate(-360deg);
    }
  }

  #starReflection {
    position: absolute;
    width: 120%;
    border-radius: 100%;
    margin: auto;
    left: -10%;
    right: 0;
    animation: starsReflect var(--duration) linear infinite;
    animation-delay: var(--dur-start);
    transform: rotate(0deg);
    top: initial;
    bottom: -102%;
  }
  @keyframes starsReflect {
    100% {
      transform: rotate(360deg);
    }
  }

  /* Sprites 
  ----------------------------------------------- */
  .spriteWrap {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 13;
    animation: sprites var(--duration) linear infinite;
    animation-delay: var(--dur-start);
    pointer-events: none;
  }
  @keyframes sprites {
    0% {
      opacity: 0.8;
    }
    20% {
      opacity: 0.8;
    }
    25% {
      opacity: 0;
    }
    73% {
      opacity: 0;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.8;
    }
  }

  #sprites {
    height: 100%;
    width: 100%;
  }

  #bottom {
    animation-name: bottomFill;
    height: 100%;
    position: absolute;
    top: 80%;
    width: 100%;
    z-index: 5;
    animation-delay: var(--dur-start);
    filter: blur(2px);
    transform: scaleX(1.1);
  }
  @keyframes bottomFill {
    0% {
      background: #0d141e;
    }
    4% {
      background: #101522;
    }
    8% {
      background: #121726;
    }
    12% {
      background: #141829;
    }
    16% {
      background: #1c1e3c;
    }
    20% {
      background: #22214f;
    }
    24% {
      background: #262262;
    }
    28% {
      background: #1d4065;
    }
    32% {
      background: #125768;
    }
    36% {
      background: #1e4553;
    }
    40% {
      background: #1e404e;
    }
    44% {
      background: #1e3b49;
    }
    48% {
      background: #1d3643;
    }
    52% {
      background: #1c313e;
    }
    56% {
      background: #1c3344;
    }
    60% {
      background: #1c3449;
    }
    64% {
      background: #1b344f;
    }
    68% {
      background: #183454;
    }
    72% {
      background: #242b4a;
    }
    76% {
      background: #2b2241;
    }
    80% {
      background: #24203c;
    }
    84% {
      background: #1d1d37;
    }
    88% {
      background: #151a32;
    }
    92% {
      background: #14192c;
    }
    96% {
      background: #111725;
    }
    100% {
      background: #0d141e;
    }
  }

  .sunMask,
  .lighting {
    left: 20%;
    bottom: 40%;
  }

  .sunMask.night,
  .lighting.night {
    left: 20%;
    bottom: 40%;
  }
`;

const DefaultSky = ({ isClear = true }) => {
  const hours = new Date().getHours();
  const getDurStart = () => {
    return -1 * hours * 3600;
  };

  const getIsNight = () => {
    if (hours >= 20 || hours <= 5) return true;
    return false;
  };
  const duration = `${24 * 3600}s`;
  const durStart = `${getDurStart()}s`;
  const isNight = getIsNight();

  return (
    <DefaultSkyStyle duration={duration} durStart={durStart}>
      {/* Stars */}
      <div className="stars">
        {!isClear ? null : (
          <>
            <div className="starWrap starProject">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 599.456 593.71"
                enableBackground="new 0 0 599.456 593.71"
                xmlSpace="preserve"
                id="stars"
              >
                <circle fill="#FFFFFF" cx="287.793" cy="0.398" r="0.398" />
                <circle fill="#FFFFFF" cx="300.965" cy="15.945" r="0.398" />
                <circle fill="#FFFFFF" cx="306.237" cy="22.961" r="0.398" />
                <circle fill="#FFFFFF" cx="282.496" cy="16.214" r="0.398" />
                <circle fill="#FFFFFF" cx="257.775" cy="32.352" r="0.398" />
                <circle fill="#FFFFFF" cx="287.624" cy="62.283" r="0.398" />
                <circle fill="#FFFFFF" cx="240.963" cy="68.985" r="0.398" />
                <circle fill="#FFFFFF" cx="183.157" cy="79.314" r="0.398" />
                <circle fill="#FFFFFF" cx="146.147" cy="75.118" r="0.398" />
                <circle fill="#FFFFFF" cx="104.511" cy="75.817" r="0.398" />
                <circle fill="#FFFFFF" cx="256.101" cy="75.548" r="0.398" />
                <circle fill="#FFFFFF" cx="238.941" cy="85.554" r="0.398" />
                <circle fill="#FFFFFF" cx="199.887" cy="82.994" r="0.398" />
                <circle fill="#FFFFFF" cx="176.917" cy="65.08" r="0.878" />
                <circle fill="#FFFFFF" cx="198.757" cy="44.455" r="0.398" />
                <circle fill="#FFFFFF" cx="133.344" cy="62.638" r="0.398" />
                <circle fill="#FFFFFF" cx="161.909" cy="57.85" r="0.398" />
                <circle fill="#FFFFFF" cx="157.283" cy="29.393" r="0.398" />
                <circle fill="#FFFFFF" cx="173.604" cy="58.872" r="0.398" />
                <circle fill="#FFFFFF" cx="251.83" cy="18.15" r="0.398" />
                <circle fill="#FFFFFF" cx="233.537" cy="26.273" r="0.398" />
                <circle fill="#FFFFFF" cx="264.063" cy="103.144" r="0.398" />
                <circle fill="#FFFFFF" cx="265.408" cy="108.308" r="0.398" />
                <circle fill="#FFFFFF" cx="269.012" cy="124.984" r="0.398" />
                <circle fill="#FFFFFF" cx="290.991" cy="154.549" r="0.398" />
                <circle fill="#FFFFFF" cx="255.079" cy="145.534" r="0.398" />
                <circle fill="#FFFFFF" cx="245.988" cy="116.754" r="0.398" />
                <circle fill="#FFFFFF" cx="231.55" cy="113.419" r="0.398" />
                <circle fill="#FFFFFF" cx="224.202" cy="123.209" r="0.398" />
                <circle fill="#FFFFFF" cx="229.581" cy="131.709" r="0.398" />
                <circle fill="#FFFFFF" cx="238.134" cy="141.607" r="0.398" />
                <circle fill="#FFFFFF" cx="230.872" cy="153.925" r="0.398" />
                <circle fill="#FFFFFF" cx="180.414" cy="170.709" r="0.398" />
                <circle fill="#FFFFFF" cx="256.317" cy="191.334" r="0.398" />
                <circle fill="#FFFFFF" cx="235.714" cy="193.948" r="0.398" />
                <circle fill="#FFFFFF" cx="224.094" cy="193.948" r="0.398" />
                <circle fill="#FFFFFF" cx="244.321" cy="208.795" r="0.398" />
                <circle fill="#FFFFFF" cx="266.936" cy="221.759" r="0.398" />
                <circle fill="#FFFFFF" cx="291.444" cy="227.999" r="0.398" />
                <circle fill="#FFFFFF" cx="259.652" cy="242.362" r="0.398" />
                <circle fill="#FFFFFF" cx="247.979" cy="240.103" r="0.398" />
                <circle fill="#FFFFFF" cx="239.802" cy="230.958" r="0.398" />
                <circle fill="#FFFFFF" cx="245.127" cy="225.009" r="0.398" />
                <circle fill="#FFFFFF" cx="233.669" cy="241.071" r="0.398" />
                <circle fill="#FFFFFF" cx="221.566" cy="236.983" r="0.398" />
                <circle fill="#FFFFFF" cx="189.881" cy="228.613" r="0.398" />
                <circle fill="#FFFFFF" cx="171.452" cy="204.922" r="0.398" />
                <circle fill="#FFFFFF" cx="199.403" cy="193.41" r="0.398" />
                <circle fill="#FFFFFF" cx="130.515" cy="219.123" r="0.398" />
                <circle fill="#FFFFFF" cx="112.849" cy="204.523" r="0.878" />
                <circle fill="#FFFFFF" cx="101.176" cy="199.865" r="0.398" />
                <circle fill="#FFFFFF" cx="105.372" cy="210.678" r="0.398" />
                <circle fill="#FFFFFF" cx="104.318" cy="220.522" r="0.398" />
                <circle fill="#FFFFFF" cx="74.656" cy="232.572" r="0.398" />
                <circle fill="#FFFFFF" cx="107.846" cy="235.638" r="0.398" />
                <circle fill="#FFFFFF" cx="84.338" cy="218.294" r="0.398" />
                <circle fill="#FFFFFF" cx="66.264" cy="214.551" r="0.398" />
                <circle fill="#FFFFFF" cx="10.964" cy="203.577" r="0.398" />
                <circle fill="#FFFFFF" cx="46.005" cy="194.593" r="0.398" />
                <circle fill="#FFFFFF" cx="40.389" cy="177.702" r="0.878" />
                <circle fill="#FFFFFF" cx="74.225" cy="144.296" r="0.398" />
                <circle fill="#FFFFFF" cx="125.19" cy="146.018" r="0.398" />
                <circle fill="#FFFFFF" cx="145.556" cy="159.896" r="0.398" />
                <circle fill="#FFFFFF" cx="183.857" cy="160.295" r="0.398" />
                <circle fill="#FFFFFF" cx="185.255" cy="181.844" r="0.398" />
                <circle fill="#FFFFFF" cx="117.475" cy="137.734" r="0.398" />
                <circle fill="#FFFFFF" cx="163.523" cy="116.862" r="0.398" />
                <circle fill="#FFFFFF" cx="164.814" cy="129.449" r="0.398" />
                <circle fill="#FFFFFF" cx="186.062" cy="113.871" r="0.398" />
                <circle fill="#FFFFFF" cx="202.093" cy="94.914" r="0.398" />
                <circle fill="#FFFFFF" cx="89.395" cy="106.587" r="0.398" />
                <circle fill="#FFFFFF" cx="89.686" cy="109.815" r="0.398" />
                <circle fill="#FFFFFF" cx="79.013" cy="106.587" r="0.398" />
                <circle fill="#FFFFFF" cx="56.742" cy="196.853" r="0.398" />
                <circle fill="#FFFFFF" cx="45.715" cy="147.201" r="0.398" />
                <circle fill="#FFFFFF" cx="75.022" cy="110.675" r="0.398" />
                <circle fill="#FFFFFF" cx="80.067" cy="116.862" r="0.398" />
                <circle fill="#FFFFFF" cx="112.203" cy="112.472" r="0.398" />
                <circle fill="#FFFFFF" cx="115.7" cy="254.197" r="0.398" />
                <circle fill="#FFFFFF" cx="96.227" cy="283.568" r="0.398" />
                <circle fill="#FFFFFF" cx="72.611" cy="282.492" r="0.398" />
                <circle fill="#FFFFFF" cx="50.986" cy="284.267" r="0.398" />
                <circle fill="#FFFFFF" cx="46.253" cy="288.947" r="0.398" />
                <circle fill="#FFFFFF" cx="21.723" cy="303.418" r="0.878" />
                <circle fill="#FFFFFF" cx="18.71" cy="333.488" r="0.398" />
                <circle fill="#FFFFFF" cx="54.913" cy="351.993" r="0.398" />
                <circle fill="#FFFFFF" cx="6.876" cy="342.902" r="0.398" />
                <circle fill="#FFFFFF" cx="12.632" cy="356.781" r="0.398" />
                <circle fill="#FFFFFF" cx="10.318" cy="339.513" r="0.398" />
                <circle fill="#FFFFFF" cx="0.398" cy="348.26" r="0.398" />
                <circle fill="#FFFFFF" cx="11.771" cy="323.989" r="0.398" />
                <circle fill="#FFFFFF" cx="31.965" cy="326.549" r="0.398" />
                <circle fill="#FFFFFF" cx="64.65" cy="303.095" r="0.398" />
                <circle fill="#FFFFFF" cx="64.22" cy="293.358" r="0.398" />
                <circle fill="#FFFFFF" cx="74.709" cy="293.358" r="0.398" />
                <circle fill="#FFFFFF" cx="84.199" cy="299.276" r="0.398" />
                <circle fill="#FFFFFF" cx="89.556" cy="303.418" r="0.398" />
                <circle fill="#FFFFFF" cx="106.286" cy="320.47" r="0.398" />
                <circle fill="#FFFFFF" cx="127.987" cy="303.019" r="0.398" />
                <circle fill="#FFFFFF" cx="128.611" cy="305.753" r="0.398" />
                <circle fill="#FFFFFF" cx="151.311" cy="297.285" r="0.398" />
                <circle fill="#FFFFFF" cx="179.445" cy="297.684" r="0.398" />
                <circle fill="#FFFFFF" cx="184.233" cy="299.814" r="0.398" />
                <circle fill="#FFFFFF" cx="203.384" cy="321.708" r="0.398" />
                <circle fill="#FFFFFF" cx="296.393" cy="309.335" r="0.398" />
                <circle fill="#FFFFFF" cx="260.997" cy="332.574" r="0.398" />
                <circle fill="#FFFFFF" cx="246.849" cy="331.014" r="0.398" />
                <circle fill="#FFFFFF" cx="269.604" cy="348.228" r="0.398" />
                <circle fill="#FFFFFF" cx="267.344" cy="352.8" r="0.398" />
                <circle fill="#FFFFFF" cx="253.842" cy="358.018" r="0.398" />
                <circle fill="#FFFFFF" cx="237.166" cy="350.057" r="0.398" />
                <circle fill="#FFFFFF" cx="230.496" cy="341.773" r="0.398" />
                <circle fill="#FFFFFF" cx="221.942" cy="343.655" r="0.398" />
                <circle fill="#FFFFFF" cx="219.898" cy="359.471" r="0.398" />
                <circle fill="#FFFFFF" cx="216.724" cy="361.246" r="0.398" />
                <circle fill="#FFFFFF" cx="221.996" cy="382.01" r="0.398" />
                <circle fill="#FFFFFF" cx="179.069" cy="354.791" r="0.398" />
                <circle fill="#FFFFFF" cx="182.189" cy="361.246" r="0.398" />
                <circle fill="#FFFFFF" cx="174.227" cy="359.525" r="0.398" />
                <circle fill="#FFFFFF" cx="166.589" cy="358.449" r="0.398" />
                <circle fill="#FFFFFF" cx="173.829" cy="364.043" r="0.398" />
                <circle fill="#FFFFFF" cx="146.309" cy="355.759" r="0.398" />
                <circle fill="#FFFFFF" cx="150.236" cy="371.305" r="0.398" />
                <circle fill="#FFFFFF" cx="141.951" cy="389.649" r="0.398" />
                <circle fill="#FFFFFF" cx="138.347" cy="406.11" r="0.398" />
                <circle fill="#FFFFFF" cx="156.669" cy="419.182" r="0.398" />
                <circle fill="#FFFFFF" cx="173.851" cy="411.543" r="0.398" />
                <circle fill="#FFFFFF" cx="175.25" cy="416.653" r="0.398" />
                <circle fill="#FFFFFF" cx="180.629" cy="417.675" r="0.398" />
                <circle fill="#FFFFFF" cx="166.589" cy="386.045" r="0.398" />
                <circle fill="#FFFFFF" cx="185.847" cy="379.751" r="0.398" />
                <circle fill="#FFFFFF" cx="187.299" cy="383.754" r="0.398" />
                <circle fill="#FFFFFF" cx="192.141" cy="380.719" r="0.398" />
                <circle fill="#FFFFFF" cx="190.85" cy="382.732" r="0.398" />
                <circle fill="#FFFFFF" cx="199.887" cy="390.047" r="0.398" />
                <circle fill="#FFFFFF" cx="213.152" cy="388.466" r="0.398" />
                <circle fill="#FFFFFF" cx="209.624" cy="400.515" r="0.398" />
                <circle fill="#FFFFFF" cx="220.544" cy="404.904" r="0.398" />
                <circle fill="#FFFFFF" cx="242.223" cy="416.761" r="0.398" />
                <circle fill="#FFFFFF" cx="242.223" cy="424.292" r="0.398" />
                <circle fill="#FFFFFF" cx="257.123" cy="435.051" r="0.398" />
                <circle fill="#FFFFFF" cx="272.939" cy="435.449" r="0.398" />
                <circle fill="#FFFFFF" cx="264.493" cy="458.612" r="0.398" />
                <circle fill="#FFFFFF" cx="257.554" cy="465.821" r="0.398" />
                <circle fill="#FFFFFF" cx="287.355" cy="470.07" r="0.398" />
                <circle fill="#FFFFFF" cx="269.711" cy="484.81" r="0.398" />
                <circle fill="#FFFFFF" cx="265.708" cy="499.334" r="0.398" />
                <circle fill="#FFFFFF" cx="254.757" cy="514.303" r="0.398" />
                <circle fill="#FFFFFF" cx="285.257" cy="532.762" r="0.398" />
                <circle fill="#FFFFFF" cx="301.525" cy="577.313" r="0.398" />
                <circle fill="#FFFFFF" cx="241.577" cy="569.104" r="0.398" />
                <circle fill="#FFFFFF" cx="225.116" cy="563.886" r="0.398" />
                <circle fill="#FFFFFF" cx="302.31" cy="515.956" r="0.398" />
                <circle fill="#FFFFFF" cx="244.643" cy="515.149" r="0.398" />
                <circle fill="#FFFFFF" cx="230.388" cy="506.758" r="0.398" />
                <circle fill="#FFFFFF" cx="228.236" cy="496.483" r="0.398" />
                <circle fill="#FFFFFF" cx="237.973" cy="489.813" r="0.398" />
                <circle fill="#FFFFFF" cx="228.774" cy="519.015" r="0.398" />
                <circle fill="#FFFFFF" cx="266.107" cy="493.955" r="0.398" />
                <circle fill="#FFFFFF" cx="285.957" cy="476.31" r="0.398" />
                <circle fill="#FFFFFF" cx="275.79" cy="428.671" r="0.398" />
                <circle fill="#FFFFFF" cx="280.233" cy="417.277" r="0.398" />
                <circle fill="#FFFFFF" cx="283.644" cy="415.846" r="0.398" />
                <circle fill="#FFFFFF" cx="302.74" cy="406.917" r="0.398" />
                <circle fill="#FFFFFF" cx="300.589" cy="412.834" r="0.398" />
                <circle fill="#FFFFFF" cx="300.987" cy="427.681" r="0.398" />
                <circle fill="#FFFFFF" cx="264.17" cy="409.391" r="0.398" />
                <circle fill="#FFFFFF" cx="276.973" cy="403.474" r="0.398" />
                <circle fill="#FFFFFF" cx="274.306" cy="397.579" r="0.398" />
                <circle fill="#FFFFFF" cx="258.522" cy="392.5" r="0.398" />
                <circle fill="#FFFFFF" cx="277.372" cy="392.124" r="0.398" />
                <circle fill="#FFFFFF" cx="286.925" cy="387.712" r="0.398" />
                <circle fill="#FFFFFF" cx="187.698" cy="400.515" r="0.398" />
                <circle fill="#FFFFFF" cx="223.556" cy="320.04" r="0.398" />
                <circle fill="#FFFFFF" cx="182.189" cy="330.476" r="0.398" />
                <circle fill="#FFFFFF" cx="111.988" cy="332.036" r="0.398" />
                <circle fill="#FFFFFF" cx="134.313" cy="327.195" r="0.398" />
                <circle fill="#FFFFFF" cx="129.633" cy="332.435" r="0.398" />
                <circle fill="#FFFFFF" cx="139.961" cy="338.437" r="0.398" />
                <circle fill="#FFFFFF" cx="149.213" cy="336.447" r="0.398" />
                <circle fill="#FFFFFF" cx="153.947" cy="325.742" r="0.878" />
                <circle fill="#FFFFFF" cx="52.869" cy="317.458" r="0.398" />
                <circle fill="#FFFFFF" cx="29.039" cy="294.596" r="0.398" />
                <circle fill="#FFFFFF" cx="39.206" cy="309.626" r="0.398" />
                <circle fill="#FFFFFF" cx="60.831" cy="326.549" r="0.398" />
                <circle fill="#FFFFFF" cx="55.559" cy="357.588" r="0.398" />
                <circle fill="#FFFFFF" cx="51.502" cy="368.132" r="0.398" />
                <circle fill="#FFFFFF" cx="76.216" cy="354.091" r="0.398" />
                <circle fill="#FFFFFF" cx="41.465" cy="372.865" r="0.398" />
                <circle fill="#FFFFFF" cx="39.029" cy="378.998" r="0.398" />
                <circle fill="#FFFFFF" cx="28.339" cy="381.827" r="0.398" />
                <circle fill="#FFFFFF" cx="17.312" cy="381.03" r="0.398" />
                <circle fill="#FFFFFF" cx="13.438" cy="376.147" r="0.398" />
                <circle fill="#FFFFFF" cx="55.16" cy="388.896" r="0.398" />
                <circle fill="#FFFFFF" cx="65.479" cy="383.678" r="0.398" />
                <circle fill="#FFFFFF" cx="68.631" cy="386.583" r="0.878" />
                <circle fill="#FFFFFF" cx="64.112" cy="390.51" r="0.398" />
                <circle fill="#FFFFFF" cx="99.185" cy="407.885" r="0.398" />
                <circle fill="#FFFFFF" cx="112.526" cy="417.675" r="0.398" />
                <circle fill="#FFFFFF" cx="116.722" cy="420.15" r="0.398" />
                <circle fill="#FFFFFF" cx="113.817" cy="420.096" r="0.398" />
                <circle fill="#FFFFFF" cx="115.431" cy="421.28" r="0.398" />
                <circle fill="#FFFFFF" cx="115.431" cy="419.827" r="0.398" />
                <circle fill="#FFFFFF" cx="72.99" cy="427.412" r="0.398" />
                <circle fill="#FFFFFF" cx="54.375" cy="418.074" r="0.398" />
                <circle fill="#FFFFFF" cx="52.815" cy="435.589" r="0.398" />
                <circle fill="#FFFFFF" cx="93.268" cy="454.847" r="0.398" />
                <circle fill="#FFFFFF" cx="87.405" cy="464.96" r="0.398" />
                <circle fill="#FFFFFF" cx="87.243" cy="468.51" r="0.398" />
                <circle fill="#FFFFFF" cx="55.828" cy="473.567" r="0.398" />
                <circle fill="#FFFFFF" cx="107.276" cy="491.05" r="0.398" />
                <circle fill="#FFFFFF" cx="122.586" cy="500.141" r="0.398" />
                <circle fill="#FFFFFF" cx="108.976" cy="518.323" r="0.398" />
                <circle fill="#FFFFFF" cx="106.932" cy="528.759" r="0.398" />
                <circle fill="#FFFFFF" cx="134.366" cy="516.925" r="0.398" />
                <circle fill="#FFFFFF" cx="150.02" cy="526.285" r="0.398" />
                <circle fill="#FFFFFF" cx="124.038" cy="456.245" r="0.398" />
                <circle fill="#FFFFFF" cx="136.841" cy="461.786" r="0.398" />
                <circle fill="#FFFFFF" cx="157.067" cy="453.448" r="0.398" />
                <circle fill="#FFFFFF" cx="162.608" cy="449.844" r="0.398" />
                <circle fill="#FFFFFF" cx="193.324" cy="454.245" r="0.398" />
                <circle fill="#FFFFFF" cx="206.45" cy="446.401" r="0.398" />
                <circle fill="#FFFFFF" cx="229.151" cy="448.392" r="0.398" />
                <circle fill="#FFFFFF" cx="232.809" cy="446.939" r="0.398" />
                <circle fill="#FFFFFF" cx="203.2" cy="477.408" r="0.398" />
                <circle fill="#FFFFFF" cx="189.992" cy="492.449" r="0.398" />
                <circle fill="#FFFFFF" cx="186.654" cy="507.156" r="0.398" />
                <circle fill="#FFFFFF" cx="202.254" cy="529.614" r="0.398" />
                <circle fill="#FFFFFF" cx="179.177" cy="541.912" r="0.398" />
                <circle fill="#FFFFFF" cx="178.208" cy="554.688" r="0.398" />
                <circle fill="#FFFFFF" cx="160.757" cy="554.688" r="0.398" />
                <circle fill="#FFFFFF" cx="150.989" cy="550.836" r="0.398" />
                <circle fill="#FFFFFF" cx="187.622" cy="507.694" r="0.398" />
                <circle fill="#FFFFFF" cx="173.389" cy="433.276" r="0.398" />
                <circle fill="#FFFFFF" cx="181.974" cy="425.745" r="0.398" />
                <circle fill="#FFFFFF" cx="142.328" cy="429.402" r="0.398" />
                <circle fill="#FFFFFF" cx="162.608" cy="456.407" r="0.398" />
                <circle fill="#FFFFFF" cx="69.814" cy="392.177" r="0.398" />
                <circle fill="#FFFFFF" cx="77.076" cy="394.544" r="0.398" />
                <circle fill="#FFFFFF" cx="75.624" cy="396.427" r="0.398" />
                <circle fill="#FFFFFF" cx="77.076" cy="398.041" r="0.398" />
                <circle fill="#FFFFFF" cx="79.712" cy="390.295" r="0.398" />
                <circle fill="#FFFFFF" cx="90.686" cy="389.057" r="0.398" />
                <circle fill="#FFFFFF" cx="92.085" cy="387.39" r="0.398" />
                <circle fill="#FFFFFF" cx="88.911" cy="399.009" r="0.398" />
                <circle fill="#FFFFFF" cx="86.705" cy="372.65" r="0.398" />
                <circle fill="#FFFFFF" cx="72.592" cy="403.743" r="0.398" />
                <circle fill="#FFFFFF" cx="69.76" cy="397.256" r="0.398" />
                <circle fill="#FFFFFF" cx="69.76" cy="394.921" r="0.398" />
                <circle fill="#FFFFFF" cx="69.029" cy="394.146" r="0.398" />
                <circle fill="#FFFFFF" cx="66.748" cy="398.041" r="0.398" />
                <circle fill="#FFFFFF" cx="48.781" cy="394.383" r="0.398" />
                <circle fill="#FFFFFF" cx="72.558" cy="329.669" r="0.398" />
                <circle fill="#FFFFFF" cx="29.039" cy="324.559" r="0.398" />
                <circle fill="#FFFFFF" cx="30.007" cy="327.571" r="0.398" />
                <circle fill="#FFFFFF" cx="66.318" cy="267.591" r="0.398" />
                <circle fill="#FFFFFF" cx="47.651" cy="269.151" r="0.398" />
                <circle fill="#FFFFFF" cx="34.095" cy="249.323" r="0.398" />
                <circle fill="#FFFFFF" cx="48.404" cy="236.036" r="0.398" />
                <circle fill="#FFFFFF" cx="11.847" cy="236.176" r="0.398" />
                <circle fill="#FFFFFF" cx="45.607" cy="247.957" r="0.398" />
                <circle fill="#FFFFFF" cx="23.52" cy="257.478" r="0.398" />
                <circle fill="#FFFFFF" cx="13.654" cy="267.591" r="0.398" />
                <circle fill="#FFFFFF" cx="44.24" cy="284.267" r="0.398" />
                <circle fill="#FFFFFF" cx="114.248" cy="207.795" r="0.398" />
                <circle fill="#FFFFFF" cx="196.767" cy="270.927" r="0.398" />
                <circle fill="#FFFFFF" cx="153.087" cy="259.63" r="0.398" />
                <circle fill="#FFFFFF" cx="171.452" cy="251.238" r="0.398" />
                <circle fill="#FFFFFF" cx="172.022" cy="246.343" r="0.398" />
                <circle fill="#FFFFFF" cx="117.776" cy="222.835" r="0.398" />
                <circle fill="#FFFFFF" cx="199.026" cy="276.629" r="0.398" />
                <circle fill="#FFFFFF" cx="282.944" cy="273.509" r="0.398" />
                <circle fill="#FFFFFF" cx="257.608" cy="285.774" r="0.398" />
                <circle fill="#FFFFFF" cx="195.508" cy="288.302" r="0.398" />
                <circle fill="#FFFFFF" cx="230.496" cy="291.96" r="0.398" />
                <circle fill="#FFFFFF" cx="220.221" cy="205.513" r="0.398" />
                <circle fill="#FFFFFF" cx="211.991" cy="202.017" r="0.398" />
                <circle fill="#FFFFFF" cx="212.744" cy="134.129" r="0.398" />
                <circle fill="#FFFFFF" cx="192.517" cy="151.558" r="0.398" />
                <circle fill="#FFFFFF" cx="370.09" cy="13.901" r="0.398" />
                <circle fill="#FFFFFF" cx="321.999" cy="54.353" r="0.398" />
                <circle fill="#FFFFFF" cx="334.479" cy="72.321" r="0.398" />
                <circle fill="#FFFFFF" cx="373.533" cy="63.821" r="0.398" />
                <circle fill="#FFFFFF" cx="416.137" cy="30.2" r="0.398" />
                <circle fill="#FFFFFF" cx="450.673" cy="40.26" r="0.398" />
                <circle fill="#FFFFFF" cx="433.351" cy="98.626" r="0.878" />
                <circle fill="#FFFFFF" cx="418.181" cy="112.311" r="0.398" />
                <circle fill="#FFFFFF" cx="466.381" cy="100.777" r="0.398" />
                <circle fill="#FFFFFF" cx="462.723" cy="121.595" r="0.398" />
                <circle fill="#FFFFFF" cx="456.59" cy="143.328" r="0.398" />
                <circle fill="#FFFFFF" cx="516.086" cy="138.67" r="0.398" />
                <circle fill="#FFFFFF" cx="532.87" cy="143.597" r="0.398" />
                <circle fill="#FFFFFF" cx="543.79" cy="142.93" r="0.398" />
                <circle fill="#FFFFFF" cx="572.569" cy="173.022" r="0.398" />
                <circle fill="#FFFFFF" cx="574.291" cy="184.588" r="0.398" />
                <circle fill="#FFFFFF" cx="545.995" cy="198.359" r="0.398" />
                <circle fill="#FFFFFF" cx="517.646" cy="197.96" r="0.398" />
                <circle fill="#FFFFFF" cx="558.314" cy="220.576" r="0.398" />
                <circle fill="#FFFFFF" cx="553.472" cy="235.477" r="0.398" />
                <circle fill="#FFFFFF" cx="550.245" cy="246.935" r="0.398" />
                <circle fill="#FFFFFF" cx="586.502" cy="255.004" r="0.398" />
                <circle fill="#FFFFFF" cx="593.71" cy="281.524" r="0.398" />
                <circle fill="#FFFFFF" cx="598.39" cy="239.941" r="0.398" />
                <circle fill="#FFFFFF" cx="535.021" cy="194.217" r="0.398" />
                <circle fill="#FFFFFF" cx="510.061" cy="158.175" r="0.398" />
                <circle fill="#FFFFFF" cx="515.44" cy="168.181" r="0.398" />
                <circle fill="#FFFFFF" cx="503.584" cy="165.652" r="0.398" />
                <circle fill="#FFFFFF" cx="495.429" cy="162.21" r="0.398" />
                <circle fill="#FFFFFF" cx="497.258" cy="173.022" r="0.398" />
                <circle fill="#FFFFFF" cx="477.623" cy="175.873" r="0.398" />
                <circle fill="#FFFFFF" cx="481.981" cy="180.768" r="0.398" />
                <circle fill="#FFFFFF" cx="497.688" cy="185.61" r="0.398" />
                <circle fill="#FFFFFF" cx="461.969" cy="170.332" r="0.398" />
                <circle fill="#FFFFFF" cx="458.634" cy="178.908" r="0.398" />
                <circle fill="#FFFFFF" cx="444.271" cy="171.301" r="0.398" />
                <circle fill="#FFFFFF" cx="419.128" cy="179.854" r="0.398" />
                <circle fill="#FFFFFF" cx="438.408" cy="185.61" r="0.398" />
                <circle fill="#FFFFFF" cx="436.364" cy="212.453" r="0.398" />
                <circle fill="#FFFFFF" cx="455.353" cy="199.327" r="0.398" />
                <circle fill="#FFFFFF" cx="460.033" cy="212.851" r="0.398" />
                <circle fill="#FFFFFF" cx="481.582" cy="214.443" r="0.398" />
                <circle fill="#FFFFFF" cx="476.494" cy="196.691" r="0.398" />
                <circle fill="#FFFFFF" cx="483.433" cy="188.622" r="0.398" />
                <circle fill="#FFFFFF" cx="453.363" cy="149.913" r="0.398" />
                <circle fill="#FFFFFF" cx="440.237" cy="135.044" r="0.398" />
                <circle fill="#FFFFFF" cx="423.937" cy="138.67" r="0.398" />
                <circle fill="#FFFFFF" cx="427.111" cy="138.271" r="0.398" />
                <circle fill="#FFFFFF" cx="404.249" cy="145.426" r="0.398" />
                <circle fill="#FFFFFF" cx="383.216" cy="174.421" r="0.398" />
                <circle fill="#FFFFFF" cx="373.102" cy="189.268" r="0.398" />
                <circle fill="#FFFFFF" cx="371.004" cy="189.322" r="0.398" />
                <circle fill="#FFFFFF" cx="376.222" cy="193.302" r="0.398" />
                <circle fill="#FFFFFF" cx="402.797" cy="197.713" r="0.398" />
                <circle fill="#FFFFFF" cx="381.419" cy="232.496" r="0.398" />
                <circle fill="#FFFFFF" cx="344.699" cy="222.674" r="0.398" />
                <circle fill="#FFFFFF" cx="339.966" cy="221.705" r="0.398" />
                <circle fill="#FFFFFF" cx="309.949" cy="229.452" r="0.398" />
                <circle fill="#FFFFFF" cx="329.099" cy="258.608" r="0.398" />
                <circle fill="#FFFFFF" cx="334.263" cy="274.132" r="0.398" />
                <circle fill="#FFFFFF" cx="325.71" cy="288.732" r="0.398" />
                <circle fill="#FFFFFF" cx="311.687" cy="295.779" r="0.398" />
                <circle fill="#FFFFFF" cx="360.138" cy="292.39" r="0.398" />
                <circle fill="#FFFFFF" cx="358.255" cy="302.557" r="0.398" />
                <circle fill="#FFFFFF" cx="362.882" cy="302.956" r="0.398" />
                <circle fill="#FFFFFF" cx="361.483" cy="312.025" r="0.398" />
                <circle fill="#FFFFFF" cx="353.253" cy="315.306" r="0.398" />
                <circle fill="#FFFFFF" cx="335.232" cy="319.233" r="0.398" />
                <circle fill="#FFFFFF" cx="359.654" cy="327.571" r="0.398" />
                <circle fill="#FFFFFF" cx="363.28" cy="324.075" r="0.398" />
                <circle fill="#FFFFFF" cx="377.482" cy="325.419" r="0.398" />
                <circle fill="#FFFFFF" cx="364.334" cy="335.21" r="0.398" />
                <circle fill="#FFFFFF" cx="357.825" cy="238.812" r="0.398" />
                <circle fill="#FFFFFF" cx="392.414" cy="244.837" r="0.398" />
                <circle fill="#FFFFFF" cx="406.347" cy="261.19" r="0.398" />
                <circle fill="#FFFFFF" cx="380.849" cy="274.047" r="0.398" />
                <circle fill="#FFFFFF" cx="371.435" cy="289.969" r="0.398" />
                <circle fill="#FFFFFF" cx="429.478" cy="224.556" r="0.398" />
                <circle fill="#FFFFFF" cx="434.75" cy="226.224" r="0.398" />
                <circle fill="#FFFFFF" cx="433.674" cy="234.616" r="0.398" />
                <circle fill="#FFFFFF" cx="449.543" cy="238.22" r="0.398" />
                <circle fill="#FFFFFF" cx="441.635" cy="251.991" r="0.398" />
                <circle fill="#FFFFFF" cx="462.83" cy="240.663" r="0.398" />
                <circle fill="#FFFFFF" cx="475.31" cy="264.471" r="0.398" />
                <circle fill="#FFFFFF" cx="476.494" cy="268.99" r="0.398" />
                <circle fill="#FFFFFF" cx="488.974" cy="261.513" r="0.398" />
                <circle fill="#FFFFFF" cx="492.847" cy="245.697" r="0.398" />
                <circle fill="#FFFFFF" cx="447.983" cy="283.891" r="0.398" />
                <circle fill="#FFFFFF" cx="478.269" cy="294.273" r="0.398" />
                <circle fill="#FFFFFF" cx="481.55" cy="312.832" r="0.398" />
                <circle fill="#FFFFFF" cx="470.953" cy="324.989" r="0.878" />
                <circle fill="#FFFFFF" cx="467.08" cy="330.046" r="0.398" />
                <circle fill="#FFFFFF" cx="473.804" cy="331.444" r="0.398" />
                <circle fill="#FFFFFF" cx="451.103" cy="334.278" r="0.398" />
                <circle fill="#FFFFFF" cx="474.396" cy="339.298" r="0.398" />
                <circle fill="#FFFFFF" cx="465.681" cy="354.468" r="0.398" />
                <circle fill="#FFFFFF" cx="486.93" cy="338.545" r="0.398" />
                <circle fill="#FFFFFF" cx="462.992" cy="351.402" r="0.398" />
                <circle fill="#FFFFFF" cx="472.89" cy="370.229" r="0.398" />
                <circle fill="#FFFFFF" cx="483.541" cy="381.957" r="0.398" />
                <circle fill="#FFFFFF" cx="470.953" cy="386.529" r="0.398" />
                <circle fill="#FFFFFF" cx="462.238" cy="387.174" r="0.398" />
                <circle fill="#FFFFFF" cx="452.394" cy="381.365" r="0.398" />
                <circle fill="#FFFFFF" cx="451.996" cy="393.253" r="0.398" />
                <circle fill="#FFFFFF" cx="444.863" cy="396.481" r="0.398" />
                <circle fill="#FFFFFF" cx="517.377" cy="392.231" r="0.398" />
                <circle fill="#FFFFFF" cx="411.888" cy="294.004" r="0.398" />
                <circle fill="#FFFFFF" cx="404.948" cy="308.098" r="0.398" />
                <circle fill="#FFFFFF" cx="400.914" cy="320.385" r="0.398" />
                <circle fill="#FFFFFF" cx="416.944" cy="338.115" r="0.398" />
                <circle fill="#FFFFFF" cx="419.526" cy="346.507" r="0.398" />
                <circle fill="#FFFFFF" cx="422.7" cy="352.047" r="0.398" />
                <circle fill="#FFFFFF" cx="410.973" cy="358.449" r="0.398" />
                <circle fill="#FFFFFF" cx="394.405" cy="359.256" r="0.398" />
                <circle fill="#FFFFFF" cx="372.672" cy="352.585" r="0.398" />
                <circle fill="#FFFFFF" cx="382.409" cy="369.476" r="0.398" />
                <circle fill="#FFFFFF" cx="371.489" cy="360.063" r="0.398" />
                <circle fill="#FFFFFF" cx="359.224" cy="384.485" r="0.398" />
                <circle fill="#FFFFFF" cx="352.231" cy="413.587" r="0.398" />
                <circle fill="#FFFFFF" cx="345.883" cy="418.644" r="0.398" />
                <circle fill="#FFFFFF" cx="350.832" cy="421.441" r="0.398" />
                <circle fill="#FFFFFF" cx="355.512" cy="422.302" r="0.398" />
                <circle fill="#FFFFFF" cx="354.866" cy="428.972" r="0.398" />
                <circle fill="#FFFFFF" cx="361.537" cy="430.478" r="0.398" />
                <circle fill="#FFFFFF" cx="332.703" cy="427.95" r="0.398" />
                <circle fill="#FFFFFF" cx="314.898" cy="443.604" r="0.398" />
                <circle fill="#FFFFFF" cx="312.961" cy="450.92" r="0.398" />
                <circle fill="#FFFFFF" cx="315.167" cy="454.416" r="0.398" />
                <circle fill="#FFFFFF" cx="340.902" cy="453.125" r="0.398" />
                <circle fill="#FFFFFF" cx="352.629" cy="442.367" r="0.398" />
                <circle fill="#FFFFFF" cx="360.407" cy="443.604" r="0.398" />
                <circle fill="#FFFFFF" cx="359.6" cy="458.043" r="0.398" />
                <circle fill="#FFFFFF" cx="377.621" cy="455.815" r="0.398" />
                <circle fill="#FFFFFF" cx="387.089" cy="485.8" r="0.398" />
                <circle fill="#FFFFFF" cx="369.197" cy="490.297" r="0.398" />
                <circle fill="#FFFFFF" cx="366.992" cy="507.78" r="0.398" />
                <circle fill="#FFFFFF" cx="333.995" cy="519.851" r="0.398" />
                <circle fill="#FFFFFF" cx="338.406" cy="517.624" r="0.398" />
                <circle fill="#FFFFFF" cx="370.843" cy="510.039" r="0.398" />
                <circle fill="#FFFFFF" cx="382.839" cy="546.457" r="0.398" />
                <circle fill="#FFFFFF" cx="390.047" cy="548.77" r="0.398" />
                <circle fill="#FFFFFF" cx="409.467" cy="535.806" r="0.398" />
                <circle fill="#FFFFFF" cx="430.554" cy="547.695" r="0.398" />
                <circle fill="#FFFFFF" cx="437.278" cy="548.663" r="0.398" />
                <circle fill="#FFFFFF" cx="412.856" cy="561.842" r="0.398" />
                <circle fill="#FFFFFF" cx="420.118" cy="570.342" r="0.398" />
                <circle fill="#FFFFFF" cx="417.375" cy="576.313" r="0.398" />
                <circle fill="#FFFFFF" cx="409.068" cy="579.433" r="0.398" />
                <circle fill="#FFFFFF" cx="370.445" cy="579.002" r="0.398" />
                <circle fill="#FFFFFF" cx="362.613" cy="562.241" r="0.398" />
                <circle fill="#FFFFFF" cx="335.178" cy="555.441" r="0.398" />
                <circle fill="#FFFFFF" cx="325.065" cy="580.616" r="0.398" />
                <circle fill="#FFFFFF" cx="339.535" cy="576.313" r="0.398" />
                <circle fill="#FFFFFF" cx="354.597" cy="584.382" r="0.398" />
                <circle fill="#FFFFFF" cx="343.247" cy="592.666" r="0.398" />
                <circle fill="#FFFFFF" cx="322.827" cy="593.312" r="0.398" />
                <circle fill="#FFFFFF" cx="403.442" cy="489.275" r="0.398" />
                <circle fill="#FFFFFF" cx="415.707" cy="468.779" r="0.398" />
                <circle fill="#FFFFFF" cx="421.248" cy="477.655" r="0.398" />
                <circle fill="#FFFFFF" cx="436.633" cy="474.858" r="0.398" />
                <circle fill="#FFFFFF" cx="450.942" cy="480.528" r="0.398" />
                <circle fill="#FFFFFF" cx="436.955" cy="500.84" r="0.398" />
                <circle fill="#FFFFFF" cx="482.035" cy="496.053" r="0.398" />
                <circle fill="#FFFFFF" cx="478.699" cy="499.603" r="0.398" />
                <circle fill="#FFFFFF" cx="487.898" cy="512.567" r="0.398" />
                <circle fill="#FFFFFF" cx="388.81" cy="467.327" r="0.398" />
                <circle fill="#FFFFFF" cx="328.4" cy="431.285" r="0.398" />
                <circle fill="#FFFFFF" cx="354.221" cy="378.352" r="0.398" />
                <circle fill="#FFFFFF" cx="345.883" cy="373.672" r="0.398" />
                <circle fill="#FFFFFF" cx="335.77" cy="349.25" r="0.398" />
                <circle fill="#FFFFFF" cx="311.186" cy="345.215" r="0.398" />
                <circle fill="#FFFFFF" cx="324.473" cy="373.887" r="0.398" />
                <circle fill="#FFFFFF" cx="324.075" cy="397.579" r="0.398" />
                <circle fill="#FFFFFF" cx="313.929" cy="402.022" r="0.398" />
                <circle fill="#FFFFFF" cx="341.396" cy="395.566" r="0.398" />
                <circle fill="#FFFFFF" cx="349.142" cy="392.554" r="0.398" />
                <circle fill="#FFFFFF" cx="349.433" cy="396.965" r="0.398" />
                <circle fill="#FFFFFF" cx="313.445" cy="369.875" r="0.398" />
                <circle fill="#FFFFFF" cx="354.866" cy="373.887" r="0.398" />
                <circle fill="#FFFFFF" cx="341.795" cy="372.435" r="0.398" />
                <circle fill="#FFFFFF" cx="514.149" cy="269.388" r="0.398" />
                <circle fill="#FFFFFF" cx="510.115" cy="284.289" r="0.398" />
                <circle fill="#FFFFFF" cx="505.22" cy="295.026" r="0.398" />
                <circle fill="#FFFFFF" cx="502.1" cy="295.833" r="0.398" />
                <circle fill="#FFFFFF" cx="506.833" cy="303.902" r="0.398" />
                <circle fill="#FFFFFF" cx="533.623" cy="305.946" r="0.398" />
                <circle fill="#FFFFFF" cx="547.448" cy="297.178" r="0.398" />
                <circle fill="#FFFFFF" cx="571.386" cy="305.677" r="0.398" />
                <circle fill="#FFFFFF" cx="573.721" cy="305.785" r="0.398" />
                <circle fill="#FFFFFF" cx="589.213" cy="297.339" r="0.398" />
                <circle fill="#FFFFFF" cx="593.312" cy="297.738" r="0.398" />
                <circle fill="#FFFFFF" cx="599.058" cy="299.383" r="0.398" />
                <circle fill="#FFFFFF" cx="590.751" cy="323.644" r="0.398" />
                <circle fill="#FFFFFF" cx="594.947" cy="304.117" r="0.398" />
                <circle fill="#FFFFFF" cx="529.319" cy="320.901" r="0.398" />
                <circle fill="#FFFFFF" cx="509.738" cy="339.944" r="0.398" />
                <circle fill="#FFFFFF" cx="530.018" cy="343.44" r="0.398" />
                <circle fill="#FFFFFF" cx="537.603" cy="346.56" r="0.398" />
                <circle fill="#FFFFFF" cx="521.035" cy="350.864" r="0.398" />
                <circle fill="#FFFFFF" cx="500.884" cy="373.242" r="0.398" />
                <circle fill="#FFFFFF" cx="490.48" cy="370.229" r="0.398" />
                <circle fill="#FFFFFF" cx="544.489" cy="362.214" r="0.398" />
                <circle fill="#FFFFFF" cx="519.152" cy="372.704" r="0.398" />
                <circle fill="#FFFFFF" cx="504.359" cy="380.343" r="0.398" />
                <circle fill="#FFFFFF" cx="520.389" cy="399.87" r="0.398" />
                <circle fill="#FFFFFF" cx="521.573" cy="401.645" r="0.398" />
                <circle fill="#FFFFFF" cx="501.508" cy="403.044" r="0.398" />
                <circle fill="#FFFFFF" cx="496.021" cy="402.775" r="0.398" />
                <circle fill="#FFFFFF" cx="481.658" cy="403.044" r="0.398" />
                <circle fill="#FFFFFF" cx="474.342" cy="414.34" r="0.398" />
                <circle fill="#FFFFFF" cx="458.15" cy="411.704" r="0.398" />
                <circle fill="#FFFFFF" cx="460.356" cy="419.289" r="0.398" />
                <circle fill="#FFFFFF" cx="444.863" cy="412.135" r="0.398" />
                <circle fill="#FFFFFF" cx="434.804" cy="417.837" r="0.398" />
                <circle fill="#FFFFFF" cx="411.296" cy="426.874" r="0.398" />
                <circle fill="#FFFFFF" cx="407.692" cy="409.553" r="0.398" />
                <circle fill="#FFFFFF" cx="412.264" cy="403.044" r="0.398" />
                <circle fill="#FFFFFF" cx="415.137" cy="395.244" r="0.878" />
                <circle fill="#FFFFFF" cx="410.22" cy="396.804" r="0.398" />
                <circle fill="#FFFFFF" cx="401.721" cy="398.525" r="0.398" />
                <circle fill="#FFFFFF" cx="398.385" cy="401.161" r="0.398" />
                <circle fill="#FFFFFF" cx="389.294" cy="417.622" r="0.398" />
                <circle fill="#FFFFFF" cx="375.523" cy="412.135" r="0.398" />
                <circle fill="#FFFFFF" cx="374.393" cy="405.195" r="0.398" />
                <circle fill="#FFFFFF" cx="375.922" cy="449.145" r="0.398" />
                <circle fill="#FFFFFF" cx="409.822" cy="381.365" r="0.398" />
                <circle fill="#FFFFFF" cx="418.688" cy="376.685" r="0.398" />
                <circle fill="#FFFFFF" cx="422.108" cy="378.03" r="0.398" />
                <circle fill="#FFFFFF" cx="421.033" cy="438.31" r="0.398" />
                <circle fill="#FFFFFF" cx="416.084" cy="429.026" r="0.398" />
                <circle fill="#FFFFFF" cx="418.289" cy="412.35" r="0.398" />
                <circle fill="#FFFFFF" cx="450.242" cy="429.671" r="0.398" />
                <circle fill="#FFFFFF" cx="455.46" cy="442.442" r="0.398" />
                <circle fill="#FFFFFF" cx="479.076" cy="445.218" r="0.398" />
                <circle fill="#FFFFFF" cx="492.04" cy="457.214" r="0.398" />
                <circle fill="#FFFFFF" cx="486.553" cy="462.808" r="0.398" />
                <circle fill="#FFFFFF" cx="491.502" cy="462.539" r="0.398" />
                <circle fill="#FFFFFF" cx="496.989" cy="458.666" r="0.398" />
                <circle fill="#FFFFFF" cx="498.334" cy="456.138" r="0.398" />
                <circle fill="#FFFFFF" cx="508.555" cy="461.84" r="0.398" />
                <circle fill="#FFFFFF" cx="480.69" cy="418.106" r="0.398" />
                <circle fill="#FFFFFF" cx="515.494" cy="406.11" r="0.398" />
                <circle fill="#FFFFFF" cx="542.768" cy="424.96" r="0.878" />
                <circle fill="#FFFFFF" cx="547.232" cy="433.007" r="0.398" />
                <circle fill="#FFFFFF" cx="564.285" cy="438.278" r="0.398" />
                <circle fill="#FFFFFF" cx="555.786" cy="408.315" r="0.398" />
                <circle fill="#FFFFFF" cx="541.799" cy="428.596" r="0.398" />
                <circle fill="#FFFFFF" cx="580.315" cy="408.315" r="0.398" />
                <circle fill="#FFFFFF" cx="507.048" cy="415.362" r="0.398" />
                <circle fill="#FFFFFF" cx="580.746" cy="367.325" r="0.398" />
                <circle fill="#FFFFFF" cx="350.832" cy="189.268" r="0.398" />
                <circle fill="#FFFFFF" cx="342.44" cy="186.471" r="0.398" />
                <circle fill="#FFFFFF" cx="343.086" cy="187.008" r="0.398" />
                <circle fill="#FFFFFF" cx="329.852" cy="187.546" r="0.398" />
                <circle fill="#FFFFFF" cx="460.194" cy="107.286" r="0.398" />
                <circle fill="#FFFFFF" cx="462.723" cy="111.913" r="0.398" />
                <circle fill="#FFFFFF" cx="496.828" cy="75.14" r="0.398" />
                <circle fill="#FFFFFF" cx="461.001" cy="49.835" r="0.398" />
                <circle fill="#FFFFFF" cx="511.944" cy="90.341" r="0.398" />
                <circle fill="#FFFFFF" cx="415.169" cy="74.741" r="0.398" />
                <circle fill="#FFFFFF" cx="410.381" cy="78.561" r="0.398" />
                <circle fill="#FFFFFF" cx="360.891" cy="95.506" r="0.398" />
                <circle fill="#FFFFFF" cx="365.163" cy="97.657" r="0.398" />
                <circle fill="#FFFFFF" cx="324.473" cy="90.18" r="0.398" />
                <circle fill="#FFFFFF" cx="355.351" cy="139.67" r="0.398" />
                <circle fill="#FFFFFF" cx="355.404" cy="170.279" r="0.398" />
                <circle fill="#FFFFFF" cx="374.931" cy="131.924" r="0.398" />
                <circle fill="#FFFFFF" cx="324.473" cy="134.667" r="0.398" />
                <circle fill="#FFFFFF" cx="321.6" cy="81.573" r="0.398" />
              </svg>
            </div>
            <div className="starWrap starReflect">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 599.456 593.71"
                enableBackground="new 0 0 599.456 593.71"
                xmlSpace="preserve"
                id="starReflection"
              >
                <circle fill="#FFFFFF" cx="287.793" cy="593.312" r="0.398" />
                <circle fill="#FFFFFF" cx="300.965" cy="577.765" r="0.398" />
                <circle fill="#FFFFFF" cx="306.237" cy="570.749" r="0.398" />
                <circle fill="#FFFFFF" cx="282.496" cy="577.496" r="0.398" />
                <circle fill="#FFFFFF" cx="257.775" cy="561.358" r="0.398" />
                <circle fill="#FFFFFF" cx="287.624" cy="531.427" r="0.398" />
                <circle fill="#FFFFFF" cx="240.963" cy="524.725" r="0.398" />
                <circle fill="#FFFFFF" cx="183.157" cy="514.396" r="0.398" />
                <circle fill="#FFFFFF" cx="146.147" cy="518.592" r="0.398" />
                <circle fill="#FFFFFF" cx="104.511" cy="517.893" r="0.398" />
                <circle fill="#FFFFFF" cx="256.101" cy="518.162" r="0.398" />
                <circle fill="#FFFFFF" cx="238.941" cy="508.156" r="0.398" />
                <circle fill="#FFFFFF" cx="199.887" cy="510.716" r="0.398" />
                <circle fill="#FFFFFF" cx="176.917" cy="528.63" r="0.878" />
                <circle fill="#FFFFFF" cx="198.757" cy="549.255" r="0.398" />
                <circle fill="#FFFFFF" cx="133.344" cy="531.072" r="0.398" />
                <circle fill="#FFFFFF" cx="161.909" cy="535.86" r="0.398" />
                <circle fill="#FFFFFF" cx="157.283" cy="564.317" r="0.398" />
                <circle fill="#FFFFFF" cx="173.604" cy="534.838" r="0.398" />
                <circle fill="#FFFFFF" cx="251.83" cy="575.56" r="0.398" />
                <circle fill="#FFFFFF" cx="233.537" cy="567.437" r="0.398" />
                <circle fill="#FFFFFF" cx="264.063" cy="490.566" r="0.398" />
                <circle fill="#FFFFFF" cx="265.408" cy="485.402" r="0.398" />
                <circle fill="#FFFFFF" cx="269.012" cy="468.726" r="0.398" />
                <circle fill="#FFFFFF" cx="290.991" cy="439.161" r="0.398" />
                <circle fill="#FFFFFF" cx="255.079" cy="448.176" r="0.398" />
                <circle fill="#FFFFFF" cx="245.988" cy="476.956" r="0.398" />
                <circle fill="#FFFFFF" cx="231.55" cy="480.291" r="0.398" />
                <circle fill="#FFFFFF" cx="224.202" cy="470.501" r="0.398" />
                <circle fill="#FFFFFF" cx="229.581" cy="462.001" r="0.398" />
                <circle fill="#FFFFFF" cx="238.134" cy="452.103" r="0.398" />
                <circle fill="#FFFFFF" cx="230.872" cy="439.785" r="0.398" />
                <circle fill="#FFFFFF" cx="180.414" cy="423.001" r="0.398" />
                <circle fill="#FFFFFF" cx="256.317" cy="402.376" r="0.398" />
                <circle fill="#FFFFFF" cx="235.714" cy="399.762" r="0.398" />
                <circle fill="#FFFFFF" cx="224.094" cy="399.762" r="0.398" />
                <circle fill="#FFFFFF" cx="244.321" cy="384.915" r="0.398" />
                <circle fill="#FFFFFF" cx="266.936" cy="371.951" r="0.398" />
                <circle fill="#FFFFFF" cx="291.444" cy="365.711" r="0.398" />
                <circle fill="#FFFFFF" cx="259.652" cy="351.348" r="0.398" />
                <circle fill="#FFFFFF" cx="247.979" cy="353.607" r="0.398" />
                <circle fill="#FFFFFF" cx="239.802" cy="362.752" r="0.398" />
                <circle fill="#FFFFFF" cx="245.127" cy="368.701" r="0.398" />
                <circle fill="#FFFFFF" cx="233.669" cy="352.639" r="0.398" />
                <circle fill="#FFFFFF" cx="221.566" cy="356.727" r="0.398" />
                <circle fill="#FFFFFF" cx="189.881" cy="365.097" r="0.398" />
                <circle fill="#FFFFFF" cx="171.452" cy="388.788" r="0.398" />
                <circle fill="#FFFFFF" cx="199.403" cy="400.3" r="0.398" />
                <circle fill="#FFFFFF" cx="130.515" cy="374.587" r="0.398" />
                <circle fill="#FFFFFF" cx="112.849" cy="389.187" r="0.878" />
                <circle fill="#FFFFFF" cx="101.176" cy="393.845" r="0.398" />
                <circle fill="#FFFFFF" cx="105.372" cy="383.032" r="0.398" />
                <circle fill="#FFFFFF" cx="104.318" cy="373.188" r="0.398" />
                <circle fill="#FFFFFF" cx="74.656" cy="361.138" r="0.398" />
                <circle fill="#FFFFFF" cx="107.846" cy="358.072" r="0.398" />
                <circle fill="#FFFFFF" cx="84.338" cy="375.416" r="0.398" />
                <circle fill="#FFFFFF" cx="66.264" cy="379.159" r="0.398" />
                <circle fill="#FFFFFF" cx="10.964" cy="390.133" r="0.398" />
                <circle fill="#FFFFFF" cx="46.005" cy="399.117" r="0.398" />
                <circle fill="#FFFFFF" cx="40.389" cy="416.008" r="0.878" />
                <circle fill="#FFFFFF" cx="74.225" cy="449.414" r="0.398" />
                <circle fill="#FFFFFF" cx="125.19" cy="447.692" r="0.398" />
                <circle fill="#FFFFFF" cx="145.556" cy="433.814" r="0.398" />
                <circle fill="#FFFFFF" cx="183.857" cy="433.415" r="0.398" />
                <circle fill="#FFFFFF" cx="185.255" cy="411.866" r="0.398" />
                <circle fill="#FFFFFF" cx="117.475" cy="455.977" r="0.398" />
                <circle fill="#FFFFFF" cx="163.523" cy="476.848" r="0.398" />
                <circle fill="#FFFFFF" cx="164.814" cy="464.261" r="0.398" />
                <circle fill="#FFFFFF" cx="186.062" cy="479.839" r="0.398" />
                <circle fill="#FFFFFF" cx="202.093" cy="498.796" r="0.398" />
                <circle fill="#FFFFFF" cx="89.395" cy="487.123" r="0.398" />
                <circle fill="#FFFFFF" cx="89.686" cy="483.895" r="0.398" />
                <circle fill="#FFFFFF" cx="79.013" cy="487.123" r="0.398" />
                <circle fill="#FFFFFF" cx="56.742" cy="396.857" r="0.398" />
                <circle fill="#FFFFFF" cx="45.715" cy="446.509" r="0.398" />
                <circle fill="#FFFFFF" cx="75.022" cy="483.035" r="0.398" />
                <circle fill="#FFFFFF" cx="80.067" cy="476.848" r="0.398" />
                <circle fill="#FFFFFF" cx="112.203" cy="481.238" r="0.398" />
                <circle fill="#FFFFFF" cx="115.7" cy="339.513" r="0.398" />
                <circle fill="#FFFFFF" cx="96.227" cy="310.142" r="0.398" />
                <circle fill="#FFFFFF" cx="72.611" cy="311.218" r="0.398" />
                <circle fill="#FFFFFF" cx="50.986" cy="309.443" r="0.398" />
                <circle fill="#FFFFFF" cx="46.253" cy="304.763" r="0.398" />
                <circle fill="#FFFFFF" cx="21.723" cy="290.292" r="0.878" />
                <circle fill="#FFFFFF" cx="18.71" cy="260.222" r="0.398" />
                <circle fill="#FFFFFF" cx="54.913" cy="241.717" r="0.398" />
                <circle fill="#FFFFFF" cx="6.876" cy="250.808" r="0.398" />
                <circle fill="#FFFFFF" cx="12.632" cy="236.929" r="0.398" />
                <circle fill="#FFFFFF" cx="10.318" cy="254.197" r="0.398" />
                <circle fill="#FFFFFF" cx="0.398" cy="245.45" r="0.398" />
                <circle fill="#FFFFFF" cx="11.771" cy="269.721" r="0.398" />
                <circle fill="#FFFFFF" cx="31.965" cy="267.161" r="0.398" />
                <circle fill="#FFFFFF" cx="64.65" cy="290.615" r="0.398" />
                <circle fill="#FFFFFF" cx="64.22" cy="300.352" r="0.398" />
                <circle fill="#FFFFFF" cx="74.709" cy="300.352" r="0.398" />
                <circle fill="#FFFFFF" cx="84.199" cy="294.434" r="0.398" />
                <circle fill="#FFFFFF" cx="89.556" cy="290.292" r="0.398" />
                <circle fill="#FFFFFF" cx="106.286" cy="273.24" r="0.398" />
                <circle fill="#FFFFFF" cx="127.987" cy="290.691" r="0.398" />
                <circle fill="#FFFFFF" cx="128.611" cy="287.957" r="0.398" />
                <circle fill="#FFFFFF" cx="151.311" cy="296.425" r="0.398" />
                <circle fill="#FFFFFF" cx="179.445" cy="296.026" r="0.398" />
                <circle fill="#FFFFFF" cx="184.233" cy="293.896" r="0.398" />
                <circle fill="#FFFFFF" cx="203.384" cy="272.002" r="0.398" />
                <circle fill="#FFFFFF" cx="296.393" cy="284.375" r="0.398" />
                <circle fill="#FFFFFF" cx="260.997" cy="261.136" r="0.398" />
                <circle fill="#FFFFFF" cx="246.849" cy="262.696" r="0.398" />
                <circle fill="#FFFFFF" cx="269.604" cy="245.482" r="0.398" />
                <circle fill="#FFFFFF" cx="267.344" cy="240.91" r="0.398" />
                <circle fill="#FFFFFF" cx="253.842" cy="235.692" r="0.398" />
                <circle fill="#FFFFFF" cx="237.166" cy="243.653" r="0.398" />
                <circle fill="#FFFFFF" cx="230.496" cy="251.937" r="0.398" />
                <circle fill="#FFFFFF" cx="221.942" cy="250.055" r="0.398" />
                <circle fill="#FFFFFF" cx="219.898" cy="234.239" r="0.398" />
                <circle fill="#FFFFFF" cx="216.724" cy="232.464" r="0.398" />
                <circle fill="#FFFFFF" cx="221.996" cy="211.7" r="0.398" />
                <circle fill="#FFFFFF" cx="179.069" cy="238.919" r="0.398" />
                <circle fill="#FFFFFF" cx="182.189" cy="232.464" r="0.398" />
                <circle fill="#FFFFFF" cx="174.227" cy="234.185" r="0.398" />
                <circle fill="#FFFFFF" cx="166.589" cy="235.261" r="0.398" />
                <circle fill="#FFFFFF" cx="173.829" cy="229.667" r="0.398" />
                <circle fill="#FFFFFF" cx="146.309" cy="237.951" r="0.398" />
                <circle fill="#FFFFFF" cx="150.236" cy="222.405" r="0.398" />
                <circle fill="#FFFFFF" cx="141.951" cy="204.061" r="0.398" />
                <circle fill="#FFFFFF" cx="138.347" cy="187.6" r="0.398" />
                <circle fill="#FFFFFF" cx="156.669" cy="174.528" r="0.398" />
                <circle fill="#FFFFFF" cx="173.851" cy="182.167" r="0.398" />
                <circle fill="#FFFFFF" cx="175.25" cy="177.057" r="0.398" />
                <circle fill="#FFFFFF" cx="180.629" cy="176.035" r="0.398" />
                <circle fill="#FFFFFF" cx="166.589" cy="207.665" r="0.398" />
                <circle fill="#FFFFFF" cx="185.847" cy="213.959" r="0.398" />
                <circle fill="#FFFFFF" cx="187.299" cy="209.956" r="0.398" />
                <circle fill="#FFFFFF" cx="192.141" cy="212.991" r="0.398" />
                <circle fill="#FFFFFF" cx="190.85" cy="210.979" r="0.398" />
                <circle fill="#FFFFFF" cx="199.887" cy="203.663" r="0.398" />
                <circle fill="#FFFFFF" cx="213.152" cy="205.245" r="0.398" />
                <circle fill="#FFFFFF" cx="209.624" cy="193.195" r="0.398" />
                <circle fill="#FFFFFF" cx="220.544" cy="188.806" r="0.398" />
                <circle fill="#FFFFFF" cx="242.223" cy="176.949" r="0.398" />
                <circle fill="#FFFFFF" cx="242.223" cy="169.418" r="0.398" />
                <circle fill="#FFFFFF" cx="257.123" cy="158.659" r="0.398" />
                <circle fill="#FFFFFF" cx="272.939" cy="158.261" r="0.398" />
                <circle fill="#FFFFFF" cx="264.493" cy="135.098" r="0.398" />
                <circle fill="#FFFFFF" cx="257.554" cy="127.889" r="0.398" />
                <circle fill="#FFFFFF" cx="287.355" cy="123.64" r="0.398" />
                <circle fill="#FFFFFF" cx="269.711" cy="108.9" r="0.398" />
                <circle fill="#FFFFFF" cx="265.708" cy="94.376" r="0.398" />
                <circle fill="#FFFFFF" cx="254.757" cy="79.407" r="0.398" />
                <circle fill="#FFFFFF" cx="285.257" cy="60.948" r="0.398" />
                <circle fill="#FFFFFF" cx="301.525" cy="16.397" r="0.398" />
                <circle fill="#FFFFFF" cx="241.577" cy="24.606" r="0.398" />
                <circle fill="#FFFFFF" cx="225.116" cy="29.824" r="0.398" />
                <circle fill="#FFFFFF" cx="302.31" cy="77.754" r="0.398" />
                <circle fill="#FFFFFF" cx="244.643" cy="78.561" r="0.398" />
                <circle fill="#FFFFFF" cx="230.388" cy="86.952" r="0.398" />
                <circle fill="#FFFFFF" cx="228.236" cy="97.227" r="0.398" />
                <circle fill="#FFFFFF" cx="237.973" cy="103.897" r="0.398" />
                <circle fill="#FFFFFF" cx="228.774" cy="74.695" r="0.398" />
                <circle fill="#FFFFFF" cx="266.107" cy="99.755" r="0.398" />
                <circle fill="#FFFFFF" cx="285.957" cy="117.4" r="0.398" />
                <circle fill="#FFFFFF" cx="275.79" cy="165.039" r="0.398" />
                <circle fill="#FFFFFF" cx="280.233" cy="176.433" r="0.398" />
                <circle fill="#FFFFFF" cx="283.644" cy="177.864" r="0.398" />
                <circle fill="#FFFFFF" cx="302.74" cy="186.793" r="0.398" />
                <circle fill="#FFFFFF" cx="300.589" cy="180.876" r="0.398" />
                <circle fill="#FFFFFF" cx="300.987" cy="166.029" r="0.398" />
                <circle fill="#FFFFFF" cx="264.17" cy="184.319" r="0.398" />
                <circle fill="#FFFFFF" cx="276.973" cy="190.236" r="0.398" />
                <circle fill="#FFFFFF" cx="274.306" cy="196.131" r="0.398" />
                <circle fill="#FFFFFF" cx="258.522" cy="201.21" r="0.398" />
                <circle fill="#FFFFFF" cx="277.372" cy="201.587" r="0.398" />
                <circle fill="#FFFFFF" cx="286.925" cy="205.998" r="0.398" />
                <circle fill="#FFFFFF" cx="187.698" cy="193.195" r="0.398" />
                <circle fill="#FFFFFF" cx="223.556" cy="273.67" r="0.398" />
                <circle fill="#FFFFFF" cx="182.189" cy="263.234" r="0.398" />
                <circle fill="#FFFFFF" cx="111.988" cy="261.674" r="0.398" />
                <circle fill="#FFFFFF" cx="134.313" cy="266.515" r="0.398" />
                <circle fill="#FFFFFF" cx="129.633" cy="261.276" r="0.398" />
                <circle fill="#FFFFFF" cx="139.961" cy="255.273" r="0.398" />
                <circle fill="#FFFFFF" cx="149.213" cy="257.263" r="0.398" />
                <circle fill="#FFFFFF" cx="153.947" cy="267.968" r="0.878" />
                <circle fill="#FFFFFF" cx="52.869" cy="276.252" r="0.398" />
                <circle fill="#FFFFFF" cx="29.039" cy="299.114" r="0.398" />
                <circle fill="#FFFFFF" cx="39.206" cy="284.084" r="0.398" />
                <circle fill="#FFFFFF" cx="60.831" cy="267.161" r="0.398" />
                <circle fill="#FFFFFF" cx="55.559" cy="236.122" r="0.398" />
                <circle fill="#FFFFFF" cx="51.502" cy="225.578" r="0.398" />
                <circle fill="#FFFFFF" cx="76.216" cy="239.619" r="0.398" />
                <circle fill="#FFFFFF" cx="41.465" cy="220.845" r="0.398" />
                <circle fill="#FFFFFF" cx="39.029" cy="214.712" r="0.398" />
                <circle fill="#FFFFFF" cx="28.339" cy="211.883" r="0.398" />
                <circle fill="#FFFFFF" cx="17.312" cy="212.68" r="0.398" />
                <circle fill="#FFFFFF" cx="13.438" cy="217.563" r="0.398" />
                <circle fill="#FFFFFF" cx="55.16" cy="204.814" r="0.398" />
                <circle fill="#FFFFFF" cx="65.479" cy="210.032" r="0.398" />
                <circle fill="#FFFFFF" cx="68.631" cy="207.127" r="0.878" />
                <circle fill="#FFFFFF" cx="64.112" cy="203.2" r="0.398" />
                <circle fill="#FFFFFF" cx="99.185" cy="185.825" r="0.398" />
                <circle fill="#FFFFFF" cx="112.526" cy="176.035" r="0.398" />
                <circle fill="#FFFFFF" cx="116.722" cy="173.56" r="0.398" />
                <circle fill="#FFFFFF" cx="113.817" cy="173.614" r="0.398" />
                <circle fill="#FFFFFF" cx="115.431" cy="172.43" r="0.398" />
                <circle fill="#FFFFFF" cx="115.431" cy="173.883" r="0.398" />
                <circle fill="#FFFFFF" cx="72.99" cy="166.298" r="0.398" />
                <circle fill="#FFFFFF" cx="54.375" cy="175.636" r="0.398" />
                <circle fill="#FFFFFF" cx="52.815" cy="158.121" r="0.398" />
                <circle fill="#FFFFFF" cx="93.268" cy="138.863" r="0.398" />
                <circle fill="#FFFFFF" cx="87.405" cy="128.75" r="0.398" />
                <circle fill="#FFFFFF" cx="87.243" cy="125.2" r="0.398" />
                <circle fill="#FFFFFF" cx="55.828" cy="120.143" r="0.398" />
                <circle fill="#FFFFFF" cx="107.276" cy="102.66" r="0.398" />
                <circle fill="#FFFFFF" cx="122.586" cy="93.569" r="0.398" />
                <circle fill="#FFFFFF" cx="108.976" cy="75.387" r="0.398" />
                <circle fill="#FFFFFF" cx="106.932" cy="64.951" r="0.398" />
                <circle fill="#FFFFFF" cx="134.366" cy="76.785" r="0.398" />
                <circle fill="#FFFFFF" cx="150.02" cy="67.425" r="0.398" />
                <circle fill="#FFFFFF" cx="124.038" cy="137.465" r="0.398" />
                <circle fill="#FFFFFF" cx="136.841" cy="131.924" r="0.398" />
                <circle fill="#FFFFFF" cx="157.067" cy="140.262" r="0.398" />
                <circle fill="#FFFFFF" cx="162.608" cy="143.866" r="0.398" />
                <circle fill="#FFFFFF" cx="193.324" cy="139.465" r="0.398" />
                <circle fill="#FFFFFF" cx="206.45" cy="147.309" r="0.398" />
                <circle fill="#FFFFFF" cx="229.151" cy="145.318" r="0.398" />
                <circle fill="#FFFFFF" cx="232.809" cy="146.771" r="0.398" />
                <circle fill="#FFFFFF" cx="203.2" cy="116.302" r="0.398" />
                <circle fill="#FFFFFF" cx="189.992" cy="101.261" r="0.398" />
                <circle fill="#FFFFFF" cx="186.654" cy="86.554" r="0.398" />
                <circle fill="#FFFFFF" cx="202.254" cy="64.096" r="0.398" />
                <circle fill="#FFFFFF" cx="179.177" cy="51.798" r="0.398" />
                <circle fill="#FFFFFF" cx="178.208" cy="39.022" r="0.398" />
                <circle fill="#FFFFFF" cx="160.757" cy="39.022" r="0.398" />
                <circle fill="#FFFFFF" cx="150.989" cy="42.874" r="0.398" />
                <circle fill="#FFFFFF" cx="187.622" cy="86.016" r="0.398" />
                <circle fill="#FFFFFF" cx="173.389" cy="160.434" r="0.398" />
                <circle fill="#FFFFFF" cx="181.974" cy="167.966" r="0.398" />
                <circle fill="#FFFFFF" cx="142.328" cy="164.308" r="0.398" />
                <circle fill="#FFFFFF" cx="162.608" cy="137.303" r="0.398" />
                <circle fill="#FFFFFF" cx="69.814" cy="201.533" r="0.398" />
                <circle fill="#FFFFFF" cx="77.076" cy="199.166" r="0.398" />
                <circle fill="#FFFFFF" cx="75.624" cy="197.283" r="0.398" />
                <circle fill="#FFFFFF" cx="77.076" cy="195.669" r="0.398" />
                <circle fill="#FFFFFF" cx="79.712" cy="203.416" r="0.398" />
                <circle fill="#FFFFFF" cx="90.686" cy="204.653" r="0.398" />
                <circle fill="#FFFFFF" cx="92.085" cy="206.32" r="0.398" />
                <circle fill="#FFFFFF" cx="88.911" cy="194.701" r="0.398" />
                <circle fill="#FFFFFF" cx="86.705" cy="221.06" r="0.398" />
                <circle fill="#FFFFFF" cx="72.592" cy="189.967" r="0.398" />
                <circle fill="#FFFFFF" cx="69.76" cy="196.454" r="0.398" />
                <circle fill="#FFFFFF" cx="69.76" cy="198.789" r="0.398" />
                <circle fill="#FFFFFF" cx="69.029" cy="199.564" r="0.398" />
                <circle fill="#FFFFFF" cx="66.748" cy="195.669" r="0.398" />
                <circle fill="#FFFFFF" cx="48.781" cy="199.327" r="0.398" />
                <circle fill="#FFFFFF" cx="72.558" cy="264.041" r="0.398" />
                <circle fill="#FFFFFF" cx="29.039" cy="269.151" r="0.398" />
                <circle fill="#FFFFFF" cx="30.007" cy="266.139" r="0.398" />
                <circle fill="#FFFFFF" cx="66.318" cy="326.119" r="0.398" />
                <circle fill="#FFFFFF" cx="47.651" cy="324.559" r="0.398" />
                <circle fill="#FFFFFF" cx="34.095" cy="344.387" r="0.398" />
                <circle fill="#FFFFFF" cx="48.404" cy="357.674" r="0.398" />
                <circle fill="#FFFFFF" cx="11.847" cy="357.534" r="0.398" />
                <circle fill="#FFFFFF" cx="45.607" cy="345.753" r="0.398" />
                <circle fill="#FFFFFF" cx="23.52" cy="336.232" r="0.398" />
                <circle fill="#FFFFFF" cx="13.654" cy="326.119" r="0.398" />
                <circle fill="#FFFFFF" cx="44.24" cy="309.443" r="0.398" />
                <circle fill="#FFFFFF" cx="114.248" cy="385.915" r="0.398" />
                <circle fill="#FFFFFF" cx="196.767" cy="322.784" r="0.398" />
                <circle fill="#FFFFFF" cx="153.087" cy="334.08" r="0.398" />
                <circle fill="#FFFFFF" cx="171.452" cy="342.472" r="0.398" />
                <circle fill="#FFFFFF" cx="172.022" cy="347.367" r="0.398" />
                <circle fill="#FFFFFF" cx="117.776" cy="370.875" r="0.398" />
                <circle fill="#FFFFFF" cx="199.026" cy="317.081" r="0.398" />
                <circle fill="#FFFFFF" cx="282.944" cy="320.201" r="0.398" />
                <circle fill="#FFFFFF" cx="257.608" cy="307.936" r="0.398" />
                <circle fill="#FFFFFF" cx="195.508" cy="305.408" r="0.398" />
                <circle fill="#FFFFFF" cx="230.496" cy="301.75" r="0.398" />
                <circle fill="#FFFFFF" cx="220.221" cy="388.197" r="0.398" />
                <circle fill="#FFFFFF" cx="211.991" cy="391.693" r="0.398" />
                <circle fill="#FFFFFF" cx="212.744" cy="459.581" r="0.398" />
                <circle fill="#FFFFFF" cx="192.517" cy="442.152" r="0.398" />
                <circle fill="#FFFFFF" cx="370.09" cy="579.809" r="0.398" />
                <circle fill="#FFFFFF" cx="321.999" cy="539.357" r="0.398" />
                <circle fill="#FFFFFF" cx="334.479" cy="521.389" r="0.398" />
                <circle fill="#FFFFFF" cx="373.533" cy="529.889" r="0.398" />
                <circle fill="#FFFFFF" cx="416.137" cy="563.51" r="0.398" />
                <circle fill="#FFFFFF" cx="450.673" cy="553.451" r="0.398" />
                <circle fill="#FFFFFF" cx="433.351" cy="495.084" r="0.878" />
                <circle fill="#FFFFFF" cx="418.181" cy="481.399" r="0.398" />
                <circle fill="#FFFFFF" cx="466.381" cy="492.933" r="0.398" />
                <circle fill="#FFFFFF" cx="462.723" cy="472.115" r="0.398" />
                <circle fill="#FFFFFF" cx="456.59" cy="450.382" r="0.398" />
                <circle fill="#FFFFFF" cx="516.086" cy="455.04" r="0.398" />
                <circle fill="#FFFFFF" cx="532.87" cy="450.113" r="0.398" />
                <circle fill="#FFFFFF" cx="543.79" cy="450.78" r="0.398" />
                <circle fill="#FFFFFF" cx="572.569" cy="420.688" r="0.398" />
                <circle fill="#FFFFFF" cx="574.291" cy="409.122" r="0.398" />
                <circle fill="#FFFFFF" cx="545.995" cy="395.351" r="0.398" />
                <circle fill="#FFFFFF" cx="517.646" cy="395.75" r="0.398" />
                <circle fill="#FFFFFF" cx="558.314" cy="373.134" r="0.398" />
                <circle fill="#FFFFFF" cx="553.472" cy="358.234" r="0.398" />
                <circle fill="#FFFFFF" cx="550.245" cy="346.775" r="0.398" />
                <circle fill="#FFFFFF" cx="586.502" cy="338.706" r="0.398" />
                <circle fill="#FFFFFF" cx="593.71" cy="312.186" r="0.398" />
                <circle fill="#FFFFFF" cx="598.39" cy="353.769" r="0.398" />
                <circle fill="#FFFFFF" cx="535.021" cy="399.493" r="0.398" />
                <circle fill="#FFFFFF" cx="510.061" cy="435.535" r="0.398" />
                <circle fill="#FFFFFF" cx="515.44" cy="425.529" r="0.398" />
                <circle fill="#FFFFFF" cx="503.584" cy="428.058" r="0.398" />
                <circle fill="#FFFFFF" cx="495.429" cy="431.5" r="0.398" />
                <circle fill="#FFFFFF" cx="497.258" cy="420.688" r="0.398" />
                <circle fill="#FFFFFF" cx="477.623" cy="417.837" r="0.398" />
                <circle fill="#FFFFFF" cx="481.981" cy="412.942" r="0.398" />
                <circle fill="#FFFFFF" cx="497.688" cy="408.1" r="0.398" />
                <circle fill="#FFFFFF" cx="461.969" cy="423.378" r="0.398" />
                <circle fill="#FFFFFF" cx="458.634" cy="414.802" r="0.398" />
                <circle fill="#FFFFFF" cx="444.271" cy="422.409" r="0.398" />
                <circle fill="#FFFFFF" cx="419.128" cy="413.856" r="0.398" />
                <circle fill="#FFFFFF" cx="438.408" cy="408.1" r="0.398" />
                <circle fill="#FFFFFF" cx="436.364" cy="381.257" r="0.398" />
                <circle fill="#FFFFFF" cx="455.353" cy="394.383" r="0.398" />
                <circle fill="#FFFFFF" cx="460.033" cy="380.859" r="0.398" />
                <circle fill="#FFFFFF" cx="481.582" cy="379.267" r="0.398" />
                <circle fill="#FFFFFF" cx="476.494" cy="397.019" r="0.398" />
                <circle fill="#FFFFFF" cx="483.433" cy="405.088" r="0.398" />
                <circle fill="#FFFFFF" cx="453.363" cy="443.797" r="0.398" />
                <circle fill="#FFFFFF" cx="440.237" cy="458.666" r="0.398" />
                <circle fill="#FFFFFF" cx="423.937" cy="455.04" r="0.398" />
                <circle fill="#FFFFFF" cx="427.111" cy="455.439" r="0.398" />
                <circle fill="#FFFFFF" cx="404.249" cy="448.284" r="0.398" />
                <circle fill="#FFFFFF" cx="383.216" cy="419.289" r="0.398" />
                <circle fill="#FFFFFF" cx="373.102" cy="404.442" r="0.398" />
                <circle fill="#FFFFFF" cx="371.004" cy="404.388" r="0.398" />
                <circle fill="#FFFFFF" cx="376.222" cy="400.408" r="0.398" />
                <circle fill="#FFFFFF" cx="402.797" cy="395.997" r="0.398" />
                <circle fill="#FFFFFF" cx="381.419" cy="361.214" r="0.398" />
                <circle fill="#FFFFFF" cx="344.699" cy="371.036" r="0.398" />
                <circle fill="#FFFFFF" cx="339.966" cy="372.005" r="0.398" />
                <circle fill="#FFFFFF" cx="309.949" cy="364.258" r="0.398" />
                <circle fill="#FFFFFF" cx="329.099" cy="335.102" r="0.398" />
                <circle fill="#FFFFFF" cx="334.263" cy="319.578" r="0.398" />
                <circle fill="#FFFFFF" cx="325.71" cy="304.978" r="0.398" />
                <circle fill="#FFFFFF" cx="311.687" cy="297.931" r="0.398" />
                <circle fill="#FFFFFF" cx="360.138" cy="301.32" r="0.398" />
                <circle fill="#FFFFFF" cx="358.255" cy="291.153" r="0.398" />
                <circle fill="#FFFFFF" cx="362.882" cy="290.754" r="0.398" />
                <circle fill="#FFFFFF" cx="361.483" cy="281.685" r="0.398" />
                <circle fill="#FFFFFF" cx="353.253" cy="278.404" r="0.398" />
                <circle fill="#FFFFFF" cx="335.232" cy="274.477" r="0.398" />
                <circle fill="#FFFFFF" cx="359.654" cy="266.139" r="0.398" />
                <circle fill="#FFFFFF" cx="363.28" cy="269.635" r="0.398" />
                <circle fill="#FFFFFF" cx="377.482" cy="268.291" r="0.398" />
                <circle fill="#FFFFFF" cx="364.334" cy="258.5" r="0.398" />
                <circle fill="#FFFFFF" cx="357.825" cy="354.898" r="0.398" />
                <circle fill="#FFFFFF" cx="392.414" cy="348.873" r="0.398" />
                <circle fill="#FFFFFF" cx="406.347" cy="332.52" r="0.398" />
                <circle fill="#FFFFFF" cx="380.849" cy="319.664" r="0.398" />
                <circle fill="#FFFFFF" cx="371.435" cy="303.741" r="0.398" />
                <circle fill="#FFFFFF" cx="429.478" cy="369.154" r="0.398" />
                <circle fill="#FFFFFF" cx="434.75" cy="367.486" r="0.398" />
                <circle fill="#FFFFFF" cx="433.674" cy="359.094" r="0.398" />
                <circle fill="#FFFFFF" cx="449.543" cy="355.49" r="0.398" />
                <circle fill="#FFFFFF" cx="441.635" cy="341.719" r="0.398" />
                <circle fill="#FFFFFF" cx="462.83" cy="353.047" r="0.398" />
                <circle fill="#FFFFFF" cx="475.31" cy="329.239" r="0.398" />
                <circle fill="#FFFFFF" cx="476.494" cy="324.72" r="0.398" />
                <circle fill="#FFFFFF" cx="488.974" cy="332.197" r="0.398" />
                <circle fill="#FFFFFF" cx="492.847" cy="348.013" r="0.398" />
                <circle fill="#FFFFFF" cx="447.983" cy="309.819" r="0.398" />
                <circle fill="#FFFFFF" cx="478.269" cy="299.437" r="0.398" />
                <circle fill="#FFFFFF" cx="481.55" cy="280.878" r="0.398" />
                <circle fill="#FFFFFF" cx="470.953" cy="268.721" r="0.878" />
                <circle fill="#FFFFFF" cx="467.08" cy="263.664" r="0.398" />
                <circle fill="#FFFFFF" cx="473.804" cy="262.266" r="0.398" />
                <circle fill="#FFFFFF" cx="451.103" cy="259.432" r="0.398" />
                <circle fill="#FFFFFF" cx="474.396" cy="254.412" r="0.398" />
                <circle fill="#FFFFFF" cx="465.681" cy="239.242" r="0.398" />
                <circle fill="#FFFFFF" cx="486.93" cy="255.165" r="0.398" />
                <circle fill="#FFFFFF" cx="462.992" cy="242.308" r="0.398" />
                <circle fill="#FFFFFF" cx="472.89" cy="223.481" r="0.398" />
                <circle fill="#FFFFFF" cx="483.541" cy="211.754" r="0.398" />
                <circle fill="#FFFFFF" cx="470.953" cy="207.181" r="0.398" />
                <circle fill="#FFFFFF" cx="462.238" cy="206.536" r="0.398" />
                <circle fill="#FFFFFF" cx="452.394" cy="212.345" r="0.398" />
                <circle fill="#FFFFFF" cx="451.996" cy="200.457" r="0.398" />
                <circle fill="#FFFFFF" cx="444.863" cy="197.229" r="0.398" />
                <circle fill="#FFFFFF" cx="517.377" cy="201.479" r="0.398" />
                <circle fill="#FFFFFF" cx="411.888" cy="299.706" r="0.398" />
                <circle fill="#FFFFFF" cx="404.948" cy="285.612" r="0.398" />
                <circle fill="#FFFFFF" cx="400.914" cy="273.325" r="0.398" />
                <circle fill="#FFFFFF" cx="416.944" cy="255.595" r="0.398" />
                <circle fill="#FFFFFF" cx="419.526" cy="247.204" r="0.398" />
                <circle fill="#FFFFFF" cx="422.7" cy="241.663" r="0.398" />
                <circle fill="#FFFFFF" cx="410.973" cy="235.261" r="0.398" />
                <circle fill="#FFFFFF" cx="394.405" cy="234.454" r="0.398" />
                <circle fill="#FFFFFF" cx="372.672" cy="241.125" r="0.398" />
                <circle fill="#FFFFFF" cx="382.409" cy="224.234" r="0.398" />
                <circle fill="#FFFFFF" cx="371.489" cy="233.648" r="0.398" />
                <circle fill="#FFFFFF" cx="359.224" cy="209.225" r="0.398" />
                <circle fill="#FFFFFF" cx="352.231" cy="180.123" r="0.398" />
                <circle fill="#FFFFFF" cx="345.883" cy="175.066" r="0.398" />
                <circle fill="#FFFFFF" cx="350.832" cy="172.269" r="0.398" />
                <circle fill="#FFFFFF" cx="355.512" cy="171.408" r="0.398" />
                <circle fill="#FFFFFF" cx="354.866" cy="164.738" r="0.398" />
                <circle fill="#FFFFFF" cx="361.537" cy="163.232" r="0.398" />
                <circle fill="#FFFFFF" cx="332.703" cy="165.76" r="0.398" />
                <circle fill="#FFFFFF" cx="314.898" cy="150.106" r="0.398" />
                <circle fill="#FFFFFF" cx="312.961" cy="142.79" r="0.398" />
                <circle fill="#FFFFFF" cx="315.167" cy="139.294" r="0.398" />
                <circle fill="#FFFFFF" cx="340.902" cy="140.585" r="0.398" />
                <circle fill="#FFFFFF" cx="352.629" cy="151.343" r="0.398" />
                <circle fill="#FFFFFF" cx="360.407" cy="150.106" r="0.398" />
                <circle fill="#FFFFFF" cx="359.6" cy="135.667" r="0.398" />
                <circle fill="#FFFFFF" cx="377.621" cy="137.895" r="0.398" />
                <circle fill="#FFFFFF" cx="387.089" cy="107.91" r="0.398" />
                <circle fill="#FFFFFF" cx="369.197" cy="103.413" r="0.398" />
                <circle fill="#FFFFFF" cx="366.992" cy="85.93" r="0.398" />
                <circle fill="#FFFFFF" cx="333.995" cy="73.859" r="0.398" />
                <circle fill="#FFFFFF" cx="338.406" cy="76.086" r="0.398" />
                <circle fill="#FFFFFF" cx="370.843" cy="83.671" r="0.398" />
                <circle fill="#FFFFFF" cx="382.839" cy="47.253" r="0.398" />
                <circle fill="#FFFFFF" cx="390.047" cy="44.94" r="0.398" />
                <circle fill="#FFFFFF" cx="409.467" cy="57.904" r="0.398" />
                <circle fill="#FFFFFF" cx="430.554" cy="46.015" r="0.398" />
                <circle fill="#FFFFFF" cx="437.278" cy="45.047" r="0.398" />
                <circle fill="#FFFFFF" cx="412.856" cy="31.868" r="0.398" />
                <circle fill="#FFFFFF" cx="420.118" cy="23.368" r="0.398" />
                <circle fill="#FFFFFF" cx="417.375" cy="17.397" r="0.398" />
                <circle fill="#FFFFFF" cx="409.068" cy="14.277" r="0.398" />
                <circle fill="#FFFFFF" cx="370.445" cy="14.708" r="0.398" />
                <circle fill="#FFFFFF" cx="362.613" cy="31.469" r="0.398" />
                <circle fill="#FFFFFF" cx="335.178" cy="38.269" r="0.398" />
                <circle fill="#FFFFFF" cx="325.065" cy="13.094" r="0.398" />
                <circle fill="#FFFFFF" cx="339.535" cy="17.397" r="0.398" />
                <circle fill="#FFFFFF" cx="354.597" cy="9.328" r="0.398" />
                <circle fill="#FFFFFF" cx="343.247" cy="1.044" r="0.398" />
                <circle fill="#FFFFFF" cx="322.827" cy="0.398" r="0.398" />
                <circle fill="#FFFFFF" cx="403.442" cy="104.435" r="0.398" />
                <circle fill="#FFFFFF" cx="415.707" cy="124.931" r="0.398" />
                <circle fill="#FFFFFF" cx="421.248" cy="116.055" r="0.398" />
                <circle fill="#FFFFFF" cx="436.633" cy="118.852" r="0.398" />
                <circle fill="#FFFFFF" cx="450.942" cy="113.182" r="0.398" />
                <circle fill="#FFFFFF" cx="436.955" cy="92.87" r="0.398" />
                <circle fill="#FFFFFF" cx="482.035" cy="97.657" r="0.398" />
                <circle fill="#FFFFFF" cx="478.699" cy="94.107" r="0.398" />
                <circle fill="#FFFFFF" cx="487.898" cy="81.143" r="0.398" />
                <circle fill="#FFFFFF" cx="388.81" cy="126.383" r="0.398" />
                <circle fill="#FFFFFF" cx="328.4" cy="162.425" r="0.398" />
                <circle fill="#FFFFFF" cx="354.221" cy="215.358" r="0.398" />
                <circle fill="#FFFFFF" cx="345.883" cy="220.038" r="0.398" />
                <circle fill="#FFFFFF" cx="335.77" cy="244.46" r="0.398" />
                <circle fill="#FFFFFF" cx="311.186" cy="248.495" r="0.398" />
                <circle fill="#FFFFFF" cx="324.473" cy="219.823" r="0.398" />
                <circle fill="#FFFFFF" cx="324.075" cy="196.131" r="0.398" />
                <circle fill="#FFFFFF" cx="313.929" cy="191.689" r="0.398" />
                <circle fill="#FFFFFF" cx="341.396" cy="198.144" r="0.398" />
                <circle fill="#FFFFFF" cx="349.142" cy="201.156" r="0.398" />
                <circle fill="#FFFFFF" cx="349.433" cy="196.745" r="0.398" />
                <circle fill="#FFFFFF" cx="313.445" cy="223.835" r="0.398" />
                <circle fill="#FFFFFF" cx="354.866" cy="219.823" r="0.398" />
                <circle fill="#FFFFFF" cx="341.795" cy="221.275" r="0.398" />
                <circle fill="#FFFFFF" cx="514.149" cy="324.322" r="0.398" />
                <circle fill="#FFFFFF" cx="510.115" cy="309.421" r="0.398" />
                <circle fill="#FFFFFF" cx="505.22" cy="298.684" r="0.398" />
                <circle fill="#FFFFFF" cx="502.1" cy="297.877" r="0.398" />
                <circle fill="#FFFFFF" cx="506.833" cy="289.808" r="0.398" />
                <circle fill="#FFFFFF" cx="533.623" cy="287.764" r="0.398" />
                <circle fill="#FFFFFF" cx="547.448" cy="296.532" r="0.398" />
                <circle fill="#FFFFFF" cx="571.386" cy="288.033" r="0.398" />
                <circle fill="#FFFFFF" cx="573.721" cy="287.925" r="0.398" />
                <circle fill="#FFFFFF" cx="589.213" cy="296.371" r="0.398" />
                <circle fill="#FFFFFF" cx="593.312" cy="295.972" r="0.398" />
                <circle fill="#FFFFFF" cx="599.058" cy="294.327" r="0.398" />
                <circle fill="#FFFFFF" cx="590.751" cy="270.066" r="0.398" />
                <circle fill="#FFFFFF" cx="594.947" cy="289.593" r="0.398" />
                <circle fill="#FFFFFF" cx="529.319" cy="272.809" r="0.398" />
                <circle fill="#FFFFFF" cx="509.738" cy="253.766" r="0.398" />
                <circle fill="#FFFFFF" cx="530.018" cy="250.27" r="0.398" />
                <circle fill="#FFFFFF" cx="537.603" cy="247.15" r="0.398" />
                <circle fill="#FFFFFF" cx="521.035" cy="242.846" r="0.398" />
                <circle fill="#FFFFFF" cx="500.884" cy="220.468" r="0.398" />
                <circle fill="#FFFFFF" cx="490.48" cy="223.481" r="0.398" />
                <circle fill="#FFFFFF" cx="544.489" cy="231.496" r="0.398" />
                <circle fill="#FFFFFF" cx="519.152" cy="221.006" r="0.398" />
                <circle fill="#FFFFFF" cx="504.359" cy="213.367" r="0.398" />
                <circle fill="#FFFFFF" cx="520.389" cy="193.84" r="0.398" />
                <circle fill="#FFFFFF" cx="521.573" cy="192.065" r="0.398" />
                <circle fill="#FFFFFF" cx="501.508" cy="190.666" r="0.398" />
                <circle fill="#FFFFFF" cx="496.021" cy="190.935" r="0.398" />
                <circle fill="#FFFFFF" cx="481.658" cy="190.666" r="0.398" />
                <circle fill="#FFFFFF" cx="474.342" cy="179.37" r="0.398" />
                <circle fill="#FFFFFF" cx="458.15" cy="182.006" r="0.398" />
                <circle fill="#FFFFFF" cx="460.356" cy="174.421" r="0.398" />
                <circle fill="#FFFFFF" cx="444.863" cy="181.575" r="0.398" />
                <circle fill="#FFFFFF" cx="434.804" cy="175.873" r="0.398" />
                <circle fill="#FFFFFF" cx="411.296" cy="166.836" r="0.398" />
                <circle fill="#FFFFFF" cx="407.692" cy="184.157" r="0.398" />
                <circle fill="#FFFFFF" cx="412.264" cy="190.666" r="0.398" />
                <circle fill="#FFFFFF" cx="415.137" cy="198.467" r="0.878" />
                <circle fill="#FFFFFF" cx="410.22" cy="196.906" r="0.398" />
                <circle fill="#FFFFFF" cx="401.721" cy="195.185" r="0.398" />
                <circle fill="#FFFFFF" cx="398.385" cy="192.549" r="0.398" />
                <circle fill="#FFFFFF" cx="389.294" cy="176.088" r="0.398" />
                <circle fill="#FFFFFF" cx="375.523" cy="181.575" r="0.398" />
                <circle fill="#FFFFFF" cx="374.393" cy="188.515" r="0.398" />
                <circle fill="#FFFFFF" cx="375.922" cy="144.565" r="0.398" />
                <circle fill="#FFFFFF" cx="409.822" cy="212.345" r="0.398" />
                <circle fill="#FFFFFF" cx="418.688" cy="217.025" r="0.398" />
                <circle fill="#FFFFFF" cx="422.108" cy="215.68" r="0.398" />
                <circle fill="#FFFFFF" cx="421.033" cy="155.4" r="0.398" />
                <circle fill="#FFFFFF" cx="416.084" cy="164.684" r="0.398" />
                <circle fill="#FFFFFF" cx="418.289" cy="181.36" r="0.398" />
                <circle fill="#FFFFFF" cx="450.242" cy="164.039" r="0.398" />
                <circle fill="#FFFFFF" cx="455.46" cy="151.268" r="0.398" />
                <circle fill="#FFFFFF" cx="479.076" cy="148.492" r="0.398" />
                <circle fill="#FFFFFF" cx="492.04" cy="136.496" r="0.398" />
                <circle fill="#FFFFFF" cx="486.553" cy="130.902" r="0.398" />
                <circle fill="#FFFFFF" cx="491.502" cy="131.171" r="0.398" />
                <circle fill="#FFFFFF" cx="496.989" cy="135.044" r="0.398" />
                <circle fill="#FFFFFF" cx="498.334" cy="137.572" r="0.398" />
                <circle fill="#FFFFFF" cx="508.555" cy="131.87" r="0.398" />
                <circle fill="#FFFFFF" cx="480.69" cy="175.604" r="0.398" />
                <circle fill="#FFFFFF" cx="515.494" cy="187.6" r="0.398" />
                <circle fill="#FFFFFF" cx="542.768" cy="168.751" r="0.878" />
                <circle fill="#FFFFFF" cx="547.232" cy="160.703" r="0.398" />
                <circle fill="#FFFFFF" cx="564.285" cy="155.432" r="0.398" />
                <circle fill="#FFFFFF" cx="555.786" cy="185.395" r="0.398" />
                <circle fill="#FFFFFF" cx="541.799" cy="165.114" r="0.398" />
                <circle fill="#FFFFFF" cx="580.315" cy="185.395" r="0.398" />
                <circle fill="#FFFFFF" cx="507.048" cy="178.348" r="0.398" />
                <circle fill="#FFFFFF" cx="580.746" cy="226.385" r="0.398" />
                <circle fill="#FFFFFF" cx="350.832" cy="404.442" r="0.398" />
                <circle fill="#FFFFFF" cx="342.44" cy="407.24" r="0.398" />
                <circle fill="#FFFFFF" cx="343.086" cy="406.702" r="0.398" />
                <circle fill="#FFFFFF" cx="329.852" cy="406.164" r="0.398" />
                <circle fill="#FFFFFF" cx="460.194" cy="486.424" r="0.398" />
                <circle fill="#FFFFFF" cx="462.723" cy="481.797" r="0.398" />
                <circle fill="#FFFFFF" cx="496.828" cy="518.57" r="0.398" />
                <circle fill="#FFFFFF" cx="461.001" cy="543.875" r="0.398" />
                <circle fill="#FFFFFF" cx="511.944" cy="503.369" r="0.398" />
                <circle fill="#FFFFFF" cx="415.169" cy="518.969" r="0.398" />
                <circle fill="#FFFFFF" cx="410.381" cy="515.149" r="0.398" />
                <circle fill="#FFFFFF" cx="360.891" cy="498.204" r="0.398" />
                <circle fill="#FFFFFF" cx="365.163" cy="496.053" r="0.398" />
                <circle fill="#FFFFFF" cx="324.473" cy="503.53" r="0.398" />
                <circle fill="#FFFFFF" cx="355.351" cy="454.04" r="0.398" />
                <circle fill="#FFFFFF" cx="355.404" cy="423.431" r="0.398" />
                <circle fill="#FFFFFF" cx="374.931" cy="461.786" r="0.398" />
                <circle fill="#FFFFFF" cx="324.473" cy="459.043" r="0.398" />
                <circle fill="#FFFFFF" cx="321.6" cy="512.137" r="0.398" />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* sky gradient */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        id="sky"
      >
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          {/* sky zenith */}
          <stop stopColor="rgb(0,0,0)" offset="0%" id="skyZenith">
            <animate
              attributeName="stop-color"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="rgba(0,19,48,0);rgba(0,19,48,0);rgba(0,19,48,0);rgba(0,19,48,0);rgba(37,32,70,.33);rgba(69,40,92,0.67);rgba(102,44,113,1);rgba(94,112,155,1);rgba(0,137,185,1);rgba(9,127,182,1);rgba(20,116,178,1);rgba(27,106,175,1);rgba(29,101,173,1);rgba(31,96,173,1);rgba(47,100,170,1);rgba(66,119,177,1);rgba(73,119,174,1);rgba(79,120,174,1);rgba(76,101,150,1);rgba(71,82,133,0.93);rgba(59,66,108,0.78);rgba(44,49,84,0.56);rgba(27,30,60,0.33);rgba(0,19,48,0.0);rgba(0,19,48,0.0)"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.12;0.21;0.21;0.07;0.07;0;0;0;0;"
              repeatCount="indefinite"
            />
          </stop>

          {/* sky mid */}
          <stop stopColor="rgb(0,0,0)" offset="0%" id="skyMid">
            <animate
              attributeName="stop-color"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="rgba(38,118,127,0.3);rgba(64,105,129,0.3);rgba(76,77,120,0.3);rgba(91,64,124,0.3);rgba(137,66,131,0.53);rgba(175,69,138,0.77);rgba(239,80,154,1);rgba(218,166,181,1);rgba(211,226,199,1);rgba(134,189,187,1);rgba(127,180,194,1);rgba(142,205,217,1)rgba(119,203,227,1);rgba(92,202,273,1);rgba(107,197,222,1);rgba(122,200,212,1);rgba(135,203,202,1);rgba(148,205,192,1);rgba(153,134,141,1);rgba(174,93,104,1);rgba(150,96,114,0.78);rgba(127,98,124,0.79);rgba(99,99,134,0.53);rgba(54,92,145,0.3);rgba(38,118,123,0.3)"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              dur={`${duration}`}
              begin={`${durStart}`}
              values=".66;.62;.52;.52;.52;.52;.58;.66;.69;.55;.57;.77;.78;.78;.74;.74;.74;.74;.55;.56;.56;.56;.56;.56;.56;.66;"
              repeatCount="indefinite"
            />
          </stop>

          {/* sky horizon */}
          <stop stopColor="rgb(0,0,0)" offset="100%" id="skyHorizon">
            <animate
              attributeName="stop-color"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="rgba(99,95,61,1);rgba(113,99,69,1);rgba(128,103,77,1);rgba(142,107,85,1);rgba(172,126,106,1);rgba(206,150,130,1);rgba(249,180,160,1);rgba(244,194,150,1);rgba(242,207,137,1);rgba(255,232,177,1);rgba(245,234,198,1);rgba(235,237,220,1)rgba(229,239,231,1);rgba(226,243,244,1);rgba(216,227,222,1);rgba(206,215,203,1);rgba(197,203,185,1);rgba(187,192,167,1);rgba(218,156,108,1);rgba(244,117,49,1);rgba(208,119,68,1);rgba(179,120,84,1);rgba(151,119,96,1);rgba(119,99,84,1);rgba(99,95,61,1)"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <rect
          id="sky-rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#skyGradient)"
        ></rect>
      </svg>

      {/* reflection gradient */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        id="reflection"
      >
        <linearGradient id="reflect" x1="0%" y1="0%" x2="0%" y2="100%">
          {/* reflected sky horizon */}
          <stop stopColor="rgb(0,0,0)" offset="0%" id="reflectHorizon">
            <animate
              attributeName="stop-color"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="rgba(99,95,61,1);rgba(113,99,69,1);rgba(128,103,77,1);rgba(142,107,85,1);rgba(172,126,106,1);rgba(206,150,130,1);rgba(249,180,160,1);rgba(244,194,150,1);rgba(242,207,137,1);rgba(255,232,177,1);rgba(245,234,198,1);rgba(235,237,220,1)rgba(229,239,231,1);rgba(226,243,244,1);rgba(216,227,222,1);rgba(206,215,203,1);rgba(197,203,185,1);rgba(187,192,167,1);rgba(218,156,108,1);rgba(244,117,49,1);rgba(208,119,68,1);rgba(179,120,84,1);rgba(151,119,96,1);rgba(119,99,84,1);rgba(99,95,61,1)"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              dur={`${duration}`}
              begin={`${durStart}`}
              values=".22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;.22;"
              repeatCount="indefinite"
            />
          </stop>

          {/* reflected sky mid */}
          <stop stopColor="rgb(0,0,0)" offset="50%" id="reflectMid">
            <animate
              attributeName="stop-color"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="rgba(38,118,127,0.3);rgba(64,105,129,0.3);rgba(76,77,120,0.3);rgba(91,64,124,0.3);rgba(137,66,131,0.53);rgba(175,69,138,0.77);rgba(239,80,154,1);rgba(218,166,181,1);rgba(211,226,199,1);rgba(134,189,187,1);rgba(127,180,194,1);rgba(142,205,217,1)rgba(119,203,227,1);rgba(92,202,273,1);rgba(107,197,222,1);rgba(122,200,212,1);rgba(135,203,202,1);rgba(148,205,192,1);rgba(153,134,141,1);rgba(174,93,104,1);rgba(150,96,114,0.78);rgba(127,98,124,0.79);rgba(99,99,134,0.53);rgba(54,92,145,0.3);rgba(38,118,123,0.3)"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              dur={`${duration}`}
              begin={`${durStart}`}
              values=".62;.66;.73;.77;.87;.64;.55;.5;.47;.47;.47;.45;.45;.45;.42;.42;.45;.48;.58;.64;.64;.6;.6;.6;.6;"
              repeatCount="indefinite"
            />
          </stop>

          {/* reflected sky zenith */}
          <stop stopColor="rgb(0,0,0)" offset="100%" id="reflectZenith">
            <animate
              attributeName="stop-color"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="rgba(0,19,48,0);rgba(0,19,48,0);rgba(0,19,48,0);rgba(0,19,48,0);rgba(37,32,70,.33);rgba(69,40,92,0.67);rgba(102,44,113,1);rgba(94,112,155,1);rgba(0,137,185,1);rgba(9,127,182,1);rgba(20,116,178,1);rgba(27,106,175,1);rgba(29,101,173,1);rgba(31,96,173,1);rgba(47,100,170,1);rgba(66,119,177,1);rgba(73,119,174,1);rgba(79,120,174,1);rgba(76,101,150,1);rgba(71,82,133,0.93);rgba(59,66,108,0.78);rgba(44,49,84,0.56);rgba(27,30,60,0.33);rgba(0,19,48,0.0);rgba(0,19,48,0.0)"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              dur={`${duration}`}
              begin={`${durStart}`}
              values="1;1;1;1;1;1;1;.85;.85;.85;.85;.85;.85;.85;.85;.85;.85;.85;.9;.9;.9;.95;1;1;1;"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <rect
          id="reflection-rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#reflect)"
        ></rect>
        {/* rect 속성에서 style="fill:url(#reflect)"  => fill="url(#reflect)" 이렇게 바꾸니 해결됨!! */}
      </svg>
      {/* end reflection gradient */}

      <section id="bottom"></section>

      {/*  Sun  */}
      {!isClear || isNight ? null : (
        <>
          <div className={`sunMask ${isNight ? 'night' : ''}`}>
            <div className="suncrane">
              <div className="sun">
                <div></div>
              </div>
            </div>
          </div>

          {/* Lighting */}
          <div className={`lighting ${isNight ? 'night' : ''}`}>
            <div className="suncrane">
              <svg
                version="1.1"
                id="lensFlare"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 684.9 116"
                enableBackground="new 0 0 684.9 116"
                xmlSpace="preserve"
              >
                <polygon
                  opacity="0.2"
                  fill="#F9BB70"
                  points="33.5,116 0,58 33.5,0 100.5,0 134,58 100.5,116 "
                />
                <polygon
                  opacity="0.2"
                  fill="#F9BB70"
                  points="86,96.5 63.7,58 86,19.5 130.4,19.5 152.6,58 130.4,96.5 "
                />
                <polygon
                  opacity="0.3"
                  fill="#EF519A"
                  points="160.5,68.1 154.7,58 160.5,47.9 172.2,47.9 178.1,58 172.2,68.1 "
                />
                <polygon
                  opacity="0.6833"
                  fill="#F9BB70"
                  points="280.9,62.1 278.6,58 280.9,53.9 285.7,53.9 288,58 285.7,62.1 "
                />
                <polygon
                  opacity="0.4"
                  fill="#F9BB70"
                  points="221,72.9 212.4,58 221,43.1 238.2,43.1 246.7,58 238.2,72.9 "
                />
                <polygon
                  opacity="0.2"
                  fill="#F9BB70"
                  points="651.4,0 684.9,58 651.4,116 584.4,116 550.9,58 584.4,0 "
                />
                <polygon
                  opacity="0.2"
                  fill="#F9BB70"
                  points="598.9,19.5 621.1,58 598.9,96.5 554.4,96.5 532.2,58 554.4,19.5 "
                />
                <polygon
                  opacity="0.3"
                  fill="#EF519A"
                  points="524.4,47.9 530.2,58 524.4,68.1 512.7,68.1 506.8,58 512.7,47.9 "
                />
                <polygon
                  opacity="0.6833"
                  fill="#F9BB70"
                  points="403.9,53.9 406.3,58 403.9,62.1 399.2,62.1 396.9,58 399.2,53.9 "
                />
                <polygon
                  opacity="0.4"
                  fill="#F9BB70"
                  points="463.9,43.1 472.5,58 463.9,72.9 446.7,72.9 438.1,58 446.7,43.1 "
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </DefaultSkyStyle>
  );
};

export default DefaultSky;
