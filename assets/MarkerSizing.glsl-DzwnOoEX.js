import{s as e}from"./vec4f64-BVLRhYcJ.js";import"./vec3f64-CbPwldcz.js";import{E as t,S as n,p as r}from"./mat4-CmtBNVDy.js";import{t as i}from"./mat4f64-E_FXCKxO.js";import"./Texture-D1O_kIYy.js";import{m as a,p as o}from"./enums-DkCFWTlr.js";import{B as s,E as c,H as l,L as u,Nt as d,Ot as ee,St as te,V as ne,m as f,wt as re,xt as p,yt as m,z as h}from"./VertexColor.glsl-kMrlrQ7p.js";import{a as g}from"./getEmissions.glsl-yL67a6JD.js";import"./NoParameters-ZDc3QXO4.js";import{a as _,i as v,n as y}from"./Texture2DPassUniform-DmlRZeJi.js";import{t as b}from"./ManagedTexture-C3Jlj2AG.js";import{T as x,a as S,p as C}from"./GLTextureMaterial-4zQZ_zQR.js";import{i as w,n as T,r as E,t as D}from"./EvaluateSceneLighting.glsl-BYZJTxUq.js";function O(e,n){let{vertex:i}=e;i.uniforms.add(new y(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:a,spherical:o}=n;a?(e.include(l,n),ne(i),u(i,n),i.uniforms.add(new s(`inverseViewMatrix`,(e,n)=>t(k,r(k,n.camera.viewMatrix,e.origin)))),i.code.add(v`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${o?v`normalize(worldPos + localOrigin)`:v`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):i.code.add(v`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),n.hasVVSize?(i.uniforms.add(new g(`vvSizeMinSize`,e=>e.vvSize.minSize),new g(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new g(`vvSizeOffset`,e=>e.vvSize.offset),new g(`vvSizeFactor`,e=>e.vvSize.factor),new g(`vvSizeFallback`,e=>e.vvSize.fallback)),i.code.add(v`
    float getSize(${_(a,`vec3 pos`)}) {
      float value = ${i.inputs.get(`sizeFeatureAttribute`)};
      float size = isnan(value)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${_(a,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):i.code.add(v`
    float getSize(${_(a,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * ${i.inputs.get(`size`)};
      return ${_(a,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `),n.hasVVOpacity?(i.constants.add(`vvOpacityNumber`,`int`,8),i.uniforms.add(new c(`vvOpacityValues`,8,e=>e.vvOpacity.values),new c(`vvOpacityOpacities`,8,e=>e.vvOpacity.opacityValues),new y(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),i.code.add(v`
    float interpolateOpacity(float value) {
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

    vec4 applyOpacity(vec4 color) {
      float value = ${i.inputs.get(`opacityFeatureAttribute`)};
      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${_(n.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(value));
    }
    `)):i.code.add(v`vec4 applyOpacity(vec4 color) {
return color;
}`),n.hasVVColor?(e.include(f,n),i.code.add(v`
    vec4 getColor() {
      vec4 color = interpolateVVColor(${i.inputs.get(`colorFeatureAttribute`)});

      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      return applyOpacity(color);
    }
    `)):i.code.add(v`
    vec4 getColor() {
      return applyOpacity(${i.inputs.get(`color`)});
    }
    `)}var k=i();function A(e){e.include(x),e.fragment.uniforms.add(new s(`inverseViewMatrix`,(e,t)=>{let i=r(j,t.camera.viewMatrix,e.localOrigin);return n(i,i)})).code.add(v`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}var j=i();function M(e,t){e.include(S,t),e.include(A),e.fragment.include(d),e.fragment.code.add(v`float readFragmentShadow(float additionalAmbientScale) {
vec3 pos = reconstructLocalPosition(gl_FragCoord.xy, linearizeDepth(gl_FragCoord.z)).xyz;
return readShadow(additionalAmbientScale, pos);
}`)}function N(e,t){let{vertex:n,fragment:r}=e;e.include(M,t),r.include(E,t),r.include(w,t),T(r),u(r,t),n.main.add(`forwardLinearDepthToReadShadow();`),r.uniforms.add(C,D,n.uniforms.get(`localOrigin`)).code.add(v`vec4 evaluateSceneLightingFragment(vec3 vpos, vec3 normal, vec4 albedo) {
vec3 posWorld = vpos + localOrigin;
float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
float shadow = readFragmentShadow(additionalAmbientScale);
float ssao = evaluateAmbientOcclusionInverse();
vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
vec3 viewDirection = normalize(vpos - cameraPosition);
return vec4(
evaluateSceneLighting(normal, albedo.rgb, shadow, 1.0 - ssao, additionalLight, viewDirection, normal),
albedo.a);
}`)}function P(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function F(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}var I=.5,L=e(I/2,I/2,1-I/2,1-I/2);function R(e){return e===`cross`||e===`x`}function z(e,t=128,n=t*I,r=0){let{data:i,parameters:a}=B(e,t,n,r);return new b(i,a)}function B(e,t=128,n=t*I,r=0){return{data:V(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:a.FLOAT,pixelFormat:6403,internalFormat:o.R16F,reloadable:!0}}}function V(e,t=128,n=t*I,r=0){switch(e){case`circle`:return H(t,n);case`square`:return U(t,n);case`cross`:return G(t,n,r);case`x`:return K(t,n,r);case`kite`:return W(t,n);case`triangle`:return q(t,n);case`arrow`:return J(t,n);default:return H(t,n)}}function H(e,t){let n=e/2-.5;return $(e,Z(n,n,t/2))}function U(e,t){return Y(e,t,!1)}function W(e,t){return Y(e,t,!0)}function G(e,t,n=0){return X(e,t,!1,n)}function K(e,t,n=0){return X(e,t,!0,n)}function q(e,t){return $(e,Q(e/2,t,t/2))}function J(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=Z(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=Q(i,n,r);return $(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function Y(e,t,n){return n&&(t/=Math.SQRT2),$(e,(r,i)=>{let a=r-.5*e+.25,o=-i+.5*e-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function X(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return $(e,(t,a)=>{let o=t-.5*e,s=-a+.5*e-1;if(n){let e=(o+s)/Math.SQRT2;s=(s-o)/Math.SQRT2,o=e}let c;return o=Math.abs(o),s=Math.abs(s),c=o>s?o>i?Math.sqrt((o-i)*(o-i)+s*s):s:s>i?Math.sqrt(o*o+(s-i)*(s-i)):o,c-=r/2,c})}function Z(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function Q(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function $(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=i+e*r;n[a]=t(i,r)/e}return n}var ie=.25;function ae(e,t){let n=e.vertex,r=t.hasScreenSizePerspective,i=t.worldSized,a=i&&!t.draped;h(n),n.constants.add(`markerSizePerLineWidth`,`float`,10),n.uniforms.add(new y(`markerScale`,({markerScale:e})=>e)),i&&n.uniforms.add(new ee(`groundMetersToScreenRatio`,e=>1/(e.screenToPlanarDistanceRatio*e.planarDistanceToGroundRatio))),n.code.add(v`float getScreenMarkerSize(float lineWidth) {
return markerScale * markerSizePerLineWidth * lineWidth;
}`),n.code.add(_(a,v`
        float getLineWidth(vec3 pos) {
          float size = getSize(${_(r,`pos`)});
          float metersPerScreenPixel = max(-pos.z, nearFar[0]) * metersPerRenderUnit * screenPixelSizePerDistance;
          return max(size / metersPerScreenPixel, 1.0) * pixelRatio;
        }
    `,v`
        float getLineWidth(${_(t.lineWidthRequiresPosition,`vec3 pos`)}) {
          float size = max(getSize(${_(r,`pos`)}), 1.0);
          return ${_(i,`size * pixelRatio * groundMetersToScreenRatio`,`size * pixelRatio`)};
        }
    `)),a?n.uniforms.add(m,p,re):n.uniforms.add(te),n.code.add(_(a,v`
        float getWorldMarkerSize(vec3 pos) {
          return markerScale * markerSizePerLineWidth * getSize(${_(r,`pos`)}) * 0.5 / metersPerRenderUnit;
        }
      `,v`
        float getWorldMarkerSize(vec3 pos) {
          float distanceToCamera = length(pos);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          return getScreenMarkerSize(getLineWidth(${_(r,`pos`)})) * screenToWorldRatio;
        }
      `)),n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.code.add(_(a,v`bool areWorldMarkersHidden(vec3 pos, vec3 other) {
return getWorldMarkerSize(pos) > maxSegmentLengthFraction * length(pos - other);
}`,v`
        bool areWorldMarkersHidden(vec3 pos, vec3 other) {
          vec3 midPoint = mix(pos, other, 0.5);
          float distanceToCamera = length(midPoint);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          float worldMarkerSize = getScreenMarkerSize(getLineWidth(${_(r,`pos`)})) * screenToWorldRatio;
          float segmentLen = length(pos - other);
          return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
        }
      `))}export{L as a,F as c,z as i,N as l,ie as n,R as o,I as r,P as s,ae as t,O as u};