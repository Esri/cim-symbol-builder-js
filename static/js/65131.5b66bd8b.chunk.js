"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[65131],{68745:(e,t,o)=>{o.d(t,{D:()=>W,b:()=>V});var a=o(72412),r=o(62026),i=o(34981),n=o(26917),s=o(59395),l=o(45937),c=o(59046),d=o(838),u=o(22148),m=o(97808),h=o(54478),v=o(55386),p=o(25530),f=o(15710),g=o(72937),x=o(9365),b=o(67799),T=o(43557),M=o(27920),w=o(42953),y=o(26719),C=o(1773),S=o(94192),O=o(55696),_=o(66763),N=o(90039),E=o(77904),A=o(3799),I=o(5517),z=o(58350),H=o(21390),G=o(86955),L=o(70367),R=o(66470),P=o(91911),D=o(2687),F=o(75569);function V(e){const t=new D.N5,{vertex:o,fragment:V,varyings:W}=t,{output:B,normalType:j,offsetBackfaces:U,instancedColor:Y,spherical:q,receiveShadows:Z,snowCover:k,pbrMode:J,textureAlphaPremultiplied:X,instancedDoublePrecision:$,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:oe,hasColorTextureTransform:ae}=e;if((0,A.NB)(o,e),t.include(d.I),W.add("vpos","vec3"),t.include(_.A,e),t.include(l.B,e),t.include(p.G,e),t.include(O.q2,e),!(0,i.RN)(B))return t.include(f.E,e),t;t.include(O.Sx,e),t.include(O.MU,e),t.include(O.O1,e),t.include(O.QM,e),(0,A.yu)(o,e),t.include(c.Y,e),t.include(s.d,e);const re=j===c.W.Attribute||j===c.W.Compressed;return re&&U&&t.include(r.M),t.include(g.W,e),t.include(v.Mh,e),Y&&t.attributes.add(R.r.INSTANCECOLOR,"vec4"),W.add("vPositionLocal","vec3"),t.include(m.U,e),t.include(a.oD,e),t.include(u.K,e),t.include(h.c,e),o.uniforms.add(new z.E("externalColor",(e=>e.externalColor))),W.add("vcolorExt","vec4"),t.include(S.Z,e),o.main.add(G.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,G.If)(Y,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,G.If)(re,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,G.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,G.If)(re&&U,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${G.H.float(F.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),t.include(b.kA,e),t.include(x.n,e),t.include(N.S,e),t.include($?C.G:C.Bz,e),t.fragment.include(n.HQ,e),t.include(P.z,e),(0,A.yu)(V,e),V.uniforms.add(o.uniforms.get("localOrigin"),new I.t("ambient",(e=>e.ambient)),new I.t("diffuse",(e=>e.diffuse)),new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),ee&&V.uniforms.add(new L.N("tex",(e=>e.texture))),t.include(y._Z,e),t.include(w.c,e),V.include(E.N),t.include(M.r,e),(0,b.a8)(V),(0,b.eU)(V),(0,T.O4)(V),V.main.add(G.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ee?G.H`
            vec4 texColor = texture(tex, ${ae?"colorUV":"vuv0"});
            ${(0,G.If)(X,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:G.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${j===c.W.ScreenDerivative?G.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:G.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${Z?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,G.If)(q,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,G.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,G.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${oe?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${q?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,G.If)(k,G.H`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${J===y.A9.Normal||J===y.A9.Schematic?G.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,G.If)(k,G.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${k?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:G.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),t}const W=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},35249:(e,t,o)=>{o.d(t,{R:()=>P,b:()=>R});var a=o(72412),r=o(62026),i=o(34981),n=o(26917),s=o(59395),l=o(45937),c=o(59046),d=o(838),u=o(22148),m=o(97808),h=o(54478),v=o(25530),p=o(15710),f=o(9365),g=o(67799),x=o(43557),b=o(42953),T=o(26719),M=o(1773),w=o(94192),y=o(66763),C=o(90039),S=o(77904),O=o(3799),_=o(5517),N=o(58350),E=o(21390),A=o(86955),I=o(70367),z=o(66470),H=o(91911),G=o(2687),L=o(75569);function R(e){const t=new G.N5,{vertex:o,fragment:R,varyings:P}=t,{output:D,offsetBackfaces:F,instancedColor:V,pbrMode:W,snowCover:B,spherical:j}=e,U=W===T.A9.Normal||W===T.A9.Schematic;if((0,O.NB)(o,e),t.include(d.I),P.add("vpos","vec3"),t.include(y.A,e),t.include(l.B,e),t.include(v.G,e),t.include(w.Z,e),(0,i.RN)(D)&&((0,O.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),F&&t.include(r.M),V&&t.attributes.add(z.r.INSTANCECOLOR,"vec4"),P.add("vNormalWorld","vec3"),P.add("localvpos","vec3"),t.include(m.U,e),t.include(a.oD,e),t.include(u.K,e),t.include(h.c,e),o.uniforms.add(new N.E("externalColor",(e=>e.externalColor))),P.add("vcolorExt","vec4"),o.main.add(A.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,A.If)(V,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${A.H.float(L.Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,A.If)(F,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,i.RN)(D)){const{hasColorTexture:a,hasColorTextureTransform:r,receiveShadows:i}=e;t.include(g.kA,e),t.include(f.n,e),t.include(C.S,e),t.include(e.instancedDoublePrecision?M.G:M.Bz,e),t.fragment.include(n.HQ,e),t.include(H.z,e),(0,O.yu)(t.fragment,e),(0,x.Gc)(R),(0,g.a8)(R),(0,g.eU)(R),R.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new _.t("ambient",(e=>e.ambient)),new _.t("diffuse",(e=>e.diffuse)),new E.m("opacity",(e=>e.opacity)),new E.m("layerOpacity",(e=>e.layerOpacity))),a&&R.uniforms.add(new I.N("tex",(e=>e.texture))),t.include(T._Z,e),t.include(b.c,e),R.include(S.N),(0,x.O4)(R),R.main.add(A.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${a?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,A.If)(a,`${(0,A.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":j?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?A.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,A.If)(B,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${A.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,A.If)(U,`vec3 normalGround = ${j?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${U?A.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,A.If)(B,A.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${B?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:A.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.E,e),t}const P=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}))},51331:(e,t,o)=>{o.d(t,{S:()=>b,b:()=>f,g:()=>g});var a=o(19555),r=o(72745),i=o(73398),n=o(65058),s=o(27963),l=o(28450),c=o(95756),d=o(23148),u=o(21390),m=o(86955),h=o(70367),v=o(2687);const p=16;function f(){const e=new v.N5,t=e.fragment;return e.include(i.c),e.include(s.Ir),t.include(n.E),t.uniforms.add(new d.U("radius",(e=>g(e.camera)))).code.add(m.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(m.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new u.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new c.G("rnmScale",((e,t)=>(0,a.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new u.m("intensity",(e=>e.intensity)),new l.E("screenSize",(e=>(0,a.hZ)(x,e.camera.fullWidth,e.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(m.H`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${m.H.int(p)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${m.H.int(p)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,r.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:g},Symbol.toStringTag,{value:"Module"}))},29228:(e,t,o)=>{o.d(t,{S:()=>h,b:()=>m});var a=o(73398),r=o(65058),i=o(56289),n=o(21390),s=o(86955),l=o(27374),c=o(70367),d=o(2687);const u=4;function m(){const e=new d.N5,t=e.fragment;e.include(a.c);const o=(u+1)/2,m=1/(2*o*o);return t.include(r.E),t.uniforms.add(new c.N("depthMap",(e=>e.depthTexture)),new l.o("tex",(e=>e.colorTexture)),new i.t("blurSize",(e=>e.blurSize)),new n.m("projScale",((e,t)=>{const o=t.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(u)}; r <= ${s.H.int(u)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},51990:(e,t,o)=>{o.d(t,{Eb:()=>n,_j:()=>s,k5:()=>a});var a,r,i=o(15941);function n(e){switch(e){case"multiply":default:return a.Multiply;case"ignore":return a.Ignore;case"replace":return a.Replace;case"tint":return a.Tint}}function s(e,t,o){if(null==e||t===a.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const r=(0,i.qE)(Math.round(e[3]*c),0,c),n=0===r||t===a.Tint?0:t===a.Replace?d:u;o[0]=(0,i.qE)(Math.round(e[0]*l),0,l),o[1]=(0,i.qE)(Math.round(e[1]*l),0,l),o[2]=(0,i.qE)(Math.round(e[2]*l),0,l),o[3]=r+n}(r=a||(a={}))[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint";const l=255,c=85,d=c,u=2*c},59581:(e,t,o)=>{o.d(t,{A:()=>i});var a=o(51990),r=o(86955);function i(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(a.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(a.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(a.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(a.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},62026:(e,t,o)=>{o.d(t,{M:()=>r});var a=o(86955);function r(e){e.vertex.code.add(a.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},45937:(e,t,o)=>{o.d(t,{B:()=>b});var a=o(63919),r=o(44680),i=o(13191),n=o(20664),s=o(9392),l=o(34981),c=o(89299),d=o(3799),u=o(84115),m=o(86955),h=o(72106),v=o(43425),p=o(66470),f=o(99643),g=o(31432);g.Y;const x=(0,r.vt)();function b(e,t){const o=t.hasModelTransformation,r=t.instancedDoublePrecision;o&&(e.vertex.uniforms.add(new v.X("model",(e=>e.modelTransformation??i.zK))),e.vertex.uniforms.add(new h.k("normalLocalOriginFromModel",(e=>((0,a.Ge)(x,e.modelTransformation??i.zK),x))))),t.instanced&&r&&(e.attributes.add(p.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.r.INSTANCEMODEL,"mat3"),e.attributes.add(p.r.INSTANCEMODELNORMAL,"mat3"));const s=e.vertex;r&&(s.include(c.u,t),s.uniforms.add(new u.d("viewOriginHi",(e=>(0,f.Zo)((0,n.i)(T,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),T))),new u.d("viewOriginLo",(e=>(0,f.jA)((0,n.i)(T,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),T))))),s.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===l.V.Normal&&((0,d.S7)(s),s.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const T=(0,s.vt)()},59046:(e,t,o)=>{o.d(t,{W:()=>a,Y:()=>l});var a,r,i=o(4212),n=o(86955),s=o(66470);function l(e,t){switch(t.normalType){case a.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(n.H`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:e.fragment.code.add(n.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Xb)(t.normalType);case a.COUNT:}}(r=a||(a={}))[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"},22148:(e,t,o)=>{o.d(t,{K:()=>l});var a=o(59581),r=o(86955),i=o(72790),n=o(66470),s=o(99362);function l(e,t){t.hasSymbolColors?(e.include(a.A),e.attributes.add(n.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new i.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(r.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},55386:(e,t,o)=>{o.d(t,{Mh:()=>u,Zo:()=>m,gy:()=>h});var a=o(4212),r=o(44680),i=o(55855),n=o(59046),s=o(36358),l=o(86955),c=o(42759),d=o(72106);function u(e,t){switch(t.normalType){case n.W.Attribute:case n.W.Compressed:e.include(n.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,a.Xb)(t.normalType);case n.W.COUNT:}}class m extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,r.vt)()}}class h extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,r.vt)(),this.toMapSpace=(0,i.vt)()}}},15710:(e,t,o)=>{o.d(t,{E:()=>b});var a=o(72412),r=o(34981),i=o(26917),n=o(59395),s=o(59046),l=o(90080),c=o(97808),d=o(55386),u=o(49399),m=o(20469),h=o(66763),v=o(90039),p=o(3799),f=o(86955),g=o(70367),x=o(83490);function b(e,t){const{vertex:o,fragment:b}=e,T=t.hasColorTexture&&t.alphaDiscardMode!==x.sf.Opaque,{output:M,normalType:w,hasColorTextureTransform:y}=t;switch(M){case r.V.Depth:(0,p.NB)(o,t),e.include(n.d,t),e.fragment.include(i.HQ,t),e.include(c.U,t),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case r.V.Shadow:case r.V.ShadowHighlight:case r.V.ShadowExcludeHighlight:case r.V.ViewshedShadow:case r.V.ObjectAndLayerIdColor:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(h.A,t),e.include(u.L,t),e.fragment.include(i.HQ,t),e.include(l.g,t),(0,a.xJ)(e),e.varyings.add("depth","float"),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${M===r.V.ObjectAndLayerIdColor?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}`);break;case r.V.Normal:{(0,p.NB)(o,t),e.include(n.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(h.A,t),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),w===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const a=w===s.W.Attribute||w===s.W.Compressed;o.main.add(f.H`
        vpos = getVertexInLocalOriginSpace();
        ${a?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),e.fragment.include(i.HQ,t),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${w===s.W.ScreenDerivative?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case r.V.Highlight:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(h.A,t),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.fragment.include(i.HQ,t),e.include(v.S,t),e.include(m.Q,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},49399:(e,t,o)=>{o.d(t,{L:()=>n});var a=o(34981),r=o(87572),i=o(86955);function n(e,t){switch(t.output){case a.V.Shadow:case a.V.ShadowHighlight:case a.V.ShadowExcludeHighlight:case a.V.ViewshedShadow:e.fragment.include(r.U),e.fragment.code.add(i.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}},72937:(e,t,o)=>{o.d(t,{W:()=>p});var a=o(44680),r=o(72745),i=o(97808),n=o(95352),s=o(27920),l=o(95756),c=o(86955),d=o(72106),u=o(27374),m=o(70367),h=o(66470),v=o(69728);function p(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(h.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==i.I.None&&(e.include(n.r,t),o.uniforms.add(t.bindType===v.c.Pass?new m.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new l.G("scale",(e=>e.scale??r.Un))),o.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK)))),o.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(c.H`return tangentSpace * rawNormal;
}`))}},50819:(e,t,o)=>{o.d(t,{W:()=>u});var a=o(20664),r=o(9392),i=o(43047),n=o(55855),s=o(26719),l=o(84115),c=o(51596),d=o(86955);function u(e,t){const o=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(o.uniforms.add(new l.d("lightingAmbientSH0",(({lighting:e})=>(0,a.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(o.uniforms.add(new c.I("lightingAmbientSH_R",(({lighting:e})=>(0,i.s)(h,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3]))),new c.I("lightingAmbientSH_G",(({lighting:e})=>(0,i.s)(h,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3]))),new c.I("lightingAmbientSH_B",(({lighting:e})=>(0,i.s)(h,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===r&&(o.uniforms.add(new l.d("lightingAmbientSH0",(({lighting:e})=>(0,a.i)(m,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),new c.I("lightingAmbientSH_R1",(({lighting:e})=>(0,i.s)(h,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4]))),new c.I("lightingAmbientSH_G1",(({lighting:e})=>(0,i.s)(h,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4]))),new c.I("lightingAmbientSH_B1",(({lighting:e})=>(0,i.s)(h,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4]))),new c.I("lightingAmbientSH_R2",(({lighting:e})=>(0,i.s)(h,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8]))),new c.I("lightingAmbientSH_G2",(({lighting:e})=>(0,i.s)(h,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8]))),new c.I("lightingAmbientSH_B2",(({lighting:e})=>(0,i.s)(h,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==s.A9.Normal&&t.pbrMode!==s.A9.Schematic||o.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,r.vt)(),h=(0,n.vt)()},9365:(e,t,o)=>{o.d(t,{n:()=>P});var a=o(86955),r=o(4653),i=o(35143),n=o(15941),s=o(30726),l=o(68134),c=o(91417),d=o(46053),u=(o(81806),o(76460),o(47249),o(85842)),m=o(19555),h=o(90364),v=o(16455),p=o(36451),f=o(48353),g=o(16506),x=o(59246),b=o(29228),T=o(57162);class M extends x.w{constructor(e,t){super(e,t,new g.$(b.S,(()=>o.e(91538).then(o.bind(o,91538)))))}initializePipeline(){return(0,T.Ey)({colorWrite:T.kn})}}var w=o(72745),y=o(31432);class C extends y.Y{constructor(){super(...arguments),this.projScale=1}}class S extends C{constructor(){super(...arguments),this.intensity=1}}class O extends y.Y{}class _ extends O{constructor(){super(...arguments),this.blurSize=(0,w.vt)()}}var N=o(51331);class E extends x.w{constructor(e,t){super(e,t,new g.$(N.S,(()=>o.e(43185).then(o.bind(o,43185)))))}initializePipeline(){return(0,T.Ey)({colorWrite:T.kn})}}var A=o(83490),I=o(93345),z=o(18316),H=o(96673);const G=2;let L=class extends p.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=h.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,c.l5)(0),this._passParameters=new S,this._drawParameters=new _}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new H.R;t.wrapMode=I.pF.CLAMP_TO_EDGE,t.pixelFormat=I.Ab.RGB,t.wrapMode=I.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new z.g(this.renderingContext,t,e),this.techniques.precompile(E),this.techniques.precompile(M),this.addHandles((0,l.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,c.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,o=e.find((({name:e})=>"normals"===e)),a=o?.getTexture(),r=o?.getTexture(I.nI),i=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/G),p=Math.round(d/G),g=this.techniques.get(E),x=this.techniques.get(M);if(!g.compiled||!x.compiled)return this._enableTime=(0,c.l5)(performance.now()),this.requestRender(A.C7.UPDATE),i.acquire(u,p,h.OG.SSAO,v.N.RED);0===this._enableTime&&(this._enableTime=(0,c.l5)(performance.now()));const b=this.renderingContext,T=this.view.qualitySettings.fadeDuration,w=s.relativeElevation,y=(0,n.qE)((f.b-w)/(f.b-f.O),0,1),C=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,S=C*y;this._passParameters.normalTexture=a,this._passParameters.depthTexture=r,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*R/(0,N.g)(s)**6*S;const O=i.acquire(l,d,"ssao input",v.N.RG);b.bindFramebuffer(O.fbo),b.setViewport(0,0,l,d),b.bindTechnique(g,t,this._passParameters,this._drawParameters),b.screen.draw();const _=i.acquire(u,p,"ssao blur",v.N.RED);b.bindFramebuffer(_.fbo),this._drawParameters.colorTexture=O.getTexture(),(0,m.hZ)(this._drawParameters.blurSize,0,G/d),b.bindTechnique(x,t,this._passParameters,this._drawParameters),b.setViewport(0,0,u,p),b.screen.draw(),O.release();const z=i.acquire(u,p,h.OG.SSAO,v.N.RED);return b.bindFramebuffer(z.fbo),b.setViewport(0,0,l,d),b.setClearColor(1,1,1,0),b.clear(I.NV.COLOR),this._drawParameters.colorTexture=_.getTexture(),(0,m.hZ)(this._drawParameters.blurSize,G/l,0),b.bindTechnique(x,t,this._passParameters,this._drawParameters),b.setViewport(0,0,u,p),b.screen.draw(),b.setViewport4fv(s.fullViewport),_.release(),C<1&&this.requestRender(A.C7.UPDATE),z}};(0,i._)([(0,d.MZ)()],L.prototype,"consumes",void 0),(0,i._)([(0,d.MZ)()],L.prototype,"produces",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],L.prototype,"isEnabled",void 0),L=(0,i._)([(0,u.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],L);const R=.5;function P(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new r.x("ssaoTex",(e=>e.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/G),o.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},67799:(e,t,o)=>{o.d(t,{a8:()=>p,eU:()=>f,kA:()=>g});var a=o(99746),r=o(4212),i=o(50819),n=o(9365),s=o(43557),l=o(42953),c=o(26719),d=o(36324),u=o(67582),m=o(23148),h=o(86955),v=o(4998);function p(e){e.constants.add("ambientBoostFactor","float",v.uH)}function f(e){e.uniforms.add(new m.U("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function g(e,t){const o=e.fragment;switch(e.include(n.n,t),t.pbrMode!==c.A9.Disabled&&e.include(l.c,t),e.include(i.W,t),e.include(d.p),o.code.add(h.H`
    const float GAMMA_SRGB = ${h.H.float(a.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),p(o),f(o),(0,s.Gc)(o),o.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,s.O4)(o),o.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.A9.Disabled:case c.A9.WaterOnIntegratedMesh:case c.A9.Water:e.include(s.Vt),o.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.A9.Normal:case c.A9.Schematic:o.code.add(h.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new u.o("hasFillLights",(e=>e.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(h.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new m.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new m.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))).code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==c.A9.Schematic||t.hasColorTexture?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c.A9.Simplified:case c.A9.TerrainWithWater:(0,s.Gc)(o),(0,s.O4)(o),o.code.add(h.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,r.Xb)(t.pbrMode);case c.A9.COUNT:}}},27920:(e,t,o)=>{o.d(t,{W:()=>a,r:()=>s});var a,r,i=o(4212),n=o(86955);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case a.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case a.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case a.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case a.COUNT:}}(r=a||(a={}))[r.None=0]="None",r[r.View=1]="View",r[r.WindingOrder=2]="WindingOrder",r[r.COUNT=3]="COUNT"},1773:(e,t,o)=>{o.d(t,{Bz:()=>v,G:()=>h});o(13191),o(9392);var a=o(87572),r=o(51596),i=o(86955),n=o(53908),s=o(69728),l=o(87003);class c extends l.n{constructor(e,t,o){super(e,"mat4",s.c.Draw,((o,a,r,i)=>o.setUniformMatrix4fv(e,t(a,r,i))),o)}}class d extends l.n{constructor(e,t,o){super(e,"mat4",s.c.Pass,((o,a,r)=>o.setUniformMatrix4fv(e,t(a,r))),o)}}var u=o(4653),m=o(31432);m.Y;m.Y;function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function v(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function p(e){const t=e.fragment;t.include(a.U),t.uniforms.add(new u.x("shadowMap",(e=>e.shadowMap.depthTexture)),new n.W("numCascades",(e=>e.shadowMap.numCascades)),new r.I("cascadeDistances",(e=>e.shadowMap.cascadeDistances))).code.add(i.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},55696:(e,t,o)=>{o.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var a=o(44680),r=o(97808),i=o(86955),n=o(72106);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??a.zK))).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK))).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??a.zK))).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??a.zK))).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??a.zK))).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},90039:(e,t,o)=>{o.d(t,{S:()=>l});o(69728);var a=o(87003);a.n;var r=o(21390),i=o(86955),n=o(83490),s=o(75569);function l(e,t){c(e,t,new r.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,o){const a=e.fragment,r=t.alphaDiscardMode,l=r===n.sf.Blend;r!==n.sf.Mask&&r!==n.sf.MaskBlend||a.uniforms.add(o),a.code.add(i.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${r===n.sf.Opaque?"color.a = 1.0;":`if (color.a < ${l?i.H.float(s.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,i.If)(r===n.sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}},77904:(e,t,o)=>{o.d(t,{N:()=>n});var a=o(51990),r=o(80883),i=o(86955);function n(e){e.include(r.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(a.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},87572:(e,t,o)=>{o.d(t,{U:()=>r});var a=o(86955);function r(e){e.code.add(a.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},65131:(e,t,o)=>{o.d(t,{$U:()=>H});var a=o(20664),r=o(9392),i=o(64465),n=o(48549),s=o(34981),l=o(59046),c=o(42717),d=o(27920),u=o(26719),m=o(61785),h=o(83490),v=o(75803),p=o(45463),f=o(60322),g=o(48168),x=o(77730),b=o(66470),T=o(97974),M=o(82809),w=o(99362),y=o(59648),C=o(35143),S=o(97808),O=o(6485),_=o(94570);class N extends _.E{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=h.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=h.s2.None,this.normalType=l.W.Attribute,this.customDepthTest=h.it.Less,this.emissionSource=c.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===c.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?S.I.Default:S.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,C._)([(0,O.W)({count:h.sf.COUNT})],N.prototype,"alphaDiscardMode",void 0),(0,C._)([(0,O.W)({count:d.W.COUNT})],N.prototype,"doubleSidedMode",void 0),(0,C._)([(0,O.W)({count:u.A9.COUNT})],N.prototype,"pbrMode",void 0),(0,C._)([(0,O.W)({count:h.s2.COUNT})],N.prototype,"cullFace",void 0),(0,C._)([(0,O.W)({count:l.W.COUNT})],N.prototype,"normalType",void 0),(0,C._)([(0,O.W)({count:h.it.COUNT})],N.prototype,"customDepthTest",void 0),(0,C._)([(0,O.W)({count:c.ZX.COUNT})],N.prototype,"emissionSource",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasVertexColors",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasSymbolColors",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasVerticalOffset",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasColorTexture",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasMetallicRoughnessTexture",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasOcclusionTexture",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasNormalTexture",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasScreenSizePerspective",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasVertexTangents",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasOccludees",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasModelTransformation",void 0),(0,C._)([(0,O.W)()],N.prototype,"offsetBackfaces",void 0),(0,C._)([(0,O.W)()],N.prototype,"vvSize",void 0),(0,C._)([(0,O.W)()],N.prototype,"vvColor",void 0),(0,C._)([(0,O.W)()],N.prototype,"receiveShadows",void 0),(0,C._)([(0,O.W)()],N.prototype,"receiveAmbientOcclusion",void 0),(0,C._)([(0,O.W)()],N.prototype,"textureAlphaPremultiplied",void 0),(0,C._)([(0,O.W)()],N.prototype,"instanced",void 0),(0,C._)([(0,O.W)()],N.prototype,"instancedColor",void 0),(0,C._)([(0,O.W)()],N.prototype,"writeDepth",void 0),(0,C._)([(0,O.W)()],N.prototype,"transparent",void 0),(0,C._)([(0,O.W)()],N.prototype,"enableOffset",void 0),(0,C._)([(0,O.W)()],N.prototype,"terrainDepthTest",void 0),(0,C._)([(0,O.W)()],N.prototype,"cullAboveTerrain",void 0),(0,C._)([(0,O.W)()],N.prototype,"snowCover",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasColorTextureTransform",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasEmissionTextureTransform",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasNormalTextureTransform",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasOcclusionTextureTransform",void 0),(0,C._)([(0,O.W)()],N.prototype,"hasMetallicRoughnessTextureTransform",void 0);var E=o(16506),A=o(35249);class I extends y.R5{constructor(e,t){super(e,t,new E.$(A.R,(()=>o.e(77919).then(o.bind(o,77919))))),this.type="RealisticTreeTechnique"}}var z=o(75569);class H extends p.im{constructor(e,t){super(e,L),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[x.N.OPAQUE_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&!this.parameters.transparent],[x.N.TRANSPARENT_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[x.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.XY)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,n.BP)().vec3f(b.r.POSITION);return e.normalType===l.W.Compressed?t.vec2i16(b.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(b.r.NORMAL),e.hasVertexTangents&&t.vec4f(b.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(b.r.UV0),e.hasVertexColors&&t.vec4u8(b.r.COLOR),e.hasSymbolColors&&t.vec4u8(b.r.SYMBOLCOLOR),(0,m.E)()&&t.vec4u8(b.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new N(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.V.Shadow&&e!==s.V.ShadowExcludeHighlight&&e!==s.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<z.Q)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:a,vvColor:r}=e,i=t||r||a,n="replace"===e.colorMixMode,s=e.opacity>=z.Q;if(o&&i)return n||s;const l=e.externalColor&&e.externalColor[3]>=z.Q;return o?n?l:s:i?n||s:n?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,a.p)(this.parameters.emissiveFactor,r.uY)}getConfiguration(e,t){const o=this.parameters,{treeRendering:a,doubleSided:r,doubleSidedType:i}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!a&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!a&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=null!=o.verticalOffset,this._configuration.hasScreenSizePerspective=null!=o.screenSizePerspective,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=a?l.W.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,null!=o.customDepthTest&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?h.s2.None:o.cullFace,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!a&&null!=o.modelTransformation,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=a?d.W.WindingOrder:r&&"normal"===i?d.W.View:r&&"winding-order"===i?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=o.hasInstancedColor,(0,s.RN)(e)?(this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.receiveShadows=o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&null!=t.ssao):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!a&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=a?c.ZX.None:null!=o.emissiveTextureId?c.ZX.Texture:o.usePBR?c.ZX.Value:c.ZX.None,this._configuration.hasOcclusionTexture=!a&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<f.xt,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,o,r,n,s){if(null!=this.parameters.verticalOffset){const e=o.camera;(0,a.i)(W,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case i.RT.Global:s=(0,a.n)(F,W);break;case i.RT.Local:s=(0,a.c)(F,D)}let l=0;const c=(0,a.d)(B,W,e.eye),d=(0,a.l)(c),u=(0,a.h)(c,c,1/d);let m=null;this.parameters.screenSizePerspective&&(m=(0,a.f)(s,u)),l+=(0,w.kE)(e,d,this.parameters.verticalOffset,m??0,this.parameters.screenSizePerspective),(0,a.h)(s,s,l),(0,a.q)(V,s,o.transform.inverseRotation),r=(0,a.d)(R,r,V),n=(0,a.d)(P,n,V)}(0,g.Uy)(e,o,r,n,(0,T.ou)(o.verticalOffset),s)}createGLMaterial(e){return new G(e)}createBufferWriter(){return new M.Z(this._vertexBufferLayout)}}class G extends v.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,a.i)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?I:y.R5,e)}}class L extends y.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}const R=(0,r.vt)(),P=(0,r.vt)(),D=(0,r.fA)(0,0,1),F=(0,r.vt)(),V=(0,r.vt)(),W=(0,r.vt)(),B=(0,r.vt)()},59648:(e,t,o)=>{o.d(t,{R5:()=>w,V:()=>M,uD:()=>T});var a=o(9392),r=o(55855),i=o(34981),n=o(59046),s=o(55386),l=o(16506),c=o(59246),d=o(83490),u=o(45463),m=o(72001),h=o(60322),v=o(96643),p=o(78992),f=o(68745),g=o(93345),x=o(57162),b=o(75569);class T extends s.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=d.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=a.uY,this.instancedDoublePrecision=!1,this.normalType=n.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,a.CN)(.2,.2,.2),this.diffuse=(0,a.CN)(.8,.8,.8),this.externalColor=(0,r.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,a.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=d.it.Less,this.textureAlphaMode=d.sf.Blend,this.textureAlphaCutoff=b.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=u.m$.Occlude,this.isDecoration=!1}}class M extends s.gy{constructor(){super(...arguments),this.origin=(0,a.vt)(),this.slicePlaneLocalOrigin=this.origin}}class w extends c.w{constructor(e,t,a=new l.$(f.D,(()=>o.e(23727).then(o.bind(o,23727))))){super(e,t,a),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:a,transparent:r,cullFace:n,customDepthTest:s,hasOccludees:l,enableOffset:c}=e,d=o===m.Y.NONE,u=o===m.Y.FrontFace;return(0,x.Ey)({blending:(0,i.RN)(a)&&r?(0,h.Yf)(o):null,culling:C(e)?(0,x.Xt)(n):null,depthTest:{func:(0,h.K_)(o,y(s))},depthWrite:(0,h.z5)(e),drawBuffers:a===i.V.Depth?{buffers:[g.Hr.NONE]}:(0,h.m6)(o,a),colorWrite:x.kn,stencilWrite:l?v.v0:null,stencilTest:l?t?v.a9:v.qh:null,polygonOffset:d||u?null:(0,h.aB)(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function y(e){return e===d.it.Lequal?g.MT.LEQUAL:g.MT.LESS}function C(e){return e.cullFace!==d.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}}}]);
//# sourceMappingURL=65131.5b66bd8b.chunk.js.map