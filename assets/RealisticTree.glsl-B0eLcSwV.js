import{n as e}from"./mat3-AUeZxTOE.js";import{r as t,t as n}from"./mat3f64-0nIg8LsN.js";import{n as r}from"./vec4f64-BVLRhYcJ.js";import{r as i}from"./vec3f64-CbPwldcz.js";import{_ as a}from"./vec3-mgEpaRyZ.js";import{r as o}from"./mat4f64-E_FXCKxO.js";import{t as s}from"./vec2f64-C5Ma3aci.js";import{A as c,Et as l,G as u,I as d,K as f,L as p,M as m,O as h,Ot as g,R as _,T as v,_t as y,a as ee,ct as b,d as x,f as S,gt as te,ht as ne,i as re,j as C,k as w,m as T,n as E,r as ie,t as ae,u as oe,yt as se}from"./VertexColor.glsl-kMrlrQ7p.js";import{E as ce,a as D,c as O,i as k,l as A,o as le}from"./getEmissions.glsl-yL67a6JD.js";import"./NoParameters-ZDc3QXO4.js";import{a as j,i as M,n as N,t as P}from"./Texture2DPassUniform-DmlRZeJi.js";import"./pbrUtils-DBbHRSpC.js";import{a as ue,n as de,r as fe}from"./doublePrecisionUtils-Cq7UTe-C.js";import{_ as pe,a as me,f as he,i as ge,o as _e,p as F,r as I,s as L,u as R,w as ve}from"./GLTextureMaterial-4zQZ_zQR.js";import{i as z,n as B,r as V,t as H}from"./EvaluateSceneLighting.glsl-BYZJTxUq.js";function U(e,t){switch(e.fragment.code.add(M`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(M`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(M`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function W(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:e.include(U,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new v(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal)),n.code.add(M`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(M`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var ye=class extends re{constructor(){super(...arguments),this.transformNormalViewFromGlobal=n()}},be=class extends ie{constructor(){super(...arguments),this.toMapSpace=r()}};function G(e){e.vertex.code.add(M`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}var K=n();function q(t,n){let{hasModelTransformation:r,instancedDoublePrecision:i,instanced:s,output:c,hasVertexTangents:u}=n;r&&t.vertex.uniforms.add(new ve(`model`,e=>e.modelTransformation??o),new v(`normalLocalOriginFromModel`,t=>(e(K,t.modelTransformation??o),K))),s&&i&&(t.attributes.add(`instanceModelOriginHi`,`vec3`),t.attributes.add(`instanceModelOriginLo`,`vec3`),t.attributes.add(`instanceModel`,`mat3`),t.attributes.add(`instanceModelNormal`,`mat3`));let d=t.vertex;i&&(d.include(ee),d.uniforms.add(new te(`viewOriginHi`,e=>de(a(J,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),J)),new te(`viewOriginLo`,e=>fe(a(J,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),J)))),d.code.add(M`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:i?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?M`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }

    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:i?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
  `),c===4&&d.uniforms.add(l).code.add(M`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:i?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `),u&&d.code.add(M`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:i?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var J=i();function xe(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(C),e.vertex.include(w),e.vertex.include(c),e.vertex.code.add(M`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(M`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}function Se(e,t){e.varyings.add(`colorMixMode`,`float`),e.varyings.add(`opacityMixMode`,`float`),e.vertex.uniforms.add(new S(`symbolColorMixMode`,e=>b[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(C),e.vertex.include(w),e.vertex.include(c),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(M`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(M`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(M`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = float(mask.r ? ${M.int(b.ignore)} : symbolColorMixMode) + 0.5;
      opacityMixMode = float(mask.a ? ${M.int(b.ignore)} : symbolColorMixMode) + 0.5;
    }
  `)}function Y(e,t){let{vertex:n,fragment:r,varyings:i}=e;e.include(xe,t),e.include(Se,t),e.include(ae,t),n.include(C),n.include(h),n.include(x),n.uniforms.add(new ne(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),i.add(`vExternalColor`,`vec4`),n.code.add(M`
    void forwardDefaultMaterialExternalColor() {
      forwardVertexColor();

      MaskedColor maskedColor =
        applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

      vExternalColor = maskedColor.color;
      forwardColorMixMode(maskedColor.mask);
    }

    bool shouldCullByOpacity() {
      return int(opacityMixMode) != ${M.int(b.ignore)} && vExternalColor.a < alphaCutoff;
    }
  `),r.include(ge),r.uniforms.add(new N(`opacity`,e=>e.opacity),new N(`layerOpacity`,e=>e.layerOpacity)),r.code.add(M`
    float getDefaultMaterialOpacity(float textureOpacity) {
      return layerOpacity * mixExternalOpacity(
        ${j(t.hasVertexColors,`vColor.a * `)} opacity,
        textureOpacity,
        vExternalColor.a,
        int(opacityMixMode)
      );
    }
  `)}function Ce(e,t){switch(t.output){case 5:case 6:case 7:case 8:e.fragment.code.add(M`void outputDepth(float _linearDepth){
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(_linearDepth)), abs(dFdy(_linearDepth)));
gl_FragDepth = _linearDepth + slope_scale * m + bias;
}`)}}function X(e,t){we(e,t,new N(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function we(e,t,n){let r=e.fragment;switch(r.code.add(`void discardOrAdjustAlpha(inout vec4 color) {`),t.alphaDiscardMode){case 1:r.code.add(`color.a = 1.0;`);break;case 0:t.output!==0&&(r.include(x),r.code.add(`if (color.a < alphaCutoff) discard;`));break;case 3:t.output!==0&&r.uniforms.add(n).code.add(`if (color.a < textureAlphaCutoff) discard;`);break;case 2:r.uniforms.add(n).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:t.alphaDiscardMode}r.code.add(`}`)}function Z(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:d}=t;switch(c){case 3:_(n,t),e.include(E),r.include(f,t),e.include(A,t),s&&r.uniforms.add(new P(`tex`,e=>e.texture)),n.main.add(M`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(X,t),r.main.add(M`
        discardBySlice(vpos);
        ${j(s,M`vec4 texColor = texture(tex, ${d?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:_(n,t),e.include(E),e.include(A,t),e.include(T,t),e.include(Ce,t),r.include(f,t),e.include(u,t),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new P(`tex`,e=>e.texture)),n.uniforms.add(se).main.add(M`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(X,t),r.main.add(M`
        discardBySlice(vpos);
        ${j(s,M`vec4 texColor = texture(tex, ${d?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===11?M`outputObjectAndLayerIdColor();`:M`outputDepth(depth);`}`);break;case 4:{_(n,t),e.include(E),e.include(U,t),e.include(W,t),e.include(A,t),e.include(T,t),e.include(Y,t),s&&r.uniforms.add(new P(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(M`
        forwardDefaultMaterialExternalColor();

        if (shouldCullByOpacity()) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = getVertexInLocalOriginSpace();
        ${a?M`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:M`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(f,t),e.include(X,t),r.main.add(M`
        discardBySlice(vpos);
        ${j(s,M`vec4 texColor = texture(tex, ${d?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`,M`vec4 texColor = vec4(1.0);`)}
        float opacity = getDefaultMaterialOpacity(texColor.a);

        ${l===2?M`vec3 normal = screenDerivativeNormal(vPositionView);`:M`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, opacity);`);break}case 10:_(n,t),e.include(E),e.include(A,t),e.include(T,t),s&&r.uniforms.add(new P(`tex`,e=>e.texture)),n.main.add(M`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(f,t),e.include(X,t),e.include(m,t),r.main.add(M`
        discardBySlice(vpos);
        ${j(s,M`vec4 texColor = texture(tex, ${d?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Te(e,t){return Ee(e,t)}function Ee(e,n){let r=e.fragment,{hasVertexTangents:i,doubleSidedMode:a,hasNormalTexture:o,textureCoordinateType:c,bindType:l,hasNormalTextureTransform:u}=n;i?(e.attributes.add(`tangent`,`vec4`),e.varyings.add(`vTangent`,`vec4`),a===2?r.code.add(M`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(M`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(M`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),o&&c!==0&&(e.include(O,n),r.uniforms.add(l===1?new P(`normalTexture`,e=>e.textureNormal):new k(`normalTexture`,e=>e.textureNormal)),u&&(r.uniforms.add(l===1?new y(`scale`,e=>e.scale??s):new pe(`scale`,e=>e.scale??s)),r.uniforms.add(new v(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??t))),r.code.add(M`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),u&&r.code.add(M`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(M`return tangentSpace * rawNormal;
}`))}function De(e,t){let n=e.fragment;switch(t.doubleSidedMode){case 0:n.code.add(`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) { return normalize(normalView); }`);break;case 1:n.code.add(M`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) {
return dot(normalView, viewDirection) > 0.0 ? normalize(-normalView) : normalize(normalView);
}`);break;case 2:n.code.add(M`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) {
return gl_FrontFacing ? normalize(normalView) : normalize(-normalView);
}`);break;default:t.doubleSidedMode;case 3:}}function Q(e,t){let n=t.pbrMode,r=e.fragment;switch(n){case 5:case 3:case 4:case 6:r.code.add(M`void applyPBRFactors() {}`);return;case 0:case 7:r.code.add(M`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);return;case 2:r.code.add(M`float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);return;case 1:{let{hasMetallicRoughnessTexture:n,hasMetallicRoughnessTextureTransform:i,hasOcclusionTexture:a,hasOcclusionTextureTransform:o,bindType:s}=t;(n||a)&&e.include(O,t),r.code.add(`float occlusion;`),n&&r.uniforms.add(s===1?new P(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new k(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),a&&r.uniforms.add(s===1?new P(`texOcclusion`,e=>e.textureOcclusion):new k(`texOcclusion`,e=>e.textureOcclusion)),r.uniforms.add(s===1?new D(`mrrFactors`,e=>e.mrrFactors):new le(`mrrFactors`,e=>e.mrrFactors)),r.include(R),n&&r.code.add(M`void applyMetallicRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`),a&&r.code.add(`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`),r.code.add(M`
          float getBakedOcclusion() {
            return ${a?`occlusion`:`1.0`};
          }

          void applyPBRFactors() {
            mrr = mrrFactors;
            occlusion = 1.0;

            ${j(n,`applyMetallicRoughness(${i?`metallicRoughnessUV`:`vuv0`});`)}
            ${j(a,`applyOcclusion(${o?`occlusionUV`:`vuv0`});`)}
          }`)}}}function Oe(e,n){n.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new v(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??t)).code.add(M`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(M`void forwardColorUV(){}`)}function ke(e,n){n.hasNormalTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new v(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??t)).code.add(M`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(M`void forwardNormalUV(){}`)}function Ae(e,n){n.hasEmissionTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new v(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??t)).code.add(M`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(M`void forwardEmissiveUV(){}`)}function je(e,n){n.hasOcclusionTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new v(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??t)).code.add(M`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(M`void forwardOcclusionUV(){}`)}function Me(e,n){n.hasMetallicRoughnessTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new v(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??t)).code.add(M`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(M`void forwardMetallicRoughnessUV(){}`)}function $(e,t){t.snowCover&&(e.uniforms.add(new g(`snowCover`,e=>e.snowCover)).code.add(M`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.include(R),e.code.add(M`void applySnowToMRR(float snow) {
mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function Ne(e){let t=new ue,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,normalType:s,offsetBackfaces:c,snowCover:l,pbrMode:u,textureAlphaPremultiplied:m,instancedDoublePrecision:h,hasVertexColors:g,hasVertexTangents:v,hasColorTexture:y,hasNormalTexture:ee,hasNormalTextureTransform:b,hasColorTextureTransform:x}=e;if(_(r,e),n.add(`position`,`vec3`),r.inputs.add(`position`,()=>`position`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(T,e),t.include(q,e),t.include(d,e),t.include(Oe,e),!ce(o))return t.include(Z,e),t;t.include(ke,e),t.include(Ae,e),t.include(je,e),t.include(Me,e),p(r,e),t.include(U,e),t.include(E);let S=s===0||s===1;return S&&c&&t.include(G),t.include(Te,e),t.include(W,e),a.add(`vPositionLocal`,`vec3`),t.include(A,e),t.include(Y,e),t.include(h?_e:me,e),r.main.add(M`
    forwardDefaultMaterialExternalColor();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${j(S,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${j(v,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${j(S&&c,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (shouldCullByOpacity()) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadow();
  `),i.include(V,e),i.include(z,e),t.include(X,e),i.include(f,e),t.include(oe,e),p(i,e),i.uniforms.add(r.uniforms.get(`localOrigin`),new D(`ambient`,e=>e.ambient),new D(`diffuse`,e=>e.diffuse)),y&&i.uniforms.add(new P(`tex`,e=>e.texture)),t.include(Q,e),i.include(L,e),t.include(De,e),i.include($,e),i.include(I,e),B(i),i.uniforms.add(H),i.uniforms.add(F).main.add(M`
    discardBySlice(vpos);
    ${y?M`
            vec4 texColor = texture(tex, ${x?`colorUV`:`vuv0`});
            ${j(m,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:`vec4 texColor = vec4(1.0);`}
    vec3 viewDirection = normalize(vpos - cameraPosition);
    vec3 posWorld = vpos + localOrigin;
    vec3 upNormal = getLocalUp(posWorld);
    ${s===2?`vec3 normal = screenDerivativeNormal(vPositionLocal);`:`vec3 normal = shadingNormal(vNormalWorld, viewDirection);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(
      ${j(g,`vColor.rgb *`)} matColor,
      texColor.rgb,
      vExternalColor.rgb,
      int(colorMixMode)
    );
    float opacity_ = getDefaultMaterialOpacity(texColor.a);

    ${ee?`mat3 tangentSpace = computeTangentSpace(${v?`normal`:`normal, vpos, vuv0`});
           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${b?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}

    ${j(l,M`
          float snow = getSnow(normal, upNormal);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    ${j((u===1||u===2)&&l,`applySnowToMRR(snow);`)}

    vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, upNormal);
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${j(l,`, snow`)});
  `),t}var Pe=Object.freeze(Object.defineProperty({__proto__:null,build:Ne},Symbol.toStringTag,{value:`Module`}));function Fe(e){let t=new ue,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,offsetBackfaces:s,pbrMode:c,snowCover:l}=e,u=c===1||c===2;if(_(r,e),n.add(`position`,`vec3`),r.inputs.add(`position`,()=>`position`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(T,e),t.include(q,e),t.include(d,e),t.include(Oe,e),!ce(o))return t.include(Z,e),t;t.include(Ae,e),p(t.vertex,e),t.include(U,e),t.include(E),s&&t.include(G),a.add(`vNormalWorld`,`vec3`),a.add(`localvpos`,`vec3`,{invariant:!0}),t.include(A,e),t.include(Y,e),t.include(e.instancedDoublePrecision?_e:me,e),r.main.add(M`
    forwardDefaultMaterialExternalColor();

    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadow();

    gl_Position = shouldCullByOpacity() ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${j(s,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:m,hasColorTextureTransform:h}=e;return i.include(V,e),i.include(z,e),t.include(X,e),i.include(f,e),t.include(oe,e),p(i,e),B(i),i.uniforms.add(he,H,r.uniforms.get(`localOrigin`),r.uniforms.get(`view`),new D(`ambient`,e=>e.ambient),new D(`diffuse`,e=>e.diffuse)),m&&i.uniforms.add(new P(`tex`,e=>e.texture)),t.include(Q,e),i.include(L,e),i.include($,e),i.include(I,e),i.uniforms.add(F).main.add(M`
    discardBySlice(vpos);
    vec4 texColor = ${m?`texture(tex, ${h?`colorUV`:`vuv0`})`:` vec4(1.0)`};
    ${j(m,`${j(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}
      discardOrAdjustAlpha(texColor);`)}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse();
    ssao *= getBakedOcclusion();

    float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    float shadow = readShadow(additionalAmbientScale, vpos);
    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(
      ${j(e.hasVertexColors,`vColor.rgb * `)} matColor,
      texColor.rgb,
      vExternalColor.rgb,
      int(colorMixMode)
    );
    float opacity_ = getDefaultMaterialOpacity(texColor.a);

    vec3 shadingNormal = normalize(vNormalWorld);
    vec3 viewDirection = normalize(vpos - cameraPosition);
    vec3 upNormal = getLocalUp(vpos, localOrigin);

    ${j(l,`vec3 faceNormal = screenDerivativeNormal(vpos);
        float snow = getRealisticTreeSnow(faceNormal, shadingNormal, upNormal);
        albedo = mix(albedo, vec3(1), snow);`)}

    ${M`albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}

    ${j(u&&l,`applySnowToMRR(snow);`)}

    vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, upNormal);
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${j(l,`, 1.0`)});
  `),t}var Ie=Object.freeze(Object.defineProperty({__proto__:null,build:Fe},Symbol.toStringTag,{value:`Module`}));export{$ as a,Ce as c,be as d,Pe as i,G as l,Fe as n,Q as o,Ne as r,De as s,Ie as t,ye as u};