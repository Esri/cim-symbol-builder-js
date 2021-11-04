(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[42],{559:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(48),a=r(3),o=r(564),n=r(560),s=r(639);class c{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(n.c.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(n.c.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),n=this._descriptor;c._validateTexture(this._context,n),r.pixelStorei(r.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);const s=n.pixelFormat;let l=n.internalFormat?n.internalFormat:this._deriveInternalFormat(s,n.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,a=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,a=e.videoHeight),n.width&&n.height,r.texImage2D(t,0,l,s,n.dataType,e),Object(o.a)(r),n.hasMipmap&&this.generateMipmap(),void 0===n.width&&(n.width=i),void 0===n.height&&(n.height=a)}else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&l===r.DEPTH_STENCIL&&(l=r.DEPTH24_STENCIL8);let i=n.width,c=n.height;if(function(e){return Object(a.j)(e)&&"type"in e&&"compressed"===e.type}(e)){const a=Math.round(Math.log(Math.max(i,c))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&a===e.levels.length;for(let o=0;;++o){const a=e.levels[Math.min(o,e.levels.length-1)];if(r.compressedTexImage2D(t,o,l,i,c,0,a),1===i&&1===c||!n.hasMipmap)break;i=Math.max(1,i>>1),c=Math.max(1,c>>1)}}else if(Object(a.j)(e))r.texImage2D(t,0,l,i,c,0,s,n.dataType,e),Object(o.a)(r),n.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,l,i,c,0,s,n.dataType,null),Object(o.a)(r),(1!==i||1!==c)&&n.hasMipmap;++e)i=Math.max(1,i>>1),c=Math.max(1,c>>1)}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(o.a)(r),this._context.bindTexture(i,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,a,o,n=3553){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,l=this._descriptor,d=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>l.width||a>l.height||t+i>l.width||r+a>l.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,l.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,l.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?s.texSubImage2D(n,e,t,r,l.pixelFormat,l.dataType,o):s.texSubImage2D(n,e,t,r,i,a,l.pixelFormat,l.dataType,o),this._context.bindTexture(d,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(i.g)(t.width)&&Object(i.g)(t.height);Object(s.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}c.TEXTURE_UNIT_FOR_UPDATES=0},560:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a}));const i=33984;var a;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(a||(a={}));const o=33306},564:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var i=r(9),a=r(5);const o=r(11).a.getLogger("esri/views/webgl");const n=!!Object(a.a)("enable-feature:webgl-debug");function s(){return n}function c(){return n}function l(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),a=(new Error).stack;o.error(new i.a("webgl-error","WebGL error occured",{message:r,stack:a}))}}}},568:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},604:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function a(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function n(){return a(1,1,1)}function s(){return a(1,0,0)}function c(){return a(0,1,0)}function l(){return a(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const d=o(),u=n(),h=s(),m=c(),p=l();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:n,unitX:s,unitY:c,unitZ:l,ZEROS:d,ONES:u,UNIT_X:h,UNIT_Y:m,UNIT_Z:p})},639:function(e,t,r){"use strict";function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,"a",(function(){return i}))},672:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));r(48),r(77),r(28),r(64),r(68),r(360);var i=r(654);Object(i.b)();class a{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new a(t)}}function n(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}},713:function(e,t,r){"use strict";function i(e,t,r=32774,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,a=32774,o=32774,n=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:a,opAlpha:o,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return i}));const o={face:1029,mode:2305},n={face:1028,mode:2305},s=e=>2===e?o:1===e?n:null,c={zNear:0,zFar:1},l={r:!0,g:!0,b:!0,a:!0};function d(e){return O.intern(e)}function u(e){return y.intern(e)}function h(e){return S.intern(e)}function m(e){return C.intern(e)}function p(e){return A.intern(e)}function f(e){return F.intern(e)}function v(e){return D.intern(e)}function g(e){return z.intern(e)}function b(e){return R.intern(e)}class x{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function _(e){return"["+e.join(",")+"]"}const O=new x(T,e=>({__tag:"Blending",...e}));function T(e){return e?_([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const y=new x(w,e=>({__tag:"Culling",...e}));function w(e){return e?_([e.face,e.mode]):null}const S=new x(M,e=>({__tag:"PolygonOffset",...e}));function M(e){return e?_([e.factor,e.units]):null}const C=new x(j,e=>({__tag:"DepthTest",...e}));function j(e){return e?_([e.func]):null}const A=new x(P,e=>({__tag:"StencilTest",...e}));function P(e){return e?_([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const F=new x(I,e=>({__tag:"DepthWrite",...e}));function I(e){return e?_([e.zNear,e.zFar]):null}const D=new x(E,e=>({__tag:"ColorWrite",...e}));function E(e){return e?_([e.r,e.g,e.b,e.a]):null}const z=new x(L,e=>({__tag:"StencilWrite",...e}));function L(e){return e?_([e.mask]):null}const R=new x((function(e){return e?_([T(e.blending),w(e.culling),M(e.polygonOffset),j(e.depthTest),P(e.stencilTest),I(e.depthWrite),E(e.colorWrite),L(e.stencilWrite)]):null}),e=>({blending:d(e.blending),culling:u(e.culling),polygonOffset:h(e.polygonOffset),depthTest:m(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:f(e.depthWrite),colorWrite:v(e.colorWrite),stencilWrite:g(e.stencilWrite)}));class N{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this.setBlending(e.blending),this.setCulling(e.culling),this.setPolygonOffset(e.polygonOffset),this.setDepthTest(e.depthTest),this.setStencilTest(e.stencilTest),this.setDepthWrite(e.depthWrite),this.setColorWrite(e.colorWrite),this.setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(e){this._blending=this.setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(e){this._culling=this.setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(e){this._polygonOffset=this.setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(e){this._depthTest=this.setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(e){this._stencilTest=this.setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(e){this._depthWrite=this.setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(e){this._colorWrite=this.setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(e){this._stencilWrite=this.setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}},714:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function a(e,t,r,a){for(let s=0;s<a;++s)o[0]=e[s],i(o,n,1),t[s]=n[0],r[s]=n[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const o=new Float64Array(1),n=new Float32Array(2)},716:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}));var i=r(568);const a=.1,o=.001;function n(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(o)}) { discard; } }
      `);break;case 1:r.code.add(i.a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},717:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r(3),a=r(38),o=r(68),n=r(568);function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=n.a`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=n.a`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.sliceHighlightDisabled?n.a`#define highlightSlice(_color_, _pos_) (_color_)`:n.a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(a)}else{const r=n.a`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function c(e,t,r,n){t.slicePlaneEnabled&&(Object(i.j)(r)?(n?(Object(a.g)(l,r.origin,n),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.b),e.setUniform3fv("slicePlaneBasis2",o.b),e.setUniform3fv("slicePlaneOrigin",o.b)))}const l=Object(o.e)()},718:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.a`void forwardTextureCoordinates() {}`)}},719:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(877),a=r(568);function o(e){e.fragment.include(i.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(a.a`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function n(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}},720:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r(568);function a(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(i.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.a`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.a`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.a`vec4 vvColor() { return vec4(1.0); }`)}function o(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function n(e,t){o(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},724:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(568);function a(e){const t=i.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.a`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return l}));var i=r(704),a=r(38),o=r(68),n=r(667);function s(e){return e?{origin:Object(o.c)(e.origin),direction:Object(o.c)(e.direction)}:{origin:Object(o.e)(),direction:Object(o.e)()}}function c(e,t=s()){return function(e,t,r=s()){return Object(a.h)(r.origin,e),Object(a.h)(r.direction,t),r}(e.origin,e.direction,t)}function l(e,t){const r=Object(a.d)(n.b.get(),Object(a.o)(n.b.get(),e.direction),Object(a.g)(n.b.get(),t,e.origin));return Object(a.e)(r,r)}function d(e,t,r){const i=Object(a.e)(e.direction,Object(a.g)(r,t,e.origin));return Object(a.c)(r,e.origin,Object(a.b)(r,e.direction,i)),r}new i.a((function(){return{origin:null,direction:null}}))},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(200);class a{constructor(){this.id=Object(i.a)()}unload(){}}},748:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,a=r(68),o=r(798),n=r(568),s=r(714);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(o.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[n.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=c||(c={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){Object(s.b)(t,l,d,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",d)};const l=Object(a.e)(),d=Object(a.e)()},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(568);function a(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.a`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var i=r(604),a=r(930),o=r(568);Object(i.b)(0,.6,.2);function n(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(a.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(o.a`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o.a`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(o.a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(o.a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(o.a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o.a`float getBakedOcclusion() { return 1.0; }`),r.code.add(o.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(o.a`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e,t){t.linearDepth?e.vertex.code.add(i.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},752:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.a`vec3 positionModel() { return position; }`)}},753:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},757:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(568);r(828);function a(e){e.vertex.code.add(i.a`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(i.a`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(i.a`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(i.a`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(i.a`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(i.a`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(i.a`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function o(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(a),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.a`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function n(e,t,r){if(!t.verticalOffset)return;const i=s(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),a=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*a,i.perDistance,i.minWorldLength,i.maxWorldLength)}function s(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(568);function a(e){const t=e.fragment.code;t.add(i.a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.a`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.a`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(924);function n(e,t){const r=e.fragment.code;e.include(o.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.a`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.a`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.a`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.a`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(a),r.add(i.a`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.a`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.a`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.a`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.a`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.a`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(641),a=r(734);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const a=this.stride;if(a%4==0){const o=new Uint32Array(e.buffer,t*a,i*a/4);new Uint32Array(this.buffer,r*a,i*a/4).set(o)}else{const o=new Uint8Array(e.buffer,t*a,i*a);new Uint8Array(this.buffer,r*a,i*a).set(o)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i.m,t),this}vec2f64(e,t){return this.appendField(e,i.n,t),this}vec3f(e,t){return this.appendField(e,i.u,t),this}vec3f64(e,t){return this.appendField(e,i.v,t),this}vec4f(e,t){return this.appendField(e,i.C,t),this}vec4f64(e,t){return this.appendField(e,i.D,t),this}mat3f(e,t){return this.appendField(e,i.f,t),this}mat3f64(e,t){return this.appendField(e,i.g,t),this}mat4f(e,t){return this.appendField(e,i.h,t),this}mat4f64(e,t){return this.appendField(e,i.i,t),this}vec4u8(e,t){return this.appendField(e,i.J,t),this}f32(e,t){return this.appendField(e,i.a,t),this}f64(e,t){return this.appendField(e,i.b,t),this}u8(e,t){return this.appendField(e,i.l,t),this}u16(e,t){return this.appendField(e,i.j,t),this}i8(e,t){return this.appendField(e,i.e,t),this}vec2i8(e,t){return this.appendField(e,i.q,t),this}vec2i16(e,t){return this.appendField(e,i.o,t),this}vec2u8(e,t){return this.appendField(e,i.t,t),this}vec4u16(e,t){return this.appendField(e,i.H,t),this}u32(e,t){return this.appendField(e,i.k,t),this}appendField(e,t,r){const i=t.ElementCount*Object(a.a)(t.ElementType),o=this.stride;this.fields.set(e,{size:i,constructor:t,offset:o,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,r)=>e.fields.set(r,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}},774:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return d}));var i=r(713);const a=Object(i.f)(770,1,771,771),o=Object(i.g)(1,1),n=Object(i.g)(0,771);function s(e){return 2===e?null:1===e?n:o}const c=5e5,l={factor:-1,units:-2};function d(e){return e?l:null}function u(e){return 3===e||2===e?513:515}},775:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(45);async function a(e,t){const{data:r}=await Object(i.default)(e,{responseType:"image",...t});return r}},793:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return x}));r(5);var i=r(11),a=r(48),o=r(3),n=r(77),s=r(38),c=r(68),l=r(360),d=r(654),u=r(745),h=r(794),m=r(667);const p=i.a.getLogger("esri.geometry.support.sphere");function f(){return Object(d.b)()}function v(e,t=f()){return Object(l.c)(t,e)}function g(e){e[0]=e[1]=e[2]=e[3]=0}function b(e){return Array.isArray(e)?e[3]:e}function x(e){return Array.isArray(e)?e:j}function _(e,t,r){if(Object(o.i)(t))return!1;const{origin:i,direction:a}=t,n=O;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=2*(a[0]*n[0]+a[1]*n[1]+a[2]*n[2]),l=c*c-4*s*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const d=Math.sqrt(l);let u=(-c-d)/(2*s);const h=(-c+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0)&&(r&&(r[0]=i[0]+a[0]*u,r[1]=i[1]+a[1]*u,r[2]=i[2]+a[2]*u),!0)}const O=Object(c.e)();function T(e,t,r){const i=m.b.get(),a=m.a.get();Object(s.d)(i,t.origin,t.direction);const o=b(e);Object(s.d)(r,i,t.origin),Object(s.b)(r,r,1/Object(s.m)(r)*o);const c=w(e,t.origin),l=Object(h.a)(t.origin,r);return Object(n.h)(a),Object(n.c)(a,a,l+c,i),Object(s.n)(r,r,a),r}function y(e,t,r){const i=Object(s.g)(m.b.get(),t,x(e)),a=Object(s.b)(m.b.get(),i,e[3]/Object(s.m)(i));return Object(s.c)(r,a,x(e))}function w(e,t){const r=Object(s.g)(m.b.get(),t,x(e)),i=Object(s.m)(r),o=b(e),n=o+Math.abs(o-i);return Object(a.a)(o/n)}const S=Object(c.e)();function M(e,t,r,i){const o=Object(s.g)(S,t,x(e));switch(r){case 0:{const e=Object(a.c)(o,S)[2];return Object(s.s)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(a.c)(o,S),t=e[1],r=e[2],n=Math.sin(t);return Object(s.s)(i,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case 2:return Object(s.o)(i,o);default:return}}function C(e,t){const r=Object(s.g)(A,t,x(e));return Object(s.m)(r)-e[3]}const j=Object(c.e)(),A=Object(c.e)();Object.freeze({__proto__:null,create:f,copy:v,fromCenterAndRadius:function(e,t){return Object(d.c)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:g,fromRadius:function(e){return e},getRadius:b,getCenter:x,fromValues:function(e,t,r,i){return Object(d.c)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&Object(s.h)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return p.error("sphere.setExtent is not yet supported"),e===r?r:v(e,r)},intersectRay:_,intersectsRay:function(e,t){return _(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(_(e,t,r))return r;const i=T(e,t,m.b.get());return Object(s.c)(r,t.origin,Object(s.b)(m.b.get(),t.direction,Object(s.j)(t.origin,i)/Object(s.m)(t.direction))),r},closestPointOnSilhouette:T,closestPoint:function(e,t,r){return _(e,t,r)?r:(Object(u.a)(t,x(e),r),y(e,r,r))},projectPoint:y,distanceToSilhouette:function(e,t){const r=Object(s.g)(m.b.get(),t,x(e)),i=Object(s.p)(r),a=e[3]*e[3];return Math.sqrt(Math.abs(i-a))},angleToSilhouette:w,axisAt:M,altitudeAt:C,setAltitudeAt:function(e,t,r,i){const a=C(e,t),o=M(e,t,2,A),n=Object(s.b)(A,o,r-a);return Object(s.c)(i,t,n)}})},794:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n}));var i=r(48),a=r(38),o=r(68);function n(e,t){return Object(a.e)(e,t)/Object(a.m)(e)}function s(e,t){const r=Object(a.e)(e,t)/(Object(a.m)(e)*Object(a.m)(t));return-Object(i.a)(r)}Object(o.e)(),Object(o.e)()},798:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(5),a=r(568);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(a.a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!Object(i.a)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},799:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.a`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(i.a`void forwardLinearDepth() {}`)}},800:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e){e.vertex.code.add(i.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},801:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},802:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(877),a=r(568);function o(e){e.include(i.a),e.code.add(a.a`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},803:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const i=r(11).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class a{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends a{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new d,this.extensions=new u,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),a="vertex"===e?this.vertex:this.fragment,o=a.uniforms.generateSource(),n=a.code.generateSource(),s="vertex"===e?p:m,c=this.constants.generateSource().concat(a.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class n{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map(e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends a{constructor(){super(...arguments),this.uniforms=new n,this.code=new s,this.constants=new h}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=h.numberToFloatStr(r);break;case"int":i=h.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])},                            ${h.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])},                             ${h.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>h.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",p="precision highp float;\nprecision highp sampler2D;"},816:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(568);function a(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var o=r(753);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r(758),c=r(924),l=r(719);function d(e,t){const r=e.fragment;e.include(n),e.include(o.a,t),0!==t.pbrMode&&e.include(s.a,t),e.include(a,t),t.receiveShadows&&e.include(l.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(c.a),r.code.add(i.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(i.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?i.a`normalize(vPosWorld)`:i.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(i.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(i.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(i.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(i.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(i.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(i.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},828:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return C})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return T}));var i=r(48),a=r(3),o=r(38),n=r(68),s=r(267);function c(e,t,r){const i=r.parameters,a=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=a,u}function l(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function d(e,t){return Math.max(Object(i.h)(e*t.scale,e,t.factor),l(e,t))}Object(i.f)(10),Object(i.f)(12),Object(i.f)(70),Object(i.f)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var h=r(672),m=r(874);const p=Object(s.b)();function f(e,t,r,i,n,c,l){if(!Object(m.b)(t))if(e.boundingInfo){Object(h.a)(0===e.primitiveType);const t=r.tolerance;!function e(t,r,i,n,c,l){if(Object(a.i)(t))return;const d=function(e,t,r){return Object(o.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(r,i,v);if(Object(s.l)(p,t.getBBMin()),Object(s.k)(p,t.getBBMax()),Object(a.j)(c)&&c.applyToAabb(p),function(e,t,r,i){return function(e,t,r,i,a){const o=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(o,n),c=Math.max(o,n);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(u,h)),!(c<0)&&(s=Math.max(s,Math.min(u,h)),!(s>c)&&s<a)}(e,t,r,i,1/0)}(p,r,d,n)){const{primitiveIndices:a,indices:o,position:s}=t,d=a?a.length:o.length/3;if(d>j){const a=t.getChildren();if(void 0!==a){for(let t=0;t<8;++t)void 0!==a[t]&&e(a[t],r,i,n,c,l);return}}b(r,i,0,d,o,s,a,c,l)}}(e.boundingInfo,i,n,t,c,l)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");b(i,n,0,t.length/3,t,r,void 0,c,l)}}const v=Object(n.e)();const g=Object(n.e)();function b(e,t,r,i,o,n,s,c,l){if(s)return function(e,t,r,i,o,n,s,c,l){const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],p=e[2],f=t[0]-h,v=t[1]-m,b=t[2]-p;for(let x=r;x<i;++x){const e=s[x];let t=3*e,r=u*o[t++],i=d[r++],n=d[r++],_=d[r];r=u*o[t++];let T=d[r++],y=d[r++],w=d[r];r=u*o[t];let S=d[r++],M=d[r++],C=d[r];Object(a.j)(c)&&([i,n,_]=c.applyToVertex(i,n,_,x),[T,y,w]=c.applyToVertex(T,y,w,x),[S,M,C]=c.applyToVertex(S,M,C,x));const j=T-i,A=y-n,P=w-_,F=S-i,I=M-n,D=C-_,E=v*D-I*b,z=b*F-D*f,L=f*I-F*v,R=j*E+A*z+P*L;if(Math.abs(R)<=Number.EPSILON)continue;const N=h-i,B=m-n,V=p-_,H=N*E+B*z+V*L;if(R>0){if(H<0||H>R)continue}else if(H>0||H<R)continue;const U=B*P-A*V,W=V*j-P*N,G=N*A-j*B,k=f*U+v*W+b*G;if(R>0){if(k<0||H+k>R)continue}else if(k>0||H+k<R)continue;const $=(F*U+I*W+D*G)/R;$>=0&&l($,O(j,A,P,F,I,D,g),e)}}(e,t,r,i,o,n,s,c,l);const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],p=e[2],f=t[0]-h,v=t[1]-m,b=t[2]-p;for(let x=r,_=3*r;x<i;++x){let e=u*o[_++],t=d[e++],r=d[e++],i=d[e];e=u*o[_++];let n=d[e++],s=d[e++],T=d[e];e=u*o[_++];let y=d[e++],w=d[e++],S=d[e];Object(a.j)(c)&&([t,r,i]=c.applyToVertex(t,r,i,x),[n,s,T]=c.applyToVertex(n,s,T,x),[y,w,S]=c.applyToVertex(y,w,S,x));const M=n-t,C=s-r,j=T-i,A=y-t,P=w-r,F=S-i,I=v*F-P*b,D=b*A-F*f,E=f*P-A*v,z=M*I+C*D+j*E;if(Math.abs(z)<=Number.EPSILON)continue;const L=h-t,R=m-r,N=p-i,B=L*I+R*D+N*E;if(z>0){if(B<0||B>z)continue}else if(B>0||B<z)continue;const V=R*j-C*N,H=N*M-j*L,U=L*C-M*R,W=f*V+v*H+b*U;if(z>0){if(W<0||B+W>z)continue}else if(W>0||B+W<z)continue;const G=(A*V+P*H+F*U)/z;G>=0&&l(G,O(M,C,j,A,P,F,g),x)}}const x=Object(n.e)(),_=Object(n.e)();function O(e,t,r,i,a,n,s){return Object(o.s)(x,e,t,r),Object(o.s)(_,i,a,n),Object(o.d)(s,x,_),Object(o.o)(s,s),s}function T(e,t,r,a,o){let n=(r.screenLength||0)*e.pixelRatio;o&&(n=function(e,t,r,i){return d(e,c(t,r,i))}(n,a,t,o));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(i.d)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function y(e,t,r){if(!e)return;const i=e.parameters,a=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,a)}function w(e,t){const r=t?w(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=M(t)),null==t&&i in r||(r[i]=t)}return r}function S(e,t){let r=!1;for(const i in t){const a=t[i];void 0!==a&&(r=!0,Array.isArray(a)?e[i]=a.slice():e[i]=a)}return r}function M(e){const t=[];return e.forEach(e=>t.push(e)),t}const C={multiply:1,ignore:2,replace:3,tint:4},j=1e3},829:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(568);function a(e){e.vertex.code.add(i.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function o(e,t){t.symbolColor?(e.include(a),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(i.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},830:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(717),a=r(751),o=r(724),n=r(718),s=r(890),c=r(877),l=r(568);function d(e,t){e.fragment.include(c.a),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(l.a`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(l.a`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var u=r(922),h=r(720),m=r(716);function p(e,t){const r=e.vertex.code,c=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a.a,{linearDepth:!0}),e.include(n.a,t),e.include(h.a,t),e.include(d,t),e.include(i.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(l.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(m.a,t),c.add(l.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?l.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(o.a,t),e.include(s.a,t),e.include(n.a,t),e.include(h.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(l.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?l.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(m.a,t),c.add(l.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?l.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:l.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(n.a,t),e.include(h.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(l.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.a,t),e.include(m.a,t),e.include(u.a),c.add(l.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},831:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(568);function a(e){e.code.add(i.a`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function o(e){e.include(a),e.code.add(i.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},874:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n}));var i=r(3),a=(r(77),r(602));r(672),r(714);function o(e,t){return Object(i.i)(e)&&(e=[]),e.push(t),e}function n(e,t){if(Object(i.i)(e))return null;const r=e.filter(e=>e!==t);return 0===r.length?null:r}function s(e){return!!Object(i.j)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),Object(a.d)()},877:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e){e.code.add(i.a`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},878:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return F}));var i=r(799),a=r(800),o=r(717),n=r(751),s=r(748),c=r(724),l=r(752),d=r(829),u=r(718),h=r(801),m=r(890),p=r(757),f=r(830),v=r(802),g=r(923),b=r(753),x=r(816),_=r(749),O=r(925),T=r(758),y=r(750),w=r(719),S=r(720),M=r(716),C=r(926),j=r(831),A=r(568),P=r(803);function F(e){const t=new P.a,r=t.vertex.code,F=t.fragment.code;return t.include(C.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(S.a,e),t.include(s.a,e),t.include(p.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(a.a),t.include(g.a,e),t.include(m.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.a,e),t.include(i.a,e),t.include(d.a,e),t.include(h.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(A.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${A.a.float(M.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?A.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(o.a,e),t.include(M.a,e),e.multipassTerrainEnabled&&(t.fragment.include(v.a),t.include(_.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(j.a),F.add(A.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?A.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:A.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?A.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o.a,e),t.include(x.a,e),t.include(b.a,e),t.include(M.a,e),e.receiveShadows&&t.include(w.a,e),e.multipassTerrainEnabled&&(t.fragment.include(v.a),t.include(_.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y.a,e),t.include(T.a,e),t.fragment.include(j.a),t.include(O.a,e),F.add(A.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?A.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:A.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?A.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:A.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?A.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?A.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?A.a`vec3 normalGround = normalize(vpos + localOrigin);`:A.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:A.a``}
        ${1===e.pbrMode||2===e.pbrMode?A.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.a,e),t}const I=Object.freeze({__proto__:null,build:F})},879:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return C}));var i=r(799),a=r(800),o=r(717),n=r(751),s=r(748),c=r(724),l=r(752),d=r(829),u=r(718),h=r(801),m=r(757),p=r(830),f=r(802),v=r(753),g=r(816),b=r(749),x=r(758),_=r(750),O=r(719),T=r(720),y=r(716),w=r(831),S=r(568),M=r(803);function C(e){const t=new M.a,r=t.vertex.code,C=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(T.a,e),t.include(s.a,e),t.include(m.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(a.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.a,e),t.include(i.a,e),t.include(d.a,e),t.include(h.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(S.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${S.a.float(y.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?S.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(o.a,e),t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(f.a),t.include(b.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.a),C.add(S.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?S.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?S.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o.a,e),t.include(g.a,e),t.include(v.a,e),t.include(y.a,e),e.receiveShadows&&t.include(O.a,e),e.multipassTerrainEnabled&&(t.fragment.include(f.a),t.include(b.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(_.a,e),t.include(x.a,e),t.fragment.include(w.a),C.add(S.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?S.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:S.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?S.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${S.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?S.a`vec3 normalGround = normalize(vpos + localOrigin);`:S.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:S.a``}
        ${1===e.pbrMode||2===e.pbrMode?S.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p.a,e),t}const j=Object.freeze({__proto__:null,build:C})},890:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(724),a=r(613),o=r(602),n=r(68),s=r(752),c=r(798),l=r(568);function d(e,t){e.include(s.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l.a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(l.a`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function u(e,t){0===t.normalType||1===t.normalType?(e.include(i.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(l.a`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?l.a`normalize(vPositionWorldCameraRelative);`:l.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(l.a`void forwardNormal() {}`)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(a.b)(),this.worldFromModel_TH=Object(n.e)(),this.worldFromModel_TL=Object(n.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(n.e)(),this.worldFromView_TL=Object(n.e)(),this.viewFromCameraRelative_RS=Object(a.b)(),this.projFromView=Object(o.d)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(d||(d={})),(u||(u={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},922:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r(654),a=r(568);const o=Object(i.c)(1,1,0,1),n=Object(i.c)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(a.a`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},923:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(930),a=r(568);function o(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(a.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(a.a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(i.a,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(a.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},924:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e){e.vertex.code.add(i.a`const float PI = 3.141592653589793;`),e.fragment.code.add(i.a`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},925:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(568);function a(e,t){const r=e.fragment;r.code.add(i.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},926:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(568),a=r(564);function o(e,t){const r=i.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(a.c)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},930:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(718),a=r(568);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.a`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){e.include(i.a,t),e.fragment.code.add(a.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(a.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(o),e.fragment.code.add(a.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},935:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return Ct})),r.d(t,"gltfToEngineResources",(function(){return At})),r.d(t,"parseUrl",(function(){return jt}));var i=r(308),a=r(3),o=r(195),n=r(613),s=r(77),c=r(602),l=r(38),d=r(68),u=r(267),h=r(641),m=r(680),p=r(918),f=r(928),v=r(919),g=r(927),b=r(920),x=r(45),_=r(127),O=r(9),T=r(11),y=r(13),w=r(786),S=r(775),M=r(147),C=r(672);class j{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(d.e)(),Object(C.a)(e.length>=1),Object(C.a)(r.length%this._numIndexPerPrimitive==0),Object(C.a)(r.length>=e.length*this._numIndexPerPrimitive),Object(C.a)(3===i.size||4===i.size);const{data:a,size:o}=i,n=e.length;let s=o*r[this._numIndexPerPrimitive*e[0]];A.clear(),A.push(s),this.bbMin=Object(d.g)(a[s],a[s+1],a[s+2]),this.bbMax=Object(d.c)(this.bbMin);for(let l=0;l<n;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*r[t+e],A.push(s);let i=a[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=a[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=a[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(l.f)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<A.length;++l){s=A.getItemAt(l);const e=a[s]-this.center[0],t=a[s+1]-this.center[1],r=a[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=c)continue;const o=Math.sqrt(i),n=.5*(o-this.radius);this.radius=this.radius+n,c=this.radius*this.radius;const d=n/o;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=r*d}A.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(l.i)(this.bbMin,this.bbMax)>1){const e=Object(l.f)(Object(d.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:a,size:o}=this.position;for(let c=0;c<t;++c){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=o*this.indices[n],l=a[s],d=a[s+1],u=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[n+e];const t=a[s],r=a[s+1],i=a[s+2];t<l&&(l=t),r<d&&(d=r),i<u&&(u=i)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[c]=t,++i[t]}let n=0;for(let c=0;c<8;++c)i[c]>0&&++n;if(n<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<t;++c){const e=r[c];s[e][i[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new j(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){A.prune()}}const A=new M.a({deallocator:null});var P=r(746),F=r(889);class I extends P.a{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,o]of e)o&&this._vertexAttributes.set(a,{...o});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Object(F.c)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[a,o]of t)o&&(this._indices.set(a,D(o)),"position"===a&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(a.i)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(F.b)(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(F.a)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(C.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Object(F.c)(e.length/t),i=this.vertexAttributes.get("position");return new j(r,t,e,i)}}function D(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var E=r(221),z=r(86),L=r(48),R=r(130),N=r(14),B=r(389),V=r(43);let H;var U=r(559),W=r(772);let G=null,k=null;async function $(){return Object(a.i)(k)&&(k=function(){if(Object(a.i)(H)){const e=e=>Object(V.a)("esri/libs/basisu/"+e);H=Promise.all([r.e(147),r.e(163)]).then(r.bind(null,1018)).then(e=>e.b).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return H}(),G=await k),k}function q(e,t,r,i,a){const o=Object(W.b)(t?37496:37492),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*n)}function X(e){return e.getNumImages()>=1&&!e.isUASTC()}function K(e){return e.getFaces()>=1&&e.isETC1S()}function Y(e,t,r,i,a,o,n,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let g=0;g<h;g++)m.push(new Uint8Array(n(g,d))),s(g,d,m[g]);const p=m.length>1,f=p?9987:9729,v={...t,samplingMode:f,hasMipmap:p,internalFormat:u,width:a,height:o};return new U.a(e,v,{type:"compressed",levels:m})}const J=T.a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Z(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Q=Z("DXT1"),ee=Z("DXT3"),te=Z("DXT5");function re(e,t,r){const{textureData:i,internalFormat:a,width:o,height:n}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return J.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return J.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let a,o;switch(i){case Q:a=8,o=33776;break;case ee:a=16,o=33778;break;case te:a=16,o=33779;break;default:return J.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],c=r[3];0==(3&s)&&0==(3&c)||(J.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,d=c;let u,h;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||Object(L.g)(s)&&Object(L.g)(c)||(J.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let m=r[1]+4;const p=[];for(let f=0;f<n;++f)h=(s+3>>2)*(c+3>>2)*a,u=new Uint8Array(e,m,h),p.push(u),m+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:o,width:l,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=o,t.height=n,new U.a(e,t,i)}const ie=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),ae=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],oe=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var ne=r(562),se=r(561);var ce=r(563),le=r(639);class de extends P.a{constructor(e,t){super(),this.data=e,this.type=4,this._glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new z.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=de.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(a.i)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(N.t)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(N.u)(e.src)||Object(N.t)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(a.i)(e))return 0;if(Object(R.c)(e)||Object(R.k)(e))return t.encoding===de.KTX2_ENCODING?function(e,t){if(Object(a.i)(G))return e.byteLength;const r=new G.KTX2File(new Uint8Array(e)),i=K(r)?q(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===de.BASIS_ENCODING?function(e,t){if(Object(a.i)(G))return e.byteLength;const r=new G.BasisFile(new Uint8Array(e)),i=X(r)?q(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?de.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if(Object(a.j)(this._glTexture))return this._glTexture;if(Object(a.j)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(a.i)(r)?(this._glTexture=new U.a(e,this.createDescriptor(e),null),this._glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(R.c)(r)||Object(R.k)(r))&&this.params.encoding===de.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(R.c)(r)||Object(R.k)(r))&&this.params.encoding===de.KTX2_ENCODING?this.loadFromKTX2(e,r):(Object(R.c)(r)||Object(R.k)(r))&&this.params.encoding===de.BASIS_ENCODING?this.loadFromBasis(e,r):Object(R.k)(r)?this.loadFromPixelData(e,r):Object(R.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(a.i)(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(a.j)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:a}=this.powerOfTwoStretchInfo;a.setData(this.data),this.drawStretchedTexture(e,t,r,i,a,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this._glTexture=re(e,this.createDescriptor(e),t),this._glTexture}loadFromKTX2(e,t){return this.loadAsync(()=>async function(e,t,r){Object(a.i)(G)&&(G=await $());const i=new G.KTX2File(new Uint8Array(r));if(!K(i))return null;i.startTranscoding();const o=Y(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}loadFromBasis(e,t){return this.loadAsync(()=>async function(e,t,r){Object(a.i)(G)&&(G=await $());const i=new G.BasisFile(new Uint8Array(r));if(!X(i))return null;i.startTranscoding();const o=Y(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(e,t)=>i.getImageTranscodedSizeInBytes(0,e,t),(e,t,r)=>i.transcodeImage(r,0,e,t,0,0));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}loadFromPixelData(e,t){Object(C.a)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new U.a(e,r,t),this._glTexture}loadAsync(e){const t=new AbortController;this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync(async i=>{const a=await Object(S.a)(r,{signal:i});return this.loadFromImage(e,a,t)})}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync(async i=>{const a=await Object(B.a)(r,r.src,!1,i);return this.loadFromImage(e,a,t)})}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(i=>new Promise((o,n)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Object(a.j)(d)&&d.remove()},c=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},l=e=>{s(),n(e||new O.a("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=Object(y.p)(i,()=>l(Object(y.d)()))}))}loadFromImage(e,t,r){const i=de.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const a=this.createDescriptor(e);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,a)||Object(L.g)(i.width)&&Object(L.g)(i.height)?(a.width=i.width,a.height=i.height,this._glTexture=new U.a(e,a,t),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,t,i,a,r),this._glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(le.a)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,a){const{width:o,height:n}=r,s=Object(L.i)(o),c=Object(L.i)(n);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[o/s,n/c],l=new U.a(e,i),l.updateData(0,0,0,o,n,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,a());break;default:Object(E.a)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const a=new U.a(e,r),o=new ce.a(e,{colorTarget:0,depthStencilTarget:0},a),n=new U.a(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=ae,r=ie,i=-1,a=1){let o=null;return o=t===oe?new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):new Float32Array([i,i,a,i,i,a,a,a]),new se.a(e,r,{geometry:t},{geometry:ne.a.createVertex(e,35044,o)})}(e),c=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,i,o,s,n,a),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:o}:(s.dispose(!0),n.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(c),a}drawStretchedTexture(e,t,r,i,a,o){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(a,"tex"),e.bindVAO(i),t.bindPipelineState(e),e.drawArrays(5,0,Object(W.e)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(Object(a.j)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(a.j)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),Object(a.j)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}de.DDS_ENCODING="image/vnd-ms.dds",de.KTX2_ENCODING="image/ktx2",de.BASIS_ENCODING="image/x.basis";var ue=r(766),he=r(716);var me=r(828);class pe extends P.a{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ie,this._parameters=Object(me.c)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Object(me.e)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(a.j)(this.repository)&&this.repository.materialChanged(this)}}var fe=r(774),ve=r(679),ge=r(645),be=r(604),xe=r(654),_e=r(793);const Oe=new class{constructor(e=0){this.offset=e,this.sphere=Object(_e.b)(),this.tmpVertex=Object(d.e)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let a=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(a*a+o*o+n*n);a+=a*s,o+=o*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*o+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*o+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*o+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(d.e)(),this.mbs=Object(xe.b)(),this.obb={center:Object(d.e)(),halfSize:Object(be.a)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,a=t,o=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(i*i+a*a+o*o);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+o*n,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,a=e[3],o=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(l.q)(this.obb.halfSize,e.halfSize,e.quaternion),Object(l.c)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(l.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(ve.a)(Te,e.quaternion),Object(l.q)(this.obb.halfSize,this.obb.halfSize,Te),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(d.e)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],a=t+this.localOrigin[1],o=r+this.localOrigin[2],n=this.offset/Math.sqrt(i*i+a*a+o*o);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+o*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}};const Te=Object(ge.b)();function ye(e,t,r,i){const a=r.typedBuffer,o=r.typedBufferStride,n=e.length;i*=o;for(let s=0;s<n;++s){const r=2*e[s];a[i]=t[r],a[i+1]=t[r+1],i+=o}}function we(e,t,r,i,a){const o=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==a||1===a)for(let c=0;c<s;++c){const r=3*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=n}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<a;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=n}}function Se(e,t,r,i,a,o=1){if(!r)return void we(e,t,i,a,o);const n=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],d=r[1],u=r[2],h=r[4],m=r[5],p=r[6],f=r[8],v=r[9],g=r[10],b=r[12],x=r[13],_=r[14];if(a*=s,1===o)for(let O=0;O<c;++O){const r=3*e[O],i=t[r],o=t[r+1],c=t[r+2];n[a]=l*i+h*o+f*c+b,n[a+1]=d*i+m*o+v*c+x,n[a+2]=u*i+p*o+g*c+_,a+=s}else for(let O=0;O<c;++O){const r=3*e[O],i=t[r],c=t[r+1],T=t[r+2],y=l*i+h*c+f*T+b,w=d*i+m*c+v*T+x,S=u*i+p*c+g*T+_;for(let e=0;e<o;++e)n[a]=y,n[a+1]=w,n[a+2]=S,a+=s}}function Me(e,t,r,i,a,o=1){if(!r)return void we(e,t,i,a,o);const n=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],p=n[4],f=n[5],v=n[6],g=n[8],b=n[9],x=n[10],_=!Object(s.k)(n),O=1e-6,T=1-O;if(a*=l,1===o)for(let s=0;s<d;++s){const r=3*e[s],i=t[r],o=t[r+1],n=t[r+2];let d=u*i+p*o+g*n,y=h*i+f*o+b*n,w=m*i+v*o+x*n;if(_){const e=d*d+y*y+w*w;if(e<T&&e>O){const t=1/Math.sqrt(e);d*=t,y*=t,w*=t}}c[a+0]=d,c[a+1]=y,c[a+2]=w,a+=l}else for(let s=0;s<d;++s){const r=3*e[s],i=t[r],n=t[r+1],d=t[r+2];let y=u*i+p*n+g*d,w=h*i+f*n+b*d,S=m*i+v*n+x*d;if(_){const e=y*y+w*w+S*S;if(e<T&&e>O){const t=1/Math.sqrt(e);y*=t,w*=t,S*=t}}for(let e=0;e<o;++e)c[a+0]=y,c[a+1]=w,c[a+2]=S,a+=l}}function Ce(e,t,r,i,a,o=1){if(!r)return void function(e,t,r,i,a=1){const o=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===a)for(let c=0;c<s;++c){const r=4*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=n}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<a;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=n}}(e,t,i,a,o);const n=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],p=n[4],f=n[5],v=n[6],g=n[8],b=n[9],x=n[10],_=!Object(s.k)(n),O=1e-6,T=1-O;if(a*=l,1===o)for(let s=0;s<d;++s){const r=4*e[s],i=t[r],o=t[r+1],n=t[r+2],d=t[r+3];let y=u*i+p*o+g*n,w=h*i+f*o+b*n,S=m*i+v*o+x*n;if(_){const e=y*y+w*w+S*S;if(e<T&&e>O){const t=1/Math.sqrt(e);y*=t,w*=t,S*=t}}c[a+0]=y,c[a+1]=w,c[a+2]=S,c[a+3]=d,a+=l}else for(let s=0;s<d;++s){const r=4*e[s],i=t[r],n=t[r+1],d=t[r+2],y=t[r+3];let w=u*i+p*n+g*d,S=h*i+f*n+b*d,M=m*i+v*n+x*d;if(_){const e=w*w+S*S+M*M;if(e<T&&e>O){const t=1/Math.sqrt(e);w*=t,S*=t,M*=t}}for(let e=0;e<o;++e)c[a+0]=w,c[a+1]=S,c[a+2]=M,c[a+3]=y,a+=l}}function je(e,t,r,i,a,o=1){const n=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(a*=s,1===o){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=t[r+3],a+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=255,a+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<o;++e)n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=t[r+3],a+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<o;++e)n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=255,a+=s}}var Ae=r(0),Pe=r(717),Fe=r(748),Ie=r(757),De=r(922),Ee=r(749),ze=r(750),Le=r(719),Re=r(720),Ne=r(798),Be=r(336);function Ve(e,t,r){Object(s.m)(He,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",He)}const He=Object(Be.a)();class Ue{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function We(e={}){return(t,r)=>{var i,a;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(Math.log2(n)),c=null!=(a=t._parameterBits)?a:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var Ge=r(564),ke=r(617);class $e extends ke.a{constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new M.a({deallocator:null}),this._fragmentUniforms=Object(Ge.b)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(a.i)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),Object(a.j)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const qe={mask:255},Xe={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Ke={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var Ye=r(878),Je=r(713);class Ze extends class{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=Object(a.e)(this._program),this._pipeline=this._config=null}reload(e){Object(a.e)(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=Ze.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(Ne.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new $e(e.rctx,i,ie)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const a=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===a)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(Ee.a)(this.program,t)),7===a&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",me.b[e.colorMixMode])),0===a?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",me.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(ze.b)(this.program,e,this.configuration.isSchematic)):4===a&&Object(De.b)(this.program,t),Object(Re.b)(this.program,e),Object(Ie.b)(this.program,e,t),Object(me.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(d.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Ve(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Fe.a.bindCustomOrigin(this.program,t),Object(Pe.b)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(Le.b)(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,a=2===e;return Object(Je.e)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?fe.e:Object(fe.a)(e),culling:Qe(r)&&Object(Je.b)(r.cullFace),depthTest:{func:Object(fe.b)(e)},depthWrite:i||a?r.writeDepth&&Je.d:null,colorWrite:Je.c,stencilWrite:r.sceneHasOcludees?qe:null,stencilTest:r.sceneHasOcludees?t?Ke:Xe:null,polygonOffset:i||a?null:Object(fe.f)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Qe(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Ze.shader=new Ue(Ye.a,()=>r.e(241).then(r.bind(null,1019)));class et extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(Ae.a)([We({count:8})],et.prototype,"output",void 0),Object(Ae.a)([We({count:4})],et.prototype,"alphaDiscardMode",void 0),Object(Ae.a)([We({count:3})],et.prototype,"doubleSidedMode",void 0),Object(Ae.a)([We()],et.prototype,"isSchematic",void 0),Object(Ae.a)([We()],et.prototype,"vertexColors",void 0),Object(Ae.a)([We()],et.prototype,"offsetBackfaces",void 0),Object(Ae.a)([We()],et.prototype,"symbolColors",void 0),Object(Ae.a)([We()],et.prototype,"vvSize",void 0),Object(Ae.a)([We()],et.prototype,"vvColor",void 0),Object(Ae.a)([We()],et.prototype,"verticalOffset",void 0),Object(Ae.a)([We()],et.prototype,"receiveShadows",void 0),Object(Ae.a)([We()],et.prototype,"slicePlaneEnabled",void 0),Object(Ae.a)([We()],et.prototype,"sliceHighlightDisabled",void 0),Object(Ae.a)([We()],et.prototype,"receiveAmbientOcclusion",void 0),Object(Ae.a)([We()],et.prototype,"screenSizePerspective",void 0),Object(Ae.a)([We()],et.prototype,"textureAlphaPremultiplied",void 0),Object(Ae.a)([We()],et.prototype,"hasColorTexture",void 0),Object(Ae.a)([We()],et.prototype,"usePBR",void 0),Object(Ae.a)([We()],et.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(Ae.a)([We()],et.prototype,"hasEmissionTexture",void 0),Object(Ae.a)([We()],et.prototype,"hasOcclusionTexture",void 0),Object(Ae.a)([We()],et.prototype,"hasNormalTexture",void 0),Object(Ae.a)([We()],et.prototype,"instanced",void 0),Object(Ae.a)([We()],et.prototype,"instancedColor",void 0),Object(Ae.a)([We()],et.prototype,"instancedDoublePrecision",void 0),Object(Ae.a)([We()],et.prototype,"vertexTangents",void 0),Object(Ae.a)([We()],et.prototype,"normalsTypeDerivate",void 0),Object(Ae.a)([We()],et.prototype,"writeDepth",void 0),Object(Ae.a)([We()],et.prototype,"sceneHasOcludees",void 0),Object(Ae.a)([We()],et.prototype,"transparent",void 0),Object(Ae.a)([We()],et.prototype,"enableOffset",void 0),Object(Ae.a)([We({count:3})],et.prototype,"cullFace",void 0),Object(Ae.a)([We({count:4})],et.prototype,"transparencyPassType",void 0),Object(Ae.a)([We()],et.prototype,"multipassTerrainEnabled",void 0),Object(Ae.a)([We()],et.prototype,"cullAboveGround",void 0);var tt=r(879);class rt extends Ze{initializeProgram(e){const t=rt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(Ne.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new $e(e.rctx,i,ie)}}rt.shader=new Ue(tt.a,()=>r.e(240).then(r.bind(null,1020)));class it extends pe{constructor(e){super(e,ot),this.supportsEdges=!0,this.techniqueConfig=new et,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(ue.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=Object(ue.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,a=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||o||i)?!!n||s:r?n?c:s:a||o||i?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<fe.c),this.techniqueConfig}intersect(e,t,r,i,o,n,s){if(null!==this.parameters.verticalOffset){const e=i.camera;Object(l.s)(ht,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=Object(l.o)(dt,ht);break;case 2:t=Object(l.h)(dt,lt)}let a=0;if(null!==this.parameters.verticalOffset){const r=Object(l.g)(mt,ht,e.eye),i=Object(l.m)(r),o=Object(l.b)(r,r,1/i);let n=null;this.parameters.screenSizePerspective&&(n=Object(l.e)(t,o)),a+=Object(me.f)(e,i,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}Object(l.b)(t,t,a),Object(l.t)(ut,t,i.transform.inverseRotation),o=Object(l.g)(st,o,ut),n=Object(l.g)(ct,n,ut)}var c;Object(me.d)(e,t,i,o,n,(c=i.verticalOffset,Object(a.j)(c)?(Oe.offset=c,Oe):null),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new at(e):null}createBufferWriter(){return new nt(this.vertexBufferLayout,this.instanceBufferLayout)}}class at extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return 2}}{constructor(e){super(e),this._numLoading=0,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then(e=>this._texture=e),this._acquire(e.normalTextureId).then(e=>this._textureNormal=e),this._acquire(e.emissiveTextureId).then(e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId).then(e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId).then(e=>this._textureMetallicRoughness=e)}dispose(){this._texture=Object(a.o)(this._texture),this._textureNormal=Object(a.o)(this._textureNormal),this._textureEmissive=Object(a.o)(this._textureEmissive),this._textureOcclusion=Object(a.o)(this._textureOcclusion),this._textureMetallicRoughness=Object(a.o)(this._textureMetallicRoughness)}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(e){(Object(a.i)(this._texture)||e!==this._texture.id)&&(this._release(this._texture),this._textureId=e,this._acquire(this._textureId).then(e=>this._texture=e))}bindTextures(e){Object(a.j)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(a.j)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(a.j)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(a.j)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(a.j)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(a.j)(this._texture)&&this._texture.glTexture;Object(a.j)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return Object(a.i)(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).finally(()=>--this._numLoading))}_release(e){Object(a.i)(e)||e.release()}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?rt:Ze,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const ot={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(n.b)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:he.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class nt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,a,o){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{Object(C.a)(3===t.size);const e=a.getField(n,h.u);e&&Se(s,t.data,r,e,o);break}case"normal":{Object(C.a)(3===t.size);const e=a.getField(n,h.u);e&&Me(s,t.data,i,e,o);break}case"uv0":{Object(C.a)(2===t.size);const e=a.getField(n,h.m);e&&ye(s,t.data,e,o);break}case"color":{Object(C.a)(3===t.size||4===t.size);const e=a.getField(n,h.J);e&&je(s,t.data,t.size,e,o);break}case"symbolColor":{Object(C.a)(3===t.size||4===t.size);const e=a.getField(n,h.J);e&&je(s,t.data,t.size,e,o);break}case"tangent":{Object(C.a)(4===t.size);const e=a.getField(n,h.C);e&&Ce(s,t.data,i,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const st=Object(d.e)(),ct=Object(d.e)(),lt=Object(d.g)(0,0,1),dt=Object(d.e)(),ut=Object(d.e)(),ht=Object(d.e)(),mt=Object(d.e)(),pt=T.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ft(e,t){const r=await async function(e,t){const r=Object(a.j)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(_.c)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(y.t)(i.error),vt(i.error.details.url)}(e,r,t);const i=await Object(_.c)(Object(x.default)(e,Object(a.q)(t)));if(!0===i.ok)return i.value.data;Object(y.t)(i.error),vt(i.error)}(e,t);return{resource:r,textures:await xt(r.textureDefinitions,t)}}function vt(e){throw new O.a("","Request for object resource failed: "+e)}function gt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(pt.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(pt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(pt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(pt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else pt.warn("Indexed geometries must specify faces"),i=!1;break}default:pt.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(pt.warn("Geometry requires material"),i=!1);const a=e.params.vertexAttributes;for(const o in a)a[o].values||(pt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function bt(e){const t=Object(u.c)();return e.forEach(e=>{const r=e.boundingInfo;Object(a.j)(r)&&(Object(u.g)(t,r.getBBMin()),Object(u.g)(t,r.getBBMax()))}),t}async function xt(e,t){const r=[];for(const n in e){const i=e[n],o=i.images[0].data;if(!o){pt.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+o,c="/textureDefinitions/"+n,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==_t(l)},u=Object(a.j)(t)&&t.disableTextures?Promise.resolve(null):Object(S.a)(s,t);r.push(u.then(e=>({refId:c,image:e,params:d,alphaChannelUsage:l})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function _t(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Ot(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Tt=new w.a(1,2,"wosr");var yt=r(921),wt=r(796),St=r(797),Mt=r(710);async function Ct(e,t){const r=jt(Object(i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):ft(r.url,t)),i=function(e,t){const r=[],i=[],o=[],n=[],s=e.resource,c=w.a.parse(s.version||"1.0","wosr");Tt.validate(c);const l=s.model.name,u=s.model.geometries,h=s.materialDefinitions,m=e.textures;let p=0;const f=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!gt(e))continue;const s=Ot(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const b=m&&m[s.texture];if(b&&!f.has(s.texture)){const{image:e,params:t}=b,r=new de(e,t);n.push(r),f.set(s.texture,r)}const x=f.get(s.texture),_=x?x.id:void 0;let O=o[s.material]?o[s.material][s.texture]:null;if(!O){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=b&&b.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=b?_t(b.alphaChannelUsage):void 0,c={ambient:Object(d.f)(e.diffuse),diffuse:Object(d.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!b&&!!b.params.preMultiplyAlpha};Object(a.j)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),O=new it(c),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=O}i.push(O);const T=new I(l,g);p+=g.position?g.position.length:0,r.push(T)}return{name:l,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:bt(r),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(g.a)(new v.a(t.streamDataRequester),r.url,t,t.usePBR)),n=Object(a.h)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&Object(a.j)(n)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if(Object(a.i)(i))return;const n=o.attributes.position,u=n.count,m=Object(d.e)(),p=Object(d.e)(),v=Object(d.e)(),g=Object(f.a)(h.J,u),b=Object(f.a)(h.u,u),x=Object(s.b)(Object(c.d)(),o.transform);for(let a=0;a<u;a++){n.getVec(a,p),i.getVec(a,m),Object(l.n)(p,p,o.transform),Object(l.g)(v,p,t.center),Object(l.a)(v,v,t.radius);const s=v[2],c=Object(l.m)(v),d=Math.min(.45+.55*c*c,1);Object(l.a)(v,v,t.radius),Object(l.n)(v,v,x),Object(l.o)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.f)(v,v,m,s>-1?.2:Math.min(-4*s-3.8,1)),b.setVec(a,v),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}o.attributes.normal=b,o.attributes.color=g}}}(o,n);const u=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},m={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=At(o,u,m,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=At(o,u,m,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const p=At(o,u,m);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function jt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function At(e,t,r,i){const s=e.model,c=Object(n.b)(),l=new Array,d=new Map,v=new Map;return s.lods.forEach((e,n)=>{if(void 0!==i&&n!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(a.j)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u.c)()};l.push(g),e.parts.forEach(e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),l=Object(a.j)(e.attributes.texCoord0),x=Object(a.j)(e.attributes.normal),_=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!d.has(i)){if(l){if(Object(a.j)(n.textureColor)&&!v.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:1!==_};v.set(n.textureColor,new de(e.data,t))}if(Object(a.j)(n.textureNormal)&&!v.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);v.set(n.textureNormal,new de(e.data,e.parameters))}if(Object(a.j)(n.textureOcclusion)&&!v.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);v.set(n.textureOcclusion,new de(e.data,e.parameters))}if(Object(a.j)(n.textureEmissive)&&!v.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);v.set(n.textureEmissive,new de(e.data,e.parameters))}if(Object(a.j)(n.textureMetallicRoughness)&&!v.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);v.set(n.textureMetallicRoughness,new de(e.data,e.parameters))}}const o=n.color[0]**(1/yt.a),c=n.color[1]**(1/yt.a),u=n.color[2]**(1/yt.a),h=n.emissiveFactor[0]**(1/yt.a),m=n.emissiveFactor[1]**(1/yt.a),p=n.emissiveFactor[2]**(1/yt.a),f=Object(a.j)(n.textureColor)&&l?v.get(n.textureColor):null;d.set(i,new it({...t,transparent:0===_,textureAlphaMode:_,textureAlphaCutoff:n.alphaCutoff,diffuse:[o,c,u],ambient:[o,c,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(a.j)(f)?f.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:Object(a.j)(n.textureNormal)&&l?v.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:Object(a.j)(f)&&!!f.params.preMultiplyAlpha,occlusionTextureId:Object(a.j)(n.textureOcclusion)&&l?v.get(n.textureOcclusion).id:void 0,emissiveTextureId:Object(a.j)(n.textureEmissive)&&l?v.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(a.j)(n.textureMetallicRoughness)&&l?v.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[h,m,p],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const O=function(e,t){switch(t){case 4:return Object(b.c)(e);case 5:return Object(b.b)(e);case 6:return Object(b.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,y=Object(f.a)(h.u,T);Object(m.e)(y,e.attributes.position,e.transform);const w=[["position",{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],S=[["position",O]];if(Object(a.j)(e.attributes.normal)){const t=Object(f.a)(h.u,T);Object(o.a)(c,e.transform),Object(m.a)(t,e.attributes.normal,c),w.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["normal",O])}if(Object(a.j)(e.attributes.tangent)){const t=Object(f.a)(h.C,T);Object(o.a)(c,e.transform),Object(p.c)(t,e.attributes.tangent,c),w.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["tangent",O])}if(Object(a.j)(e.attributes.texCoord0)){const t=Object(f.a)(h.m,T);Object(wt.b)(t,e.attributes.texCoord0),w.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["uv0",O])}if(Object(a.j)(e.attributes.color)){const t=Object(f.a)(h.J,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.C?Object(p.b)(t,e.attributes.color,255):e.attributes.color instanceof h.J?Object(St.a)(t,e.attributes.color):e.attributes.color instanceof h.H&&Object(p.b)(t,e.attributes.color,1/256);else{Object(St.b)(t,255,255,255,255);const r=new h.B(t.buffer,0,4);e.attributes.color instanceof h.u?Object(m.d)(r,e.attributes.color,255):e.attributes.color instanceof h.B?Object(Mt.a)(r,e.attributes.color):e.attributes.color instanceof h.z&&Object(m.d)(r,e.attributes.color,1/256)}w.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["color",O])}const M=new I(w,S);g.stageResources.geometries.push(M),g.stageResources.materials.push(d.get(i)),l&&(Object(a.j)(n.textureColor)&&g.stageResources.textures.push(v.get(n.textureColor)),Object(a.j)(n.textureNormal)&&g.stageResources.textures.push(v.get(n.textureNormal)),Object(a.j)(n.textureOcclusion)&&g.stageResources.textures.push(v.get(n.textureOcclusion)),Object(a.j)(n.textureEmissive)&&g.stageResources.textures.push(v.get(n.textureEmissive)),Object(a.j)(n.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(n.textureMetallicRoughness))),g.numberOfVertices+=T;const C=M.boundingInfo;Object(a.j)(C)&&(Object(u.g)(g.boundingBox,C.getBBMin()),Object(u.g)(g.boundingBox,C.getBBMax()))})}),l}}}]);
//# sourceMappingURL=42.0db67bbf.chunk.js.map