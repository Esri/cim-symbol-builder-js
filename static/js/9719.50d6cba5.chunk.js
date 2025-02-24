"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9719],{37923:(e,t,r)=>{r.d(t,{C:()=>m,b:()=>v});var i=r(26917),o=r(59395),n=r(90080),a=r(54478),s=r(94192),l=r(66763),c=r(80883),h=r(3799),d=r(58350),u=r(86955),g=r(66470),p=r(91911),f=r(2687);function v(e){const t=new f.N5,{vertex:r,fragment:v,attributes:m,varyings:_}=t,{vvColor:y,hasVertexColors:x}=e;return(0,h.NB)(r,e),t.include(o.d,e),t.include(a.c,e),t.include(l.A,e),t.include(n.g,e),v.include(i.HQ,e),t.include(p.z,e),t.include(s.Z,e),m.add(g.r.POSITION,"vec3"),y&&m.add(g.r.COLORFEATUREATTRIBUTE,"float"),x||_.add("vColor","vec4"),_.add("vpos","vec3"),r.uniforms.add(new d.E("uColor",(e=>e.color))),r.main.add(u.H`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${x?"vColor *= uColor;":y?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),v.include(c.a),v.main.add(u.H`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos);`),t}const m=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},61157:(e,t,r)=>{r.d(t,{H:()=>d,b:()=>h});var i=r(47233),o=r(79138),n=r(21390),a=r(86955),s=r(53908),l=r(70367),c=r(2687);function h(){const e=new c.N5;e.include(i.Q);const{fragment:t}=e;return t.uniforms.add(new l.N("highlightTexture",(e=>e.highlightTexture)),new l.N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new n.m("pixelRatio",(e=>e.pixelRatio)),new n.m("occludedIntensityFactor",(e=>e.occludedFactor)),new s.W("maxHighlightLevel",(e=>e.highlights.length-1))),t.constants.add("pixelSampleScale","float",1),e.include(o.y),t.code.add(a.H`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`),t.main.add(a.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},21019:(e,t,r)=>{r.d(t,{H:()=>l,a:()=>g,b:()=>u,c:()=>c,g:()=>h,o:()=>d});var i=r(73398),o=r(86955),n=r(27374),a=r(31432),s=r(2687);class l extends a.Y{}function c(){const e=new s.N5,{outputs:t,fragment:r}=e;return e.include(i.c),r.uniforms.add(new n.o("textureInput",(e=>e.input))),r.constants.add("outlineWidth","int",Math.ceil(d)),r.constants.add("cellSize","int",h),t.add("fragGrid","vec2"),r.main.add(o.H`ivec2 inputTextureSize = textureSize(textureInput, 0);
ivec2 cellBottomLeftCornerInput = ivec2(floor(gl_FragCoord.xy) * vec2(cellSize));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = uvec2( texelFetch(textureInput, coordMid, 0).rg * 255.0) & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
uvec2(texelFetch(textureInput,coord+ivec2(0,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(0,1),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,1),0).rg * 255.0) & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = vec2(outputValue) / 255.0;`),e}const h=32,d=9,u=.4,g=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:l,blurSize:u,build:c,gridCellPixelSize:h,outlineSize:d},Symbol.toStringTag,{value:"Module"}))},62854:(e,t,r)=>{r.d(t,{H:()=>h,b:()=>c});var i=r(47233),o=r(79138),n=r(86955),a=r(72790),s=r(70367),l=r(2687);function c(){const e=new l.N5;e.include(i.Q),e.include(o.y);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new s.N("highlightTexture",(e=>e.highlightTexture)),new a.c("highlightLevel",(e=>e.highlightLevel))),t.main.add(n.H`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}))},80381:(e,t,r)=>{r.d(t,{O:()=>d,a:()=>g,b:()=>u});var i=r(19539),o=r(73398),n=r(21390),a=r(86955),s=r(72790),l=r(70367),c=r(31432),h=r(2687);class d extends c.Y{constructor(){super(...arguments),this.overlayIndex=i.vr.INNER,this.opacity=1}}function u(){const e=new h.N5;return e.include(o.c),e.fragment.uniforms.add(new l.N("tex",(e=>e.texture))),e.fragment.uniforms.add(new s.c("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new n.m("opacity",(e=>e.opacity))),e.fragment.main.add(a.H`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:d,build:u},Symbol.toStringTag,{value:"Module"}))},62361:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>u});var i=r(47233),o=r(79138),n=r(56289),a=r(21390),s=r(86955),l=r(72790),c=r(70367),h=r(21019),d=r(2687);function u(){const e=new d.N5;e.include(i.Q);const{fragment:t}=e;return t.uniforms.add(new c.N("blurInput",(e=>e.singleHighlightBlurTexture)),new n.t("blurSize",(e=>e.blurSize)),new c.N("highlightTexture",(e=>e.highlightTexture)),new c.N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new l.c("highlightLevel",(e=>e.highlightLevel)),new a.m("occludedIntensityFactor",(e=>e.occludedFactor))),t.constants.add("inner","float",1-(h.o-h.b)/h.o),e.include(o.y),t.main.add(s.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},51542:(e,t,r)=>{r.d(t,{S:()=>h,a:()=>u,b:()=>d});var i=r(72745),o=r(47233),n=r(56289),a=r(86955),s=r(27374),l=r(31432),c=r(2687);class h extends l.Y{constructor(){super(...arguments),this.blurSize=(0,i.vt)()}}function d(){const e=new c.N5;return e.include(o.Q),e.outputs.add("fragSingleHighlight","vec2",0),e.fragment.uniforms.add(new n.t("blurSize",(e=>e.blurSize)),new s.o("blurInput",(e=>e.blurInput))).main.add(a.H`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),e}const u=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:h,build:d},Symbol.toStringTag,{value:"Module"}))},53070:(e,t,r)=>{r.d(t,{T:()=>h,a:()=>u,b:()=>d});var i=r(9392),o=r(73398),n=r(5517),a=r(86955),s=r(70367),l=r(31432),c=r(2687);class h extends l.Y{constructor(){super(...arguments),this.color=(0,i.fA)(1,1,1)}}function d(){const e=new c.N5;return e.include(o.c),e.fragment.uniforms.add(new s.N("tex",(e=>e.texture)),new n.t("uColor",(e=>e.color))),e.fragment.main.add(a.H`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const u=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:h,build:d},Symbol.toStringTag,{value:"Module"}))},75941:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},82062:(e,t,r)=>{var i;r.d(t,{$:()=>i}),function(e){e[e.EnableFastUpdates=0]="EnableFastUpdates",e[e.DisableFastUpdates=1]="DisableFastUpdates",e[e.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"}(i||(i={}))},87840:(e,t,r)=>{r.d(t,{$4:()=>y,O0:()=>x,O1:()=>w,Sw:()=>C,eH:()=>m,rc:()=>_});var i=r(28899),o=r(69539),n=r(3825),a=r(53521),s=r(76931),l=r(29632);const c="picture-fill",h="simple-fill",d="simple-line",u="simple-marker",g="text",p="cim",f=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),v=new a.q(1e3);function m(e){const t=e.style;let r=null;if(e)switch(e.type){case u:"cross"!==t&&"x"!==t&&(r=e.color);break;case h:t&&"solid"!==t?"none"!==t&&(r={type:"pattern",x:0,y:0,src:(0,i.s)(`esri/symbols/patterns/${t}.png`),width:5,height:5}):r=e.color;break;case c:r={type:"pattern",src:e.url,width:(0,s.Lz)(e.width)*e.xscale,height:(0,s.Lz)(e.height)*e.yscale,x:(0,s.Lz)(e.xoffset),y:(0,s.Lz)(e.yoffset)};break;case g:r=e.color;break;case p:r=(0,l.Nk)(e)}return r}function _(e,t){const r=e+"-"+t;return void 0!==v.get(r)?Promise.resolve(v.get(r)):(0,n.A)(e,{responseType:"image"}).then((e=>{const i=e.data,o=i.naturalWidth,n=i.naturalHeight,a=document.createElement("canvas");a.width=o,a.height=n;const s=a.getContext("2d");s.fillStyle=t,s.fillRect(0,0,o,n),s.globalCompositeOperation="destination-in",s.drawImage(i,0,0);const l=a.toDataURL();return v.put(r,l),l}))}function y(e){if(!e)return null;let t=null;switch(e.type){case h:case c:case u:t=y(e.outline);break;case d:{const r=(0,s.Lz)(e.width);null!=e.style&&"none"!==e.style&&0!==r&&(t={color:e.color,style:w(e.style),width:r,cap:e.cap,join:"miter"===e.join?(0,s.Lz)(e.miterLimit):e.join},t.dashArray=x(t).join(",")||"none");break}default:t=null}return t}function x(e){if(!e?.style)return[];const{dashArray:t,style:r,width:i}=e;if("string"==typeof t&&"none"!==t)return t.split(",").map((e=>Number(e)));const o=i??0,n=f.has(r)?f.get(r).map((e=>e*o)):[];if("butt"!==e.cap)for(const[a,s]of n.entries())n[a]=a%2==1?s+o:Math.max(s-o,1);return n}const w=(()=>{const e={};return t=>{if(e[t])return e[t];const r=t.replaceAll("-","");return e[t]=r,r}})(),C=new o.A([128,128,128])},94439:(e,t,r)=>{r.d(t,{$d:()=>p,GG:()=>T,N7:()=>f,Sx:()=>v,UQ:()=>b,di:()=>S,dt:()=>_,f3:()=>O,k_:()=>g});var i=r(69539),o=r(98773),n=(r(81806),r(76931)),a=r(9392),s=r(44081),l=r(29632),c=r(87840),h=r(9994),d=r(94725);const u=new i.A("white");function g(e){if(!e)return 0;if((0,d.wk)(e)){const t=function(e){const t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.size}(e);return null!=t?t:0}return(0,n.PN)((0,c.$4)(e)?.width)}function p(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function f(e){return e.resource?.href??""}function v(e,t){if(!e)return null;let r=null;return(0,d.wk)(e)?r=function(e){const t=e.symbolLayers;if(!t)return null;let r=null;return t.forEach((e=>{"object"===e.type&&e.resource?.href||(r="water"===e.type?e.color:e.material?e.material.color:null)})),r?new i.A(r):null}(e):(0,d.$y)(e)&&(r="cim"===e.type?(0,l.Nk)(e):e.color?new i.A(e.color):null),r?m(r,t):null}function m(e,t){if(null==t||null==e)return e;const r=e.toRgba();return r[3]=r[3]*t,new i.A(r)}function _(e,t,r){e&&(t||null!=r)&&(t&&(t=new i.A(t)),(0,d.wk)(e)?function(e,t,r){const i=e.symbolLayers;if(!i)return;const o=e=>m(t=t??e??(null!=r?u:null),r);i.forEach((e=>{if("object"!==e.type||!e.resource?.href||t)if("water"===e.type)e.color=o(e.color);else{const t=null!=e.material?e.material.color:null,i=o(t);null==e.material?e.material=new h.N({color:i}):e.material.color=i,null!=r&&"outline"in e&&null!=e.outline?.color&&(e.outline.color=m(e.outline.color,r))}}))}(e,t,r):(0,d.$y)(e)&&function(e,t,r){(t=t??e.color)&&(e.color=m(t,r)),null!=r&&"outline"in e&&e.outline?.color&&(e.outline.color=m(e.outline.color,r))}(e,t,r))}async function y(e,t){const i=e.symbolLayers;i&&await(0,o.jJ)(i,(async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t);break;case"icon":case"line":case"text":!function(e,t){const r=x(t);null!=r&&(e.size=r)}(e,t);break;case"path":!function(e,t){const r=w(t,a.Un,[e.width,void 0,e.height]);e.width=C(t[0],e.width,1,r),e.height=C(t[2],e.height,1,r)}(e,t);break;case"object":await async function(e,t){const{resourceSize:i,symbolSize:o}=await async function(e){const{computeObjectLayerResourceSize:t}=await r.e(44374).then(r.bind(r,44374)),i=await t(e,10),{width:o,height:n,depth:a}=e,s=[o,a,n];let l=1;for(let r=0;r<3;r++){const e=s[r];if(null!=e){l=e/i[r];break}}for(let r=0;r<3;r++)null==s[r]&&(s[r]=i[r]*l);return{resourceSize:i,symbolSize:s}}(e),n=w(t,i,o);e.width=C(t[0],o[0],i[0],n),e.depth=C(t[1],o[1],i[1],n),e.height=C(t[2],o[2],i[2],n)}(e,t)}}(e,t)))}function x(e){for(const t of e)if("number"==typeof t)return t;return null}function w(e,t,r){for(let i=0;i<3;i++){const o=e[i];switch(o){case"symbol-value":{const e=r[i];return null!=e?e/t[i]:1}case"proportional":break;default:if(o&&t[i])return o/t[i]}}return 1}function C(e,t,r,i){switch(e){case"proportional":return r*i;case"symbol-value":return null!=t?t:r;default:return e}}async function b(e,t){if(e&&t)return(0,d.wk)(e)?y(e,t):void((0,d.$y)(e)&&function(e,t){const r=x(t);if(null!=r)switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r}}(e,t))}function T(e,t,r){if(e&&null!=t)if((0,d.wk)(e)){const i=e.symbolLayers;i&&i.forEach((e=>{if("object"===e.type)switch(r){case"tilt":e.tilt=(e.tilt??0)+t;break;case"roll":e.roll=(e.roll??0)+t;break;default:e.heading=(e.heading??0)+t}"icon"===e.type&&(e.angle+=t)}))}else(0,d.$y)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}function S(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return(0,s.zu)(t)}function O(e){return null!=e&&"polygon-3d"===e.type&&e.symbolLayers.some((e=>"extrude"===e.type))}},51977:(e,t,r)=>{var i,o;function n(e){return null!=e&&!e.running}r.d(t,{c:()=>o,pi:()=>n,tf:()=>i}),function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"}(i||(i={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(o||(o={}))},63401:(e,t,r)=>{r.d(t,{c:()=>i,n:()=>f});var i,o=r(4212),n=r(15941),a=r(75540),s=r(34761),l=r(13191),c=r(20664),h=r(9392),d=r(52896),u=r(14556),g=r(51977),p=r(317);class f{constructor(){this.startTime=0,this._data=(0,a.v)(null),this._readChannels=g.c.RG,this.parallax=new v,this.parallaxNew=new v,this._anchorPoint=(0,h.vt)(),this._fadeState=(0,a.v)(i.HIDE),this._fadeFactor=(0,a.v)(1)}get data(){return this._data.value}set data(e){this._data.value=e}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case i.HIDE:return 0;case i.FADE_OUT:return 1-this.fadeFactor;case i.FADE_IN:return this.fadeFactor;case i.SHOW:case i.CROSS_FADE:return 1}}fade(e,t,r){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=r?(0,n.qE)((t-this.startTime)/(x*r),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(e,t),this._updateParallax(e)}_evaluateState(e,t){const r=e.relativeElevation,o=this._updateAnchorPoint(e);(r>1.7*p.zF||r<-1e4||o>C)&&this.opacity>0?this._startFade(i.HIDE,t):this.isFading||(r>p.zF||r<-.35*p.zF||o>w*C?this.opacity>0&&this._startFade(i.FADE_OUT,t):(0,g.pi)(this.data)&&(0===this.opacity?this._startFade(i.FADE_IN,t):this.data.state===g.tf.Ready&&(this.fadeState===i.SHOW?this._startFade(i.CROSS_FADE,t):this._startFade(i.SHOW,t))))}_updateParallax(e){const t=(0,c.k)(e.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(t-u.$O.radius*u.$O.radius,0))/Math.sqrt(t),(0,d.Cr)(m,this.parallax.anchorPoint,_),(0,s.e$)(this.parallax.transform,l.zK,_[3],(0,d.yo)(_)),(0,d.Cr)(m,this.parallaxNew.anchorPoint,_),(0,s.e$)(this.parallaxNew.transform,l.zK,_[3],(0,d.yo)(_))}_updateAnchorPoint(e){return(0,c.n)(this._anchorPoint,e.eye),(0,c.h)(this._anchorPoint,this._anchorPoint,u.$O.radius),this.fadeState===i.HIDE&&this.data?.state===g.tf.Ready?((0,c.c)(this.parallax.anchorPoint,this._anchorPoint),0):(0,c.l)((0,c.d)(y,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(e,t){switch(this._fadeState.value=e,this.startTime=t,e){case i.CROSS_FADE:this.requestFade(),this._switchReadChannels(),(0,c.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_IN:this.requestFade(),this._switchReadChannels(),(0,c.c)(this.parallax.anchorPoint,this._anchorPoint),(0,c.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case i.FADE_OUT:this.requestFade();break;case i.SHOW:this._switchReadChannels(),(0,c.c)(this.parallax.anchorPoint,this._anchorPoint),(0,c.c)(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case i.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==g.tf.Ready&&(this.data.state=g.tf.Idle),this.fadeState){case i.CROSS_FADE:(0,c.c)(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=i.SHOW;break;case i.FADE_IN:this._fadeState.value=i.SHOW;break;case i.FADE_OUT:this._fadeState.value=i.HIDE;break;case i.SHOW:case i.HIDE:break;default:(0,o.Xb)(this.fadeState)}}_switchReadChannels(){this.data?.state===g.tf.Ready&&(this._readChannels=1-this._readChannels,this.data.state=g.tf.Fading)}get isFading(){return this.fadeState===i.FADE_OUT||this.fadeState===i.FADE_IN||this.fadeState===i.CROSS_FADE}}!function(e){e[e.HIDE=0]="HIDE",e[e.FADE_IN=1]="FADE_IN",e[e.SHOW=2]="SHOW",e[e.CROSS_FADE=3]="CROSS_FADE",e[e.FADE_OUT=4]="FADE_OUT"}(i||(i={}));class v{constructor(){this.anchorPoint=(0,h.vt)(),this.radiusCurvatureCorrection=0,this.transform=(0,l.vt)()}}const m=(0,h.fA)(0,0,1),_=(0,d.vt)(),y=(0,h.vt)(),x=1.25,w=.5,C=2e5},317:(e,t,r)=>{r.d(t,{k9:()=>T,zF:()=>b});var i,o=r(35143),n=r(42553),a=r(46053),s=(r(81806),r(76460),r(47249),r(6409)),l=r(85842);let c=i=class extends n.A{constructor(e){super(e),this.type="cloudy",this.cloudCover=.5}clone(){return new i({cloudCover:this.cloudCover})}};(0,o._)([(0,s.e)({cloudy:"cloudy"}),(0,a.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),c=i=(0,o._)([(0,l.$)("esri.views.3d.environment.CloudyWeather")],c);const h=c;var d;let u=d=class extends n.A{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new d({fogStrength:this.fogStrength})}};(0,o._)([(0,s.e)({foggy:"foggy"}),(0,a.MZ)({json:{write:{isRequired:!0}}})],u.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],u.prototype,"fogStrength",void 0),u=d=(0,o._)([(0,l.$)("esri.views.3d.environment.FoggyWeather")],u);const g=u;var p;let f=p=class extends n.A{constructor(e){super(e),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new p({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,o._)([(0,s.e)({rainy:"rainy"}),(0,a.MZ)({json:{write:{isRequired:!0}}})],f.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],f.prototype,"cloudCover",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],f.prototype,"precipitation",void 0),f=p=(0,o._)([(0,l.$)("esri.views.3d.environment.RainyWeather")],f);const v=f;var m;let _=m=class extends n.A{constructor(e){super(e),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new m({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,o._)([(0,s.e)({snowy:"snowy"}),(0,a.MZ)({json:{write:{isRequired:!0}}})],_.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],_.prototype,"cloudCover",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],_.prototype,"precipitation",void 0),(0,o._)([(0,a.MZ)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],_.prototype,"snowCover",void 0),_=m=(0,o._)([(0,l.$)("esri.views.3d.environment.SnowyWeather")],_);const y=_;var x;let w=x=class extends n.A{constructor(e){super(e),this.type="sunny",this.cloudCover=.5}clone(){return new x({cloudCover:this.cloudCover})}};(0,o._)([(0,s.e)({sunny:"sunny"}),(0,a.MZ)({json:{write:{isRequired:!0}}})],w.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],w.prototype,"cloudCover",void 0),w=x=(0,o._)([(0,l.$)("esri.views.3d.environment.SunnyWeather")],w);const C={key:"type",base:w,typeMap:{sunny:w,cloudy:h,rainy:v,snowy:y,foggy:g}};Object.keys(C.typeMap);const b=1e4,T=1e5},70667:(e,t,r)=>{r.d(t,{t:()=>v,z:()=>y});var i=r(19555),o=r(72745),n=r(55855),a=r(34111),s=r(482),l=r(44815),c=r(75002),h=r(38496),d=r(64465),u=r(50468),g=r(87634),p=r(17345),f=r(66470);function v(e,t,r=null){const o=[],v=t.mapPositions;!function(e,t){const{attributeData:{position:r},removeDuplicateStartEnd:i}=e,o=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(r)&&i,n=r.length/3-(o?1:0),a=new Array(2*(n-1)),s=o?r.slice(0,-3):r;let l=0;for(let c=0;c<n-1;c++)a[l++]=c,a[l++]=c+1;t.push([f.r.POSITION,new u.n(s,a,3,o)])}(t,o);const y=o[0][1].data,x=o[0][1].indices.length,w=(0,h.EH)(x);return function(e,t,r){if(null!=e.attributeData.colorFeature)return;const i=e.attributeData.color;t.push([f.r.COLOR,new u.n(i??n.Un,r,4)])}(t,o,w),function(e,t,r){null==e.attributeData.sizeFeature&&t.push([f.r.SIZE,new u.n([e.attributeData.size??1],r,1,!0)])}(t,o,w),function(e,t,r){e.attributeData.normal&&t.push([f.r.NORMAL,new u.n(e.attributeData.normal,r,3)])}(t,o,w),function(e,t,r){null!=e.attributeData.colorFeature&&t.push([f.r.COLORFEATUREATTRIBUTE,new u.n([e.attributeData.colorFeature],r,1,!0)])}(t,o,w),function(e,t,r){null!=e.attributeData.sizeFeature&&t.push([f.r.SIZEFEATUREATTRIBUTE,new u.n([e.attributeData.sizeFeature],r,1,!0)])}(t,o,w),function(e,t,r){null!=e.attributeData.opacityFeature&&t.push([f.r.OPACITYFEATUREATTRIBUTE,new u.n([e.attributeData.opacityFeature],r,1,!0)])}(t,o,w),function(e,t,r){if(null==e.overlayInfo||e.overlayInfo.renderCoordsHelper.viewingMode!==d.RT.Global||!e.overlayInfo.spatialReference.isGeographic)return;const o=(0,l.jh)(r.length),n=(0,a.tO)(e.overlayInfo.spatialReference);for(let i=0;i<o.length;i+=3)(0,s.RC)(r,i,o,i,n);const h=r.length/3,g=(0,c.oe)(h+1);let p=m,v=_,y=0,x=0;(0,i.hZ)(p,o[x++],o[x++]),x++,g[0]=0;for(let a=1;a<h+1;++a)a===h&&(x=0),(0,i.hZ)(v,o[x++],o[x++]),x++,y+=(0,i.xg)(p,v),g[a]=y,[p,v]=[v,p];t.push([f.r.DISTANCETOSTART,new u.n(g,t[0][1].indices,1,!0)])}(t,o,y),new p.V(e,o,v,g.X.Line,r)}const m=(0,o.vt)(),_=(0,o.vt)();function y(e,t){if(null==e||0===e.length)return[];const r=[];return e.forEach((e=>{const i=e.length,o=(0,l.jh)(3*i);e.forEach(((e,t)=>{o[3*t]=e[0],o[3*t+1]=e[1],o[3*t+2]=e[2]}));const n={attributeData:{position:o,normal:t},removeDuplicateStartEnd:!1};r.push(n)})),r}},29889:(e,t,r)=>{r.d(t,{A:()=>c,C:()=>l});var i=r(45308),o=r(44815),n=r(99785),a=r(67425),s=r(70558);function l(e,t,r,i){const s="polygon"===e.type?n.Wq.CCW_IS_HOLE:n.Wq.NONE,l="polygon"===e.type?e.rings:e.paths,{position:c,outlines:d}=(0,n.oR)(l,!!e.hasZ,s,e.spatialReference),u=(0,o.jh)(c.length),g=(0,a.au)(c,e.spatialReference,0,u,0,c,0,c.length/3,t,r,i),p=null!=g;return{lines:p?h(d,c,u):[],projectionSuccess:p,sampledElevation:g}}function c(e,t){const r="polygon"===e.type?n.Wq.CCW_IS_HOLE:n.Wq.NONE,o="polygon"===e.type?e.rings:e.paths,{position:a,outlines:l}=(0,n.oR)(o,!1,r),c=(0,i.projectBuffer)(a,e.spatialReference,0,a,t,0);for(let i=2;i<a.length;i+=3)a[i]=s.bi;return{lines:c?h(l,a):[],projectionSuccess:c}}function h(e,t,r=null){const i=new Array;for(const{index:n,count:a}of e){if(a<=1)continue;const e=3*n,s=3*a;i.push({position:(0,o.l5)(t,3*n,3*a),mapPositions:null!=r?(0,o.l5)(r,e,s):void 0})}return i}},70558:(e,t,r)=>{r.d(t,{bi:()=>Rt});var i,o=r(35143),n=r(54099),a=r(81806),s=r(87663),l=r(30726),c=r(30015),h=r(68134),d=r(41289),u=r(46053),g=r(76460),p=(r(47249),r(85842)),f=r(34761),v=r(20664),m=r(9392),_=r(57662),y=r(22955),x=r(19539),w=r(2413),C=r(75507);class b{constructor(){this._extent=(0,w.vt)(),this.resolution=0,this.renderLocalOrigin=(0,C.f)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new T}get extent(){return this._extent}setupGeometryViewsCyclical(e){this.setupGeometryView();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,w.cY)(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,w.cY)(this._extent,-e.range,0,t)}}setupGeometryView(){this.canvasGeometries.numViews=1,(0,w.C)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}}class T{constructor(){this.extents=[(0,w.vt)(),(0,w.vt)(),(0,w.vt)()],this.numViews=0}}!function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(i||(i={}));class S{constructor(e,t,r){this._fbos=e,this._format=t,this._name=r}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=(0,l.Gz)(this._handle)}get texture(){return this._handle?.getTexture()}bind(e,t,r){this._handle&&this._handle.fbo?.width===t&&this._handle.fbo?.height===r||(this._handle?.release(),this._handle=this._fbos.acquire(t,r,this._name,this._format)),e.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}var O=r(16455),R=r(34981),D=r(61785);class P{constructor(e,t,r,i,o=O.N.RGBA_MIPMAP){this.output=r,this.content=i,this.fbo=new S(e,o,t)}get valid(){return this.fbo.valid}}class I{constructor(e){this.targets=[new P(e,"overlay color",R.V.Color,i.Color),new P(e,"overlay IM color",R.V.Color,i.ColorNoRasterImage),new P(e,"overlay highlight",R.V.Highlight,i.Highlight,O.N.RG),new P(e,"overlay water",R.V.Normal,i.WaterNormal),new P(e,"overlay occluded",R.V.Color,i.Occluded)],(0,D.E)()&&this.targets.push(new P(e,"overlay olid",R.V.ObjectAndLayerIdColor,i.ObjectAndLayerIdColor,O.N.RGBA))}getTexture(e){return this.targets[e]?.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce(((e,t,r)=>t.valid?e|=1<<r:e),0)}}var M,A=r(57583),E=r(55855);!function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"}(M||(M={}));r(43557),r(26719),r(9001),r(20123),r(21390),r(86955),r(70367);var F,N=r(87003);!function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"}(F||(F={}));(0,E.vt)();N.n;var H=r(53070),L=r(60586),z=r(19555),W=r(90364),V=r(36451),j=r(16506),U=r(59246),k=r(61157),G=r(57162);class q extends U.w{constructor(e,t){super(e,t,new j.$(k.H,(()=>r.e(82671).then(r.bind(r,82671)))))}initializePipeline(){return(0,G.Ey)({blending:G.Ky,colorWrite:G.kn})}}var B=r(21019);class Z extends U.w{constructor(e,t){super(e,t,new j.$(B.a,(()=>r.e(51521).then(r.bind(r,51521)))))}initializePipeline(){return(0,G.Ey)({colorWrite:G.kn})}}var $=r(1723),Q=r(31432);class Y extends Q.Y{constructor(){super(...arguments),this.occludedFactor=$.cD,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}var X=r(62854);class K extends U.w{constructor(e,t){super(e,t,new j.$(X.H,(()=>r.e(37932).then(r.bind(r,37932)))))}initializePipeline(){return(0,G.Ey)({colorWrite:G.kn})}}var J=r(62361);class ee extends U.w{constructor(e,t){super(e,t,new j.$(J.S,(()=>r.e(58231).then(r.bind(r,58231)))))}initializePipeline(){return(0,G.Ey)({blending:G.Ky,colorWrite:G.kn})}}var te=r(51542);class re extends U.w{constructor(e,t){super(e,t,new j.$(te.a,(()=>r.e(85880).then(r.bind(r,85880)))))}initializePipeline(){return(0,G.Ey)({colorWrite:G.kn})}}var ie=r(83490),oe=r(32119),ne=r(11850),ae=r(69008),se=r(76718),le=r(93345),ce=r(18316),he=r(96673);let de=class extends V.A{constructor(){super(...arguments),this.produces=W.OG.HIGHLIGHTS,this.consumes={required:[W.OG.HIGHLIGHTS,"highlights"]},this._useMultipleHighlights=!1,this._downsampleDrawParameters=new B.H,this._passParameters=new Y,this._singleHighlightBlurDrawParameters=new te.S,this._grid=new ue}initialize(){this.addHandles([(0,h.wB)((()=>this._updateOptionsTexture()),(()=>{}),h.Vh)])}destroy(){this._grid.coverage=(0,l.Gz)(this._grid.coverage),this._grid.vao=(0,l.WD)(this._grid.vao),this._passParameters.highlightOptionsTexture=(0,l.Gz)(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(null==this._passParameters.highlightOptionsTexture){const e=new he.R(16,2);e.internalFormat=le.Ab.RGBA,e.samplingMode=le.Cj.NEAREST,this._passParameters.highlightOptionsTexture=new ce.g(this.renderingContext,e,null)}this._passParameters.highlightOptionsTexture.setData(function(e){const t=new Uint8Array(128);let r=0;for(const i of e){const e=4*r,o=4*r+64;++r;const{color:n}=i,a=i.haloColor??n;t[e+0]=n.r,t[e+1]=n.g,t[e+2]=n.b,t[e+3]=i.fillOpacity*n.a*255,t[o+0]=a.r,t[o+1]=a.g,t[o+2]=a.b,t[o+3]=i.haloOpacity*a.a*255}return t}(this.view.state.highlights)),this.requestRender(ie.C7.UPDATE)}precompile(){this.techniques.precompile(Z),this._useMultipleHighlights?this.techniques.precompile(q):(this.techniques.precompile(K),this.techniques.precompile(re),this.techniques.precompile(ee))}render(e){const t=e.find((({name:e})=>e===W.OG.HIGHLIGHTS)),{techniques:r,bindParameters:i,_passParameters:o,renderingContext:n}=this;if(!i.decorations)return t;const a=r.get(Z);if(!a.compiled)return this.requestRender(ie.C7.UPDATE),t;const s=e.find((({name:e})=>"highlights"===e)).getTexture(),l=()=>{this._gridUpdateResources(s);const e=this._gridComputeCoverage(a,s,i),{horizontalCellCount:t,verticalCellCount:r}=e;return o.horizontalCellCount=t,o.verticalCellCount=r,o.coverageTexture=e.coverage?.getTexture(),e},c=e=>{const t=e.verticalCellCount*e.horizontalCellCount;n.bindVAO(e.vao),n.drawElementsInstanced(le.WR.TRIANGLES,6,le.pe.UNSIGNED_BYTE,0,t)},{camera:h}=i,d=()=>{n.bindFramebuffer(t.fbo),n.setViewport4fv(h.fullViewport)};return this._useMultipleHighlights?this._renderMultiple(s,l,c,d):this._renderSingle(s,l,c,d),o.highlightTexture=null,o.coverageTexture=null,t}_renderMultiple(e,t,r,i){const{techniques:o,bindParameters:n,_passParameters:a,renderingContext:s}=this,l=o.get(q);if(!l.compiled)return void this.requestRender(ie.C7.UPDATE);const c=t();a.highlightTexture=e,a.pixelRatio=n.camera.pixelRatio,s.bindTechnique(l,n,a),i(),r(c)}_renderSingle(e,t,r,i){const{fboCache:o,techniques:n,bindParameters:a,_passParameters:s,renderingContext:l}=this,c=n.get(K),h=n.get(re),d=n.get(ee);if(!d.compiled||!h.compiled||!c.compiled)return void this.requestRender(ie.C7.UPDATE);const u=t(),{width:g,height:p}=e.descriptor;s.highlightTexture=e;const{camera:f}=a,{fullWidth:v,fullHeight:m,pixelRatio:_}=f,y=Math.ceil(v/_),x=Math.ceil(m/_),{_singleHighlightBlurDrawParameters:w}=this,C=this.view._stage.renderView.renderer,{highlights:b}=a;for(let T=0;T<b.length;++T){const{name:e}=b[T];if(!C.hasHighlightOptions(e))continue;s.highlightLevel=T,l.setClearColor(0,0,0,0);const t=o.acquire(g,p,"single highlight",O.N.RG);l.bindFramebuffer(t.fbo),l.setViewport(0,0,g,p),l.clear(le.NV.COLOR),l.bindTechnique(c,a,s),r(u),w.blurInput=t.getTexture(),(0,z.hZ)(w.blurSize,1/y,0);const n=o.acquire(y,x,"single highlight blur h",O.N.RG);l.unbindTexture(n.fbo?.colorTexture),l.bindFramebuffer(n.fbo),l.setViewport(0,0,y,x),l.clear(le.NV.COLOR),l.bindTechnique(h,a,s,w),r(u),t.release(),(0,z.hZ)(w.blurSize,0,1/x),s.singleHighlightBlurTexture=n.getTexture(),i(),l.bindTechnique(d,a,s,w),r(u),n.release()}}_gridUpdateResources(e){const t=this._grid,{width:r,height:i}=e.descriptor;if(t.horizontalCellCount=Math.ceil(r/B.g),t.verticalCellCount=Math.ceil(i/B.g),t.vao)return;const o=this.renderingContext,n=se.g.createIndex(o,le._U.STATIC_DRAW,pe);t.vao=new ae.Z(o,oe.D,new Map([["geometry",ne.wR]]),new Map([["geometry",se.g.createVertex(o,le._U.STATIC_DRAW)]]),n)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,o=this._grid,n=t.descriptor,a=Math.ceil(n.width/B.g),s=Math.ceil(n.height/B.g);this._downsampleDrawParameters.input=t,o.coverage?.release();const l=this.fboCache.acquire(a,s,"highlight coverage",O.N.RG);return o.coverage=l,i.bindFramebuffer(l.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,a,s),i.screen.draw(),o}get test(){}};(0,o._)([(0,u.MZ)()],de.prototype,"produces",void 0),(0,o._)([(0,u.MZ)()],de.prototype,"consumes",void 0),de=(0,o._)([(0,p.$)("esri.views.3d.webgl-engine.effects.highlight.Highlight")],de);class ue{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}let ge=0;const pe=new Uint8Array([0,1,2,2,1,3]);var fe=r(75941),ve=r(86994);class me{constructor(e,t,r,i){this._textures=e,this._techniques=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new fe.O}dispose(){this._textures.destroy()}acquire(e,t,r){this._ownMaterial(e);const i=e.produces.get(t);if(!i?.(r))return null;let o=this._id2glMaterialRef.get(r,e.id);if(null==o){const t=e.createGLMaterial({material:e,techniques:this._techniques,textures:this._textures,output:r});o=new _e(t),this._id2glMaterialRef.set(r,e.id,o)}return o.ref(),o.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);null!=r&&(r.unref(),r.referenced||((0,l.WD)(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&g.A.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class _e{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,ve.vA)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}var ye,xe=r(97583),we=r(45463),Ce=r(72001),be=(r(91417),r(13191)),Te=r(72745),Se=r(63401),Oe=r(98521),Re=r(77730);!function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"}(ye||(ye={}));var De=r(4998);class Pe{constructor(e){this.shadowMap=e,this.slot=Re.N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Ce.Y.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new A.A,this._inverseViewport=(0,Te.vt)(),this._oldLighting=new De.TA,this._newLighting=new De.TA,this._fadedLighting=new De.TA,this._lighting=this._newLighting,this.ssr=new Ie,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=(0,Te.vt)(),this.highlightMixTexture=null,this.hudRenderStyle=Oe.D.Occluded,this.hudOccludedFragmentOpacity=1,this.clouds=new Se.n,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(e,t,r,i){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=t,this._newLighting.globalFactor=r,this._newLighting.set(e),i===ye.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return null==this.highlightLevel?null:this.highlights[this.highlightLevel]}}class Ie{constructor(){this.fadeFactor=1,this.reprojectionMatrix=(0,be.vt)()}}class Me{constructor(e,t){this.rctx=e,this.lastFrameCamera=new A.A,this.output=R.V.Color,this.renderOccludedMask=Ae,this.bind=new Pe(t),this.bind.alignPixelEnabled=!0}}const Ae=we.m$.Occlude|we.m$.OccludeAndTransparent|we.m$.OccludeAndTransparentStencil;var Ee=r(15941),Fe=r(44680),Ne=r(43047),He=r(64465);let Le=class extends A.A{constructor(){super(...arguments),this._projectionMatrix=(0,be.vt)()}get projectionMatrix(){return this._projectionMatrix}};(0,o._)([(0,u.MZ)()],Le.prototype,"_projectionMatrix",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],Le.prototype,"projectionMatrix",null),Le=(0,o._)([(0,p.$)("esri.views.3d.webgl-engine.lib.CascadeCamera")],Le);var ze,We=r(81330);!function(e){e[e.Highlight=0]="Highlight",e[e.ExcludeHighlight=1]="ExcludeHighlight"}(ze||(ze={}));class Ve{constructor(){this.camera=new Le,this.lightMat=(0,be.vt)()}}class je{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class Ue{constructor(e,t){this._fbos=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new je,this._projectionView=(0,be.vt)(),this._projectionViewInverse=(0,be.vt)(),this._modelViewLight=(0,be.vt)(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,E.vt)(),this._cascades=[new Ve,new Ve,new Ve,new Ve],this._lastOrigin=null,this._maxTextureWidth=Math.min((0,a.A)("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return(0,Ne.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=(0,l.Gz)(this._handle),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=(0,Ee.qE)(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let e=0;e<this._numCascades;++e)Ke[e]=this._cascades[e];return Ke.length=this._numCascades,Ke}start(e,t,r,i,o){(0,ve.vA)(this.enabled);const{near:n,far:a}=function(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}(r);this._computeCascadeDistances(n,a,i),this._textureHeight=this._computeTextureHeight(e,o,i),this._setupMatrices(e,t);const{viewMatrix:s,projectionMatrix:l}=e;for(let c=0;c<this._numCascades;++c)this._constructCascade(c,l,s,t);this._lastOrigin=null,this.clear()}finish(){(0,ve.vA)(this.enabled),this._handle?.detachDepth()}getShadowMapMatrices(e){if(!this._lastOrigin||!(0,v.p)(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,m.vt)(),(0,v.c)(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){(0,f.Tl)(Je,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)et[16*t+e]=Je[e]}}return et}moveSnapshot(e){(0,ve.vA)(this.enabled),this._handle?.detachDepth(),this._snapshots[e]?.release(),this._snapshots[e]=this._handle,this._handle=null,this.clear()}copySnapshot(e){const t=this._handle?.getTexture()?.descriptor;if(!this.enabled||!t)return;this._snapshots[e]?.release();const{width:r,height:i}=t,o=e===ze.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot";this._snapshots[e]=this._fbos.acquire(r,i,o,O.N.RGBA4);const n=this._fbos.rctx;this._bindFbo();const a=n.bindTexture(this._snapshots[e]?.getTexture(),ce.g.TEXTURE_UNIT_FOR_UPDATES);n.gl.copyTexSubImage2D(le.Ap.TEXTURE_2D,0,0,0,0,0,r,i),n.bindTexture(a,ce.g.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(e){return this.enabled?this._snapshots[e]?.getTexture():null}clear(){const e=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),e.setClearColor(1,1,1,1),e.clear(le.NV.COLOR|le.NV.DEPTH)}_computeTextureHeight(e,t,r){const i=Math.min(window.devicePixelRatio,t)/e.pixelRatio,o=r?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,n=(0,We.Mv)(Math.floor(Math.max(e.fullWidth,e.fullHeight)*i*o)),a=Math.min(this._maxTextureWidth,this._numCascades*n);return(0,We.uT)(a/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",O.N.RGBA4)),this._handle?.acquireDepth(O.z.DEPTH16_BUFFER)}_discardSnapshot(e){this._snapshots[e]=(0,l.Gz)(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(e,t,r,i){const o=this._cascades[e],n=-this._cascadeDistances[e],a=-this._cascadeDistances[e+1],s=(t[10]*n+t[14])/Math.abs(t[11]*n+t[15]),l=(t[10]*a+t[14])/Math.abs(t[11]*a+t[15]);(0,ve.vA)(s<l);for(let u=0;u<8;++u){(0,Ne.s)(Ge,u%4==0||u%4==3?-1:1,u%4==0||u%4==1?-1:1,u<4?s:l,1);const e=qe[u];(0,Ne.t)(e,Ge,this._projectionViewInverse),e[0]/=e[3],e[1]/=e[3],e[2]/=e[3]}(0,v.v)(Xe,qe[0]),o.camera.viewMatrix=(0,f.Tl)(ke,this._modelViewLight,Xe);for(let u=0;u<8;++u)(0,v.t)(qe[u],qe[u],o.camera.viewMatrix);let c=qe[0][2],h=qe[0][2];for(let u=1;u<8;++u)c=Math.min(c,qe[u][2]),h=Math.max(h,qe[u][2]);c-=200,h+=200,o.camera.near=-h,o.camera.far=-c,function(e,t,r,i,o){const n=1/qe[0][3],a=1/qe[4][3];(0,ve.vA)(n<a);let s=n+Math.sqrt(n*a);const l=Math.sin((0,Ee.XM)(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));s/=l,function(e,t,r,i,o,n,a,s){(0,z.hZ)(tt,0,0);for(let w=0;w<4;++w)(0,z.WQ)(tt,tt,e[w]);(0,z.hs)(tt,tt,.25),(0,z.hZ)(rt,0,0);for(let w=4;w<8;++w)(0,z.WQ)(rt,rt,e[w]);(0,z.hs)(rt,rt,.25),(0,z.Cc)(it[0],e[4],e[5],.5),(0,z.Cc)(it[1],e[5],e[6],.5),(0,z.Cc)(it[2],e[6],e[7],.5),(0,z.Cc)(it[3],e[7],e[4],.5);let l=0,c=(0,z.hG)(it[0],tt);for(let w=1;w<4;++w){const e=(0,z.hG)(it[w],tt);e<c&&(c=e,l=w)}(0,z.Re)(ot,it[l],e[l+4]);const h=ot[0];let d,u;ot[0]=-ot[1],ot[1]=h,(0,z.Re)(nt,rt,tt),(0,z.Om)(nt,ot)<0&&(0,z.ze)(ot,ot),(0,z.Cc)(ot,ot,nt,r),(0,z.S8)(ot,ot),d=u=(0,z.Om)((0,z.Re)(at,e[0],tt),ot);for(let w=1;w<8;++w){const t=(0,z.Om)((0,z.Re)(at,e[w],tt),ot);t<d?d=t:t>u&&(u=t)}(0,z.C)(i,tt),(0,z.hs)(at,ot,d-t),(0,z.WQ)(i,i,at);let g=-1,p=1,f=0,v=0;for(let w=0;w<8;++w){(0,z.Re)(st,e[w],i),(0,z.S8)(st,st);const t=ot[0]*st[1]-ot[1]*st[0];t>0?t>g&&(g=t,f=w):t<p&&(p=t,v=w)}(0,ve.MX)(g>0,"leftArea"),(0,ve.MX)(p<0,"rightArea"),(0,z.hs)(lt,ot,d),(0,z.WQ)(lt,lt,tt),(0,z.hs)(ct,ot,u),(0,z.WQ)(ct,ct,tt),ht[0]=-ot[1],ht[1]=ot[0];const m=(0,ve.L)(i,e[v],ct,(0,z.WQ)(at,ct,ht),1,o),_=(0,ve.L)(i,e[f],ct,at,1,n),y=(0,ve.L)(i,e[f],lt,(0,z.WQ)(at,lt,ht),1,a),x=(0,ve.L)(i,e[v],lt,at,1,s);(0,ve.MX)(m,"rayRay"),(0,ve.MX)(_,"rayRay"),(0,ve.MX)(y,"rayRay"),(0,ve.MX)(x,"rayRay")}(qe,s,l,Be,Ze,$e,Qe,Ye),function(e,t,r,i,o){(0,z.Re)(pt,r,i),(0,z.hs)(pt,pt,.5),ft[0]=pt[0],ft[1]=pt[1],ft[2]=0,ft[3]=pt[1],ft[4]=-pt[0],ft[5]=0,ft[6]=pt[0]*pt[0]+pt[1]*pt[1],ft[7]=pt[0]*pt[1]-pt[1]*pt[0],ft[8]=1,ft[dt(0,2)]=-(0,z.Om)(gt(ft,0),e),ft[dt(1,2)]=-(0,z.Om)(gt(ft,1),e);let n=(0,z.Om)(gt(ft,0),r)+ft[dt(0,2)],a=(0,z.Om)(gt(ft,1),r)+ft[dt(1,2)],s=(0,z.Om)(gt(ft,0),i)+ft[dt(0,2)],l=(0,z.Om)(gt(ft,1),i)+ft[dt(1,2)];n=-(n+s)/(a+l),ft[dt(0,0)]+=ft[dt(1,0)]*n,ft[dt(0,1)]+=ft[dt(1,1)]*n,ft[dt(0,2)]+=ft[dt(1,2)]*n,n=1/((0,z.Om)(gt(ft,0),r)+ft[dt(0,2)]),a=1/((0,z.Om)(gt(ft,1),r)+ft[dt(1,2)]),ft[dt(0,0)]*=n,ft[dt(0,1)]*=n,ft[dt(0,2)]*=n,ft[dt(1,0)]*=a,ft[dt(1,1)]*=a,ft[dt(1,2)]*=a,ft[dt(2,0)]=ft[dt(1,0)],ft[dt(2,1)]=ft[dt(1,1)],ft[dt(2,2)]=ft[dt(1,2)],ft[dt(1,2)]+=1,n=(0,z.Om)(gt(ft,1),t)+ft[dt(1,2)],a=(0,z.Om)(gt(ft,2),t)+ft[dt(2,2)],s=(0,z.Om)(gt(ft,1),r)+ft[dt(1,2)],l=(0,z.Om)(gt(ft,2),r)+ft[dt(2,2)],n=-.5*(n/a+s/l),ft[dt(1,0)]+=ft[dt(2,0)]*n,ft[dt(1,1)]+=ft[dt(2,1)]*n,ft[dt(1,2)]+=ft[dt(2,2)]*n,n=(0,z.Om)(gt(ft,1),t)+ft[dt(1,2)],a=(0,z.Om)(gt(ft,2),t)+ft[dt(2,2)],s=-a/n,ft[dt(1,0)]*=s,ft[dt(1,1)]*=s,ft[dt(1,2)]*=s,o[0]=ft[0],o[1]=ft[1],o[2]=0,o[3]=ft[2],o[4]=ft[3],o[5]=ft[4],o[6]=0,o[7]=ft[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=ft[6],o[13]=ft[7],o[14]=0,o[15]=ft[8]}(Be,Ze,Qe,Ye,o.projectionMatrix),o.projectionMatrix[10]=2/(r-i),o.projectionMatrix[14]=-(r+i)/(r-i)}(r,i,c,h,o.camera),(0,f.lw)(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const d=this._textureHeight;o.camera.viewport=[e*d,0,d,d]}_setupMatrices(e,t){(0,f.lw)(this._projectionView,e.projectionMatrix,e.viewMatrix),(0,f.B8)(this._projectionViewInverse,this._projectionView);const r=this._viewingMode===He.RT.Global?e.eye:(0,v.i)(Xe,0,0,1);(0,f.t5)(this._modelViewLight,[0,0,0],[-t[0],-t[1],-t[2]],r)}_computeCascadeDistances(e,t,r){const i=r?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor((0,ve.kL)(t/e,4)),i);const o=(t-e)/this._numCascades,n=(t/e)**(1/this._numCascades);let a=e,s=e;for(let l=0;l<this._numCascades+1;++l)this._cascadeDistances[l]=(0,Ee.Cc)(a,s,this.settings.splitSchemeLambda),a*=n,s+=o}get test(){}}const ke=(0,be.vt)(),Ge=(0,E.vt)(),qe=[];for(let It=0;It<8;++It)qe.push((0,E.vt)());const Be=(0,Te.vt)(),Ze=(0,Te.vt)(),$e=(0,Te.vt)(),Qe=(0,Te.vt)(),Ye=(0,Te.vt)(),Xe=(0,m.vt)(),Ke=[],Je=(0,be.vt)(),et=be.zK.concat(be.zK,be.zK,be.zK,be.zK),tt=(0,Te.vt)(),rt=(0,Te.vt)(),it=[(0,Te.vt)(),(0,Te.vt)(),(0,Te.vt)(),(0,Te.vt)()],ot=(0,Te.vt)(),nt=(0,Te.vt)(),at=(0,Te.vt)(),st=(0,Te.vt)(),lt=(0,Te.vt)(),ct=(0,Te.vt)(),ht=(0,Te.vt)();function dt(e,t){return 3*t+e}const ut=(0,Te.vt)();function gt(e,t){return(0,z.hZ)(ut,e[t],e[t+3]),ut}const pt=(0,Te.vt)(),ft=(0,Fe.vt)();class vt extends U.w{constructor(e,t){super(e,t,new j.$(H.a,(()=>r.e(62553).then(r.bind(r,62553)))))}initializePipeline(e){return e.hasAlpha?(0,G.Ey)({blending:G.Ky,colorWrite:G.kn}):(0,G.Ey)({colorWrite:G.kn})}}var mt=r(6485);class _t extends mt.K{constructor(){super(...arguments),this.hasAlpha=!1}}(0,o._)([(0,mt.W)()],_t.prototype,"hasAlpha",void 0);var yt=r(44513),xt=r(71011),wt=r(80381);class Ct extends U.w{constructor(e,t){super(e,t,new j.$(wt.a,(()=>r.e(71747).then(r.bind(r,71747)))))}}var bt=r(59752);let Tt=class extends L.RW{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new wt.O,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new c.A,this._passParameters=new H.T,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new A.A,this.events=new n.A,this.longitudeCyclical=null,this.produces=new Map([[Re.N.DRAPED_MATERIAL,e=>e!==R.V.Highlight||this.hasHighlights],[Re.N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this._view,t=e._stage,r=t.renderer.fboCache,{waterTextures:i,textures:o}=t.renderView;this._renderContext=new Me(this._rctx,new Ue(r,e.state.viewingMode)),this.addHandles([(0,h.wB)((()=>i.updating),(()=>this.events.emit("content-changed")),h.pc),(0,h.wB)((()=>this.spatialReference),(e=>this._localOriginFactory=new xe.g(e)),h.pc),(0,h.on)((()=>e.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0)),(0,h.wB)((()=>function(e){let t=0;for(const i of e){const{name:e}=i;t+=e.length;const{color:r,fillOpacity:o,haloColor:n,haloOpacity:a}=i;t+=r.r+r.g+r.b+r.a+o,t+=n?n.r+n.g+n.b+n.a+a:0}const r=e.at(0);if(r){const{shadowOpacity:e,shadowDifference:i,shadowColor:o}=r;t+=e+i+o.r+o.g+o.b+o.a}return ge+++(t>=0?0:1)}(e.state.highlights)),(()=>this._sortedDrapeSourceRenderersDirty=!0),h.Vh),(0,h.wB)((()=>e.state.highlights),(t=>{this._bindParameters.highlights=t,this._bindParameters.highlightOrderMap=e.state.highlightOrderMap,this._updateHighlights()}),h.Vh),e.resourceController.scheduler.registerTask(bt.W6.STAGE,this)]),this._materials=new me(o,this._techniques,(()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")}),(()=>this.events.emit("content-changed")));const{_bindParameters:n,_camera:a}=this;a.near=1,a.far=1e4,a.relativeElevation=null,n.slot=Re.N.DRAPED_MATERIAL,n.mainDepth=null,n.camera=a,n.oitPass=Ce.Y.NONE,n.updateLighting([new xt.$p((0,m.S)())],0,0,ye.Immediate)}destroy(){this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._passParameters.texture=(0,l.WD)(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view._stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){this._pluginContext=e,this._techniques.precompile(Ct)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,s.Bs)(this._renderers,(e=>e.updating))}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map((e=>e.drapeSource.layer)).filter((e=>!!e))}_updateHighlights(){const e=this._view.state;this._renderers.forEach((t=>t.updateHighlights(e.highlightOrderMap)))}createDrapeSourceRenderer(e,t,r){const i=this._renderers.get(e);null!=i&&i.destroy();const o=new t({...r,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles((0,h.wB)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),o}removeDrapeSourceRenderer(e){if(null==e)return;const t=this._renderers.get(e);null!=t&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&(0,d.bw)(e,(e=>e.drapeTargetType===_.sv.WithoutRasterImage))}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=(0,d.bw)(e,(e=>e.drapeSourceType===_.Om.Features)),this._hasDrapedRasterSource=(0,d.bw)(e,(e=>e.drapeSourceType===_.Om.RasterImage))):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t,r=this._bindParameters.overlayStretch){null==this._overlays&&(this._renderTargets=new I(this._stage.renderer.fboCache),this._overlays=[new b,new b]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=(0,l.WD)(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){if(null!=e)return e===i.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(i.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,t){let r=!1;for(const[i,o]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&o.commitChanges(this._view.state.highlightOrderMap)&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=(0,s.Bs)(this._renderers,(e=>e.hasHighlights)),this.notifyChange("rendersOccludedDraped"))}hasHighlightOptions(e){return(0,s.Bs)(this._renderers,(t=>t.hasHighlightOptions(e)))}processSyncDrapeSources(){this._processDrapeSources(bt.Bb,(e=>e.updatePolicy===yt.q.SYNC))}get isEmpty(){return!y.b.OVERLAY_DRAW_DEBUG_TEXTURE&&!(0,s.Bs)(this._renderers,(e=>!e.isEmpty))}get hasWater(){const e=(0,s.Bs)(this._renderers,(e=>e.hasWater));return e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=Dt,++this._techniques.precompiling;const t=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(y.b.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==i.Occluded&&e!==i.Highlight)return!0;++this._techniques.precompiling;const t=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,t}get mode(){return this.isEmpty?F.Disabled:this.hasWater&&this.renders(i.WaterNormal)?F.EnabledWithWater:this._renderTargets?.getTexture(i.Color)?F.Enabled:F.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach((r=>t=r.updateAnimation(e)||t)),t&&this.parent.requestRender(ie.C7.BACKGROUND),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(this._renderTargets){this._bindParameters.alignPixelEnabled=e.alignPixelEnabled,++this._techniques.precompiling;for(const e of this._renderTargets.targets){if(e.content===i.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=e.output;this._renderContext.output=t,this._bindParameters.slot=t===R.V.Normal?Re.N.DRAPED_WATER:Re.N.DRAPED_MATERIAL,e.content===i.Occluded&&(this._renderContext.renderOccludedMask=Dt),this._sortedRenderers.forAll((({drapeSource:t,renderer:r})=>{e.content===i.ColorNoRasterImage&&t.drapeSourceType===_.Om.RasterImage||r.precompile(this._renderContext)})),this._renderContext.renderOccludedMask=Ae}--this._techniques.precompiling}}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const e of this._overlays)this.longitudeCyclical?e.setupGeometryViewsCyclical(this.longitudeCyclical):e.setupGeometryView();this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const e of this._renderTargets.targets){if(e.content===i.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=this._drawTarget(x.vr.INNER,e),r=this._drawTarget(x.vr.OUTER,e);(t||r)&&e.fbo.generateMipMap()}}}_drawTarget(e,t){const r=this._overlays[e],o=r.canvasGeometries;if(0===o.numViews)return!1;const n=this._view.state.contentPixelRatio;this._screenToWorldRatio=n*r.mapUnitsPerPixel/this._bindParameters.overlayStretch;const a=t.output;if(this.isEmpty||a===R.V.Normal&&!this.hasWater||!r.hasSomeSizedView())return!1;const{_rctx:s,_camera:l,_renderContext:c,_bindParameters:h}=this;if(l.pixelRatio=r.pixelRatio*n,c.output=a,h.screenToWorldRatio=this._screenToWorldRatio,h.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,h.slot=a===R.V.Normal?Re.N.DRAPED_WATER:Re.N.DRAPED_MATERIAL,t.content===i.Occluded&&(c.renderOccludedMask=Dt),!this.renders(t.content))return c.renderOccludedMask=Ae,!1;const{resolution:d}=r,u=e===x.vr.INNER?0:d;if(s.setViewport(u,0,d,d),this._bindTargetFBO(t),e===x.vr.INNER&&(s.setClearColor(0,0,0,0),s.clear(le.NV.COLOR)),y.b.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==i.Occluded&&t.content!==i.Highlight){this._techniques.precompile(vt,Pt);const t=this._techniques.get(vt,Pt);for(let i=0;i<o.numViews;i++)this._setViewParameters(o.extents[i],r),this._ensureDebugPatternResources(r.resolution,Ot[e]),s.bindTechnique(t,h,this._passParameters),s.screen.draw()}if(t.output===R.V.Highlight){const{fboCache:r}=this._stage.renderer,i=this._resolution;this._bindTargetFBO(t),function(e,t,r,i,o,n=0){const a=i.highlights,s=a.length>1?t.acquire(r.width,r.height,"highlight mix",O.N.RG):null;if(s){const t=e.getBoundFramebufferObject();e.bindFramebuffer(s.fbo),e.clearFramebuffer(E.uY),e.bindFramebuffer(t)}const l=s?.getTexture();i.highlightMixTexture=l,(0,z.hZ)(i.highlightMixOrigin,n,0),a.forEach(((t,a)=>{a>0&&(e.bindTexture(l,ce.g.TEXTURE_UNIT_FOR_UPDATES),e.gl.copyTexSubImage2D(le.Ap.TEXTURE_2D,0,0,0,n,0,r.width,r.height),e.bindTexture(null,ce.g.TEXTURE_UNIT_FOR_UPDATES)),e.clear(le.NV.DEPTH),i.highlightLevel=a,o()})),i.highlightLevel=null,i.highlightMixTexture=null,s?.release()}(s,r,{width:i,height:i},h,(()=>this._renderAllGeometry(e,t)),u)}else this._renderAllGeometry(e,t);return s.bindFramebuffer(null),c.renderOccludedMask=Ae,!0}_renderAllGeometry(e,t){const r=this._overlays[e],o=r.canvasGeometries;this._sortedRenderers.forAll((({drapeSource:n,renderer:a})=>{if(t.content===i.ColorNoRasterImage&&n.drapeSourceType===_.Om.RasterImage)return;const{fullOpacity:s}=n,l=null!=s&&s<1&&t.output===R.V.Color&&this._bindTemporaryFBO();for(let e=0;e<o.numViews;e++)this._setViewParameters(o.extents[e],r),a.render(this._renderContext);if(l){this._bindTargetFBO(t),this._overlayParameters.texture=l.getTexture(),this._overlayParameters.opacity=s,this._overlayParameters.overlayIndex=e;const r=this._techniques.get(Ct);this._rctx.bindTechnique(r,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),l.release()}}))}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(le.NV.COLOR),i}get _resolution(){return this._overlays?.[x.vr.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let o=0;for(const{renderer:n}of this._sortedRenderers)o=n.intersect?.(e,t,r,i,o)??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this._view.map.allLayers,t=e.length;this._renderers.forEach(((r,i)=>{const o=e.indexOf(i.layer),n=o>=0,a=i.renderGroup??(n?_.O7.MapLayer:_.O7.ViewLayer),s=t*a+(n?o:0);this._sortedRenderers.push(new St(i,r,s))})),this._sortedRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],(0,f.v3)(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),(0,f.kN)(r.viewMatrix,[-e[0],-e[1],0])}_ensureDebugPatternResources(e,t){if((0,v.i)(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let n=0;n<e;n++)for(let t=0;t<e;t++){const o=Math.floor(t/10),a=Math.floor(n/10);o<2||a<2||10*o>e-20||10*a>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&a?1&t^1&n?0:255:1&o^1&a?0:128)}const o=new he.R(e);o.samplingMode=le.Cj.NEAREST,this._passParameters.texture=new ce.g(this._rctx,o,r)}get test(){}};(0,o._)([(0,u.MZ)()],Tt.prototype,"hasHighlights",void 0),(0,o._)([(0,u.MZ)()],Tt.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,o._)([(0,u.MZ)({constructOnly:!0})],Tt.prototype,"parent",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],Tt.prototype,"_techniques",null),(0,o._)([(0,u.MZ)({type:Boolean,readOnly:!0})],Tt.prototype,"updating",null),(0,o._)([(0,u.MZ)()],Tt.prototype,"isEmpty",null),(0,o._)([(0,u.MZ)({readOnly:!0})],Tt.prototype,"rendersOccludedDraped",null),Tt=(0,o._)([(0,p.$)("esri.views.3d.terrain.OverlayRenderer")],Tt);class St{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const Ot=[[1,.5,.5],[.5,.5,1]],Rt=-2,Dt=we.m$.OccludeAndTransparent,Pt=new _t;Pt.hasAlpha=!0},19539:(e,t,r)=>{var i,o,n;r.d(t,{vr:()=>i}),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(n||(n={}))},47233:(e,t,r)=>{r.d(t,{Q:()=>u});var i=r(19555),o=r(72745),n=r(86955),a=r(69728),s=r(87003);class l extends s.n{constructor(e,t){super(e,"ivec2",a.c.Pass,((r,i,o)=>r.setUniform2iv(e,t(i,o))))}}var c=r(72790),h=r(70367),d=r(21019);function u(e){const{vertex:t}=e;t.uniforms.add(new h.N("coverageTexture",(e=>e.coverageTexture)),new l("highlightRenderCellCount",(e=>(0,i.hZ)(g,e.horizontalCellCount,e.verticalCellCount))),new l("highlightTextureResolution",(({highlightTexture:e})=>(0,i.hZ)(g,e.descriptor.width,e.descriptor.height))),new c.c("highlightLevel",(e=>e.highlightLevel))).constants.add("cellSize","int",d.g),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(n.H`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`).main.add(n.H`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = uvec2(texelFetch(coverageTexture, cellPos, 0).rg * 255.0);
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const g=(0,o.vt)()},32925:(e,t,r)=>{r.d(t,{v:()=>n,z:()=>o});var i=r(86955);function o(e){e.fragment.code.add(i.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function n(e){e.fragment.code.add(i.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},9001:(e,t,r)=>{r.d(t,{E:()=>P});var i=r(32925),o=r(99746),n=r(86955);function a(e){e.fragment.code.add(n.H`
    const float GAMMA = ${n.H.float(o.Tf)};
    const float INV_GAMMA = ${n.H.float(1/o.Tf)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var s=r(42953),l=r(48353),c=r(65058),h=r(28450),d=r(23148),u=r(23687),g=r(4653);function p(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(c.E),r.uniforms.add(new h.E("nearFar",(e=>e.camera.nearFar)),new g.x("depthMap",(e=>e.depth?.attachment)),new u.F("proj",(e=>e.camera.projectionMatrix)),new d.U("invResolutionHeight",(e=>1/e.camera.height)),new u.F("reprojectionMatrix",(e=>e.ssr.reprojectionMatrix))).code.add(n.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}var f=r(9392),v=r(14556),m=r(51977),_=r(63401),y=r(317),x=r(43557),w=r(67582),C=r(84115),b=r(69728),T=r(87003);class S extends T.n{constructor(e,t){super(e,"samplerCube",b.c.Bind,((r,i)=>r.bindTexture(e,t(i))))}}function O(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",R).code.add(n.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new d.U("radiusCurvatureCorrection",(({clouds:e})=>e.parallax.radiusCurvatureCorrection))).code.add(n.H`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(n.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,x.Gc)(t),(0,x.O4)(t);const r=(0,f.fA)(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r);t.code.add(n.H`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${n.H.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${n.H.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${n.H.float(.2)} * pow(dirDotLight, ${n.H.float(10)}) * (1. - pow(sunsetTransition, ${n.H.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.uniforms.add(new w.o("readChannelsRG",(e=>e.clouds.readChannels===m.c.RG)),new S("cubeMap",(e=>e.clouds.data?.cubeMap?.colorTexture??null))).code.add(n.H`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new C.d("anchorPoint",(e=>e.clouds.parallax.anchorPoint)),new C.d("anchorPointNew",(e=>e.clouds.parallaxNew.anchorPoint)),new u.F("rotationClouds",(e=>e.clouds.parallax.transform)),new u.F("rotationCloudsNew",(e=>e.clouds.parallaxNew.transform)),new d.U("cloudsOpacity",(e=>e.clouds.opacity)),new d.U("fadeFactor",(e=>e.clouds.fadeFactor)),new w.o("crossFade",(e=>e.clouds.fadeState===_.c.CROSS_FADE))).code.add(n.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const R=(v.$O.radius+y.k9)**2;function D(e){e.code.add(n.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function P(e,t){e.include(s.f,t),e.include(a),e.include(i.v),t.cloudReflections&&e.include(O),e.include(p,t);const r=e.fragment;r.include(D),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",l.O),r.constants.add("ssrHeightFadeEnd","float",l.b),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(n.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new d.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new d.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))),r.code.add(n.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new d.U("cloudsOpacity",(e=>e.clouds.opacity))).code.add(n.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new u.F("view",(e=>e.camera.viewMatrix)),new g.x("lastFrameColorTexture",(e=>e.ssr.lastFrameColor?.getTexture())),new d.U("fadeFactorSSR",(e=>e.ssr.fadeFactor))).code.add(n.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(n.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(n.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(n.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(n.H`return waterRenderedColor;
}`)}},11850:(e,t,r)=>{r.d(t,{SL:()=>s,wR:()=>a});var i=r(66470),o=r(93345),n=r(21812);const a=[],s=[new n._(i.r.POSITION,3,o.pe.FLOAT,0,12)];new n._(i.r.POSITION,2,o.pe.FLOAT,0,8),new n._(i.r.POSITION,2,o.pe.FLOAT,0,16),new n._(i.r.UV0,2,o.pe.FLOAT,8,16)},57824:(e,t,r)=>{var i,o;r.d(t,{k:()=>o,q:()=>i}),function(e){e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.REMOVE=2]="REMOVE"}(i||(i={})),function(e){e[e.NONE=0]="NONE",e[e.VISIBILITY=1]="VISIBILITY",e[e.GEOMETRY=2]="GEOMETRY",e[e.TRANSFORMATION=4]="TRANSFORMATION",e[e.HIGHLIGHT=8]="HIGHLIGHT",e[e.OCCLUDEE=16]="OCCLUDEE"}(o||(o={}))},442:(e,t,r)=>{r.d(t,{$:()=>c});var i=r(90632),o=r(34761),n=r(13191),a=r(20664),s=r(78315),l=r(94966);class c{constructor(e,t={}){this.geometry=e,this.screenToWorldRatio=1,this._transformation=(0,n.vt)(),this._shaderTransformation=null,this._boundingSphere=null,this.id=(0,i.c)(),this.layerUid=t.layerUid,this.graphicUid=t.graphicUid,this.castShadow=t.castShadow??!1,t.objectShaderTransformation&&this.objectShaderTransformationChanged(t.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){(0,o.C)(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){null==e?this._shaderTransformation=null:(this._shaderTransformation??=(0,n.vt)(),(0,o.lw)(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=(0,s.c)(),(0,a.t)((0,s.a)(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*(0,l.hG)(this.shaderTransformation)),this._boundingSphere):s.N}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(e){this.geometry.foreachHighlightOptions(e)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}}},76956:(e,t,r)=>{r.d(t,{v:()=>M});var i=r(55855),o=r(48549),n=r(34981),a=r(61785),s=r(83490),l=r(59696),c=r(60322),h=r(77730),d=r(66470),u=r(82809),g=r(63928),p=r(93684),f=r(16506),v=r(59246),m=r(72001),_=r(96643),y=r(37923),x=r(93345),w=r(57162);p.S;class C extends v.w{constructor(e,t){super(e,t,new f.$(y.C,(()=>r.e(35837).then(r.bind(r,35837)))))}_createPipeline(e,t){const{oitPass:r,output:i,transparent:o,cullFace:a,draped:s,hasOccludees:l,polygonOffset:h,enableOffset:d}=e,u=r===m.Y.NONE,g=r===m.Y.FrontFace;return(0,w.Ey)({blending:(0,n.RN)(i)&&o?(0,c.Yf)(r):null,culling:(0,w.Xt)(a),depthTest:s?null:{func:(0,c.K_)(r)},depthWrite:(0,c.z5)(e),drawBuffers:i===n.V.Depth?{buffers:[x.Hr.NONE]}:(0,c.m6)(r,i),colorWrite:w.kn,stencilWrite:l?_.v0:null,stencilTest:l?t?_.a9:_.qh:null,polygonOffset:u||g?h?b:null:(0,c.aB)(d)})}initializePipeline(e){return this._occludeePipelineState=this._createPipeline(e,!0),this._createPipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}const b={factor:1,units:1};var T=r(35143),S=r(97808),O=r(42717),R=r(6485),D=r(94570);class P extends D.E{constructor(){super(...arguments),this.cullFace=s.s2.None,this.hasVertexColors=!1,this.transparent=!1,this.discardInvisibleFragments=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1,this.textureCoordinateType=S.I.None,this.emissionSource=O.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.vvSize=!1,this.vvOpacity=!1}}(0,T._)([(0,R.W)({count:s.s2.COUNT})],P.prototype,"cullFace",void 0),(0,T._)([(0,R.W)()],P.prototype,"hasVertexColors",void 0),(0,T._)([(0,R.W)()],P.prototype,"transparent",void 0),(0,T._)([(0,R.W)()],P.prototype,"discardInvisibleFragments",void 0),(0,T._)([(0,R.W)()],P.prototype,"polygonOffset",void 0),(0,T._)([(0,R.W)()],P.prototype,"enableOffset",void 0),(0,T._)([(0,R.W)()],P.prototype,"writeDepth",void 0),(0,T._)([(0,R.W)()],P.prototype,"hasOccludees",void 0),(0,T._)([(0,R.W)()],P.prototype,"terrainDepthTest",void 0),(0,T._)([(0,R.W)()],P.prototype,"cullAboveTerrain",void 0),(0,T._)([(0,R.W)()],P.prototype,"objectAndLayerIdColorInstanced",void 0),(0,T._)([(0,R.W)()],P.prototype,"vvColor",void 0),(0,T._)([(0,R.W)()],P.prototype,"draped",void 0);var I=r(75569);class M extends g.W{constructor(e){super(e,E),this._configuration=new P,this.supportsEdges=!0,this.produces=new Map([[h.N.OPAQUE_MATERIAL,e=>this._isOpaqueMaterialPass(e)],[h.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>this._isOpaqueNoSSAODepthPass(e)],[h.N.TRANSPARENT_MATERIAL,e=>(0,n.QG)(e)&&this._transparent&&this.parameters.writeDepth],[h.N.TRANSPARENT_MATERIAL_WITHOUT_NORMALS,e=>(0,n.eh)(e)&&this._transparent&&this.parameters.writeDepth],[h.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,n.QG)(e)&&this._transparent&&!this.parameters.writeDepth],[h.N.DRAPED_MATERIAL,e=>(0,n.i3)(e)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._transparent,this._configuration.discardInvisibleFragments=this._transparent&&!this._isOpaquePass(e)&&this.parameters.discardInvisibleFragments,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<c.xt,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,n.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}get visible(){return this.parameters.color[3]>=I.Q}get _transparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}_isOpaquePass(e){return this._isOpaqueMaterialPass(e)||this._isOpaqueNoSSAODepthPass(e)}_isOpaqueMaterialPass(e){return e===n.V.Highlight||(0,n.QG)(e)&&!this._transparent}_isOpaqueNoSSAODepthPass(e){return(0,n.eh)(e)&&this.parameters.writeDepth&&!this._transparent}createGLMaterial(e){return new A(e)}createBufferWriter(){const e=(0,o.BP)().vec3f(d.r.POSITION);return(0,a.E)()&&e.vec4u8(d.r.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(d.r.COLORFEATUREATTRIBUTE):e.vec4u8(d.r.COLOR),new u.Z(e)}}class A extends l.A{beginSlot(e){return this.getTechnique(C,e)}}class E extends p.S{constructor(){super(...arguments),this.color=i.uY,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=s.s2.None,this.draped=!1,this.discardInvisibleFragments=!1}}},86401:(e,t,r)=>{r.d(t,{Ci:()=>n,Dq:()=>l,dB:()=>s,zK:()=>a});var i=r(48549),o=r(66470);const n=(0,i.BP)().vec3f(o.r.POSITION),a=(0,i.BP)().vec3f(o.r.POSITION).vec2f(o.r.UV0),s=(0,i.BP)().vec3f(o.r.POSITION).vec4u8(o.r.COLOR),l=(0,i.BP)().vec3f(o.r.POSITION).vec2f(o.r.UV0).vec4u8(o.r.OBJECTANDLAYERIDCOLOR)},63928:(e,t,r)=>{r.d(t,{W:()=>n});var i=r(45463),o=r(48168);class n extends i.im{intersect(e,t,r,i,n,a){return(0,o.Uy)(e,r,i,n,void 0,a)}}},35925:(e,t,r)=>{r.d(t,{Xq:()=>s,wk:()=>a});const i={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},o={dash:i.dash,"dash-dot":[...i.dash,...i.dot],dot:i.dot,"long-dash":i["long-dash"],"long-dash-dot":[...i["long-dash"],...i.dot],"long-dash-dot-dot":[...i["long-dash"],...i.dot,...i.dot],none:null,"short-dash":i["short-dash"],"short-dash-dot":[...i["short-dash"],...i["short-dot"]],"short-dash-dot-dot":[...i["short-dash"],...i["short-dot"],...i["short-dot"]],"short-dot":i["short-dot"],solid:null},n=8;function a(e){return{pattern:[e,e],pixelRatio:2}}function s(e){return"style"===e?.type?function(e){return null!=e?function(e,t){return null==e?e:{pattern:e.slice(),pixelRatio:t}}(o[e],n):null}(e.style):null}}}]);
//# sourceMappingURL=9719.50d6cba5.chunk.js.map