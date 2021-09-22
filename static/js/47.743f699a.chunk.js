(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[47],{525:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(49),a=r(3),o=r(527),n=r(526),s=r(573);class c{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(n.c.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(n.c.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),n=this._descriptor;c._validateTexture(this._context,n),r.pixelStorei(r.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);const s=n.pixelFormat;let l=n.internalFormat?n.internalFormat:this._deriveInternalFormat(s,n.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,a=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,a=e.videoHeight),n.width&&n.height,r.texImage2D(t,0,l,s,n.dataType,e),Object(o.a)(r),n.hasMipmap&&this.generateMipmap(),void 0===n.width&&(n.width=i),void 0===n.height&&(n.height=a)}else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&l===r.DEPTH_STENCIL&&(l=r.DEPTH24_STENCIL8);let i=n.width,c=n.height;if(function(e){return Object(a.j)(e)&&"type"in e&&"compressed"===e.type}(e)){const a=Math.round(Math.log(Math.max(i,c))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&a===e.levels.length;for(let o=0;;++o){const a=e.levels[Math.min(o,e.levels.length-1)];if(r.compressedTexImage2D(t,o,l,i,c,0,a),1===i&&1===c||!n.hasMipmap)break;i=Math.max(1,i>>1),c=Math.max(1,c>>1)}}else if(Object(a.j)(e))r.texImage2D(t,0,l,i,c,0,s,n.dataType,e),Object(o.a)(r),n.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,l,i,c,0,s,n.dataType,null),Object(o.a)(r),(1!==i||1!==c)&&n.hasMipmap;++e)i=Math.max(1,i>>1),c=Math.max(1,c>>1)}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(o.a)(r),this._context.bindTexture(i,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,a,o,n=3553){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,l=this._descriptor,d=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>l.width||a>l.height||t+i>l.width||r+a>l.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,l.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,l.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?s.texSubImage2D(n,e,t,r,l.pixelFormat,l.dataType,o):s.texSubImage2D(n,e,t,r,i,a,l.pixelFormat,l.dataType,o),this._context.bindTexture(d,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(i.h)(t.width)&&Object(i.h)(t.height);Object(s.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}c.TEXTURE_UNIT_FOR_UPDATES=0},526:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a}));const i=33984;var a;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(a||(a={}));const o=33306},527:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var i=r(9),a=r(5);const o=r(4).a.getLogger("esri/views/webgl");const n=!!Object(a.a)("enable-feature:webgl-debug");function s(){return n}function c(){return n}function l(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),a=(new Error).stack;o.error(new i.a("webgl-error","WebGL error occured",{message:r,stack:a}))}}}},536:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},573:function(e,t,r){"use strict";function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,"a",(function(){return i}))},666:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s}));r(49),r(72),r(29),r(59),r(62),r(349);var i=r(680);Object(i.b)();class a{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new a(t)}}function n(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}function s(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*c[i];return r}const c=[1/256,1/65536,1/16777216,1/4294967296];s(new Uint8ClampedArray([255,255,255,255]))},681:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}));var i=r(536);const a=.1,o=.001;function n(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(o)}) { discard; } }
      `);break;case 1:r.code.add(i.a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},682:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r(3),a=r(37),o=r(62),n=r(536);function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=n.a`struct SliceFactors {
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
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function c(e,t,r,n){t.slicePlaneEnabled&&(Object(i.j)(r)?(n?(Object(a.g)(l,r.origin,n),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.b),e.setUniform3fv("slicePlaneBasis2",o.b),e.setUniform3fv("slicePlaneOrigin",o.b)))}const l=Object(o.e)()},683:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.a`void forwardTextureCoordinates() {}`)}},684:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(839),a=r(536);function o(e){e.fragment.include(i.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(a.a`int chooseCascade(float _linearDepth, out mat4 mat) {
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
}`)}function n(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}},685:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r(536);function a(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`vec3 vvScale(vec4 _featureAttribute) {
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
    `)):e.vertex.code.add(i.a`vec4 vvColor() { return vec4(1.0); }`)}function o(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function n(e,t){o(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},689:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(536);function a(e){const t=i.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.a`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},709:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,a=r(62),o=r(776),n=r(536),s=r(837);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(o.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[n.a`
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
    `:n.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=c||(c={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){Object(s.b)(t,l,d,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",d)};const l=Object(a.e)(),d=Object(a.e)()},710:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(536);function a(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.a`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},711:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var i=r(728),a=r(892),o=r(536);Object(i.b)(0,.6,.2);function n(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(a.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(o.a`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o.a`vec3 mrr;
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
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},712:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e,t){t.linearDepth?e.vertex.code.add(i.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},713:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.a`vec3 positionModel() { return position; }`)}},714:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},717:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var i=r(536);r(775);function a(e){e.vertex.code.add(i.a`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
    `)):r.add(i.a`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function n(e,t,r){if(!t.verticalOffset)return;const i=s(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),a=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*a,i.perDistance,i.minWorldLength,i.maxWorldLength)}function s(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},718:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(536);function a(e){const t=e.fragment.code;t.add(i.a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var o=r(883);function n(e,t){const r=e.fragment.code;e.include(o.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
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
}`))}},726:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(608),a=r(697);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const a=this.stride;if(a%4==0){const o=new Uint32Array(e.buffer,t*a,i*a/4);new Uint32Array(this.buffer,r*a,i*a/4).set(o)}else{const o=new Uint8Array(e.buffer,t*a,i*a);new Uint8Array(this.buffer,r*a,i*a).set(o)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i.m,t),this}vec2f64(e,t){return this.appendField(e,i.n,t),this}vec3f(e,t){return this.appendField(e,i.u,t),this}vec3f64(e,t){return this.appendField(e,i.v,t),this}vec4f(e,t){return this.appendField(e,i.C,t),this}vec4f64(e,t){return this.appendField(e,i.D,t),this}mat3f(e,t){return this.appendField(e,i.f,t),this}mat3f64(e,t){return this.appendField(e,i.g,t),this}mat4f(e,t){return this.appendField(e,i.h,t),this}mat4f64(e,t){return this.appendField(e,i.i,t),this}vec4u8(e,t){return this.appendField(e,i.J,t),this}f32(e,t){return this.appendField(e,i.a,t),this}f64(e,t){return this.appendField(e,i.b,t),this}u8(e,t){return this.appendField(e,i.l,t),this}u16(e,t){return this.appendField(e,i.j,t),this}i8(e,t){return this.appendField(e,i.e,t),this}vec2i8(e,t){return this.appendField(e,i.q,t),this}vec2i16(e,t){return this.appendField(e,i.o,t),this}vec2u8(e,t){return this.appendField(e,i.t,t),this}vec4u16(e,t){return this.appendField(e,i.H,t),this}u32(e,t){return this.appendField(e,i.k,t),this}appendField(e,t,r){const i=t.ElementCount*Object(a.a)(t.ElementType),o=this.stride;this.fields.set(e,{size:i,constructor:t,offset:o,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,r)=>e.fields.set(r,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}},728:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function a(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function n(){return a(1,1,1)}function s(){return a(1,0,0)}function c(){return a(0,1,0)}function l(){return a(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const d=o(),u=n(),f=s(),h=c(),m=l();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:n,unitX:s,unitY:c,unitZ:l,ZEROS:d,ONES:u,UNIT_X:f,UNIT_Y:h,UNIT_Z:m})},736:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(45);async function a(e,t){const{data:r}=await Object(i.default)(e,{responseType:"image",...t});return r}},757:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.a`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(i.a`void forwardLinearDepth() {}`)}},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e){e.vertex.code.add(i.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},759:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},760:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(839),a=r(536);function o(e){e.include(i.a),e.code.add(a.a`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},761:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const i=r(4).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class a{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends a{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new d,this.extensions=new u,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),a="vertex"===e?this.vertex:this.fragment,o=a.uniforms.generateSource(),n=a.code.generateSource(),s="vertex"===e?m:h,c=this.constants.generateSource().concat(a.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class n{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map(e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends a{constructor(){super(...arguments),this.uniforms=new n,this.code=new s,this.constants=new f}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=f.numberToFloatStr(r);break;case"int":i=f.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])},                            ${f.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${f.numberToFloatStr(r[0])},                            ${f.numberToFloatStr(r[1])},                            ${f.numberToFloatStr(r[2])},                            ${f.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])},                             ${f.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${f.numberToIntStr(r[0])},                             ${f.numberToIntStr(r[1])},                             ${f.numberToIntStr(r[2])},                             ${f.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>f.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const h="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},775:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return C})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return T}));var i=r(49),a=r(3),o=r(37),n=r(62),s=r(253);function c(e,t,r){const i=r.parameters,a=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=a,u}function l(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function d(e,t){return Math.max(Object(i.i)(e*t.scale,e,t.factor),l(e,t))}Object(i.f)(10),Object(i.f)(12),Object(i.f)(70),Object(i.f)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var f=r(666),h=(r(72),r(599));r(837);new Float64Array(3),new Float32Array(6),Object(h.d)();const m=Object(s.b)();function p(e,t,r,i,n,c,l){if(!function(e){return!!Object(a.j)(e)&&!e.visible}(t))if(e.boundingInfo){Object(f.a)(0===e.primitiveType);const t=r.tolerance;!function e(t,r,i,n,c,l){if(Object(a.i)(t))return;const d=function(e,t,r){return Object(o.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(r,i,v);if(Object(s.l)(m,t.getBBMin()),Object(s.k)(m,t.getBBMax()),Object(a.j)(c)&&c.applyToAabb(m),function(e,t,r,i){return function(e,t,r,i,a){const o=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(o,n),c=Math.max(o,n);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(s=Math.max(s,Math.min(u,f)),!(s>c)&&s<a)}(e,t,r,i,1/0)}(m,r,d,n)){const{primitiveIndices:a,indices:o,position:s}=t,d=a?a.length:o.length/3;if(d>A){const a=t.getChildren();if(void 0!==a){for(let t=0;t<8;++t)void 0!==a[t]&&e(a[t],r,i,n,c,l);return}}b(r,i,0,d,o,s,a,c,l)}}(e.boundingInfo,i,n,t,c,l)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");b(i,n,0,t.length/3,t,r,void 0,c,l)}}const v=Object(n.e)();const g=Object(n.e)();function b(e,t,r,i,o,n,s,c,l){if(s)return function(e,t,r,i,o,n,s,c,l){const d=n.data,u=n.stride||n.size,f=e[0],h=e[1],m=e[2],p=t[0]-f,v=t[1]-h,b=t[2]-m;for(let x=r;x<i;++x){const e=s[x];let t=3*e,r=u*o[t++],i=d[r++],n=d[r++],O=d[r];r=u*o[t++];let T=d[r++],y=d[r++],w=d[r];r=u*o[t];let S=d[r++],M=d[r++],C=d[r];Object(a.j)(c)&&([i,n,O]=c.applyToVertex(i,n,O,x),[T,y,w]=c.applyToVertex(T,y,w,x),[S,M,C]=c.applyToVertex(S,M,C,x));const A=T-i,P=y-n,j=w-O,F=S-i,E=M-n,I=C-O,D=v*I-E*b,L=b*F-I*p,R=p*E-F*v,z=A*D+P*L+j*R;if(Math.abs(z)<=Number.EPSILON)continue;const N=f-i,B=h-n,V=m-O,U=N*D+B*L+V*R;if(z>0){if(U<0||U>z)continue}else if(U>0||U<z)continue;const H=B*j-P*V,G=V*A-j*N,k=N*P-A*B,W=p*H+v*G+b*k;if(z>0){if(W<0||U+W>z)continue}else if(W>0||U+W<z)continue;const q=(F*H+E*G+I*k)/z;q>=0&&l(q,_(A,P,j,F,E,I,g),e)}}(e,t,r,i,o,n,s,c,l);const d=n.data,u=n.stride||n.size,f=e[0],h=e[1],m=e[2],p=t[0]-f,v=t[1]-h,b=t[2]-m;for(let x=r,O=3*r;x<i;++x){let e=u*o[O++],t=d[e++],r=d[e++],i=d[e];e=u*o[O++];let n=d[e++],s=d[e++],T=d[e];e=u*o[O++];let y=d[e++],w=d[e++],S=d[e];Object(a.j)(c)&&([t,r,i]=c.applyToVertex(t,r,i,x),[n,s,T]=c.applyToVertex(n,s,T,x),[y,w,S]=c.applyToVertex(y,w,S,x));const M=n-t,C=s-r,A=T-i,P=y-t,j=w-r,F=S-i,E=v*F-j*b,I=b*P-F*p,D=p*j-P*v,L=M*E+C*I+A*D;if(Math.abs(L)<=Number.EPSILON)continue;const R=f-t,z=h-r,N=m-i,B=R*E+z*I+N*D;if(L>0){if(B<0||B>L)continue}else if(B>0||B<L)continue;const V=z*A-C*N,U=N*M-A*R,H=R*C-M*z,G=p*V+v*U+b*H;if(L>0){if(G<0||B+G>L)continue}else if(G>0||B+G<L)continue;const k=(P*V+j*U+F*H)/L;k>=0&&l(k,_(M,C,A,P,j,F,g),x)}}const x=Object(n.e)(),O=Object(n.e)();function _(e,t,r,i,a,n,s){return Object(o.s)(x,e,t,r),Object(o.s)(O,i,a,n),Object(o.d)(s,x,O),Object(o.o)(s,s),s}function T(e,t,r,a,o){let n=(r.screenLength||0)*e.pixelRatio;o&&(n=function(e,t,r,i){return d(e,c(t,r,i))}(n,a,t,o));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(i.d)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function y(e,t,r){if(!e)return;const i=e.parameters,a=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,a)}function w(e,t){const r=t?w(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=M(t)),null==t&&i in r||(r[i]=t)}return r}function S(e,t){let r=!1;for(const i in t){const a=t[i];void 0!==a&&(r=!0,Array.isArray(a)?e[i]=a.slice():e[i]=a)}return r}function M(e){const t=[];return e.forEach(e=>t.push(e)),t}const C={multiply:1,ignore:2,replace:3,tint:4},A=1e3},776:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return y}));var i,a,o=r(5),n=r(536),s=r(3),c=r(62),l=r(528),d=r(529),u=r(622),f=(r(526),r(527),r(531)),h=(r(525),r(530)),m=r(837),p=r(666),v=r(838),g={exports:{}};i=g,void 0!==(a=function(){var e=function(e){window.console&&window.console.error?window.console.error(e):function(e){window.console&&window.console.log&&window.console.log(e)}(e)},t={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},r=null,i=null;function a(e){if(null==r)for(var t in r={},i={},e)"number"==typeof e[t]&&(r[e[t]]=t,i[t]=e[t])}function o(){if(null==r)throw"WebGLDebugUtils.init(ctx) not called"}function n(e){o();var t=r[e];return void 0!==t?"gl."+t:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function s(e,r,a,o){var s;if(void 0!==(s=t[e])&&void 0!==(s=s[r])&&s[a]){if("object"==typeof s[a]&&void 0!==s[a].enumBitwiseOr){for(var c=s[a].enumBitwiseOr,l=0,d=[],u=0;u<c.length;++u){var f=i[c[u]];0!=(o&f)&&(l|=f,d.push(n(f)))}return l===o?d.join(" | "):n(o)}return n(o)}return null===o?"null":void 0===o?"undefined":o.toString()}function c(e,t,r){e.__defineGetter__(r,(function(){return t[r]})),e.__defineSetter__(r,(function(e){t[r]=e}))}function l(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var i=0;i<t;++i)e.disableVertexAttribArray(i),e.vertexAttribPointer(i,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(i,0);e.deleteBuffer(r);var a=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(i=0;i<a;++i)e.activeTexture(e.TEXTURE0+i),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:a,mightBeEnum:function(e){return o(),void 0!==r[e]},glEnumToString:n,glFunctionArgToString:s,glFunctionArgsToString:function(e,t){for(var r="",i=t.length,a=0;a<i;++a)r+=(0==a?"":", ")+s(e,i,a,t[a]);return r},makeDebugContext:function t(r,i,o,l){l=l||r,a(r),i=i||function(t,r,i){for(var a="",o=i.length,c=0;c<o;++c)a+=(0==c?"":", ")+s(r,o,c,i[c]);e("WebGL error "+n(t)+" in "+r+"("+a+")")};var d={};function u(e,t){return function(){o&&o(t,arguments);var r=e[t].apply(e,arguments),a=l.getError();return 0!=a&&(d[a]=!0,i(a,t,arguments)),r}}var f={};for(var h in r)if("function"==typeof r[h])if("getExtension"!=h)f[h]=u(r,h);else{var m=u(r,h);f[h]=function(){return t(m.apply(r,arguments),i,o,l)}}else c(f,r,h);return f.getError=function(){for(var e in d)if(d.hasOwnProperty(e)&&d[e])return d[e]=!1,e;return r.NO_ERROR},f},makeLostContextSimulatingCanvas:function(e){var t,r,i=[],a=[],o={},n=1,s=!1,d=[],u=0,f=0,h=!1,m=0,p={};function v(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(r=e.getContext,function(){var i=r.apply(e,arguments);if(i instanceof WebGLRenderingContext){if(i!=t){if(t)throw"got different context";o=T(t=i)}return o}return i});var g=function(e){i.push(v(e))},b=function(e){a.push(v(e))};function x(){++f,s||u==f&&e.loseContext()}function O(e,t){var r=e[t];return function(){if(x(),!s)return r.apply(e,arguments)}}function _(e){return{statusMessage:e,preventDefault:function(){h=!0}}}return function(e){var t=e.addEventListener;e.addEventListener=function(r,i,a){switch(r){case"webglcontextlost":g(i);break;case"webglcontextrestored":b(i);break;default:t.apply(e,arguments)}}}(e),e.loseContext=function(){if(!s){for(s=!0,u=0,++n;t.getError(););(function(){for(var e=Object.keys(p),t=0;t<e.length;++t)delete p[e]})(),p[t.CONTEXT_LOST_WEBGL]=!0;var r=_("context lost"),a=i.slice();setTimeout((function(){for(var t=0;t<a.length;++t)a[t](r);m>=0&&setTimeout((function(){e.restoreContext()}),m)}),0)}},e.restoreContext=function(){s&&a.length&&setTimeout((function(){if(!h)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<d.length;++e){var r=d[e];r instanceof WebGLBuffer?t.deleteBuffer(r):r instanceof WebGLFramebuffer?t.deleteFramebuffer(r):r instanceof WebGLProgram?t.deleteProgram(r):r instanceof WebGLRenderbuffer?t.deleteRenderbuffer(r):r instanceof WebGLShader?t.deleteShader(r):r instanceof WebGLTexture&&t.deleteTexture(r)}})(),l(t),s=!1,f=0,h=!1;for(var e=a.slice(),r=_("context restored"),i=0;i<e.length;++i)e[i](r)}),0)},e.loseContextInNCalls=function(e){if(s)throw"You can not ask a lost contet to be lost";u=f+e},e.getNumCalls=function(){return f},e.setRestoreTimeout=function(e){m=e},e;function T(e){for(var r in e)"function"==typeof e[r]?o[r]=O(e,r):c(o,e,r);o.getError=function(){if(x(),!s)for(;e=t.getError();)p[e]=!0;for(var e in p)if(p[e])return delete p[e],e;return o.NO_ERROR};for(var i=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],a=0;a<i.length;++a){var l=i[a];o[l]=function(t){return function(){if(x(),s)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=n,d.push(r),r}}(e[l])}var u=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(a=0;a<u.length;++a)o[l=u[a]]=function(t){return function(){return x(),s?null:t.apply(e,arguments)}}(o[l]);var f=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(a=0;a<f.length;++a)o[l=f[a]]=function(t){return function(){return x(),!s&&t.apply(e,arguments)}}(o[l]);return o.checkFramebufferStatus=function(t){return function(){return x(),s?o.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(o.checkFramebufferStatus),o.getAttribLocation=function(t){return function(){return x(),s?-1:t.apply(e,arguments)}}(o.getAttribLocation),o.getVertexAttribOffset=function(t){return function(){return x(),s?0:t.apply(e,arguments)}}(o.getVertexAttribOffset),o.isContextLost=function(){return s},o}},resetToInitialState:l}}())&&(i.exports=a);var b=r(811);class x{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this.floatBufferBlendWorking=!1,this._doublePrecisionRequiresObfuscation=null,this.floatBufferBlendWorking=function(e){var t,r,i,a,o;if(!e.gl)return!1;if("webgl"===e.webglVersion)return(null==(a=e.capabilities.textureFloat)?void 0:a.textureFloat)&&(null==(o=e.capabilities.colorBufferFloat)?void 0:o.textureFloat);if(!((null==(t=e.capabilities.textureFloat)?void 0:t.textureFloat)&&(null==(r=e.capabilities.colorBufferFloat)?void 0:r.textureFloat)&&(null==(i=e.capabilities.colorBufferFloat)?void 0:i.floatBlend)))return!1;const n=new d.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5126,internalFormat:34836,samplingMode:9728,width:1,height:1}),s=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),c=new h.a(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:s}),m=new u.a(e,"\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));e.useProgram(m);const p=e.getBoundFramebufferObject(),{x:b,y:x,width:O,height:_}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.bindVAO(c),e.drawArrays(5,0,4);const T=Object(f.e)({blending:v.d});e.setPipelineState(T),e.drawArrays(5,0,4),g.exports.init(e);const y=e.gl.getError();return e.setViewport(b,x,O,_),e.bindFramebuffer(p),m.dispose(),c.dispose(!1),s.dispose(),n.dispose(),1282!==y||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}(e),Object(b.a)(e).then(e=>this.svgAlwaysPremultipliesAlpha=!e)}get doublePrecisionRequiresObfuscation(){if(Object(s.i)(this._doublePrecisionRequiresObfuscation)){const e=_(this.context,!1),t=_(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let O=null;function _(e,t){const r=new d.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const i=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),a=new h.a(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),o=Object(c.g)(5633261.287538229,2626832.878767164,1434988.0495278358),n=Object(c.g)(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,i){const a=new u.a(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),o=new Float32Array(6);Object(m.a)(r,o,3);const n=new Float32Array(6);return Object(m.a)(i,n,3),e.useProgram(a),a.setUniform3f("u_highA",o[0],o[2],o[4]),a.setUniform3f("u_lowA",o[1],o[3],o[5]),a.setUniform3f("u_highB",n[0],n[2],n[4]),a.setUniform3f("u_lowB",n[1],n[3],n[5]),a}(o,n),f=e.getBoundFramebufferObject(),{x:v,y:g,width:b,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(a),e.drawArrays(5,0,4);const O=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,O),s.dispose(),a.dispose(!1),i.dispose(),r.dispose(),e.setViewport(v,g,b,x),e.bindFramebuffer(f);const _=(o[2]-n[2])/25,T=Object(p.c)(O);return Math.abs(_-T)}function T({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(n.a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function y(e){return!!Object(o.a)("force-double-precision-obfuscation")||(t=e,(Object(s.i)(O)||O.context!==t)&&(O=new x(t)),O).doublePrecisionRequiresObfuscation;var t}},777:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(536);function a(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}var o=r(714);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r(718),c=r(883),l=r(684);function d(e,t){const r=e.fragment;e.include(n),e.include(o.a,t),0!==t.pbrMode&&e.include(s.a,t),e.include(a,t),t.receiveShadows&&e.include(l.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(c.a),r.code.add(i.a`
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
    `))}},789:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(536);function a(e){e.vertex.code.add(i.a`
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
void forwardColorMixMode() {}`)}},790:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(682),a=r(712),o=r(689),n=r(683),s=r(852),c=r(839),l=r(536);function d(e,t){e.fragment.include(c.a),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(l.a`float _calculateFragDepth(const in float depth) {
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
}`)}var u=r(881),f=r(685),h=r(681);function m(e,t){const r=e.vertex.code,c=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a.a,{linearDepth:!0}),e.include(n.a,t),e.include(f.a,t),e.include(d,t),e.include(i.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(l.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(h.a,t),c.add(l.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?l.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(o.a,t),e.include(s.a,t),e.include(n.a,t),e.include(f.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(l.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?l.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(h.a,t),c.add(l.a`
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
    `)),4===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(n.a,t),e.include(f.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(l.a`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.a,t),e.include(h.a,t),e.include(u.a),c.add(l.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?l.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},791:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(536);function a(e){e.code.add(i.a`vec4 premultiplyAlpha(vec4 v) {
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
  `)}},811:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(528),a=r(529),o=r(622),n=r(525),s=r(530);async function c(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new a.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),c=i.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new s.a(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:c}),d=new o.a(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));e.useProgram(d);const u=new n.a(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(u,0),d.setUniform1i("u_texture",0);const f=e.getBoundFramebufferObject(),{x:h,y:m,width:p,height:v}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const g=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,g),d.dispose(),l.dispose(!1),c.dispose(),r.dispose(),u.dispose(),e.setViewport(h,m,p,v),e.bindFramebuffer(f),t.src="",255===g[0]}},837:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function a(e,t,r,a){for(let s=0;s<a;++s)o[0]=e[s],i(o,n,1),t[s]=n[0],r[s]=n[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const o=new Float64Array(1),n=new Float32Array(2)},838:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return d}));var i=r(531);const a=Object(i.f)(770,1,771,771),o=Object(i.g)(1,1),n=Object(i.g)(0,771);function s(e){return 2===e?null:1===e?n:o}const c=5e5,l={factor:-1,units:-2};function d(e){return e?l:null}function u(e){return 3===e||2===e?513:515}},839:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e){e.code.add(i.a`const float MAX_RGBA_FLOAT =
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
}`)}},840:function(e,t,r){"use strict";r.d(t,"a",(function(){return E})),r.d(t,"b",(function(){return F}));var i=r(757),a=r(758),o=r(682),n=r(712),s=r(709),c=r(689),l=r(713),d=r(789),u=r(683),f=r(759),h=r(852),m=r(717),p=r(790),v=r(760),g=r(882),b=r(714),x=r(777),O=r(710),_=r(884),T=r(718),y=r(711),w=r(684),S=r(685),M=r(681),C=r(885),A=r(791),P=r(536),j=r(761);function F(e){const t=new j.a,r=t.vertex.code,F=t.fragment.code;return t.include(C.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(S.a,e),t.include(s.a,e),t.include(m.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(a.a),t.include(g.a,e),t.include(h.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.a,e),t.include(i.a,e),t.include(d.a,e),t.include(f.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(P.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.a.float(M.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?P.a`
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
    `)),7===e.output&&(t.include(o.a,e),t.include(M.a,e),e.multipassTerrainEnabled&&(t.fragment.include(v.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.a),F.add(P.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(o.a,e),t.include(x.a,e),t.include(b.a,e),t.include(M.a,e),e.receiveShadows&&t.include(w.a,e),e.multipassTerrainEnabled&&(t.fragment.include(v.a),t.include(O.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y.a,e),t.include(T.a,e),t.fragment.include(A.a),t.include(_.a,e),F.add(P.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?P.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.a`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?P.a`vec3 normalGround = normalize(vpos + localOrigin);`:P.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.a``}
        ${1===e.pbrMode||2===e.pbrMode?P.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p.a,e),t}var E=Object.freeze({__proto__:null,build:F})},841:function(e,t,r){"use strict";r.d(t,"a",(function(){return A})),r.d(t,"b",(function(){return C}));var i=r(757),a=r(758),o=r(682),n=r(712),s=r(709),c=r(689),l=r(713),d=r(789),u=r(683),f=r(759),h=r(717),m=r(790),p=r(760),v=r(714),g=r(777),b=r(710),x=r(718),O=r(711),_=r(684),T=r(685),y=r(681),w=r(791),S=r(536),M=r(761);function C(e){const t=new M.a,r=t.vertex.code,C=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l.a),t.varyings.add("vpos","vec3"),t.include(T.a,e),t.include(s.a,e),t.include(h.a,e),0!==e.output&&7!==e.output||(t.include(c.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(a.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.a,e),t.include(i.a,e),t.include(d.a,e),t.include(f.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(S.a`
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
      `)),7===e.output&&(t.include(o.a,e),t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(p.a),t.include(b.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.a),C.add(S.a`
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
    `)),0===e.output&&(t.include(o.a,e),t.include(g.a,e),t.include(v.a,e),t.include(y.a,e),e.receiveShadows&&t.include(_.a,e),e.multipassTerrainEnabled&&(t.fragment.include(p.a),t.include(b.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.a,e),t.include(x.a,e),t.fragment.include(w.a),C.add(S.a`
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
    `)),t.include(m.a,e),t}var A=Object.freeze({__proto__:null,build:C})},852:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(689),a=r(595),o=r(599),n=r(62),s=r(713),c=r(776),l=r(536);function d(e,t){e.include(s.a),e.vertex.include(c.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(l.a`vec3 positionWorldCameraRelative() {
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
    `)):e.vertex.code.add(l.a`void forwardNormal() {}`)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(a.b)(),this.worldFromModel_TH=Object(n.e)(),this.worldFromModel_TL=Object(n.e)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(n.e)(),this.worldFromView_TL=Object(n.e)(),this.viewFromCameraRelative_RS=Object(a.b)(),this.projFromView=Object(o.d)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(d||(d={})),(u||(u={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},881:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var i=r(680),a=r(536);const o=Object(i.c)(1,1,0,1),n=Object(i.c)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(a.a`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},882:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(892),a=r(536);function o(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(a.a`mat3 computeTangentSpace(vec3 normal) {
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
  `))}},883:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e){e.vertex.code.add(i.a`const float PI = 3.141592653589793;`),e.fragment.code.add(i.a`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},884:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(536);function a(e,t){const r=e.fragment;r.code.add(i.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(i.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},885:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(536),a=r(527);function o(e,t){const r=i.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(a.c)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},892:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(683),a=r(536);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.a`#ifndef GL_EXT_shader_texture_lod
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
}`))}},897:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return Xt})),r.d(t,"gltfToEngineResources",(function(){return Yt})),r.d(t,"parseUrl",(function(){return Kt}));var i=r(291),a=r(3),o=r(183),n=r(595),s=r(72),c=r(599),l=r(37),d=r(62),u=r(253),f=r(608),h=r(645),m=r(877),p=r(889),v=r(878),g=r(887),b=r(879),x=r(45),O=r(125),_=r(9),T=r(4),y=r(12),w=r(747),S=r(736),M=r(208),C=r(666);class A{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=Object(d.e)(),Object(C.a)(e.length>=1),Object(C.a)(r.length%this._numIndexPerPrimitive==0),Object(C.a)(r.length>=e.length*this._numIndexPerPrimitive),Object(C.a)(3===i.size||4===i.size);const{data:a,size:o}=i,n=e.length;let s=o*r[this._numIndexPerPrimitive*e[0]];P.clear(),P.push(s),this.bbMin=Object(d.g)(a[s],a[s+1],a[s+2]),this.bbMax=Object(d.c)(this.bbMin);for(let l=0;l<n;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*r[t+e],P.push(s);let i=a[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=a[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=a[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(l.f)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<P.length;++l){s=P.getItemAt(l);const e=a[s]-this.center[0],t=a[s+1]-this.center[1],r=a[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=c)continue;const o=Math.sqrt(i),n=.5*(o-this.radius);this.radius=this.radius+n,c=this.radius*this.radius;const d=n/o;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=r*d}P.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(l.i)(this.bbMin,this.bbMax)>1){const e=Object(l.f)(Object(d.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:a,size:o}=this.position;for(let c=0;c<t;++c){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=o*this.indices[n],l=a[s],d=a[s+1],u=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[n+e];const t=a[s],r=a[s+1],i=a[s+2];t<l&&(l=t),r<d&&(d=r),i<u&&(u=i)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[c]=t,++i[t]}let n=0;for(let c=0;c<8;++c)i[c]>0&&++n;if(n<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<t;++c){const e=r[c];s[e][i[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new A(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){P.prune()}}const P=new M.a({deallocator:null});var j=r(189);class F{constructor(){this.id=Object(j.a)()}unload(){}}var E=r(847);class I extends F{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,o]of e)o&&this._vertexAttributes.set(a,{...o});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Object(E.c)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[a,o]of t)o&&(this._indices.set(a,D(o)),"position"===a&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(a.i)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(E.b)(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Object(E.a)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;Object(C.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Object(E.c)(e.length/t),i=this.vertexAttributes.get("position");return new A(r,t,e,i)}}function D(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var L=r(213),R=r(81),z=r(49),N=r(127),B=r(13),V=r(369),U=r(42);let H;var G=r(525),k=r(733);let W=null,q=null;async function $(){return Object(a.i)(q)&&(q=function(){if(Object(a.i)(H)){const e=e=>Object(U.a)("esri/libs/basisu/"+e);H=Promise.all([r.e(143),r.e(161)]).then(r.bind(null,988)).then((function(e){return e.b})).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return H}(),W=await q),q}function X(e,t,r,i,a){const o=Object(k.b)(t?37496:37492),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*n)}function K(e){return e.getNumImages()>=1&&!e.isUASTC()}function Y(e){return e.getFaces()>=1&&e.isETC1S()}function J(e,t,r,i,a,o,n,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],f=t.hasMipmap?r:Math.min(1,r),h=[];for(let g=0;g<f;g++)h.push(new Uint8Array(n(g,d))),s(g,d,h[g]);const m=h.length>1,p=m?9987:9729,v={...t,samplingMode:p,hasMipmap:m,internalFormat:u,width:a,height:o};return new G.a(e,v,{type:"compressed",levels:h})}const Z=T.a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Q(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ee=Q("DXT1"),te=Q("DXT3"),re=Q("DXT5");function ie(e,t,r){const{textureData:i,internalFormat:a,width:o,height:n}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Z.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Z.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let a,o;switch(i){case ee:a=8,o=33776;break;case te:a=16,o=33778;break;case re:a=16,o=33779;break;default:return Z.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],c=r[3];0==(3&s)&&0==(3&c)||(Z.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,d=c;let u,f;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||Object(z.h)(s)&&Object(z.h)(c)||(Z.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let h=r[1]+4;const m=[];for(let p=0;p<n;++p)f=(s+3>>2)*(c+3>>2)*a,u=new Uint8Array(e,h,f),m.push(u),h+=f,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:l,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=o,t.height=n,new G.a(e,t,i)}const ae=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),oe=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],ne=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var se=r(528),ce=r(530);var le=r(529),de=r(573);class ue extends F{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new R.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=ue.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(a.i)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(B.t)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(B.u)(e.src)||Object(B.t)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(a.i)(e))return 0;if(Object(N.c)(e)||Object(N.k)(e))return t.encoding===ue.KTX2_ENCODING?function(e,t){if(Object(a.i)(W))return e.byteLength;const r=new W.KTX2File(new Uint8Array(e)),i=Y(r)?X(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===ue.BASIS_ENCODING?function(e,t){if(Object(a.i)(W))return e.byteLength;const r=new W.BasisFile(new Uint8Array(e)),i=K(r)?X(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ue.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,t){if(Object(a.j)(this.glTexture))return this.glTexture;if(Object(a.j)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(a.i)(r)?(this.glTexture=new G.a(e,this.createDescriptor(e),null),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(N.c)(r)||Object(N.k)(r))&&this.params.encoding===ue.DDS_ENCODING?this.loadFromDDSData(e,r):(Object(N.c)(r)||Object(N.k)(r))&&this.params.encoding===ue.KTX2_ENCODING?this.loadFromKTX2(e,r):(Object(N.c)(r)||Object(N.k)(r))&&this.params.encoding===ue.BASIS_ENCODING?this.loadFromBasis(e,r):Object(N.k)(r)?this.loadFromPixelData(e,r):Object(N.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(a.i)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(a.j)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:a}=this.powerOfTwoStretchInfo;a.setData(this.data),this.drawStretchedTexture(e,t,r,i,a,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=ie(e,this.createDescriptor(e),t),this.glTexture}loadFromKTX2(e,t){return this.loadAsync(()=>async function(e,t,r){Object(a.i)(W)&&(W=await $());const i=new W.KTX2File(new Uint8Array(r));if(!Y(i))return null;i.startTranscoding();const o=J(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromBasis(e,t){return this.loadAsync(()=>async function(e,t,r){Object(a.i)(W)&&(W=await $());const i=new W.BasisFile(new Uint8Array(r));if(!K(i))return null;i.startTranscoding();const o=J(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(e,t)=>i.getImageTranscodedSizeInBytes(0,e,t),(e,t,r)=>i.transcodeImage(r,0,e,t,0,0));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromPixelData(e,t){Object(C.a)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new G.a(e,r,t),this.glTexture}loadAsync(e){const t=Object(y.d)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync(async i=>{const a=await Object(S.a)(r,{signal:i});return this.loadFromImage(e,a,t)})}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync(async i=>{const a=await Object(V.a)(r,r.src,!1,i);return this.loadFromImage(e,a,t)})}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(i=>new Promise((o,n)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Object(a.j)(d)&&d.remove()},c=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},l=e=>{s(),n(e||new _.a("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=Object(y.q)(i,()=>l(Object(y.e)()))}))}loadFromImage(e,t,r){const i=ue.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const a=this.createDescriptor(e);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,a)||Object(z.h)(i.width)&&Object(z.h)(i.height)?(a.width=i.width,a.height=i.height,this.glTexture=new G.a(e,a,t),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,a,r),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(de.a)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,a){const{width:o,height:n}=r,s=Object(z.k)(o),c=Object(z.k)(n);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[o/s,n/c],l=new G.a(e,i),l.updateData(0,0,0,o,n,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,a);break;default:Object(L.a)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const a=new G.a(e,r),o=new le.a(e,{colorTarget:0,depthStencilTarget:0},a),n=new G.a(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=oe,r=ae,i=-1,a=1){let o=null;return o=t===ne?new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):new Float32Array([i,i,a,i,i,a,a,a]),new ce.a(e,r,{geometry:t},{geometry:se.a.createVertex(e,35044,o)})}(e);return this.drawStretchedTexture(e,i,o,s,n,a),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:o}:(s.dispose(!0),n.dispose(),o.detachColorTexture(),e.bindFramebuffer(null),o.dispose()),a}drawStretchedTexture(e,t,r,i,a,o){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(a,"tex"),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(k.e)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(Object(a.j)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(a.j)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(a.j)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}ue.DDS_ENCODING="image/vnd-ms.dds",ue.KTX2_ENCODING="image/ktx2",ue.BASIS_ENCODING="image/x.basis";var fe=r(726),he=r(681);const me=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class pe extends(me(class{})){}class ve extends pe{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}class ge extends ve{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach(e=>this._textureRepository.release(e)),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId))}bindTextures(e){Object(a.j)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(a.j)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(a.j)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(a.j)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(a.j)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(a.j)(this._texture)&&this._texture.glTexture;t&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){if(!Object(a.i)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){Object(a.i)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}var be=r(775);class xe extends F{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ae,this._params=Object(be.c)(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){Object(be.e)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(a.j)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}var Oe=r(838),_e=r(644),Te=r(628),ye=r(728),we=r(680),Se=(r(5),r(349)),Me=r(836),Ce=r(788);new Me.a((function(){return{origin:null,direction:null}}));Object(d.e)(),Object(d.e)();const Ae=T.a.getLogger("esri.geometry.support.sphere");function Pe(){return Object(we.b)()}function je(e,t=Pe()){return Object(Se.c)(t,e)}function Fe(e){return Array.isArray(e)?e[3]:e}function Ee(e){return Array.isArray(e)?e:Ve}function Ie(e,t,r){if(Object(a.i)(t))return!1;const i=Object(l.g)(Ce.b.get(),t.origin,Ee(e)),o=Object(l.e)(t.direction,t.direction),n=2*Object(l.e)(t.direction,i),s=n*n-4*o*(Object(l.e)(i,i)-e[3]*e[3]);if(s<0)return!1;const c=Math.sqrt(s);let d=(-n-c)/(2*o);const u=(-n+c)/(2*o);return(d<0||u<d&&u>0)&&(d=u),!(d<0)&&(r&&Object(l.c)(r,t.origin,Object(l.b)(Ce.b.get(),t.direction,d)),!0)}function De(e,t,r){const i=Ce.b.get(),a=Ce.a.get();Object(l.d)(i,t.origin,t.direction);const o=Fe(e);Object(l.d)(r,i,t.origin),Object(l.b)(r,r,1/Object(l.m)(r)*o);const n=Re(e,t.origin),c=function(e,t){const r=Object(l.e)(e,t)/(Object(l.m)(e)*Object(l.m)(t));return-Object(z.a)(r)}(t.origin,r);return Object(s.h)(a),Object(s.c)(a,a,c+n,i),Object(l.n)(r,r,a),r}function Le(e,t,r){const i=Object(l.g)(Ce.b.get(),t,Ee(e)),a=Object(l.b)(Ce.b.get(),i,e[3]/Object(l.m)(i));return Object(l.c)(r,a,Ee(e))}function Re(e,t){const r=Object(l.g)(Ce.b.get(),t,Ee(e)),i=Object(l.m)(r),a=Fe(e),o=a+Math.abs(a-i);return Object(z.a)(a/o)}const ze=Object(d.e)();function Ne(e,t,r,i){const a=Object(l.g)(ze,t,Ee(e));switch(r){case 0:{const e=Object(z.c)(a,ze)[2];return Object(l.s)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(z.c)(a,ze),t=e[1],r=e[2],o=Math.sin(t);return Object(l.s)(i,-o*Math.cos(r),-o*Math.sin(r),Math.cos(t))}case 2:return Object(l.o)(i,a);default:return}}function Be(e,t){const r=Object(l.g)(Ue,t,Ee(e));return Object(l.m)(r)-e[3]}const Ve=Object(d.e)(),Ue=Object(d.e)();Object.freeze({__proto__:null,create:Pe,copy:je,fromCenterAndRadius:function(e,t){return Object(we.c)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:Fe,getCenter:Ee,fromValues:function(e,t,r,i){return Object(we.c)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&Object(l.h)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Ae.error("sphere.setExtent is not yet supported"),e===r?r:je(e,r)},intersectRay:Ie,intersectsRay:function(e,t){return Ie(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Ie(e,t,r))return r;const i=De(e,t,Ce.b.get());return Object(l.c)(r,t.origin,Object(l.b)(Ce.b.get(),t.direction,Object(l.j)(t.origin,i)/Object(l.m)(t.direction))),r},closestPointOnSilhouette:De,closestPoint:function(e,t,r){return Ie(e,t,r)?r:(function(e,t,r){const i=Object(l.e)(e.direction,Object(l.g)(r,t,e.origin));Object(l.c)(r,e.origin,Object(l.b)(r,e.direction,i))}(t,Ee(e),r),Le(e,r,r))},projectPoint:Le,distanceToSilhouette:function(e,t){const r=Object(l.g)(Ce.b.get(),t,Ee(e)),i=Object(l.p)(r),a=e[3]*e[3];return Math.sqrt(Math.abs(i-a))},angleToSilhouette:Re,axisAt:Ne,altitudeAt:Be,setAltitudeAt:function(e,t,r,i){const a=Be(e,t),o=Ne(e,t,2,Ue),n=Object(l.b)(Ue,o,r-a);return Object(l.c)(i,t,n)}});const He=new class{constructor(e=0){this.offset=e,this.sphere=Pe(),this.tmpVertex=Object(d.e)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let a=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(a*a+o*o+n*n);a+=a*s,o+=o*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*o+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*o+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*o+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(d.e)(),this.mbs=Object(we.b)(),this.obb={center:Object(d.e)(),halfSize:Object(ye.a)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,a=t,o=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(i*i+a*a+o*o);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+o*n,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,a=e[3],o=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(l.q)(this.obb.halfSize,e.halfSize,e.quaternion),Object(l.c)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(l.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(_e.a)(Ge,e.quaternion),Object(l.q)(this.obb.halfSize,this.obb.halfSize,Ge),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(d.e)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],a=t+this.localOrigin[1],o=r+this.localOrigin[2],n=this.offset/Math.sqrt(i*i+a*a+o*o);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+o*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}};const Ge=Object(Te.b)();function ke(e,t,r,i){const a=r.typedBuffer,o=r.typedBufferStride,n=e.length;i*=o;for(let s=0;s<n;++s){const r=2*e[s];a[i]=t[r],a[i+1]=t[r+1],i+=o}}function We(e,t,r,i,a){const o=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==a||1===a)for(let c=0;c<s;++c){const r=3*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=n}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<a;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=n}}function qe(e,t,r,i,a,o=1){if(!r)return void We(e,t,i,a,o);const n=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],d=r[1],u=r[2],f=r[4],h=r[5],m=r[6],p=r[8],v=r[9],g=r[10],b=r[12],x=r[13],O=r[14];if(a*=s,1===o)for(let _=0;_<c;++_){const r=3*e[_],i=t[r],o=t[r+1],c=t[r+2];n[a]=l*i+f*o+p*c+b,n[a+1]=d*i+h*o+v*c+x,n[a+2]=u*i+m*o+g*c+O,a+=s}else for(let _=0;_<c;++_){const r=3*e[_],i=t[r],c=t[r+1],T=t[r+2],y=l*i+f*c+p*T+b,w=d*i+h*c+v*T+x,S=u*i+m*c+g*T+O;for(let e=0;e<o;++e)n[a]=y,n[a+1]=w,n[a+2]=S,a+=s}}function $e(e,t,r,i,a,o=1){if(!r)return void We(e,t,i,a,o);const n=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=n[0],f=n[1],h=n[2],m=n[4],p=n[5],v=n[6],g=n[8],b=n[9],x=n[10],O=!Object(s.k)(n),_=1e-6,T=1-_;if(a*=l,1===o)for(let s=0;s<d;++s){const r=3*e[s],i=t[r],o=t[r+1],n=t[r+2];let d=u*i+m*o+g*n,y=f*i+p*o+b*n,w=h*i+v*o+x*n;if(O){const e=d*d+y*y+w*w;if(e<T&&e>_){const t=1/Math.sqrt(e);d*=t,y*=t,w*=t}}c[a+0]=d,c[a+1]=y,c[a+2]=w,a+=l}else for(let s=0;s<d;++s){const r=3*e[s],i=t[r],n=t[r+1],d=t[r+2];let y=u*i+m*n+g*d,w=f*i+p*n+b*d,S=h*i+v*n+x*d;if(O){const e=y*y+w*w+S*S;if(e<T&&e>_){const t=1/Math.sqrt(e);y*=t,w*=t,S*=t}}for(let e=0;e<o;++e)c[a+0]=y,c[a+1]=w,c[a+2]=S,a+=l}}function Xe(e,t,r,i,a,o=1){if(!r)return void function(e,t,r,i,a=1){const o=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===a)for(let c=0;c<s;++c){const r=4*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=n}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<a;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=n}}(e,t,i,a,o);const n=r,c=i.typedBuffer,l=i.typedBufferStride,d=e.length,u=n[0],f=n[1],h=n[2],m=n[4],p=n[5],v=n[6],g=n[8],b=n[9],x=n[10],O=!Object(s.k)(n),_=1e-6,T=1-_;if(a*=l,1===o)for(let s=0;s<d;++s){const r=4*e[s],i=t[r],o=t[r+1],n=t[r+2],d=t[r+3];let y=u*i+m*o+g*n,w=f*i+p*o+b*n,S=h*i+v*o+x*n;if(O){const e=y*y+w*w+S*S;if(e<T&&e>_){const t=1/Math.sqrt(e);y*=t,w*=t,S*=t}}c[a+0]=y,c[a+1]=w,c[a+2]=S,c[a+3]=d,a+=l}else for(let s=0;s<d;++s){const r=4*e[s],i=t[r],n=t[r+1],d=t[r+2],y=t[r+3];let w=u*i+m*n+g*d,S=f*i+p*n+b*d,M=h*i+v*n+x*d;if(O){const e=w*w+S*S+M*M;if(e<T&&e>_){const t=1/Math.sqrt(e);w*=t,S*=t,M*=t}}for(let e=0;e<o;++e)c[a+0]=w,c[a+1]=S,c[a+2]=M,c[a+3]=y,a+=l}}function Ke(e,t,r,i,a,o=1){const n=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(a*=s,1===o){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=t[r+3],a+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=255,a+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<o;++e)n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=t[r+3],a+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<o;++e)n[a]=t[r],n[a+1]=t[r+1],n[a+2]=t[r+2],n[a+3]=255,a+=s}}var Ye=r(0),Je=r(682),Ze=r(709),Qe=r(717),et=r(881),tt=r(710),rt=r(711),it=r(684),at=r(685),ot=r(776),nt=r(320);function st(e,t,r){Object(s.m)(ct,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",ct)}const ct=Object(nt.a)();class lt{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function dt(e={}){return(t,r)=>{var i,a;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(Object(z.j)(n)),c=null!=(a=t._parameterBits)?a:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var ut=r(527),ft=r(622);class ht extends ft.a{constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new M.a({deallocator:null}),this._fragmentUniforms=Object(ut.b)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(a.i)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),Object(a.j)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const mt={mask:255},pt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},vt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var gt=r(840),bt=r(531);class xt extends class{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=Object(a.e)(this._program),this._pipeline=this._config=null}reload(e){Object(a.e)(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=xt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ot.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ht(e.rctx,i,ae)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const a=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===a)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(tt.a)(this.program,t)),7===a&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",be.b[e.colorMixMode])),0===a?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",be.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(rt.b)(this.program,e,this.configuration.isSchematic)):4===a&&Object(et.b)(this.program,t),Object(at.b)(this.program,e),Object(Qe.b)(this.program,e,t),Object(be.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(d.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;st(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Ze.a.bindCustomOrigin(this.program,t),Object(Je.b)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(it.b)(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,a=2===e;return Object(bt.e)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Oe.e:Object(Oe.a)(e),culling:Ot(r)&&Object(bt.b)(r.cullFace),depthTest:{func:Object(Oe.b)(e)},depthWrite:i||a?r.writeDepth&&bt.d:null,colorWrite:bt.c,stencilWrite:r.sceneHasOcludees?mt:null,stencilTest:r.sceneHasOcludees?t?vt:pt:null,polygonOffset:i||a?null:Object(Oe.f)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function Ot(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}xt.shader=new lt(gt.a,()=>r.e(240).then(r.bind(null,989)));class _t extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map(()=>0)}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(Ye.a)([dt({count:8})],_t.prototype,"output",void 0),Object(Ye.a)([dt({count:4})],_t.prototype,"alphaDiscardMode",void 0),Object(Ye.a)([dt({count:3})],_t.prototype,"doubleSidedMode",void 0),Object(Ye.a)([dt()],_t.prototype,"isSchematic",void 0),Object(Ye.a)([dt()],_t.prototype,"vertexColors",void 0),Object(Ye.a)([dt()],_t.prototype,"offsetBackfaces",void 0),Object(Ye.a)([dt()],_t.prototype,"symbolColors",void 0),Object(Ye.a)([dt()],_t.prototype,"vvSize",void 0),Object(Ye.a)([dt()],_t.prototype,"vvColor",void 0),Object(Ye.a)([dt()],_t.prototype,"verticalOffset",void 0),Object(Ye.a)([dt()],_t.prototype,"receiveShadows",void 0),Object(Ye.a)([dt()],_t.prototype,"slicePlaneEnabled",void 0),Object(Ye.a)([dt()],_t.prototype,"sliceHighlightDisabled",void 0),Object(Ye.a)([dt()],_t.prototype,"receiveAmbientOcclusion",void 0),Object(Ye.a)([dt()],_t.prototype,"screenSizePerspective",void 0),Object(Ye.a)([dt()],_t.prototype,"textureAlphaPremultiplied",void 0),Object(Ye.a)([dt()],_t.prototype,"hasColorTexture",void 0),Object(Ye.a)([dt()],_t.prototype,"usePBR",void 0),Object(Ye.a)([dt()],_t.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(Ye.a)([dt()],_t.prototype,"hasEmissionTexture",void 0),Object(Ye.a)([dt()],_t.prototype,"hasOcclusionTexture",void 0),Object(Ye.a)([dt()],_t.prototype,"hasNormalTexture",void 0),Object(Ye.a)([dt()],_t.prototype,"instanced",void 0),Object(Ye.a)([dt()],_t.prototype,"instancedColor",void 0),Object(Ye.a)([dt()],_t.prototype,"instancedDoublePrecision",void 0),Object(Ye.a)([dt()],_t.prototype,"vertexTangents",void 0),Object(Ye.a)([dt()],_t.prototype,"normalsTypeDerivate",void 0),Object(Ye.a)([dt()],_t.prototype,"writeDepth",void 0),Object(Ye.a)([dt()],_t.prototype,"sceneHasOcludees",void 0),Object(Ye.a)([dt()],_t.prototype,"transparent",void 0),Object(Ye.a)([dt()],_t.prototype,"enableOffset",void 0),Object(Ye.a)([dt({count:3})],_t.prototype,"cullFace",void 0),Object(Ye.a)([dt({count:4})],_t.prototype,"transparencyPassType",void 0),Object(Ye.a)([dt()],_t.prototype,"multipassTerrainEnabled",void 0),Object(Ye.a)([dt()],_t.prototype,"cullAboveGround",void 0);var Tt=r(841);class yt extends xt{initializeProgram(e){const t=yt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ot.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ht(e.rctx,i,ae)}}yt.shader=new lt(Tt.a,()=>r.e(239).then(r.bind(null,990)));class wt extends xe{constructor(e){super(e,Mt),this.supportsEdges=!0,this.techniqueConfig=new _t,this.vertexBufferLayout=wt.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?wt.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,a=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||o||i)?!!n||s:r?n?c:s:a||o||i?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<Oe.c),this.techniqueConfig}intersect(e,t,r,i,o,n,s){if(null!==this.params.verticalOffset){const e=i.camera;Object(l.s)(It,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=Object(l.o)(Ft,It);break;case 2:t=Object(l.h)(Ft,jt)}let a=0;if(null!==this.params.verticalOffset){const r=Object(l.g)(Dt,It,e.eye),i=Object(l.m)(r),o=Object(l.b)(r,r,1/i);let n=null;this.params.screenSizePerspective&&(n=Object(l.e)(t,o)),a+=Object(be.f)(e,i,this.params.verticalOffset,n,this.params.screenSizePerspective)}Object(l.b)(t,t,a),Object(l.t)(Et,t,i.transform.inverseRotation),o=Object(l.g)(At,o,Et),n=Object(l.g)(Pt,n,Et)}var c;Object(be.d)(e,t,i,o,n,(c=i.verticalOffset,Object(a.j)(c)?(He.offset=c,He):null),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new St(e)}createBufferWriter(){return new Ct(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(fe.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(fe.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class St extends ge{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?yt:xt,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)||23===e}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const Mt={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(n.b)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:he.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class Ct{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,a,o){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{Object(C.a)(3===t.size);const e=a.getField(n,f.u);e&&qe(s,t.data,r,e,o);break}case"normal":{Object(C.a)(3===t.size);const e=a.getField(n,f.u);e&&$e(s,t.data,i,e,o);break}case"uv0":{Object(C.a)(2===t.size);const e=a.getField(n,f.m);e&&ke(s,t.data,e,o);break}case"color":{Object(C.a)(3===t.size||4===t.size);const e=a.getField(n,f.J);e&&Ke(s,t.data,t.size,e,o);break}case"symbolColor":{Object(C.a)(3===t.size||4===t.size);const e=a.getField(n,f.J);e&&Ke(s,t.data,t.size,e,o);break}case"tangent":{Object(C.a)(4===t.size);const e=a.getField(n,f.C);e&&Xe(s,t.data,i,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const At=Object(d.e)(),Pt=Object(d.e)(),jt=Object(d.g)(0,0,1),Ft=Object(d.e)(),Et=Object(d.e)(),It=Object(d.e)(),Dt=Object(d.e)(),Lt=T.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Rt(e,t){const r=await async function(e,t){const r=Object(a.j)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(O.c)(t.request(e,"json",r));if(!0===i.ok)return i.value;Object(y.u)(i.error),zt(i.error.details.url)}(e,r,t);const i=await Object(O.c)(Object(x.default)(e,Object(a.q)(t)));if(!0===i.ok)return i.value.data;Object(y.u)(i.error),zt(i.error)}(e,t);return{resource:r,textures:await Vt(r.textureDefinitions,t)}}function zt(e){throw new _.a("","Request for object resource failed: "+e)}function Nt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Lt.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Lt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Lt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Lt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Lt.warn("Indexed geometries must specify faces"),i=!1;break}default:Lt.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Lt.warn("Geometry requires material"),i=!1);const a=e.params.vertexAttributes;for(const o in a)a[o].values||(Lt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Bt(e){const t=Object(u.c)();return e.forEach(e=>{const r=e.boundingInfo;Object(a.j)(r)&&(Object(u.g)(t,r.getBBMin()),Object(u.g)(t,r.getBBMax()))}),t}async function Vt(e,t){const r=[];for(const n in e){const i=e[n],o=i.images[0].data;if(!o){Lt.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+o,c="/textureDefinitions/"+n,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Ut(l)},u=Object(a.j)(t)&&t.disableTextures?Promise.resolve(null):Object(S.a)(s,t);r.push(u.then(e=>({refId:c,image:e,params:d,alphaChannelUsage:l})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Ut(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Ht(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Gt=new w.a(1,2,"wosr");var kt=r(880),Wt=r(755),qt=r(756),$t=r(674);async function Xt(e,t){const r=Kt(Object(i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Rt(r.url,t)),i=function(e,t){const r=[],i=[],o=[],n=[],s=e.resource,c=w.a.parse(s.version||"1.0","wosr");Gt.validate(c);const l=s.model.name,u=s.model.geometries,f=s.materialDefinitions,h=e.textures;let m=0;const p=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!Nt(e))continue;const s=Ht(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const b=h&&h[s.texture];if(b&&!p.has(s.texture)){const{image:e,params:t}=b,r=new ue(e,t);n.push(r),p.set(s.texture,r)}const x=p.get(s.texture),O=x?x.id:void 0;let _=o[s.material]?o[s.material][s.texture]:null;if(!_){const e=f[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=b&&b.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=b?Ut(b.alphaChannelUsage):void 0,c={ambient:Object(d.f)(e.diffuse),diffuse:Object(d.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!b&&!!b.params.preMultiplyAlpha};Object(a.j)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),_=new wt(c),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=_}i.push(_);const T=new I(l,g);m+=g.position?g.position.length:0,r.push(T)}return{name:l,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:Bt(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(g.a)(new v.a(t.streamDataRequester),r.url,t,t.usePBR)),n=Object(a.h)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&Object(a.j)(n)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if(Object(a.i)(i))return;const n=o.attributes.position,u=n.count,h=Object(d.e)(),m=Object(d.e)(),v=Object(d.e)(),g=Object(p.a)(f.J,u),b=Object(p.a)(f.u,u),x=Object(s.b)(Object(c.d)(),o.transform);for(let a=0;a<u;a++){n.getVec(a,m),i.getVec(a,h),Object(l.n)(m,m,o.transform),Object(l.g)(v,m,t.center),Object(l.a)(v,v,t.radius);const s=v[2],c=Object(l.m)(v),d=Math.min(.45+.55*c*c,1);Object(l.a)(v,v,t.radius),Object(l.n)(v,v,x),Object(l.o)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.f)(v,v,h,s>-1?.2:Math.min(-4*s-3.8,1)),b.setVec(a,v),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}o.attributes.normal=b,o.attributes.color=g}}}(o,n);const u=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Yt(o,u,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Yt(o,u,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const m=Yt(o,u,h);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function Kt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Yt(e,t,r,i){const s=e.model,c=Object(n.b)(),l=new Array,d=new Map,v=new Map;return s.lods.forEach((e,n)=>{if(void 0!==i&&n!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(a.j)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u.c)()};l.push(g),e.parts.forEach(e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),l=Object(a.j)(e.attributes.texCoord0),x=Object(a.j)(e.attributes.normal),O=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!d.has(i)){if(l){if(Object(a.j)(n.textureColor)&&!v.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:1!==O};v.set(n.textureColor,new ue(e.data,t))}if(Object(a.j)(n.textureNormal)&&!v.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);v.set(n.textureNormal,new ue(e.data,e.parameters))}if(Object(a.j)(n.textureOcclusion)&&!v.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);v.set(n.textureOcclusion,new ue(e.data,e.parameters))}if(Object(a.j)(n.textureEmissive)&&!v.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);v.set(n.textureEmissive,new ue(e.data,e.parameters))}if(Object(a.j)(n.textureMetallicRoughness)&&!v.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);v.set(n.textureMetallicRoughness,new ue(e.data,e.parameters))}}const o=n.color[0]**(1/kt.a),c=n.color[1]**(1/kt.a),u=n.color[2]**(1/kt.a),f=n.emissiveFactor[0]**(1/kt.a),h=n.emissiveFactor[1]**(1/kt.a),m=n.emissiveFactor[2]**(1/kt.a),p=Object(a.j)(n.textureColor)&&l?v.get(n.textureColor):null;d.set(i,new wt({...t,transparent:0===O,textureAlphaMode:O,textureAlphaCutoff:n.alphaCutoff,diffuse:[o,c,u],ambient:[o,c,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(a.j)(p)?p.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:Object(a.j)(n.textureNormal)&&l?v.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:Object(a.j)(p)&&!!p.params.preMultiplyAlpha,occlusionTextureId:Object(a.j)(n.textureOcclusion)&&l?v.get(n.textureOcclusion).id:void 0,emissiveTextureId:Object(a.j)(n.textureEmissive)&&l?v.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(a.j)(n.textureMetallicRoughness)&&l?v.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[f,h,m],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const _=function(e,t){switch(t){case 4:return Object(b.c)(e);case 5:return Object(b.b)(e);case 6:return Object(b.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,y=Object(p.a)(f.u,T);Object(h.e)(y,e.attributes.position,e.transform);const w=[["position",{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],S=[["position",_]];if(Object(a.j)(e.attributes.normal)){const t=Object(p.a)(f.u,T);Object(o.a)(c,e.transform),Object(h.a)(t,e.attributes.normal,c),w.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["normal",_])}if(Object(a.j)(e.attributes.tangent)){const t=Object(p.a)(f.C,T);Object(o.a)(c,e.transform),Object(m.c)(t,e.attributes.tangent,c),w.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["tangent",_])}if(Object(a.j)(e.attributes.texCoord0)){const t=Object(p.a)(f.m,T);Object(Wt.b)(t,e.attributes.texCoord0),w.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["uv0",_])}if(Object(a.j)(e.attributes.color)){const t=Object(p.a)(f.J,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof f.C?Object(m.b)(t,e.attributes.color,255):e.attributes.color instanceof f.J?Object(qt.a)(t,e.attributes.color):e.attributes.color instanceof f.H&&Object(m.b)(t,e.attributes.color,1/256);else{Object(qt.b)(t,255,255,255,255);const r=new f.B(t.buffer,0,4);e.attributes.color instanceof f.u?Object(h.d)(r,e.attributes.color,255):e.attributes.color instanceof f.B?Object($t.a)(r,e.attributes.color):e.attributes.color instanceof f.z&&Object(h.d)(r,e.attributes.color,1/256)}w.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),S.push(["color",_])}const M=new I(w,S);g.stageResources.geometries.push(M),g.stageResources.materials.push(d.get(i)),l&&(Object(a.j)(n.textureColor)&&g.stageResources.textures.push(v.get(n.textureColor)),Object(a.j)(n.textureNormal)&&g.stageResources.textures.push(v.get(n.textureNormal)),Object(a.j)(n.textureOcclusion)&&g.stageResources.textures.push(v.get(n.textureOcclusion)),Object(a.j)(n.textureEmissive)&&g.stageResources.textures.push(v.get(n.textureEmissive)),Object(a.j)(n.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(n.textureMetallicRoughness))),g.numberOfVertices+=T;const C=M.boundingInfo;Object(a.j)(C)&&(Object(u.g)(g.boundingBox,C.getBBMin()),Object(u.g)(g.boundingBox,C.getBBMax()))})}),l}}}]);
//# sourceMappingURL=47.743f699a.chunk.js.map