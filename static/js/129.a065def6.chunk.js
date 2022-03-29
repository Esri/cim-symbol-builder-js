(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[129],{631:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));class r{constructor(e,t,i,r,a,o=!1,n=0){this.name=e,this.count=t,this.type=i,this.offset=r,this.stride=a,this.normalized=o,this.divisor=n}}},641:function(e,t,i){"use strict";function r(e,...t){let i="";for(let r=0;r<t.length;r++)i+=e[r]+t[r];return i+=e[e.length-1],i}i.d(t,"a",(function(){return r})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r||(r={}))},678:function(e,t,i){"use strict";function r(e){return e=e||globalThis.location.hostname,l.some(t=>{var i;return null!=(null==(i=e)?void 0:i.match(t))})}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r}));const o=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,c=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,n,/^jsapps.esri.com$/,s,c]},680:function(e,t,i){"use strict";var r;i.d(t,"a",(function(){return r})),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(r||(r={}))},684:function(e,t,i){"use strict";function r(){return new Float32Array(3)}function a(e,t,i){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=i,r}function o(){return r()}function n(){return a(1,1,1)}function s(){return a(1,0,0)}function c(){return a(0,1,0)}function l(){return a(0,0,1)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a}));const d=o(),u=n(),h=s(),m=c(),f=l();Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:n,unitX:s,unitY:c,unitZ:l,ZEROS:d,ONES:u,UNIT_X:h,UNIT_Y:m,UNIT_Z:f})},697:function(e,t,i){"use strict";var r,a,o,n,s,c,l,d,u,h,m,f,p,v;i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return m})),i.d(t,"e",(function(){return h})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return l})),i.d(t,"h",(function(){return n})),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(a||(a={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(o||(o={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(c||(c={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(l||(l={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(d||(d={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(m||(m={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(f||(f={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(p||(p={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},726:function(e,t,i){"use strict";var r;i.d(t,"a",(function(){return r})),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(r||(r={}))},739:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}));var r,a,o=i(641),n=i(680);function s(e,t){t.attributeTextureCoordinates===r.Default&&(e.attributes.add(n.a.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o.a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),t.attributeTextureCoordinates===r.Atlas&&(e.attributes.add(n.a.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(n.a.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o.a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),t.attributeTextureCoordinates===r.None&&e.vertex.code.add(o.a`void forwardTextureCoordinates() {}`)}(a=r||(r={}))[a.None=0]="None",a[a.Default=1]="Default",a[a.Atlas=2]="Atlas",a[a.COUNT=3]="COUNT"},740:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return l}));var r=i(684),a=i(976),o=i(641);Object(r.b)(0,.6,.2);var n,s;function c(e,t){const i=e.fragment,r=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===n.Normal&&r&&e.include(a.a,t),t.pbrMode!==n.Schematic?(t.pbrMode===n.Disabled&&i.code.add(o.a`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===n.Normal&&(i.uniforms.add("emissionFactor","vec3"),i.uniforms.add("mrrFactors","vec3"),i.code.add(o.a`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(i.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texMetallicRoughnessSize","vec2"),i.code.add(o.a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(i.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texEmissionSize","vec2"),i.code.add(o.a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(i.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texOcclusionSize","vec2"),i.code.add(o.a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(o.a`float getBakedOcclusion() { return 1.0; }`),i.code.add(o.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):i.code.add(o.a`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function l(e,t,i=!1){i||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(s=n||(n={}))[s.Disabled=0]="Disabled",s[s.Normal=1]="Normal",s[s.Schematic=2]="Schematic",s[s.Water=3]="Water",s[s.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",s[s.COUNT=5]="COUNT"},759:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return o}));var r=i(641);function a(e){const t=r.a`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var o,n,s=i(680);function c(e,t){t.normalType===o.Attribute&&(e.attributes.add(s.a.NORMAL,"vec3"),e.vertex.code.add(r.a`vec3 normalModel() {
return normal;
}`)),t.normalType===o.CompressedAttribute&&(e.include(a),e.attributes.add(s.a.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r.a`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===o.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(n=o||(o={}))[n.Attribute=0]="Attribute",n[n.CompressedAttribute=1]="CompressedAttribute",n[n.Ground=2]="Ground",n[n.ScreenDerivative=3]="ScreenDerivative",n[n.COUNT=4]="COUNT"},775:function(e,t,i){"use strict";i.d(t,"a",(function(){return U})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return d})),i.d(t,"e",(function(){return O})),i.d(t,"f",(function(){return n})),i.d(t,"g",(function(){return o}));var r=i(697),a=i(614);function o(e,t,i=a.c.ADD,r=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function n(e,t,i,r,o=a.c.ADD,n=a.c.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:r,opRgb:o,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:a.n.BACK,mode:a.j.CCW},c={face:a.n.FRONT,mode:a.j.CCW},l=e=>e===r.b.Back?s:e===r.b.Front?c:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function m(e){return C.intern(e)}function f(e){return E.intern(e)}function p(e){return R.intern(e)}function v(e){return P.intern(e)}function g(e){return N.intern(e)}function b(e){return j.intern(e)}function x(e){return F.intern(e)}function O(e){return B.intern(e)}class _{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),i=this.interns;return i.has(t)||i.set(t,this.makeRef(e)),i.get(t)}}function T(e){return"["+e.join(",")+"]"}const A=new _(S,e=>({__tag:"Blending",...e}));function S(e){return e?T([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const C=new _(M,e=>({__tag:"Culling",...e}));function M(e){return e?T([e.face,e.mode]):null}const E=new _(y,e=>({__tag:"PolygonOffset",...e}));function y(e){return e?T([e.factor,e.units]):null}const R=new _(w,e=>({__tag:"DepthTest",...e}));function w(e){return e?T([e.func]):null}const P=new _(I,e=>({__tag:"StencilTest",...e}));function I(e){return e?T([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new _(L,e=>({__tag:"DepthWrite",...e}));function L(e){return e?T([e.zNear,e.zFar]):null}const j=new _(D,e=>({__tag:"ColorWrite",...e}));function D(e){return e?T([e.r,e.g,e.b,e.a]):null}const F=new _(z,e=>({__tag:"StencilWrite",...e}));function z(e){return e?T([e.mask]):null}const B=new _((function(e){return e?T([S(e.blending),M(e.culling),y(e.polygonOffset),w(e.depthTest),I(e.stencilTest),L(e.depthWrite),D(e.colorWrite),z(e.stencilWrite)]):null}),e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:b(e.colorWrite),stencilWrite:x(e.stencilWrite)}));class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,i,r){return(i||e!==t)&&(r(e),this._pipelineInvalid=!0),e}}},777:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));i(32),i(76),i(397);var r=i(753);Object(r.b)();class a{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new a(t)}function n(e,t,i,r){e[12]=t,e[13]=i,e[14]=r}},778:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return r}));var r,a,o=i(233),n=i(641);function s(e,t){const i=e.fragment;switch(i.code.add(n.a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:i.code.add(n.a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:i.code.add(n.a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:i.code.add(n.a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Object(o.a)(t.doubleSidedMode);case r.COUNT:}}(a=r||(r={}))[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"},779:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n}));var r=i(641),a=i(697);const o=.1,n=.001;function s(e,t){const i=e.fragment;switch(t.alphaDiscardMode){case a.a.Blend:i.code.add(r.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${r.a.float(n)}) { discard; } }
      `);break;case a.a.Opaque:i.code.add(r.a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case a.a.Mask:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(r.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case a.a.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(r.a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},780:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return d}));var r=i(2),a=i(89),o=i(709),n=i(39),s=i(71),c=i(641);function l(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=c.a`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,r=c.a`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.sliceHighlightDisabled?c.a`#define highlightSlice(_color_, _pos_) (_color_)`:c.a`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(a)}else{const i=c.a`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}function d(e,t,i,o){if(t.slicePlaneEnabled)if(Object(r.j)(i)){if(Object(n.h)(u,i.origin),Object(n.h)(h,i.basis1),Object(n.h)(m,i.basis2),Object(r.j)(o)&&Object(r.j)(o.origin)&&Object(n.g)(u,i.origin,o.origin),Object(r.j)(o)&&Object(r.j)(o.view)){const e=Object(r.j)(o.origin)?Object(a.h)(f,o.view,o.origin):o.view;Object(n.c)(h,h,u),Object(n.c)(m,m,u),Object(n.n)(u,u,e),Object(n.n)(h,h,e),Object(n.n)(m,m,e),Object(n.g)(h,h,u),Object(n.g)(m,m,u)}e.setUniform3fv("slicePlaneOrigin",u),e.setUniform3fv("slicePlaneBasis1",h),e.setUniform3fv("slicePlaneBasis2",m)}else e.setUniform3fv("slicePlaneBasis1",s.b),e.setUniform3fv("slicePlaneBasis2",s.b),e.setUniform3fv("slicePlaneOrigin",s.b)}const u=Object(s.e)(),h=Object(s.e)(),m=Object(s.e)(),f=Object(o.d)()},781:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));var r=i(921),a=i(641);function o(e){e.fragment.include(r.a),e.fragment.uniforms.add("shadowMapTex","sampler2D"),e.fragment.uniforms.add("numCascades","int"),e.fragment.uniforms.add("cascadeDistances","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(a.a`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
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
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function n(e,t,i){t.shadowMappingEnabled&&t.shadowMap.bindView(e,i)}},782:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return s}));var r=i(641),a=i(680);function o(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add(a.a.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(r.a`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(r.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?r.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(r.a`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r.a`
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

      ${t.vvInstancingEnabled?r.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(r.a`vec4 vvColor() { return vec4(1.0); }`)}function n(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function s(e,t){n(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},805:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return d}));var r=i(71),a=i(726),o=i(847),n=i(641),s=i(680),c=i(824);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(s.a.MODELORIGINHI,"vec3"),e.attributes.add(s.a.MODELORIGINLO,"vec3"),e.attributes.add(s.a.MODEL,"mat3"),e.attributes.add(s.a.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(o.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const i=[n.a`
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
    `:n.a``];e.vertex.code.add(i[0]),e.vertex.code.add(i[1]),e.vertex.code.add(i[2]),t.output===a.a.Normal&&e.vertex.code.add(i[3]),e.vertex.code.add(i[4])}function d(e,t){Object(c.b)(t,u,h,3),e.setUniform3fv("viewOriginHi",u),e.setUniform3fv("viewOriginLo",h)}const u=Object(r.e)(),h=Object(r.e)()},806:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return a}));var r=i(641);function a(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(r.a`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},807:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(641);function a(e,t){const i={hasModelTransformation:!1,...t};if(i.hasModelTransformation)return i.linearDepth?void e.vertex.code.add(r.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(r.a`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);i.linearDepth?e.vertex.code.add(r.a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(r.a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},808:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(641),a=i(680);function o(e){e.attributes.add(a.a.POSITION,"vec3"),e.vertex.code.add(r.a`vec3 positionModel() { return position; }`)}},809:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(641);function a(e,t){const i=e.fragment;t.receiveAmbientOcclusion?(i.uniforms.add("ssaoTex","sampler2D"),i.uniforms.add("viewportPixelSz","vec4"),i.code.add(r.a`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):i.code.add(r.a`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},813:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));var r=i(263),a=i(641);i(866);function o(e){e.vertex.code.add(a.a`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(a.a`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.a`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.a`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.a`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.a`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.a`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function n(e,t){const i=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(o),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(a.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${t.viewingMode===r.a.Global?a.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?a.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(a.a`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function s(e,t,i){if(!t.verticalOffset)return;const r=function(e,t,i,r=c){return r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*t)/(.5*i),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}(t.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),a=i.camera.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*a,r.perDistance,r.minWorldLength,r.maxWorldLength)}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},814:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(641);function a(e){const t=e.fragment.code;t.add(r.a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r.a`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r.a`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=i(740),n=i(969);function s(e,t){const i=e.fragment.code;e.include(n.a),t.pbrMode===o.a.Water||t.pbrMode===o.a.WaterOnIntegratedMesh?(i.add(r.a`
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
    `),i.add(r.a`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(r.a`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(r.a`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(r.a`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):t.pbrMode!==o.a.Normal&&t.pbrMode!==o.a.Schematic||(e.include(a),i.add(r.a`struct PBRShadingInfo
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
};`),i.add(r.a`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(r.a`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(r.a`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(r.a`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(r.a`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},818:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(716),a=i(795);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,r){const a=this.stride;if(a%4==0){const o=new Uint32Array(e.buffer,t*a,r*a/4);new Uint32Array(this.buffer,i*a,r*a/4).set(o)}else{const o=new Uint8Array(e.buffer,t*a,r*a);new Uint8Array(this.buffer,i*a,r*a).set(o)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,r.m,t),this}vec2f64(e,t){return this._appendField(e,r.n,t),this}vec3f(e,t){return this._appendField(e,r.u,t),this}vec3f64(e,t){return this._appendField(e,r.v,t),this}vec4f(e,t){return this._appendField(e,r.C,t),this}vec4f64(e,t){return this._appendField(e,r.D,t),this}mat3f(e,t){return this._appendField(e,r.f,t),this}mat3f64(e,t){return this._appendField(e,r.g,t),this}mat4f(e,t){return this._appendField(e,r.h,t),this}mat4f64(e,t){return this._appendField(e,r.i,t),this}vec4u8(e,t){return this._appendField(e,r.J,t),this}f32(e,t){return this._appendField(e,r.a,t),this}f64(e,t){return this._appendField(e,r.b,t),this}u8(e,t){return this._appendField(e,r.l,t),this}u16(e,t){return this._appendField(e,r.j,t),this}i8(e,t){return this._appendField(e,r.e,t),this}vec2i8(e,t){return this._appendField(e,r.q,t),this}vec2i16(e,t){return this._appendField(e,r.o,t),this}vec2u8(e,t){return this._appendField(e,r.t,t),this}vec4u16(e,t){return this._appendField(e,r.H,t),this}u32(e,t){return this._appendField(e,r.k,t),this}_appendField(e,t,i){const r=t.ElementCount*Object(a.a)(t.ElementType),o=this.stride;this.fields.set(e,{size:r,constructor:t,offset:o,optional:i}),this.stride+=r,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,i)=>e.fields.set(i,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}},824:function(e,t,i){"use strict";function r(e,t,i){for(let r=0;r<i;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function a(e,t,i,a){for(let s=0;s<a;++s)o[0]=e[s],r(o,n,1),t[s]=n[0],i[s]=n[1]}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a}));const o=new Float64Array(1),n=new Float32Array(2)},825:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return m}));var r=i(697),a=i(614),o=i(775);const n=Object(o.f)(a.b.SRC_ALPHA,a.b.ONE,a.b.ONE_MINUS_SRC_ALPHA,a.b.ONE_MINUS_SRC_ALPHA),s=Object(o.g)(a.b.ONE,a.b.ONE),c=Object(o.g)(a.b.ZERO,a.b.ONE_MINUS_SRC_ALPHA);function l(e){return e===r.h.FrontFace?null:e===r.h.Alpha?c:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function m(e,t=a.h.LESS){return e===r.h.NONE||e===r.h.FrontFace?t:a.h.LEQUAL}},826:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(47);async function a(e,t){const{data:i}=await Object(r.default)(e,{responseType:"image",...t});return i}},847:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));var r=i(5),a=i(641);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a.a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}function n(e){return!!Object(r.a)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},848:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(726),a=i(641);function o(e,t){t.output===r.a.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(a.a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===r.a.Depth||t.output===r.a.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(a.a`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(a.a`void forwardLinearDepth() {}`)}},849:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(641);function a(e){e.vertex.code.add(r.a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},850:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(641),a=i(680);function o(e,t){t.attributeColor?(e.attributes.add(a.a.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},851:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(921),a=i(641);function o(e){e.include(r.a),e.code.add(a.a`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},852:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));const r=i(11).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class a{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&r.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends a{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new d,this.extensions=new u,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),r=this.varyings.generateSource(),a="vertex"===e?this.vertex:this.fragment,o=a.uniforms.generateSource(),n=a.code.generateSource(),s="vertex"===e?f:m,c=this.constants.generateSource().concat(a.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}`}}class n{constructor(){this._entries=new Map}add(e,t,i){const r=`${e}_${t}_${i}`;return this._entries.set(r,{name:e,type:t,arraySize:i}),this}generateSource(){return Array.from(this._entries.values()).map(e=>`uniform ${e.type} ${e.name}${(e=>e?`[${e}]`:"")(e.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends a{constructor(){super(...arguments),this.uniforms=new n,this.code=new s,this.constants=new h}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,i){let r="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":r=h._numberToFloatStr(i);break;case"int":r=h._numberToIntStr(i);break;case"bool":r=i.toString();break;case"vec2":r=`vec2(${h._numberToFloatStr(i[0])},                            ${h._numberToFloatStr(i[1])})`;break;case"vec3":r=`vec3(${h._numberToFloatStr(i[0])},                            ${h._numberToFloatStr(i[1])},                            ${h._numberToFloatStr(i[2])})`;break;case"vec4":r=`vec4(${h._numberToFloatStr(i[0])},                            ${h._numberToFloatStr(i[1])},                            ${h._numberToFloatStr(i[2])},                            ${h._numberToFloatStr(i[3])})`;break;case"ivec2":r=`ivec2(${h._numberToIntStr(i[0])},                             ${h._numberToIntStr(i[1])})`;break;case"ivec3":r=`ivec3(${h._numberToIntStr(i[0])},                             ${h._numberToIntStr(i[1])},                             ${h._numberToIntStr(i[2])})`;break;case"ivec4":r=`ivec4(${h._numberToIntStr(i[0])},                             ${h._numberToIntStr(i[1])},                             ${h._numberToIntStr(i[2])},                             ${h._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":r=`${t}(${Array.prototype.map.call(i,e=>h._numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${r};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",f="precision highp float;\nprecision highp sampler2D;"},866:function(e,t,i){"use strict";i.d(t,"a",(function(){return C})),i.d(t,"b",(function(){return R})),i.d(t,"c",(function(){return M})),i.d(t,"d",(function(){return g})),i.d(t,"e",(function(){return E})),i.d(t,"f",(function(){return S}));var r=i(49),a=i(2),o=i(39),n=i(71),s=i(288),c=i(697);i(263);function l(e,t,i){const r=i.parameters,a=i.paddingPixelsOverride;return h.scale=Math.min(r.divisor/(t-r.offset),1),h.factor=function(e){return Math.abs(e*e*e)}(e),h.minPixelSize=r.minPixelSize,h.paddingPixels=a,h}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function u(e,t){return Math.max(Object(r.h)(e*t.scale,e,t.factor),d(e,t))}Object(r.f)(10),Object(r.f)(12),Object(r.f)(70),Object(r.f)(40);const h={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var m=i(777),f=i(680),p=(i(89),i(709));i(824);new Float64Array(3),new Float32Array(6),Object(p.d)();const v=Object(s.b)();function g(e,t,i,r,n,l,d){if(!function(e){return!!Object(a.j)(e)&&!e.visible}(t))if(e.boundingInfo){Object(m.a)(e.primitiveType===c.e.Triangle);const t=i.tolerance;!function e(t,i,r,n,c,l){if(Object(a.i)(t))return;const d=function(e,t,i){return Object(o.s)(i,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(i,r,b);if(Object(s.l)(v,t.getBBMin()),Object(s.k)(v,t.getBBMax()),Object(a.j)(c)&&c.applyToAabb(v),function(e,t,i,r){return function(e,t,i,r,a){const o=(e[0]-r-t[0])*i[0],n=(e[3]+r-t[0])*i[0];let s=Math.min(o,n),c=Math.max(o,n);const l=(e[1]-r-t[1])*i[1],d=(e[4]+r-t[1])*i[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-r-t[2])*i[2],h=(e[5]+r-t[2])*i[2];return c=Math.min(c,Math.max(u,h)),!(c<0)&&(s=Math.max(s,Math.min(u,h)),!(s>c)&&s<a)}(e,t,i,r,1/0)}(v,i,d,n)){const{primitiveIndices:a,indices:o,position:s}=t,d=a?a.length:o.length/3;if(d>w){const a=t.getChildren();if(void 0!==a){for(let t=0;t<8;++t)void 0!==a[t]&&e(a[t],i,r,n,c,l);return}}O(i,r,0,d,o,s,a,c,l)}}(e.boundingInfo,r,n,t,l,d)}else{const t=e.indices.get(f.a.POSITION),i=e.vertexAttributes.get(f.a.POSITION);O(r,n,0,t.length/3,t,i,void 0,l,d)}}const b=Object(n.e)();const x=Object(n.e)();function O(e,t,i,r,o,n,s,c,l){if(s)return function(e,t,i,r,o,n,s,c,l){const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],f=e[2],p=t[0]-h,v=t[1]-m,g=t[2]-f;for(let b=i;b<r;++b){const e=s[b];let t=3*e,i=u*o[t++],r=d[i++],n=d[i++],O=d[i];i=u*o[t++];let _=d[i++],T=d[i++],S=d[i];i=u*o[t];let C=d[i++],M=d[i++],E=d[i];Object(a.j)(c)&&([r,n,O]=c.applyToVertex(r,n,O,b),[_,T,S]=c.applyToVertex(_,T,S,b),[C,M,E]=c.applyToVertex(C,M,E,b));const y=_-r,R=T-n,w=S-O,P=C-r,I=M-n,N=E-O,L=v*N-I*g,j=g*P-N*p,D=p*I-P*v,F=y*L+R*j+w*D;if(Math.abs(F)<=Number.EPSILON)continue;const z=h-r,B=m-n,U=f-O,G=z*L+B*j+U*D;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const H=B*w-R*U,V=U*y-w*z,W=z*R-y*B,k=p*H+v*V+g*W;if(F>0){if(k<0||G+k>F)continue}else if(k>0||G+k<F)continue;const q=(P*H+I*V+N*W)/F;q>=0&&l(q,A(y,R,w,P,I,N,x),e,!1)}}(e,t,i,r,o,n,s,c,l);const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],f=e[2],p=t[0]-h,v=t[1]-m,g=t[2]-f;for(let b=i,O=3*i;b<r;++b){let e=u*o[O++],t=d[e++],i=d[e++],r=d[e];e=u*o[O++];let n=d[e++],s=d[e++],_=d[e];e=u*o[O++];let T=d[e++],S=d[e++],C=d[e];Object(a.j)(c)&&([t,i,r]=c.applyToVertex(t,i,r,b),[n,s,_]=c.applyToVertex(n,s,_,b),[T,S,C]=c.applyToVertex(T,S,C,b));const M=n-t,E=s-i,y=_-r,R=T-t,w=S-i,P=C-r,I=v*P-w*g,N=g*R-P*p,L=p*w-R*v,j=M*I+E*N+y*L;if(Math.abs(j)<=Number.EPSILON)continue;const D=h-t,F=m-i,z=f-r,B=D*I+F*N+z*L;if(j>0){if(B<0||B>j)continue}else if(B>0||B<j)continue;const U=F*y-E*z,G=z*M-y*D,H=D*E-M*F,V=p*U+v*G+g*H;if(j>0){if(V<0||B+V>j)continue}else if(V>0||B+V<j)continue;const W=(R*U+w*G+P*H)/j;W>=0&&l(W,A(M,E,y,R,w,P,x),b,!1)}}const _=Object(n.e)(),T=Object(n.e)();function A(e,t,i,r,a,n,s){return Object(o.s)(_,e,t,i),Object(o.s)(T,r,a,n),Object(o.d)(s,_,T),Object(o.o)(s,s),s}function S(e,t,i,a,o){let n=(i.screenLength||0)*e.pixelRatio;o&&(n=function(e,t,i,r){return u(e,l(t,i,r))}(n,a,t,o));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(r.d)(s*t,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function C(e,t,i){if(!e)return;const r=e.parameters,a=e.paddingPixelsOverride;t.setUniform4f(i,r.divisor,r.offset,r.minPixelSize,a)}function M(e,t){const i=t?M(t):{};for(const r in e){let t=e[r];t&&t.forEach&&(t=y(t)),null==t&&r in i||(i[r]=t)}return i}function E(e,t){let i=!1;for(const r in t){const a=t[r];void 0!==a&&(i=!0,Array.isArray(a)?e[r]=a.slice():e[r]=a)}return i}function y(e){const t=[];return e.forEach(e=>t.push(e)),t}const R={multiply:1,ignore:2,replace:3,tint:4},w=1e3},867:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var r=i(263),a=i(740),o=i(641);function n(e,t){const i=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(i.uniforms.add("lightingAmbientSH0","vec3"),i.code.add(o.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(i.uniforms.add("lightingAmbientSH_R","vec4"),i.uniforms.add("lightingAmbientSH_G","vec4"),i.uniforms.add("lightingAmbientSH_B","vec4"),i.code.add(o.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===r&&(i.uniforms.add("lightingAmbientSH0","vec3"),i.uniforms.add("lightingAmbientSH_R1","vec4"),i.uniforms.add("lightingAmbientSH_G1","vec4"),i.uniforms.add("lightingAmbientSH_B1","vec4"),i.uniforms.add("lightingAmbientSH_R2","vec4"),i.uniforms.add("lightingAmbientSH_G2","vec4"),i.uniforms.add("lightingAmbientSH_B2","vec4"),i.code.add(o.a`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==a.a.Normal&&t.pbrMode!==a.a.Schematic||i.code.add(o.a`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var s=i(809);function c(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(o.a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var l=i(814),d=i(969),u=i(781);function h(e,t){const i=e.fragment;e.include(c),e.include(s.a,t),t.pbrMode!==a.a.Disabled&&e.include(l.a,t),e.include(n,t),t.receiveShadows&&e.include(u.a,t),i.uniforms.add("lightingGlobalFactor","float"),i.uniforms.add("ambientBoostFactor","float"),i.uniforms.add("hasFillLights","bool"),e.include(d.a),i.code.add(o.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===a.a.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.code.add(o.a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===r.a.Global?o.a`normalize(vPosWorld)`:o.a`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.code.add(o.a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===a.a.Disabled||t.pbrMode===a.a.WaterOnIntegratedMesh?i.code.add(o.a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==a.a.Normal&&t.pbrMode!==a.a.Schematic||(i.code.add(o.a`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(o.a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),i.code.add(o.a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.code.add(o.a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(o.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===a.a.Schematic?o.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},881:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(967),a=i(641);function o(e){e.vertex.code.add(a.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.a.int(r.a.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.a.int(r.a.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.a.int(r.a.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.a.int(r.a.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=i(680);function s(e,t){t.symbolColor?(e.include(o),e.attributes.add(n.a.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(a.a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(a.a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},882:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var r=i(726),a=i(780),o=i(807),n=i(759),s=i(739),c=i(935),l=i(921),d=i(641);function u(e,t){e.fragment.include(l.a),t.output===r.a.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.a`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===r.a.Depth&&e.fragment.code.add(d.a`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var h=i(966),m=i(782),f=i(779);function p(e,t){const i=e.vertex.code,l=e.fragment.code,p=t.hasModelTransformation;t.output!==r.a.Depth&&t.output!==r.a.Shadow||(e.include(o.a,{linearDepth:!0,hasModelTransformation:p}),e.include(s.a,t),e.include(m.a,t),e.include(u,t),e.include(a.a,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),i.add(d.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(f.a,t),l.add(d.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===r.a.Normal&&(e.include(o.a,{linearDepth:!1,hasModelTransformation:p}),e.include(n.a,t),e.include(c.a,t),e.include(s.a,t),e.include(m.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),i.add(d.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===n.b.Attribute?d.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.a,t),e.include(f.a,t),l.add(d.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===n.b.ScreenDerivative?d.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===r.a.Highlight&&(e.include(o.a,{linearDepth:!1,hasModelTransformation:p}),e.include(s.a,t),e.include(m.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),i.add(d.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.a,t),e.include(f.a,t),e.include(h.a),l.add(d.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},883:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(967),a=i(641);function o(e){e.code.add(a.a`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function n(e){e.include(o),e.code.add(a.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.a.int(r.a.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${a.a.int(r.a.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${a.a.int(r.a.Replace)}) {
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

      if (mode == ${a.a.int(r.a.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${a.a.int(r.a.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},916:function(e,t,i){"use strict";var r;i.d(t,"a",(function(){return r})),function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",e[e.MAX_PASS=8]="MAX_PASS"}(r||(r={}))},917:function(e,t,i){"use strict";var r;i.d(t,"a",(function(){return r})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_PLUGIN=3]="OPAQUE_PLUGIN",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_PLUGIN=5]="TRANSPARENT_PLUGIN",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=12]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=13]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VOXEL=22]="VOXEL",e[e.MAX_SLOTS=23]="MAX_SLOTS"}(r||(r={}))},921:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(641);function a(e){e.code.add(r.a`const float MAX_RGBA_FLOAT =
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
}`)}},922:function(e,t,i){"use strict";i.d(t,"a",(function(){return j})),i.d(t,"b",(function(){return L}));var r=i(263),a=i(848),o=i(849),n=i(726),s=i(780),c=i(807),l=i(805),d=i(759),u=i(808),h=i(881),m=i(739),f=i(850),p=i(935),v=i(813),g=i(882),b=i(851),x=i(968),O=i(809),_=i(867),T=i(806),A=i(778),S=i(814),C=i(740),M=i(781),E=i(782),y=i(779),R=i(970),w=i(883),P=i(641),I=i(852),N=i(680);function L(e){const t=new I.a,i=t.vertex.code,L=t.fragment.code;t.include(R.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const j=e.hasModelTransformation;return j&&t.vertex.uniforms.add("model","mat4"),t.include(u.a),t.varyings.add("vpos","vec3"),t.include(E.a,e),t.include(l.a,e),t.include(v.a,e),e.output!==n.a.Color&&e.output!==n.a.Alpha||(t.include(d.a,e),t.include(c.a,{linearDepth:!1,hasModelTransformation:j}),e.normalType===d.b.Attribute&&e.offsetBackfaces&&t.include(o.a),t.include(x.a,e),t.include(p.a,e),e.instancedColor&&t.attributes.add(N.a.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(m.a,e),t.include(a.a,e),t.include(h.a,e),t.include(f.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),i.add(P.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.a.float(y.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.b.Attribute?P.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${j?"model,":""} vpos);
          ${e.normalType===d.b.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===n.a.Alpha&&(t.include(s.a,e),t.include(y.a,e),e.multipassTerrainEnabled&&(t.fragment.include(b.a),t.include(T.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.a),L.add(P.a`
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
    `)),e.output===n.a.Color&&(t.include(s.a,e),t.include(_.a,e),t.include(O.a,e),t.include(y.a,e),e.receiveShadows&&t.include(M.a,e),e.multipassTerrainEnabled&&(t.fragment.include(b.a),t.include(T.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(C.b,e),t.include(S.a,e),t.fragment.include(w.a),t.include(A.a,e),L.add(P.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.b.ScreenDerivative?P.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===C.a.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===r.a.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
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
        ${e.pbrMode===C.a.Normal||e.pbrMode===C.a.Schematic?e.viewingMode===r.a.Global?P.a`vec3 normalGround = normalize(vpos + localOrigin);`:P.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.a``}
        ${e.pbrMode===C.a.Normal||e.pbrMode===C.a.Schematic?P.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(g.a,e),t}const j=Object.freeze({__proto__:null,build:L})},923:function(e,t,i){"use strict";i.d(t,"a",(function(){return P})),i.d(t,"b",(function(){return w}));var r=i(263),a=i(848),o=i(849),n=i(726),s=i(780),c=i(807),l=i(805),d=i(759),u=i(808),h=i(881),m=i(739),f=i(850),p=i(813),v=i(882),g=i(851),b=i(809),x=i(867),O=i(806),_=i(814),T=i(740),A=i(781),S=i(782),C=i(779),M=i(883),E=i(641),y=i(852),R=i(680);function w(e){const t=new y.a,i=t.vertex.code,w=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(u.a),t.varyings.add("vpos","vec3"),t.include(S.a,e),t.include(l.a,e),t.include(p.a,e),e.output!==n.a.Color&&e.output!==n.a.Alpha||(t.include(d.a,e),t.include(c.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(o.a),e.instancedColor&&t.attributes.add(R.a.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(m.a,e),t.include(a.a,e),t.include(h.a,e),t.include(f.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),i.add(E.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${E.a.float(C.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?E.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.a.Alpha&&(t.include(s.a,e),t.include(C.a,e),e.multipassTerrainEnabled&&(t.fragment.include(g.a),t.include(O.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.a),w.add(E.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?E.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?E.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?E.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.a.Color&&(t.include(s.a,e),t.include(x.a,e),t.include(b.a,e),t.include(C.a,e),e.receiveShadows&&t.include(A.a,e),e.multipassTerrainEnabled&&(t.fragment.include(g.a),t.include(O.b,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.b,e),t.include(_.a,e),t.fragment.include(M.a),w.add(E.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?E.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?E.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.a.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===r.a.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?E.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${E.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===T.a.Normal||e.pbrMode===T.a.Schematic?e.viewingMode===r.a.Global?E.a`vec3 normalGround = normalize(vpos + localOrigin);`:E.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:E.a``}
        ${e.pbrMode===T.a.Normal||e.pbrMode===T.a.Schematic?E.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v.a,e),t}const P=Object.freeze({__proto__:null,build:w})},935:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i(263),a=i(759),o=(i(708),i(709),i(71),i(808)),n=i(847),s=i(641);function c(e,t){e.include(o.a),e.vertex.include(n.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(s.a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(s.a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function l(e,t){t.normalType===a.b.Attribute||t.normalType===a.b.CompressedAttribute?(e.include(a.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(s.a`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===a.b.Ground?(e.include(c,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.a`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===r.a.Global?s.a`normalize(vPositionWorldCameraRelative);`:s.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(s.a`void forwardNormal() {}`)}},966:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return c}));var r=i(753),a=i(641);const o=Object(r.d)(1,1,0,1),n=Object(r.d)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(a.a`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function c(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},967:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r,a;i(49),i(2);(a=r||(r={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint"},968:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(739),a=i(976),o=i(778),n=i(641),s=i(680);function c(e,t){const i=e.fragment;t.vertexTangents?(e.attributes.add(s.a.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===o.b.WindingOrder?i.code.add(n.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(n.a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),i.code.add(n.a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),t.attributeTextureCoordinates!==r.b.None&&(e.include(a.a,t),i.uniforms.add("normalTexture","sampler2D"),i.uniforms.add("normalTextureSize","vec2"),i.code.add(n.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},969:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(641);function a(e){e.vertex.code.add(r.a`const float PI = 3.141592653589793;`),e.fragment.code.add(r.a`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},970:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(726),a=i(641),o=i(681);function n(e,t){const i=a.a`
  /*
  *  ${t.name}
  *  ${t.output===r.a.Color?"RenderOutput: Color":t.output===r.a.Depth?"RenderOutput: Depth":t.output===r.a.Shadow?"RenderOutput: Shadow":t.output===r.a.Normal?"RenderOutput: Normal":t.output===r.a.Highlight?"RenderOutput: Highlight":""}
  */
  `;Object(o.c)()&&(e.fragment.code.add(i),e.vertex.code.add(i))}},976:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(739),a=i(641);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.a`#ifndef GL_EXT_shader_texture_lod
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
}`)}function n(e,t){e.include(r.a,t),e.fragment.code.add(a.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.attributeTextureCoordinates===r.b.Default&&e.fragment.code.add(a.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),t.attributeTextureCoordinates===r.b.Atlas&&(e.include(o),e.fragment.code.add(a.a`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},982:function(e,t,i){"use strict";i.r(t),i.d(t,"fetch",(function(){return hi})),i.d(t,"gltfToEngineResources",(function(){return fi})),i.d(t,"parseUrl",(function(){return mi}));var r=i(678),a=i(2),o=i(208),n=i(708),s=i(89),c=i(709),l=i(39),d=i(71),u=i(288),h=i(716),m=i(749),f=i(962),p=i(974),v=i(963),g=i(972),b=i(964),x=i(47),O=i(139),_=i(8),T=i(11),A=i(12),S=i(838),C=i(826),M=i(697),E=i(158),y=i(777);class R{constructor(e,t,i,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=i,this.position=r,this.center=Object(d.e)(),Object(y.a)(e.length>=1),Object(y.a)(i.length%this._numIndexPerPrimitive==0),Object(y.a)(i.length>=e.length*this._numIndexPerPrimitive),Object(y.a)(3===r.size||4===r.size);const{data:a,size:o}=r,n=e.length;let s=o*i[this._numIndexPerPrimitive*e[0]];w.clear(),w.push(s),this.bbMin=Object(d.g)(a[s],a[s+1],a[s+2]),this.bbMax=Object(d.c)(this.bbMin);for(let l=0;l<n;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*i[t+e],w.push(s);let r=a[s];this.bbMin[0]=Math.min(r,this.bbMin[0]),this.bbMax[0]=Math.max(r,this.bbMax[0]),r=a[s+1],this.bbMin[1]=Math.min(r,this.bbMin[1]),this.bbMax[1]=Math.max(r,this.bbMax[1]),r=a[s+2],this.bbMin[2]=Math.min(r,this.bbMin[2]),this.bbMax[2]=Math.max(r,this.bbMax[2])}}Object(l.f)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<w.length;++l){s=w.getItemAt(l);const e=a[s]-this.center[0],t=a[s+1]-this.center[1],i=a[s+2]-this.center[2],r=e*e+t*t+i*i;if(r<=c)continue;const o=Math.sqrt(r),n=.5*(o-this.radius);this.radius=this.radius+n,c=this.radius*this.radius;const d=n/o;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=i*d}w.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(l.i)(this.bbMin,this.bbMax)>1){const e=Object(l.f)(Object(d.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,i=new Uint8Array(t),r=new Array(8);for(let c=0;c<8;++c)r[c]=0;const{data:a,size:o}=this.position;for(let c=0;c<t;++c){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=o*this.indices[n],l=a[s],d=a[s+1],u=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[n+e];const t=a[s],i=a[s+1],r=a[s+2];t<l&&(l=t),i<d&&(d=i),r<u&&(u=r)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),i[c]=t,++r[t]}let n=0;for(let c=0;c<8;++c)r[c]>0&&++n;if(n<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=r[c]>0?new Uint32Array(r[c]):void 0;for(let c=0;c<8;++c)r[c]=0;for(let c=0;c<t;++c){const e=i[c];s[e][r[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new R(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){w.prune()}}const w=new E.a({deallocator:null});var P,I,N=i(214);class L{constructor(){this.id=Object(N.a)()}unload(){}}(I=P||(P={}))[I.Layer=0]="Layer",I[I.Object=1]="Object",I[I.Geometry=2]="Geometry",I[I.Material=3]="Material",I[I.Texture=4]="Texture",I[I.COUNT=5]="COUNT";var j=i(928),D=i(680);class F extends L{constructor(e,t=[],i=M.e.Triangle,r=-1){super(),this._primitiveType=i,this.edgeIndicesLength=r,this.type=P.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,o]of e)o&&this._vertexAttributes.set(a,{...o});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Object(j.c)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,t)}else for(const[a,o]of t)o&&(this._indices.set(a,z(o)),a===D.a.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}cloneShallow(){const e=new F([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:i}=e;return this._vertexAttributes.forEach((e,i)=>{t.set(i,e)}),this._indices.forEach((e,t)=>{i.set(t,e)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(a.i)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===M.e.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(D.a.POSITION),i=this.vertexAttributes.get(D.a.POSITION);return Object(j.b)(i,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(D.a.POSITION),i=this.vertexAttributes.get(D.a.POSITION);return Object(j.a)(i,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(D.a.POSITION);if(0===e.length)return null;const t=this.primitiveType===M.e.Triangle?3:1;Object(y.a)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const i=Object(j.c)(e.length/t),r=this.vertexAttributes.get(D.a.POSITION);return new R(i,t,e,r)}}function z(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var B=i(233),U=i(101),G=i(49),H=i(141),V=i(16),W=i(427),k=i(45);let q;var $,X;(X=$||($={}))[X.ETC1_RGB=0]="ETC1_RGB",X[X.ETC2_RGBA=1]="ETC2_RGBA",X[X.BC1_RGB=2]="BC1_RGB",X[X.BC3_RGBA=3]="BC3_RGBA",X[X.BC4_R=4]="BC4_R",X[X.BC5_RG=5]="BC5_RG",X[X.BC7_M6_RGB=6]="BC7_M6_RGB",X[X.BC7_M5_RGBA=7]="BC7_M5_RGBA",X[X.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",X[X.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",X[X.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",X[X.ATC_RGB=11]="ATC_RGB",X[X.ATC_RGBA=12]="ATC_RGBA",X[X.FXT1_RGB=17]="FXT1_RGB",X[X.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",X[X.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",X[X.ETC2_EAC_R11=20]="ETC2_EAC_R11",X[X.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",X[X.RGBA32=13]="RGBA32",X[X.RGB565=14]="RGB565",X[X.BGR565=15]="BGR565",X[X.RGBA4444=16]="RGBA4444";var K=i(614),Y=i(623),Q=i(799);let Z=null,J=null;async function ee(){return Object(a.i)(J)&&(J=function(){if(Object(a.i)(q)){const e=e=>Object(k.a)("esri/libs/basisu/"+e);q=Promise.all([i.e(184),i.e(198)]).then(i.bind(null,1060)).then(e=>e.b).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return q}(),Z=await J),J}function te(e,t,i,r,a){const o=Object(Q.b)(t?K.i.COMPRESSED_RGBA8_ETC2_EAC:K.i.COMPRESSED_RGB8_ETC2),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(i*r*o*n)}function ie(e){return e.getNumImages()>=1&&!e.isUASTC()}function re(e){return e.getFaces()>=1&&e.isETC1S()}function ae(e,t,i,r,a,o,n,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?r?[$.ETC2_RGBA,K.i.COMPRESSED_RGBA8_ETC2_EAC]:[$.ETC1_RGB,K.i.COMPRESSED_RGB8_ETC2]:l?r?[$.BC3_RGBA,K.i.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[$.BC1_RGB,K.i.COMPRESSED_RGB_S3TC_DXT1_EXT]:[$.RGBA32,K.p.RGBA],h=t.hasMipmap?i:Math.min(1,i),m=[];for(let g=0;g<h;g++)m.push(new Uint8Array(n(g,d))),s(g,d,m[g]);const f=m.length>1,p=f?K.z.LINEAR_MIPMAP_LINEAR:K.z.LINEAR,v={...t,samplingMode:p,hasMipmap:f,internalFormat:u,width:a,height:o};return new Y.a(e,v,{type:"compressed",levels:m})}const oe=T.a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function ne(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const se=ne("DXT1"),ce=ne("DXT3"),le=ne("DXT5");function de(e,t,i){const{textureData:r,internalFormat:a,width:o,height:n}=function(e,t){const i=new Int32Array(e,0,31);if(542327876!==i[0])return oe.error("Invalid magic number in DDS header"),null;if(!(4&i[20]))return oe.error("Unsupported format, must contain a FourCC code"),null;const r=i[21];let a,o;switch(r){case se:a=8,o=K.i.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ce:a=16,o=K.i.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case le:a=16,o=K.i.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return oe.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(r)),null}let n=1,s=i[4],c=i[3];0==(3&s)&&0==(3&c)||(oe.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,d=c;let u,h;131072&i[2]&&!1!==t&&(n=Math.max(1,i[7])),1===n||Object(G.g)(s)&&Object(G.g)(c)||(oe.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let m=i[1]+4;const f=[];for(let p=0;p<n;++p)h=(s+3>>2)*(c+3>>2)*a,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:f},internalFormat:o,width:l,height:d}}(i,t.hasMipmap);return t.samplingMode=r.levels.length>1?K.z.LINEAR_MIPMAP_LINEAR:K.z.LINEAR,t.hasMipmap=r.levels.length>1,t.internalFormat=a,t.width=o,t.height=n,new Y.a(e,t,r)}const ue=new Map([[D.a.POSITION,0],[D.a.NORMAL,1],[D.a.UV0,2],[D.a.COLOR,3],[D.a.SIZE,4],[D.a.TANGENT,4],[D.a.AUXPOS1,5],[D.a.SYMBOLCOLOR,5],[D.a.AUXPOS2,6],[D.a.FEATUREATTRIBUTE,6],[D.a.INSTANCEFEATUREATTRIBUTE,6],[D.a.INSTANCECOLOR,7],[D.a.MODEL,8],[D.a.MODELNORMAL,12],[D.a.MODELORIGINHI,11],[D.a.MODELORIGINLO,15]]);var he=i(631);new he.a(D.a.POSITION,3,K.k.FLOAT,0,12),new he.a(D.a.POSITION,3,K.k.FLOAT,0,20),new he.a(D.a.UV0,2,K.k.FLOAT,12,20),new he.a(D.a.POSITION,3,K.k.FLOAT,0,32),new he.a(D.a.NORMAL,3,K.k.FLOAT,12,32),new he.a(D.a.UV0,2,K.k.FLOAT,24,32),new he.a(D.a.POSITION,3,K.k.FLOAT,0,16),new he.a(D.a.COLOR,4,K.k.UNSIGNED_BYTE,12,16);const me=[new he.a(D.a.POSITION,2,K.k.FLOAT,0,8)],fe=[new he.a(D.a.POSITION,2,K.k.FLOAT,0,16),new he.a(D.a.UV0,2,K.k.FLOAT,8,16)];var pe=i(619),ve=i(620);var ge,be,xe=i(633),Oe=i(751);class _e extends L{constructor(e,t){super(),this.data=e,this.type=P.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new U.a,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:K.B.REPEAT,t:K.B.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||M.d.STRETCH,this.estimatedTexMemRequired=_e._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;Object(a.i)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){Object(V.v)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){Object(V.w)(e.src)||Object(V.v)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if(Object(a.i)(e))return 0;if(Object(H.c)(e)||Object(H.k)(e))return t.encoding===_e.KTX2_ENCODING?function(e,t){if(Object(a.i)(Z))return e.byteLength;const i=new Z.KTX2File(new Uint8Array(e)),r=re(i)?te(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),t):0;return i.close(),i.delete(),r}(e,t.mipmap):t.encoding===_e.BASIS_ENCODING?function(e,t){if(Object(a.i)(Z))return e.byteLength;const i=new Z.BasisFile(new Uint8Array(e)),r=ie(i)?te(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),t):0;return i.close(),i.delete(),r}(e,t.mipmap):e.byteLength;const{width:i,height:r}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?_e._getDataDimensions(e):t;return(t.mipmap?4/3:1)*i*r*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var t;return{target:K.A.TEXTURE_2D,pixelFormat:K.p.RGBA,dataType:K.q.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?K.z.LINEAR_MIPMAP_LINEAR:K.z.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if(Object(a.j)(this._glTexture))return this._glTexture;if(Object(a.j)(this._loadingPromise))return this._loadingPromise;const i=this.data;return Object(a.i)(i)?(this._glTexture=new Y.a(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof i?this._loadFromURL(e,t,i):i instanceof Image?this._loadFromImageElement(e,t,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,t):(Object(H.c)(i)||Object(H.k)(i))&&this.params.encoding===_e.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):(Object(H.c)(i)||Object(H.k)(i))&&this.params.encoding===_e.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):(Object(H.c)(i)||Object(H.k)(i))&&this.params.encoding===_e.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):Object(H.k)(i)?this._loadFromPixelData(e,i):Object(H.c)(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,i){if(!(this.data instanceof HTMLVideoElement)||Object(a.i)(this._glTexture))return i;if(this.data.readyState<ge.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if(Object(a.j)(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:r,sourceTexture:a}=this._powerOfTwoStretchInfo;a.setData(this.data),this._drawStretchedTexture(e,t,i,r,a,this._glTexture)}else{const{width:e,height:t}=this.data,{width:i,height:r}=this._glTexture.descriptor;e!==i||t!==r?this._glTexture.updateData(0,0,0,Math.min(e,i),Math.min(t,r),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=de(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync(()=>async function(e,t,i){Object(a.i)(Z)&&(Z=await ee());const r=new Z.KTX2File(new Uint8Array(i));if(!re(r))return null;r.startTranscoding();const o=ae(e,t,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),(e,t)=>r.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,i)=>r.transcodeImage(i,e,0,0,t,0,-1,-1));return r.close(),r.delete(),o}(e,this._createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}_loadFromBasis(e,t){return this._loadAsync(()=>async function(e,t,i){Object(a.i)(Z)&&(Z=await ee());const r=new Z.BasisFile(new Uint8Array(i));if(!ie(r))return null;r.startTranscoding();const o=ae(e,t,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),(e,t)=>r.getImageTranscodedSizeInBytes(0,e,t),(e,t,i)=>r.transcodeImage(i,0,e,t,0,0));return r.close(),r.delete(),o}(e,this._createDescriptor(e),t).then(e=>(this._glTexture=e,e)))}_loadFromPixelData(e,t){Object(y.a)(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=1===this.params.components?K.p.LUMINANCE:3===this.params.components?K.p.RGB:K.p.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new Y.a(e,i,t),this._glTexture}_loadFromURL(e,t,i){return this._loadAsync(async r=>{const a=await Object(C.a)(i,{signal:r});return Object(A.t)(r),this._loadFromImage(e,a,t)})}_loadFromImageElement(e,t,i){return i.complete?this._loadFromImage(e,i,t):this._loadAsync(async r=>{const a=await Object(W.a)(i,i.src,!1,r);return Object(A.t)(r),this._loadFromImage(e,a,t)})}_loadFromVideoElement(e,t,i){return i.readyState>=ge.HAVE_CURRENT_DATA?this._loadFromImage(e,i,t):this._loadFromVideoElementAsync(e,t,i)}_loadFromVideoElementAsync(e,t,i){return this._loadAsync(r=>new Promise((o,n)=>{const s=()=>{i.removeEventListener("loadeddata",c),i.removeEventListener("error",l),Object(a.p)(d)},c=()=>{i.readyState>=ge.HAVE_CURRENT_DATA&&(s(),o(this._loadFromImage(e,i,t)))},l=e=>{s(),n(e||new _.a("Failed to load video"))};i.addEventListener("loadeddata",c),i.addEventListener("error",l);const d=Object(A.o)(r,()=>l(Object(A.d)()))}))}_loadFromImage(e,t,i){const r=_e._getDataDimensions(t);this.params.width=r.width,this.params.height=r.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this.params.components?K.p.RGB:K.p.RGBA,!this._requiresPowerOfTwo(e,a)||Object(G.g)(r.width)&&Object(G.g)(r.height)?(a.width=r.width,a.height=r.height,this._glTexture=new Y.a(e,a,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,r,a,i),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const i=e(t.signal);this._loadingPromise=i;const r=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(r,r),i}_requiresPowerOfTwo(e,t){const i=K.B.CLAMP_TO_EDGE,r="number"==typeof t.wrapMode?t.wrapMode===i:t.wrapMode.s===i&&t.wrapMode.t===i;return!Object(Oe.a)(e.gl)&&(t.hasMipmap||!r)}_makePowerOfTwoTexture(e,t,i,r,a){const{width:o,height:n}=i,s=Object(G.i)(o),c=Object(G.i)(n);let l;switch(r.width=s,r.height=c,this.params.powerOfTwoResizeMode){case M.d.PAD:r.textureCoordinateScaleFactor=[o/s,n/c],l=new Y.a(e,r),l.updateData(0,0,0,o,n,t);break;case M.d.STRETCH:case null:case void 0:l=this._stretchToPowerOfTwo(e,t,r,a());break;default:Object(B.a)(this.params.powerOfTwoResizeMode)}return r.hasMipmap&&l.generateMipmap(),l}_stretchToPowerOfTwo(e,t,i,r){const a=new Y.a(e,i),o=new xe.a(e,{colorTarget:K.y.TEXTURE,depthStencilTarget:K.m.NONE},a),n=new Y.a(e,{target:K.A.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:K.q.UNSIGNED_BYTE,wrapMode:K.B.CLAMP_TO_EDGE,samplingMode:K.z.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},t),s=function(e,t=me,i=ue,r=-1,a=1){let o=null;return o=t===fe?new Float32Array([r,r,0,0,a,r,1,0,r,a,0,1,a,a,1,1]):new Float32Array([r,r,a,r,r,a,a,a]),new ve.a(e,i,{geometry:t},{geometry:pe.a.createVertex(e,K.D.STATIC_DRAW,o)})}(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,r,o,s,n,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:o}:(s.dispose(!0),n.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,t,i,r,a,o){e.bindFramebuffer(i);const n=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=e.useTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture(a,"tex"),e.bindVAO(r),e.drawArrays(K.r.TRIANGLE_STRIP,0,Object(Q.f)(r,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(Object(a.j)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:i}=this._powerOfTwoStretchInfo;t.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(Object(a.j)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),Object(a.j)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}_e.DDS_ENCODING="image/vnd-ms.dds",_e.KTX2_ENCODING="image/ktx2",_e.BASIS_ENCODING="image/x.basis",(be=ge||(ge={}))[be.HAVE_NOTHING=0]="HAVE_NOTHING",be[be.HAVE_METADATA=1]="HAVE_METADATA",be[be.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",be[be.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",be[be.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var Te=i(263),Ae=i(818),Se=i(726),Ce=i(778),Me=i(779);var Ee,ye=i(866);class Re extends L{constructor(e,t){super(),this.type=P.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ue,this._parameters=Object(ye.c)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Object(ye.e)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(a.j)(this.repository)&&this.repository.materialChanged(this)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(Ee||(Ee={}));const we={renderOccluded:Ee.Occlude};var Pe,Ie,Ne=i(825),Le=i(916),je=i(917),De=i(748),Fe=i(731),ze=i(684),Be=i(753),Ue=(i(5),i(397));(Ie=Pe||(Pe={}))[Ie.X=0]="X",Ie[Ie.Y=1]="Y",Ie[Ie.Z=2]="Z";i(9);var Ge=i(920),He=i(880);new Ge.a((function(){return{origin:null,direction:null}}));Object(d.e)(),Object(d.e)();const Ve=T.a.getLogger("esri.geometry.support.sphere");function We(){return Object(Be.b)()}function ke(e,t=We()){return Object(Ue.c)(t,e)}function qe(e){return Array.isArray(e)?e[3]:e}function $e(e){return Array.isArray(e)?e:it}function Xe(e,t,i){if(Object(a.i)(t))return!1;const{origin:r,direction:o}=t,n=Ke;n[0]=r[0]-e[0],n[1]=r[1]-e[1],n[2]=r[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),l=c*c-4*s*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const d=Math.sqrt(l);let u=(-c-d)/(2*s);const h=(-c+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0)&&(i&&(i[0]=r[0]+o[0]*u,i[1]=r[1]+o[1]*u,i[2]=r[2]+o[2]*u),!0)}const Ke=Object(d.e)();function Ye(e,t,i){const r=He.b.get(),a=He.a.get();Object(l.d)(r,t.origin,t.direction);const o=qe(e);Object(l.d)(i,r,t.origin),Object(l.b)(i,i,1/Object(l.m)(i)*o);const n=Ze(e,t.origin),c=function(e,t){const i=Object(l.e)(e,t)/(Object(l.m)(e)*Object(l.m)(t));return-Object(G.a)(i)}(t.origin,i);return Object(s.c)(a,c+n,r),Object(l.n)(i,i,a),i}function Qe(e,t,i){const r=Object(l.g)(He.b.get(),t,$e(e)),a=Object(l.b)(He.b.get(),r,e[3]/Object(l.m)(r));return Object(l.c)(i,a,$e(e))}function Ze(e,t){const i=Object(l.g)(He.b.get(),t,$e(e)),r=Object(l.m)(i),a=qe(e),o=a+Math.abs(a-r);return Object(G.a)(a/o)}const Je=Object(d.e)();function et(e,t,i,r){const a=Object(l.g)(Je,t,$e(e));switch(i){case Pe.X:{const e=Object(G.c)(a,Je)[2];return Object(l.s)(r,-Math.sin(e),Math.cos(e),0)}case Pe.Y:{const e=Object(G.c)(a,Je),t=e[1],i=e[2],o=Math.sin(t);return Object(l.s)(r,-o*Math.cos(i),-o*Math.sin(i),Math.cos(t))}case Pe.Z:return Object(l.o)(r,a);default:return}}function tt(e,t){const i=Object(l.g)(rt,t,$e(e));return Object(l.m)(i)-e[3]}const it=Object(d.e)(),rt=Object(d.e)();Object.freeze({__proto__:null,create:We,copy:ke,fromCenterAndRadius:function(e,t){return Object(Be.d)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:qe,getCenter:$e,fromValues:function(e,t,i,r){return Object(Be.d)(e,t,i,r)},elevate:function(e,t,i){return e!==i&&Object(l.h)(i,e),i[3]=e[3]+t,i},setExtent:function(e,t,i){return Ve.error("sphere.setExtent is not yet supported"),e===i?i:ke(e,i)},intersectRay:Xe,intersectsRay:function(e,t){return Xe(e,t,null)},intersectRayClosestSilhouette:function(e,t,i){if(Xe(e,t,i))return i;const r=Ye(e,t,He.b.get());return Object(l.c)(i,t.origin,Object(l.b)(He.b.get(),t.direction,Object(l.j)(t.origin,r)/Object(l.m)(t.direction))),i},closestPointOnSilhouette:Ye,closestPoint:function(e,t,i){return Xe(e,t,i)?i:(function(e,t,i){const r=Object(l.e)(e.direction,Object(l.g)(i,t,e.origin));Object(l.c)(i,e.origin,Object(l.b)(i,e.direction,r))}(t,$e(e),i),Qe(e,i,i))},projectPoint:Qe,distanceToSilhouette:function(e,t){const i=Object(l.g)(He.b.get(),t,$e(e)),r=Object(l.p)(i),a=e[3]*e[3];return Math.sqrt(Math.abs(r-a))},angleToSilhouette:Ze,axisAt:et,altitudeAt:tt,setAltitudeAt:function(e,t,i,r){const a=tt(e,t),o=et(e,t,Pe.Z,rt),n=Object(l.b)(rt,o,i-a);return Object(l.c)(r,t,n)}});const at=new class{constructor(e=0){this.offset=e,this.sphere=We(),this.tmpVertex=Object(d.e)()}applyToVertex(e,t,i){const r=this.objectTransform.transform;let a=r[0]*e+r[4]*t+r[8]*i+r[12],o=r[1]*e+r[5]*t+r[9]*i+r[13],n=r[2]*e+r[6]*t+r[10]*i+r[14];const s=this.offset/Math.sqrt(a*a+o*o+n*n);a+=a*s,o+=o*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*o+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*o+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*o+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(d.e)(),this.mbs=Object(Be.b)(),this.obb={center:Object(d.e)(),halfSize:Object(ze.a)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,i){const r=e,a=t,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+a*a+o*o);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(e){const t=e[0],i=e[1],r=e[2]+this.componentLocalOriginLength,a=e[3],o=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+i*i+r*r);e[0]+=t*s,e[1]+=i*s,e[2]+=r*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.mbs[0]=e[0]+e[0]*i,this.mbs[1]=e[1]+e[1]*i,this.mbs[2]=e[2]+e[2]*i,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*i,this.obb.center[1]=t[1]+t[1]*i,this.obb.center[2]=t[2]+t[2]*i,Object(l.q)(this.obb.halfSize,e.halfSize,e.quaternion),Object(l.c)(this.obb.halfSize,this.obb.halfSize,e.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,Object(l.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(De.a)(ot,e.quaternion),Object(l.q)(this.obb.halfSize,this.obb.halfSize,ot),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(d.e)()}applyToVertex(e,t,i){const r=e+this.localOrigin[0],a=t+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+a*a+o*o);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],i=e[1]+this.localOrigin[1],r=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+i*i+r*r);e[0]+=t*s,e[1]+=i*s,e[2]+=r*s;const c=this.offset/Math.sqrt(a*a+o*o+n*n);return e[3]+=a*c,e[4]+=o*c,e[5]+=n*c,e}};const ot=Object(Fe.b)();function nt(e,t,i,r){const a=i.typedBuffer,o=i.typedBufferStride,n=e.length;r*=o;for(let s=0;s<n;++s){const i=2*e[s];a[r]=t[i],a[r+1]=t[i+1],r+=o}}function st(e,t,i,r,a){const o=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,null==a||1===a)for(let c=0;c<s;++c){const i=3*e[c];o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],r+=n}else for(let c=0;c<s;++c){const i=3*e[c];for(let e=0;e<a;++e)o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],r+=n}}function ct(e,t,i,r,a,o=1){if(!i)return void st(e,t,r,a,o);const n=r.typedBuffer,s=r.typedBufferStride,c=e.length,l=i[0],d=i[1],u=i[2],h=i[4],m=i[5],f=i[6],p=i[8],v=i[9],g=i[10],b=i[12],x=i[13],O=i[14];if(a*=s,1===o)for(let _=0;_<c;++_){const i=3*e[_],r=t[i],o=t[i+1],c=t[i+2];n[a]=l*r+h*o+p*c+b,n[a+1]=d*r+m*o+v*c+x,n[a+2]=u*r+f*o+g*c+O,a+=s}else for(let _=0;_<c;++_){const i=3*e[_],r=t[i],c=t[i+1],T=t[i+2],A=l*r+h*c+p*T+b,S=d*r+m*c+v*T+x,C=u*r+f*c+g*T+O;for(let e=0;e<o;++e)n[a]=A,n[a+1]=S,n[a+2]=C,a+=s}}function lt(e,t,i,r,a,o=1){if(!i)return void st(e,t,r,a,o);const n=i,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],f=n[4],p=n[5],v=n[6],g=n[8],b=n[9],x=n[10],O=!Object(s.j)(n),_=1e-6,T=1-_;if(a*=l,1===o)for(let s=0;s<d;++s){const i=3*e[s],r=t[i],o=t[i+1],n=t[i+2];let d=u*r+f*o+g*n,A=h*r+p*o+b*n,S=m*r+v*o+x*n;if(O){const e=d*d+A*A+S*S;if(e<T&&e>_){const t=1/Math.sqrt(e);d*=t,A*=t,S*=t}}c[a+0]=d,c[a+1]=A,c[a+2]=S,a+=l}else for(let s=0;s<d;++s){const i=3*e[s],r=t[i],n=t[i+1],d=t[i+2];let A=u*r+f*n+g*d,S=h*r+p*n+b*d,C=m*r+v*n+x*d;if(O){const e=A*A+S*S+C*C;if(e<T&&e>_){const t=1/Math.sqrt(e);A*=t,S*=t,C*=t}}for(let e=0;e<o;++e)c[a+0]=A,c[a+1]=S,c[a+2]=C,a+=l}}function dt(e,t,i,r,a,o=1){if(!i)return void function(e,t,i,r,a=1){const o=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,1===a)for(let c=0;c<s;++c){const i=4*e[c];o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],o[r+3]=t[i+3],r+=n}else for(let c=0;c<s;++c){const i=4*e[c];for(let e=0;e<a;++e)o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],o[r+3]=t[i+3],r+=n}}(e,t,r,a,o);const n=i,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],f=n[4],p=n[5],v=n[6],g=n[8],b=n[9],x=n[10],O=!Object(s.j)(n),_=1e-6,T=1-_;if(a*=l,1===o)for(let s=0;s<d;++s){const i=4*e[s],r=t[i],o=t[i+1],n=t[i+2],d=t[i+3];let A=u*r+f*o+g*n,S=h*r+p*o+b*n,C=m*r+v*o+x*n;if(O){const e=A*A+S*S+C*C;if(e<T&&e>_){const t=1/Math.sqrt(e);A*=t,S*=t,C*=t}}c[a+0]=A,c[a+1]=S,c[a+2]=C,c[a+3]=d,a+=l}else for(let s=0;s<d;++s){const i=4*e[s],r=t[i],n=t[i+1],d=t[i+2],A=t[i+3];let S=u*r+f*n+g*d,C=h*r+p*n+b*d,M=m*r+v*n+x*d;if(O){const e=S*S+C*C+M*M;if(e<T&&e>_){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}for(let e=0;e<o;++e)c[a+0]=S,c[a+1]=C,c[a+2]=M,c[a+3]=A,a+=l}}function ut(e,t,i,r,a,o=1){const n=r.typedBuffer,s=r.typedBufferStride,c=e.length;if(a*=s,1===o){if(4===i)for(let l=0;l<c;++l){const i=4*e[l];n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=s}else if(3===i)for(let l=0;l<c;++l){const i=3*e[l];n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=255,a+=s}}else if(4===i)for(let l=0;l<c;++l){const i=4*e[l];for(let e=0;e<o;++e)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=s}else if(3===i)for(let l=0;l<c;++l){const i=3*e[l];for(let e=0;e<o;++e)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=255,a+=s}}var ht=i(0),mt=i(780),ft=i(805),pt=i(759),vt=i(739),gt=i(813),bt=i(966),xt=i(806),Ot=i(740),_t=i(781),Tt=i(782),At=i(847),St=i(363);function Ct(e,t,i){Object(s.h)(Mt,i,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Mt)}const Mt=Object(St.a)();class Et{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function yt(e={}){return(t,i)=>{var r,a;t._parameterNames=null!=(r=t._parameterNames)?r:[],t._parameterNames.push(i);const o=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(Math.log2(n)),c=null!=(a=t._parameterBits)?a:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,i,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+i+" must be boolean or number, got "+typeof e}})}}var Rt=i(681);class wt{constructor(e,t,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new E.a({deallocator:null}),this._glProgram=e.programCache.acquire(t.generateSource("vertex"),t.generateSource("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=Object(Rt.b)()?t.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2f(e,t,i){this._glProgram.setUniform2f(e,t,i)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3f(e,t,i,r){this._glProgram.setUniform3f(e,t,i,r)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4f(e,t,i,r,a){this._glProgram.setUniform4f(e,t,i,r,a)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(Object(a.i)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let i=this._textures.get(t);return null==i?(i=this._allocTextureUnit(e),this._textures.set(t,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(t,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),Object(a.j)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}K.h.LESS,K.h.ALWAYS;const Pt={mask:255},It={function:{func:K.h.ALWAYS,ref:M.g.OutlineVisualElementMask,mask:M.g.OutlineVisualElementMask},operation:{fail:K.w.KEEP,zFail:K.w.KEEP,zPass:K.w.ZERO}},Nt={function:{func:K.h.ALWAYS,ref:M.g.OutlineVisualElementMask,mask:M.g.OutlineVisualElementMask},operation:{fail:K.w.KEEP,zFail:K.w.KEEP,zPass:K.w.REPLACE}};K.h.EQUAL,M.g.OutlineVisualElementMask,M.g.OutlineVisualElementMask,K.w.KEEP,K.w.KEEP,K.w.KEEP,K.h.NOTEQUAL,M.g.OutlineVisualElementMask,M.g.OutlineVisualElementMask,K.w.KEEP,K.w.KEEP,K.w.KEEP;var Lt=i(922),jt=i(775);const Dt=T.a.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Ft extends class{constructor(e,t,i){this.release=i,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=Object(a.e)(this._program),this._pipeline=this._config=null}reload(e){Object(a.e)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,i){e.setPipelineState(this.getPipelineState(t,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return K.r.TRIANGLES}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=Ft.shader.get(),i=this.configuration,r=t.build({oitEnabled:i.transparencyPassType===M.h.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?Ot.a.Schematic:Ot.a.Normal:Ot.a.Disabled,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,hasModelTransformation:i.hasModelTransformation,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?pt.b.ScreenDerivative:pt.b.Attribute,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?vt.b.Default:vt.b.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(At.b)(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new wt(e.rctx,r,ue)}bindPass(e,t){var i,r;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;this.configuration.hasModelTransformation&&(Object(a.j)(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):Dt.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===Se.a.Depth||t.multipassTerrainEnabled||o===Se.a.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(xt.a)(this.program,t)),o===Se.a.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ye.b[e.colorMixMode])),o===Se.a.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ye.b[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(Ot.c)(this.program,e,this.configuration.isSchematic)):o===Se.a.Highlight&&Object(bt.b)(this.program,t),Object(Tt.b)(this.program,e),Object(gt.b)(this.program,e,t),Object(ye.a)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==M.a.Mask&&e.textureAlphaMode!==M.a.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(i=t.shadowMap)||i.bind(this.program),null==(r=t.ssaoHelper)||r.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(d.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Ct(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===Se.a.Color||this.configuration.output===Se.a.Alpha||this.configuration.output===Se.a.Depth&&this.configuration.screenSizePerspective||this.configuration.output===Se.a.Normal&&this.configuration.screenSizePerspective||this.configuration.output===Se.a.Highlight&&this.configuration.screenSizePerspective)&&function(e,t,i){e.setUniform3f("cameraPosition",i[3]-t[0],i[7]-t[1],i[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===Se.a.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Object(ft.b)(this.program,t),Object(mt.b)(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===Se.a.Color&&Object(_t.b)(this.program,e,t)}_convertDepthTestFunction(e){return e===M.c.Lequal?K.h.LEQUAL:K.h.LESS}_setPipeline(e,t){const i=this.configuration,r=e===M.h.NONE,a=e===M.h.FrontFace;return Object(jt.e)({blending:i.output!==Se.a.Color&&i.output!==Se.a.Alpha||!i.transparent?null:r?Ne.c:Object(Ne.e)(e),culling:zt(i)&&Object(jt.b)(i.cullFace),depthTest:{func:Object(Ne.f)(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:r||a?i.writeDepth&&jt.d:null,colorWrite:jt.c,stencilWrite:i.sceneHasOcludees?Pt:null,stencilTest:i.sceneHasOcludees?t?Nt:It:null,polygonOffset:r||a?null:Object(Ne.d)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function zt(e){return e.cullFace?e.cullFace!==M.b.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Ft.shader=new Et(Lt.a,()=>i.e(271).then(i.bind(null,1061)));class Bt extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const i of e)t[i]=this[i];return t}}{constructor(){super(...arguments),this.output=Se.a.Color,this.alphaDiscardMode=M.a.Opaque,this.doubleSidedMode=Ce.b.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=M.b.None,this.transparencyPassType=M.h.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=M.c.Less}}Object(ht.a)([yt({count:Se.a.COUNT})],Bt.prototype,"output",void 0),Object(ht.a)([yt({count:M.a.COUNT})],Bt.prototype,"alphaDiscardMode",void 0),Object(ht.a)([yt({count:Ce.b.COUNT})],Bt.prototype,"doubleSidedMode",void 0),Object(ht.a)([yt()],Bt.prototype,"isSchematic",void 0),Object(ht.a)([yt()],Bt.prototype,"vertexColors",void 0),Object(ht.a)([yt()],Bt.prototype,"offsetBackfaces",void 0),Object(ht.a)([yt()],Bt.prototype,"symbolColors",void 0),Object(ht.a)([yt()],Bt.prototype,"vvSize",void 0),Object(ht.a)([yt()],Bt.prototype,"vvColor",void 0),Object(ht.a)([yt()],Bt.prototype,"verticalOffset",void 0),Object(ht.a)([yt()],Bt.prototype,"receiveShadows",void 0),Object(ht.a)([yt()],Bt.prototype,"slicePlaneEnabled",void 0),Object(ht.a)([yt()],Bt.prototype,"sliceHighlightDisabled",void 0),Object(ht.a)([yt()],Bt.prototype,"receiveAmbientOcclusion",void 0),Object(ht.a)([yt()],Bt.prototype,"screenSizePerspective",void 0),Object(ht.a)([yt()],Bt.prototype,"textureAlphaPremultiplied",void 0),Object(ht.a)([yt()],Bt.prototype,"hasColorTexture",void 0),Object(ht.a)([yt()],Bt.prototype,"usePBR",void 0),Object(ht.a)([yt()],Bt.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(ht.a)([yt()],Bt.prototype,"hasEmissionTexture",void 0),Object(ht.a)([yt()],Bt.prototype,"hasOcclusionTexture",void 0),Object(ht.a)([yt()],Bt.prototype,"hasNormalTexture",void 0),Object(ht.a)([yt()],Bt.prototype,"instanced",void 0),Object(ht.a)([yt()],Bt.prototype,"instancedColor",void 0),Object(ht.a)([yt()],Bt.prototype,"instancedDoublePrecision",void 0),Object(ht.a)([yt()],Bt.prototype,"vertexTangents",void 0),Object(ht.a)([yt()],Bt.prototype,"normalsTypeDerivate",void 0),Object(ht.a)([yt()],Bt.prototype,"writeDepth",void 0),Object(ht.a)([yt()],Bt.prototype,"sceneHasOcludees",void 0),Object(ht.a)([yt()],Bt.prototype,"transparent",void 0),Object(ht.a)([yt()],Bt.prototype,"enableOffset",void 0),Object(ht.a)([yt({count:M.b.COUNT})],Bt.prototype,"cullFace",void 0),Object(ht.a)([yt({count:M.h.COUNT})],Bt.prototype,"transparencyPassType",void 0),Object(ht.a)([yt()],Bt.prototype,"multipassTerrainEnabled",void 0),Object(ht.a)([yt()],Bt.prototype,"cullAboveGround",void 0),Object(ht.a)([yt()],Bt.prototype,"hasModelTransformation",void 0),Object(ht.a)([yt({count:M.c.COUNT})],Bt.prototype,"customDepthTest",void 0);var Ut=i(923);class Gt extends Ft{initializeProgram(e){const t=Gt.shader.get(),i=this.configuration,r=t.build({oitEnabled:i.transparencyPassType===M.h.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?Ot.a.Normal:Ot.a.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:pt.b.Attribute,doubleSidedMode:Ce.b.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?vt.b.Default:vt.b.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(At.b)(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new wt(e.rctx,r,ue)}}Gt.shader=new Et(Ut.a,()=>i.e(270).then(i.bind(null,1062)));class Ht extends Re{constructor(e){super(e,Wt),this.supportsEdges=!0,this.techniqueConfig=new Bt,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=Object(Ae.a)().vec3f(D.a.POSITION).vec3f(D.a.NORMAL);return e.vertexTangents&&i.vec4f(D.a.TANGENT),t&&i.vec2f(D.a.UV0),e.vertexColors&&i.vec4u8(D.a.COLOR),e.symbolColors&&i.vec4u8(D.a.SYMBOLCOLOR),i}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=Object(Ae.a)();return t=e.instancedDoublePrecision?t.vec3f(D.a.MODELORIGINHI).vec3f(D.a.MODELORIGINLO).mat3f(D.a.MODEL).mat3f(D.a.MODELNORMAL):t.mat4f(D.a.MODEL).mat4f(D.a.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(D.a.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(D.a.INSTANCEFEATUREATTRIBUTE)),t}(this.parameters):null}isVisibleInPass(e){return e!==Le.a.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Le.a.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Le.a.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,i=e.vertexColors,r=e.symbolColors,a=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(a||o||r)?!!n||s:i?n?c:s:a||o||r?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,Object(a.j)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?M.b.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=Object(a.j)(this.parameters.modelTransformation),e!==Se.a.Color&&e!==Se.a.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=Ce.b.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ce.b.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ce.b.WindingOrder:Ce.b.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Ne.a),this.techniqueConfig}intersect(e,t,i,r,o,n,s){if(null!==this.parameters.verticalOffset){const e=r.camera;Object(l.s)(Qt,i[12],i[13],i[14]);let t=null;switch(r.viewingMode){case Te.a.Global:t=Object(l.o)(Kt,Qt);break;case Te.a.Local:t=Object(l.h)(Kt,Xt)}let a=0;if(null!==this.parameters.verticalOffset){const i=Object(l.g)(Zt,Qt,e.eye),r=Object(l.m)(i),o=Object(l.b)(i,i,1/r);let n=null;this.parameters.screenSizePerspective&&(n=Object(l.e)(t,o)),a+=Object(ye.f)(e,r,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}Object(l.b)(t,t,a),Object(l.t)(Yt,t,r.transform.inverseRotation),o=Object(l.g)(qt,o,Yt),n=Object(l.g)($t,n,Yt)}var c;Object(ye.d)(e,t,r,o,n,(c=r.verticalOffset,Object(a.j)(c)?(at.offset=c,at):null),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?je.a.TRANSPARENT_MATERIAL:je.a.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:je.a.OPAQUE_MATERIAL)||e===je.a.DRAPED_MATERIAL}createGLMaterial(e){return e.output===Se.a.Color||e.output===Se.a.Alpha||e.output===Se.a.Depth||e.output===Se.a.Normal||e.output===Se.a.Shadow||e.output===Se.a.Highlight?new Vt(e):null}createBufferWriter(){return new kt(this.vertexBufferLayout,this.instanceBufferLayout)}}class Vt extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(e){return M.f.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,e=>this._texture=e),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){this._texture=Object(a.o)(this._texture),this._textureNormal=Object(a.o)(this._textureNormal),this._textureEmissive=Object(a.o)(this._textureEmissive),this._textureOcclusion=Object(a.o)(this._textureOcclusion),this._textureMetallicRoughness=Object(a.o)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?M.f.LOADED:M.f.LOADING}updateTexture(e){(Object(a.i)(this._texture)||e!==this._texture.id)&&(this._texture=Object(a.o)(this._texture),this._textureId=e,this._acquire(this._textureId,e=>this._texture=e))}bindTextures(e){Object(a.j)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(a.j)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(a.j)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(a.j)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(a.j)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(a.j)(this._texture)?this._texture.glTexture:null;Object(a.j)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,t){if(Object(a.i)(e))return void t(null);const i=this._textureRepository.acquire(e);if(Object(A.n)(i))return++this._numLoading,void i.then(e=>{if(this._disposed)return Object(a.o)(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(i)}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?Gt:Ft,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==Se.a.Color&&this._output!==Se.a.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Wt={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:M.b.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(n.b)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:M.c.Less,textureAlphaMode:M.a.Blend,textureAlphaCutoff:Me.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...we};class kt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(D.a.POSITION).length}write(e,t,i,r){!function(e,t,i,r,a,o){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case D.a.POSITION:{Object(y.a)(3===t.size);const e=a.getField(n,h.u);e&&ct(s,t.data,i,e,o);break}case D.a.NORMAL:{Object(y.a)(3===t.size);const e=a.getField(n,h.u);e&&lt(s,t.data,r,e,o);break}case D.a.UV0:{Object(y.a)(2===t.size);const e=a.getField(n,h.m);e&&nt(s,t.data,e,o);break}case D.a.COLOR:{Object(y.a)(3===t.size||4===t.size);const e=a.getField(n,h.J);e&&ut(s,t.data,t.size,e,o);break}case D.a.SYMBOLCOLOR:{Object(y.a)(3===t.size||4===t.size);const e=a.getField(n,h.J);e&&ut(s,t.data,t.size,e,o);break}case D.a.TANGENT:{Object(y.a)(4===t.size);const e=a.getField(n,h.C);e&&dt(s,t.data,r,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,r)}}const qt=Object(d.e)(),$t=Object(d.e)(),Xt=Object(d.g)(0,0,1),Kt=Object(d.e)(),Yt=Object(d.e)(),Qt=Object(d.e)(),Zt=Object(d.e)(),Jt=T.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ei(e,t){const i=await async function(e,t){const i=Object(a.j)(t)&&t.streamDataRequester;if(i)return async function(e,t,i){const r=await Object(O.c)(t.request(e,"json",i));if(!0===r.ok)return r.value;Object(A.s)(r.error),ti(r.error.details.url)}(e,i,t);const r=await Object(O.c)(Object(x.default)(e,Object(a.q)(t)));if(!0===r.ok)return r.value.data;Object(A.s)(r.error),ti(r.error)}(e,t);return{resource:i,textures:await ai(i.textureDefinitions,t)}}function ti(e){throw new _.a("","Request for object resource failed: "+e)}function ii(e){const t=e.params,i=t.topology;let r=!0;switch(t.vertexAttributes||(Jt.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const i in t.vertexAttributes){const t=e[i];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Jt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Jt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(Jt.warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else Jt.warn("Indexed geometries must specify faces"),r=!1;break}default:Jt.warn(`Unsupported topology '${i}'`),r=!1}e.params.material||(Jt.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const o in a)a[o].values||(Jt.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function ri(e){const t=Object(u.c)();return e.forEach(e=>{const i=e.boundingInfo;Object(a.j)(i)&&(Object(u.g)(t,i.getBBMin()),Object(u.g)(t,i.getBBMax()))}),t}async function ai(e,t){const i=[];for(const n in e){const r=e[n],o=r.images[0].data;if(!o){Jt.warn("Externally referenced texture data is not yet supported");continue}const s=r.encoding+";base64,"+o,c="/textureDefinitions/"+n,l="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:K.B.REPEAT,t:K.B.REPEAT},preMultiplyAlpha:oi(l)!==M.a.Opaque},u=Object(a.j)(t)&&t.disableTextures?Promise.resolve(null):Object(C.a)(s,t);i.push(u.then(e=>({refId:c,image:e,params:d,alphaChannelUsage:l})))}const r=await Promise.all(i),o={};for(const a of r)o[a.refId]=a;return o}function oi(e){switch(e){case"mask":return M.a.Mask;case"maskAndTransparency":return M.a.MaskBlend;case"none":return M.a.Opaque;default:return M.a.Blend}}function ni(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const si=new S.a(1,2,"wosr");var ci=i(965),li=i(845),di=i(846),ui=i(772);async function hi(e,t){const i=mi(Object(r.a)(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):ei(i.url,t)),r=function(e,t){const i=[],r=[],o=[],n=[],s=e.resource,c=S.a.parse(s.version||"1.0","wosr");si.validate(c);const l=s.model.name,u=s.model.geometries,h=s.materialDefinitions,m=e.textures;let f=0;const p=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!ii(e))continue;const s=ni(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],i=e.values;l.push([t,{data:i,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const b=m&&m[s.texture];if(b&&!p.has(s.texture)){const{image:e,params:t}=b,i=new _e(e,t);n.push(i),p.set(s.texture,i)}const x=p.get(s.texture),O=x?x.id:void 0;let _=o[s.material]?o[s.material][s.texture]:null;if(!_){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const i=b&&b.alphaChannelUsage,r=e.transparency>0||"transparency"===i||"maskAndTransparency"===i,n=b?oi(b.alphaChannelUsage):void 0,c={ambient:Object(d.f)(e.diffuse),diffuse:Object(d.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:M.b.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!b&&!!b.params.preMultiplyAlpha};Object(a.j)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),_=new Ht(c),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=_}r.push(_);const T=new F(l,g);f+=g.position?g.position.length:0,i.push(T)}return{name:l,stageResources:{textures:n,materials:r,geometries:i},pivotOffset:s.model.pivotOffset,boundingBox:ri(i),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(i.url,t,t.usePBR):Object(g.a)(new v.a(t.streamDataRequester),i.url,t,t.usePBR)),n=Object(a.h)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&Object(a.j)(n)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let i=0;i<e.model.lods.length;++i){const r=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const o of r.parts){const r=o.attributes.normal;if(Object(a.i)(r))return;const n=o.attributes.position,u=n.count,m=Object(d.e)(),f=Object(d.e)(),v=Object(d.e)(),g=Object(p.a)(h.J,u),b=Object(p.a)(h.u,u),x=Object(s.a)(Object(c.d)(),o.transform);for(let a=0;a<u;a++){n.getVec(a,f),r.getVec(a,m),Object(l.n)(f,f,o.transform),Object(l.g)(v,f,t.center),Object(l.a)(v,v,t.radius);const s=v[2],c=Object(l.m)(v),d=Math.min(.45+.55*c*c,1);Object(l.a)(v,v,t.radius),Object(l.n)(v,v,x),Object(l.o)(v,v),i+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l.f)(v,v,m,s>-1?.2:Math.min(-4*s-3.8,1)),b.setVec(a,v),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}o.attributes.normal=b,o.attributes.color=g}}}(o,n);const u=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},m={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=fi(o,u,m,i.specifiedLodIndex);let t=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(t=fi(o,u,m,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const f=fi(o,u,m);return{lods:f,referenceBoundingBox:f[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function mi(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function fi(e,t,i,r){const s=e.model,c=Object(n.b)(),l=new Array,d=new Map,v=new Map;return s.lods.forEach((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(a.j)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u.c)()};l.push(g),e.parts.forEach(e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),l=Object(a.j)(e.attributes.texCoord0),x=Object(a.j)(e.attributes.normal),O=function(e){switch(e){case"BLEND":return M.a.Blend;case"MASK":return M.a.Mask;case"OPAQUE":case null:case void 0:return M.a.Opaque}}(n.alphaMode);if(!d.has(r)){if(l){if(Object(a.j)(n.textureColor)&&!v.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:O!==M.a.Opaque};v.set(n.textureColor,new _e(e.data,t))}if(Object(a.j)(n.textureNormal)&&!v.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);v.set(n.textureNormal,new _e(e.data,e.parameters))}if(Object(a.j)(n.textureOcclusion)&&!v.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);v.set(n.textureOcclusion,new _e(e.data,e.parameters))}if(Object(a.j)(n.textureEmissive)&&!v.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);v.set(n.textureEmissive,new _e(e.data,e.parameters))}if(Object(a.j)(n.textureMetallicRoughness)&&!v.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);v.set(n.textureMetallicRoughness,new _e(e.data,e.parameters))}}const o=n.color[0]**(1/ci.a),c=n.color[1]**(1/ci.a),u=n.color[2]**(1/ci.a),h=n.emissiveFactor[0]**(1/ci.a),m=n.emissiveFactor[1]**(1/ci.a),f=n.emissiveFactor[2]**(1/ci.a),p=Object(a.j)(n.textureColor)&&l?v.get(n.textureColor):null;d.set(r,new Ht({...t,transparent:O===M.a.Blend,customDepthTest:M.c.Lequal,textureAlphaMode:O,textureAlphaCutoff:n.alphaCutoff,diffuse:[o,c,u],ambient:[o,c,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?M.b.None:M.b.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:Object(a.j)(p)?p.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:Object(a.j)(n.textureNormal)&&l?v.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:Object(a.j)(p)&&!!p.params.preMultiplyAlpha,occlusionTextureId:Object(a.j)(n.textureOcclusion)&&l?v.get(n.textureOcclusion).id:void 0,emissiveTextureId:Object(a.j)(n.textureEmissive)&&l?v.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(a.j)(n.textureMetallicRoughness)&&l?v.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[h,m,f],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...i}))}const _=function(e,t){switch(t){case K.r.TRIANGLES:return Object(b.c)(e);case K.r.TRIANGLE_STRIP:return Object(b.b)(e);case K.r.TRIANGLE_FAN:return Object(b.a)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),T=e.attributes.position.count,A=Object(p.a)(h.u,T);Object(m.e)(A,e.attributes.position,e.transform);const S=[[D.a.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],C=[[D.a.POSITION,_]];if(Object(a.j)(e.attributes.normal)){const t=Object(p.a)(h.u,T);Object(o.a)(c,e.transform),Object(m.a)(t,e.attributes.normal,c),S.push([D.a.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.a.NORMAL,_])}if(Object(a.j)(e.attributes.tangent)){const t=Object(p.a)(h.C,T);Object(o.a)(c,e.transform),Object(f.c)(t,e.attributes.tangent,c),S.push([D.a.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.a.TANGENT,_])}if(Object(a.j)(e.attributes.texCoord0)){const t=Object(p.a)(h.m,T);Object(li.b)(t,e.attributes.texCoord0),S.push([D.a.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.a.UV0,_])}if(Object(a.j)(e.attributes.color)){const t=Object(p.a)(h.J,T);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.C?Object(f.b)(t,e.attributes.color,255):e.attributes.color instanceof h.J?Object(di.a)(t,e.attributes.color):e.attributes.color instanceof h.H&&Object(f.b)(t,e.attributes.color,1/256);else{Object(di.b)(t,255,255,255,255);const i=new h.B(t.buffer,0,4);e.attributes.color instanceof h.u?Object(m.d)(i,e.attributes.color,255):e.attributes.color instanceof h.B?Object(ui.a)(i,e.attributes.color):e.attributes.color instanceof h.z&&Object(m.d)(i,e.attributes.color,1/256)}S.push([D.a.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.a.COLOR,_])}const E=new F(S,C);g.stageResources.geometries.push(E),g.stageResources.materials.push(d.get(r)),l&&(Object(a.j)(n.textureColor)&&g.stageResources.textures.push(v.get(n.textureColor)),Object(a.j)(n.textureNormal)&&g.stageResources.textures.push(v.get(n.textureNormal)),Object(a.j)(n.textureOcclusion)&&g.stageResources.textures.push(v.get(n.textureOcclusion)),Object(a.j)(n.textureEmissive)&&g.stageResources.textures.push(v.get(n.textureEmissive)),Object(a.j)(n.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(n.textureMetallicRoughness))),g.numberOfVertices+=T;const y=E.boundingInfo;Object(a.j)(y)&&(Object(u.g)(g.boundingBox,y.getBBMin()),Object(u.g)(g.boundingBox,y.getBBMax()))})}),l}}}]);
//# sourceMappingURL=129.a065def6.chunk.js.map