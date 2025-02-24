"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[81361],{14623:(e,t,i)=>{i.d(t,{R:()=>C,b:()=>x,r:()=>R});var r=i(34981),n=i(26917),o=i(90080),a=i(3838),s=i(56906),l=i(17698),c=i(36324),d=i(94192),p=i(80883),h=i(3799),u=i(28450),f=i(51596),m=i(58350),v=i(23148),g=i(21390),S=i(86955),_=i(23687),T=i(66470),y=i(50125),O=i(91911),E=i(46259),b=i(2687),A=i(75569);const R=1;function x(e){const t=new b.N5,{attributes:i,varyings:x,vertex:C,fragment:D}=t,{applyMarkerOffset:L,draped:I,output:P,capType:N,stippleEnabled:w,falloffEnabled:W,roundJoins:U,wireframe:z,innerColorEnabled:F}=e;t.include(c.p),t.include(a.s,e),t.include(s.q,e),t.include(o.g,e),t.include(d.Z,e);const j=L&&!I;j&&(C.uniforms.add(new g.m("markerScale",(e=>e.markerScale))),t.include(l.r,{space:y.lM.World})),(0,h.NB)(C,e),C.uniforms.add(new _.F("inverseProjectionMatrix",(e=>e.camera.inverseProjectionMatrix)),new u.E("nearFar",(e=>e.camera.nearFar)),new g.m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new f.I("viewport",(e=>e.camera.fullViewport))),C.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(T.r.POSITION,"vec3"),i.add(T.r.PREVPOSITION,"vec3"),i.add(T.r.NEXTPOSITION,"vec3"),i.add(T.r.SUBDIVISIONFACTOR,"float"),i.add(T.r.UV0,"vec2"),x.add("vColor","vec4"),x.add("vpos","vec3"),x.add("vLineDistance","float"),x.add("vLineWidth","float");const H=w;H&&x.add("vLineSizeInv","float");const M=N===E.x.ROUND,V=w&&M,B=W||V;B&&x.add("vLineDistanceNorm","float"),M&&(x.add("vSegmentSDF","float"),x.add("vReverseSegmentSDF","float")),C.code.add(S.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),C.code.add(S.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),C.code.add(S.H`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),(0,h.Nz)(C),C.constants.add("aaWidth","float",w?0:1).main.add(S.H`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${H?S.H`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),j&&C.main.add(S.H`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),C.main.add(S.H`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(w||M)&&C.main.add(S.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${M?S.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),C.main.add(S.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),U?C.main.add(S.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${w?S.H`min(1.0, subdivisionFactor * ${S.H.float((R+2)/(R+1))})`:S.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):C.main.add(S.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const k=N!==E.x.BUTT;return C.main.add(S.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${k?S.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),C.main.add(S.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${B?S.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),M&&C.main.add(S.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),w&&(I?C.uniforms.add(new v.U("worldToScreenRatio",(e=>1/e.screenToPCSRatio))):C.main.add(S.H`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),C.main.add(S.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),I?C.main.add(S.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):C.main.add(S.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),C.uniforms.add(new g.m("stipplePatternPixelSize",(e=>(0,s.h)(e)))),C.main.add(S.H`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),C.main.add(S.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${z&&!I?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(n.HQ,e),t.include(O.z,e),D.include(p.a),D.main.add(S.H`discardBySlice(vpos);
discardByTerrainDepth();`),z?D.main.add(S.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(M&&D.main.add(S.H`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${S.H.float(A.Q)}) {
          discard;
        }
      `),V?D.main.add(S.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${S.H.float(A.Q)}, stippleCoverage);
      `):D.main.add(S.H`float stippleAlpha = getStippleAlpha();`),P!==r.V.ObjectAndLayerIdColor&&D.main.add(S.H`discardByStippleAlpha(stippleAlpha, ${S.H.float(A.Q)});`),D.uniforms.add(new m.E("intrinsicColor",(e=>e.color))),D.main.add(S.H`vec4 color = intrinsicColor * vColor;`),F&&(D.uniforms.add(new m.E("innerColor",(e=>e.innerColor??e.color)),new g.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),D.main.add(S.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),D.main.add(S.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),W&&(D.uniforms.add(new g.m("falloff",(e=>e.falloff))),D.main.add(S.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),w||D.main.add(S.H`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),D.main.add(S.H`outputColorHighlightOID(finalColor, vpos);`),t}const C=Object.freeze(Object.defineProperty({__proto__:null,build:x,ribbonlineNumRoundJoinSubdivisions:R},Symbol.toStringTag,{value:"Module"}))},49296:(e,t,i)=>{i.d(t,{F:()=>o});var r=i(59097),n=i(41595);class o{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,r.Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return null!=i&&(t+=(0,n.g7)(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,r.Tg)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,t,i){if(null==e)return void(this._featureExpressionInfoContext=null);const r=e?.arcade;r&&null!=t&&null!=i?(this._featureExpressionInfoContext=(0,n.o8)(e),(0,n.gf)(this._featureExpressionInfoContext,(0,n.VG)(r.modules,t,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new o;return null!=e&&t.setFromElevationInfo(e),t}}},67425:(e,t,i)=>{i.d(t,{I2:()=>m,Kf:()=>g,Uk:()=>T,ai:()=>_,au:()=>h,fe:()=>S,nG:()=>f,nu:()=>v,sE:()=>u,uw:()=>r});var r,n=i(34761),o=i(13191),a=i(9392),s=i(5809),l=i(45308),c=i(81284),d=i(80935),p=i(66470);function h(e,t,i,r,n,o,a,s,c,d,p){const h=y[p.mode];let u,f,m=0;if((0,l.projectBuffer)(e,t,i,r,c.spatialReference,n,s))return h?.requiresAlignment(p)?(m=h.applyElevationAlignmentBuffer(r,n,o,a,s,c,d,p),u=o,f=a):(u=r,f=n),(0,l.projectBuffer)(u,c.spatialReference,f,o,d.spatialReference,a,s)?m:void 0}function u(e,t,i,r,n){const o=((0,c.v)(e)?e.z:(0,d.cN)(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const i=(0,d.R1)(t,e,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=i,void(n.z=i)}case"relative-to-ground":{const a=(0,d.R1)(t,e,"ground")??0,s=i.geometryZWithOffset(o,r);return n.verticalDistanceToGround=s,n.sampledElevation=a,void(n.z=s+a)}case"relative-to-scene":{const a=(0,d.R1)(t,e,"scene")??0,s=i.geometryZWithOffset(o,r);return n.verticalDistanceToGround=s,n.sampledElevation=a,void(n.z=s+a)}case"absolute-height":{const a=i.geometryZWithOffset(o,r),s=(0,d.R1)(t,e,"ground")??0;return n.verticalDistanceToGround=a-s,n.sampledElevation=s,void(n.z=a)}default:return void(n.z=0)}}function f(e,t,i,r){return u(e,t,i,r,E),E.z}function m(e,t,i){return"on-the-ground"===t&&"on-the-ground"===i?e.staysOnTheGround:t===i||"on-the-ground"!==t&&"on-the-ground"!==i?null==t||null==i?e.definedChanged:r.UPDATE:e.onTheGroundChanged}function v(e){return"relative-to-ground"===e||"relative-to-scene"===e}function g(e){return"absolute-height"!==e}function S(e,t,i,r,o){u(t,i,o,r,E),_(e,E.verticalDistanceToGround);const a=E.sampledElevation,l=(0,n.C)(O,e.transformation);return b[0]=t.x,b[1]=t.y,b[2]=E.z,(0,s.l)(t.spatialReference,b,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function _(e,t){for(let i=0;i<e.geometries.length;++i){const r=e.geometries[i].getMutableAttribute(p.r.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[i],p.r.CENTEROFFSETANDDISTANCE))}}class T{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(r||(r={}));const y={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,a,s){const l=s.calculateOffsetRenderUnits(a),c=s.featureExpressionInfoContext;t*=3,r*=3;for(let d=0;d<n;++d){const n=e[t],o=e[t+1],a=e[t+2];i[r]=n,i[r+1]=o,i[r+2]=null==c?a+l:l,t+=3,r+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o){let a=0;const s=o.spatialReference;t*=3,r*=3;for(let l=0;l<n;++l){const n=e[t],l=e[t+1],c=e[t+2],d=o.getElevation(n,l,c,s,"ground")??0;a+=d,i[r]=n,i[r+1]=l,i[r+2]=d,t+=3,r+=3}return a/n},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,a,s){let l=0;const c=s.calculateOffsetRenderUnits(a),d=s.featureExpressionInfoContext,p=o.spatialReference;t*=3,r*=3;for(let h=0;h<n;++h){const n=e[t],a=e[t+1],s=e[t+2],h=o.getElevation(n,a,s,p,"ground")??0;l+=h,i[r]=n,i[r+1]=a,i[r+2]=null==d?s+h+c:h+c,t+=3,r+=3}return l/n},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,a,s){let l=0;const c=s.calculateOffsetRenderUnits(a),d=s.featureExpressionInfoContext,p=o.spatialReference;t*=3,r*=3;for(let h=0;h<n;++h){const n=e[t],a=e[t+1],s=e[t+2],h=o.getElevation(n,a,s,p,"scene")??0;l+=h,i[r]=n,i[r+1]=a,i[r+2]=null==d?s+h+c:h+c,t+=3,r+=3}return l/n},requiresAlignment:()=>!0}},O=(0,o.vt)(),E=new T,b=(0,a.vt)()},41595:(e,t,i)=>{i.d(t,{KF:()=>f,MF:()=>u,VG:()=>d,g7:()=>h,gf:()=>p,o8:()=>l,q6:()=>c});var r=i(76460),n=i(50346),o=i(32535),a=i(98976);const s=()=>r.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function l(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function c(e,t,i,r){const o=e?.expression;if("string"!=typeof o)return null;const s=v(o);if(null!=s)return{cachedResult:s};const l=await(0,a.lw)();(0,n.Te)(i);const c=l.arcadeUtils,d=c.createSyntaxTree(o);return c.dependsOnView(d)?(null!=r&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(d),context:c.createExecContext(null,{sr:t}),modules:l}}}function d(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function p(e,t){if(null!=e&&!m(e)){if(!t||!e.arcade)return void s().errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=(0,o.wZ)(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function h(e){if(null!=e){if(m(e))return e.cachedResult;const t=e.arcade;let i=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof i&&(e.cachedResult=0,i=0),i}return 0}function u(e,t=!1){let i=e?.featureExpressionInfo;const r=i?.expression;return t||"0"===r||(i=null),i??null}const f={cachedResult:0};function m(e){return null!=e.cachedResult}function v(e){return"0"===e?0:null}},57662:(e,t,i)=>{var r,n,o;i.d(t,{O7:()=>n,Om:()=>r,sv:()=>o}),function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(r||(r={})),function(e){e[e.MapLayer=0]="MapLayer",e[e.ViewLayer=1]="ViewLayer",e[e.Outline=2]="Outline",e[e.SnappingHint=3]="SnappingHint"}(n||(n={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(o||(o={}))},80935:(e,t,i)=>{i.d(t,{R1:()=>a,aY:()=>n,cN:()=>o});var r=i(81284);class n{constructor(e,t=null,i=0){this.array=e,this.spatialReference=t,this.offset=i}}function o(e){return"array"in e}function a(e,t,i="ground"){if((0,r.v)(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(o(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,i)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,i)}},99443:(e,t,i)=>{i.d(t,{Cz:()=>n,DZ:()=>s,PV:()=>a,vO:()=>r});i(72900),i(93345),i(18316),i(96673);const r=64,n=r/2,o=n/5,a=r/o,s=.25},3838:(e,t,i)=>{i.d(t,{s:()=>d});var r=i(66763),n=i(5517),o=i(21390),a=i(60205),s=i(86955),l=i(66470);const c=8;function d(e,t){const i=e.vertex;i.uniforms.add(new o.m("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(l.r.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new n.t("vvSizeMinSize",(e=>e.vvSize.minSize)),new n.t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new n.t("vvSizeOffset",(e=>e.vvSize.offset)),new n.t("vvSizeFactor",(e=>e.vvSize.factor))),i.code.add(s.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(l.r.SIZE,"float"),i.code.add(s.H`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(l.r.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new a.x("vvOpacityValues",(e=>e.vvOpacity.values),c),new a.x("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),c)),i.code.add(s.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(s.H`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(r.A,t),e.attributes.add(l.r.COLORFEATUREATTRIBUTE,"float"),i.code.add(s.H`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(l.r.COLOR,"vec4"),i.code.add(s.H`vec4 getColor(){
return applyOpacity(color);
}`))}},56906:(e,t,i)=>{i.d(t,{q:()=>v,h:()=>g});var r=i(81449),n=i(3799),o=i(58350),a=i(23148),s=i(21390),l=i(86955),c=i(70367);i(14522),i(93345),i(18316),i(96673);function d(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function p(e){if(null==e)return 1;const t=d(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function h(e){return d(e).reduce(((e,t)=>Math.max(e,t)))}var u=i(43047),f=i(55855);const m=(0,f.vt)();function v(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(l.H`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(t.draped&&t.stipplePreferContinuous),{vertex:d,fragment:p}=e;p.include(r.W),t.draped||((0,n.yu)(d,t),d.uniforms.add(new a.U("worldToScreenPerDistanceRatio",(({camera:e})=>1/e.perScreenPixelRatio))).code.add(l.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),d.code.add(l.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${l.H.float(S)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),d.code.add(l.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),d.code.add(l.H`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),(0,n.Nz)(d),d.code.add(l.H`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),p.uniforms.add(new c.N("stipplePatternTexture",(e=>e.stippleTexture)),new s.m("stipplePatternSDFNormalizer",(e=>function(e){return e?(Math.floor(.5*(h(e)-1))+.5)/e.pixelRatio:1}(e.stipplePattern))),new s.m("stipplePatternPixelSizeInv",(e=>1/g(e)))),t.stippleOffColorEnabled&&p.uniforms.add(new o.E("stippleOffColor",(e=>function(e){return null==e?f.uY:4===e.length?e:(0,u.s)(m,e[0],e[1],e[2],1)}(e.stippleOffColor)))),p.code.add(l.H`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),p.code.add(l.H`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${(0,l.If)(!t.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function g(e){const t=e.stipplePattern;return t?p(e.stipplePattern)/t.pixelRatio:1}const S=.4},17698:(e,t,i)=>{i.d(t,{r:()=>l});var r=i(99443),n=i(3799),o=i(23148),a=i(86955),s=i(50125);function l(e,t){const i=e.vertex;(0,n.Nz)(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",r.PV).code.add(a.H`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===s.lM.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new o.U("perRenderPixelRatio",(e=>e.camera.perRenderPixelRatio))),i.code.add(a.H`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}},97583:(e,t,i)=>{i.d(t,{g:()=>g});i(81806);var r=i(90632),n=i(20664),o=i(9392),a=i(55855),s=i(45308),l=i(50468),c=i(87634),d=i(17345),p=i(75507),h=i(37046),u=i(67737),f=i(66470),m=i(8918),v=i(425);class g{constructor(e){this._originSR=e,this._rootOriginId="root/"+(0,r.c)(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=u.Q.rootOrigin;if(null!=t)return this._origins.set(this._rootOriginId,(0,p.f)(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const i=(0,p.f)(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,i),i}const i=this._gridSize,r=Math.round(e[0]/i),o=Math.round(e[1]/i),a=Math.round(e[2]/i),s=`${r}/${o}/${a}`;let l=this._origins.get(s);const c=.5*i;if((0,n.d)(S,e,t.vec3),S[0]=Math.abs(S[0]),S[1]=Math.abs(S[1]),S[2]=Math.abs(S[2]),S[0]<c&&S[1]<c&&S[2]<c){if(l){const t=Math.max(...S);if((0,n.d)(S,e,l.vec3),S[0]=Math.abs(S[0]),S[1]=Math.abs(S[1]),S[2]=Math.abs(S[2]),Math.max(...S)<t)return l}return t}return l||(l=(0,p.f)(r*i,o*i,a*i,s),this._origins.set(s,l)),l}_drawOriginBox(e,t=(0,a.fA)(1,1,0,1)){const i=window.view,r=i._stage,n=t.toString();if(!this._objects.has(n)){this._material=new v.W({width:2,color:t}),r.add(this._material);const e=new m.x(r,{pickable:!1}),i=new h.B({castShadow:!1});r.add(i),e.add(i),this._objects.set(n,i)}const o=this._objects.get(n),p=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],u=p.length,g=new Array(3*u),S=new Array,_=.5*this._gridSize;for(let a=0;a<u;a++)g[3*a]=e[0]+(1&p[a]?_:-_),g[3*a+1]=e[1]+(2&p[a]?_:-_),g[3*a+2]=e[2]+(4&p[a]?_:-_),a>0&&S.push(a-1,a);(0,s.projectBuffer)(g,this._originSR,0,g,i.renderSpatialReference,0,u);const T=new d.V(this._material,[[f.r.POSITION,new l.n(g,S,3,!0)]],null,c.X.Line);r.add(T),o.addGeometry(T)}get test(){}}const S=(0,o.vt)()},75507:(e,t,i)=>{i.d(t,{f:()=>o});var r=i(9392);class n{constructor(e,t){this.vec3=e,this.id=t}}function o(e,t,i,o){return new n((0,r.fA)(e,t,i),o)}},37046:(e,t,i)=>{i.d(t,{B:()=>v});i(81806);var r=i(34761),n=i(13191),o=i(20664),a=i(9392),s=i(78315),l=i(94966),c=i(83490),d=i(73146),p=i(87634),h=i(35416),u=i(86994),f=i(66470),m=i(68967);class v extends d.J{get geometries(){return this._geometries}get transformation(){return this._transformation??n.zK}set transformation(e){this._transformation=(0,r.C)(this._transformation??(0,n.vt)(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?(0,r.C)(this._shaderTransformation??(0,n.vt)(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=p.X.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new g),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){(0,u.vA)(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),(0,f.b)(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new h.p;for(const t of this._geometries)t.occludees=(0,m.Ci)(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=(0,m.PC)(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new h.h(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===c.Mg.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return(0,r.lw)(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=(0,n.vt)()){return(0,r.lw)(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new S,this._validateBoundingVolume(this._bvWorldSpace,b.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new S,this._validateBoundingVolume(this._bvObjectSpace,b.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===b.ObjectSpace;for(const r of this._geometries){const t=r.boundingInfo;t&&_(t,e,i?r.transformation:this.getCombinedShaderTransformation(r))}(0,o.m)((0,s.a)(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const t=r.boundingInfo;if(null==t)continue;const n=i?r.transformation:this.getCombinedShaderTransformation(r),a=(0,l.hG)(n);(0,o.t)(E,t.center,n);const c=(0,o.j)(E,(0,s.a)(e.bounds)),d=t.radius*a;e.bounds[3]=Math.max(e.bounds[3],c+d)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}}class g{constructor(){this.min=(0,a.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=(0,a.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class S extends g{constructor(){super(...arguments),this.bounds=(0,s.c)()}}function _(e,t,i){const n=e.bbMin,a=e.bbMax;if((0,r.tZ)(i)){const e=(0,o.i)(T,i[12],i[13],i[14]);(0,o.g)(y,n,e),(0,o.g)(O,a,e);for(let i=0;i<3;++i)t.min[i]=Math.min(t.min[i],y[i]),t.max[i]=Math.max(t.max[i],O[i])}else if((0,o.t)(y,n,i),(0,o.p)(n,a))for(let r=0;r<3;++r)t.min[r]=Math.min(t.min[r],y[r]),t.max[r]=Math.max(t.max[r],y[r]);else{(0,o.t)(O,a,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],y[e],O[e]),t.max[e]=Math.max(t.max[e],y[e],O[e]);for(let e=0;e<3;++e){(0,o.c)(y,n),(0,o.c)(O,a),y[e]=a[e],O[e]=n[e],(0,o.t)(y,y,i),(0,o.t)(O,O,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],y[e],O[e]),t.max[e]=Math.max(t.max[e],y[e],O[e])}}}const T=(0,a.vt)(),y=(0,a.vt)(),O=(0,a.vt)(),E=(0,a.vt)();var b;!function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"}(b||(b={}))},44513:(e,t,i)=>{var r;i.d(t,{q:()=>r}),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(r||(r={}))},8918:(e,t,i)=>{i.d(t,{x:()=>h});var r=i(54099),n=i(88321),o=i(30726),a=i(30015),s=i(73146),l=i(87634);const c=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var d=i(94536),p=i(44513);class h extends s.J{constructor(e,t,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=l.X.Layer,this.events=new r.A,this.visible=!0,this.sliceable=!1,this._objectsAdded=new a.A,this._handles=new n.A,this._objects=new a.A,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??p.q.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const r of c)this._handles.add(this.events.on(r,(t=>e.handleEvent(r,t))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),null!=this._octree&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),null!=this._octree&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),null!=this._octree){for(let e=0;e<t.length;)this._objectsAdded.removeUnordered(t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}}sync(){this.updatePolicy!==p.q.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new d.A((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,o.pR)(this._octree),this._objectsAdded.clear()}}},67737:(e,t,i)=>{i.d(t,{G:()=>r,Q:()=>n});const r={stableRendering:!1},n={rootOrigin:null}},425:(e,t,i)=>{i.d(t,{W:()=>z});var r=i(76460),n=i(15941),o=i(76931),a=i(19555),s=i(20664),l=i(9392),c=i(55855),d=i(4763),p=i(44230),h=i(13927),u=i(48549),f=i(34981),m=i(61785),v=i(59696),g=i(45463),S=i(77730),_=i(86994),T=i(66470),y=i(93684),O=i(50125),E=i(14623),b=(i(81806),i(16506)),A=i(59246),R=i(72001),x=i(60322),C=i(96643),D=i(93345),L=i(57162);class I extends A.w{constructor(e,t){super(e,t,new b.$(E.R,(()=>i.e(61721).then(i.bind(i,61721)))),N),this.primitiveType=t.wireframe?D.WR.LINES:D.WR.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:n,hasPolygonOffset:o}=e,a=i===R.Y.NONE,s=i===R.Y.FrontFace;return(0,L.Ey)({blending:(0,f.RN)(r)?(0,x.Yf)(i):null,depthTest:{func:(0,x.K_)(i)},depthWrite:(0,x.z5)(e),drawBuffers:r===f.V.Depth?{buffers:[D.Hr.NONE]}:(0,x.m6)(i,r),colorWrite:L.kn,stencilWrite:n?C.v0:null,stencilTest:n?t?C.a9:C.qh:null,polygonOffset:a||s?o?P:null:x.SE})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?P:null;this._occluderPipelineTransparent=(0,L.Ey)({blending:L.Ky,polygonOffset:t,depthTest:C.sf,depthWrite:null,colorWrite:L.kn,stencilWrite:null,stencilTest:C.mK,drawBuffers:e.output===f.V.Depth?{buffers:[D.Hr.NONE]}:null}),this._occluderPipelineOpaque=(0,L.Ey)({blending:L.Ky,polygonOffset:t,depthTest:C.sf,depthWrite:null,colorWrite:L.kn,stencilWrite:C.r8,stencilTest:C.I$,drawBuffers:e.output===f.V.Depth?{buffers:[D.Hr.NONE]}:null}),this._occluderPipelineMaskWrite=(0,L.Ey)({blending:null,polygonOffset:t,depthTest:C.m,depthWrite:null,colorWrite:null,stencilWrite:C.v0,stencilTest:C.a9,drawBuffers:e.output===f.V.Depth?{buffers:[D.Hr.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case S.N.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case S.N.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const P={factor:0,units:-4},N=new Map([[T.r.POSITION,0],[T.r.PREVPOSITION,1],[T.r.NEXTPOSITION,2],[T.r.SUBDIVISIONFACTOR,3],[T.r.UV0,4],[T.r.COLOR,5],[T.r.COLORFEATUREATTRIBUTE,5],[T.r.SIZE,6],[T.r.SIZEFEATUREATTRIBUTE,6],[T.r.OPACITYFEATUREATTRIBUTE,7],[T.r.OBJECTANDLAYERIDCOLOR,8]]);var w,W=i(46259),U=i(75569);!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(w||(w={}));class z extends g.im{constructor(e){super(e,j),this._configuration=new W.Q,this.vertexAttributeLocations=N,this.produces=new Map([[S.N.OPAQUE_MATERIAL,e=>(0,f.CL)(e)||(0,f.RN)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[S.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,f.eh)(e)],[S.N.OCCLUDER_MATERIAL,e=>(0,f.T2)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[S.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,f.T2)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[S.N.TRANSPARENT_MATERIAL,e=>(0,f.RN)(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==g.m$.OccludeAndTransparentStencil],[S.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,f.RN)(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==g.m$.OccludeAndTransparentStencil],[S.N.DRAPED_MATERIAL,e=>(0,f.i3)(e)]])}getConfiguration(e,t){this._configuration.output=e,this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===S.N.DRAPED_MATERIAL;const i=null!=this.parameters.stipplePattern&&e!==f.V.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&function(e){return e.anchor===O.kJ.Tip&&e.hideOnShortSegments&&"begin-end"===e.placement&&e.worldSpace}(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,f.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=U.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>U.Q}intersectDraped({attributes:e,screenToWorldRatio:t},i,r,o,a,s){if(!r.options.selectionMode)return;const l=e.get(T.r.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const t=e.get(T.r.SIZEFEATUREATTRIBUTE).data[0];c*=(0,n.qE)(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else l&&(c*=l.data[0]);const d=o[0],p=o[1],h=(c/2+4)*t;let u=Number.MAX_VALUE,f=0;const m=e.get(T.r.POSITION).data,v=V(this.parameters,e)?m.length-2:m.length-5;for(let g=0;g<v;g+=3){const e=m[g],t=m[g+1],i=(g+3)%m.length,r=d-e,o=p-t,a=m[i]-e,s=m[i+1]-t,l=(0,n.qE)((a*r+s*o)/(a*a+s*s),0,1),c=a*l-r,h=s*l-o,v=c*c+h*h;v<u&&(u=v,f=g/3)}u<h*h&&a(s.dist,s.normal,f,!1)}intersect(e,t,i,o,l,c){if(!i.options.selectionMode||!e.visible)return;if(!(0,_.zH)(t))return void r.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const u=e.attributes,f=u.get(T.r.POSITION).data;let m=this.parameters.width;if(this.parameters.vvSize){const e=u.get(T.r.SIZEFEATUREATTRIBUTE).data[0];m*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else u.has(T.r.SIZE)&&(m*=u.get(T.r.SIZE).data[0]);const v=i.camera,g=$;(0,a.C)(g,i.point);const S=m*v.pixelRatio/2+4*v.pixelRatio;(0,s.i)(re[0],g[0]-S,g[1]+S,0),(0,s.i)(re[1],g[0]+S,g[1]+S,0),(0,s.i)(re[2],g[0]+S,g[1]-S,0),(0,s.i)(re[3],g[0]-S,g[1]-S,0);for(let r=0;r<4;r++)if(!v.unprojectFromRenderScreen(re[r],ne[r]))return;(0,h.Cr)(v.eye,ne[0],ne[1],oe),(0,h.Cr)(v.eye,ne[1],ne[2],ae),(0,h.Cr)(v.eye,ne[2],ne[3],se),(0,h.Cr)(v.eye,ne[3],ne[0],le);let y=Number.MAX_VALUE,O=0;const E=V(this.parameters,u)?f.length-2:f.length-5;for(let r=0;r<E;r+=3){B[0]=f[r]+t[12],B[1]=f[r+1]+t[13],B[2]=f[r+2]+t[14];const e=(r+3)%f.length;if(k[0]=f[e]+t[12],k[1]=f[e+1]+t[13],k[2]=f[e+2]+t[14],(0,h.mN)(oe,B)<0&&(0,h.mN)(oe,k)<0||(0,h.mN)(ae,B)<0&&(0,h.mN)(ae,k)<0||(0,h.mN)(se,B)<0&&(0,h.mN)(se,k)<0||(0,h.mN)(le,B)<0&&(0,h.mN)(le,k)<0)continue;if(v.projectToRenderScreen(B,Z),v.projectToRenderScreen(k,q),Z[2]<0&&q[2]>0){(0,s.d)(G,B,k);const e=v.frustum,t=-(0,h.mN)(e[d.FB.NEAR],B)/(0,s.f)(G,(0,h.Qj)(e[d.FB.NEAR]));(0,s.h)(G,G,t),(0,s.g)(B,B,G),v.projectToRenderScreen(B,Z)}else if(Z[2]>0&&q[2]<0){(0,s.d)(G,k,B);const e=v.frustum,t=-(0,h.mN)(e[d.FB.NEAR],k)/(0,s.f)(G,(0,h.Qj)(e[d.FB.NEAR]));(0,s.h)(G,G,t),(0,s.g)(k,k,G),v.projectToRenderScreen(k,q)}else if(Z[2]<0&&q[2]<0)continue;Z[2]=0,q[2]=0;const i=(0,p.kb)((0,p.Cr)(Z,q,X),g);i<y&&(y=i,(0,s.c)(Y,B),(0,s.c)(Q,k),O=r/3)}const b=i.rayBegin,A=i.rayEnd;if(y<S*S){let e=Number.MAX_VALUE;if((0,p.ld)((0,p.Cr)(Y,Q,X),(0,p.Cr)(b,A,K),J)){(0,s.d)(J,J,b);const t=(0,s.l)(J);(0,s.h)(J,J,1/t),e=t/(0,s.j)(b,A)}c(e,J,O,!1)}}get _layout(){const e=(0,u.BP)().vec3f(T.r.POSITION).vec3f(T.r.PREVPOSITION).vec3f(T.r.NEXTPOSITION).f32(T.r.SUBDIVISIONFACTOR).vec2f(T.r.UV0);return this.parameters.vvSize?e.f32(T.r.SIZEFEATUREATTRIBUTE):e.f32(T.r.SIZE),this.parameters.vvColor?e.f32(T.r.COLORFEATUREATTRIBUTE):e.vec4f(T.r.COLOR),this.parameters.vvOpacity&&e.f32(T.r.OPACITYFEATUREATTRIBUTE),(0,m.E)()&&e.vec4u8(T.r.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new H(this._layout,this.parameters)}createGLMaterial(e){return new F(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class F extends v.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(I,e)}}class j extends y.S{constructor(){super(...arguments),this.width=0,this.color=c.Un,this.join="miter",this.cap=W.x.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class H{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=E.r+i}}_isClosed(e){return V(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.get(T.r.POSITION).indices.length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,r,n,o){const a=ee,l=te,c=ie,d=i.get(T.r.POSITION),p=d.indices,h=d.data.length/3,u=i.get(T.r.DISTANCETOSTART)?.data;p&&p.length!==2*(h-1)&&console.warn("RibbonLineMaterial does not support indices");const f=i.get(T.r.SIZEFEATUREATTRIBUTE)?.data[0]??i.get(T.r.SIZE)?.data[0]??1;let v=[1,1,1,1],g=0;const S=this.vertexBufferLayout.fields.has(T.r.COLORFEATUREATTRIBUTE);S?g=i.get(T.r.COLORFEATUREATTRIBUTE).data[0]:i.has(T.r.COLOR)&&(v=i.get(T.r.COLOR).data);const _=this.vertexBufferLayout.fields.has(T.r.OPACITYFEATUREATTRIBUTE),y=_?i.get(T.r.OPACITYFEATUREATTRIBUTE).data[0]:0,O=new Float32Array(n.buffer),E=(0,m.E)()?new Uint8Array(n.buffer):null,b=this.vertexBufferLayout.stride/4;let A=o*b;const R=A;let x=0;const C=u?(e,t,i)=>x=u[i]:(e,t,i)=>x+=(0,s.j)(e,t),D=(e,t,i,n,o,a,s)=>{if(O[A++]=t[0],O[A++]=t[1],O[A++]=t[2],O[A++]=e[0],O[A++]=e[1],O[A++]=e[2],O[A++]=i[0],O[A++]=i[1],O[A++]=i[2],O[A++]=n,O[A++]=s,O[A++]=o,O[A++]=f,S)O[A++]=g;else{const e=Math.min(4*a,v.length-4);O[A++]=v[e],O[A++]=v[e+1],O[A++]=v[e+2],O[A++]=v[e+3]}_&&(O[A++]=y),(0,m.E)()&&(r&&(E[4*A]=r[0],E[4*A+1]=r[1],E[4*A+2]=r[2],E[4*A+3]=r[3]),A++)};A+=b,(0,s.i)(l,d.data[0],d.data[1],d.data[2]),e&&(0,s.t)(l,l,e);const L=this._isClosed(i);if(L){const t=d.data.length-3;(0,s.i)(a,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,s.t)(a,a,e)}else(0,s.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,s.t)(c,c,e),D(l,l,c,1,w.LEFT_CAP_START,0,0),D(l,l,c,1,w.RIGHT_CAP_START,0,0),(0,s.c)(a,l),(0,s.c)(l,c);const I=L?0:1,P=L?h:h-1;for(let m=I;m<P;m++){const t=(m+1)%h*3;(0,s.i)(c,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,s.t)(c,c,e),C(a,l,m),D(a,l,c,0,w.LEFT_JOIN_END,m,x),D(a,l,c,0,w.RIGHT_JOIN_END,m,x);const i=this.numJoinSubdivisions;for(let e=0;e<i;++e){const t=(e+1)/(i+1);D(a,l,c,t,w.LEFT_JOIN_END,m,x),D(a,l,c,t,w.RIGHT_JOIN_END,m,x)}D(a,l,c,1,w.LEFT_JOIN_START,m,x),D(a,l,c,1,w.RIGHT_JOIN_START,m,x),(0,s.c)(a,l),(0,s.c)(l,c)}L?((0,s.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,s.t)(c,c,e),x=C(a,l,P),D(a,l,c,0,w.LEFT_JOIN_END,I,x),D(a,l,c,0,w.RIGHT_JOIN_END,I,x)):(x=C(a,l,P),D(a,l,l,0,w.LEFT_CAP_END,P,x),D(a,l,l,0,w.RIGHT_CAP_END,P,x)),M(O,R+b,O,R,b),A=M(O,A-b,O,A,b),this._parameters.wireframe&&this._addWireframeVertices(n,R,A,b)}_addWireframeVertices(e,t,i,r){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let a=0;const s=e=>a=M(o,e,n,a,r);for(let l=0;l<o.length-1;l+=2*r)s(l),s(l+2*r),s(l+1*r),s(l+2*r),s(l+1*r),s(l+3*r)}}function M(e,t,i,r,n){for(let o=0;o<n;o++)i[r++]=e[t++];return r}function V(e,t){return!!e.isClosed&&t.get(T.r.POSITION).indices.length>2}const B=(0,l.vt)(),k=(0,l.vt)(),G=(0,l.vt)(),J=(0,l.vt)(),$=(0,l.vt)(),Z=(0,o.r_)(),q=(0,o.r_)(),Y=(0,l.vt)(),Q=(0,l.vt)(),X=(0,p.vt)(),K=(0,p.vt)(),ee=(0,l.vt)(),te=(0,l.vt)(),ie=(0,l.vt)(),re=[(0,o.r_)(),(0,o.r_)(),(0,o.r_)(),(0,o.r_)()],ne=[(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)()],oe=(0,h.vt)(),ae=(0,h.vt)(),se=(0,h.vt)(),le=(0,h.vt)()},50125:(e,t,i)=>{i.d(t,{Dt:()=>d,kJ:()=>n,lM:()=>r});var r,n,o=i(35143),a=i(97808),s=i(42717),l=i(6485),c=i(94570);!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(n||(n={}));class d extends c.E{constructor(){super(...arguments),this.space=r.Screen,this.anchor=n.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=a.I.None,this.emissionSource=s.ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===r.Draped}}(0,o._)([(0,l.W)({count:r.COUNT})],d.prototype,"space",void 0),(0,o._)([(0,l.W)({count:n.COUNT})],d.prototype,"anchor",void 0),(0,o._)([(0,l.W)()],d.prototype,"occluder",void 0),(0,o._)([(0,l.W)()],d.prototype,"writeDepth",void 0),(0,o._)([(0,l.W)()],d.prototype,"hideOnShortSegments",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasCap",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasTip",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvSize",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvColor",void 0),(0,o._)([(0,l.W)()],d.prototype,"vvOpacity",void 0),(0,o._)([(0,l.W)()],d.prototype,"hasOccludees",void 0),(0,o._)([(0,l.W)()],d.prototype,"terrainDepthTest",void 0),(0,o._)([(0,l.W)()],d.prototype,"cullAboveTerrain",void 0)},46259:(e,t,i)=>{i.d(t,{Q:()=>c,x:()=>r});var r,n=i(35143),o=i(97808),a=i(42717),s=i(6485),l=i(94570);!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(r||(r={}));class c extends l.E{constructor(){super(...arguments),this.capType=r.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=o.I.None,this.emissionSource=a.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}(0,n._)([(0,s.W)({count:r.COUNT})],c.prototype,"capType",void 0),(0,n._)([(0,s.W)()],c.prototype,"hasPolygonOffset",void 0),(0,n._)([(0,s.W)()],c.prototype,"writeDepth",void 0),(0,n._)([(0,s.W)()],c.prototype,"draped",void 0),(0,n._)([(0,s.W)()],c.prototype,"stippleEnabled",void 0),(0,n._)([(0,s.W)()],c.prototype,"stippleOffColorEnabled",void 0),(0,n._)([(0,s.W)()],c.prototype,"stipplePreferContinuous",void 0),(0,n._)([(0,s.W)()],c.prototype,"roundJoins",void 0),(0,n._)([(0,s.W)()],c.prototype,"applyMarkerOffset",void 0),(0,n._)([(0,s.W)()],c.prototype,"vvSize",void 0),(0,n._)([(0,s.W)()],c.prototype,"vvColor",void 0),(0,n._)([(0,s.W)()],c.prototype,"vvOpacity",void 0),(0,n._)([(0,s.W)()],c.prototype,"falloffEnabled",void 0),(0,n._)([(0,s.W)()],c.prototype,"innerColorEnabled",void 0),(0,n._)([(0,s.W)()],c.prototype,"hasOccludees",void 0),(0,n._)([(0,s.W)()],c.prototype,"occluder",void 0),(0,n._)([(0,s.W)()],c.prototype,"terrainDepthTest",void 0),(0,n._)([(0,s.W)()],c.prototype,"cullAboveTerrain",void 0),(0,n._)([(0,s.W)()],c.prototype,"wireframe",void 0),(0,n._)([(0,s.W)()],c.prototype,"discardInvisibleFragments",void 0),(0,n._)([(0,s.W)()],c.prototype,"objectAndLayerIdColorInstanced",void 0)}}]);
//# sourceMappingURL=81361.c14ff929.chunk.js.map