##  Performance Optimization portfolio project

1. Optimize PageSpeed Insights score for index.html
2. The goal was to optimize the page to acquire a page speed of   90+ on (https://developers.google.com/speed/pagespeed/insights/).
3. To view index.html since it was minified you can copy the code to (https://codebeautify.org/html-formatter-beautifier).

## Measure

2.  Images needs to be compressed and resized.
3. HTML,CSS,JS has to minified,cached and inlined.
4. Enable render blocking Javascript and CSS.

## Optimized

1. Images were optimized using compression (http://compressimage.toolur.com/),resizing [http://resizeimage.net/](http://resizeimage.net/) and using pagespeed tools.

2. HTML,CSS and Js was minified using minifiers and pagespeed tools. 

3. Caching was enabled using .htaccess files in root folder.

4. To avoid render blocking CSS was inlined and `print="media"` was used on link tag for print CSS files.

5. Javascript was copied at the end of body to avoid parser blocking and async attribute was used on script tag.

6.  Web fonts was run using javascript to enhance performance.
 
 
### Overall scored achieved on Page Speed was *93/100* after all the above optimizations.


 #### Optimize Frames per Second in pizza.html

 


1. Goto pizza page and open developer tools to Inspect Page and record performance.

### Optimizations 

1. Resized pizza to under 5ms 

2. Optimized changePizzaSizes function

3.  Optimized update positions function and reduced the number of pizza on screen to achieve 60fps.

4. Used variable to store queries and moved outside loop for better performance.

## References

1. Webcast Udacity

2. https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/

3.  https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts


4.  https://github.com/jshanks24/Udacity-Website-Optimization

5. https://github.com/mikejoyceio/website-optimization

6.  https://github.com/garyherd/website-optimization
