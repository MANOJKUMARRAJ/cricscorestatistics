import React, { useState, useEffect } from 'react'
import Popup from './component/Popup';
import './App.css';

import bat from './images/batt-removebg-preview.png'
import Keeping from './images/keeping-removebg-preview.png'
import all from './images/all-removebg-preview.png'
import ball from './images/ball-removebg-preview.png'
import logoo from './images/logo-removebg-preview.png'
// import { specialCharMap } from '@testing-library/user-event/dist/keyboard';


function App() {


  const [total, setTotal] = useState(0)
  const [tscore, setTscore] = useState('')
  const [mscore, setMscore] = useState('')
  const [lscore, setLscore] = useState('')
  const [toppp, setToppp] = useState(0)
  const [midpp, setMidpp] = useState(0)
  const [lowpp, setLowpp] = useState(0)
  const [rr, setRr] = useState(0)
  const [rohit, setRohit] = useState('')
  const [rohitb, setRohitb] = useState(0)
  const [rohitsr, setRohitsr] = useState(0)
  const [virat, setVirat] = useState('')
  const [viratb, setViratb] = useState(0)
  const [viratsr, setViratsr] = useState(0)
  const [rahul, setRahul] = useState('')
  const [rahulb, setRahulb] = useState(0)
  const [rahulsr, setRahulsr] = useState(0)
  const [surya, setSurya] = useState('')
  const [suryab, setSuryab] = useState(0)
  const [suryasr, setSuryasr] = useState(0)
  const [hardik, setHardik] = useState('')
  const [hardikb, setHardikb] = useState(0)
  const [hardiksr, setHardiksr] = useState(0)
  const [dinesh, setDinesh] = useState('')
  const [dineshb, setDineshb] = useState(0)
  const [dineshsr, setDineshsr] = useState(0)
  const [axar, setAxar] = useState('')
  const [axarb, setAxarb] = useState(0)
  const [axarsr, setAxarsr] = useState(0)
  const [yuzi, setYuzi] = useState('')
  const [yuzib, setYuzib] = useState(0)
  const [yuzisr, setYuzisr] = useState(0)
  const [boom, setBoom] = useState('')
  const [boomb, setBoomb] = useState(0)
  const [boomsr, setBoomsr] = useState(0)
  const [bhuvi, setBhuvi] = useState('')

  const [bhuvib, setBhuvib] = useState(0)
  const [bhuvisr, setBhuvisr] = useState(0)
  const [harsh, setHarsh] = useState('')
  const [harshb, setHarshb] = useState(0)
  const [harshsr, setHarshsr] = useState(0)
  const [btnpopup, setBtnpopup] = useState(false);
  const [timepopup, setTimepopup] = useState(false);
  // const [isDisabled, setDisabled] = useState(true);
  const [perDisabled, setPerDisabled] = useState(true);
  const [scoreDisabled, setScoreDisabled] = useState(true);
  const [topDisabled, setTopDisabled] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTimepopup(true)
    }, 2000)

  }, [])
  // function openn() {
  //   setDisabled(false)
  // }




  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Top Order score', tscore)
    // console.log('Middle Order score', mscore)
    // console.log('Lower Order score', lscore)

    setTotal((Number(tscore)) + (Number(mscore)) + (Number(lscore)));

    runrate();
    setPerDisabled(false)



  }
  const runrate = () => {
    const displayyy = total / 20;
    setRr(displayyy)
  }
  function percenta() {
    toppercent();
    loppercent();
    moppercent();
    setScoreDisabled(false)
  }
  const toppercent = () => {


    const qdivie = tscore / total
    const per = qdivie * 100
    const perr = per.toFixed(2)


    setToppp(perr);

  }
  const moppercent = () => {


    const qqdivie = mscore / total
    const ooo = qqdivie * 100
    const oooo = ooo.toFixed(2)


    setMidpp(oooo || 0)
  }
  const loppercent = () => {


    const qqqdivie = lscore / total
    const nnn = qqqdivie * 100
    const nnnn = nnn.toFixed(2)


    setLowpp(nnnn)
  }
  function scorecardaa() {
    const ro = Math.round((tscore * 52) / 100);
    const roballs = Math.round(ro / 2)
    const rosr = (ro / roballs) * 100.00
    const rosrr = rosr.toFixed(2.5);
    setRohit(ro)
    setRohitb(roballs)
    setRohitsr(rosrr)
    const vk = Math.round((tscore * 32) / 100);
    const vkballs = Math.round(vk / 1.6)
    const vksr = (vk / vkballs) * 100.00
    const vksrr = vksr.toFixed(2);
    setVirat(vk)
    setViratb(vkballs)
    setViratsr(vksrr)
    const kl = Math.round((tscore * 16) / 100);
    const klballs = Math.round(kl / 1.3)
    const klsr = (kl / klballs) * 100.00
    const klsrr = klsr.toFixed(2);
    setRahul(kl)
    setRahulb(klballs)
    setRahulsr(klsrr)
    const sky = Math.round((mscore * 44) / 100);
    const skyballs = Math.round(sky / 1.9)
    const skysr = (sky / skyballs) * 100.00
    const skysrr = skysr.toFixed(2);
    setSurya(sky)
    setSuryab(skyballs)
    setSuryasr(skysrr)
    const hp = Math.round((mscore * 30) / 100);
    const hpballs = Math.round(hp / 1.5)
    const hpsr = (hp / hpballs) * 100.00
    const hpsrr = hpsr.toFixed(1.5);
    setHardik(hp)
    setHardikb(hpballs)
    setHardiksr(hpsrr)
    const dk = Math.round((mscore * 20) / 100);
    const dkballs = Math.round(dk / 1.8)
    const dksr = (dk / dkballs) * 100.00
    const dksrr = dksr.toFixed(2);
    setDinesh(dk)
    setDineshb(dkballs)
    setDineshsr(dksrr)
    const ax = Math.round((mscore * 6) / 100);
    const axballs = Math.round(ax / 1.125)
    const axsr = (ax / axballs) * 100.00
    const axsrr = axsr.toFixed(2);
    setAxar(ax)
    setAxarb(axballs)
    setAxarsr(axsrr)
    const harp = Math.round((lscore * 40) / 100);
    const harpballs = Math.round(harp / 1.6)
    const harpsr = (harp / harpballs) * 100.00
    const harpsrr = harpsr.toFixed(2);
    setHarsh(harp)
    setHarshb(harpballs)
    setHarshsr(harpsrr)
    const bvi = Math.round((lscore * 30) / 100);
    const bviballs = Math.round(bvi / 1.33)
    const bvisr = (bvi / bviballs) * 100.00
    const bvisrr = bvisr.toFixed(2);
    setBhuvi(bvi)
    setBhuvib(bviballs)
    setBhuvisr(bvisrr)
    const boo = Math.round((lscore * 20) / 100);
    const booballs = Math.round(boo / 1.3)
    const boosr = (boo / booballs) * 100.00
    const boosrr = boosr.toFixed(2);
    setBoom(boo)
    setBoomb(booballs)
    setBoomsr(boosrr)
    const cha = Math.round((lscore * 10) / 100);
    const chaballs = Math.round(cha / 1.1)
    const chasr = (cha / chaballs) * 100.00
    const chasrr = chasr.toFixed(2);
    setYuzi(cha)
    setYuzib(chaballs)
    setYuzisr(chasrr)
    setBtnpopup(true)
    setTopDisabled(false)


  }


  let maxSpeed = [rohit, virat, rahul, surya, hardik, dinesh, axar, yuzi, boom, bhuvi, harsh];

  function compare(a, b) {
    if (Number(a) < Number(b)) {
      return 1;
    }
    if (Number(a) > Number(b)) {
      return -1;
    }
    return 0;
  }



  var arrayOfObjects = [
    {
      virat
    },
    {

      rohit
    },
    {
      rahul
    },
    {
      surya
    }
  ];
  const sorttedarray = [...arrayOfObjects].sort((a, b) => {
    return a.virat > b.virat ? -1 : 1
  })
  console.log(arrayOfObjects);
  console.log(sorttedarray);

  // const data = [Object.values(arrayOfObjects[0]),  Object.values(arrayOfObjects[1]), Object.values(arrayOfObjects[2])]
  // const sortedData = data.sort((a,b)=>{
  //   return Number(b)-Number(a)
  // })

  // const matchData = sortedData.map((a)=>{
  //   if(a === Object.values(arrayOfObjects[0]) ){
  //     return Object.keys(arrayOfObjects[0])
  //   }else if(a === Object.values(arrayOfObjects[1])){
  //     return Object.keys(arrayOfObjects[1])
  //   }else if(a === Object.values(arrayOfObjects[2])){
  //     return Object.keys(arrayOfObjects[2])
  //   }else {}

  // })

  // console.log("This is matchData1", Object.values(arrayOfObjects[0]))
  // console.log("This is matchData2", Object.keys(arrayOfObjects[0]))

  // console.log("This is matchData", matchData)
  // console.log("This is data", data)
  // console.log("This is sorted data", Number(sortedData[0]))
  // console.log("This is sorted data", Object.values(arrayOfObjects[1]))  
  // console.log("this is mathcheble data", matchData)
  // console.log('data 1', {virat})
  // console.log('data 2', rohit)
  const ok = maxSpeed.sort(compare);
  // console.log('sorted', ok[0])
  // console.log('sorted', ok[1])
  // console.log('top 1', Object.values(sortable[0][1]))
  // console.log('top 2', Object.values(sortable[2][1]))

  // const roh =  Object.values(sortable[0][1])



  // for (const [key, val] of Object.entries(sortable[0])) {
  //   console.log('buddy',key, val)
  // }


  // console.log(top1[0])
  const top1 = ok[0]
  const top2 = ok[1]
  const top3 = ok[2]
  const top4 = ok[3]
  return (
    <div className="App">
      <header className="App-header">
        <div className='whole'>
          <div className='firstbox'>
            <div className='firs2'>
              <div className='firs21'>
                <div className='firs111'><h2 id='head11'>Top Order</h2> </div>
                <div className='firs112'><h5 id='head12'>contribution &#8594;</h5> </div>
                <div className='firs113'><h2 id='head13'>{toppp} &nbsp;%</h2> </div>
              </div>
              <div className='firs22'>
                <div className='midpb'>
                  <div className='playerinfo'>
                    <div className='face'>
                      <div className='faceimgro' > </div>
                    </div>
                    <div className='namee'><h2 className='fontname'>Rohit Sharma</h2></div>
                    <div className='iconn'><img src={bat} height='50px' width='50px' id='im' alt='d' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgvk'></div></div>
                    <div className='namee'><h2 className='fontname'>Virat Kohli</h2></div>
                    <div className='iconn'><img src={bat} height='50px' width='50px' id='im' alt='dv' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgkl'></div></div>
                    <div className='namee'><h2 className='fontname'>Kl Rahul</h2></div>
                    <div className='iconn'><img src={bat} height='50px' width='50px' id='im' alt='dfv' /></div>
                  </div>

                </div>
              </div>
            </div>

            <div className='firs2'>
              <div className='firs21'>
                <div className='firs111'><h2 id='head11'>Middle Order</h2> </div>
                <div className='firs112'><h5 id='head12'>contribution &#8594;</h5> </div>
                <div className='firs113'><h2 id='head13'>{midpp} &nbsp;%</h2> </div>
              </div>
              <div className='firs22'>
                <div className='midpb'>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgsky'></div></div>
                    <div className='namee'><h2 className='fontname'><h2 className='fontname'>Surya Kumar Yadav</h2></h2></div>
                    <div className='iconn'><img src={bat} height='50px' width='50px' id='im' alt='v sdf' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimghar'></div></div>
                    <div className='namee'><h2 className='fontname'>Hardik Pandya</h2></div>
                    <div className='iconn'><img src={all} height='50px' width='50px' id='imd' alt='okk' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgdk'></div></div>
                    <div className='namee'><h2 className='fontname'>Dinesh Karthik</h2></div>
                    <div className='iconn'><img src={Keeping} height='50px' width='50px' id='imd' alt='okk' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgaxar'></div></div>
                    <div className='namee'><h2 className='fontname'>Axar patel</h2></div>
                    <div className='iconn'><img src={all} height='50px' width='50px' id='imd' alt='okk' /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='firs3'>
              <div className='firs31'>
                <div className='firs111'><h2 id='head11'>Lower Order</h2> </div>
                <div className='firs112'><h5 id='head12'>contribution &#8594;</h5> </div>
                <div className='firs113'><h2 id='head13'>{lowpp} &nbsp;%</h2> </div>
              </div>
              <div className='firs32'>
                <div className='lowpb'>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgchahal'></div></div>
                    <div className='namee'> <h2 className='fontname'>Yuzvendra Chahal</h2></div>
                    <div className='iconn'><img src={ball} height='40px' width='40px' id='imdd' alt='okk' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgboom'></div></div>
                    <div className='namee'><h2 className='fontname'>Jaspit Bumrah</h2></div>
                    <div className='iconn'><img src={ball} height='40px' width='40px' id='imdd' alt='okk' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgbhuva'></div></div>
                    <div className='namee'><h2 className='fontname'>Bhuvaneshwar Kumar</h2></div>
                    <div className='iconn'><img src={ball} height='40px' width='40px' id='imdd' alt='okk' /></div>
                  </div>
                  <div className='playerinfo'>
                    <div className='face'><div className='faceimgharshal'></div></div>
                    <div className='namee'><h2 className='fontname'>Harshal Patel</h2></div>
                    <div className='iconn'><img src={ball} height='40px' width='40px' id='imdd' alt='okk' /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='secondbox'>
            <div className='secondboxx1'>
              <div className='btno'> <button className='btncss' onClick={percenta} disabled={perDisabled}>check orders Percentage</button></div>
              <div className='btno'> <button className='btncss' onClick={scorecardaa} disabled={scoreDisabled}>check Scorecard</button></div>
              <div className='btno'> <button className='btncss' disabled={topDisabled}>Top 4 scores of match </button></div>

            </div>
            <div className='secondboxx2'>
              <form onClick={handleSubmit}>
                <label id='colo'>Top Order Score</label><br />
                <input name='tscore' type='number' placeholder='Enter Top Order Score' value={tscore} onChange={(e) => setTscore(e.target.value)} /><br />
                <label id='colo'>Middle Order Score</label><br />
                <input name='mscore' type='number' placeholder='Enter Middle Order Score' value={mscore} onChange={(e) => setMscore(e.target.value)} /><br />
                <label id='colo'>Lower Order Score</label><br />
                <input name='lscore' type='number' placeholder='Enter Lower Order Score' value={lscore} onChange={(e) => setLscore(e.target.value)} /><br />
                <button className='button button2'>Submit Score</button>

              </form>
            </div>
            <div className='secondboxx3'>
              <div className='secondboxx31'> <h3 className='topp4'>Top 4 scores &#8594;</h3>  </div>
              <div className='scocolor'><div><p>{top1}</p></div>
                <div><p>{top2}</p></div>
                <div><p>{top3}</p></div>
                <div><p>{top4}</p></div></div>



            </div>

            <div className='secondboxx4'><p className='lovee'>😍 A website from Rohit and manoj 😍</p></div>
          </div>
          <div className='thirdbox'>
            <div className='three1'>
              <div className='thrs1'><div className='thrs11'></div><div className='thrs12'><h2 id='scorecss'><img src={logoo} height='30px' width='30px' alt='ind logo' />IND  {total}  </h2></div></div>
              <div className='thrs2'>
                <h3 id='tosscss'>Ind Won the Toss and Elected to Bat First</h3>
              </div>
              <div className='thrs3'><h2 id='runratecss'>Run Rate : &nbsp;&nbsp; {rr}</h2></div>
            </div>
            <div className='three2'><marquee id='venuecss' direction="left" behavior="alternate">IND vs Pak T20 Internationl match , Melbourne cricket ground ,Melbourne,Australia </marquee></div>
          </div>
        </div>

        <Popup trigger={btnpopup} setTrigger={setBtnpopup}>
          <div className='scoreca'><h2 id='colornameee'> Scorecard</h2></div>
          <div className='headdiv'>
            <div className='headdiv1'><h6 className='cometop'>Player name</h6></div>
            <div className='headdiv2'><h6 className='cometop'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Runs</h6></div>
            <div className='headdiv3'><h6 className='cometop'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strike Rate</h6></div>
          </div>

          <div className='scardd'>
            <div className='scardd1'>
              <div className='scardd11'>Rohit Sharma</div>
              <div className='scardd12'>{rohit}({rohitb})</div>
              <div className='scardd13'>{rohitsr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Virat Kohli</div>
              <div className='scardd12'>{virat}({viratb})</div>
              <div className='scardd13'>{viratsr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Kl rahul</div>
              <div className='scardd12'>{rahul}({rahulb})</div>
              <div className='scardd13'>{rahulsr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Surya Kumar Yadav</div>
              <div className='scardd12'>{surya}({suryab})</div>
              <div className='scardd13'>{suryasr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Hardik Pandya</div>
              <div className='scardd12'>{hardik}({hardikb})</div>
              <div className='scardd13'>{hardiksr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Dinesh kartik</div>
              <div className='scardd12'>{dinesh}({dineshb})</div>
              <div className='scardd13'>{dineshsr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Axar patel</div>
              <div className='scardd12'>{axar}({axarb})</div>
              <div className='scardd13'>{axarsr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Yuzvendra Chahal</div>
              <div className='scardd12'>{yuzi}({yuzib})</div>
              <div className='scardd13'>{yuzisr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Jasprit Bumrah</div>
              <div className='scardd12'>{boom}({boomb})</div>
              <div className='scardd13'>{boomsr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Bhuvaneshwar Kumar</div>
              <div className='scardd12'>{bhuvi}({bhuvib})</div>
              <div className='scardd13'>{bhuvisr}</div>
            </div>
            <div className='scardd1'>
              <div className='scardd11'>Harshal Patel</div>
              <div className='scardd12'>{harsh}({harshb})</div>
              <div className='scardd13'>{harshsr}</div>
            </div>

          </div>

        </Popup>
        <Popup trigger={timepopup} setTrigger={setTimepopup}>
          <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
            <path class="monkey" fill="#fff" stroke="red" d="M331 439.6H167.5L111 329.4v-50.2L61 227V112h56l133-51.6L380.5 112H439v115l-52.6 55.8v46.6L331 439.6zM179.3 425H319v-38H179.4v38zm-53.5-99l39 75.8V278L138 225.7V168l58.3-57.6 53 26.4 52.5-26.4L361 168v57.8L333.8 278v123.3l38-75.4V124L250 76.2l-124.2 48V326zm53.5 46.3H319v-90.7L249 258l-69.5 23.5v90.8zm69.5-129.8l74 24.8 23.6-45v-48l-47.3-46-49.5 25-50-25L153 174v48.4l23 45 73-24.7zm137.6-115.8v134.7l38-40.3v-94h-38zM75.6 221l35.5 37V126.7H76V221zm142.8 111.8l-25.8-26.6L203 296l26 26.5-10.6 10.3zm62.7 0l-10.4-10.2 25-26.6 10.7 10-25 26.7zm-50-101.5h-66v-67.6h66v67.6zm-51.4-14.7h37v-38.2h-37v38.2zM333.8 231h-66.4v-67.5h66.4V231zM282 216.5h37v-38.2h-37v38.2z" />
          </svg>
          <h6 id='colornamee'> &#128591;Hello &#128591;</h6>
          <p id='colorname'>Enter Scores for Top,Middle and Lower order respectively and check their contribution,player scores,strikerates,top 4 scores and many more.....</p>
        </Popup>



      </header>
    </div>
  );
}

export default App;
