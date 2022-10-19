<template lang="pug">
  div.top
    div(id="bouncyCircle")
    div(id="spinner").spinner

</template>

<script>
export default {
  name: "mojs",
  mounted() {
    const bouncyCircle = new mojs.Shape({
      parent:       '#bouncyCircle',
      shape:        'circle',
      fill:         {'#264040': '#FC46AD'},
      radius:       {20: 80},
      duration:     2000,
      isYoyo:       true,
      isShowStart:  true,
      easing:       'elastic.inout',
      repeat:       10,
    });

    // bouncyCircle.play()

    const spinner = new mojs.Shape({
      parent:           '#spinner',
      shape:            'circle',
      stroke:           '#FC46AD',
      strokeDasharray:  '125, 125',
      strokeDashoffset: {'0': '-125'},
      strokeWidth:      4,
      fill:             'none',
      x: 0,
      y: 0,
      rotate:            {'-90': '270'},
      radius:           20,
      isShowStart:      true,
      duration:         2000,
      easing:           'back.in',
      repeat:       10,
    }).then({
      rotate:            {'-90': '270'},
      strokeDashoffset: {'-125': '-250'},
      duration:         3000,
      easing:           'cubic.out',
    });

    // spinner.play();

    const timeline = new mojs.Timeline;
    timeline.add(bouncyCircle,spinner);
    timeline.play();


    // document.addEventListener( 'click', function (e) {
      // debugger;
      // spinner.tune({ x: e.pageX-895, y: e.pageY-315  })
      //   .replay();
    // });
    // ---------- generate 使用示例
    const OPTS = {
      fill:           'none',
      radius:         25,
      strokeWidth:    { 50 : 0 },
      scale:          { 0: 1 },
      duration:       500,
      left: 0,        top: 0,
      easing: 'cubic.out'
    };

    const mainCircle = new mojs.Shape({
      ...OPTS,
      stroke: 'cyan',
    });

    const smallCircles = [];
    const colors = [ 'deeppink', 'magenta', 'yellow', '#00F87F' ]

    for ( let i = 0; i < 4; i++ ) {
      smallCircles.push(new mojs.Shape({
          ...OPTS,
          parent:         mainCircle.el,
          strokeWidth:    { 30: 0 },
          left: '50%',    top: '50%',
          stroke:         colors[ i % colors.length],
          delay:          'rand(0, 350)',
          x:              'rand(-50, 50)',
          y:              'rand(-50, 50)',
          radius:         'rand(5, 20)'
        })
      );
    }

    document.addEventListener( 'click', function (e) {
      mainCircle
        .tune({ x: e.pageX, y: e.pageY  })
        .replay();
      for ( let i = 0; i < smallCircles.length; i++ ) {
        smallCircles[i]
          .generate()
          .replay();
      }
    });
    // ---- svg转动画效果
    /* ADD CUSTOM SHAPE SOMEWHERE IN YOUR CODE */
    class Svg extends mojs.CustomShape {
      getShape () { return '<svg t="1665559352258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2176" width="200" height="200"><path id="shape1" d="M510.55 802.85c-41 0-83-10.37-121.41-30-37.2-19-71.38-46.73-98.84-80.25h-0.07c-13.51 20.76-29.56 25.13-40.66 25.13a145 145 0 0 1-145-145v-214A137.54 137.54 0 0 1 242.06 221.2h122.75a17.15 17.15 0 0 1 0 34.3H242.06a103.25 103.25 0 0 0-103.24 103.26v214a110.71 110.71 0 0 0 110.73 110.68c4.76 0 9.14-5.24 12-9.63a33.72 33.72 0 0 1 26.69-15.49 34.53 34.53 0 0 1 28.6 12.57c24.49 29.89 54.88 54.59 87.9 71.43 34.11 17.41 69.71 26.23 105.82 26.23 65 0 130.57-29.92 180-82.07a288.64 288.64 0 0 0 79.59-199.24c0-45.3-12.93-91.51-37.39-133.64a322.79 322.79 0 0 0-91.18-99.85 17.15 17.15 0 0 1 19.92-27.92 357.67 357.67 0 0 1 100.91 110.55c27.48 47.35 42 99.52 42 150.86a321 321 0 0 1-24.25 122.69 324.36 324.36 0 0 1-64.74 100.14c-55.83 58.93-130.5 92.77-204.85 92.78z" fill="#191007" p-id="2177"></path><path id="shape2" d="M249.78 601.83a17.15 17.15 0 0 1-16.25-11.67 321.82 321.82 0 0 1-16.87-102.87c0-51.34 14.52-103.51 42-150.86a357.58 357.58 0 0 1 100.91-110.58 17.15 17.15 0 0 1 19.93 27.92 322.82 322.82 0 0 0-91.17 99.87C263.88 395.77 251 442 251 487.29a287.53 287.53 0 0 0 15 91.92 17.16 17.16 0 0 1-16.25 22.62zM774.48 717.7a17.15 17.15 0 1 1 0-34.3 110.85 110.85 0 0 0 110.7-110.73v-214A103.37 103.37 0 0 0 781.9 255.45H657.06a17.15 17.15 0 0 1 0-34.3H781.9c75.84 0 137.56 61.7 137.56 137.54v214a145 145 0 0 1-145 145z" fill="#191007" p-id="2178"></path><path id="shape3" d="M403.77 393.76m-35.84 0a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0Z" fill="#191007" p-id="2179"></path><path id="shape4" d="M587.33 393.74m-35.84 0a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0Z" fill="#191007" p-id="2180"></path><path id="shape5" d="M509 538.39m-52.03 0a52.03 52.03 0 1 0 104.06 0 52.03 52.03 0 1 0-104.06 0Z" fill="#191007" p-id="2181"></path><path id="shape6" d="M467.15 662.18c-57.17 0-87.17-23.46-88.42-24.46A11.43 11.43 0 0 1 393 619.86c0.2 0.15 25.55 19.45 74.14 19.45 7.23 0 12.67-2.45 17.13-7.71 8.53-10.08 13.21-30.58 13.16-57.74a282.22 282.22 0 0 0-3.12-40.69 11.44 11.44 0 1 1 22.56-3.76 302.29 302.29 0 0 1 3.42 44.41c0.06 33.52-6.19 57.93-18.57 72.55-8.72 10.34-20.72 15.81-34.55 15.81z" fill="#191007" p-id="2182"></path><path id="shape7" d="M550.86 662.17c-13.87 0-25.82-5.46-34.58-15.8-12.39-14.62-18.65-39-18.59-72.55a302.29 302.29 0 0 1 3.42-44.41 11.43 11.43 0 0 1 22.55 3.75 285.33 285.33 0 0 0-3.11 41c0 27 4.68 47.39 13.18 57.42 4.46 5.26 9.9 7.71 17.12 7.71 48.61 0 74-19.32 74.21-19.52a11.44 11.44 0 0 1 14.23 17.91c-1.29 1.02-31.29 24.49-88.43 24.49z" fill="#191007" p-id="2183"></path></svg>'; }
      getLength () { return 3655.6884765625; } // optional
    }
    mojs.addShape( 'Svg', Svg ); // passing name and Bubble class

    /* USE CUSTOM SHAPE */
    // now it is available on mojs.Shape constructor as usual
    new mojs.Shape({
      shape:    'Svg', // <--- shape of heart is now available!
      fill:     'none',
      stroke:   '#666',
      top: '70%',
      height: 240,
      width:280,
      scale:    { 0 : 0.6 },
      strokeWidth: { 20 : 1 },
      y:         -20,
      duration:  1500,
      repeat:       10,
    }).play();


    /* ADD CUSTOM SHAPE */
    class Heart extends mojs.CustomShape {
      getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
      getLength () { return 292.110107421875; } // optional
    }
    mojs.addShape( 'heart', Heart ); // passing name and Bubble class

    /* USE CUSTOM SHAPE */
    // now it is available on mojs.Shape constructor as usual
    new mojs.Shape({
      left: '30%',
      top: '70%',
      shape:            'heart',
      fill:             'none',
      stroke:           'deeppink',
      strokeDasharray:  '100%',
      strokeDashoffset: { '-100%' : '100%' },
      y:               -20,
      duration:         3000,
      repeat:       10,
    }).play();
    console.log('shape1',
      document.getElementById( 'shape1' )
        .getTotalLength(),
      document.getElementById( 'shape2' )
        .getTotalLength(),
      document.getElementById( 'shape3' )
        .getTotalLength(),
      document.getElementById( 'shape4' )
        .getTotalLength()
    );
  },
}
</script>

<style scoped lang="less">
.top {
  height: 100vh;
  width: 100vw;
  background: #eee2db;
  .spinner {
    position: relative;
    top: 35%;
  }
  .div-svg {
    position: relative;
    top: 75%;
  }
}
</style>
