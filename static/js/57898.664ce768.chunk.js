"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[57898],{81284:(e,t,n)=>{function r(e){return"point"===e.type}n.d(t,{v:()=>r})},36423:(e,t,n)=>{n.d(t,{$2:()=>T,$C:()=>y,Hj:()=>M,Mh:()=>P,W$:()=>O,pW:()=>x,t8:()=>A,vY:()=>S});var r=n(31633),o=n(34761),s=n(13191),a=n(9392),i=n(43047),l=n(55855),c=n(9956),u=n(42294),f=n(2413),h=n(205),d=n(5262),p=n(99773),v=n(18117),g=n(32535);function O(e,t){if("point"===e.type)return m(e,t,!1);if((0,g.gr)(e))switch(e.type){case"extent":return m(e.center,t,!1);case"polygon":return m(e.centroid,t,!1);case"polyline":return m(w(e),t,!0);case"mesh":return m((0,p.MW)(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return m(function(e){return(0,v.T)(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),null!=e.zmin&&null!=e.zmax&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}(e),t,!0);case"polygon":return m(function(e){const t=e.rings[0];if(!t||0===t.length)return null;const n=(0,h.S8)(e.rings,!!e.hasZ);return(0,v.T)(n[0],n[1],n[2],e.spatialReference)}(e),t,!0);case"polyline":return m(w(e),t,!0);case"multipoint":return}}function w(e){const t=e.paths[0];if(!t||0===t.length)return null;const n=(0,d.$H)(t,(0,d.Yl)(t)/2);return(0,v.T)(n[0],n[1],n[2],e.spatialReference)}function m(e,t,n){const r=n?e:(0,g.EL)(e);return t&&e?(0,c.projectPoint)(e,r,t)?r:null:r}function A(e,t,n,r=0){if(e){t||(t=(0,f.vt)());const o=e;let s=.5*o.width*(n-1),a=.5*o.height*(n-1);return o.width<1e-7*o.height?s+=a/20:o.height<1e-7*o.width&&(a+=s/20),(0,i.s)(t,o.xmin-s-r,o.ymin-a-r,o.xmax+s+r,o.ymax+a+r),t}return null}function y(e,t,n=null){const r=(0,l.o8)(l.Un);return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!=t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),n&&(r[0]*=n,r[1]*=n,r[2]*=n,r[3]*=n),r}function x(e=a.Un,t,n,r=1){const o=new Array(3);if(null==t||null==n)o[0]=1,o[1]=1,o[2]=1;else{let r,s=0;for(let a=2;a>=0;a--){const i=e[a],l=null!=i,c=0===a&&!r&&!l,u=n[a];let f;"symbol-value"===i||c?f=0!==u?t[a]/u:1:l&&"proportional"!==i&&isFinite(i)&&(f=0!==u?i/u:1),null!=f&&(o[a]=f,r=f,s=Math.max(s,Math.abs(f)))}for(let e=2;e>=0;e--)null==o[e]?o[e]=r:0===o[e]&&(o[e]=.001*s)}for(let s=2;s>=0;s--)o[s]/=r;return(0,a.ci)(o)}function M(e){return P(function(e){return null!=e.isPrimitive}(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function P(e){const t=e=>null==e||e>=0;return Array.isArray(e)?e.every(t):t(e)}function T(e,t,n,r=(0,s.vt)()){return e&&(0,o.Qr)(r,r,-e/180*Math.PI),t&&(0,o.eL)(r,r,t/180*Math.PI),n&&(0,o.Z8)(r,r,n/180*Math.PI),r}function S(e,t,n){if(null!=n.minDemResolution)return n.minDemResolution;const o=(0,r.GA)(t),s=(0,u.VL)(e)*o,a=(0,u.yr)(e)*o,i=(0,u.uJ)(e)*(t.isGeographic?1:o);return 0===s&&0===a&&0===i?n.minDemResolutionForPoints:.01*Math.max(s,a,i)}},72900:(e,t,n)=>{n.d(t,{CN:()=>l,I9:()=>h,PY:()=>c,Q_:()=>i,ny:()=>u,sZ:()=>f});n(81806);var r=n(14522),o=n(55855),s=n(76632),a=n(93345);const i=128,l=.5,c=(0,o.CN)(l/2,l/2,1-l/2,1-l/2);function u(e){return"cross"===e||"x"===e}function f(e,t=i,n=t*l,r=0){const{data:o,parameters:a}=h(e,t,n,r);return new s.g(o,a)}function h(e,t=i,n=t*l,r=0){return{data:d(e,t,n,r),parameters:{mipmap:!1,wrap:{s:a.pF.CLAMP_TO_EDGE,t:a.pF.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0}}}function d(e,t=i,n=t*l,r=0){switch(e){case"circle":default:return function(e,t){const n=e/2-.5;return w(e,g(n,n,t/2))}(t,n);case"square":return function(e,t){return p(e,t,!1)}(t,n);case"cross":return function(e,t,n=0){return v(e,t,!1,n)}(t,n,r);case"x":return function(e,t,n=0){return v(e,t,!0,n)}(t,n,r);case"kite":return function(e,t){return p(e,t,!0)}(t,n);case"triangle":return function(e,t){return w(e,O(e/2,t,t/2))}(t,n);case"arrow":return function(e,t){const n=t,r=t/2,o=e/2,s=.8*n,a=g(o,(e-t)/2-s,Math.sqrt(s*s+r*r)),i=O(o,n,r);return w(e,((e,t)=>Math.max(i(e,t),-a(e,t))))}(t,n)}}function p(e,t,n){return n&&(t/=Math.SQRT2),w(e,((r,o)=>{let s=r-.5*e+.25,a=.5*e-o-.75;if(n){const e=(s+a)/Math.SQRT2;a=(a-s)/Math.SQRT2,s=e}return Math.max(Math.abs(s),Math.abs(a))-.5*t}))}function v(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);const o=.5*t;return w(e,((t,s)=>{let a,i=t-.5*e,l=.5*e-s-1;if(n){const e=(i+l)/Math.SQRT2;l=(l-i)/Math.SQRT2,i=e}return i=Math.abs(i),l=Math.abs(l),a=i>l?i>o?Math.sqrt((i-o)*(i-o)+l*l):l:l>o?Math.sqrt(i*i+(l-o)*(l-o)):i,a-=r/2,a}))}function g(e,t,n){return(r,o)=>{const s=r-e,a=o-t;return Math.sqrt(s*s+a*a)-n}}function O(e,t,n){const r=Math.sqrt(t*t+n*n);return(o,s)=>{const a=Math.abs(o-e)-n,i=s-e+t/2+.75,l=(t*a+n*i)/r,c=-i;return Math.max(l,c)}}function w(e,t){const n=new Uint8Array(4*e*e);for(let o=0;o<e;o++)for(let s=0;s<e;s++){const a=s+e*o;let i=t(s,o);i=i/e+.5,(0,r.U)(i,n,4*a)}return n}},98720:(e,t,n)=>{n.d(t,{K:()=>s});var r=n(67582),o=n(86955);function s(e){e.uniforms.add(new r.o("alignPixelEnabled",(e=>e.alignPixelEnabled))),e.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(o.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}},40318:(e,t,n)=>{n.d(t,{Q:()=>h,R:()=>f});var r=n(25530),o=n(69817),s=n(42451),a=n(51596),i=n(23148),l=n(21390),c=n(86955),u=n(66470);const f=.5;function h(e,t){e.include(o.Y6),e.attributes.add(u.r.POSITION,"vec3"),e.attributes.add(u.r.NORMAL,"vec3"),e.attributes.add(u.r.CENTEROFFSETANDDISTANCE,"vec4");const n=e.vertex;(0,s.NB)(n,t),(0,s.yu)(n,t),n.uniforms.add(new a.I("viewport",(e=>e.camera.fullViewport)),new l.m("polygonOffset",(e=>e.shaderPolygonOffset)),new i.U("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),t.hasVerticalOffset&&(0,r.V)(n),n.code.add(c.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(c.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?c.H.float(0):c.H`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||(0,s.S7)(n),t.draped||(n.uniforms.add(new i.U("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),n.code.add(c.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.H.float(f)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&(0,s.Nz)(n),t.hasScreenSizePerspective&&(0,o.OH)(n),n.code.add(c.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?c.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":c.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},98521:(e,t,n)=>{var r;n.d(t,{D:()=>r}),function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(r||(r={}))},62374:(e,t,n)=>{n.d(t,{y:()=>c});var r=n(98720),o=n(98521),s=n(51596),a=n(23148),i=n(86955),l=n(4653);function c(e){e.vertex.uniforms.add(new a.U("renderTransparentlyOccludedHUD",(e=>e.hudRenderStyle===o.D.Occluded?1:e.hudRenderStyle===o.D.NotOccluded?0:.75)),new s.I("viewport",(e=>e.camera.fullViewport)),new l.x("hudVisibilityTexture",(e=>e.hudVisibility?.getTexture()))),e.vertex.include(r.K),e.vertex.code.add(i.H`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}},81449:(e,t,n)=>{n.d(t,{W:()=>o});var r=n(86955);function o(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
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
}`),e.code.add(r.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(r.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}},20123:(e,t,n)=>{n.d(t,{V:()=>s});var r=n(69728),o=n(87003);class s extends o.n{constructor(e,t){super(e,"vec4",r.c.Draw,((n,r,o)=>n.setUniform4fv(e,t(r,o))))}}},62577:(e,t,n)=>{n.d(t,{zC:()=>oe,C1:()=>P,EE:()=>J,YG:()=>W,nW:()=>Z,td:()=>R,_B:()=>ne,Nq:()=>ee,DJ:()=>k,Y6:()=>Y,uX:()=>$,Z8:()=>te,CM:()=>q,Gj:()=>Q,Ho:()=>B,Nb:()=>K,Xl:()=>ae,xh:()=>re});var r,o=n(20664),s=n(83755),a=n(9392),i=n(44815),l=n(75002),c=n(38496),u=n(13927),f=n(95925),h=n(50468);!function(e){e.length=function(e,t){const n=e[t],r=e[t+1],o=e[t+2];return Math.sqrt(n*n+r*r+o*o)},e.normalize=function(e,t){const n=e[t],r=e[t+1],o=e[t+2],s=1/Math.sqrt(n*n+r*r+o*o);e[t]*=s,e[t+1]*=s,e[t+2]*=s},e.scale=function(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n},e.add=function(e,t,n,r,o,s=t){(o=o||e)[s]=e[t]+n[r],o[s+1]=e[t+1]+n[r+1],o[s+2]=e[t+2]+n[r+2]},e.subtract=function(e,t,n,r,o,s=t){(o=o||e)[s]=e[t]-n[r],o[s+1]=e[t+1]-n[r+1],o[s+2]=e[t+2]-n[r+2]}}(r||(r={}));var d=n(17345),p=n(86994),v=n(66470),g=n(34017);const O=r,w=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],m=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],A=[0,0,1,0,1,1,0,1],y=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],x=new Array(36);for(let ce=0;ce<6;ce++)for(let e=0;e<6;e++)x[6*ce+e]=ce;const M=new Array(36);for(let ce=0;ce<6;ce++)M[6*ce]=0,M[6*ce+1]=1,M[6*ce+2]=2,M[6*ce+3]=2,M[6*ce+4]=3,M[6*ce+5]=0;function P(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(24);for(let r=0;r<8;r++)n[3*r]=w[r][0]*t[0],n[3*r+1]=w[r][1]*t[1],n[3*r+2]=w[r][2]*t[2];return new d.V(e,[[v.r.POSITION,new h.n(n,y,3,!0)],[v.r.NORMAL,new h.n(m,x,3)],[v.r.UV0,new h.n(A,M,2)]])}const T=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],S=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],b=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],I=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function R(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(18);for(let r=0;r<6;r++)n[3*r]=T[r][0]*t[0],n[3*r+1]=T[r][1]*t[1],n[3*r+2]=T[r][2]*t[2];return new d.V(e,[[v.r.POSITION,new h.n(n,b,3,!0)],[v.r.NORMAL,new h.n(S,I,3)]])}const C=(0,s.fA)(-.5,0,-.5),V=(0,s.fA)(.5,0,-.5),N=(0,s.fA)(0,0,.5),D=(0,s.fA)(0,.5,0),L=(0,s.vt)(),z=(0,s.vt)(),E=(0,s.vt)(),H=(0,s.vt)(),U=(0,s.vt)();(0,o.d)(L,C,D),(0,o.d)(z,C,V),(0,o.h)(E,L,z),(0,o.n)(E,E),(0,o.d)(L,V,D),(0,o.d)(z,V,N),(0,o.h)(H,L,z),(0,o.n)(H,H),(0,o.d)(L,N,D),(0,o.d)(z,N,C),(0,o.h)(U,L,z),(0,o.n)(U,U);const F=[C,V,N,D],G=[0,-1,0,E[0],E[1],E[2],H[0],H[1],H[2],U[0],U[1],U[2]],j=[0,1,2,3,1,0,3,2,1,3,0,2],_=[0,0,0,1,1,1,2,2,2,3,3,3];function B(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(12);for(let r=0;r<4;r++)n[3*r]=F[r][0]*t[0],n[3*r+1]=F[r][1]*t[1],n[3*r+2]=F[r][2]*t[2];return new d.V(e,[[v.r.POSITION,new h.n(n,j,3,!0)],[v.r.NORMAL,new h.n(G,_,3)]])}function q(e,t,n,r,o={uv:!0}){const s=-Math.PI,a=2*Math.PI,i=-Math.PI/2,u=Math.PI,f=Math.max(3,Math.floor(n)),p=Math.max(2,Math.floor(r)),g=(f+1)*(p+1),O=(0,l.oe)(3*g),w=(0,l.oe)(3*g),m=(0,l.oe)(2*g),A=[];let y=0;for(let l=0;l<=p;l++){const e=[],n=l/p,r=i+n*u,o=Math.cos(r);for(let i=0;i<=f;i++){const l=i/f,c=s+l*a,u=Math.cos(c)*o,h=Math.sin(r),d=-Math.sin(c)*o;O[3*y]=u*t,O[3*y+1]=h*t,O[3*y+2]=d*t,w[3*y]=u,w[3*y+1]=h,w[3*y+2]=d,m[2*y]=l,m[2*y+1]=n,e.push(y),++y}A.push(e)}const x=new Array;for(let l=0;l<p;l++)for(let e=0;e<f;e++){const t=A[l][e],n=A[l][e+1],r=A[l+1][e+1],o=A[l+1][e];0===l?(x.push(t),x.push(r),x.push(o)):l===p-1?(x.push(t),x.push(n),x.push(r)):(x.push(t),x.push(n),x.push(r),x.push(r),x.push(o),x.push(t))}const M=[[v.r.POSITION,new h.n(O,x,3,!0)],[v.r.NORMAL,new h.n(w,x,3,!0)]];return o.uv&&M.push([v.r.UV0,new h.n(m,x,2,!0)]),o.offset&&(M[0][0]=v.r.OFFSET,M.push([v.r.POSITION,new h.n(Float64Array.from(o.offset),(0,c.EH)(x.length),3,!0)])),new d.V(e,M)}function $(e,t,n,r){const o=Y(t,n,r);return new d.V(e,o)}function Y(e,t,n){const r=e;let o,s;if(n)o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const e=r*(1+Math.sqrt(5))/2;o=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let l=0;l<o.length;l+=3)O.scale(o,l,e/O.length(o,l));let a={};function i(t,n){t>n&&([t,n]=[n,t]);const r=t.toString()+"."+n.toString();if(a[r])return a[r];let s=o.length;return o.length+=3,O.add(o,3*t,o,3*n,o,s),O.scale(o,s,e/O.length(o,s)),s/=3,a[r]=s,s}for(let l=0;l<t;l++){const e=s.length,t=new Array(4*e);for(let n=0;n<e;n+=3){const e=s[n],r=s[n+1],o=s[n+2],a=i(e,r),l=i(r,o),c=i(o,e),u=4*n;t[u]=e,t[u+1]=a,t[u+2]=c,t[u+3]=r,t[u+4]=l,t[u+5]=a,t[u+6]=o,t[u+7]=c,t[u+8]=l,t[u+9]=a,t[u+10]=l,t[u+11]=c}s=t,a={}}const c=(0,l.Wz)(o);for(let l=0;l<c.length;l+=3)O.normalize(c,l);return[[v.r.POSITION,new h.n((0,l.Wz)(o),s,3,!0)],[v.r.NORMAL,new h.n(c,s,3,!0)]]}function k(e,{normal:t,position:n,color:r,rotation:o,size:s,centerOffsetAndDistance:i,uvi:l,featureAttribute:u,objectAndLayerIdColor:f=null}={}){const p=n?(0,a.o8)(n):(0,a.vt)(),O=t?(0,a.o8)(t):(0,a.fA)(0,0,1),w=r?[255*r[0],255*r[1],255*r[2],r.length>3?255*r[3]:255]:[255,255,255,255],m=null!=s&&2===s.length?s:[1,1],A=null!=o?[o]:[0],y=(0,c.EH)(1),x=[[v.r.POSITION,new h.n(p,y,3,!0)],[v.r.NORMAL,new h.n(O,y,3,!0)],[v.r.COLOR,new h.n(w,y,4,!0)],[v.r.SIZE,new h.n(m,y,2)],[v.r.ROTATION,new h.n(A,y,1,!0)]];if(l&&x.push([v.r.UVI,new h.n(l,y,l.length)]),null!=i){const e=[i[0],i[1],i[2],i[3]];x.push([v.r.CENTEROFFSETANDDISTANCE,new h.n(e,y,4)])}if(u){const e=[u[0],u[1],u[2],u[3]];x.push([v.r.FEATUREATTRIBUTE,new h.n(e,y,4)])}return new d.V(e,x,null,g.d.Point,f)}const X=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function Q(e,t=X){const n=new Array(12);for(let a=0;a<4;a++)for(let e=0;e<3;e++)n[3*a+e]=t[a][e];const r=[0,1,2,2,3,0],o=[0,0,0,0,0,0],s=[[v.r.POSITION,new h.n(n,r,3,!0)],[v.r.NORMAL,new h.n([0,0,1],o,3,!0)],[v.r.UV0,new h.n([0,0,1,0,1,1,0,1],r,2,!0)],[v.r.COLOR,new h.n([255,255,255,255],o,4,!0)]];return new d.V(e,s)}function W(e,t,n,r,o=!0,a=!0){let i=0;const c=t,u=e;let f=(0,s.fA)(0,i,0),d=(0,s.fA)(0,i+u,0),p=(0,s.fA)(0,-1,0),g=(0,s.fA)(0,1,0);r&&(i=u,d=(0,s.fA)(0,0,0),f=(0,s.fA)(0,i,0),p=(0,s.fA)(0,1,0),g=(0,s.fA)(0,-1,0));const O=[d,f],w=[p,g],m=n+2,A=Math.sqrt(u*u+c*c);if(r)for(let l=n-1;l>=0;l--){const e=l*(2*Math.PI/n),t=(0,s.fA)(Math.cos(e)*c,i,Math.sin(e)*c);O.push(t);const r=(0,s.fA)(u*Math.cos(e)/A,-c/A,u*Math.sin(e)/A);w.push(r)}else for(let l=0;l<n;l++){const e=l*(2*Math.PI/n),t=(0,s.fA)(Math.cos(e)*c,i,Math.sin(e)*c);O.push(t);const r=(0,s.fA)(u*Math.cos(e)/A,c/A,u*Math.sin(e)/A);w.push(r)}const y=new Array,x=new Array;if(o){for(let e=3;e<O.length;e++)y.push(1),y.push(e-1),y.push(e),x.push(0),x.push(0),x.push(0);y.push(O.length-1),y.push(2),y.push(1),x.push(0),x.push(0),x.push(0)}if(a){for(let e=3;e<O.length;e++)y.push(e),y.push(e-1),y.push(0),x.push(e),x.push(e-1),x.push(1);y.push(0),y.push(2),y.push(O.length-1),x.push(1),x.push(2),x.push(w.length-1)}const M=(0,l.oe)(3*m);for(let s=0;s<m;s++)M[3*s]=O[s][0],M[3*s+1]=O[s][1],M[3*s+2]=O[s][2];const P=(0,l.oe)(3*m);for(let s=0;s<m;s++)P[3*s]=w[s][0],P[3*s+1]=w[s][1],P[3*s+2]=w[s][2];return[[v.r.POSITION,new h.n(M,y,3,!0)],[v.r.NORMAL,new h.n(P,x,3,!0)]]}function J(e,t,n,r,o,s=!0,a=!0){return new d.V(e,W(t,n,r,o,s,a))}function Z(e,t,n,r,a,i,c){const u=a?(0,s.o8)(a):(0,s.fA)(1,0,0),f=i?(0,s.o8)(i):(0,s.fA)(0,0,0);c??=!0;const p=(0,s.vt)();(0,o.n)(p,u);const g=(0,s.vt)();(0,o.g)(g,p,Math.abs(t));const O=(0,s.vt)();(0,o.g)(O,g,-.5),(0,o.f)(O,O,f);const w=(0,s.fA)(0,1,0);Math.abs(1-(0,o.e)(p,w))<.2&&(0,o.i)(w,0,0,1);const m=(0,s.vt)();(0,o.h)(m,p,w),(0,o.n)(m,m),(0,o.h)(w,m,p);const A=2*r+(c?2:0),y=r+(c?2:0),x=(0,l.oe)(3*A),M=(0,l.oe)(3*y),P=(0,l.oe)(2*A),T=new Array(3*r*(c?4:2)),S=new Array(3*r*(c?4:2));c&&(x[3*(A-2)]=O[0],x[3*(A-2)+1]=O[1],x[3*(A-2)+2]=O[2],P[2*(A-2)]=0,P[2*(A-2)+1]=0,x[3*(A-1)]=x[3*(A-2)]+g[0],x[3*(A-1)+1]=x[3*(A-2)+1]+g[1],x[3*(A-1)+2]=x[3*(A-2)+2]+g[2],P[2*(A-1)]=1,P[2*(A-1)+1]=1,M[3*(y-2)]=-p[0],M[3*(y-2)+1]=-p[1],M[3*(y-2)+2]=-p[2],M[3*(y-1)]=p[0],M[3*(y-1)+1]=p[1],M[3*(y-1)+2]=p[2]);const b=(e,t,n)=>{T[e]=t,S[e]=n};let I=0;const R=(0,s.vt)(),C=(0,s.vt)();for(let s=0;s<r;s++){const e=s*(2*Math.PI/r);(0,o.g)(R,w,Math.sin(e)),(0,o.g)(C,m,Math.cos(e)),(0,o.f)(R,R,C),M[3*s]=R[0],M[3*s+1]=R[1],M[3*s+2]=R[2],(0,o.g)(R,R,n),(0,o.f)(R,R,O),x[3*s]=R[0],x[3*s+1]=R[1],x[3*s+2]=R[2],P[2*s]=s/r,P[2*s+1]=0,x[3*(s+r)]=x[3*s]+g[0],x[3*(s+r)+1]=x[3*s+1]+g[1],x[3*(s+r)+2]=x[3*s+2]+g[2],P[2*(s+r)]=s/r,P[2*s+1]=1;const t=(s+1)%r;b(I++,s,s),b(I++,s+r,s),b(I++,t,t),b(I++,t,t),b(I++,s+r,s),b(I++,t+r,t)}if(c){for(let e=0;e<r;e++){const t=(e+1)%r;b(I++,A-2,y-2),b(I++,e,y-2),b(I++,t,y-2)}for(let e=0;e<r;e++){const t=(e+1)%r;b(I++,e+r,y-1),b(I++,A-1,y-1),b(I++,t+r,y-1)}}const V=[[v.r.POSITION,new h.n(x,T,3,!0)],[v.r.NORMAL,new h.n(M,S,3,!0)],[v.r.UV0,new h.n(P,T,2,!0)]];return new d.V(e,V)}function K(e,t,n,r,o,s){r=r||10,o=null==o||o,(0,p.vA)(t.length>1);const a=[],i=[];for(let l=0;l<r;l++){a.push([0,-l-1,-(l+1)%r-1]);const e=l/r*2*Math.PI;i.push([Math.cos(e)*n,Math.sin(e)*n])}return ee(e,i,t,[[0,0,0]],a,o,s)}function ee(e,t,n,r,i,c,p=(0,s.fA)(0,0,0)){const g=t.length,O=(0,l.oe)(n.length*g*3+(6*r.length||0)),w=(0,l.oe)(n.length*g*3+(r?6:0)),m=new Array,A=new Array;let y=0,x=0;const M=(0,a.vt)(),P=(0,a.vt)(),T=(0,a.vt)(),S=(0,a.vt)(),b=(0,a.vt)(),I=(0,a.vt)(),R=(0,a.vt)(),C=(0,a.vt)(),V=(0,a.vt)(),N=(0,a.vt)(),D=(0,a.vt)(),L=(0,a.vt)(),z=(0,a.vt)(),E=(0,u.vt)();(0,o.i)(V,0,1,0),(0,o.d)(P,n[1],n[0]),(0,o.n)(P,P),c?((0,o.f)(C,n[0],p),(0,o.n)(T,C)):(0,o.i)(T,0,0,1),ae(P,T,V,V,b,T,ie),(0,o.c)(S,T),(0,o.c)(L,b);for(let s=0;s<r.length;s++)(0,o.g)(I,b,r[s][0]),(0,o.g)(C,T,r[s][2]),(0,o.f)(I,I,C),(0,o.f)(I,I,n[0]),O[y++]=I[0],O[y++]=I[1],O[y++]=I[2];w[x++]=-P[0],w[x++]=-P[1],w[x++]=-P[2];for(let o=0;o<i.length;o++)m.push(i[o][0]>0?i[o][0]:-i[o][0]-1+r.length),m.push(i[o][1]>0?i[o][1]:-i[o][1]-1+r.length),m.push(i[o][2]>0?i[o][2]:-i[o][2]-1+r.length),A.push(0),A.push(0),A.push(0);let H=r.length;const U=r.length-1;for(let s=0;s<n.length;s++){let e=!1;s>0&&((0,o.c)(M,P),s<n.length-1?((0,o.d)(P,n[s+1],n[s]),(0,o.n)(P,P)):e=!0,(0,o.f)(N,M,P),(0,o.n)(N,N),(0,o.f)(D,n[s-1],S),(0,u.O_)(n[s],N,E),(0,u.Ui)(E,(0,f.LV)(D,M),C)?((0,o.d)(C,C,n[s]),(0,o.n)(T,C),(0,o.h)(b,N,T),(0,o.n)(b,b)):ae(N,S,L,V,b,T,ie),(0,o.c)(S,T),(0,o.c)(L,b)),c&&((0,o.f)(C,n[s],p),(0,o.n)(z,C));for(let r=0;r<g;r++)if((0,o.g)(I,b,t[r][0]),(0,o.g)(C,T,t[r][1]),(0,o.f)(I,I,C),(0,o.n)(R,I),w[x++]=R[0],w[x++]=R[1],w[x++]=R[2],(0,o.f)(I,I,n[s]),O[y++]=I[0],O[y++]=I[1],O[y++]=I[2],!e){const e=(r+1)%g;m.push(H+r),m.push(H+g+r),m.push(H+e),m.push(H+e),m.push(H+g+r),m.push(H+g+e);for(let t=0;t<6;t++){const e=m.length-6;A.push(m[e+t]-U)}}H+=g}const F=n[n.length-1];for(let s=0;s<r.length;s++)(0,o.g)(I,b,r[s][0]),(0,o.g)(C,T,r[s][1]),(0,o.f)(I,I,C),(0,o.f)(I,I,F),O[y++]=I[0],O[y++]=I[1],O[y++]=I[2];const G=x/3;w[x++]=P[0],w[x++]=P[1],w[x++]=P[2];const j=H-g;for(let o=0;o<i.length;o++)m.push(i[o][0]>=0?H+i[o][0]:-i[o][0]-1+j),m.push(i[o][2]>=0?H+i[o][2]:-i[o][2]-1+j),m.push(i[o][1]>=0?H+i[o][1]:-i[o][1]-1+j),A.push(G),A.push(G),A.push(G);const _=[[v.r.POSITION,new h.n(O,m,3,!0)],[v.r.NORMAL,new h.n(w,A,3,!0)]];return new d.V(e,_)}function te(e,t,n,r){(0,p.vA)(t.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),(0,p.vA)(3===t[0].length,"createPolylineGeometry(): malformed vertex"),(0,p.vA)(null==n||n.length===t.length,"createPolylineGeometry: need same number of points and normals"),(0,p.vA)(null==n||3===n[0].length,"createPolylineGeometry(): malformed normal");const o=(0,i.jh)(3*t.length),s=new Array(2*(t.length-1));let a=0,u=0;for(let i=0;i<t.length;i++){for(let e=0;e<3;e++)o[a++]=t[i][e];i>0&&(s[u++]=i-1,s[u++]=i)}const f=[[v.r.POSITION,new h.n(o,s,3,!0)]];if(n){const e=(0,l.oe)(3*n.length);let r=0;for(let o=0;o<t.length;o++)for(let t=0;t<3;t++)e[r++]=n[o][t];f.push([v.r.NORMAL,new h.n(e,s,3,!0)])}return r&&f.push([v.r.COLOR,new h.n(r,(0,c.tM)(r.length/4),4)]),new d.V(e,f,null,g.d.Line)}function ne(e,t,n,r,o,s=0){const a=new Array(18),i=[[-n,s,o/2],[r,s,o/2],[0,t+s,o/2],[-n,s,-o/2],[r,s,-o/2],[0,t+s,-o/2]];for(let l=0;l<6;l++)a[3*l]=i[l][0],a[3*l+1]=i[l][1],a[3*l+2]=i[l][2];return new d.V(e,[[v.r.POSITION,new h.n(a,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5],3,!0)]])}function re(e,t){const n=e.getMutableAttribute(v.r.POSITION).data;for(let r=0;r<n.length;r+=3){const e=n[r],s=n[r+1],a=n[r+2];(0,o.i)(le,e,s,a),(0,o.t)(le,le,t),n[r]=le[0],n[r+1]=le[1],n[r+2]=le[2]}}function oe(e,t=e){const n=e.attributes,r=n.get(v.r.POSITION).data,o=n.get(v.r.NORMAL).data;if(o){const e=t.getMutableAttribute(v.r.NORMAL).data;for(let t=0;t<o.length;t+=3){const n=o[t+1];e[t+1]=-o[t+2],e[t+2]=n}}if(r){const e=t.getMutableAttribute(v.r.POSITION).data;for(let t=0;t<r.length;t+=3){const n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function se(e,t,n,r,s){return!(Math.abs((0,o.e)(t,e))>s)&&((0,o.h)(n,e,t),(0,o.n)(n,n),(0,o.h)(r,n,e),(0,o.n)(r,r),!0)}function ae(e,t,n,r,o,s,a){return se(e,t,o,s,a)||se(e,n,o,s,a)||se(e,r,o,s,a)}const ie=.99619469809,le=(0,a.vt)()},3112:(e,t,n)=>{n.d(t,{H:()=>r,o:()=>o});class r{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerViewUids=[],this.store=o.ALL,this.normalRequired=!0,this.excludeLabels=!1}}var o;!function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"}(o||(o={}))},82805:(e,t,n)=>{n.d(t,{i:()=>f});var r=n(34761),o=n(13191),s=n(20664),a=n(9392),i=n(43047),l=n(55855),c=n(95925),u=n(50248);class f{get ray(){return this._ray}get distanceInRenderSpace(){return null==this.distance?null:((0,s.g)(d,this.ray.direction,this.distance),(0,s.l)(d))}withinDistance(e){return!!h(this)&&this.distanceInRenderSpace<=e}getIntersectionPoint(e){return!!h(this)&&((0,s.g)(d,this.ray.direction,this.distance),(0,s.f)(e,this.ray.origin,d),!0)}getTransformedNormal(e){return(0,s.c)(p,this.normal),p[3]=0,(0,i.t)(p,p,this.transformation),(0,s.c)(e,p),(0,s.n)(e,e)}constructor(e){this.intersector=u.d.OBJECT,this.normal=(0,a.vt)(),this.transformation=(0,o.vt)(),this._ray=(0,c.vt)(),this.init(e)}init(e){this.distance=this.target=this.drapedLayerOrder=this.renderPriority=null,this.intersector=u.d.OBJECT,(0,c.C)(e,this._ray)}set(e,t,n,i,l,c,u){this.intersector=e,this.distance=n,(0,s.c)(this.normal,i??a.Cb),(0,r.C)(this.transformation,l??o.zK),this.target=t,this.drapedLayerOrder=c,this.renderPriority=u}copy(e){(0,c.C)(e.ray,this._ray),this.intersector=e.intersector,this.distance=e.distance,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.renderPriority=e.renderPriority,(0,s.c)(this.normal,e.normal),(0,r.C)(this.transformation,e.transformation)}}function h(e){return null!=e?.distance}const d=(0,a.vt)(),p=(0,l.vt)()},50248:(e,t,n)=>{var r;n.d(t,{d:()=>r}),function(e){e[e.OBJECT=0]="OBJECT",e[e.HUD=1]="HUD",e[e.TERRAIN=2]="TERRAIN",e[e.OVERLAY=3]="OVERLAY",e[e.I3S=4]="I3S",e[e.PCL=5]="PCL",e[e.LOD=6]="LOD",e[e.VOXEL=7]="VOXEL",e[e.TILES3D=8]="TILES3D"}(r||(r={}))}}]);
//# sourceMappingURL=57898.664ce768.chunk.js.map