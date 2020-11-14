Home page: https://style-it.github.io/home
# TextEditor-API concepts (Beta)

StyleIt.js is a simple text editor API built for Developers. <br/>
It outputs clean data in JSON instead of heavy HTML-markup for efficent data saving.  <br/>
More important StyleIt.js knows how to use ANY Css rule.

1. Clean data output
2. Use of any CSS rules
3. Style with classes


## Getting started

### Installation

1. Node package
2. Source from CDN
3. Local file from project


## Node module
<h6>Install the package via npm</h6>
<ul>
<li>
<code>
  npm i styleit-api --save
</code>
</li>
<li>
<p> Include the module in your application</p>
<pre>
<code>
import StyelIt from 'styleit-api';
</code>
</pre>
</li>
</ul>
<br>
<br>
## Node.js package for SSR
<code>
  Coming soon!
</code>
<br>
<br>
## Load from CDN
<code>
coming soon!
</code>
<br>
<br>
##Initialization
In order to inizialize StyleIt, you need to pass the Element Object or Element Id to the StyleIt constracture.
Note that StyleIt will be available only on this element and its child nodes.
<div>
<pre><code>
import StyleIt from 'styleit-api';
<br>
<br>
<span style="margin-top:20px">const styleIt = new  StyleIt(*Element Object or Element Id*);</span>
</code></pre>
<br>
<br>
</div>

##StyleIt provides two working modes
<pre><code>import StyleIt from 'styleit-api';
cont modes = StyleIt.Modes</code></pre>

<table style="width:100%">
  <tr>
    <th>Mode</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Toggle</td>
        <td>String</td>
    <td>Style elements with on/off functionality => like bold,underline,italic</td>
  </tr>
  <tr>
    <td>Extend</td>
    <td>String</td>
    <td>Only extends the currect style => font-size, color, backgorund</td>
  </tr>
</table>
<div>
Note that the Extend mod will not cancel the style when selecting the same rule twice.
</div>
<br>

##How to use
<p>Modes.Toggle</p>
<pre><code>styleIt.execCmd('text-decoration', 'underline', Modes.Toggle);</code></pre>
<br>
<pre><code>styleIt.execCmd('font-weight', 'bold', Modes.Toggle);</code></pre>
</code>
<br>
<p>Modes.Extend</p>
<pre><code>styleIt.execCmd('color', color, Modes.Extend);</code></pre>
<pre><code>styleIt.execCmd('font-size', size, Modes.Extend);</code></pre>
</code>
<br/>

##Options
<pre>
styleIt.execCmd(key,value,mode,options);
</pre>
<pre>
<code>
styleIt.execCmd('text-align', 'right', Modes.Extend,{
target:'block',
selection:true
});
</code></pre>
<br>
<code>
<table style="width:100%">
  <tr>
    <th>Tool</th>
    <th>Configuration</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Target</td>
    <td>{target:'block'}</td>
    <td>Will apply on the closest P or DIV tag element</td>
  </tr>
  <tr>
    <td>Selection</td>
    <td>{selection:false}</td>
    <td>selection false will prevent text to wrap with selection</td>
  </tr>
</table>
##Css Class API
The Css Class API lets you create a Css class with your pre-made rules.
You can pass this class to a StyleIt object and use it as a markup just like underline or bold.
### How to use
<pre><code>
styleIt.ToggleClass("class-name")
</code></pre>
##API Tools

<table style="width:100%">
  <tr>
    <th>Tool</th>
    <th>Configuration</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Undo Redo</td>
    <td>None</td>
    <td>Coming soon!</td>
  </tr>
  <tr>
    <td>Copy Paste</td>
    <td>None</td>
    <td>Copies the text with it's style. (Works only when using Copy/Paste inside a StyleIt Holder)</td>
    <tr>
    <td>Inspector</td>
    <td>  const config = {<br/>
        onInspect: (styles) => {<br/>
          // the styles on the element..<br/>
        },<br/>
        const styleIt = new  StyleIt(*Element Object or Element Id*,config);
      }
      </td>
    <td>    The inspector will trigger your function on every style change with the style in a key-value format.
</td>
  </tr>
</table>
<br>
<br>

###OnLoad
###### Tells StyleIt to rerender the html inside the holder element without deleting any data.
###### It will reomove all invalid tags and chars.

###Save Function
###### styleIt.Save(); 
###### Will create a clean JSON from your content. Note that this function will also filter every invalid tags and chars.

###Load Function
###### styleIt.Load(savedJson); 
###### Will create a html markup from your JOSN content and will append it into the end of the editor. Note that this function will also filter every invalid tags and chars.
and will inject it into the container.

###### Load can use only json Data from the Save method.

###Destroy

###### styleIt.Destroy();
###### Will remove all StyleIt functionality.

###Known Issues
1. on merge elements, underline with color will loose the color and turn to black.

2. Style tag, such as <b>, not valid, only spans.



