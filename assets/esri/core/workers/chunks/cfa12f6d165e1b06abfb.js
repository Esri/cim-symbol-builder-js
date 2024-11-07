"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4023],{28491:(e,t,r)=>{r.d(t,{D:()=>z,b:()=>U});var i=r(46686),o=r(32680),n=r(49255),a=r(76591),s=r(76597),c=r(82991),l=r(96336),d=r(10764),u=r(39014),h=r(53466),m=r(92700),f=r(72824),p=r(35640),g=r(40261),v=r(77695),_=r(54849),T=r(74081),x=r(98619),A=r(62602),E=r(22393),b=r(59469),S=r(25618),M=r(96598),C=r(51406),R=r(42398),I=r(35093),w=r(11955),O=r(27950),N=r(20693),y=r(33079),P=r(71988),L=r(20304),H=r(2597),D=r(85977),F=r(63761),G=r(46540),B=r(60517);function U(e){const t=new D.N5,{vertex:r,fragment:U,varyings:z}=t,{output:V,normalType:W,offsetBackfaces:j,instancedColor:k,spherical:q,receiveShadows:Y,snowCover:X,pbrMode:$,textureAlphaPremultiplied:Z,instancedDoublePrecision:J,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:re,hasColorTextureTransform:ie}=e;if((0,N.NB)(r,e),t.include(d.I),z.add("vpos","vec3"),t.include(R.A,e),t.include(c.B,e),t.include(p.G,e),t.include(C.q2,e),!(0,n.RN)(V))return t.include(g.E,e),t;t.include(C.Sx,e),t.include(C.MU,e),t.include(C.O1,e),t.include(C.QM,e),(0,N.yu)(r,e),t.include(l.Y,e),t.include(s.d,e);const oe=W===l.W.Attribute||W===l.W.Compressed;return oe&&j&&t.include(o.M),t.include(v.W,e),t.include(f.Mh,e),k&&t.attributes.add(G.r.INSTANCECOLOR,"vec4"),z.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),z.add("vcolorExt","vec4"),e.terrainDepthTest&&z.add("depth","float"),r.main.add(H.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,H.If)(k,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${H.H.float(I.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,H.If)(oe,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,H.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,H.If)(oe&&j,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${(0,H.If)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(T.kA,e),t.include(_.n,e),t.include(w.S,e),t.include(J?S.G:S.Bz,e),t.include(M.Z,e),t.include(a.HQ,e),t.include(B.z,e),(0,N.yu)(U,e),U.uniforms.add(r.uniforms.get("localOrigin"),new y.t("ambient",(e=>e.ambient)),new y.t("diffuse",(e=>e.diffuse)),new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),ee&&U.uniforms.add(new F.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(E.c,e),U.include(O.N),t.include(A.r,e),(0,T.a8)(U),(0,T.eU)(U),(0,x.O4)(U),U.main.add(H.H`
      discardBySlice(vpos);
      ${(0,H.If)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${ee?H.H`
              vec4 texColor = texture(tex, ${ie?"colorUV":"vuv0"});
              ${(0,H.If)(Z,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${W===l.W.ScreenDerivative?H.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${Y?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,H.If)(q,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,H.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,H.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${re?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${q?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,H.If)(X,H.H`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${$===b.A9.Normal||$===b.A9.Schematic?H.H`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,H.If)(X,H.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${X?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const z=Object.freeze(Object.defineProperty({__proto__:null,build:U},Symbol.toStringTag,{value:"Module"}))},57323:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(46686),o=r(32680),n=r(49255),a=r(76591),s=r(76597),c=r(82991),l=r(96336),d=r(10764),u=r(39014),h=r(53466),m=r(92700),f=r(35640),p=r(40261),g=r(54849),v=r(74081),_=r(98619),T=r(22393),x=r(59469),A=r(25618),E=r(96598),b=r(42398),S=r(35093),M=r(11955),C=r(27950),R=r(20693),I=r(33079),w=r(71988),O=r(20304),N=r(2597),y=r(85977),P=r(63761),L=r(46540),H=r(60517);function D(e){const t=new y.N5,{vertex:r,fragment:D,varyings:F}=t,{output:G,offsetBackfaces:B,instancedColor:U,pbrMode:z,snowCover:V,spherical:W}=e,j=z===x.A9.Normal||z===x.A9.Schematic;if((0,R.NB)(r,e),t.include(d.I),F.add("vpos","vec3"),t.include(b.A,e),t.include(c.B,e),t.include(f.G,e),G===n.V.Color&&((0,R.yu)(t.vertex,e),t.include(l.Y,e),t.include(s.d,e),B&&t.include(o.M),U&&t.attributes.add(L.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.terrainDepthTest&&F.add("depth","float"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new w.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.main.add(N.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,N.If)(U,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${N.H.float(S.Q)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,N.If)(B,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,N.If)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),G===n.V.Color){const{hasColorTexture:i,hasColorTextureTransform:o,receiveShadows:n}=e;t.include(v.kA,e),t.include(g.n,e),t.include(M.S,e),t.include(e.instancedDoublePrecision?A.G:A.Bz,e),t.include(E.Z,e),t.include(a.HQ,e),t.include(H.z,e),(0,R.yu)(t.fragment,e),(0,_.Gc)(D),(0,v.a8)(D),(0,v.eU)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new I.t("ambient",(e=>e.ambient)),new I.t("diffuse",(e=>e.diffuse)),new O.m("opacity",(e=>e.opacity)),new O.m("layerOpacity",(e=>e.layerOpacity))),i&&D.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(x._Z,e),t.include(T.c,e),D.include(C.N),(0,_.O4)(D),D.main.add(N.H`
      discardBySlice(vpos);
      ${(0,N.If)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${i?`texture(tex, ${o?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,N.If)(i,`${(0,N.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${n?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":W?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?N.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,N.If)(V,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${N.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,N.If)(j,`vec3 normalGround = ${W?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${j?N.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,N.If)(V,N.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${V?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},15581:(e,t,r)=>{r.d(t,{S:()=>v,b:()=>f,g:()=>p});var i=r(37585),o=r(48163),n=r(82048),a=r(52540),s=r(34845),c=r(47286),l=r(20304),d=r(2597),u=r(85977),h=r(63761);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(n.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new l.m("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
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
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new l.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new c.G("rnmScale",((e,t)=>(0,i.hZ)(g,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new l.m("intensity",(e=>e.intensity)),new c.G("screenSize",((e,t)=>(0,i.hZ)(g,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(d.H`
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

      fragOcclusion = A;`),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const g=(0,o.vt)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},95774:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>h});var i=r(82048),o=r(52540),n=r(68259),a=r(20304),s=r(2597),c=r(85977),l=r(15976),d=r(63761);const u=4;function h(){const e=new c.N5,t=e.fragment;e.include(i.c);const r=(u+1)/2,h=1/(2*r*r);return t.include(o.E),t.uniforms.add(new d.N("depthMap",(e=>e.depthTexture)),new l.o("tex",(e=>e.colorTexture)),new n.t("blurSize",(e=>e.blurSize)),new a.m("projScale",((e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(s.H`
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
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},17352:(e,t,r)=>{r.d(t,{b:()=>j,f:()=>x}),r(44208);var i=r(53966),o=r(34727),n=r(4341),a=r(58083),s=r(9093),c=r(38954),l=r(51850),d=r(19419),u=r(88582),h=r(11964),m=r(27921),f=r(71351),p=r(44280),g=r(32114);const v=()=>i.A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function _(e=D){return{plane:(0,m.vt)(e.plane),origin:(0,l.o8)(e.origin),basis1:(0,l.o8)(e.basis1),basis2:(0,l.o8)(e.basis2)}}function T(e,t=_()){return x(e.origin,e.basis1,e.basis2,t)}function x(e,t,r,i=_()){return(0,c.c)(i.origin,e),(0,c.c)(i.basis1,t),(0,c.c)(i.basis2,r),A(i),function(e,t){Math.abs((0,c.f)(e.basis1,e.basis2)/((0,c.l)(e.basis1)*(0,c.l)(e.basis2)))>1e-6&&v().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,c.f)(e.basis1,N(e)))>1e-6&&v().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,c.f)(N(e),e.origin)-e.plane[3])>1e-6&&v().warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function A(e){(0,m.mR)(e.basis2,e.basis1,e.origin,e.plane)}function E(e,t,r){e!==r&&T(e,r);const i=(0,c.h)(g.rq.get(),N(e),t);return(0,c.g)(r.origin,r.origin,i),r.plane[3]-=t,r}function b(e,t=_()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return(0,c.i)(t.origin,e[0]+r,e[1]+i,0),(0,c.i)(t.basis1,r,0,0),(0,c.i)(t.basis2,0,i,0),(0,m.fA)(0,0,1,0,t.plane),t}function S(e,t,r){return!!(0,m.Ui)(e.plane,t,r)&&y(e,r)}function M(e,t,r){const i=F.get();H(e,t,i,F.get());let n=Number.POSITIVE_INFINITY;for(const a of z){const s=L(e,a,G.get()),l=g.rq.get();if((0,m.T7)(i,s,l)){const e=(0,c.o)(g.rq.get(),t.origin,l),i=Math.abs((0,o.XM)((0,c.f)(t.direction,e)));i<n&&(n=i,(0,c.c)(r,l))}}return n===Number.POSITIVE_INFINITY?C(e,t,r):r}function C(e,t,r){if(S(e,t,r))return r;const i=F.get(),o=F.get();H(e,t,i,o);let n=Number.POSITIVE_INFINITY;for(const a of z){const s=L(e,a,G.get()),l=g.rq.get();if((0,m.gv)(i,s,l)){const e=(0,f.kb)(t,l);if(!(0,m.Tj)(o,l))continue;e<n&&(n=e,(0,c.c)(r,l))}}return w(e,t.origin)<n&&R(e,t.origin,r),r}function R(e,t,r){const i=(0,m._I)(e.plane,t,g.rq.get()),o=(0,h.H6)(P(e,e.basis1),i,-1,1,g.rq.get()),n=(0,h.H6)(P(e,e.basis2),i,-1,1,g.rq.get());return(0,c.d)(r,(0,c.g)(g.rq.get(),o,n),e.origin),r}function I(e,t,r){const{origin:i,basis1:o,basis2:n}=e,a=(0,c.d)(g.rq.get(),t,i),s=(0,p.gr)(o,a),l=(0,p.gr)(n,a),d=(0,p.gr)(N(e),a);return(0,c.i)(r,s,l,d)}function w(e,t){const r=I(e,t,g.rq.get()),{basis1:i,basis2:o}=e,n=(0,c.l)(i),a=(0,c.l)(o),s=Math.max(Math.abs(r[0])-n,0),l=Math.max(Math.abs(r[1])-a,0),d=r[2];return s*s+l*l+d*d}function O(e,t){const r=-e.plane[3];return(0,p.gr)(N(e),t)-r}function N(e){return(0,m.Qj)(e.plane)}function y(e,t){const r=(0,c.d)(g.rq.get(),t,e.origin),i=(0,c.k)(e.basis1),o=(0,c.k)(e.basis2),n=(0,c.f)(e.basis1,r),a=(0,c.f)(e.basis2,r);return-n-i<0&&n-i<0&&-a-o<0&&a-o<0}function P(e,t){const r=G.get();return(0,c.c)(r.origin,e.origin),(0,c.c)(r.vector,t),r}function L(e,t,r){const{basis1:i,basis2:o,origin:n}=e,a=(0,c.h)(g.rq.get(),i,t.origin[0]),s=(0,c.h)(g.rq.get(),o,t.origin[1]);(0,c.g)(r.origin,a,s),(0,c.g)(r.origin,r.origin,n);const l=(0,c.h)(g.rq.get(),i,t.direction[0]),d=(0,c.h)(g.rq.get(),o,t.direction[1]);return(0,c.h)(r.vector,(0,c.g)(l,l,d),2),r}function H(e,t,r,i){const o=N(e);(0,m.mR)(o,t.direction,t.origin,r),(0,m.mR)((0,m.Qj)(r),o,t.origin,i)}const D={plane:(0,m.vt)(),origin:(0,l.fA)(0,0,0),basis1:(0,l.fA)(1,0,0),basis2:(0,l.fA)(0,1,0)},F=new n.I(m.vt),G=new n.I(h.vt),B=(0,l.vt)(),U=new n.I((()=>_())),z=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],V=(0,s.vt)(),W=(0,s.vt)(),j=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=(0,m.vt)(),this.origin=(0,l.vt)(),this.basis1=(0,l.vt)(),this.basis2=(0,l.vt)()}},altitudeAt:O,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case u._.X:(0,c.c)(r,e.basis1),(0,c.n)(r,r);break;case u._.Y:(0,c.c)(r,e.basis2),(0,c.n)(r,r);break;case u._.Z:(0,c.c)(r,N(e))}return r}(e,r,i)},cameraFrustumCoverage:function(e,t){return(t-e)/t},closestPoint:C,closestPointOnSilhouette:M,copy:T,copyWithoutVerify:function(e,t){(0,c.c)(t.origin,e.origin),(0,c.c)(t.basis1,e.basis1),(0,c.c)(t.basis2,e.basis2),(0,m.C)(t.plane,e.plane)},create:_,distance:function(e,t){return Math.sqrt(w(e,t))},distance2:w,distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of z){const o=L(e,i,G.get()),n=(0,h.kb)(o,t);n>r&&(r=n)}return Math.sqrt(r)},elevate:E,equals:function(e,t){return(0,c.p)(e.basis1,t.basis1)&&(0,c.p)(e.basis2,t.basis2)&&(0,c.p)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,m.Tj)(e.plane,t)&&y(e,t)},fromAABoundingRect:b,fromValues:x,getExtent:function(e,t){const r=e.basis1[0],i=e.basis2[1],[o,n]=e.origin;return(0,d.fA)(o-r,n-i,o+r,n+i,t)},intersectRay:S,intersectRayClosestSilhouette:function(e,t,r){if(S(e,t,r))return r;const i=M(e,t,g.rq.get());return(0,c.g)(r,t.origin,(0,c.h)(g.rq.get(),t.direction,(0,c.j)(t.origin,i)/(0,c.l)(t.direction))),r},normal:N,projectPoint:R,projectPointLocal:I,rotate:function(e,t,r,i){return e!==i&&T(e,i),(0,a.$0)(W,t,r),(0,c.t)(i.basis1,e.basis1,W),(0,c.t)(i.basis2,e.basis2,W),A(i),i},setAltitudeAt:function(e,t,r,i){const o=O(e,t),n=(0,c.h)(B,N(e),r-o);return(0,c.g)(i,t,n),i},setExtent:function(e,t,r){return b(t,r),E(r,O(e,e.origin),r),r},transform:function(e,t,r){return e!==r&&T(e,r),(0,a.B8)(V,t),(0,a.mg)(V,V),(0,c.t)(r.basis1,e.basis1,V),(0,c.t)(r.basis2,e.basis2,V),(0,c.t)((0,m.Qj)(r.plane),(0,m.Qj)(e.plane),V),(0,c.t)(r.origin,e.origin,t),(0,m.mP)(r.plane,r.plane,r.origin),r},up:D,updateUnboundedPlane:A,wrap:function(e,t,r){const i=U.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=(0,m.LV)(0,0,0,0),A(i),i}},Symbol.toStringTag,{value:"Module"}))},81139:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},11964:(e,t,r)=>{r.d(t,{Cr:()=>l,H6:()=>h,_I:()=>u,kb:()=>d,vt:()=>c});var i=r(34727),o=r(4341),n=r(38954),a=r(51850),s=r(32114);function c(e){return e?{origin:(0,a.o8)(e.origin),vector:(0,a.o8)(e.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function l(e,t,r=c()){return(0,n.c)(r.origin,e),(0,n.d)(r.vector,t,e),r}function d(e,t){const r=(0,n.d)(s.rq.get(),t,e.origin),o=(0,n.f)(e.vector,r),a=(0,n.f)(e.vector,e.vector),c=(0,i.qE)(o/a,0,1),l=(0,n.d)(s.rq.get(),(0,n.h)(s.rq.get(),e.vector,c),r);return(0,n.f)(l,l)}function u(e,t,r){return h(e,t,0,1,r)}function h(e,t,r,o,a){const{vector:c,origin:l}=e,d=(0,n.d)(s.rq.get(),t,l),u=(0,n.f)(c,d)/(0,n.k)(c);return(0,n.h)(a,c,(0,i.qE)(u,r,o)),(0,n.g)(a,a,e.origin)}(0,a.vt)(),(0,a.vt)(),new o.I((()=>c()))},99677:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(78888);async function o(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},78662:(e,t,r)=>{r.d(t,{Gd:()=>u,VC:()=>h}),r(44208);var i,o,n,a=r(34727),s=(r(77690),r(29242),r(58083),r(9093)),c=r(38954),l=r(51850),d=(r(31756),r(26857),r(2597));(n=i||(i={}))[n.Undefined=0]="Undefined",n[n.DefinedSize=1]="DefinedSize",n[n.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(o||(o={}));class u extends d.Y{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function h(e,t,r){if(!t.vvSize)return(0,c.i)(e,1,1,1),e;for(let i=0;i<3;++i){const o=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=(0,a.qE)(o,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}(0,s.vt)(),(0,l.vt)(),(0,s.vt)()},26857:(e,t,r)=>{r.d(t,{b:()=>c});var i=r(90237),o=r(69622),n=r(10107),a=(r(44208),r(53966),r(87811),r(40608));let s=class extends o.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i._)([(0,n.MZ)()],s.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TEXT_SHOW_BORDER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"SHOW_POI",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LINE_WIREFRAMES",void 0),s=(0,i._)([(0,a.$)("esri.views.3d.support.debugFlags")],s);const c=new s},46686:(e,t,r)=>{r.d(t,{i$:()=>l,oD:()=>d,xJ:()=>c});var i=r(49255),o=r(33752),n=r(47286),a=r(2597);function s(e){e.varyings.add("linearDepth","float")}function c(e){e.vertex.uniforms.add(new n.G("nearFar",((e,t)=>t.camera.nearFar)))}function l(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.V.Color:case i.V.ColorEmission:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:return e.include(o.em,t),s(e),c(e),l(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},32680:(e,t,r)=>{r.d(t,{M:()=>o});var i=r(2597);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},82048:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(2597),o=r(46540);function n(e,t=!0){e.attributes.add(o.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(i.H`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
  `)}},76591:(e,t,r)=>{r.d(t,{HQ:()=>l});var i=r(58083),o=r(9093),n=r(38954),a=r(51850),s=r(40710),c=(r(33079),r(2597));function l(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=c.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}const i=c.H`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=c.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,n=t.hasSliceHighlight?c.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(i),e.fragment.uniforms.add(...r).code.add(i),e.fragment.code.add(n)}(e,t,new s.W("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.uY;const i=d(e,t,r),o=u(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,n.t)(p,o,s):o}(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function d(e,t,r){return e.instancedDoublePrecision?(0,n.i)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function u(e,t){return null!=e?(0,n.d)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Tl)(v,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,i){if(null==i||null==r.slicePlane)return a.uY;const o=d(e,t,r),s=u(o,r.slicePlane),c=h(e,o,r);return null!=c?((0,n.g)(g,i,s),(0,n.t)(p,s,c),(0,n.t)(g,g,c),(0,n.d)(g,g,p)):i}c.Y;const f=(0,a.vt)(),p=(0,a.vt)(),g=(0,a.vt)(),v=(0,o.vt)()},76597:(e,t,r)=>{r.d(t,{d:()=>n});var i=r(46686),o=r(2597);function n(e){(0,i.i$)(e),e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},82991:(e,t,r)=>{r.d(t,{B:()=>_});var i=r(77690),o=r(29242),n=r(9093),a=r(38954),s=r(51850),c=r(49255),l=r(26425),d=r(20693),u=r(40710),h=r(2597),m=r(35644),f=r(40095),p=r(46540),g=r(28449);h.Y;const v=(0,o.vt)();function _(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new f.X("model",(e=>e.modelTransformation??n.zK))),e.vertex.uniforms.add(new m.k("normalLocalOriginFromModel",(e=>((0,i.Ge)(v,e.modelTransformation??n.zK),v))))),t.instanced&&o&&(e.attributes.add(p.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.r.INSTANCEMODEL,"mat3"),e.attributes.add(p.r.INSTANCEMODELNORMAL,"mat3"));const s=e.vertex;o&&(s.include(l.u,t),s.uniforms.add(new u.W("viewOriginHi",((e,t)=>(0,g.Zo)((0,a.i)(T,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),T))),new u.W("viewOriginLo",((e,t)=>(0,g.jA)((0,a.i)(T,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),T))))),s.code.add(h.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?h.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(h.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,d.S7)(s),s.code.add(h.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(h.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const T=(0,s.vt)()},36782:(e,t,r)=>{r.d(t,{g:()=>a});var i=r(49255),o=r(2597),n=r(46540);function a(e,t){if(t.output!==i.V.ObjectAndLayerIdColor)return e.vertex.code.add(o.H`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(o.H`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?n.r.INSTANCEOBJECTANDLAYERIDCOLOR:n.r.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(o.H`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(o.H`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}},10764:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(2597),o=r(46540);function n(e){e.attributes.add(o.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},39014:(e,t,r)=>{r.d(t,{K:()=>c});var i=r(42583),o=r(93588),n=r(2597),a=r(46540),s=r(43616);function c(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new o.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},53466:(e,t,r)=>{r.d(t,{I:()=>i,U:()=>c});var i,o,n=r(21818),a=r(2597),s=r(46540);function c(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Xb)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(o=i||(i={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT"},92700:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(2597),o=r(46540);function n(e,t){t.hasVertexColors?(e.attributes.add(o.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},72824:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var i=r(21818),o=r(29242),n=r(91829),a=r(96336),s=r(33752),c=r(2597),l=r(98353),d=r(35644);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(c.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.ScreenDerivative:e.vertex.code.add(c.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,o.vt)(),this.toMapSpace=(0,n.vt)()}}},33752:(e,t,r)=>{r.d(t,{EM:()=>g,dO:()=>p,em:()=>f});var i=r(29242),o=r(9093),n=r(51850),a=r(10764),s=r(26425),c=r(40710),l=r(33079),d=r(2597),u=r(98353),h=r(35644),m=r(40095);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new l.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new l.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
  `),e.fragment.uniforms.add(new l.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.vt)(),this.transformWorldFromViewTL=(0,n.vt)(),this.transformViewFromCameraRelativeRS=(0,i.vt)(),this.transformProjFromView=(0,o.vt)()}}class g extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.vt)(),this.transformWorldFromModelTH=(0,n.vt)(),this.transformWorldFromModelTL=(0,n.vt)()}}},99208:(e,t,r)=>{r.d(t,{r:()=>a});var i=r(53466),o=r(2597);function n(e){e.fragment.code.add(o.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function a(e,t){const{textureCoordinateType:r}=t;if(r===i.I.None||r===i.I.COUNT)return;e.include(i.U,t);const a=r===i.I.Atlas;a&&e.include(n),e.fragment.code.add(o.H`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${a?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}},35640:(e,t,r)=>{r.d(t,{G:()=>l,V:()=>u});var i=r(87317),o=r(91829),n=r(52587),a=r(20693),s=r(71988),c=r(2597);function l(e,t){const r=e.vertex;t.hasVerticalOffset?(u(r),t.hasScreenSizePerspective&&(e.include(n.Y6),(0,n.OH)(r),(0,a.yu)(e.vertex,t)),r.code.add(c.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?c.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?c.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(c.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,o.vt)();function u(e){e.uniforms.add(new s.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,n*s,a,r,o)})))}},40261:(e,t,r)=>{r.d(t,{E:()=>x});var i=r(46686),o=r(49255),n=r(76591),a=r(76597),s=r(96336),c=r(36782),l=r(53466),d=r(72824),u=r(80730),h=r(2597);function m(e,t){switch(t.output){case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:case o.V.ViewshedShadow:e.fragment.include(u.U),e.fragment.code.add(h.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var f=r(45935),p=r(42398),g=r(11955),v=r(20693),_=r(63761),T=r(89192);function x(e,t){const{vertex:r,fragment:u}=e,x=t.hasColorTexture&&t.alphaDiscardMode!==T.sf.Opaque,{output:A,normalType:E,hasColorTextureTransform:b}=t;switch(A){case o.V.Depth:(0,v.NB)(r,t),e.include(a.d,t),e.include(n.HQ,t),e.include(l.U,t),x&&u.uniforms.add(new _.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(g.S,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${b?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:case o.V.ViewshedShadow:case o.V.ObjectAndLayerIdColor:(0,v.NB)(r,t),e.include(a.d,t),e.include(l.U,t),e.include(p.A,t),e.include(m,t),e.include(n.HQ,t),e.include(c.g,t),(0,i.xJ)(e),e.varyings.add("depth","float"),x&&u.uniforms.add(new _.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(g.S,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${b?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${A===o.V.ObjectAndLayerIdColor?h.H`outputObjectAndLayerIdColor();`:h.H`outputDepth(depth);`}`);break;case o.V.Normal:{(0,v.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(l.U,t),e.include(p.A,t),x&&u.uniforms.add(new _.N("tex",(e=>e.texture))),E===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=E===s.W.Attribute||E===s.W.Compressed;r.main.add(h.H`
          vpos = getVertexInLocalOriginSpace();
          ${i?h.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:h.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(n.HQ,t),e.include(g.S,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${b?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${E===s.W.ScreenDerivative?h.H`vec3 normal = screenDerivativeNormal(vPositionView);`:h.H`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case o.V.Highlight:(0,v.NB)(r,t),e.include(a.d,t),e.include(l.U,t),e.include(p.A,t),x&&u.uniforms.add(new _.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(n.HQ,t),e.include(g.S,t),e.include(f.Q,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${b?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}},22911:(e,t,r)=>{r.d(t,{NL:()=>m,ZX:()=>i});var i,o,n=r(49255),a=r(99208),s=r(40710),c=r(33079),l=r(2597),d=r(15976),u=r(63761),h=r(46263);function m(e,t){if(!(0,n.RN)(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:o,bindType:m}=t,f=r===i.Texture;f&&(e.include(a.r,t),e.fragment.uniforms.add(m===h.c.Pass?new u.N("texEmission",(e=>e.textureEmissive)):new d.o("texEmission",(e=>e.textureEmissive))));const p=r===i.Value||f;p&&e.fragment.uniforms.add(m===h.c.Pass?new c.t("emissionFactor",(e=>e.emissiveFactor)):new s.W("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(l.H`
    vec4 getEmissions() {
      vec4 emissions = ${p?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,l.If)(f,`emissions *= textureLookup(texEmission, ${o?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}r(25634),(o=i||(i={}))[o.None=0]="None",o[o.Value=1]="Value",o[o.Texture=2]="Texture",o[o.COUNT=3]="COUNT"},45935:(e,t,r)=>{r.d(t,{Q:()=>d});var i=r(49255),o=r(39589),n=r(46263);class a extends o.n{constructor(e,t){super(e,"ivec2",n.c.Pass,((r,i,o)=>r.setUniform2iv(e,t(i,o))))}}var s=r(93588),c=r(2597),l=r(63761);function d(e,t){const{fragment:r}=e;t.output===i.V.Highlight?(r.uniforms.add(new l.N("depthTexture",((e,t)=>t.mainDepth)),new l.N("highlightTexture",((e,t)=>t.highlightMixTexture)),new s.c("highlightLevel",((e,t)=>t.highlightLevel)),new a("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),r.code.add(c.H`vec2 getAccumulatedHighlight() {
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
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(c.H`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(c.H`void calculateOcclusionAndOutputHighlight() {}`)}},52540:(e,t,r)=>{r.d(t,{E:()=>s});var i=r(37585),o=r(48163),n=r(47286),a=r(2597);function s(e){e.uniforms.add(new n.G("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,i.hZ)(c,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
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
}`)}const c=(0,o.vt)()},77695:(e,t,r)=>{r.d(t,{W:()=>p});var i=r(29242),o=r(48163),n=r(53466),a=r(99208),s=r(62602),c=r(47286),l=r(2597),d=r(35644),u=r(15976),h=r(63761),m=r(46263),f=r(46540);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(l.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(l.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(l.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==n.I.None&&(e.include(a.r,t),r.uniforms.add(t.bindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new c.G("scale",(e=>e.scale??o.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK)))),r.code.add(l.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(l.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(l.H`return tangentSpace * rawNormal;
}`))}},54849:(e,t,r)=>{r.d(t,{n:()=>V});var i,o,n,a,s,c,l=r(2597),d=r(63761),u=r(90237),h=r(34727),m=r(97768),f=r(36708),p=r(78659),g=r(10107),v=(r(44208),r(53966),r(87811),r(40608)),_=r(37585);r(9093),r(48353),r(9762),(n=i||(i={})).OPAQUE="opaque-color",n.TRANSPARENT="transparent-color",n.COMPOSITE="composite-color",n.FINAL="final-color",function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(o||(o={})),(c=a||(a={}))[c.RED=0]="RED",c[c.RG=1]="RG",c[c.RGBA4=2]="RGBA4",c[c.RGBA=3]="RGBA",c[c.RGBA_MIPMAP=4]="RGBA_MIPMAP",c[c.R16F=5]="R16F",c[c.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(s||(s={}));var T=r(69622),x=r(49186),A=r(89192);let E=class extends T.A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=i.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,f.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),f.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new x.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===A.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,u._)([(0,g.MZ)({constructOnly:!0})],E.prototype,"view",void 0),(0,u._)([(0,g.MZ)({constructOnly:!0})],E.prototype,"consumes",void 0),(0,u._)([(0,g.MZ)()],E.prototype,"produces",void 0),E=(0,u._)([(0,v.$)("esri.views.3d.webgl.RenderNode")],E);const b=E;var S=r(97220),M=r(98958),C=r(95774),R=r(90644);class I extends M.w{constructor(e,t,i){super(e,t,new S.$(C.S,(()=>r.e(9384).then(r.bind(r,59384)))),i)}initializePipeline(){return(0,R.Ey)({colorWrite:R.kn})}}var w=r(48163);class O extends l.Y{constructor(){super(...arguments),this.projScale=1}}class N extends O{constructor(){super(...arguments),this.intensity=1}}class y extends l.Y{}class P extends y{constructor(){super(...arguments),this.blurSize=(0,w.vt)()}}var L=r(15581);class H extends M.w{constructor(e,t,i){super(e,t,new S.$(L.S,(()=>r.e(191).then(r.bind(r,90191)))),i)}initializePipeline(){return(0,R.Ey)({colorWrite:R.kn})}}var D=r(63907),F=r(21231),G=r(67171);const B=2;let U=class extends b{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=o.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,p.l5)(0),this._passParameters=new N,this._drawParameters=new P}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new G.R;t.wrapMode=D.pF.CLAMP_TO_EDGE,t.pixelFormat=D.Ab.RGB,t.wrapMode=D.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new F.g(this.renderingContext,t,e),this.techniques.precompile(H),this.techniques.precompile(I),this.addHandles((0,f.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,p.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,m.WD)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),i=r?.getTexture(),n=r?.getTexture(D.nI),s=this.fboCache,c=t.camera,l=c.fullViewport[2],d=c.fullViewport[3],u=Math.round(l/B),m=Math.round(d/B),f=this.techniques.acquire(H),g=this.techniques.acquire(I);if(!f.compiled||!g.compiled)return this._enableTime=(0,p.l5)(performance.now()),this.requestRender(A.C7.UPDATE),f.release(),g.release(),s.acquire(u,m,o.SSAO,a.RED);0===this._enableTime&&(this._enableTime=(0,p.l5)(performance.now()));const v=this.renderingContext,T=this.view.qualitySettings.fadeDuration,x=c.relativeElevation,E=(0,h.qE)((5e5-x)/2e5,0,1),b=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,S=b*E;this._passParameters.normalTexture=i,this._passParameters.depthTexture=n,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*z/(0,L.g)(c)**6*S;const M=s.acquire(l,d,"ssao input",a.RG);v.bindFramebuffer(M.fbo),v.setViewport(0,0,l,d),v.bindTechnique(f,t,this._passParameters,this._drawParameters),v.screen.draw(),f.release();const C=s.acquire(u,m,"ssao blur",a.RED);v.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=M.getTexture(),(0,_.hZ)(this._drawParameters.blurSize,0,B/d),v.bindTechnique(g,t,this._passParameters,this._drawParameters),v.setViewport(0,0,u,m),v.screen.draw(),M.release();const R=s.acquire(u,m,o.SSAO,a.RED);return v.bindFramebuffer(R.fbo),v.setViewport(0,0,l,d),v.setClearColor(1,1,1,0),v.clear(D.NV.COLOR),this._drawParameters.colorTexture=C.getTexture(),(0,_.hZ)(this._drawParameters.blurSize,B/l,0),v.bindTechnique(g,t,this._passParameters,this._drawParameters),v.setViewport(0,0,u,m),v.screen.draw(),g.release(),v.setViewport4fv(c.fullViewport),C.release(),b<1&&this.requestRender(A.C7.UPDATE),R}};(0,u._)([(0,g.MZ)()],U.prototype,"consumes",void 0),(0,u._)([(0,g.MZ)()],U.prototype,"produces",void 0),(0,u._)([(0,g.MZ)({constructOnly:!0})],U.prototype,"techniques",void 0),(0,u._)([(0,g.MZ)({constructOnly:!0})],U.prototype,"isEnabled",void 0),U=(0,u._)([(0,v.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],U);const z=.5;function V(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new d.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/B),r.code.add(l.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(l.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},74081:(e,t,r)=>{r.d(t,{kA:()=>S,a8:()=>E,eU:()=>b});var i=r(21818),o=r(38954),n=r(51850),a=r(87317),s=r(91829),c=r(59469),l=r(33079),d=r(71988),u=r(2597);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new l.t("lightingAmbientSH0",((e,t)=>(0,o.i)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add(new l.t("lightingAmbientSH0",((e,t)=>(0,o.i)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==c.A9.Normal&&t.pbrMode!==c.A9.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,n.vt)(),f=(0,s.vt)();var p=r(54849),g=r(98619),v=r(22393),_=r(89786),T=r(95250),x=r(20304);r(34727),(0,n.vt)();const A=.4;function E(e){e.constants.add("ambientBoostFactor","float",A)}function b(e){e.uniforms.add(new x.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function S(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==c.A9.Disabled&&e.include(v.c,t),e.include(h,t),e.include(_.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),E(r),b(r),(0,g.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,g.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.A9.Disabled:case c.A9.WaterOnIntegratedMesh:case c.A9.Water:e.include(g.Vt),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.A9.Normal:case c.A9.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new T.e("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new x.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new x.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==c.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c.A9.Simplified:case c.A9.TerrainWithWater:(0,g.Gc)(r),(0,g.O4)(r),r.code.add(u.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,i.Xb)(t.pbrMode);case c.A9.COUNT:}}(0,n.vt)()},98619:(e,t,r)=>{r.d(t,{Gc:()=>n,O4:()=>a,Vt:()=>s});var i=r(33079),o=r(2597);function n(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){n(e.fragment),a(e.fragment),e.fragment.code.add(o.H`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},62602:(e,t,r)=>{r.d(t,{W:()=>i,r:()=>s});var i,o,n=r(21818),a=r(2597);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Xb)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},22393:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(2597);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var n=r(59469),a=r(89786);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic&&t.pbrMode!==n.A9.Simplified&&t.pbrMode!==n.A9.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
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
}`)),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
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
}`))}},59469:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>m});var i,o,n=r(99208),a=r(40710),s=r(33079),c=r(2597),l=r(15976),d=r(63761),u=r(46263),h=r(25634);function m(e,t){const r=t.pbrMode,o=e.fragment;if(r!==i.Schematic&&r!==i.Disabled&&r!==i.Normal)return void o.code.add(c.H`void applyPBRFactors() {}`);if(r===i.Disabled)return void o.code.add(c.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===i.Schematic)return void o.code.add(c.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:h,hasMetallicRoughnessTextureTransform:m,hasOcclusionTexture:f,hasOcclusionTextureTransform:p,bindType:g}=t;(h||f)&&e.include(n.r,t),o.code.add(c.H`vec3 mrr;
float occlusion;`),h&&o.uniforms.add(g===u.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),f&&o.uniforms.add(g===u.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new l.o("texOcclusion",(e=>e.textureOcclusion))),o.uniforms.add(g===u.c.Pass?new s.t("mrrFactors",(e=>e.mrrFactors)):new a.W("mrrFactors",(e=>e.mrrFactors))),o.code.add(c.H`
    ${(0,c.If)(h,c.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,c.If)(f,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${f?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,c.If)(h,`applyMetallicRoughness(${m?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,c.If)(f,`applyOcclusion(${p?"occlusionUV":"vuv0"});`)}
    }
  `)}r(74810),(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.Simplified=5]="Simplified",o[o.TerrainWithWater=6]="TerrainWithWater",o[o.COUNT=7]="COUNT",h.NV},89786:(e,t,r)=>{function i(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}r.d(t,{p:()=>i})},25618:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h}),r(9093),r(51850);var i=r(80730),o=r(71988),n=r(93588),a=r(2597),s=r(39589),c=r(46263);class l extends s.n{constructor(e,t,r){super(e,"mat4",c.c.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",c.c.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var u=r(63761);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new l("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new n.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
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
}`)}a.Y,a.Y},96598:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(52540),o=r(2597),n=r(63761);function a(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:a}){r?(e.fragment.include(i.E),e.fragment.uniforms.add(new n.N("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(o.H`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?o.H`return fragmentDepth < linearDepth && depth < 1.0;`:o.H`if(fragmentDepth ${a?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(o.H`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(o.H`#define terrainDepthTest(fragmentDepth) {}`)}},51406:(e,t,r)=>{r.d(t,{MU:()=>l,O1:()=>d,QM:()=>u,Sx:()=>c,q2:()=>s});var i=r(29242),o=r(53466),n=r(2597),a=r(35644);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.zK))).code.add(n.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardColorUV(){}`)}function c(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==o.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK))).code.add(n.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardNormalUV(){}`)}function l(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==o.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.zK))).code.add(n.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==o.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.zK))).code.add(n.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==o.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.zK))).code.add(n.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){}`)}},42398:(e,t,r)=>{r.d(t,{A:()=>m});var i=r(33079),o=r(39589),n=r(46263);class a extends o.n{constructor(e,t,r){super(e,"vec4",n.c.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.n{constructor(e,t,r){super(e,"float",n.c.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var c=r(2597),l=r(35644),d=r(46540),u=r(78662);r(11725),u.Gd;const h=8;function m(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new l.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(c.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(c.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?c.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(c.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",h),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),h),new a("vvColorColors",(e=>e.vvColor.colors),h)),r.code.add(c.H`
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

      ${t.hasVvInstancing?c.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(c.H`vec4 vvColor() { return vec4(1.0); }`)}},35093:(e,t,r)=>{r.d(t,{Q:()=>i});const i=1/255.5},34845:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(37585),o=r(48163),n=r(87317),a=r(91829),s=r(47286),c=r(71988),l=r(2597);function d(e){e.fragment.uniforms.add(new c.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,n.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.hZ)(h,0,1):(0,i.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(l.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)(),h=(0,o.vt)()},63365:(e,t,r)=>{r.d(t,{a:()=>o});var i=r(2597);function o(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}},11955:(e,t,r)=>{r.d(t,{S:()=>c});var i=r(35093),o=r(39589);r(46263),o.n;var n=r(20304),a=r(2597),s=r(89192);function c(e,t){!function(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode){case s.sf.Blend:e.fragment.code.add(a.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(i.Q)}) { discard; } }
      `);break;case s.sf.Opaque:o.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.sf.Mask:o.uniforms.add(r).code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.sf.MaskBlend:o.uniforms.add(r).code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new n.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},27950:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(66104),o=r(63365),n=r(2597);function a(e){e.include(o.a),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
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

      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},80730:(e,t,r)=>{r.d(t,{U:()=>o});var i=r(2597);function o(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
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
}`)}},52587:(e,t,r)=>{r.d(t,{OH:()=>l,Y6:()=>s,pM:()=>c});var i=r(38954),o=r(51850),n=r(33079),a=r(2597);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
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
}`)}function c(e){e.uniforms.add(new n.t("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function l(e){e.uniforms.add(new n.t("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,i.i)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,o.vt)()},20693:(e,t,r)=>{r.d(t,{yu:()=>f,Nz:()=>T,NB:()=>p,S7:()=>_});var i=r(58083),o=r(9093),n=r(38954),a=r(51850),s=r(40710),c=r(33079),l=r(20304),d=r(39589),u=r(46263);class h extends d.n{constructor(e,t){super(e,"mat4",u.c.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var m=r(40095);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,n.i)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function p(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new m.X("proj",((e,t)=>t.camera.projectionMatrix)),new h("view",((e,t)=>(0,i.Tl)(g,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,n.i)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new m.X("proj",((e,t)=>t.camera.projectionMatrix)),new m.X("view",((e,t)=>(0,i.Tl)(g,t.camera.viewMatrix,r(t)))),new c.t("localOrigin",((e,t)=>r(t))))}const g=(0,o.vt)(),v=(0,a.vt)();function _(e){e.uniforms.add(new m.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function T(e){e.uniforms.add(new l.m("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}},95250:(e,t,r)=>{r.d(t,{e:()=>n});var i=r(39589),o=r(46263);class n extends i.n{constructor(e,t){super(e,"bool",o.c.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}},68259:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(39589),o=r(46263);class n extends i.n{constructor(e,t){super(e,"vec2",o.c.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},47286:(e,t,r)=>{r.d(t,{G:()=>n});var i=r(39589),o=r(46263);class n extends i.n{constructor(e,t){super(e,"vec2",o.c.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},71988:(e,t,r)=>{r.d(t,{E:()=>n});var i=r(39589),o=r(46263);class n extends i.n{constructor(e,t){super(e,"vec4",o.c.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},93588:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(39589),o=r(46263);class n extends i.n{constructor(e,t){super(e,"int",o.c.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},85977:(e,t,r)=>{r.d(t,{N5:()=>c});var i=r(49186),o=(r(44208),r(53966)),n=r(46263),a=r(620);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class c extends s{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new p,this.outputs=new g}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s=o.main.generateSource(),c="vertex"===e?T:_,l=o.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${c}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${d.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o)=>{for(let n=0;n<i;++n)r[n](e,t,o)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o,n)=>{for(let a=0;a<i;++a)r[a](e,n,t,o)}}}class l{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else o.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new i.A("Shader does not contain main function body.")}}class u{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class h extends s{constructor(){super(...arguments),this.uniforms=new l(this),this.main=new d(this),this.code=new u(this),this.constants=new v(this)}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class g{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:g.DEFAULT_NAME,type:g.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}g.DEFAULT_TYPE="vec4",g.DEFAULT_NAME="fragColor";class v{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=v._numberToFloatStr(r);break;case"int":i=v._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])},                            ${v._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])},                             ${v._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>v._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",T="precision highp float;\nprecision highp sampler2D;"},63761:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(39589),o=r(46263);class n extends i.n{constructor(e,t){super(e,"sampler2D",o.c.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},97220:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}},98958:(e,t,r)=>{r.d(t,{w:()=>d});var i=r(97768),o=r(39341),n=r(3694),a=r(94656);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new n.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,a.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}var c=r(63907),l=r(90644);class d{constructor(e,t,r,n,a=o.D){this.release=n,this.locations=a,this.primitiveType=c.WR.TRIANGLES,this.key=t.key,this._program=new s(e.rctx,r.get().build(t),a),this._pipeline=this.initializePipeline(t),this.reload=async o=>{if(o&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,i.WD)(this._program),this._program=new s(e.rctx,r.get().build(t),a),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return(0,l.Ey)({blending:l.Os,colorWrite:l.kn})}}},51976:(e,t,r)=>{r.d(t,{K:()=>s,W:()=>c});var i=r(49186),o=r(2597),n=r(4576);class a{constructor(e){this._bits=[...e]}equals(e){return(0,n.aI)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}class s extends o.Y{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new a(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}}function c(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits;let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);const c=a[s],l=(1<<n)-1<<c;a[s]+=n,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&l)>>c},set(t){if(this[r]!==t){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+t<<c&l,"number"!=typeof t)throw new i.A(`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new i.A(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&l)>>c)},set(e){if(this[r]!==e&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"boolean"!=typeof e))throw new i.A(`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}},57917:(e,t,r)=>{r.d(t,{S:()=>o});var i=r(34275);function o(e){if(e.length<i.y9)return Array.from(e);if((0,i.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,i.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}},29920:(e,t,r)=>{r.d(t,{j:()=>s});var i=r(3694),o=r(38954),n=r(51850),a=r(620);class s{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,a.vA)(e.length>=1),(0,a.vA)(3===r.size||4===r.size);const{data:i,size:s,indices:l}=r;(0,a.vA)(l.length%this._numIndexPerPrimitive==0),(0,a.vA)(l.length>=e.length*this._numIndexPerPrimitive);const d=e.length;let u=s*l[this._numIndexPerPrimitive*e[0]];c.clear(),c.push(u);const h=(0,n.fA)(i[u],i[u+1],i[u+2]),m=(0,n.o8)(h);for(let t=0;t<d;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){u=s*l[r+e],c.push(u);let t=i[u];h[0]=Math.min(t,h[0]),m[0]=Math.max(t,m[0]),t=i[u+1],h[1]=Math.min(t,h[1]),m[1]=Math.max(t,m[1]),t=i[u+2],h[2]=Math.min(t,h[2]),m[2]=Math.max(t,m[2])}}this.bbMin=h,this.bbMax=m;const f=(0,o.m)((0,n.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(m[0]-h[0],m[1]-h[1]),m[2]-h[2]);let p=this.radius*this.radius;for(let e=0;e<c.length;++e){u=c.at(e);const t=i[u]-f[0],r=i[u+1]-f[1],o=i[u+2]-f[2],n=t*t+r*r+o*o;if(n<=p)continue;const a=Math.sqrt(n),s=.5*(a-this.radius);this.radius=this.radius+s,p=this.radius*this.radius;const l=s/a;f[0]+=t*l,f[1]+=r*l,f[2]+=o*l}this.center=f,c.clear()}getChildren(){if(this._children||(0,o.s)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,o.m)((0,n.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:a,size:c,indices:l}=this.position;for(let o=0;o<t;++o){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[o];let s=c*l[n],d=a[s],u=a[s+1],h=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=c*l[n+e];const t=a[s],r=a[s+1],i=a[s+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[o]=t,++i[t]}let d=0;for(let e=0;e<8;++e)i[e]>0&&++d;if(d<2)return;const u=new Array(8);for(let e=0;e<8;++e)u[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];u[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==u[e]&&this._children.push(new s(u[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){c.prune()}}const c=new i.A({deallocator:null})},69720:(e,t,r)=>{r.d(t,{J:()=>o});var i=r(24326);class o{constructor(){this.id=(0,i.c)()}}},96672:(e,t,r)=>{var i;r.d(t,{X:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},39341:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(46540);const o=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.CENTEROFFSETANDDISTANCE,5],[i.r.SYMBOLCOLOR,5],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.ROTATION,8],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},25634:(e,t,r)=>{r.d(t,{m8:()=>c,NV:()=>d});var i=r(97768),o=r(74887),n=r(2597),a=r(89192);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return a.Am.LOADED}}class c extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new d(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,o.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends n.Y{constructor(e=null){super(),this.textureEmissive=e}}class d extends l{constructor(e=null,t=null,r=null,i=null,o=null,n,a){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=o,this.scale=n,this.normalTextureTransformMatrix=a}}},87170:(e,t,r)=>{r.d(t,{V:()=>C});var i=r(9093),o=r(38954),n=r(97146),a=r(57917),s=r(29920),c=r(69720),l=r(96672),d=r(51850),u=r(4341),h=r(11964);function m(e,t,r){return(0,o.d)(f,t,e),(0,o.d)(p,r,e),.5*(0,o.l)((0,o.e)(f,f,p))}r(32114),new u.I(h.vt),new u.I((()=>{return e?{p0:(0,d.o8)(e.p0),p1:(0,d.o8)(e.p1),p2:(0,d.o8)(e.p2)}:{p0:(0,d.vt)(),p1:(0,d.vt)(),p2:(0,d.vt)()};var e}));const f=(0,d.vt)(),p=(0,d.vt)(),g=(0,d.vt)(),v=(0,d.vt)(),_=(0,d.vt)(),T=(0,d.vt)();var x=r(24326),A=r(89192);class E{constructor(){this.uid=(0,x.c)()}}class b extends E{constructor(e){super(),this.highlightGroupName=e,this.channel=A.Mg.Highlight}}var S=r(620),M=r(46540);class C extends c.J{constructor(e,t,r=null,i=l.X.Mesh,o=null,a=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=a,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,n.Dg)(r.indices)}),e===M.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new C(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:(0,a.S)(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===l.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===l.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,o.t)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,o.i)(t,0,0,0),(0,o.i)(T,0,0,0);let a=0,s=0;for(let e=0;e<n.length-2;e+=3){const c=n[e]*r,l=n[e+1]*r,d=n[e+2]*r;(0,o.i)(g,i[c],i[c+1],i[c+2]),(0,o.i)(v,i[l],i[l+1],i[l+2]),(0,o.i)(_,i[d],i[d+1],i[d+2]);const u=m(g,v,_);u?((0,o.g)(g,g,v),(0,o.g)(g,g,_),(0,o.h)(g,g,1/3*u),(0,o.g)(t,t,g),a+=u):((0,o.g)(T,T,g),(0,o.g)(T,T,v),(0,o.g)(T,T,_),s+=3)}return!(0===s&&0===a||(0!==a?((0,o.h)(t,t,1/a),0):0===s||((0,o.h)(t,T,1/s),0)))}(this.attributes.get(M.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(M.r.POSITION);return function(e,t,r){if(!e)return!1;(0,o.i)(r,0,0,0),(0,o.i)(T,0,0,0);let i=0,n=0;const{size:a,data:s,indices:c}=e,l=c.length-1,d=l+(t?2:0);for(let e=0;e<d;e+=2){const t=e<l?e+1:0,d=c[e<l?e:l]*a,u=c[t]*a;g[0]=s[d],g[1]=s[d+1],g[2]=s[d+2],v[0]=s[u],v[1]=s[u+1],v[2]=s[u+2],(0,o.h)(g,(0,o.g)(g,g,v),.5);const h=(0,o.F)(g,v);h>0?((0,o.g)(r,r,(0,o.h)(g,g,h)),i+=h):0===i&&((0,o.g)(T,T,g),n++)}return 0!==i?((0,o.h)(r,r,1/i),!0):0!==n&&((0,o.h)(r,T,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,o.i)(t,0,0,0);let a=-1,s=0;for(let e=0;e<n.length;e++){const o=n[e]*r;a!==o&&(t[0]+=i[o],t[1]+=i[o+1],t[2]+=i[o+2],s++),a=o}return s>1&&(0,o.h)(t,t,1/s),s>0}(this.attributes.get(M.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(M.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===l.X.Mesh?3:1;(0,S.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,n.tM)(e.indices.length/t);return new s.j(r,t,e)}get transformation(){return this._transformation??i.zK}set transformation(e){this._transformation=e&&e!==i.zK?(0,i.o8)(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach(((t,r)=>e(r)))}allocateIdAndHighlight(e){const t=new b(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}},11725:(e,t,r)=>{r.d(t,{im:()=>u,m$:()=>i});var i,o,n=r(51850),a=r(2597),s=r(69720),c=r(96672),l=r(39341),d=r(43616);class u extends s.J{constructor(e,t){super(),this.type=c.X.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=l.D,this._pp0=(0,n.fA)(0,0,1),this._pp1=(0,n.fA)(0,0,0),this._parameters=new t,(0,d.MB)(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,d.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}(o=i||(i={}))[o.None=0]="None",o[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque",a.Y},59643:(e,t,r)=>{var i;r.d(t,{Y:()=>i}),function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(i||(i={}))},33524:(e,t,r)=>{r.d(t,{K_:()=>f,Yf:()=>l,aB:()=>m,ez:()=>c,m6:()=>p,xt:()=>u,z5:()=>d});var i=r(49255),o=r(59643),n=r(63907),a=r(90644);const s=(0,a.p3)(n.dn.ONE,n.dn.ZERO,n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA);function c(e){return e===o.Y.FrontFace?null:s}function l(e){switch(e){case o.Y.NONE:return a.Ky;case o.Y.ColorAlpha:return s;case o.Y.FrontFace:case o.Y.COUNT:return null}}function d(e){if(e.draped)return null;switch(e.oitPass){case o.Y.NONE:case o.Y.FrontFace:return e.writeDepth?a.Uy:null;case o.Y.ColorAlpha:case o.Y.COUNT:return null}}const u=5e5,h={factor:-1,units:-2};function m(e){return e?h:null}function f(e,t=n.MT.LESS){return e===o.Y.NONE||e===o.Y.FrontFace?t:n.MT.LEQUAL}function p(e,t){const r=(0,i.LG)(t);return e===o.Y.ColorAlpha?r?{buffers:[n.Nm.COLOR_ATTACHMENT0,n.Nm.COLOR_ATTACHMENT1,n.Nm.COLOR_ATTACHMENT2]}:{buffers:[n.Nm.COLOR_ATTACHMENT0,n.Nm.COLOR_ATTACHMENT1]}:r?{buffers:[n.Nm.COLOR_ATTACHMENT0,n.Nm.COLOR_ATTACHMENT1]}:null}},13464:(e,t,r)=>{var i;r.d(t,{N:()=>i}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"}(i||(i={}))},76844:(e,t,r)=>{r.d(t,{g:()=>U}),r(44208);var i=r(49186),o=r(65529),n=r(97768),a=r(74887),s=r(34275),c=r(84952),l=r(99677),d=r(56058),u=r(89192),h=r(2741);let m;var f,p;(p=f||(f={}))[p.ETC1_RGB=0]="ETC1_RGB",p[p.ETC2_RGBA=1]="ETC2_RGBA",p[p.BC1_RGB=2]="BC1_RGB",p[p.BC3_RGBA=3]="BC3_RGBA",p[p.BC4_R=4]="BC4_R",p[p.BC5_RG=5]="BC5_RG",p[p.BC7_M6_RGB=6]="BC7_M6_RGB",p[p.BC7_M5_RGBA=7]="BC7_M5_RGBA",p[p.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",p[p.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",p[p.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",p[p.ATC_RGB=11]="ATC_RGB",p[p.ATC_RGBA=12]="ATC_RGBA",p[p.FXT1_RGB=17]="FXT1_RGB",p[p.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",p[p.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",p[p.ETC2_EAC_R11=20]="ETC2_EAC_R11",p[p.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",p[p.RGBA32=13]="RGBA32",p[p.RGB565=14]="RGB565",p[p.BGR565=15]="BGR565",p[p.RGBA4444=16]="RGBA4444";var g=r(63907),v=r(21231),_=r(42293);let T=null,x=null;async function A(){return null==x&&(m??=(async()=>{const e=await r.e(9321).then(r.bind(r,49321)),t=await e.default({locateFile:e=>(0,h.s)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),x=m,T=await x),x}function E(e,t,r,i,o){const n=(0,_.IB)(t?g.CQ.COMPRESSED_RGBA8_ETC2_EAC:g.CQ.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function b(e){return e.getNumImages()>=1&&!e.isUASTC()}function S(e){return e.getFaces()>=1&&e.isETC1S()}function M(e,t,r,i,o,n,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?i?[f.ETC2_RGBA,g.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[f.ETC1_RGB,g.CQ.COMPRESSED_RGB8_ETC2]:l?i?[f.BC3_RGBA,g.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[f.BC1_RGB,g.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[f.RGBA32,g.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?g.Cj.LINEAR_MIPMAP_LINEAR:g.Cj.LINEAR,t.width=o,t.height=n,new v.g(e,t,{type:"compressed",levels:m})}var C=r(69720),R=r(96672),I=r(53966);const w=()=>I.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function O(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const N=O("DXT1"),y=O("DXT3"),P=O("DXT5");function L(e,t,r){if(e instanceof ImageData)return L(H(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function H(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new i.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var D,F,G=r(620),B=r(67171);class U extends C.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=R.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new o.A,this._parameters={...V,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,c.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,c.DB)(e.src)||(0,c.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new B.R;return t.wrapMode=this._parameters.wrap??g.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?g.Cj.LINEAR_MIPMAP_LINEAR:g.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,s.mw)(e)||(0,s.mg)(e))return t.encoding===u.JS.KTX2_ENCODING?function(e,t){if(null==T)return e.byteLength;const r=new T.KTX2File(new Uint8Array(e)),i=S(r)?E(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===u.JS.BASIS_ENCODING?function(e,t){if(null==T)return e.byteLength;const r=new T.BasisFile(new Uint8Array(e)),i=b(r)?E(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?z(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new v.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,s.mg)(t)&&this._parameters.encoding===u.JS.DDS_ENCODING?this._loadFromDDSData(e,t):(0,s.mw)(t)&&this._parameters.encoding===u.JS.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,s.mg)(t)?this._loadFromPixelData(e,t):(0,s.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<D.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e.buffer,e.byteOffset,31);if(542327876!==r[0])return w().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return w().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case N:o=8,n=g.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case y:o=16,n=g.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case P:o=16,n=g.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return w().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],c=r[3];(3&s||3&c)&&(w().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,d=c;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let m=e.byteOffset+r[1]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(c+3>>2)*o,u=new Uint8Array(e.buffer,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:f},internalFormat:n,width:l,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?g.Cj.LINEAR_MIPMAP_LINEAR:g.Cj.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new v.g(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==T&&(T=await A());const i=new T.KTX2File(new Uint8Array(r));if(!S(i))return null;i.startTranscoding();const o=M(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==T&&(T=await A());const i=new T.BasisFile(new Uint8Array(r));if(!b(i))return null;i.startTranscoding();const o=M(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,G.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?g.Ab.LUMINANCE:3===this._parameters.components?g.Ab.RGB:g.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new v.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,l.D)(t,{signal:r});return(0,a.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,d.Sx)(t,t.src,!1,r);return(0,a.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=D.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((o,s)=>{const c=()=>{t.removeEventListener("loadeddata",l),t.removeEventListener("error",d),(0,n.xt)(u)},l=()=>{t.readyState>=D.HAVE_CURRENT_DATA&&(c(),o(this._loadFromImage(e,t)))},d=e=>{c(),s(e||new i.A("Failed to load video"))};t.addEventListener("loadeddata",l),t.addEventListener("error",d);const u=(0,a.u7)(r,(()=>d((0,a.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?H(e):e;let i=e.width,o=e.height;do{i=Math.ceil(i/2),o=Math.ceil(o/2),r=i*o}while(r>1048576||null!=t&&(i>t||o>t));return L(e,i,o)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return L(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=z(r);this._parameters.width=i.width,this._parameters.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this._parameters.components?g.Ab.RGB:g.Ab.RGBA,o.width=i.width,o.height=i.height,this._glTexture=new v.g(e,o,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,n.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function z(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(F=D||(D={}))[F.HAVE_NOTHING=0]="HAVE_NOTHING",F[F.HAVE_METADATA=1]="HAVE_METADATA",F[F.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",F[F.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",F[F.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const V={wrap:{s:g.pF.REPEAT,t:g.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1}},89192:(e,t,r)=>{var i,o,n,a,s,c,l,d;r.d(t,{Am:()=>a,C7:()=>n,JS:()=>d,Mg:()=>c,dd:()=>s,it:()=>o,s2:()=>i,sf:()=>l}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(n||(n={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(c||(c={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(l||(l={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(d||(d={}))},77194:(e,t,r)=>{r.d(t,{MD:()=>c,cJ:()=>s,hs:()=>l,m0:()=>a});var i=r(34727),o=(r(17352),r(97937));function n(e,t,r){const i=r.parameters;return d.scale=Math.min(i.divisor/(t-i.offset),1),d.factor=function(e){return Math.abs(e*e*e)}(e),d}function a(e,t){return(0,i.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function s(e,t,r,i){i.scale=function(e,t,r){const i=n(e,t,r);return i.minScaleFactor=0,a(1,i)}(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function c(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function l(e,t,r,i){return a(e,n(t,r,i))}r(24151),(0,i.kU)(10),(0,i.kU)(12),(0,i.kU)(70),(0,i.kU)(40);const d={scale:0,factor:0,minScaleFactor:0};(0,o.c)()},16396:(e,t,r)=>{r.d(t,{ou:()=>l}),r(77690),r(29242),r(58083),r(9093);var i=r(38954),o=r(51850),n=r(97937),a=r(24151),s=r(57005);const c=new class{constructor(e=0){this.offset=e,this.sphere=(0,n.c)(),this.tmpVertex=(0,o.vt)()}applyToVertex(e,t,r){const o=this.objectTransform.transform,n=(0,i.i)(d,e,t,r),a=(0,i.t)(n,n,o),s=this.offset/(0,i.l)(a);(0,i.b)(a,a,a,s);const c=this.objectTransform.inverse;return(0,i.t)(this.tmpVertex,a,c),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,i.l)(e);(0,i.b)(e,e,e,r);const o=this.offset/(0,i.l)(t);(0,i.b)(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,i.l)((0,n.a)(e)),r=this.offset/t;return(0,i.b)((0,n.a)(this.sphere),(0,n.a)(e),(0,n.a)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function l(e){return null!=e?(c.offset=e,c):null}new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,o.vt)(),this._tmpMbs=(0,n.c)(),this._tmpObb=new s.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,i.l)(e)}applyToVertex(e,t,r){const o=(0,i.i)(d,e,t,r),n=(0,i.i)(u,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,i.l)(n);return(0,i.b)(this._tmpVertex,o,n,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],o=e[2]+t,n=e[3],a=e[4],s=e[5]+t,c=Math.abs(r),l=Math.abs(i),d=Math.abs(o),u=Math.abs(n),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*n))*Math.min(c,u),p=.5*(1+Math.sign(i*a))*Math.min(l,h),g=.5*(1+Math.sign(o*s))*Math.min(d,m),v=Math.max(c,u),_=Math.max(l,h),T=Math.max(d,m),x=Math.sqrt(f*f+p*p+g*g),A=Math.sign(c+r),E=Math.sign(l+i),b=Math.sign(d+o),S=Math.sign(u+n),M=Math.sign(h+a),C=Math.sign(m+s),R=this._totalOffset;if(x<R)return e[0]-=(1-A)*R,e[1]-=(1-E)*R,e[2]-=(1-b)*R,e[3]+=S*R,e[4]+=M*R,e[5]+=C*R,e;const I=R/Math.sqrt(v*v+_*_+T*T),w=R/x,O=w-I,N=-O;return e[0]+=r*(A*N+w),e[1]+=i*(E*N+w),e[2]+=o*(b*N+w),e[3]+=n*(S*O+I),e[4]+=a*(M*O+I),e[5]+=s*(C*O+I),e}applyToMbs(e){const t=(0,i.l)((0,n.a)(e)),r=this._totalOffset/t;return(0,i.b)((0,n.a)(this._tmpMbs),(0,n.a)(e),(0,n.a)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,s.gm)(e,this._totalOffset,this._totalOffset,a.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,o.vt)()}applyToVertex(e,t,r){const o=(0,i.i)(d,e,t,r),n=(0,i.g)(u,o,this.localOrigin),a=this.offset/(0,i.l)(n);return(0,i.b)(this.tmpVertex,o,n,a),this.tmpVertex}applyToAabb(e){const t=h,r=m,i=f;for(let o=0;o<3;++o)t[o]=e[0+o]+this.localOrigin[o],r[o]=e[3+o]+this.localOrigin[o],i[o]=t[o];const o=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=o[t],e[t+3]=o[t];const n=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let o=0;o<3;++o)i[o]=e&1<<o?r[o]:t[o];n(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let o=0;o<3;++o)i[o]=a&1<<o?0:e&1<<o?t[o]:r[o];n(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const d=(0,o.vt)(),u=(0,o.vt)(),h=(0,o.vt)(),m=(0,o.vt)(),f=(0,o.vt)()},11787:(e,t,r)=>{r.d(t,{$U:()=>Q});var i=r(38954),o=r(51850),n=r(24151),a=r(1843),s=r(49255),c=r(96336),l=r(22911),d=r(62602),u=r(59469),h=r(35093),m=r(16943),f=r(89192),p=r(25634),g=r(11725),v=r(33524),_=r(70328),T=r(96672),x=r(620),A=r(46540);class E{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const b=(0,_.vt)();function S(e,t,r,o,n,a){if(!e.visible)return;const s=(0,i.a)(F,o,r),c=(e,t,r)=>{a(e,r,t,!1)},l=new E(!1,t.options.normalRequired);if(e.boundingInfo){(0,x.vA)(e.type===T.X.Mesh);const i=t.tolerance;C(e.boundingInfo,r,s,i,n,l,c)}else{const t=e.attributes.get(A.r.POSITION),o=t.indices;!function(e,t,r,o,n,a,s,c,l,d){const u=t,h=G,m=Math.abs(u[0]),f=Math.abs(u[1]),p=Math.abs(u[2]),g=m>=f?m>=p?0:2:f>=p?1:2,v=g,_=u[v]<0?2:1,T=(g+_)%3,x=(g+(3-_))%3,A=u[T]/u[v],E=u[x]/u[v],b=1/u[v],S=I,M=w,C=O,{normalRequired:R}=l;for(let t=r;t<o;++t){const r=3*t,o=s*n[r];(0,i.i)(h[0],a[o+0],a[o+1],a[o+2]);const l=s*n[r+1];(0,i.i)(h[1],a[l+0],a[l+1],a[l+2]);const u=s*n[r+2];(0,i.i)(h[2],a[u+0],a[u+1],a[u+2]),c&&((0,i.c)(h[0],c.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,i.c)(h[1],c.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,i.c)(h[2],c.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,i.a)(S,h[0],e),(0,i.a)(M,h[1],e),(0,i.a)(C,h[2],e);const m=S[T]-A*S[v],f=S[x]-E*S[v],p=M[T]-A*M[v],g=M[x]-E*M[v],_=C[T]-A*C[v],I=C[x]-E*C[v],w=_*g-I*p,O=m*I-f*_,N=p*f-g*m;if((w<0||O<0||N<0)&&(w>0||O>0||N>0))continue;const P=w+O+N;if(0===P)continue;const L=w*(b*S[v])+O*(b*M[v])+N*(b*C[v]);if(L*Math.sign(P)<0)continue;const H=L/P;H>=0&&d(H,t,R?y(h):null)}}(r,s,0,o.length/3,o,t.data,t.stride,n,l,c)}}const M=(0,o.vt)();function C(e,t,r,o,n,a,s){if(null==e)return;const c=function(e,t){return(0,i.i)(t,1/e[0],1/e[1],1/e[2])}(r,M);if((0,_.Ne)(b,e.bbMin),(0,_.vI)(b,e.bbMax),null!=n&&n.applyToAabb(b),function(e,t,r,i){return function(e,t,r,i){const o=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let a=Math.min(o,n),s=Math.max(o,n);const c=(e[1]-i-t[1])*r[1],l=(e[4]+i-t[1])*r[1];if(s=Math.min(s,Math.max(c,l)),s<0)return!1;if(a=Math.max(a,Math.min(c,l)),a>s)return!1;const d=(e[2]-i-t[2])*r[2],u=(e[5]+i-t[2])*r[2];return s=Math.min(s,Math.max(d,u)),!(s<0)&&(a=Math.max(a,Math.min(d,u)),!(a>s)&&a<1/0)}(e,t,r,i)}(b,t,c,o)){const{primitiveIndices:i,position:c}=e,l=i?i.length:c.indices.length/3;if(l>H){const i=e.getChildren();if(void 0!==i){for(const e of i)C(e,t,r,o,n,a,s);return}}!function(e,t,r,i,o,n,a,s,c,l,d){const u=e[0],h=e[1],m=e[2],f=t[0],p=t[1],g=t[2],{normalRequired:v}=l;for(let e=0;e<i;++e){const t=s[e],r=3*t,i=a*o[r];let l=n[i],_=n[i+1],T=n[i+2];const x=a*o[r+1];let A=n[x],E=n[x+1],b=n[x+2];const S=a*o[r+2];let M=n[S],C=n[S+1],I=n[S+2];null!=c&&([l,_,T]=c.applyToVertex(l,_,T,e),[A,E,b]=c.applyToVertex(A,E,b,e),[M,C,I]=c.applyToVertex(M,C,I,e));const w=A-l,O=E-_,y=b-T,P=M-l,L=C-_,H=I-T,F=p*H-L*g,G=g*P-H*f,B=f*L-P*p,U=w*F+O*G+y*B;if(Math.abs(U)<=D)continue;const z=u-l,V=h-_,W=m-T,j=z*F+V*G+W*B;if(U>0){if(j<0||j>U)continue}else if(j>0||j<U)continue;const k=V*y-O*W,q=W*w-y*z,Y=z*O-w*V,X=f*k+p*q+g*Y;if(U>0){if(X<0||j+X>U)continue}else if(X>0||j+X<U)continue;const $=(P*k+L*q+H*Y)/U;$>=0&&d($,t,v?N(w,O,y,P,L,H,R):null)}}(t,r,0,l,c.indices,c.data,c.stride,i,n,a,s)}}const R=(0,o.vt)();const I=(0,o.vt)(),w=(0,o.vt)(),O=(0,o.vt)();function N(e,t,r,o,n,a,s){return(0,i.i)(P,e,t,r),(0,i.i)(L,o,n,a),(0,i.e)(s,P,L),(0,i.n)(s,s),s}function y(e){return(0,i.a)(P,e[1],e[0]),(0,i.a)(L,e[2],e[0]),(0,i.e)(R,P,L),(0,i.n)(R,R),R}const P=(0,o.vt)(),L=(0,o.vt)(),H=1e3,D=1e-7,F=(0,o.vt)(),G=[(0,o.vt)(),(0,o.vt)(),(0,o.vt)()];var B=r(13464),U=r(16396),z=r(59907);class V{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(A.r.POSITION).indices.length}write(e,t,r,i,o,n){(0,z.SA)(r,i,this.vertexBufferLayout,e,t,o,n)}}var W=r(43616),j=r(97225),k=r(90237),q=r(53466),Y=r(51976),X=r(35256);class $ extends X.E{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=f.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=f.s2.None,this.normalType=c.W.Attribute,this.customDepthTest=f.it.Less,this.emissionSource=l.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===l.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?q.I.Default:q.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,k._)([(0,Y.W)({count:f.sf.COUNT})],$.prototype,"alphaDiscardMode",void 0),(0,k._)([(0,Y.W)({count:d.W.COUNT})],$.prototype,"doubleSidedMode",void 0),(0,k._)([(0,Y.W)({count:u.A9.COUNT})],$.prototype,"pbrMode",void 0),(0,k._)([(0,Y.W)({count:f.s2.COUNT})],$.prototype,"cullFace",void 0),(0,k._)([(0,Y.W)({count:c.W.COUNT})],$.prototype,"normalType",void 0),(0,k._)([(0,Y.W)({count:f.it.COUNT})],$.prototype,"customDepthTest",void 0),(0,k._)([(0,Y.W)({count:l.ZX.COUNT})],$.prototype,"emissionSource",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasVertexColors",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasSymbolColors",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasVerticalOffset",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasSlicePlane",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasSliceHighlight",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasColorTexture",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasMetallicRoughnessTexture",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasOcclusionTexture",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasNormalTexture",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasScreenSizePerspective",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasVertexTangents",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasOccludees",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasModelTransformation",void 0),(0,k._)([(0,Y.W)()],$.prototype,"offsetBackfaces",void 0),(0,k._)([(0,Y.W)()],$.prototype,"vvSize",void 0),(0,k._)([(0,Y.W)()],$.prototype,"vvColor",void 0),(0,k._)([(0,Y.W)()],$.prototype,"receiveShadows",void 0),(0,k._)([(0,Y.W)()],$.prototype,"receiveAmbientOcclusion",void 0),(0,k._)([(0,Y.W)()],$.prototype,"textureAlphaPremultiplied",void 0),(0,k._)([(0,Y.W)()],$.prototype,"instanced",void 0),(0,k._)([(0,Y.W)()],$.prototype,"instancedColor",void 0),(0,k._)([(0,Y.W)()],$.prototype,"writeDepth",void 0),(0,k._)([(0,Y.W)()],$.prototype,"transparent",void 0),(0,k._)([(0,Y.W)()],$.prototype,"enableOffset",void 0),(0,k._)([(0,Y.W)()],$.prototype,"terrainDepthTest",void 0),(0,k._)([(0,Y.W)()],$.prototype,"cullAboveTerrain",void 0),(0,k._)([(0,Y.W)()],$.prototype,"snowCover",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasColorTextureTransform",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasEmissionTextureTransform",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasNormalTextureTransform",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasOcclusionTextureTransform",void 0),(0,k._)([(0,Y.W)()],$.prototype,"hasMetallicRoughnessTextureTransform",void 0);var Z=r(97220),J=r(57323);class K extends j.R5{constructor(e,t,i){super(e,t,i,new Z.$(J.R,(()=>r.e(9933).then(r.bind(r,39933))))),this.type="RealisticTreeTechnique"}}class Q extends g.im{constructor(e,t){super(e,te),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[B.N.OPAQUE_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&!this.parameters.transparent],[B.N.TRANSPARENT_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[B.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.XY)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,a.BP)().vec3f(A.r.POSITION);return e.normalType===c.W.Compressed?t.vec2i16(A.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(A.r.NORMAL),e.hasVertexTangents&&t.vec4f(A.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(A.r.UV0),e.hasVertexColors&&t.vec4u8(A.r.COLOR),e.hasSymbolColors&&t.vec4u8(A.r.SYMBOLCOLOR),(0,m.E)()&&t.vec4u8(A.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new $(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.V.Shadow&&e!==s.V.ShadowExcludeHighlight&&e!==s.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<h.Q)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n=t||o||i,a="replace"===e.colorMixMode,s=e.opacity>=h.Q;if(r&&n)return a||s;const c=e.externalColor&&e.externalColor[3]>=h.Q;return r?a?c:s:n?a||s:a?c:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,i.p)(this.parameters.emissiveFactor,o.uY)}getConfiguration(e,t){const r=this.parameters,{treeRendering:i,doubleSided:o,doubleSidedType:n}=r;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!r.normalTextureId,this._configuration.hasColorTexture=!!r.textureId,this._configuration.hasVertexTangents=!i&&r.hasVertexTangents,this._configuration.instanced=r.isInstanced,this._configuration.instancedDoublePrecision=r.instancedDoublePrecision,this._configuration.vvSize=!!r.vvSize,this._configuration.hasVerticalOffset=null!=r.verticalOffset,this._configuration.hasScreenSizePerspective=null!=r.screenSizePerspective,this._configuration.hasSlicePlane=r.hasSlicePlane,this._configuration.hasSliceHighlight=r.hasSliceHighlight,this._configuration.alphaDiscardMode=r.textureAlphaMode,this._configuration.normalType=i?c.W.Attribute:r.normalType,this._configuration.transparent=r.transparent,this._configuration.writeDepth=r.writeDepth,null!=r.customDepthTest&&(this._configuration.customDepthTest=r.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=r.hasSlicePlane?f.s2.None:r.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=r.modelTransformation,this._configuration.hasVertexColors=r.hasVertexColors,this._configuration.hasSymbolColors=r.hasSymbolColors,this._configuration.doubleSidedMode=i?d.W.WindingOrder:o&&"normal"===n?d.W.View:o&&"winding-order"===n?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=r.hasInstancedColor,this._configuration.receiveShadows=r.receiveShadows&&r.receiveShadows,this._configuration.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!r.vvColor,this._configuration.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,this._configuration.pbrMode=r.usePBR?r.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!r.metallicRoughnessTextureId,this._configuration.emissionSource=i?l.ZX.None:null!=r.emissiveTextureId?l.ZX.Texture:r.usePBR?l.ZX.Value:l.ZX.None,this._configuration.hasOcclusionTexture=!i&&!!r.occlusionTextureId,this._configuration.offsetBackfaces=!(!r.transparent||!r.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<v.xt,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!r.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,r,o,a,s){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,i.i)(se,t[12],t[13],t[14]);let s=null;switch(r.viewingMode){case n.RT.Global:s=(0,i.n)(ne,se);break;case n.RT.Local:s=(0,i.c)(ne,oe)}let c=0;const l=(0,i.d)(ce,se,e.eye),d=(0,i.l)(l),u=(0,i.h)(l,l,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,i.f)(s,u)),c+=(0,W.kE)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,i.h)(s,s,c),(0,i.q)(ae,s,r.transform.inverseRotation),o=(0,i.d)(re,o,ae),a=(0,i.d)(ie,a,ae)}S(e,r,o,a,(0,U.ou)(r.verticalOffset),s)}createGLMaterial(e){return new ee(e)}createBufferWriter(){return new V(this._vertexBufferLayout)}}class ee extends p.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,i.i)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?K:j.R5,e)}}class te extends j.uD{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const re=(0,o.vt)(),ie=(0,o.vt)(),oe=(0,o.fA)(0,0,1),ne=(0,o.vt)(),ae=(0,o.vt)(),se=(0,o.vt)(),ce=(0,o.vt)()},35256:(e,t,r)=>{r.d(t,{E:()=>l});var i=r(90237),o=r(49255),n=r(51976);class a extends n.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,n.W)()],a.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,n.W)()],a.prototype,"hasModelTransformation",void 0);var s=r(46263),c=r(59643);class l extends a{constructor(){super(...arguments),this.output=o.V.Color,this.oitPass=c.Y.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=s.c.Pass,this.writeDepth=!0}}(0,i._)([(0,n.W)({count:o.V.COUNT})],l.prototype,"output",void 0),(0,i._)([(0,n.W)({count:c.Y.COUNT})],l.prototype,"oitPass",void 0)},43616:(e,t,r)=>{r.d(t,{MB:()=>s,Um:()=>c,kE:()=>a});var i=r(4576),o=r(34727),n=r(77194);function a(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;null!=a&&(s=(0,n.hs)(s,i,t,a));const c=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.qE)(c*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function s(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?Array.isArray(e[o])&&(0,i.aI)(n,e[o])||(e[o]=n.slice(),r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}const c={multiply:1,ignore:2,replace:3,tint:4}},59907:(e,t,r)=>{r.d(t,{Hk:()=>h,Pq:()=>u,SA:()=>g,Ut:()=>d,p1:()=>m,tH:()=>p,tb:()=>f,uO:()=>s});var i=r(58083),o=r(13030),n=r(620),a=r(46540);function s(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,c=n.length;if(r*=s,1===i)for(let e=0;e<c;++e)a[r]=o[n[e]],r+=s;else for(let e=0;e<c;++e){const t=o[n[e]];for(let e=0;e<i;e++)a[r]=t,r+=s}}function c(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length;r*=a;for(let e=0;e<s;++e){const t=2*o[e];n[r]=i[t],n[r+1]=i[t+1],r+=a}}function l(e,t,r,i){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,c=n.length;if(r*=s,null==i||1===i)for(let e=0;e<c;++e){const t=3*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}else for(let e=0;e<c;++e){const t=3*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}}function d(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,c=n.length;if(r*=s,1===i)for(let e=0;e<c;++e){const t=4*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}else for(let e=0;e<c;++e){const t=4*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}}function u(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride;t*=o;for(let e=0;e<r;++e)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=o}function h(e,t,r,o,n=1){if(!t)return void l(e,r,o,n);const{data:a,indices:s}=e,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=t[0],m=t[1],f=t[2],p=t[4],g=t[5],v=t[6],_=t[8],T=t[9],x=t[10],A=t[12],E=t[13],b=t[14];o*=d;let S=0,M=0,C=0;const R=(0,i.tZ)(t)?e=>{S=a[e]+A,M=a[e+1]+E,C=a[e+2]+b}:e=>{const t=a[e],r=a[e+1],i=a[e+2];S=h*t+p*r+_*i+A,M=m*t+g*r+T*i+E,C=f*t+v*r+x*i+b};if(1===n)for(let e=0;e<u;++e)R(3*s[e]),c[o]=S,c[o+1]=M,c[o+2]=C,o+=d;else for(let e=0;e<u;++e){R(3*s[e]);for(let e=0;e<n;++e)c[o]=S,c[o+1]=M,c[o+2]=C,o+=d}}function m(e,t,r,o,n=1){if(!t)return void l(e,r,o,n);const{data:a,indices:s}=e,c=t,d=r.typedBuffer,u=r.typedBufferStride,h=s.length,m=c[0],f=c[1],p=c[2],g=c[4],v=c[5],_=c[6],T=c[8],x=c[9],A=c[10],E=!(0,i.ut)(c),b=1e-6,S=1-b;o*=u;let M=0,C=0,R=0;const I=(0,i.tZ)(c)?e=>{M=a[e],C=a[e+1],R=a[e+2]}:e=>{const t=a[e],r=a[e+1],i=a[e+2];M=m*t+g*r+T*i,C=f*t+v*r+x*i,R=p*t+_*r+A*i};if(1===n)if(E)for(let e=0;e<h;++e){I(3*s[e]);const t=M*M+C*C+R*R;if(t<S&&t>b){const e=1/Math.sqrt(t);d[o]=M*e,d[o+1]=C*e,d[o+2]=R*e}else d[o]=M,d[o+1]=C,d[o+2]=R;o+=u}else for(let e=0;e<h;++e)I(3*s[e]),d[o]=M,d[o+1]=C,d[o+2]=R,o+=u;else for(let e=0;e<h;++e){if(I(3*s[e]),E){const e=M*M+C*C+R*R;if(e<S&&e>b){const t=1/Math.sqrt(e);M*=t,C*=t,R*=t}}for(let e=0;e<n;++e)d[o]=M,d[o+1]=C,d[o+2]=R,o+=u}}function f(e,t,r,i,o=1){const{data:n,indices:a}=e,s=r.typedBuffer,c=r.typedBufferStride,l=a.length;if(i*=c,t!==n.length||4!==t)if(1!==o)if(4!==t)for(let e=0;e<l;++e){const t=3*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=c}else for(let e=0;e<l;++e){const t=4*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=c}return}for(let e=0;e<l;++e){const t=3*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=c}}else{s[i]=n[0],s[i+1]=n[1],s[i+2]=n[2],s[i+3]=n[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=c/4,a=e[i/=4];i+=t;const d=l*o;for(let r=1;r<d;++r)e[i]=a,i+=t}}function p(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function g(e,t,r,i,n,s,c){for(const l of r.fields.keys()){const r=e.get(l),d=r?.indices;if(r&&d)v(l,r,i,n,s,c);else if(l===a.r.OBJECTANDLAYERIDCOLOR&&null!=t){const r=e.get(a.r.POSITION)?.indices;if(r){const e=r.length;p(t,s.getField(l,o.XP),e,c)}}}}function v(e,t,r,s,l,u){switch(e){case a.r.POSITION:{(0,n.vA)(3===t.size);const i=l.getField(e,o.xs);(0,n.vA)(!!i,`No buffer view for ${e}`),i&&h(t,r,i,u);break}case a.r.NORMAL:{(0,n.vA)(3===t.size);const r=l.getField(e,o.xs);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&m(t,s,r,u);break}case a.r.NORMALCOMPRESSED:{(0,n.vA)(2===t.size);const r=l.getField(e,o.mJ);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&c(t,r,u);break}case a.r.UV0:{(0,n.vA)(2===t.size);const r=l.getField(e,o.gH);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&c(t,r,u);break}case a.r.COLOR:case a.r.SYMBOLCOLOR:{const r=l.getField(e,o.XP);(0,n.vA)(!!r,`No buffer view for ${e}`),(0,n.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||f(t,t.size,r,u);break}case a.r.COLORFEATUREATTRIBUTE:{const r=l.getField(e,o.Y$);(0,n.vA)(!!r,`No buffer view for ${e}`),(0,n.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length,c=i[0];r*=a;for(let e=0;e<s;++e)n[r]=c,r+=a}(t,r,u);break}case a.r.TANGENT:{(0,n.vA)(4===t.size);const a=l.getField(e,o.Eq);(0,n.vA)(!!a,`No buffer view for ${e}`),a&&function(e,t,r,o,n=1){if(!t)return void d(e,r,o,n);const{data:a,indices:s}=e,c=t,l=r.typedBuffer,u=r.typedBufferStride,h=s.length,m=c[0],f=c[1],p=c[2],g=c[4],v=c[5],_=c[6],T=c[8],x=c[9],A=c[10],E=!(0,i.ut)(c),b=1e-6,S=1-b;if(o*=u,1===n)for(let e=0;e<h;++e){const t=4*s[e],r=a[t],i=a[t+1],n=a[t+2],c=a[t+3];let d=m*r+g*i+T*n,h=f*r+v*i+x*n,M=p*r+_*i+A*n;if(E){const e=d*d+h*h+M*M;if(e<S&&e>b){const t=1/Math.sqrt(e);d*=t,h*=t,M*=t}}l[o]=d,l[o+1]=h,l[o+2]=M,l[o+3]=c,o+=u}else for(let e=0;e<h;++e){const t=4*s[e],r=a[t],i=a[t+1],c=a[t+2],d=a[t+3];let h=m*r+g*i+T*c,M=f*r+v*i+x*c,C=p*r+_*i+A*c;if(E){const e=h*h+M*M+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);h*=t,M*=t,C*=t}}for(let e=0;e<n;++e)l[o]=h,l[o+1]=M,l[o+2]=C,l[o+3]=d,o+=u}}(t,r,a,u);break}case a.r.PROFILERIGHT:case a.r.PROFILEUP:case a.r.PROFILEVERTEXANDNORMAL:case a.r.FEATUREVALUE:{(0,n.vA)(4===t.size);const r=l.getField(e,o.Eq);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&d(t,r,u)}}}},74810:(e,t,r)=>{r.d(t,{Bt:()=>s,Jr:()=>n,SY:()=>c,mb:()=>a});var i=r(38954),o=r(51850);function n({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:n,emissiveTexture:a,emissiveFactor:s,occlusionTexture:c}){return null==e&&null==t&&null==a&&(null==s||(0,i.p)(s,o.uY))&&null==c&&(null==n||1===n)&&(null==r||1===r)}const a=(0,o.CN)(1,1,.5),s=(0,o.CN)(0,.6,.2),c=(0,o.CN)(0,1,.2)},97225:(e,t,r)=>{r.d(t,{V:()=>b,uD:()=>E,R5:()=>S});var i=r(51850),o=r(91829),n=r(49255),a=r(96336),s=r(72824),c=r(35093),l=r(97220),d=r(98958),u=r(89192),h=r(11725),m=r(59643),f=r(33524),p=r(63907);p.MT.LESS,p.MT.ALWAYS;const g={mask:255},v={function:{func:p.MT.ALWAYS,ref:u.dd.OutlineVisualElementMask,mask:u.dd.OutlineVisualElementMask},operation:{fail:p.eA.KEEP,zFail:p.eA.KEEP,zPass:p.eA.ZERO}},_={function:{func:p.MT.ALWAYS,ref:u.dd.OutlineVisualElementMask,mask:u.dd.OutlineVisualElementMask},operation:{fail:p.eA.KEEP,zFail:p.eA.KEEP,zPass:p.eA.REPLACE}};p.MT.EQUAL,u.dd.OutlineVisualElementMask,u.dd.OutlineVisualElementMask,p.eA.KEEP,p.eA.KEEP,p.eA.KEEP,p.MT.NOTEQUAL,u.dd.OutlineVisualElementMask,u.dd.OutlineVisualElementMask,p.eA.KEEP,p.eA.KEEP,p.eA.KEEP;var T=r(74810),x=r(28491),A=r(90644);class E extends s.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=T.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=u.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=i.uY,this.instancedDoublePrecision=!1,this.normalType=a.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,i.CN)(.2,.2,.2),this.diffuse=(0,i.CN)(.8,.8,.8),this.externalColor=(0,o.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,i.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=u.it.Less,this.textureAlphaMode=u.sf.Blend,this.textureAlphaCutoff=c.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=h.m$.Occlude,this.isDecoration=!1}}class b extends s.gy{constructor(){super(...arguments),this.origin=(0,i.vt)(),this.slicePlaneLocalOrigin=this.origin}}class S extends d.w{constructor(e,t,i,o=new l.$(x.D,(()=>r.e(5141).then(r.bind(r,5141))))){super(e,t,o,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:i,transparent:o,cullFace:a,customDepthTest:s,hasOccludees:c,enableOffset:l}=e,d=r===m.Y.NONE,u=r===m.Y.FrontFace;return(0,A.Ey)({blending:(0,n.RN)(i)&&o?(0,f.Yf)(r):null,culling:C(e)?(0,A.Xt)(a):null,depthTest:{func:(0,f.K_)(r,M(s))},depthWrite:(0,f.z5)(e),drawBuffers:i===n.V.Depth?{buffers:[p.Hr.NONE]}:(0,f.m6)(r,i),colorWrite:A.kn,stencilWrite:c?g:null,stencilTest:c?t?_:v:null,polygonOffset:d||u?null:(0,f.aB)(l)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function M(e){return e===u.it.Lequal?p.MT.LEQUAL:p.MT.LESS}function C(e){return e.cullFace!==u.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}},60517:(e,t,r)=>{r.d(t,{z:()=>d});var i=r(49255),o=r(22911),n=r(45935),a=r(35093),s=r(63365),c=r(2597),l=r(59643);function d(e,t){e.include(n.Q,t),e.include(o.NL,t),e.fragment.include(s.a);const r=t.output===i.V.ObjectAndLayerIdColor,d=(0,i.LG)(t.output),u=(0,i.RN)(t.output)&&t.oitPass===l.Y.ColorAlpha,h=(0,i.RN)(t.output)&&t.oitPass!==l.Y.ColorAlpha,m=t.discardInvisibleFragments;let f=0;(h||d||u)&&e.outputs.add("fragColor","vec4",f++),d&&e.outputs.add("fragEmission","vec4",f++),u&&e.outputs.add("fragAlpha","float",f++),e.fragment.code.add(c.H`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,c.If)(r,c.H`finalColor.a = 1.0;`)}

      ${(0,c.If)(m,c.H`if (finalColor.a < ${c.H.float(a.Q)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,c.If)(u,c.H`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,c.If)(h,"fragColor = finalColor;")}
      ${(0,c.If)(d,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,c.If)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}},36421:(e,t,r)=>{var i;r.d(t,{p:()=>i}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(i||(i={}))},21231:(e,t,r)=>{r.d(t,{g:()=>l});var i=r(49186),o=(r(44208),r(94656)),n=r(63907),a=r(36421),s=r(67171);class c extends s.R{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case n.H0.R16F:case n.H0.R16I:case n.H0.R16UI:case n.H0.R32F:case n.H0.R32I:case n.H0.R32UI:case n.H0.R8_SNORM:case n.H0.R8:case n.H0.R8I:case n.H0.R8UI:this.pixelFormat=n.Ab.RED}}static validate(e,t){return new c(e,t)}}let l=class e{constructor(e,t=null,r=null){if(this.type=a.p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,r=t;else{const r=c.validate(e,t);if(!r)throw new i.A("Texture descriptor invalid");this._descriptor=r}this._descriptor.target===n.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(0,s.e)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(n.vt.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.A("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===n.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=n.Ap.TEXTURE_CUBE_MAP_POSITIVE_X;t<=n.Ap.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(t,r){const a=this._descriptor.context?.gl;if(!a)return;(0,o.Y2)(a),this._glName||(this._glName=a.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(n.vt.Texture,this));const s=this._descriptor,c=r??s.target,l=p(c),v=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),d(s),this._configurePixelStorage(),(0,o.Y2)(a);const _=this._deriveInternalFormat();if(f(t)){let e="width"in t?t.width:t.codedWidth,r="height"in t?t.height:t.codedHeight;const i=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,r=t.videoHeight),s.width&&s.height,l&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,_,s.hasMipmap,e,r,i),this._texImage(c,0,_,e,r,i,t),(0,o.Y2)(a),s.hasMipmap&&(this.generateMipmap(),(0,o.Y2)(a)),s.width||(s.width=e),s.height||(s.height=r),l&&!s.depth&&(s.depth=i)}else{const{width:e,height:r,depth:d}=s;if(null==e||null==r)throw new i.A("Width and height must be specified!");if(l&&null==d)throw new i.A("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,_,s.hasMipmap,e,r,d),m(t)){const o=t.levels,l=g(c,e,r,d),u=Math.min(l-1,o.length-1);a.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,u);const h=_;if(!(h in n.CQ))throw new i.A("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const n=o[Math.min(e,o.length-1)];this._compressedTexImage(c,e,h,t,r,i,n)}),u)}else this._texImage(c,0,_,e,r,d,t),(0,o.Y2)(a),s.hasMipmap&&this.generateMipmap()}u(a,this._descriptor),h(a,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),(0,o.Y2)(a),this._descriptor.context.bindTexture(v,e.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,r,o,n,a,s,c=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor,d=this._deriveInternalFormat(),{context:u,pixelFormat:h,dataType:p,target:g,isImmutable:v}=l;if(v&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");const _=u.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||o<0||r+n>l.width||o+a>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:T}=u;c&&T.pixelStorei(T.UNPACK_SKIP_ROWS,c),f(s)?T.texSubImage2D(g,t,r,o,n,a,h,p,s):m(s)?T.compressedTexSubImage2D(g,t,r,o,n,a,d,s.levels[t]):T.texSubImage2D(g,t,r,o,n,a,h,p,s),c&&T.pixelStorei(T.UNPACK_SKIP_ROWS,0),u.bindTexture(_,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,r,o,n,a,s,c,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const d=this._descriptor,u=this._deriveInternalFormat(),{context:h,pixelFormat:f,dataType:g,isImmutable:v,target:_}=d;if(v&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");p(_)||console.warn("Attempting to set 3D texture data on a non-3D texture");const T=h.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);h.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(r<0||o<0||n<0||r+a>d.width||o+s>d.height||n+c>d.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:x}=h;if(m(l))l=l.levels[t],x.compressedTexSubImage3D(_,t,r,o,n,a,s,c,u,l);else{const e=l;x.texSubImage3D(_,t,r,o,n,a,s,c,f,g,e)}h.bindTexture(T,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,d(t)}t.samplingMode===n.Cj.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=n.Cj.LINEAR_MIPMAP_NEAREST):t.samplingMode===n.Cj.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=n.Cj.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,d(e)}e.samplingMode===n.Cj.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=n.Cj.LINEAR):e.samplingMode===n.Cj.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=n.Cj.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,d(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(u(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(h(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===n.Ab.DEPTH_STENCIL&&(this._descriptor.internalFormat=n.Ab.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case n.ld.FLOAT:switch(this._descriptor.pixelFormat){case n.Ab.RGBA:return this._descriptor.internalFormat=n.H0.RGBA32F;case n.Ab.RGB:return this._descriptor.internalFormat=n.H0.RGB32F;default:throw new i.A("Unable to derive format")}case n.ld.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case n.Ab.RGBA:return this._descriptor.internalFormat=n.H0.RGBA8;case n.Ab.RGB:return this._descriptor.internalFormat=n.H0.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===n.Ab.DEPTH_STENCIL?n.Ab.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,o,a,s){const{gl:c}=this._descriptor.context;if(!(t in n.H0))throw new i.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const l=r?g(e,o,a,s):1;if(p(e)){if(null==s)throw new i.A("Missing depth dimension for 3D texture upload");c.texStorage3D(e,l,t,o,a,s)}else c.texStorage2D(e,l,t,o,a);this._wasImmutablyAllocated=!0}_texImage(e,t,r,o,n,a,s){const c=this._descriptor.context.gl,l=p(e),{isImmutable:d,pixelFormat:u,dataType:h}=this._descriptor;if(d){if(null!=s){const r=s;if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.texSubImage3D(e,t,0,0,0,o,n,a,u,h,r)}else c.texSubImage2D(e,t,0,0,o,n,u,h,r)}}else{const d=s;if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.texImage3D(e,t,r,o,n,a,0,u,h,d)}else c.texImage2D(e,t,r,o,n,0,u,h,d)}}_compressedTexImage(e,t,r,o,n,a,s){const c=this._descriptor.context.gl,l=p(e);if(this._descriptor.isImmutable){if(null!=s)if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.compressedTexSubImage3D(e,t,0,0,0,o,n,a,r,s)}else c.compressedTexSubImage2D(e,t,0,0,o,n,r,s)}else if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.compressedTexImage3D(e,t,r,o,n,a,0,s)}else c.compressedTexImage2D(e,t,r,o,n,0,s)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:o,depth:a,hasMipmap:s,target:c}=this._descriptor;const l=c===n.Ap.TEXTURE_3D;if(null==r||null==o||l&&null==a)throw new i.A("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,o,a),s&&(1!==r||1!==o||l&&1!==a)&&!(i>=t);++i)r=Math.max(1,r>>1),o=Math.max(1,o>>1),l&&(a=Math.max(1,a>>1))}};function d(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function u(e,t){let r=t.samplingMode,i=t.samplingMode;r===n.Cj.LINEAR_MIPMAP_NEAREST||r===n.Cj.LINEAR_MIPMAP_LINEAR?(r=n.Cj.LINEAR,t.hasMipmap||(i=n.Cj.LINEAR)):r!==n.Cj.NEAREST_MIPMAP_NEAREST&&r!==n.Cj.NEAREST_MIPMAP_LINEAR||(r=n.Cj.NEAREST,t.hasMipmap||(i=n.Cj.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function h(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function m(e){return null!=e&&"type"in e&&"compressed"===e.type}function f(e){return null!=e&&!m(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function p(e){return e===n.Ap.TEXTURE_3D||e===n.Ap.TEXTURE_2D_ARRAY}function g(e,t,r,i=1){let o=Math.max(t,r);return e===n.Ap.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}l.TEXTURE_UNIT_FOR_UPDATES=0},67171:(e,t,r)=>{r.d(t,{R:()=>n,e:()=>a});var i=r(63907),o=r(42293);class n{constructor(e=0,t=e){this.width=e,this.height=t,this.target=i.Ap.TEXTURE_2D,this.pixelFormat=i.Ab.RGBA,this.dataType=i.ld.UNSIGNED_BYTE,this.samplingMode=i.Cj.LINEAR,this.wrapMode=i.pF.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function a(e){return e.width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:(0,o.IB)(e.internalFormat)))}},42293:(e,t,r)=>{r.d(t,{Hi:()=>c,IB:()=>l,yu:()=>s}),r(44208);var i=r(94656),o=r(63907),n=r(62298);function a(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function s(e,t,r,o,s=0){const c=e.gl;e.bindBuffer(r);for(const r of o){const o=t.get(r.name);if(null==o){console.warn(`There is no location for vertex attribute '${r.name}' defined.`);continue}const l=s*r.stride;if(r.count<=4)c.vertexAttribPointer(o,r.count,r.type,r.normalized,r.stride,r.offset+l),c.enableVertexAttribArray(o),r.divisor>0&&e.gl.vertexAttribDivisor(o,r.divisor);else if(9===r.count)for(let t=0;t<3;t++)c.vertexAttribPointer(o+t,3,r.type,r.normalized,r.stride,r.offset+12*t+l),c.enableVertexAttribArray(o+t),r.divisor>0&&e.gl.vertexAttribDivisor(o+t,r.divisor);else if(16===r.count)for(let t=0;t<4;t++)c.vertexAttribPointer(o+t,4,r.type,r.normalized,r.stride,r.offset+16*t+l),c.enableVertexAttribArray(o+t),r.divisor>0&&e.gl?.vertexAttribDivisor(o+t,r.divisor);else console.error("Unsupported vertex attribute element count: "+r.count);if((0,i.en)()){const t=a(e),i=(0,n._)(r.type),o=r.offset,s=Math.round(i/o)!==i/o?`. Offset not a multiple of stride. DataType requires ${i} bytes, but descriptor has an offset of ${o}`:"";t&&console.error(`Unable to bind vertex attribute "${r.name}" with baseInstanceOffset ${l}${s}:`,t,r)}}}function c(e,t,r,i){const n=e.gl;e.bindBuffer(r);for(const r of i){const i=t.get(r.name);if(r.count<=4)n.disableVertexAttribArray(i),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i,0);else if(9===r.count)for(let t=0;t<3;t++)n.disableVertexAttribArray(i+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,0);else if(16===r.count)for(let t=0;t<4;t++)n.disableVertexAttribArray(i+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,0);else console.error("Unsupported vertex attribute element count: "+r.count)}e.unbindBuffer(o.NZ.ARRAY_BUFFER)}function l(e){switch(e){case o.Ab.ALPHA:case o.Ab.LUMINANCE:case o.Ab.RED:case o.Ab.RED_INTEGER:case o.H0.R8:case o.H0.R8I:case o.H0.R8UI:case o.H0.R8_SNORM:case o.yQ.STENCIL_INDEX8:return 1;case o.Ab.LUMINANCE_ALPHA:case o.Ab.RG:case o.Ab.RG_INTEGER:case o.H0.RGBA4:case o.H0.R16F:case o.H0.R16I:case o.H0.R16UI:case o.H0.RG8:case o.H0.RG8I:case o.H0.RG8UI:case o.H0.RG8_SNORM:case o.H0.RGB565:case o.H0.RGB5_A1:case o.yQ.DEPTH_COMPONENT16:return 2;case o.Ab.DEPTH_COMPONENT:case o.Ab.RGB:case o.Ab.RGB_INTEGER:case o.H0.RGB8:case o.H0.RGB8I:case o.H0.RGB8UI:case o.H0.RGB8_SNORM:case o.H0.SRGB8:case o.yQ.DEPTH_COMPONENT24:return 3;case o.Ab.DEPTH_STENCIL:case o.Ab.DEPTH24_STENCIL8:case o.Ab.RGBA:case o.Ab.RGBA_INTEGER:case o.H0.RGBA8:case o.H0.R32F:case o.H0.R11F_G11F_B10F:case o.H0.RG16F:case o.H0.R32I:case o.H0.R32UI:case o.H0.RG16I:case o.H0.RG16UI:case o.H0.RGBA8I:case o.H0.RGBA8UI:case o.H0.RGBA8_SNORM:case o.H0.SRGB8_ALPHA8:case o.H0.RGB9_E5:case o.H0.RGB10_A2UI:case o.H0.RGB10_A2:case o.yQ.DEPTH_STENCIL:case o.yQ.DEPTH_COMPONENT32F:case o.yQ.DEPTH24_STENCIL8:return 4;case o.yQ.DEPTH32F_STENCIL8:return 5;case o.H0.RGB16F:case o.H0.RGB16I:case o.H0.RGB16UI:return 6;case o.H0.RG32F:case o.H0.RG32I:case o.H0.RG32UI:case o.H0.RGBA16F:case o.H0.RGBA16I:case o.H0.RGBA16UI:return 8;case o.H0.RGB32F:case o.H0.RGB32I:case o.H0.RGB32UI:return 12;case o.H0.RGBA32F:case o.H0.RGBA32I:case o.H0.RGBA32UI:return 16;case o.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT:case o.CQ.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case o.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT:case o.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case o.CQ.COMPRESSED_R11_EAC:case o.CQ.COMPRESSED_SIGNED_R11_EAC:case o.CQ.COMPRESSED_RGB8_ETC2:case o.CQ.COMPRESSED_SRGB8_ETC2:case o.CQ.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case o.CQ.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case o.CQ.COMPRESSED_RG11_EAC:case o.CQ.COMPRESSED_SIGNED_RG11_EAC:case o.CQ.COMPRESSED_RGBA8_ETC2_EAC:case o.CQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},94656:(e,t,r)=>{r.d(t,{Xc:()=>l,Y2:()=>d,en:()=>c});var i=r(49186),o=r(44208),n=r(53966);const a=()=>n.A.getLogger("esri.views.webgl.checkWebGLError"),s=!!(0,o.A)("enable-feature:webgl-debug");function c(){return s}function l(){return s}function d(e){if(c()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;a().error(new i.A("webgl-error","WebGL error occurred",{message:r,stack:o}))}}}},28449:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{Zo:()=>o,jA:()=>n,jS:()=>i});const a=new Float32Array(2)},62298:(e,t,r)=>{r.d(t,{_:()=>o});var i=r(63907);function o(e){switch(e){case i.pe.BYTE:case i.pe.UNSIGNED_BYTE:return 1;case i.pe.SHORT:case i.pe.UNSIGNED_SHORT:case i.pe.HALF_FLOAT:return 2;case i.pe.FLOAT:case i.pe.INT:case i.pe.UNSIGNED_INT:return 4}}},90644:(e,t,r)=>{r.d(t,{Ey:()=>b,Ky:()=>c,Os:()=>s,Uy:()=>h,Xt:()=>u,kn:()=>m,p3:()=>a});var i=r(89192),o=r(63907);function n(e,t,r=o.Tb.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.Tb.ADD,a=o.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}n(o.dn.ZERO,o.dn.ONE_MINUS_SRC_ALPHA),n(o.dn.ONE,o.dn.ZERO),n(o.dn.ONE,o.dn.ONE);const s=n(o.dn.ONE,o.dn.ONE_MINUS_SRC_ALPHA),c=a(o.dn.SRC_ALPHA,o.dn.ONE,o.dn.ONE_MINUS_SRC_ALPHA,o.dn.ONE_MINUS_SRC_ALPHA),l={face:o.Y7.BACK,mode:o.Ac.CCW},d={face:o.Y7.FRONT,mode:o.Ac.CCW},u=e=>e===i.s2.Back?l:e===i.s2.Front?d:null,h={zNear:0,zFar:1},m={r:!0,g:!0,b:!0,a:!0};function f(e){return C.intern(e)}function p(e){return I.intern(e)}function g(e){return O.intern(e)}function v(e){return y.intern(e)}function _(e){return L.intern(e)}function T(e){return D.intern(e)}function x(e){return G.intern(e)}function A(e){return U.intern(e)}function E(e){return V.intern(e)}function b(e){return j.intern(e)}class S{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function M(e){return"["+e.join(",")+"]"}const C=new S(R,(e=>({__tag:"Blending",...e})));function R(e){return e?M([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const I=new S(w,(e=>({__tag:"Culling",...e})));function w(e){return e?M([e.face,e.mode]):null}const O=new S(N,(e=>({__tag:"PolygonOffset",...e})));function N(e){return e?M([e.factor,e.units]):null}const y=new S(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?M([e.func]):null}const L=new S(H,(e=>({__tag:"StencilTest",...e})));function H(e){return e?M([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const D=new S(F,(e=>({__tag:"DepthWrite",...e})));function F(e){return e?M([e.zNear,e.zFar]):null}const G=new S(B,(e=>({__tag:"ColorWrite",...e})));function B(e){return e?M([e.r,e.g,e.b,e.a]):null}const U=new S(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?M([e.mask]):null}const V=new S(W,(e=>({__tag:"DrawBuffers",...e})));function W(e){return e?M(e.buffers):null}const j=new S((function(e){return e?M([R(e.blending),w(e.culling),N(e.polygonOffset),P(e.depthTest),H(e.stencilTest),F(e.depthWrite),B(e.colorWrite),z(e.stencilWrite),W(e.drawBuffers)]):null}),(e=>({blending:f(e.blending),culling:p(e.culling),polygonOffset:g(e.polygonOffset),depthTest:v(e.depthTest),stencilTest:_(e.stencilTest),depthWrite:T(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:A(e.stencilWrite),drawBuffers:E(e.drawBuffers)})))}}]);