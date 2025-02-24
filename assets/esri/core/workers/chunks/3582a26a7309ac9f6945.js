"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2728],{28491:(e,t,r)=>{r.d(t,{D:()=>V,b:()=>G});var i=r(46686),n=r(32680),o=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),m=r(92700),f=r(72824),v=r(35640),p=r(40261),g=r(77695),_=r(54849),x=r(74081),T=r(98619),b=r(62602),A=r(22393),E=r(59469),S=r(25618),C=r(96598),M=r(51406),w=r(42398),O=r(35093),y=r(11955),I=r(27950),R=r(20693),N=r(33079),P=r(71988),L=r(20304),D=r(2597),H=r(85977),F=r(63761),B=r(46540),z=r(60517);function G(e){const t=new H.N5,{vertex:r,fragment:G,varyings:V}=t,{output:U,normalType:W,offsetBackfaces:j,instancedColor:k,spherical:q,receiveShadows:$,snowCover:Y,pbrMode:Z,textureAlphaPremultiplied:X,instancedDoublePrecision:J,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:re,hasColorTextureTransform:ie}=e;if((0,R.NB)(r,e),t.include(d.I),V.add("vpos","vec3"),t.include(w.A,e),t.include(l.B,e),t.include(v.G,e),t.include(M.q2,e),!(0,o.RN)(U))return t.include(p.E,e),t;t.include(M.Sx,e),t.include(M.MU,e),t.include(M.O1,e),t.include(M.QM,e),(0,R.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const ne=W===c.W.Attribute||W===c.W.Compressed;return ne&&j&&t.include(n.M),t.include(g.W,e),t.include(f.Mh,e),k&&t.attributes.add(B.r.INSTANCECOLOR,"vec4"),V.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),t.include(C.Z,e),r.main.add(D.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,D.If)(k,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${D.H.float(O.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,D.If)(ne,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,D.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,D.If)(ne&&j,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(x.kA,e),t.include(_.n,e),t.include(y.S,e),t.include(J?S.G:S.Bz,e),t.fragment.include(a.HQ,e),t.include(z.z,e),(0,R.yu)(G,e),G.uniforms.add(r.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),ee&&G.uniforms.add(new F.N("tex",(e=>e.texture))),t.include(E._Z,e),t.include(A.c,e),G.include(I.N),t.include(b.r,e),(0,x.a8)(G),(0,x.eU)(G),(0,T.O4)(G),G.main.add(D.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ee?D.H`
            vec4 texColor = texture(tex, ${ie?"colorUV":"vuv0"});
            ${(0,D.If)(X,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${W===c.W.ScreenDerivative?D.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:D.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${$?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,D.If)(q,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,D.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,D.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${re?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${q?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,D.If)(Y,D.H`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${Z===E.A9.Normal||Z===E.A9.Schematic?D.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,D.If)(Y,D.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${Y?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:D.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),t}const V=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},57323:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>H});var i=r(46686),n=r(32680),o=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),m=r(92700),f=r(35640),v=r(40261),p=r(54849),g=r(74081),_=r(98619),x=r(22393),T=r(59469),b=r(25618),A=r(96598),E=r(42398),S=r(35093),C=r(11955),M=r(27950),w=r(20693),O=r(33079),y=r(71988),I=r(20304),R=r(2597),N=r(85977),P=r(63761),L=r(46540),D=r(60517);function H(e){const t=new N.N5,{vertex:r,fragment:H,varyings:F}=t,{output:B,offsetBackfaces:z,instancedColor:G,pbrMode:V,snowCover:U,spherical:W}=e,j=V===T.A9.Normal||V===T.A9.Schematic;if((0,w.NB)(r,e),t.include(d.I),F.add("vpos","vec3"),t.include(E.A,e),t.include(l.B,e),t.include(f.G,e),t.include(A.Z,e),(0,o.RN)(B)&&((0,w.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),z&&t.include(n.M),G&&t.attributes.add(L.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new y.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.main.add(R.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,R.If)(G,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${R.H.float(S.Q)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,R.If)(z,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();`)),(0,o.RN)(B)){const{hasColorTexture:i,hasColorTextureTransform:n,receiveShadows:o}=e;t.include(g.kA,e),t.include(p.n,e),t.include(C.S,e),t.include(e.instancedDoublePrecision?b.G:b.Bz,e),t.fragment.include(a.HQ,e),t.include(D.z,e),(0,w.yu)(t.fragment,e),(0,_.Gc)(H),(0,g.a8)(H),(0,g.eU)(H),H.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new O.t("ambient",(e=>e.ambient)),new O.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),i&&H.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(T._Z,e),t.include(x.c,e),H.include(M.N),(0,_.O4)(H),H.main.add(R.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${i?`texture(tex, ${n?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,R.If)(i,`${(0,R.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${o?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":W?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?R.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,R.If)(U,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${R.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,R.If)(j,`vec3 normalGround = ${W?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${j?R.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,R.If)(U,R.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${U?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(v.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:H},Symbol.toStringTag,{value:"Module"}))},15581:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>v});var i=r(37585),n=r(48163),o=r(82048),a=r(52540),s=r(34845),l=r(47286),c=r(20304),d=r(2597),u=r(85977),h=r(63761);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(o.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>v(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,i.hZ)(p,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,i.hZ)(p,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(d.H`
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

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function v(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const p=(0,n.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:v},Symbol.toStringTag,{value:"Module"}))},95774:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>h});var i=r(82048),n=r(52540),o=r(68259),a=r(20304),s=r(2597),l=r(85977),c=r(15976),d=r(63761);const u=4;function h(){const e=new l.N5,t=e.fragment;e.include(i.c);const r=(u+1)/2,h=1/(2*r*r);return t.include(n.E),t.uniforms.add(new d.N("depthMap",(e=>e.depthTexture)),new c.o("tex",(e=>e.colorTexture)),new o.t("blurSize",(e=>e.blurSize)),new a.m("projScale",((e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(h)} - ddiff * ddiff * sharpness);
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
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},17352:(e,t,r)=>{r.d(t,{b:()=>j,f:()=>T}),r(44208);var i=r(53966),n=r(34727),o=r(4341),a=r(58083),s=r(9093),l=r(38954),c=r(51850),d=r(19419),u=r(88582),h=r(11964),m=r(27921),f=r(71351),v=r(44280),p=r(32114);const g=()=>i.A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function _(e=H){return{plane:(0,m.vt)(e.plane),origin:(0,c.o8)(e.origin),basis1:(0,c.o8)(e.basis1),basis2:(0,c.o8)(e.basis2)}}function x(e,t=_()){return T(e.origin,e.basis1,e.basis2,t)}function T(e,t,r,i=_()){return(0,l.c)(i.origin,e),(0,l.c)(i.basis1,t),(0,l.c)(i.basis2,r),b(i),function(e,t){Math.abs((0,l.f)(e.basis1,e.basis2)/((0,l.l)(e.basis1)*(0,l.l)(e.basis2)))>1e-6&&g().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,l.f)(e.basis1,R(e)))>1e-6&&g().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,l.f)(R(e),e.origin)-e.plane[3])>1e-6&&g().warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function b(e){(0,m.mR)(e.basis2,e.basis1,e.origin,e.plane)}function A(e,t,r){e!==r&&x(e,r);const i=(0,l.h)(p.rq.get(),R(e),t);return(0,l.g)(r.origin,r.origin,i),r.plane[3]-=t,r}function E(e,t=_()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return(0,l.i)(t.origin,e[0]+r,e[1]+i,0),(0,l.i)(t.basis1,r,0,0),(0,l.i)(t.basis2,0,i,0),(0,m.fA)(0,0,1,0,t.plane),t}function S(e,t,r){return!!(0,m.Ui)(e.plane,t,r)&&N(e,r)}function C(e,t,r){const i=F.get();D(e,t,i,F.get());let o=Number.POSITIVE_INFINITY;for(const a of V){const s=L(e,a,B.get()),c=p.rq.get();if((0,m.T7)(i,s,c)){const e=(0,l.o)(p.rq.get(),t.origin,c),i=Math.abs((0,n.XM)((0,l.f)(t.direction,e)));i<o&&(o=i,(0,l.c)(r,c))}}return o===Number.POSITIVE_INFINITY?M(e,t,r):r}function M(e,t,r){if(S(e,t,r))return r;const i=F.get(),n=F.get();D(e,t,i,n);let o=Number.POSITIVE_INFINITY;for(const a of V){const s=L(e,a,B.get()),c=p.rq.get();if((0,m.gv)(i,s,c)){const e=(0,f.kb)(t,c);if(!(0,m.Tj)(n,c))continue;e<o&&(o=e,(0,l.c)(r,c))}}return y(e,t.origin)<o&&w(e,t.origin,r),r}function w(e,t,r){const i=(0,m._I)(e.plane,t,p.rq.get()),n=(0,h.H6)(P(e,e.basis1),i,-1,1,p.rq.get()),o=(0,h.H6)(P(e,e.basis2),i,-1,1,p.rq.get());return(0,l.d)(r,(0,l.g)(p.rq.get(),n,o),e.origin),r}function O(e,t,r){const{origin:i,basis1:n,basis2:o}=e,a=(0,l.d)(p.rq.get(),t,i),s=(0,v.gr)(n,a),c=(0,v.gr)(o,a),d=(0,v.gr)(R(e),a);return(0,l.i)(r,s,c,d)}function y(e,t){const r=O(e,t,p.rq.get()),{basis1:i,basis2:n}=e,o=(0,l.l)(i),a=(0,l.l)(n),s=Math.max(Math.abs(r[0])-o,0),c=Math.max(Math.abs(r[1])-a,0),d=r[2];return s*s+c*c+d*d}function I(e,t){const r=-e.plane[3];return(0,v.gr)(R(e),t)-r}function R(e){return(0,m.Qj)(e.plane)}function N(e,t){const r=(0,l.d)(p.rq.get(),t,e.origin),i=(0,l.k)(e.basis1),n=(0,l.k)(e.basis2),o=(0,l.f)(e.basis1,r),a=(0,l.f)(e.basis2,r);return-o-i<0&&o-i<0&&-a-n<0&&a-n<0}function P(e,t){const r=B.get();return(0,l.c)(r.origin,e.origin),(0,l.c)(r.vector,t),r}function L(e,t,r){const{basis1:i,basis2:n,origin:o}=e,a=(0,l.h)(p.rq.get(),i,t.origin[0]),s=(0,l.h)(p.rq.get(),n,t.origin[1]);(0,l.g)(r.origin,a,s),(0,l.g)(r.origin,r.origin,o);const c=(0,l.h)(p.rq.get(),i,t.direction[0]),d=(0,l.h)(p.rq.get(),n,t.direction[1]);return(0,l.h)(r.vector,(0,l.g)(c,c,d),2),r}function D(e,t,r,i){const n=R(e);(0,m.mR)(n,t.direction,t.origin,r),(0,m.mR)((0,m.Qj)(r),n,t.origin,i)}const H={plane:(0,m.vt)(),origin:(0,c.fA)(0,0,0),basis1:(0,c.fA)(1,0,0),basis2:(0,c.fA)(0,1,0)},F=new o.I(m.vt),B=new o.I(h.vt),z=(0,c.vt)(),G=new o.I((()=>_())),V=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],U=(0,s.vt)(),W=(0,s.vt)(),j=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=(0,m.vt)(),this.origin=(0,c.vt)(),this.basis1=(0,c.vt)(),this.basis2=(0,c.vt)()}},altitudeAt:I,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case u._.X:(0,l.c)(r,e.basis1),(0,l.n)(r,r);break;case u._.Y:(0,l.c)(r,e.basis2),(0,l.n)(r,r);break;case u._.Z:(0,l.c)(r,R(e))}return r}(e,r,i)},cameraFrustumCoverage:function(e,t){return(t-e)/t},closestPoint:M,closestPointOnSilhouette:C,copy:x,copyWithoutVerify:function(e,t){(0,l.c)(t.origin,e.origin),(0,l.c)(t.basis1,e.basis1),(0,l.c)(t.basis2,e.basis2),(0,m.C)(t.plane,e.plane)},create:_,distance:function(e,t){return Math.sqrt(y(e,t))},distance2:y,distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of V){const n=L(e,i,B.get()),o=(0,h.kb)(n,t);o>r&&(r=o)}return Math.sqrt(r)},elevate:A,equals:function(e,t){return(0,l.p)(e.basis1,t.basis1)&&(0,l.p)(e.basis2,t.basis2)&&(0,l.p)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,m.Tj)(e.plane,t)&&N(e,t)},fromAABoundingRect:E,fromValues:T,getExtent:function(e,t){const r=e.basis1[0],i=e.basis2[1],[n,o]=e.origin;return(0,d.fA)(n-r,o-i,n+r,o+i,t)},intersectRay:S,intersectRayClosestSilhouette:function(e,t,r){if(S(e,t,r))return r;const i=C(e,t,p.rq.get());return(0,l.g)(r,t.origin,(0,l.h)(p.rq.get(),t.direction,(0,l.j)(t.origin,i)/(0,l.l)(t.direction))),r},normal:R,projectPoint:w,projectPointLocal:O,rotate:function(e,t,r,i){return e!==i&&x(e,i),(0,a.$0)(W,t,r),(0,l.t)(i.basis1,e.basis1,W),(0,l.t)(i.basis2,e.basis2,W),b(i),i},setAltitudeAt:function(e,t,r,i){const n=I(e,t),o=(0,l.h)(z,R(e),r-n);return(0,l.g)(i,t,o),i},setExtent:function(e,t,r){return E(t,r),A(r,I(e,e.origin),r),r},transform:function(e,t,r){return e!==r&&x(e,r),(0,a.B8)(U,t),(0,a.mg)(U,U),(0,l.t)(r.basis1,e.basis1,U),(0,l.t)(r.basis2,e.basis2,U),(0,l.t)((0,m.Qj)(r.plane),(0,m.Qj)(e.plane),U),(0,l.t)(r.origin,e.origin,t),(0,m.mP)(r.plane,r.plane,r.origin),r},up:H,updateUnboundedPlane:b,wrap:function(e,t,r){const i=G.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=(0,m.LV)(0,0,0,0),b(i),i}},Symbol.toStringTag,{value:"Module"}))},11964:(e,t,r)=>{r.d(t,{Cr:()=>c,H6:()=>h,_I:()=>u,kb:()=>d,vt:()=>l});var i=r(34727),n=r(4341),o=r(38954),a=r(51850),s=r(32114);function l(e){return e?{origin:(0,a.o8)(e.origin),vector:(0,a.o8)(e.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function c(e,t,r=l()){return(0,o.c)(r.origin,e),(0,o.d)(r.vector,t,e),r}function d(e,t){const r=(0,o.d)(s.rq.get(),t,e.origin),n=(0,o.f)(e.vector,r),a=(0,o.f)(e.vector,e.vector),l=(0,i.qE)(n/a,0,1),c=(0,o.d)(s.rq.get(),(0,o.h)(s.rq.get(),e.vector,l),r);return(0,o.f)(c,c)}function u(e,t,r){return h(e,t,0,1,r)}function h(e,t,r,n,a){const{vector:l,origin:c}=e,d=(0,o.d)(s.rq.get(),t,c),u=(0,o.f)(l,d)/(0,o.k)(l);return(0,o.h)(a,l,(0,i.qE)(u,r,n)),(0,o.g)(a,a,e.origin)}(0,a.vt)(),(0,a.vt)(),new n.I((()=>l()))},92993:(e,t,r)=>{var i;r.d(t,{n:()=>i}),function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(i||(i={}))},99677:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(78888);async function n(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},78662:(e,t,r)=>{r.d(t,{Gd:()=>u,VC:()=>h}),r(44208);var i,n,o,a=r(34727),s=(r(77690),r(29242),r(58083),r(9093)),l=r(38954),c=r(51850),d=(r(31756),r(54218),r(26857),r(2597));(o=i||(i={}))[o.Undefined=0]="Undefined",o[o.DefinedSize=1]="DefinedSize",o[o.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(n||(n={}));class u extends d.Y{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function h(e,t,r){if(!t.vvSize)return(0,l.i)(e,1,1,1),e;for(let i=0;i<3;++i){const n=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=(0,a.qE)(n,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}(0,s.vt)(),(0,c.vt)(),(0,s.vt)()},26857:(e,t,r)=>{r.d(t,{b:()=>l});var i=r(90237),n=r(69622),o=r(10107),a=(r(44208),r(53966),r(87811),r(40608));let s=class extends n.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i._)([(0,o.MZ)()],s.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"TEXT_SHOW_BORDER",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"SHOW_POI",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"LINE_WIREFRAMES",void 0),s=(0,i._)([(0,a.$)("esri.views.3d.support.debugFlags")],s);const l=new s},46686:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var i=r(49255),n=r(33752),o=r(47286),a=r(2597);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.V.Color:case i.V.ColorEmission:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:return e.include(n.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},32680:(e,t,r)=>{r.d(t,{M:()=>n});var i=r(2597);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},82048:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(2597),n=r(46540);function o(e,t=!0){e.attributes.add(n.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(i.H`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
  `)}},76591:(e,t,r)=>{r.d(t,{HQ:()=>c,rA:()=>d});var i=r(58083),n=r(9093),o=r(38954),a=r(51850),s=r(40710),l=(r(33079),r(2597));function c(e,t){!function(e,t,...r){h(e,t,...r),t.hasSlicePlane?e.code.add("\n    void discardBySlice(vec3 pos) {\n      if (sliceByPlane(pos)) {\n        discard;\n      }\n    }\n\n    vec4 applySliceOutline(vec4 color, vec3 pos) {\n      SliceFactors factors = calculateSliceFactors(pos);\n\n      factors.front /= 2.0 * fwidth(factors.front);\n      factors.side0 /= 2.0 * fwidth(factors.side0);\n      factors.side1 /= 2.0 * fwidth(factors.side1);\n      factors.side2 /= 2.0 * fwidth(factors.side2);\n      factors.side3 /= 2.0 * fwidth(factors.side3);\n\n      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth\n      if (sliceByFactors(factors)) {\n        return color;\n      }\n\n      float outlineFactor = (1.0 - step(0.5, factors.front))\n        * (1.0 - step(0.5, factors.side0))\n        * (1.0 - step(0.5, factors.side1))\n        * (1.0 - step(0.5, factors.side2))\n        * (1.0 - step(0.5, factors.side3));\n\n      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);\n    }\n\n    vec4 applySlice(vec4 color, vec3 pos) {\n      return sliceEnabled() ? applySliceOutline(color, pos) : color;\n    }\n  "):e.code.add(l.H`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}(e,t,new s.W("slicePlaneOrigin",((e,r)=>p(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>g(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>g(t,e,r,r.slicePlane?.basis2))))}function d(e,t){h(e,t,new s.W("slicePlaneOrigin",((e,r)=>p(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>g(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>g(t,e,r,r.slicePlane?.basis2))))}l.Y;const u=l.H`struct SliceFactors {
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
bool rejectBySlice(vec3 pos) {
return sliceByPlane(pos);
}`;function h(e,t,...r){t.hasSlicePlane?(e.uniforms.add(...r),e.code.add(u)):e.code.add("bool rejectBySlice(vec3 pos) { return false; }")}function m(e,t,r){return e.instancedDoublePrecision?(0,o.i)(_,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function f(e,t){return null!=e?(0,o.d)(x,t.origin,e):t.origin}function v(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Tl)(b,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function p(e,t,r){if(null==r.slicePlane)return a.uY;const i=m(e,t,r),n=f(i,r.slicePlane),s=v(e,i,r);return null!=s?(0,o.t)(x,n,s):n}function g(e,t,r,i){if(null==i||null==r.slicePlane)return a.uY;const n=m(e,t,r),s=f(n,r.slicePlane),l=v(e,n,r);return null!=l?((0,o.g)(T,i,s),(0,o.t)(x,s,l),(0,o.t)(T,T,l),(0,o.d)(T,T,x)):i}const _=(0,a.vt)(),x=(0,a.vt)(),T=(0,a.vt)(),b=(0,n.vt)()},76597:(e,t,r)=>{r.d(t,{d:()=>o});var i=r(46686),n=r(2597);function o(e){(0,i.i$)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},82991:(e,t,r)=>{r.d(t,{B:()=>_});var i=r(77690),n=r(29242),o=r(9093),a=r(38954),s=r(51850),l=r(49255),c=r(26425),d=r(20693),u=r(40710),h=r(2597),m=r(35644),f=r(40095),v=r(46540),p=r(28449);h.Y;const g=(0,n.vt)();function _(e,t){const r=t.hasModelTransformation,n=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new f.X("model",(e=>e.modelTransformation??o.zK))),e.vertex.uniforms.add(new m.k("normalLocalOriginFromModel",(e=>((0,i.Ge)(g,e.modelTransformation??o.zK),g))))),t.instanced&&n&&(e.attributes.add(v.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(v.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(v.r.INSTANCEMODEL,"mat3"),e.attributes.add(v.r.INSTANCEMODELNORMAL,"mat3"));const s=e.vertex;n&&(s.include(c.u,t),s.uniforms.add(new u.W("viewOriginHi",((e,t)=>(0,p.Zo)((0,a.i)(x,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),x))),new u.W("viewOriginLo",((e,t)=>(0,p.jA)((0,a.i)(x,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),x))))),s.code.add(h.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?n?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":n?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${n?h.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(h.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?n?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":n?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===l.V.Normal&&((0,d.S7)(s),s.code.add(h.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?n?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":n?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(h.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?n?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":n?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const x=(0,s.vt)()},36782:(e,t,r)=>{r.d(t,{g:()=>a});var i=r(49255),n=r(2597),o=r(46540);function a(e,t){if(t.output!==i.V.ObjectAndLayerIdColor)return e.vertex.code.add(n.H`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(n.H`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?o.r.INSTANCEOBJECTANDLAYERIDCOLOR:o.r.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(n.H`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(n.H`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}},10764:(e,t,r)=>{r.d(t,{I:()=>o});var i=r(2597),n=r(46540);function o(e){e.attributes.add(n.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},39014:(e,t,r)=>{r.d(t,{K:()=>l});var i=r(42583),n=r(93588),o=r(2597),a=r(46540),s=r(43616);function l(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},53466:(e,t,r)=>{r.d(t,{I:()=>i,U:()=>l});var i,n,o=r(21818),a=r(2597),s=r(46540);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,o.Xb)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(n=i||(i={}))[n.None=0]="None",n[n.Default=1]="Default",n[n.Atlas=2]="Atlas",n[n.Compressed=3]="Compressed",n[n.COUNT=4]="COUNT"},92700:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(2597),n=r(46540);function o(e,t){t.hasVertexColors?(e.attributes.add(n.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},72824:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var i=r(21818),n=r(29242),o=r(91829),a=r(96336),s=r(33752),l=r(2597),c=r(98353),d=r(35644);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.vt)(),this.toMapSpace=(0,o.vt)()}}},33752:(e,t,r)=>{r.d(t,{EM:()=>p,dO:()=>v,em:()=>f});var i=r(29242),n=r(9093),o=r(51850),a=r(10764),s=r(26425),l=r(40710),c=r(33079),d=r(2597),u=r(98353),h=r(35644),m=r(40095);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.vt)(),this.transformWorldFromViewTL=(0,o.vt)(),this.transformViewFromCameraRelativeRS=(0,i.vt)(),this.transformProjFromView=(0,n.vt)()}}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.vt)(),this.transformWorldFromModelTH=(0,o.vt)(),this.transformWorldFromModelTL=(0,o.vt)()}}},99208:(e,t,r)=>{r.d(t,{r:()=>a});var i=r(53466),n=r(2597);function o(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function a(e,t){const{textureCoordinateType:r}=t;if(r===i.I.None||r===i.I.COUNT)return;e.include(i.U,t);const a=r===i.I.Atlas;a&&e.include(o),e.fragment.code.add(n.H`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${a?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}},35640:(e,t,r)=>{r.d(t,{G:()=>c,V:()=>u});var i=r(87317),n=r(91829),o=r(52587),a=r(20693),s=r(71988),l=r(2597);function c(e,t){const r=e.vertex;t.hasVerticalOffset?(u(r),t.hasScreenSizePerspective&&(e.include(o.Y6),(0,o.OH)(r),(0,a.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,n.vt)();function u(e){e.uniforms.add(new s.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,o*s,a,r,n)})))}},40261:(e,t,r)=>{r.d(t,{E:()=>T});var i=r(46686),n=r(49255),o=r(76591),a=r(76597),s=r(96336),l=r(36782),c=r(53466),d=r(72824),u=r(80730),h=r(2597);function m(e,t){switch(t.output){case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:e.fragment.include(u.U),e.fragment.code.add(h.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var f=r(45935),v=r(42398),p=r(11955),g=r(20693),_=r(63761),x=r(89192);function T(e,t){const{vertex:r,fragment:u}=e,T=t.hasColorTexture&&t.alphaDiscardMode!==x.sf.Opaque,{output:b,normalType:A,hasColorTextureTransform:E}=t;switch(b){case n.V.Depth:(0,g.NB)(r,t),e.include(a.d,t),e.fragment.include(o.HQ,t),e.include(c.U,t),T&&u.uniforms.add(new _.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(p.S,t),u.main.add(h.H`
        discardBySlice(vpos);
        ${(0,h.If)(T,h.H`vec4 texColor = texture(tex, ${E?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:case n.V.ObjectAndLayerIdColor:(0,g.NB)(r,t),e.include(a.d,t),e.include(c.U,t),e.include(v.A,t),e.include(m,t),e.fragment.include(o.HQ,t),e.include(l.g,t),(0,i.xJ)(e),e.varyings.add("depth","float"),T&&u.uniforms.add(new _.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(p.S,t),u.main.add(h.H`
        discardBySlice(vpos);
        ${(0,h.If)(T,h.H`vec4 texColor = texture(tex, ${E?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${b===n.V.ObjectAndLayerIdColor?h.H`outputObjectAndLayerIdColor();`:h.H`outputDepth(depth);`}`);break;case n.V.Normal:{(0,g.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(v.A,t),T&&u.uniforms.add(new _.N("tex",(e=>e.texture))),A===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=A===s.W.Attribute||A===s.W.Compressed;r.main.add(h.H`
        vpos = getVertexInLocalOriginSpace();
        ${i?h.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:h.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),e.fragment.include(o.HQ,t),e.include(p.S,t),u.main.add(h.H`
        discardBySlice(vpos);
        ${(0,h.If)(T,h.H`vec4 texColor = texture(tex, ${E?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${A===s.W.ScreenDerivative?h.H`vec3 normal = screenDerivativeNormal(vPositionView);`:h.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case n.V.Highlight:(0,g.NB)(r,t),e.include(a.d,t),e.include(c.U,t),e.include(v.A,t),T&&u.uniforms.add(new _.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.fragment.include(o.HQ,t),e.include(p.S,t),e.include(f.Q,t),u.main.add(h.H`
        discardBySlice(vpos);
        ${(0,h.If)(T,h.H`vec4 texColor = texture(tex, ${E?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},22911:(e,t,r)=>{r.d(t,{NL:()=>m,ZX:()=>i});var i,n,o=r(49255),a=r(99208),s=r(40710),l=r(33079),c=r(2597),d=r(15976),u=r(63761),h=r(46263);function m(e,t){if(!(0,o.RN)(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:n,bindType:m}=t,f=r===i.Texture;f&&(e.include(a.r,t),e.fragment.uniforms.add(m===h.c.Pass?new u.N("texEmission",(e=>e.textureEmissive)):new d.o("texEmission",(e=>e.textureEmissive))));const v=r===i.Value||f;v&&e.fragment.uniforms.add(m===h.c.Pass?new l.t("emissionFactor",(e=>e.emissiveFactor)):new s.W("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(c.H`
    vec4 getEmissions() {
      vec4 emissions = ${v?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,c.If)(f,`emissions *= textureLookup(texEmission, ${n?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}r(25634),(n=i||(i={}))[n.None=0]="None",n[n.Value=1]="Value",n[n.Texture=2]="Texture",n[n.COUNT=3]="COUNT"},45935:(e,t,r)=>{r.d(t,{Q:()=>d});var i=r(49255),n=r(39589),o=r(46263);class a extends n.n{constructor(e,t){super(e,"ivec2",o.c.Pass,((r,i,n)=>r.setUniform2iv(e,t(i,n))))}}var s=r(93588),l=r(2597),c=r(63761);function d(e,t){const{fragment:r}=e;t.output===i.V.Highlight?(r.uniforms.add(new c.N("depthTexture",((e,t)=>t.mainDepth)),new c.N("highlightTexture",((e,t)=>t.highlightMixTexture)),new s.c("highlightLevel",((e,t)=>t.highlightLevel??0)),new a("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),r.code.add(l.H`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(l.H`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
uint occludedOrMask = isHighlightOccluded() ? 0xaau : 0u;
uvec2 added = uvec2(highlightToAdd * 255.0);
uvec2 masked = (added & uvec2(occlusionAndMask)) | (uvec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(l.H`void calculateOcclusionAndOutputHighlight() {}`)}},52540:(e,t,r)=>{r.d(t,{E:()=>s});var i=r(37585),n=r(48163),o=r(47286),a=r(2597);function s(e){e.uniforms.add(new o.G("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,i.hZ)(l,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(a.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(a.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}const l=(0,n.vt)()},77695:(e,t,r)=>{r.d(t,{W:()=>v});var i=r(29242),n=r(48163),o=r(53466),a=r(99208),s=r(62602),l=r(47286),c=r(2597),d=r(35644),u=r(15976),h=r(63761),m=r(46263),f=r(46540);function v(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==o.I.None&&(e.include(a.r,t),r.uniforms.add(t.bindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??n.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},54849:(e,t,r)=>{r.d(t,{n:()=>U});var i,n,o,a,s,l,c=r(2597),d=r(63761),u=r(90237),h=r(34727),m=r(97768),f=r(36708),v=r(78659),p=r(10107),g=(r(44208),r(53966),r(87811),r(40608)),_=r(37585);r(9093),r(48353),r(9762),(l=i||(i={})).OPAQUE="opaque-color",l.TRANSPARENT="transparent-color",l.COMPOSITE="composite-color",l.FINAL="final-color",function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(n||(n={})),(s=o||(o={}))[s.RED=0]="RED",s[s.RG=1]="RG",s[s.RGBA4=2]="RGBA4",s[s.RGBA=3]="RGBA",s[s.RGBA_MIPMAP=4]="RGBA_MIPMAP",s[s.R16F=5]="R16F",s[s.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(a||(a={}));var x=r(69622),T=r(49186),b=r(89192);let A=class extends x.A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=i.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,f.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),f.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new T.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===b.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,u._)([(0,p.MZ)({constructOnly:!0})],A.prototype,"view",void 0),(0,u._)([(0,p.MZ)({constructOnly:!0})],A.prototype,"consumes",void 0),(0,u._)([(0,p.MZ)()],A.prototype,"produces",void 0),A=(0,u._)([(0,g.$)("esri.views.3d.webgl.RenderNode")],A);const E=A;var S=r(97220),C=r(98958),M=r(95774),w=r(90644);class O extends C.w{constructor(e,t,i){super(e,t,new S.$(M.S,(()=>r.e(9384).then(r.bind(r,59384)))),i)}initializePipeline(){return(0,w.Ey)({colorWrite:w.kn})}}var y=r(48163);class I extends c.Y{constructor(){super(...arguments),this.projScale=1}}class R extends I{constructor(){super(...arguments),this.intensity=1}}class N extends c.Y{}class P extends N{constructor(){super(...arguments),this.blurSize=(0,y.vt)()}}var L=r(15581);class D extends C.w{constructor(e,t,i){super(e,t,new S.$(L.S,(()=>r.e(191).then(r.bind(r,90191)))),i)}initializePipeline(){return(0,w.Ey)({colorWrite:w.kn})}}var H=r(63907),F=r(72626),B=r(67171);const z=2;let G=class extends E{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=n.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,v.l5)(0),this._passParameters=new R,this._drawParameters=new P}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new B.R;t.wrapMode=H.pF.CLAMP_TO_EDGE,t.pixelFormat=H.Ab.RGB,t.wrapMode=H.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new F.g(this.renderingContext,t,e),this.techniques.precompile(D),this.techniques.precompile(O),this.addHandles((0,f.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,v.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,m.WD)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),i=r?.getTexture(),a=r?.getTexture(H.nI),s=this.fboCache,l=t.camera,c=l.fullViewport[2],d=l.fullViewport[3],u=Math.round(c/z),m=Math.round(d/z),f=this.techniques.acquire(D),p=this.techniques.acquire(O);if(!f.compiled||!p.compiled)return this._enableTime=(0,v.l5)(performance.now()),this.requestRender(b.C7.UPDATE),f.release(),p.release(),s.acquire(u,m,n.SSAO,o.RED);0===this._enableTime&&(this._enableTime=(0,v.l5)(performance.now()));const g=this.renderingContext,x=this.view.qualitySettings.fadeDuration,T=l.relativeElevation,A=(0,h.qE)((5e5-T)/2e5,0,1),E=x>0?Math.min(x,performance.now()-this._enableTime)/x:1,S=E*A;this._passParameters.normalTexture=i,this._passParameters.depthTexture=a,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*V/(0,L.g)(l)**6*S;const C=s.acquire(c,d,"ssao input",o.RG);g.bindFramebuffer(C.fbo),g.setViewport(0,0,c,d),g.bindTechnique(f,t,this._passParameters,this._drawParameters),g.screen.draw(),f.release();const M=s.acquire(u,m,"ssao blur",o.RED);g.bindFramebuffer(M.fbo),this._drawParameters.colorTexture=C.getTexture(),(0,_.hZ)(this._drawParameters.blurSize,0,z/d),g.bindTechnique(p,t,this._passParameters,this._drawParameters),g.setViewport(0,0,u,m),g.screen.draw(),C.release();const w=s.acquire(u,m,n.SSAO,o.RED);return g.bindFramebuffer(w.fbo),g.setViewport(0,0,c,d),g.setClearColor(1,1,1,0),g.clear(H.NV.COLOR),this._drawParameters.colorTexture=M.getTexture(),(0,_.hZ)(this._drawParameters.blurSize,z/c,0),g.bindTechnique(p,t,this._passParameters,this._drawParameters),g.setViewport(0,0,u,m),g.screen.draw(),p.release(),g.setViewport4fv(l.fullViewport),M.release(),E<1&&this.requestRender(b.C7.UPDATE),w}};(0,u._)([(0,p.MZ)()],G.prototype,"consumes",void 0),(0,u._)([(0,p.MZ)()],G.prototype,"produces",void 0),(0,u._)([(0,p.MZ)({constructOnly:!0})],G.prototype,"techniques",void 0),(0,u._)([(0,p.MZ)({constructOnly:!0})],G.prototype,"isEnabled",void 0),G=(0,u._)([(0,g.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],G);const V=.5;function U(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new d.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/z),r.code.add(c.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(c.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},74081:(e,t,r)=>{r.d(t,{kA:()=>C,a8:()=>E,eU:()=>S});var i=r(40876),n=r(21818),o=r(38954),a=r(51850),s=r(87317),l=r(91829),c=r(59469),d=r(33079),u=r(71988),h=r(2597);function m(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new d.t("lightingAmbientSH0",((e,t)=>(0,o.i)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(h.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new u.E("lightingAmbientSH_R",((e,t)=>(0,s.s)(v,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new u.E("lightingAmbientSH_G",((e,t)=>(0,s.s)(v,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new u.E("lightingAmbientSH_B",((e,t)=>(0,s.s)(v,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(h.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add(new d.t("lightingAmbientSH0",((e,t)=>(0,o.i)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new u.E("lightingAmbientSH_R1",((e,t)=>(0,s.s)(v,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new u.E("lightingAmbientSH_G1",((e,t)=>(0,s.s)(v,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new u.E("lightingAmbientSH_B1",((e,t)=>(0,s.s)(v,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new u.E("lightingAmbientSH_R2",((e,t)=>(0,s.s)(v,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new u.E("lightingAmbientSH_G2",((e,t)=>(0,s.s)(v,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new u.E("lightingAmbientSH_B2",((e,t)=>(0,s.s)(v,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(h.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==c.A9.Normal&&t.pbrMode!==c.A9.Schematic||r.code.add(h.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,a.vt)(),v=(0,l.vt)();var p=r(54849),g=r(98619),_=r(22393),x=r(89786),T=r(95250),b=r(20304);r(34727),(0,a.vt)();const A=.4;function E(e){e.constants.add("ambientBoostFactor","float",A)}function S(e){e.uniforms.add(new b.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function C(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==c.A9.Disabled&&e.include(_.c,t),e.include(m,t),e.include(x.p),r.code.add(h.H`
    const float GAMMA_SRGB = ${h.H.float(i.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),E(r),S(r),(0,g.Gc)(r),r.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,g.O4)(r),r.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.A9.Disabled:case c.A9.WaterOnIntegratedMesh:case c.A9.Water:e.include(g.Vt),r.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.A9.Normal:case c.A9.Schematic:r.code.add(h.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new T.e("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(h.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new b.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new b.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==c.A9.Schematic||t.hasColorTexture?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c.A9.Simplified:case c.A9.TerrainWithWater:(0,g.Gc)(r),(0,g.O4)(r),r.code.add(h.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,n.Xb)(t.pbrMode);case c.A9.COUNT:}}(0,a.vt)()},98619:(e,t,r)=>{r.d(t,{Gc:()=>o,O4:()=>a,Vt:()=>s});var i=r(33079),n=r(2597);function o(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},62602:(e,t,r)=>{r.d(t,{W:()=>i,r:()=>s});var i,n,o=r(21818),a=r(2597);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,o.Xb)(t.doubleSidedMode);case i.COUNT:}}(n=i||(i={}))[n.None=0]="None",n[n.View=1]="View",n[n.WindingOrder=2]="WindingOrder",n[n.COUNT=3]="COUNT"},22393:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(2597);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(59469),a=r(89786);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic&&t.pbrMode!==o.A9.Simplified&&t.pbrMode!==o.A9.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotV;
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
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},59469:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>m});var i,n,o=r(99208),a=r(40710),s=r(33079),l=r(2597),c=r(15976),d=r(63761),u=r(46263),h=r(25634);function m(e,t){const r=t.pbrMode,n=e.fragment;if(r!==i.Schematic&&r!==i.Disabled&&r!==i.Normal)return void n.code.add(l.H`void applyPBRFactors() {}`);if(r===i.Disabled)return void n.code.add(l.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===i.Schematic)return void n.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:h,hasMetallicRoughnessTextureTransform:m,hasOcclusionTexture:f,hasOcclusionTextureTransform:v,bindType:p}=t;(h||f)&&e.include(o.r,t),n.code.add(l.H`vec3 mrr;
float occlusion;`),h&&n.uniforms.add(p===u.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),f&&n.uniforms.add(p===u.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new c.o("texOcclusion",(e=>e.textureOcclusion))),n.uniforms.add(p===u.c.Pass?new s.t("mrrFactors",(e=>e.mrrFactors)):new a.W("mrrFactors",(e=>e.mrrFactors))),n.code.add(l.H`
    ${(0,l.If)(h,l.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,l.If)(f,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${f?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,l.If)(h,`applyMetallicRoughness(${m?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,l.If)(f,`applyOcclusion(${v?"occlusionUV":"vuv0"});`)}
    }
  `)}r(74810),(n=i||(i={}))[n.Disabled=0]="Disabled",n[n.Normal=1]="Normal",n[n.Schematic=2]="Schematic",n[n.Water=3]="Water",n[n.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",n[n.Simplified=5]="Simplified",n[n.TerrainWithWater=6]="TerrainWithWater",n[n.COUNT=7]="COUNT",h.NV},89786:(e,t,r)=>{function i(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}r.d(t,{p:()=>i})},25618:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h}),r(9093),r(51850);var i=r(80730),n=r(71988),o=r(93588),a=r(2597),s=r(39589),l=r(46263);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var u=r(63761);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new o.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
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
}`)}a.Y,a.Y},96598:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(52540),n=r(2597),o=r(63761);function a(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:a}){const s=e.vertex,l=e.fragment;if(!r)return s.code.add("void forwardViewPosDepth(vec3 pos) {}"),void l.code.add(`${t?"bool":"void"} discardByTerrainDepth() { ${(0,n.If)(t,"return false;")}}`);e.varyings.add("viewPosDepth","float"),s.code.add("void forwardViewPosDepth(vec3 pos) {\n    viewPosDepth = pos.z;\n  }"),l.include(i.E),l.uniforms.add(new o.N("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))),l.code.add(n.H`
    ${t?"bool":"void"} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?"return viewPosDepth < linearDepth && depth < 1.0;":`if(viewPosDepth ${a?">":"<="} linearDepth) discard;`}
    }`)}},51406:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var i=r(29242),n=r(53466),o=r(2597),a=r(35644);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.zK))).code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK))).code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.zK))).code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.zK))).code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.zK))).code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){}`)}},42398:(e,t,r)=>{r.d(t,{A:()=>m});var i=r(33079),n=r(39589),o=r(46263);class a extends n.n{constructor(e,t,r){super(e,"vec4",o.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.n{constructor(e,t,r){super(e,"float",o.c.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var l=r(2597),c=r(35644),d=r(46540),u=r(78662);r(11725),u.Gd;const h=8;function m(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",h),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),h),new a("vvColorColors",(e=>e.vvColor.colors),h)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},35093:(e,t,r)=>{r.d(t,{Q:()=>i});const i=1/255.5},34845:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(37585),n=r(48163),o=r(87317),a=r(91829),s=r(47286),l=r(71988),c=r(2597);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,o.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.hZ)(h,0,1):(0,i.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)(),h=(0,n.vt)()},63365:(e,t,r)=>{r.d(t,{a:()=>n});var i=r(2597);function n(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}},11955:(e,t,r)=>{r.d(t,{S:()=>l});var i=r(35093),n=r(39589);r(46263),n.n;var o=r(20304),a=r(2597),s=r(89192);function l(e,t){!function(e,t,r){const n=e.fragment,o=t.alphaDiscardMode,l=o===s.sf.Blend;o!==s.sf.Mask&&o!==s.sf.MaskBlend||n.uniforms.add(r),n.code.add(a.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${o===s.sf.Opaque?"color.a = 1.0;":`if (color.a < ${l?a.H.float(i.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,a.If)(o===s.sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}(e,t,new o.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},27950:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(66104),n=r(63365),o=r(2597);function a(e){e.include(n.a),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.k5.Replace)}) {
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

      if (mode == ${o.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},80730:(e,t,r)=>{r.d(t,{U:()=>n});var i=r(2597);function n(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
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
}`)}},52587:(e,t,r)=>{r.d(t,{OH:()=>c,Y6:()=>s,pM:()=>l});var i=r(38954),n=r(51850),o=r(33079),a=r(2597);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new o.t("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function c(e){e.uniforms.add(new o.t("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,i.i)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,n.vt)()},20693:(e,t,r)=>{r.d(t,{yu:()=>f,Nz:()=>x,NB:()=>v,S7:()=>_});var i=r(58083),n=r(9093),o=r(38954),a=r(51850),s=r(40710),l=r(33079),c=r(20304),d=r(39589),u=r(46263);class h extends d.n{constructor(e,t){super(e,"mat4",u.c.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var m=r(40095);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,o.i)(g,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function v(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new m.X("proj",((e,t)=>t.camera.projectionMatrix)),new h("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,o.i)(g,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new m.X("proj",((e,t)=>t.camera.projectionMatrix)),new m.X("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const p=(0,n.vt)(),g=(0,a.vt)();function _(e){e.uniforms.add(new m.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function x(e){e.uniforms.add(new c.m("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}},95250:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"bool",n.c.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}},68259:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},47286:(e,t,r)=>{r.d(t,{G:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},71988:(e,t,r)=>{r.d(t,{E:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec4",n.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},20304:(e,t,r)=>{r.d(t,{m:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"float",n.c.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}}},93588:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"int",n.c.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},85977:(e,t,r)=>{r.d(t,{N5:()=>l});var i=r(49186),n=(r(44208),r(53966)),o=r(46263),a=r(620);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class l extends s{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new v,this.outputs=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s=n.main.generateSource(),l="vertex"===e?x:_,c=n.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${l}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${d.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,o,t,n)}}}class c{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else n.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new i.A("Shader does not contain main function body.")}}class u{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class h extends s{constructor(){super(...arguments),this.uniforms=new c(this),this.main=new d(this),this.code=new u(this),this.constants=new g(this)}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class v{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?v.ALLOWLIST_VERTEX:v.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}v.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],v.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:p.DEFAULT_NAME,type:p.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}p.DEFAULT_TYPE="vec4",p.DEFAULT_NAME="fragColor";class g{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},63761:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},97220:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}},98958:(e,t,r)=>{r.d(t,{w:()=>d});var i=r(97768),n=r(39341),o=r(3694),a=r(94656);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,a.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}var l=r(63907),c=r(90644);class d{constructor(e,t,r,o,a=n.D){this.release=o,this.locations=a,this.primitiveType=l.WR.TRIANGLES,this.key=t.key,this._program=new s(e.rctx,r.get().build(t),a),this._pipeline=this.initializePipeline(t),this.reload=async n=>{if(n&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,i.WD)(this._program),this._program=new s(e.rctx,r.get().build(t),a),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return(0,c.Ey)({blending:c.Os,colorWrite:c.kn})}}},51976:(e,t,r)=>{r.d(t,{K:()=>s,W:()=>l});var i=r(49186),n=r(2597),o=r(4576);class a{constructor(e){this._bits=[...e]}equals(e){return(0,o.aI)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}class s extends n.Y{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new a(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}}function l(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits;let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);const l=a[s],c=(1<<o)-1<<l;a[s]+=o,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&c)>>l},set(t){if(this[r]!==t){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~c|+t<<l&c,"number"!=typeof t)throw new i.A(`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new i.A(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&c)>>l)},set(e){if(this[r]!==e&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"boolean"!=typeof e))throw new i.A(`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}},57917:(e,t,r)=>{r.d(t,{S:()=>n});var i=r(34275);function n(e){if(e.length<i.y9)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,i.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}},29920:(e,t,r)=>{r.d(t,{j:()=>s});var i=r(3694),n=r(38954),o=r(51850),a=r(620);class s{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,a.vA)(e.length>=1),(0,a.vA)(3===r.size||4===r.size);const{data:i,size:s,indices:c}=r;(0,a.vA)(c.length%this._numIndexPerPrimitive==0),(0,a.vA)(c.length>=e.length*this._numIndexPerPrimitive);const d=e.length;let u=s*c[this._numIndexPerPrimitive*e[0]];l.clear(),l.push(u);const h=(0,o.fA)(i[u],i[u+1],i[u+2]),m=(0,o.o8)(h);for(let t=0;t<d;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){u=s*c[r+e],l.push(u);let t=i[u];h[0]=Math.min(t,h[0]),m[0]=Math.max(t,m[0]),t=i[u+1],h[1]=Math.min(t,h[1]),m[1]=Math.max(t,m[1]),t=i[u+2],h[2]=Math.min(t,h[2]),m[2]=Math.max(t,m[2])}}this.bbMin=h,this.bbMax=m;const f=(0,n.m)((0,o.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(m[0]-h[0],m[1]-h[1]),m[2]-h[2]);let v=this.radius*this.radius;for(let e=0;e<l.length;++e){u=l.at(e);const t=i[u]-f[0],r=i[u+1]-f[1],n=i[u+2]-f[2],o=t*t+r*r+n*n;if(o<=v)continue;const a=Math.sqrt(o),s=.5*(a-this.radius);this.radius=this.radius+s,v=this.radius*this.radius;const c=s/a;f[0]+=t*c,f[1]+=r*c,f[2]+=n*c}this.center=f,l.clear()}getChildren(){if(this._children||(0,n.s)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,n.m)((0,o.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:a,size:l,indices:c}=this.position;for(let n=0;n<t;++n){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[n];let s=l*c[o],d=a[s],u=a[s+1],h=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=l*c[o+e];const t=a[s],r=a[s+1],i=a[s+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[n]=t,++i[t]}let d=0;for(let e=0;e<8;++e)i[e]>0&&++d;if(d<2)return;const u=new Array(8);for(let e=0;e<8;++e)u[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];u[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==u[e]&&this._children.push(new s(u[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){l.prune()}}const l=new i.A({deallocator:null})},69720:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(24326);class n{constructor(){this.id=(0,i.c)()}}},96672:(e,t,r)=>{var i;r.d(t,{X:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},39341:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(46540);const n=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.CENTEROFFSETANDDISTANCE,5],[i.r.SYMBOLCOLOR,5],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.ROTATION,8],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},25634:(e,t,r)=>{r.d(t,{m8:()=>l,NV:()=>d});var i=r(97768),n=r(74887),o=r(2597),a=r(89192);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return a.Am.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new d(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,n.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.Y{constructor(e=null){super(),this.textureEmissive=e}}class d extends c{constructor(e=null,t=null,r=null,i=null,n=null,o,a){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}}},87170:(e,t,r)=>{r.d(t,{V:()=>M});var i=r(9093),n=r(38954),o=r(97146),a=r(57917),s=r(29920),l=r(69720),c=r(96672),d=r(51850),u=r(4341),h=r(11964);function m(e,t,r){return(0,n.d)(f,t,e),(0,n.d)(v,r,e),.5*(0,n.l)((0,n.e)(f,f,v))}r(32114),new u.I(h.vt),new u.I((()=>{return e?{p0:(0,d.o8)(e.p0),p1:(0,d.o8)(e.p1),p2:(0,d.o8)(e.p2)}:{p0:(0,d.vt)(),p1:(0,d.vt)(),p2:(0,d.vt)()};var e}));const f=(0,d.vt)(),v=(0,d.vt)(),p=(0,d.vt)(),g=(0,d.vt)(),_=(0,d.vt)(),x=(0,d.vt)();var T=r(24326),b=r(89192);class A{constructor(){this.uid=(0,T.c)()}}class E extends A{constructor(e){super(),this.highlightGroup=e,this.channel=b.Mg.Highlight}}var S=r(620),C=r(46540);class M extends l.J{constructor(e,t,r=null,i=c.X.Mesh,n=null,a=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,o.Dg)(r.indices)}),e===C.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new M(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:(0,a.S)(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value?.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===c.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===c.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,n.t)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.i)(t,0,0,0),(0,n.i)(x,0,0,0);let a=0,s=0;for(let e=0;e<o.length-2;e+=3){const l=o[e]*r,c=o[e+1]*r,d=o[e+2]*r;(0,n.i)(p,i[l],i[l+1],i[l+2]),(0,n.i)(g,i[c],i[c+1],i[c+2]),(0,n.i)(_,i[d],i[d+1],i[d+2]);const u=m(p,g,_);u?((0,n.g)(p,p,g),(0,n.g)(p,p,_),(0,n.h)(p,p,1/3*u),(0,n.g)(t,t,p),a+=u):((0,n.g)(x,x,p),(0,n.g)(x,x,g),(0,n.g)(x,x,_),s+=3)}return!(0===s&&0===a||(0!==a?((0,n.h)(t,t,1/a),0):0===s||((0,n.h)(t,x,1/s),0)))}(this.attributes.get(C.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(C.r.POSITION);return function(e,t,r){if(!e)return!1;(0,n.i)(r,0,0,0),(0,n.i)(x,0,0,0);let i=0,o=0;const{size:a,data:s,indices:l}=e,c=l.length-1,d=c+(t?2:0);for(let e=0;e<d;e+=2){const t=e<c?e+1:0,d=l[e<c?e:c]*a,u=l[t]*a;p[0]=s[d],p[1]=s[d+1],p[2]=s[d+2],g[0]=s[u],g[1]=s[u+1],g[2]=s[u+2],(0,n.h)(p,(0,n.g)(p,p,g),.5);const h=(0,n.G)(p,g);h>0?((0,n.g)(r,r,(0,n.h)(p,p,h)),i+=h):0===i&&((0,n.g)(x,x,p),o++)}return 0!==i?((0,n.h)(r,r,1/i),!0):0!==o&&((0,n.h)(r,x,1/o),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.i)(t,0,0,0);let a=-1,s=0;for(let e=0;e<o.length;e++){const n=o[e]*r;a!==n&&(t[0]+=i[n],t[1]+=i[n+1],t[2]+=i[n+2],s++),a=n}return s>1&&(0,n.h)(t,t,1/s),s>0}(this.attributes.get(C.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(C.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===c.X.Mesh?3:1;(0,S.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,o.tM)(e.indices.length/t);return new s.j(r,t,e)}get transformation(){return this._transformation??i.zK}set transformation(e){this._transformation=e&&e!==i.zK?(0,i.o8)(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach(((t,r)=>e(r)))}allocateIdAndHighlight(e){const t=new E(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroup:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroup:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}},11725:(e,t,r)=>{r.d(t,{im:()=>u,m$:()=>i});var i,n,o=r(51850),a=r(2597),s=r(69720),l=r(96672),c=r(39341),d=r(43616);class u extends s.J{constructor(e,t){super(),this.type=l.X.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=c.D,this._pp0=(0,o.fA)(0,0,1),this._pp1=(0,o.fA)(0,0,0),this._parameters=new t,(0,d.MB)(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,d.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}(n=i||(i={}))[n.None=0]="None",n[n.Occlude=1]="Occlude",n[n.Transparent=2]="Transparent",n[n.OccludeAndTransparent=4]="OccludeAndTransparent",n[n.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",n[n.Opaque=16]="Opaque",a.Y},59643:(e,t,r)=>{var i;r.d(t,{Y:()=>i}),function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(i||(i={}))},33524:(e,t,r)=>{r.d(t,{K_:()=>f,Yf:()=>c,aB:()=>m,ez:()=>l,m6:()=>v,xt:()=>u,z5:()=>d});var i=r(49255),n=r(59643),o=r(63907),a=r(90644);const s=(0,a.p3)(o.dn.ONE,o.dn.ZERO,o.dn.ONE,o.dn.ONE_MINUS_SRC_ALPHA);function l(e){return e===n.Y.FrontFace?null:s}function c(e){switch(e){case n.Y.NONE:return a.Ky;case n.Y.ColorAlpha:return s;case n.Y.FrontFace:case n.Y.COUNT:return null}}function d(e){if(e.draped)return null;switch(e.oitPass){case n.Y.NONE:case n.Y.FrontFace:return e.writeDepth?a.Uy:null;case n.Y.ColorAlpha:case n.Y.COUNT:return null}}const u=5e5,h={factor:-1,units:-2};function m(e){return e?h:null}function f(e,t=o.MT.LESS){return e===n.Y.NONE||e===n.Y.FrontFace?t:o.MT.LEQUAL}function v(e,t){const r=(0,i.LG)(t);return e===n.Y.ColorAlpha||r?{buffers:[o.Nm.COLOR_ATTACHMENT0,o.Nm.COLOR_ATTACHMENT1]}:null}},13464:(e,t,r)=>{var i;r.d(t,{N:()=>i}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"}(i||(i={}))},48833:(e,t,r)=>{r.d(t,{g:()=>z}),r(44208);var i=r(49186),n=r(65529),o=r(97768),a=r(74887),s=r(34275),l=r(84952),c=r(99677),d=r(56058),u=r(89192),h=r(2741);let m;var f=r(92993),v=r(63907),p=r(72626),g=r(42293);let _=null,x=null;async function T(){return null==x&&(m??=(async()=>{const e=await r.e(9321).then(r.bind(r,49321)),t=await e.default({locateFile:e=>(0,h.s)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),x=m,_=await x),x}function b(e,t,r,i,n){const o=(0,g.IB)(t?v.CQ.COMPRESSED_RGBA8_ETC2_EAC:v.CQ.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function A(e){return e.getNumImages()>=1&&!e.isUASTC()}function E(e){return e.getFaces()>=1&&e.isETC1S()}function S(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[f.n.ETC2_RGBA,v.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[f.n.ETC1_RGB,v.CQ.COMPRESSED_RGB8_ETC2]:c?i?[f.n.BC3_RGBA,v.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[f.n.BC1_RGB,v.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[f.n.RGBA32,v.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?v.Cj.LINEAR_MIPMAP_LINEAR:v.Cj.LINEAR,t.width=n,t.height=o,new p.g(e,t,{type:"compressed",levels:m})}var C=r(69720),M=r(96672),w=r(53966);const O=()=>w.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function y(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const I=y("DXT1"),R=y("DXT3"),N=y("DXT5");function P(e,t,r){if(e instanceof ImageData)return P(L(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function L(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new i.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var D,H,F=r(620),B=r(67171);class z extends C.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=M.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new n.A,this._parameters={...V,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,l.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,l.DB)(e.src)||(0,l.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new B.R;return t.wrapMode=this._parameters.wrap??v.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?v.Cj.LINEAR_MIPMAP_LINEAR:v.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,s.mw)(e)||(0,s.mg)(e))return t.encoding===u.JS.KTX2_ENCODING?function(e,t){if(null==_)return e.byteLength;const r=new _.KTX2File(new Uint8Array(e)),i=E(r)?b(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===u.JS.BASIS_ENCODING?function(e,t){if(null==_)return e.byteLength;const r=new _.BasisFile(new Uint8Array(e)),i=A(r)?b(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?G(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new p.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,s.mg)(t)&&this._parameters.encoding===u.JS.DDS_ENCODING?this._loadFromDDSData(e,t):(0,s.mw)(t)&&this._parameters.encoding===u.JS.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,s.mg)(t)?this._loadFromPixelData(e,t):(0,s.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<D.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e.buffer,e.byteOffset,31);if(542327876!==r[0])return O().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return O().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,o;switch(i){case I:n=8,o=v.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case R:n=16,o=v.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case N:n=16,o=v.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return O().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];(3&s||3&l)&&(O().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let m=e.byteOffset+r[1]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*n,u=new Uint8Array(e.buffer,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:o,width:c,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?v.Cj.LINEAR_MIPMAP_LINEAR:v.Cj.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new p.g(e,t,n)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==_&&(_=await T());const i=new _.KTX2File(new Uint8Array(r));if(!E(i))return null;i.startTranscoding();const n=S(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==_&&(_=await T());const i=new _.BasisFile(new Uint8Array(r));if(!A(i))return null;i.startTranscoding();const n=S(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,F.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?v.Ab.LUMINANCE:3===this._parameters.components?v.Ab.RGB:v.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new p.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,c.D)(t,{signal:r});return(0,a.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,d.Sx)(t,t.src,!1,r);return(0,a.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=D.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((n,s)=>{const l=()=>{t.removeEventListener("loadeddata",c),t.removeEventListener("error",d),(0,o.xt)(u)},c=()=>{t.readyState>=D.HAVE_CURRENT_DATA&&(l(),n(this._loadFromImage(e,t)))},d=e=>{l(),s(e||new i.A("Failed to load video"))};t.addEventListener("loadeddata",c),t.addEventListener("error",d);const u=(0,a.u7)(r,(()=>d((0,a.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?L(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return P(e,i,n)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return P(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=G(r);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?v.Ab.RGB:v.Ab.RGBA,n.width=i.width,n.height=i.height,n.shouldCompress=this._parameters.shouldCompress,this._glTexture=new p.g(e,n,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,o.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function G(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(H=D||(D={}))[H.HAVE_NOTHING=0]="HAVE_NOTHING",H[H.HAVE_METADATA=1]="HAVE_METADATA",H[H.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",H[H.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",H[H.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const V={wrap:{s:v.pF.REPEAT,t:v.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1,shouldCompress:!1}},89192:(e,t,r)=>{var i,n,o,a,s,l,c,d;r.d(t,{Am:()=>a,C7:()=>o,JS:()=>d,Mg:()=>l,dd:()=>s,it:()=>n,s2:()=>i,sf:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(d||(d={}))},77194:(e,t,r)=>{r.d(t,{MD:()=>l,cJ:()=>s,hs:()=>c,m0:()=>a});var i=r(34727),n=(r(17352),r(97937));function o(e,t,r){const i=r.parameters;return d.scale=Math.min(i.divisor/(t-i.offset),1),d.factor=function(e){return Math.abs(e*e*e)}(e),d}function a(e,t){return(0,i.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function s(e,t,r,i){i.scale=function(e,t,r){const i=o(e,t,r);return i.minScaleFactor=0,a(1,i)}(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function l(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function c(e,t,r,i){return a(e,o(t,r,i))}r(24151),(0,i.kU)(10),(0,i.kU)(12),(0,i.kU)(70),(0,i.kU)(40);const d={scale:0,factor:0,minScaleFactor:0};(0,n.c)()},16396:(e,t,r)=>{r.d(t,{ou:()=>c}),r(77690),r(29242),r(58083),r(9093);var i=r(38954),n=r(51850),o=r(97937),a=r(24151),s=r(57005);const l=new class{constructor(e=0){this.offset=e,this.sphere=(0,o.c)(),this.tmpVertex=(0,n.vt)()}applyToVertex(e,t,r){const n=this.objectTransform.transform,o=(0,i.i)(d,e,t,r),a=(0,i.t)(o,o,n),s=this.offset/(0,i.l)(a);(0,i.b)(a,a,a,s);const l=this.objectTransform.inverse;return(0,i.t)(this.tmpVertex,a,l),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,i.l)(e);(0,i.b)(e,e,e,r);const n=this.offset/(0,i.l)(t);(0,i.b)(t,t,t,n)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,i.l)((0,o.a)(e)),r=this.offset/t;return(0,i.b)((0,o.a)(this.sphere),(0,o.a)(e),(0,o.a)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function c(e){return null!=e?(l.offset=e,l):null}new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,n.vt)(),this._tmpMbs=(0,o.c)(),this._tmpObb=new s.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,i.l)(e)}applyToVertex(e,t,r){const n=(0,i.i)(d,e,t,r),o=(0,i.i)(u,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,i.l)(o);return(0,i.b)(this._tmpVertex,n,o,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*o))*Math.min(l,u),v=.5*(1+Math.sign(i*a))*Math.min(c,h),p=.5*(1+Math.sign(n*s))*Math.min(d,m),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(f*f+v*v+p*p),b=Math.sign(l+r),A=Math.sign(c+i),E=Math.sign(d+n),S=Math.sign(u+o),C=Math.sign(h+a),M=Math.sign(m+s),w=this._totalOffset;if(T<w)return e[0]-=(1-b)*w,e[1]-=(1-A)*w,e[2]-=(1-E)*w,e[3]+=S*w,e[4]+=C*w,e[5]+=M*w,e;const O=w/Math.sqrt(g*g+_*_+x*x),y=w/T,I=y-O,R=-I;return e[0]+=r*(b*R+y),e[1]+=i*(A*R+y),e[2]+=n*(E*R+y),e[3]+=o*(S*I+O),e[4]+=a*(C*I+O),e[5]+=s*(M*I+O),e}applyToMbs(e){const t=(0,i.l)((0,o.a)(e)),r=this._totalOffset/t;return(0,i.b)((0,o.a)(this._tmpMbs),(0,o.a)(e),(0,o.a)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,s.gm)(e,this._totalOffset,this._totalOffset,a.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,n.vt)()}applyToVertex(e,t,r){const n=(0,i.i)(d,e,t,r),o=(0,i.g)(u,n,this.localOrigin),a=this.offset/(0,i.l)(o);return(0,i.b)(this.tmpVertex,n,o,a),this.tmpVertex}applyToAabb(e){const t=h,r=m,i=f;for(let n=0;n<3;++n)t[n]=e[0+n]+this.localOrigin[n],r[n]=e[3+n]+this.localOrigin[n],i[n]=t[n];const n=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=n[t],e[t+3]=n[t];const o=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let n=0;n<3;++n)i[n]=e&1<<n?r[n]:t[n];o(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let n=0;n<3;++n)i[n]=a&1<<n?0:e&1<<n?t[n]:r[n];o(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const d=(0,n.vt)(),u=(0,n.vt)(),h=(0,n.vt)(),m=(0,n.vt)(),f=(0,n.vt)()},11787:(e,t,r)=>{r.d(t,{$U:()=>K});var i=r(38954),n=r(51850),o=r(24151),a=r(1843),s=r(49255),l=r(96336),c=r(22911),d=r(62602),u=r(59469),h=r(35093),m=r(16943),f=r(89192),v=r(25634),p=r(11725),g=r(33524),_=r(70328),x=r(96672),T=r(620),b=r(46540);class A{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const E=(0,_.vt)(),S=(0,n.vt)();function C(e,t,r,n,o,a,s){if(null==e)return;const l=function(e,t){return(0,i.i)(t,1/e[0],1/e[1],1/e[2])}(r,S);if((0,_.Ne)(E,e.bbMin),(0,_.vI)(E,e.bbMax),null!=o&&o.applyToAabb(E),function(e,t,r,i){return function(e,t,r,i){const n=(e[0]-i-t[0])*r[0],o=(e[3]+i-t[0])*r[0];let a=Math.min(n,o),s=Math.max(n,o);const l=(e[1]-i-t[1])*r[1],c=(e[4]+i-t[1])*r[1];if(s=Math.min(s,Math.max(l,c)),s<0)return!1;if(a=Math.max(a,Math.min(l,c)),a>s)return!1;const d=(e[2]-i-t[2])*r[2],u=(e[5]+i-t[2])*r[2];return s=Math.min(s,Math.max(d,u)),!(s<0)&&(a=Math.max(a,Math.min(d,u)),!(a>s)&&a<1/0)}(e,t,r,i)}(E,t,l,n)){const{primitiveIndices:i,position:l}=e,c=i?i.length:l.indices.length/3;if(c>L){const i=e.getChildren();if(void 0!==i){for(const e of i)C(e,t,r,n,o,a,s);return}}!function(e,t,r,i,n,o,a,s,l,c,d){const u=e[0],h=e[1],m=e[2],f=t[0],v=t[1],p=t[2],{normalRequired:g}=c;for(let e=0;e<i;++e){const t=s[e],r=3*t,i=a*n[r];let c=o[i],_=o[i+1],x=o[i+2];const T=a*n[r+1];let b=o[T],A=o[T+1],E=o[T+2];const S=a*n[r+2];let C=o[S],w=o[S+1],O=o[S+2];null!=l&&([c,_,x]=l.applyToVertex(c,_,x,e),[b,A,E]=l.applyToVertex(b,A,E,e),[C,w,O]=l.applyToVertex(C,w,O,e));const y=b-c,R=A-_,N=E-x,P=C-c,L=w-_,H=O-x,F=v*H-L*p,B=p*P-H*f,z=f*L-P*v,G=y*F+R*B+N*z;if(Math.abs(G)<=D)continue;const V=u-c,U=h-_,W=m-x,j=V*F+U*B+W*z;if(G>0){if(j<0||j>G)continue}else if(j>0||j<G)continue;const k=U*N-R*W,q=W*y-N*V,$=V*R-y*U,Y=f*k+v*q+p*$;if(G>0){if(Y<0||j+Y>G)continue}else if(Y>0||j+Y<G)continue;const Z=(P*k+L*q+H*$)/G;Z>=0&&d(Z,t,g?I(y,R,N,P,L,H,M):null)}}(t,r,0,c,l.indices,l.data,l.stride,i,o,a,s)}}const M=(0,n.vt)();const w=(0,n.vt)(),O=(0,n.vt)(),y=(0,n.vt)();function I(e,t,r,n,o,a,s){return(0,i.i)(N,e,t,r),(0,i.i)(P,n,o,a),(0,i.e)(s,N,P),(0,i.n)(s,s),s}function R(e){return(0,i.a)(N,e[1],e[0]),(0,i.a)(P,e[2],e[0]),(0,i.e)(M,N,P),(0,i.n)(M,M),M}const N=(0,n.vt)(),P=(0,n.vt)(),L=1e3,D=1e-7,H=(0,n.vt)(),F=[(0,n.vt)(),(0,n.vt)(),(0,n.vt)()];var B=r(13464),z=r(16396),G=r(59907);class V{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(b.r.POSITION).indices.length}write(e,t,r,i,n,o){(0,G.SA)(r,i,this.vertexBufferLayout,e,t,n,o)}}var U=r(43616),W=r(97225),j=r(90237),k=r(53466),q=r(51976),$=r(35256);class Y extends $.E{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=f.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=f.s2.None,this.normalType=l.W.Attribute,this.customDepthTest=f.it.Less,this.emissionSource=c.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===c.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?k.I.Default:k.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,j._)([(0,q.W)({count:f.sf.COUNT})],Y.prototype,"alphaDiscardMode",void 0),(0,j._)([(0,q.W)({count:d.W.COUNT})],Y.prototype,"doubleSidedMode",void 0),(0,j._)([(0,q.W)({count:u.A9.COUNT})],Y.prototype,"pbrMode",void 0),(0,j._)([(0,q.W)({count:f.s2.COUNT})],Y.prototype,"cullFace",void 0),(0,j._)([(0,q.W)({count:l.W.COUNT})],Y.prototype,"normalType",void 0),(0,j._)([(0,q.W)({count:f.it.COUNT})],Y.prototype,"customDepthTest",void 0),(0,j._)([(0,q.W)({count:c.ZX.COUNT})],Y.prototype,"emissionSource",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasVertexColors",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasSymbolColors",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasVerticalOffset",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasColorTexture",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasMetallicRoughnessTexture",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasOcclusionTexture",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasNormalTexture",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasScreenSizePerspective",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasVertexTangents",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasOccludees",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasModelTransformation",void 0),(0,j._)([(0,q.W)()],Y.prototype,"offsetBackfaces",void 0),(0,j._)([(0,q.W)()],Y.prototype,"vvSize",void 0),(0,j._)([(0,q.W)()],Y.prototype,"vvColor",void 0),(0,j._)([(0,q.W)()],Y.prototype,"receiveShadows",void 0),(0,j._)([(0,q.W)()],Y.prototype,"receiveAmbientOcclusion",void 0),(0,j._)([(0,q.W)()],Y.prototype,"textureAlphaPremultiplied",void 0),(0,j._)([(0,q.W)()],Y.prototype,"instanced",void 0),(0,j._)([(0,q.W)()],Y.prototype,"instancedColor",void 0),(0,j._)([(0,q.W)()],Y.prototype,"writeDepth",void 0),(0,j._)([(0,q.W)()],Y.prototype,"transparent",void 0),(0,j._)([(0,q.W)()],Y.prototype,"enableOffset",void 0),(0,j._)([(0,q.W)()],Y.prototype,"terrainDepthTest",void 0),(0,j._)([(0,q.W)()],Y.prototype,"cullAboveTerrain",void 0),(0,j._)([(0,q.W)()],Y.prototype,"snowCover",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasColorTextureTransform",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasEmissionTextureTransform",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasNormalTextureTransform",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasOcclusionTextureTransform",void 0),(0,j._)([(0,q.W)()],Y.prototype,"hasMetallicRoughnessTextureTransform",void 0);var Z=r(97220),X=r(57323);class J extends W.R5{constructor(e,t,i){super(e,t,i,new Z.$(X.R,(()=>r.e(9933).then(r.bind(r,39933))))),this.type="RealisticTreeTechnique"}}class K extends p.im{constructor(e,t){super(e,ee),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[B.N.OPAQUE_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&(!this.parameters.transparent||this.isTransparentEmitter(e))],[B.N.TRANSPARENT_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&!this.isTransparentEmitter(e)&&this.parameters.writeDepth],[B.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.XY)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&!this.isTransparentEmitter(e)&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,a.BP)().vec3f(b.r.POSITION);return e.normalType===l.W.Compressed?t.vec2i16(b.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(b.r.NORMAL),e.hasVertexTangents&&t.vec4f(b.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(b.r.UV0),e.hasVertexColors&&t.vec4u8(b.r.COLOR),e.hasSymbolColors&&t.vec4u8(b.r.SYMBOLCOLOR),(0,m.E)()&&t.vec4u8(b.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new Y(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.V.Shadow&&e!==s.V.ShadowExcludeHighlight&&e!==s.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<h.Q)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o=t||n||i,a="replace"===e.colorMixMode,s=e.opacity>=h.Q;if(r&&o)return a||s;const l=e.externalColor&&e.externalColor[3]>=h.Q;return r?a?l:s:o?a||s:a?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,i.p)(this.parameters.emissiveFactor,n.uY)}getConfiguration(e,t){const r=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:o}=r;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!r.normalTextureId,this._configuration.hasColorTexture=!!r.textureId,this._configuration.hasVertexTangents=!i&&r.hasVertexTangents,this._configuration.instanced=r.isInstanced,this._configuration.instancedDoublePrecision=r.instancedDoublePrecision,this._configuration.vvSize=!!r.vvSize,this._configuration.hasVerticalOffset=null!=r.verticalOffset,this._configuration.hasScreenSizePerspective=null!=r.screenSizePerspective,this._configuration.hasSlicePlane=r.hasSlicePlane,this._configuration.alphaDiscardMode=r.textureAlphaMode,this._configuration.normalType=i?l.W.Attribute:r.normalType,this._configuration.transparent=r.transparent&&!this.isTransparentEmitter(e),this._configuration.writeDepth=r.writeDepth,null!=r.customDepthTest&&(this._configuration.customDepthTest=r.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=r.hasSlicePlane?f.s2.None:r.cullFace,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=r.modelTransformation,this._configuration.hasVertexColors=r.hasVertexColors,this._configuration.hasSymbolColors=r.hasSymbolColors,this._configuration.doubleSidedMode=i?d.W.WindingOrder:n&&"normal"===o?d.W.View:n&&"winding-order"===o?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=r.hasInstancedColor,(0,s.RN)(e)?(this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.receiveShadows=r.receiveShadows,this._configuration.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&null!=t.ssao):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!r.vvColor,this._configuration.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,this._configuration.pbrMode=r.usePBR?r.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!r.metallicRoughnessTextureId,this._configuration.emissionSource=i?c.ZX.None:null!=r.emissiveTextureId?c.ZX.Texture:r.usePBR?c.ZX.Value:c.ZX.None,this._configuration.hasOcclusionTexture=!i&&!!r.occlusionTextureId,this._configuration.offsetBackfaces=!(!r.transparent||this.isTransparentEmitter(e)||!r.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<g.xt,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!r.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,r,n,a,s){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,i.i)(ae,t[12],t[13],t[14]);let s=null;switch(r.viewingMode){case o.RT.Global:s=(0,i.n)(ne,ae);break;case o.RT.Local:s=(0,i.c)(ne,ie)}let l=0;const c=(0,i.d)(se,ae,e.eye),d=(0,i.l)(c),u=(0,i.h)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,i.f)(s,u)),l+=(0,U.kE)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,i.h)(s,s,l),(0,i.q)(oe,s,r.transform.inverseRotation),n=(0,i.d)(te,n,oe),a=(0,i.d)(re,a,oe)}!function(e,t,r,n,o,a){if(!e.visible)return;const s=(0,i.a)(H,n,r),l=(e,t,r)=>{a(e,r,t,!1)},c=new A(!1,t.options.normalRequired);if(e.boundingInfo){(0,T.vA)(e.type===x.X.Mesh);const i=t.tolerance;C(e.boundingInfo,r,s,i,o,c,l)}else{const t=e.attributes.get(b.r.POSITION),n=t.indices;!function(e,t,r,n,o,a,s,l,c,d){const u=t,h=F,m=Math.abs(u[0]),f=Math.abs(u[1]),v=Math.abs(u[2]),p=m>=f?m>=v?0:2:f>=v?1:2,g=p,_=u[g]<0?2:1,x=(p+_)%3,T=(p+(3-_))%3,b=u[x]/u[g],A=u[T]/u[g],E=1/u[g],S=w,C=O,M=y,{normalRequired:I}=c;for(let t=r;t<n;++t){const r=3*t,n=s*o[r];(0,i.i)(h[0],a[n+0],a[n+1],a[n+2]);const c=s*o[r+1];(0,i.i)(h[1],a[c+0],a[c+1],a[c+2]);const u=s*o[r+2];(0,i.i)(h[2],a[u+0],a[u+1],a[u+2]),l&&((0,i.c)(h[0],l.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,i.c)(h[1],l.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,i.c)(h[2],l.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,i.a)(S,h[0],e),(0,i.a)(C,h[1],e),(0,i.a)(M,h[2],e);const m=S[x]-b*S[g],f=S[T]-A*S[g],v=C[x]-b*C[g],p=C[T]-A*C[g],_=M[x]-b*M[g],w=M[T]-A*M[g],O=_*p-w*v,y=m*w-f*_,N=v*f-p*m;if((O<0||y<0||N<0)&&(O>0||y>0||N>0))continue;const P=O+y+N;if(0===P)continue;const L=O*(E*S[g])+y*(E*C[g])+N*(E*M[g]);if(L*Math.sign(P)<0)continue;const D=L/P;D>=0&&d(D,t,I?R(h):null)}}(r,s,0,n.length/3,n,t.data,t.stride,o,c,l)}}(e,r,n,a,(0,z.ou)(r.verticalOffset),s)}isTransparentEmitter(e){return(0,s.LG)(e)&&this.parameters.transparent&&this.hasEmissions}createGLMaterial(e){return new Q(e)}createBufferWriter(){return new V(this._vertexBufferLayout)}}class Q extends v.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,i.i)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?J:W.R5,e)}}class ee extends W.uD{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const te=(0,n.vt)(),re=(0,n.vt)(),ie=(0,n.fA)(0,0,1),ne=(0,n.vt)(),oe=(0,n.vt)(),ae=(0,n.vt)(),se=(0,n.vt)()},35256:(e,t,r)=>{r.d(t,{E:()=>c});var i=r(90237),n=r(49255),o=r(51976);class a extends o.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,o.W)()],a.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,o.W)()],a.prototype,"hasModelTransformation",void 0);var s=r(46263),l=r(59643);class c extends a{constructor(){super(...arguments),this.output=n.V.Color,this.oitPass=l.Y.NONE,this.hasSlicePlane=!1,this.bindType=s.c.Pass,this.writeDepth=!0}}(0,i._)([(0,o.W)({count:n.V.COUNT})],c.prototype,"output",void 0),(0,i._)([(0,o.W)({count:l.Y.COUNT})],c.prototype,"oitPass",void 0),(0,i._)([(0,o.W)()],c.prototype,"hasSlicePlane",void 0)},43616:(e,t,r)=>{r.d(t,{MB:()=>s,Um:()=>l,kE:()=>a});var i=r(4576),n=r(34727),o=r(77194);function a(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;null!=a&&(s=(0,o.hs)(s,i,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.qE)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function s(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?Array.isArray(e[n])&&(0,i.aI)(o,e[n])||(e[n]=o.slice(),r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}const l={multiply:1,ignore:2,replace:3,tint:4}},59907:(e,t,r)=>{r.d(t,{Hk:()=>h,Pq:()=>u,SA:()=>p,Ut:()=>d,p1:()=>m,tH:()=>v,tb:()=>f,uO:()=>s});var i=r(58083),n=r(13030),o=r(620),a=r(46540);function s(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let e=0;e<l;++e)a[r]=n[o[e]],r+=s;else for(let e=0;e<l;++e){const t=n[o[e]];for(let e=0;e<i;e++)a[r]=t,r+=s}}function l(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let e=0;e<s;++e){const t=2*n[e];o[r]=i[t],o[r+1]=i[t+1],r+=a}}function c(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}}function d(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let e=0;e<l;++e){const t=4*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}}function u(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride;t*=n;for(let e=0;e<r;++e)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=n}function h(e,t,r,n,o=1){if(!t)return void c(e,r,n,o);const{data:a,indices:s}=e,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=t[0],m=t[1],f=t[2],v=t[4],p=t[5],g=t[6],_=t[8],x=t[9],T=t[10],b=t[12],A=t[13],E=t[14];n*=d;let S=0,C=0,M=0;const w=(0,i.tZ)(t)?e=>{S=a[e]+b,C=a[e+1]+A,M=a[e+2]+E}:e=>{const t=a[e],r=a[e+1],i=a[e+2];S=h*t+v*r+_*i+b,C=m*t+p*r+x*i+A,M=f*t+g*r+T*i+E};if(1===o)for(let e=0;e<u;++e)w(3*s[e]),l[n]=S,l[n+1]=C,l[n+2]=M,n+=d;else for(let e=0;e<u;++e){w(3*s[e]);for(let e=0;e<o;++e)l[n]=S,l[n+1]=C,l[n+2]=M,n+=d}}function m(e,t,r,n,o=1){if(!t)return void c(e,r,n,o);const{data:a,indices:s}=e,l=t,d=r.typedBuffer,u=r.typedBufferStride,h=s.length,m=l[0],f=l[1],v=l[2],p=l[4],g=l[5],_=l[6],x=l[8],T=l[9],b=l[10],A=!(0,i.ut)(l),E=1e-6,S=1-E;n*=u;let C=0,M=0,w=0;const O=(0,i.tZ)(l)?e=>{C=a[e],M=a[e+1],w=a[e+2]}:e=>{const t=a[e],r=a[e+1],i=a[e+2];C=m*t+p*r+x*i,M=f*t+g*r+T*i,w=v*t+_*r+b*i};if(1===o)if(A)for(let e=0;e<h;++e){O(3*s[e]);const t=C*C+M*M+w*w;if(t<S&&t>E){const e=1/Math.sqrt(t);d[n]=C*e,d[n+1]=M*e,d[n+2]=w*e}else d[n]=C,d[n+1]=M,d[n+2]=w;n+=u}else for(let e=0;e<h;++e)O(3*s[e]),d[n]=C,d[n+1]=M,d[n+2]=w,n+=u;else for(let e=0;e<h;++e){if(O(3*s[e]),A){const e=C*C+M*M+w*w;if(e<S&&e>E){const t=1/Math.sqrt(e);C*=t,M*=t,w*=t}}for(let e=0;e<o;++e)d[n]=C,d[n+1]=M,d[n+2]=w,n+=u}}function f(e,t,r,i,n=1){const{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}function v(e,t,r,i,n=1){const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<r;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function p(e,t,r,i,o,s,l){for(const c of r.fields.keys()){const r=e.get(c),d=r?.indices;if(r&&d)g(c,r,i,o,s,l);else if(c===a.r.OBJECTANDLAYERIDCOLOR&&null!=t){const r=e.get(a.r.POSITION)?.indices;if(r){const e=r.length;v(t,s.getField(c,n.XP),e,l)}}}}function g(e,t,r,s,c,u){switch(e){case a.r.POSITION:{(0,o.vA)(3===t.size);const i=c.getField(e,n.xs);(0,o.vA)(!!i,`No buffer view for ${e}`),i&&h(t,r,i,u);break}case a.r.NORMAL:{(0,o.vA)(3===t.size);const r=c.getField(e,n.xs);(0,o.vA)(!!r,`No buffer view for ${e}`),r&&m(t,s,r,u);break}case a.r.NORMALCOMPRESSED:{(0,o.vA)(2===t.size);const r=c.getField(e,n.mJ);(0,o.vA)(!!r,`No buffer view for ${e}`),r&&l(t,r,u);break}case a.r.UV0:{(0,o.vA)(2===t.size);const r=c.getField(e,n.gH);(0,o.vA)(!!r,`No buffer view for ${e}`),r&&l(t,r,u);break}case a.r.COLOR:case a.r.SYMBOLCOLOR:{const r=c.getField(e,n.XP);(0,o.vA)(!!r,`No buffer view for ${e}`),(0,o.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||f(t,t.size,r,u);break}case a.r.COLORFEATUREATTRIBUTE:{const r=c.getField(e,n.Y$);(0,o.vA)(!!r,`No buffer view for ${e}`),(0,o.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let e=0;e<s;++e)o[r]=l,r+=a}(t,r,u);break}case a.r.TANGENT:{(0,o.vA)(4===t.size);const a=c.getField(e,n.Eq);(0,o.vA)(!!a,`No buffer view for ${e}`),a&&function(e,t,r,n,o=1){if(!t)return void d(e,r,n,o);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,h=s.length,m=l[0],f=l[1],v=l[2],p=l[4],g=l[5],_=l[6],x=l[8],T=l[9],b=l[10],A=!(0,i.ut)(l),E=1e-6,S=1-E;if(n*=u,1===o)for(let e=0;e<h;++e){const t=4*s[e],r=a[t],i=a[t+1],o=a[t+2],l=a[t+3];let d=m*r+p*i+x*o,h=f*r+g*i+T*o,C=v*r+_*i+b*o;if(A){const e=d*d+h*h+C*C;if(e<S&&e>E){const t=1/Math.sqrt(e);d*=t,h*=t,C*=t}}c[n]=d,c[n+1]=h,c[n+2]=C,c[n+3]=l,n+=u}else for(let e=0;e<h;++e){const t=4*s[e],r=a[t],i=a[t+1],l=a[t+2],d=a[t+3];let h=m*r+p*i+x*l,C=f*r+g*i+T*l,M=v*r+_*i+b*l;if(A){const e=h*h+C*C+M*M;if(e<S&&e>E){const t=1/Math.sqrt(e);h*=t,C*=t,M*=t}}for(let e=0;e<o;++e)c[n]=h,c[n+1]=C,c[n+2]=M,c[n+3]=d,n+=u}}(t,r,a,u);break}case a.r.PROFILERIGHT:case a.r.PROFILEUP:case a.r.PROFILEVERTEXANDNORMAL:case a.r.FEATUREVALUE:{(0,o.vA)(4===t.size);const r=c.getField(e,n.Eq);(0,o.vA)(!!r,`No buffer view for ${e}`),r&&d(t,r,u)}}}},74810:(e,t,r)=>{r.d(t,{Bt:()=>s,Jr:()=>o,SY:()=>l,mb:()=>a});var i=r(38954),n=r(51850);function o({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:o,emissiveTexture:a,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==a&&(null==s||(0,i.p)(s,n.uY))&&null==l&&(null==o||1===o)&&(null==r||1===r)}const a=(0,n.CN)(1,1,.5),s=(0,n.CN)(0,.6,.2),l=(0,n.CN)(0,1,.2)},97225:(e,t,r)=>{r.d(t,{V:()=>E,uD:()=>A,R5:()=>S});var i=r(51850),n=r(91829),o=r(49255),a=r(96336),s=r(72824),l=r(35093),c=r(97220),d=r(98958),u=r(89192),h=r(11725),m=r(59643),f=r(33524),v=r(63907);v.MT.LESS,v.MT.ALWAYS;const p={mask:255},g={function:{func:v.MT.ALWAYS,ref:u.dd.OutlineVisualElementMask,mask:u.dd.OutlineVisualElementMask},operation:{fail:v.eA.KEEP,zFail:v.eA.KEEP,zPass:v.eA.ZERO}},_={function:{func:v.MT.ALWAYS,ref:u.dd.OutlineVisualElementMask,mask:u.dd.OutlineVisualElementMask},operation:{fail:v.eA.KEEP,zFail:v.eA.KEEP,zPass:v.eA.REPLACE}};v.MT.EQUAL,u.dd.OutlineVisualElementMask,u.dd.OutlineVisualElementMask,v.eA.KEEP,v.eA.KEEP,v.eA.KEEP,v.MT.NOTEQUAL,u.dd.OutlineVisualElementMask,u.dd.OutlineVisualElementMask,v.eA.KEEP,v.eA.KEEP,v.eA.KEEP;var x=r(74810),T=r(28491),b=r(90644);class A extends s.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=x.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=u.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=i.uY,this.instancedDoublePrecision=!1,this.normalType=a.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,i.CN)(.2,.2,.2),this.diffuse=(0,i.CN)(.8,.8,.8),this.externalColor=(0,n.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,i.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=u.it.Less,this.textureAlphaMode=u.sf.Blend,this.textureAlphaCutoff=l.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=h.m$.Occlude,this.isDecoration=!1}}class E extends s.gy{constructor(){super(...arguments),this.origin=(0,i.vt)(),this.slicePlaneLocalOrigin=this.origin}}class S extends d.w{constructor(e,t,i,n=new c.$(T.D,(()=>r.e(5141).then(r.bind(r,5141))))){super(e,t,n,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:i,transparent:n,cullFace:a,customDepthTest:s,hasOccludees:l,enableOffset:c}=e,d=r===m.Y.NONE,u=r===m.Y.FrontFace;return(0,b.Ey)({blending:(0,o.RN)(i)&&n?(0,f.Yf)(r):null,culling:M(e)?(0,b.Xt)(a):null,depthTest:{func:(0,f.K_)(r,C(s))},depthWrite:(0,f.z5)(e),drawBuffers:i===o.V.Depth?{buffers:[v.Hr.NONE]}:(0,f.m6)(r,i),colorWrite:b.kn,stencilWrite:l?p:null,stencilTest:l?t?_:g:null,polygonOffset:d||u?null:(0,f.aB)(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function C(e){return e===u.it.Lequal?v.MT.LEQUAL:v.MT.LESS}function M(e){return e.cullFace!==u.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}},60517:(e,t,r)=>{r.d(t,{z:()=>d});var i=r(49255),n=r(22911),o=r(45935),a=r(35093),s=r(63365),l=r(2597),c=r(59643);function d(e,t){e.include(o.Q,t),e.include(n.NL,t),e.fragment.include(s.a);const r=t.output===i.V.ObjectAndLayerIdColor,d=(0,i.LG)(t.output)&&t.oitPass!==c.Y.ColorAlpha,u=(0,i.RN)(t.output)&&t.oitPass===c.Y.ColorAlpha,h=(0,i.RN)(t.output)&&t.oitPass!==c.Y.ColorAlpha,m=t.discardInvisibleFragments;let f=0;(h||d||u)&&e.outputs.add("fragColor","vec4",f++),d&&e.outputs.add("fragEmission","vec4",f++),u&&e.outputs.add("fragAlpha","float",f++),e.fragment.code.add(l.H`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,l.If)(r,"finalColor.a = 1.0;")}

      ${(0,l.If)(m,`if (finalColor.a < ${l.H.float(a.Q)}) { discard; }`)}

      finalColor = applySlice(finalColor, vWorldPosition);
      ${(0,l.If)(u,l.H`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,l.If)(h,"fragColor = finalColor;")}
      ${(0,l.If)(d,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,l.If)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}},28449:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{Zo:()=>n,jA:()=>o,jS:()=>i});const a=new Float32Array(2)},90644:(e,t,r)=>{r.d(t,{Ey:()=>E,Ky:()=>l,Os:()=>s,Uy:()=>h,Xt:()=>u,kn:()=>m,p3:()=>a});var i=r(89192),n=r(63907);function o(e,t,r=n.Tb.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.Tb.ADD,a=n.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}o(n.dn.ZERO,n.dn.ONE_MINUS_SRC_ALPHA),o(n.dn.ONE,n.dn.ZERO),o(n.dn.ONE,n.dn.ONE);const s=o(n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA),l=a(n.dn.SRC_ALPHA,n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA,n.dn.ONE_MINUS_SRC_ALPHA),c={face:n.Y7.BACK,mode:n.Ac.CCW},d={face:n.Y7.FRONT,mode:n.Ac.CCW},u=e=>e===i.s2.Back?c:e===i.s2.Front?d:null,h={zNear:0,zFar:1},m={r:!0,g:!0,b:!0,a:!0};function f(e){return M.intern(e)}function v(e){return O.intern(e)}function p(e){return I.intern(e)}function g(e){return N.intern(e)}function _(e){return L.intern(e)}function x(e){return H.intern(e)}function T(e){return B.intern(e)}function b(e){return G.intern(e)}function A(e){return U.intern(e)}function E(e){return j.intern(e)}class S{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function C(e){return"["+e.join(",")+"]"}const M=new S(w,(e=>({__tag:"Blending",...e})));function w(e){return e?C([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const O=new S(y,(e=>({__tag:"Culling",...e})));function y(e){return e?C([e.face,e.mode]):null}const I=new S(R,(e=>({__tag:"PolygonOffset",...e})));function R(e){return e?C([e.factor,e.units]):null}const N=new S(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?C([e.func]):null}const L=new S(D,(e=>({__tag:"StencilTest",...e})));function D(e){return e?C([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const H=new S(F,(e=>({__tag:"DepthWrite",...e})));function F(e){return e?C([e.zNear,e.zFar]):null}const B=new S(z,(e=>({__tag:"ColorWrite",...e})));function z(e){return e?C([e.r,e.g,e.b,e.a]):null}const G=new S(V,(e=>({__tag:"StencilWrite",...e})));function V(e){return e?C([e.mask]):null}const U=new S(W,(e=>({__tag:"DrawBuffers",...e})));function W(e){return e?C(e.buffers):null}const j=new S((function(e){return e?C([w(e.blending),y(e.culling),R(e.polygonOffset),P(e.depthTest),D(e.stencilTest),F(e.depthWrite),z(e.colorWrite),V(e.stencilWrite),W(e.drawBuffers)]):null}),(e=>({blending:f(e.blending),culling:v(e.culling),polygonOffset:p(e.polygonOffset),depthTest:g(e.depthTest),stencilTest:_(e.stencilTest),depthWrite:x(e.depthWrite),colorWrite:T(e.colorWrite),stencilWrite:b(e.stencilWrite),drawBuffers:A(e.drawBuffers)})))}}]);