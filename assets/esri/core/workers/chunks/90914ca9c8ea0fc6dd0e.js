"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5268],{28491:(e,t,r)=>{r.d(t,{D:()=>G,b:()=>V});var i=r(46686),n=r(32680),o=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),f=r(92700),m=r(72824),p=r(54154),v=r(9169),g=r(77695),_=r(3452),x=r(8881),T=r(98619),b=r(51343),A=r(62602),y=r(22393),E=r(59469),S=r(25618),w=r(51406),M=r(986),C=r(35093),O=r(11955),I=r(27950),R=r(20693),N=r(33079),P=r(71988),L=r(20304),H=r(2597),D=r(85977),B=r(63761),F=r(46540),z=r(60517);function V(e){const t=new D.N5,{vertex:r,fragment:V,varyings:G}=t,{output:U,normalType:W,offsetBackfaces:j,instancedColor:q,spherical:k,receiveShadows:$,snowCover:X,pbrMode:Y}=e,{multipassEnabled:Z,textureAlphaPremultiplied:J,instancedDoublePrecision:K,hasVertexColors:Q,hasVertexTangents:ee}=e,{hasColorTexture:te,hasNormalTexture:re,hasNormalTextureTransform:ie,hasColorTextureTransform:ne}=e;if((0,R.NB)(r,e),t.include(d.I),G.add("vpos","vec3"),t.include(M.A,e),t.include(l.BK,e),t.include(p.G,e),t.include(w.q2,e),U!==o.V.Color&&U!==o.V.ColorEmission)return t.include(v.E,e),t;t.include(w.Sx,e),t.include(w.MU,e),t.include(w.O1,e),t.include(w.QM,e),(0,R.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const oe=W===c.W.Attribute||W===c.W.Compressed;return oe&&j&&t.include(n.M),t.include(g.W,e),t.include(m.Mh,e),q&&t.attributes.add(F.r.INSTANCECOLOR,"vec4"),G.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(f.c,e),r.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),G.add("vcolorExt","vec4"),Z&&G.add("depth","float"),r.main.add(H.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,H.If)(q,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${H.H.float(C.Q)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        vPositionLocal = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        ${(0,H.If)(oe,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
        vpos = addVerticalOffset(vpos, localOrigin);
        ${(0,H.If)(ee,"vTangent = dpTransformVertexTangent(tangent);")}
        gl_Position = transformPosition(proj, view, vpos);
        ${oe&&j?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
      }

      ${(0,H.If)(Z,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();
      forwardColorUV();
      forwardNormalUV();
      forwardEmissiveUV();
      forwardOcclusionUV();
      forwardMetallicRoughnessUV();`),t.include(x.kA,e),t.include(_.n,e),t.include(O.S,e),t.include(K?S.G:S.Bz,e),t.include(b.Q,e),t.include(a.HQ,e),t.include(z.z,e),(0,R.yu)(V,e),V.uniforms.add(r.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),te&&V.uniforms.add(new B.N("tex",(e=>e.texture))),t.include(E._Z,e),t.include(y.c,e),V.include(I.N),t.include(A.r,e),(0,x.a8)(V),(0,x.eU)(V),(0,T.O4)(V),V.main.add(H.H`
      discardBySlice(vpos);
      ${(0,H.If)(Z,"terrainDepthTest(depth);")}
      ${te?H.H`
              vec4 texColor = texture(tex, ${ne?"colorUV":"vuv0"});
              ${(0,H.If)(J,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${W===c.W.ScreenDerivative?H.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${$?"readShadowMap(vpos, linearDepth)":(0,H.If)(k,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,H.If)(Q,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,H.If)(Q,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${re?`mat3 tangentSpace = computeTangentSpace(${ee?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ie?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${k?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,H.If)(X,H.H`
              float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
              albedo = mix(albedo, vec3(1), snow);
              shadingNormal = mix(shadingNormal, normal, snow);
              ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${Y===E.A9.Normal||Y===E.A9.Schematic?H.H`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,H.If)(X,H.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${X?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},57323:(e,t,r)=>{r.d(t,{R:()=>B,b:()=>D});var i=r(46686),n=r(32680),o=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),f=r(92700),m=r(54154),p=r(9169),v=r(3452),g=r(8881),_=r(98619),x=r(51343),T=r(22393),b=r(59469),A=r(25618),y=r(986),E=r(35093),S=r(11955),w=r(27950),M=r(20693),C=r(33079),O=r(71988),I=r(20304),R=r(2597),N=r(85977),P=r(63761),L=r(46540),H=r(60517);function D(e){const t=new N.N5,{vertex:r,fragment:D,varyings:B}=t,{output:F,offsetBackfaces:z,instancedColor:V,multipassEnabled:G,pbrMode:U,snowCover:W,spherical:j}=e,q=U===b.A9.Normal||U===b.A9.Schematic;if((0,M.NB)(r,e),t.include(d.I),B.add("vpos","vec3"),t.include(y.A,e),t.include(l.BK,e),t.include(m.G,e),F===o.V.Color&&((0,M.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),z&&t.include(n.M),V&&t.attributes.add(L.r.INSTANCECOLOR,"vec4"),B.add("vNormalWorld","vec3"),B.add("localvpos","vec3"),G&&B.add("depth","float"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(f.c,e),r.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),B.add("vcolorExt","vec4"),r.main.add(R.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,R.If)(V,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${R.H.float(E.Q)}) {
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
      ${(0,R.If)(G,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),F===o.V.Color){const{hasColorTexture:i,hasColorTextureTransform:n,receiveShadows:o}=e;t.include(g.kA,e),t.include(v.n,e),t.include(S.S,e),t.include(e.instancedDoublePrecision?A.G:A.Bz,e),t.include(x.Q,e),t.include(a.HQ,e),t.include(H.z,e),(0,M.yu)(t.fragment,e),(0,_.Gc)(D),(0,g.a8)(D),(0,g.eU)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new C.t("ambient",(e=>e.ambient)),new C.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),i&&D.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(T.c,e),D.include(w.N),(0,_.O4)(D),D.main.add(R.H`
      discardBySlice(vpos);
      ${(0,R.If)(G,"terrainDepthTest(depth);")}
      vec4 texColor = ${i?`texture(tex, ${n?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,R.If)(i,`${(0,R.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${o?"readShadowMap(vpos, linearDepth)":j?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?R.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,R.If)(W,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${R.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,R.If)(q,`vec3 normalGround = ${j?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${q?R.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,R.If)(W,R.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${W?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.E,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},15581:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m,g:()=>p});var i=r(37585),n=r(48163),o=r(82048),a=r(52540),s=r(34845),l=r(47286),c=r(20304),d=r(2597),u=r(85977),h=r(63761);const f=16;function m(){const e=new u.N5,t=e.fragment;return e.include(o.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
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
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(d.H`
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

      for(int i = 0; i < ${d.H.int(f)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${d.H.int(f)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},95774:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>f});var i=r(38954),n=r(82048),o=r(52540),a=r(68259),s=r(20304),l=r(2597),c=r(85977),d=r(15976),u=r(63761);const h=4;function f(){const e=new c.N5,t=e.fragment;e.include(n.c);const r=(h+1)/2,f=1/(2*r*r);return t.include(o.E),t.uniforms.add(new u.N("depthMap",(e=>e.depthTexture)),new d.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new s.m("projScale",((e,t)=>{const r=(0,i.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(l.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${l.H.int(h)}; r <= ${l.H.int(h)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},76412:(e,t,r)=>{r.d(t,{c:()=>p,d:()=>_,f:()=>b,g:()=>T,h:()=>x,k:()=>w,o:()=>P}),r(44208),r(53966);var i=r(34727),n=r(58083),o=r(38954),a=r(51850),s=r(87317),l=r(91829),c=r(34304),d=r(88582),u=r(71351),h=r(44280),f=r(32114);const m=p();function p(){return(0,l.vt)()}const v=s.e,g=s.e;function _(e,t){return(0,s.c)(t,e)}function x(e){return e[3]}function T(e){return e}function b(e,t,r,i){return(0,l.fA)(e,t,r,i)}function A(e,t,r){if(null==t)return!1;if(!E(e,t,y))return!1;let{t0:i,t1:n}=y;if((i<0||n<i&&n>0)&&(i=n),i<0)return!1;if(r){const{origin:e,direction:n}=t;r[0]=e[0]+n[0]*i,r[1]=e[1]+n[1]*i,r[2]=e[2]+n[2]*i}return!0}const y={t0:0,t1:0};function E(e,t,r){const{origin:i,direction:n}=t,o=S;o[0]=i[0]-e[0],o[1]=i[1]-e[1],o[2]=i[2]-e[2];const a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===a)return!1;const s=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),l=s*s-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);return r.t0=(-s-c)/(2*a),r.t1=(-s+c)/(2*a),!0}const S=(0,a.vt)();function w(e,t){return A(e,t,null)}function M(e,t,r){const i=f.rq.get(),a=f.Rc.get();(0,o.b)(i,t.origin,t.direction);const s=x(e);(0,o.b)(r,i,t.origin),(0,o.j)(r,r,1/(0,o.l)(r)*s);const l=O(e,t.origin),c=(0,h.g7)(t.origin,r);return(0,n.$0)(a,c+l,i),(0,o.h)(r,r,a),r}function C(e,t,r){const i=(0,o.f)(f.rq.get(),t,e),n=(0,o.j)(f.rq.get(),i,e[3]/(0,o.l)(i));return(0,o.g)(r,n,e)}function O(e,t){const r=(0,o.f)(f.rq.get(),t,e),n=(0,o.l)(r),a=x(e),s=a+Math.abs(a-n);return(0,i.XM)(a/s)}const I=(0,a.vt)();function R(e,t,r,n){const a=(0,o.f)(I,t,e);switch(r){case d._.X:{const e=(0,i.jU)(a,I)[2];return(0,o.s)(n,-Math.sin(e),Math.cos(e),0)}case d._.Y:{const e=(0,i.jU)(a,I),t=e[1],r=e[2],s=Math.sin(t);return(0,o.s)(n,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case d._.Z:return(0,o.n)(n,a);default:return}}function N(e,t){const r=(0,o.f)(L,t,e);return(0,o.l)(r)-e[3]}function P(e,t){const r=(0,o.a)(e,t),i=x(e);return r<=i*i}const L=(0,a.vt)(),H=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:N,angleToSilhouette:O,axisAt:R,cameraFrustumCoverage:function(e,t,r,i){const n=x(e),o=n*n,a=t+.5*Math.PI,s=r*r+o-2*Math.cos(a)*r*n,l=Math.sqrt(s),c=s-o;if(c<=0)return.5;const d=Math.sqrt(c),u=Math.acos(d/l)-Math.asin(n/(l/Math.sin(a)));return Math.min(1,(u+.5*i)/i)},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return A(e,t,r)?r:((0,u.oC)(t,e,r),C(e,r,r))},closestPointOnSilhouette:M,containsPoint:P,copy:_,create:p,distanceToSilhouette:function(e,t){const r=(0,o.f)(f.rq.get(),t,e),i=(0,o.q)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:g,exactEquals:v,fromCenterAndRadius:function(e,t){return(0,l.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:b,getCenter:T,getExtent:function(e,t){return t},getRadius:x,intersectLine:function(e,t,r){const i=(0,u.Cr)(t,r);if(!E(e,i,y))return[];const{origin:n,direction:s}=i,{t0:l,t1:d}=y,h=t=>{const r=(0,a.vt)();return(0,o.r)(r,n,s,t),C(e,r,r)};return Math.abs(l-d)<(0,c.FD)()?[h(l)]:[h(l),h(d)]},intersectRay:A,intersectRayClosestSilhouette:function(e,t,r){if(A(e,t,r))return r;const i=M(e,t,f.rq.get());return(0,o.g)(r,t.origin,(0,o.j)(f.rq.get(),t.direction,(0,o.p)(t.origin,i)/(0,o.l)(t.direction))),r},intersectsRay:w,projectPoint:C,setAltitudeAt:function(e,t,r,i){const n=N(e,t),a=R(e,t,d._.Z,L),s=(0,o.j)(L,a,r-n);return(0,o.g)(i,t,s)},setExtent:function(e,t,r){return e!==r&&_(e,r),r},tmpSphere:H,union:function(e,t,r=(0,l.vt)()){const i=(0,o.p)(e,t),n=e[3],a=t[3];return i+a<n?((0,s.c)(r,e),r):i+n<a?((0,s.c)(r,t),r):((0,o.o)(r,e,t,(i+a-n)/(2*i)),r[3]=(i+n+a)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},43609:(e,t,r)=>{r.d(t,{a:()=>o,f:()=>a,n:()=>n});var i=r(34275);function n(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r=2,n=r){const o=t.length/2;let a=0,s=0;if((0,i.cy)(t)||(0,i.dk)(t)){for(let i=0;i<o;++i)e[a]=t[s],e[a+1]=t[s+1],a+=r,s+=n;return}const l=(0,i.a3)(t);if((0,i.JI)(t))for(let i=0;i<o;++i)e[a]=Math.max(t[s]/l,-1),e[a+1]=Math.max(t[s+1]/l,-1),a+=r,s+=n;else for(let i=0;i<o;++i)e[a]=t[s]/l,e[a+1]=t[s+1]/l,a+=r,s+=n}function a(e,t,r,i){const n=e.typedBuffer,o=e.typedBufferStride,a=i?.count??e.count;let s=(i?.dstIndex??0)*o;for(let e=0;e<a;++e)n[s]=t,n[s+1]=r,s+=o}Object.freeze(Object.defineProperty({__proto__:null,fill:a,normalizeIntegerBuffer:o,normalizeIntegerBufferView:n},Symbol.toStringTag,{value:"Module"}))},73354:(e,t,r)=>{function i(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return e;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[4],d=r[5],u=r[6],h=r[8],f=r[9],m=r[10],p=r[12],v=r[13],g=r[14];let _=0,x=0;for(let r=0;r<o;r++){const r=t[_],o=t[_+1],T=t[_+2];e[x]=a*r+c*o+h*T+p,e[x+1]=s*r+d*o+f*T+v,e[x+2]=l*r+u*o+m*T+g,_+=n,x+=i}return e}function o(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8];let p=0,v=0;for(let r=0;r<o;r++){const r=t[p],o=t[p+1],g=t[p+2];e[v]=a*r+c*o+h*g,e[v+1]=s*r+d*o+f*g,e[v+2]=l*r+u*o+m*g,p+=n,v+=i}}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,i=3,n=i){const o=Math.min(e.length/i,t.length/n);let a=0,s=0;for(let l=0;l<o;l++)e[s]=r*t[a],e[s+1]=r*t[a+1],e[s+2]=r*t[a+2],a+=n,s+=i;return e}function c(e,t,r,i=3,n=i){const o=e.length/i;if(o!==Math.ceil(t.length/n))return e;let a=0,s=0;for(let l=0;l<o;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=n,s+=i;return e}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r=3,i=r){const n=Math.min(e.length/r,t.length/i);let o=0,a=0;for(let s=0;s<n;s++){const n=t[o],s=t[o+1],l=t[o+2],c=n*n+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*n,e[a+1]=t*s,e[a+2]=t*l}o+=i,a+=r}}r.d(t,{a:()=>n,b:()=>c,c:()=>o,d:()=>i,e:()=>d,f:()=>l,n:()=>u,s:()=>s,t:()=>a}),r(44208),r(53966),Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:l,scaleView:s,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<i;e++)n[c]=a[l]>>r,n[c+1]=a[l+1]>>r,n[c+2]=a[l+2]>>r,l+=s,c+=o},transformMat3:a,transformMat3View:o,transformMat4:n,transformMat4View:i,translate:c},Symbol.toStringTag,{value:"Module"}))},51737:(e,t,r)=>{function i(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r=3,i=r){const n=t.length/i;let o=0,a=0;for(let s=0;s<n;++s)e[o]=t[a],e[o+1]=t[a+1],e[o+2]=t[a+2],o+=r,a+=i}function o(e,t,r,i,n){const o=e.typedBuffer,a=e.typedBufferStride,s=n?.count??e.count;let l=(n?.dstIndex??0)*a;for(let e=0;e<s;++e)o[l]=t,o[l+1]=r,o[l+2]=i,l+=a}r.d(t,{a:()=>i,c:()=>n,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,copy:n,copyView:i,fill:o},Symbol.toStringTag,{value:"Module"}))},65686:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>l,n:()=>a,s:()=>s,t:()=>o}),r(44208);var i=r(53966);function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,i=4,n=i){if(e.length/i!=t.length/n)return;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8];let p=0,v=0;for(let r=0;r<o;r++){const r=t[p],o=t[p+1],g=t[p+2],_=t[p+3];e[v]=a*r+c*o+h*g,e[v+1]=s*r+d*o+f*g,e[v+2]=l*r+u*o+m*g,e[v+3]=_,p+=n,v+=i}}function a(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*n,r=e*a,s=o[r],l=o[r+1],c=o[r+2],d=s*s+l*l+c*c;if(d>0){const e=1/Math.sqrt(d);i[t]=e*s,i[t+1]=e*l,i[t+2]=e*c}}}function s(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r,i=4){const n=Math.min(e.length/i,t.count),o=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<n;t++)e[l]=r*o[s],e[l+1]=r*o[s+1],e[l+2]=r*o[s+2],e[l+3]=r*o[s+3],s+=a,l+=i}Object.freeze(Object.defineProperty({__proto__:null,normalize:a,scale:l,scaleView:s,transformMat3:o,transformMat3View:n,transformMat4:function(e,t,r,n=4,o=n){if(e.length/n!=t.length/o)return void i.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const a=e.length/n,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],f=r[6],m=r[7],p=r[8],v=r[9],g=r[10],_=r[11],x=r[12],T=r[13],b=r[14],A=r[15];let y=0,E=0;for(let r=0;r<a;r++){const r=t[y],i=t[y+1],a=t[y+2],S=t[y+3];e[E]=s*r+u*i+p*a+x*S,e[E+1]=l*r+h*i+v*a+T*S,e[E+2]=c*r+f*i+g*a+b*S,e[E+3]=d*r+m*i+_*a+A*S,y+=o,E+=n}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],h=r[8],f=r[9],m=r[10],p=r[11],v=r[12],g=r[13],_=r[14],x=r[15],T=e.typedBuffer,b=e.typedBufferStride,A=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*b,r=e*y,i=A[r],E=A[r+1],S=A[r+2],w=A[r+3];T[t]=n*i+l*E+h*S+v*w,T[t+1]=o*i+c*E+f*S+g*w,T[t+2]=a*i+d*E+m*S+_*w,T[t+3]=s*i+u*E+p*S+x*w}}},Symbol.toStringTag,{value:"Module"}))},78358:(e,t,r)=>{function i(e,t){n(e.typedBuffer,t,e.typedBufferStride)}function n(e,t,r=4){const i=t.typedBuffer,n=t.typedBufferStride,o=t.count;let a=0,s=0;for(let t=0;t<o;++t)e[a]=i[s],e[a+1]=i[s+1],e[a+2]=i[s+2],e[a+3]=i[s+3],a+=r,s+=n}function o(e,t,r,i,n,o){const a=e.typedBuffer,s=e.typedBufferStride,l=o?.count??e.count;let c=(o?.dstIndex??0)*s;for(let e=0;e<l;++e)a[c]=t,a[c+1]=r,a[c+2]=i,a[c+3]=n,c+=s}r.d(t,{a:()=>n,c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,copy:n,copyView:i,fill:o},Symbol.toStringTag,{value:"Module"}))},4341:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(26390);class n{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},46140:(e,t,r)=>{r.d(t,{R:()=>n});var i=r(49186);let n=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[n,o]=t.split("."),a=/^\s*\d+\s*$/;if(!n?.match||!a.test(n))throw new i.A((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!o?.match||!a.test(o))throw new i.A((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const s=parseInt(n,10),l=parseInt(o,10);return new e(s,l,r)}}},61473:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{EM:()=>n,b5:()=>i});const o=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,o,a,/^jsapps\.esri\.com$/,s,l]},11964:(e,t,r)=>{r.d(t,{Cr:()=>c,H6:()=>h,_I:()=>u,kb:()=>d,vt:()=>l});var i=r(34727),n=r(4341),o=r(38954),a=r(51850),s=r(32114);function l(e){return e?{origin:(0,a.o8)(e.origin),vector:(0,a.o8)(e.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function c(e,t,r=l()){return(0,o.c)(r.origin,e),(0,o.f)(r.vector,t,e),r}function d(e,t){const r=(0,o.f)(s.rq.get(),t,e.origin),n=(0,o.m)(e.vector,r),a=(0,o.m)(e.vector,e.vector),l=(0,i.qE)(n/a,0,1),c=(0,o.f)(s.rq.get(),(0,o.j)(s.rq.get(),e.vector,l),r);return(0,o.m)(c,c)}function u(e,t,r){return h(e,t,0,1,r)}function h(e,t,r,n,a){const{vector:l,origin:c}=e,d=(0,o.f)(s.rq.get(),t,c),u=(0,o.m)(l,d)/(0,o.q)(l);return(0,o.j)(a,l,(0,i.qE)(u,r,n)),(0,o.g)(a,a,e.origin)}(0,a.vt)(),(0,a.vt)(),new n.I((()=>l()))},71351:(e,t,r)=>{r.d(t,{Cr:()=>d,LV:()=>c,kb:()=>u,oC:()=>h,vt:()=>s}),r(4576);var i=r(4341),n=r(38954),o=r(51850),a=r(32114);function s(e){return e?l((0,o.o8)(e.origin),(0,o.o8)(e.direction)):l((0,o.vt)(),(0,o.vt)())}function l(e,t){return{origin:e,direction:t}}function c(e,t){const r=f.get();return r.origin=e,r.direction=t,r}function d(e,t,r=s()){return(0,n.c)(r.origin,e),(0,n.f)(r.direction,t,e),r}function u(e,t){const r=(0,n.b)(a.rq.get(),(0,n.n)(a.rq.get(),e.direction),(0,n.f)(a.rq.get(),t,e.origin));return(0,n.m)(r,r)}function h(e,t,r){const i=(0,n.m)(e.direction,(0,n.f)(r,t,e.origin));return(0,n.g)(r,e.origin,(0,n.j)(r,e.direction,i)),r}const f=new i.I((()=>s()));(0,o.vt)()},21015:(e,t,r)=>{r.d(t,{R:()=>l});var i=r(78888),n=r(60999),o=r(49186),a=r(74887),s=r(84952);class l{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,s.DB)(e)?((0,a.Te)(t),(0,s.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,i.A)(t,{responseType:c[e]})).data;const s=await(0,n.Ke)(this._streamDataRequester.request(t,e,r));if(!0===s.ok)return s.value;throw(0,a.QP)(s.error),new o.A("",`Request for resource failed: ${s.error}`)}}const c={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},84498:(e,t,r)=>{r.d(t,{x:()=>a});var i=r(34275),n=r(97146),o=r(63907);function a(e,t){switch(t){case o.WR.TRIANGLES:return"number"==typeof(r=e)?(0,n.tM)(r):(0,i.mg)(r)?new Uint16Array(r):r;case o.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,i=(0,n.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(i[e++]=t,i[e++]=t+1,i[e++]=t+2):(i[e++]=t+1,i[e++]=t,i[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)n%2==0?(i[t++]=e[n],i[t++]=e[n+1],i[t++]=e[n+2]):(i[t++]=e[n+1],i[t++]=e[n],i[t++]=e[n+2])}return i}(e);case o.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,i=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)i[e++]=0,i[e++]=t+1,i[e++]=t+2;return i}const n=e[0];let o=e[1],a=0;for(let t=0;t<r;++t){const r=e[t+2];i[a++]=n,i[a++]=o,i[a++]=r,o=r}return i}(e)}var r}},51530:(e,t,r)=>{r.d(t,{KB:()=>s,Xi:()=>o,pn:()=>l,x3:()=>a});var i=r(44208),n=r(89192);class o{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=n.JS.KTX2_ENCODING}}function a(e){return"encoded-mesh-texture"===e?.type}async function s(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function l(e,t){if(t===n.JS.KTX2_ENCODING)return new o(e);const r=new Blob([e],{type:t}),a=URL.createObjectURL(r),s=new Image;if((0,i.A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{n(),e(s)},i=e=>{n(),t(e)},n=()=>{URL.revokeObjectURL(a),s.removeEventListener("load",r),s.removeEventListener("error",i)};s.addEventListener("load",r),s.addEventListener("error",i),s.src=a}));try{s.src=a,await s.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),s}},55268:(e,t,r)=>{r.d(t,{fetch:()=>Mr});var i=r(61473),n=r(34727),o=r(77690),a=r(29242),s=r(58083),l=r(9093),c=r(48163),d=r(38954),u=r(51850),h=r(70328),f=r(11868),m=r(13030),p=r(73354),v=r(65686),g=r(43609),_=r(51737),x=r(78358),T=r(21015),b=r(84498),A=r(51530),y=r(88340);function E(e){if(null==e)return null;const t=null!=e.offset?e.offset:y.uY,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:y.Un,n=(0,a.fA)(1,0,0,0,1,0,t[0],t[1],1),s=(0,a.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,a.fA)(i[0],0,0,0,i[1],0,0,0,1),c=(0,a.vt)();return(0,o.lw)(c,s,l),(0,o.lw)(c,n,c),c}class S{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class w{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new S,this.numberOfVertices=0}}var M=r(78888),C=r(60999),O=r(86805),I=r(49186),R=r(53966);class N{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}var P=r(74887),L=r(46140),H=r(97146);async function D(e,t){const{data:r}=await(0,M.A)(e,{responseType:"image",...t});return r}var B=r(46610),F=r(89192),z=r(34275);function V(e){if(e.length<z.y9)return Array.from(e);if((0,z.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,z.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var G=r(3694),U=r(620);class W{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,U.vA)(e.length>=1),(0,U.vA)(3===r.size||4===r.size);const{data:i,size:n,indices:o}=r;(0,U.vA)(o.length%this._numIndexPerPrimitive==0),(0,U.vA)(o.length>=e.length*this._numIndexPerPrimitive);const a=e.length;let s=n*o[this._numIndexPerPrimitive*e[0]];j.clear(),j.push(s);const l=(0,u.fA)(i[s],i[s+1],i[s+2]),c=(0,u.o8)(l);for(let t=0;t<a;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*o[r+e],j.push(s);let t=i[s];l[0]=Math.min(t,l[0]),c[0]=Math.max(t,c[0]),t=i[s+1],l[1]=Math.min(t,l[1]),c[1]=Math.max(t,c[1]),t=i[s+2],l[2]=Math.min(t,l[2]),c[2]=Math.max(t,c[2])}}this.bbMin=l,this.bbMax=c;const h=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-l[0],c[1]-l[1]),c[2]-l[2]);let f=this.radius*this.radius;for(let e=0;e<j.length;++e){s=j.at(e);const t=i[s]-h[0],r=i[s+1]-h[1],n=i[s+2]-h[2],o=t*t+r*r+n*n;if(o<=f)continue;const a=Math.sqrt(o),l=.5*(a-this.radius);this.radius=this.radius+l,f=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=n*c}this.center=h,j.clear()}getChildren(){if(this._children||(0,d.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:n,size:o,indices:a}=this.position;for(let s=0;s<t;++s){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[s];let c=o*a[l],d=n[c],u=n[c+1],h=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=o*a[l+e];const t=n[c],r=n[c+1],i=n[c+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[s]=t,++i[t]}let s=0;for(let e=0;e<8;++e)i[e]>0&&++s;if(s<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new W(l[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){j.prune()}}const j=new G.A({deallocator:null});var q=r(69720),k=r(96672),$=r(4341),X=r(11964);function Y(e,t,r){return(0,d.f)(Z,t,e),(0,d.f)(J,r,e),.5*(0,d.l)((0,d.b)(Z,Z,J))}r(32114),new $.I(X.vt),new $.I((()=>{return e?{p0:(0,u.o8)(e.p0),p1:(0,u.o8)(e.p1),p2:(0,u.o8)(e.p2)}:{p0:(0,u.vt)(),p1:(0,u.vt)(),p2:(0,u.vt)()};var e}));const Z=(0,u.vt)(),J=(0,u.vt)(),K=(0,u.vt)(),Q=(0,u.vt)(),ee=(0,u.vt)(),te=(0,u.vt)();var re=r(24326);class ie{constructor(e){this.channel=e,this.id=(0,re.c)()}}var ne=r(46540);r(28449),(0,u.vt)(),new Float32Array(6);class oe extends q.J{constructor(e,t,r=null,i=k.X.Mesh,n=null,o=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,H.Dg)(r.indices)}),e===ne.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new oe(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:V(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===k.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===k.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,d.h)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,d.s)(t,0,0,0),(0,d.s)(te,0,0,0);let o=0,a=0;for(let e=0;e<n.length-2;e+=3){const s=n[e]*r,l=n[e+1]*r,c=n[e+2]*r;(0,d.s)(K,i[s],i[s+1],i[s+2]),(0,d.s)(Q,i[l],i[l+1],i[l+2]),(0,d.s)(ee,i[c],i[c+1],i[c+2]);const u=Y(K,Q,ee);u?((0,d.g)(K,K,Q),(0,d.g)(K,K,ee),(0,d.j)(K,K,1/3*u),(0,d.g)(t,t,K),o+=u):((0,d.g)(te,te,K),(0,d.g)(te,te,Q),(0,d.g)(te,te,ee),a+=3)}return!(0===a&&0===o||(0!==o?((0,d.j)(t,t,1/o),0):0===a||((0,d.j)(t,te,1/a),0)))}(this.attributes.get(ne.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(ne.r.POSITION);return function(e,t,r){if(!e)return!1;(0,d.s)(r,0,0,0),(0,d.s)(te,0,0,0);let i=0,n=0;const{size:o,data:a,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let e=0;e<c;e+=2){const t=e<l?e+1:0,c=s[e<l?e:l]*o,u=s[t]*o;K[0]=a[c],K[1]=a[c+1],K[2]=a[c+2],Q[0]=a[u],Q[1]=a[u+1],Q[2]=a[u+2],(0,d.j)(K,(0,d.g)(K,K,Q),.5);const h=(0,d.F)(K,Q);h>0?((0,d.g)(r,r,(0,d.j)(K,K,h)),i+=h):0===i&&((0,d.g)(te,te,K),n++)}return 0!==i?((0,d.j)(r,r,1/i),!0):0!==n&&((0,d.j)(r,te,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,d.s)(t,0,0,0);let o=-1,a=0;for(let e=0;e<n.length;e++){const s=n[e]*r;o!==s&&(t[0]+=i[s],t[1]+=i[s+1],t[2]+=i[s+2],a++),o=s}return a>1&&(0,d.j)(t,t,1/a),a>0}(this.attributes.get(ne.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(ne.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===k.X.Mesh?3:1;(0,U.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,H.tM)(e.indices.length/t);return new W(r,t,e)}get transformation(){return this._transformation??l.zK}set transformation(e){this._transformation=e&&e!==l.zK?(0,l.o8)(e):null}addHighlight(){const e=new ie(F.Mg.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var ae=r(44208),se=r(65529),le=r(97768),ce=r(84952),de=r(56058),ue=r(2741);let he;var fe,me;(me=fe||(fe={}))[me.ETC1_RGB=0]="ETC1_RGB",me[me.ETC2_RGBA=1]="ETC2_RGBA",me[me.BC1_RGB=2]="BC1_RGB",me[me.BC3_RGBA=3]="BC3_RGBA",me[me.BC4_R=4]="BC4_R",me[me.BC5_RG=5]="BC5_RG",me[me.BC7_M6_RGB=6]="BC7_M6_RGB",me[me.BC7_M5_RGBA=7]="BC7_M5_RGBA",me[me.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",me[me.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",me[me.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",me[me.ATC_RGB=11]="ATC_RGB",me[me.ATC_RGBA=12]="ATC_RGBA",me[me.FXT1_RGB=17]="FXT1_RGB",me[me.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",me[me.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",me[me.ETC2_EAC_R11=20]="ETC2_EAC_R11",me[me.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",me[me.RGBA32=13]="RGBA32",me[me.RGB565=14]="RGB565",me[me.BGR565=15]="BGR565",me[me.RGBA4444=16]="RGBA4444";var pe=r(63907),ve=r(21231),ge=r(42293);let _e=null,xe=null;async function Te(){return null==xe&&(he??=(async()=>{const e=await r.e(9321).then(r.bind(r,49321)),t=await e.default({locateFile:e=>(0,ue.s)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),xe=he,_e=await xe),xe}function be(e,t,r,i,n){const o=(0,ge.IB)(t?pe.CQ.COMPRESSED_RGBA8_ETC2_EAC:pe.CQ.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function Ae(e){return e.getNumImages()>=1&&!e.isUASTC()}function ye(e){return e.getFaces()>=1&&e.isETC1S()}function Ee(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[fe.ETC2_RGBA,pe.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[fe.ETC1_RGB,pe.CQ.COMPRESSED_RGB8_ETC2]:c?i?[fe.BC3_RGBA,pe.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[fe.BC1_RGB,pe.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[fe.RGBA32,pe.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let e=0;e<h;e++)f.push(new Uint8Array(a(e,d))),s(e,d,f[e]);return t.internalFormat=u,t.hasMipmap=f.length>1,t.samplingMode=t.hasMipmap?pe.Cj.LINEAR_MIPMAP_LINEAR:pe.Cj.LINEAR,t.width=n,t.height=o,new ve.g(e,t,{type:"compressed",levels:f})}const Se=()=>R.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function we(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Me=we("DXT1"),Ce=we("DXT3"),Oe=we("DXT5");function Ie(e,t,r){if(e instanceof ImageData)return Ie(Re(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function Re(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new I.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var Ne,Pe,Le=r(67171);class He extends q.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=k.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new se.A,this._parameters={...Be,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ce.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ce.DB)(e.src)||(0,ce.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Le.R;return t.wrapMode=this._parameters.wrap??pe.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?pe.Cj.LINEAR_MIPMAP_LINEAR:pe.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,z.mw)(e)||(0,z.mg)(e))return t.encoding===F.JS.KTX2_ENCODING?function(e,t){if(null==_e)return e.byteLength;const r=new _e.KTX2File(new Uint8Array(e)),i=ye(r)?be(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===F.JS.BASIS_ENCODING?function(e,t){if(null==_e)return e.byteLength;const r=new _e.BasisFile(new Uint8Array(e)),i=Ae(r)?be(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?De(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ve.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,z.mw)(t)||(0,z.mg)(t))&&this._parameters.encoding===F.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,z.mw)(t)||(0,z.mg)(t))&&this._parameters.encoding===F.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,z.mw)(t)||(0,z.mg)(t))&&this._parameters.encoding===F.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,z.mg)(t)?this._loadFromPixelData(e,t):(0,z.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Ne.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Se().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Se().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,o;switch(i){case Me:n=8,o=pe.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ce:n=16,o=pe.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Oe:n=16,o=pe.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Se().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];(3&s||3&l)&&(Se().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let f=r[1]+4;const m=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*n,u=new Uint8Array(e,f,h),m.push(u),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:c,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?pe.Cj.LINEAR_MIPMAP_LINEAR:pe.Cj.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new ve.g(e,t,n)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==_e&&(_e=await Te());const i=new _e.KTX2File(new Uint8Array(r));if(!ye(i))return null;i.startTranscoding();const n=Ee(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==_e&&(_e=await Te());const i=new _e.BasisFile(new Uint8Array(r));if(!Ae(i))return null;i.startTranscoding();const n=Ee(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,U.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?pe.Ab.LUMINANCE:3===this._parameters.components?pe.Ab.RGB:pe.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new ve.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await D(t,{signal:r});return(0,P.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,de.Sx)(t,t.src,!1,r);return(0,P.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Ne.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,n)=>{const o=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,le.xt)(l)},a=()=>{t.readyState>=Ne.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(e,t)))},s=e=>{o(),n(e||new I.A("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,P.u7)(r,(()=>s((0,P.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Re(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return Ie(e,i,n)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return Ie(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=De(r);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?pe.Ab.RGB:pe.Ab.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new ve.g(e,n,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,le.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function De(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(Pe=Ne||(Ne={}))[Pe.HAVE_NOTHING=0]="HAVE_NOTHING",Pe[Pe.HAVE_METADATA=1]="HAVE_METADATA",Pe[Pe.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",Pe[Pe.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",Pe[Pe.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const Be={wrap:{s:pe.pF.REPEAT,t:pe.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var Fe=r(24151),ze=r(1843),Ve=r(49255),Ge=r(96336),Ue=r(22911),We=r(62602),je=r(59469),qe=r(35093),ke=r(25634),$e=r(14903),Xe=r(14327),Ye=r(90644);const Ze=(0,Ye.p3)(pe.dn.SRC_ALPHA,pe.dn.ONE,pe.dn.ONE_MINUS_SRC_ALPHA,pe.dn.ONE_MINUS_SRC_ALPHA),Je=(0,Ye.p3)(pe.dn.ONE,pe.dn.ZERO,pe.dn.ONE,pe.dn.ONE_MINUS_SRC_ALPHA);function Ke(e){switch(e){case Xe.y.NONE:return Ze;case Xe.y.ColorAlpha:return Je;case Xe.y.FrontFace:case Xe.y.COUNT:return null}}const Qe={factor:-1,units:-2};function et(e){return e?Qe:null}function tt(e,t=pe.MT.LESS){return e===Xe.y.NONE||e===Xe.y.FrontFace?t:pe.MT.LEQUAL}function rt(e,t){const r=t===Ve.V.ColorEmission;return e===Xe.y.ColorAlpha?r?{buffers:[pe.Nm.COLOR_ATTACHMENT0,pe.Nm.COLOR_ATTACHMENT1,pe.Nm.COLOR_ATTACHMENT2]}:{buffers:[pe.Nm.COLOR_ATTACHMENT0,pe.Nm.COLOR_ATTACHMENT1]}:r?{buffers:[pe.Nm.COLOR_ATTACHMENT0,pe.Nm.COLOR_ATTACHMENT1]}:null}class it{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const nt=(0,h.vt)();function ot(e,t,r,i,n,o){if(!e.visible)return;const a=(0,d.z)(_t,i,r),s=(e,t,r)=>{o(e,r,t,!1)},l=new it(!1,t.options.normalRequired);if(e.boundingInfo){(0,U.vA)(e.type===k.X.Mesh);const i=t.tolerance;st(e.boundingInfo,r,a,i,n,l,s)}else{const t=e.attributes.get(ne.r.POSITION),i=t.indices;!function(e,t,r,i,n,o,a,s,l,c){const u=t,h=xt,f=Math.abs(u[0]),m=Math.abs(u[1]),p=Math.abs(u[2]),v=f>=m?f>=p?0:2:m>=p?1:2,g=v,_=u[g]<0?2:1,x=(v+_)%3,T=(v+(3-_))%3,b=u[x]/u[g],A=u[T]/u[g],y=1/u[g],E=ct,S=dt,w=ut,{normalRequired:M}=l;for(let t=r;t<i;++t){const r=3*t,i=a*n[r];(0,d.s)(h[0],o[i+0],o[i+1],o[i+2]);const l=a*n[r+1];(0,d.s)(h[1],o[l+0],o[l+1],o[l+2]);const u=a*n[r+2];(0,d.s)(h[2],o[u+0],o[u+1],o[u+2]),s&&((0,d.c)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,d.c)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,d.c)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,d.z)(E,h[0],e),(0,d.z)(S,h[1],e),(0,d.z)(w,h[2],e);const f=E[x]-b*E[g],m=E[T]-A*E[g],p=S[x]-b*S[g],v=S[T]-A*S[g],_=w[x]-b*w[g],C=w[T]-A*w[g],O=_*v-C*p,I=f*C-m*_,R=p*m-v*f;if((O<0||I<0||R<0)&&(O>0||I>0||R>0))continue;const N=O+I+R;if(0===N)continue;const P=O*(y*E[g])+I*(y*S[g])+R*(y*w[g]);if(P*Math.sign(N)<0)continue;const L=P/N;L>=0&&c(L,t,M?ft(h):null)}}(r,a,0,i.length/3,i,t.data,t.stride,n,l,s)}}const at=(0,u.vt)();function st(e,t,r,i,n,o,a){if(null==e)return;const s=function(e,t){return(0,d.s)(t,1/e[0],1/e[1],1/e[2])}(r,at);if((0,h.Ne)(nt,e.bbMin),(0,h.vI)(nt,e.bbMax),null!=n&&n.applyToAabb(nt),function(e,t,r,i){return function(e,t,r,i){const n=(e[0]-i-t[0])*r[0],o=(e[3]+i-t[0])*r[0];let a=Math.min(n,o),s=Math.max(n,o);const l=(e[1]-i-t[1])*r[1],c=(e[4]+i-t[1])*r[1];if(s=Math.min(s,Math.max(l,c)),s<0)return!1;if(a=Math.max(a,Math.min(l,c)),a>s)return!1;const d=(e[2]-i-t[2])*r[2],u=(e[5]+i-t[2])*r[2];return s=Math.min(s,Math.max(d,u)),!(s<0)&&(a=Math.max(a,Math.min(d,u)),!(a>s)&&a<1/0)}(e,t,r,i)}(nt,t,s,i)){const{primitiveIndices:s,position:l}=e,c=s?s.length:l.indices.length/3;if(c>vt){const s=e.getChildren();if(void 0!==s){for(const e of s)st(e,t,r,i,n,o,a);return}}!function(e,t,r,i,n,o,a,s,l,c,d){const u=e[0],h=e[1],f=e[2],m=t[0],p=t[1],v=t[2],{normalRequired:g}=c;for(let e=0;e<i;++e){const t=s[e],r=3*t,i=a*n[r];let c=o[i],_=o[i+1],x=o[i+2];const T=a*n[r+1];let b=o[T],A=o[T+1],y=o[T+2];const E=a*n[r+2];let S=o[E],w=o[E+1],M=o[E+2];null!=l&&([c,_,x]=l.applyToVertex(c,_,x,e),[b,A,y]=l.applyToVertex(b,A,y,e),[S,w,M]=l.applyToVertex(S,w,M,e));const C=b-c,O=A-_,I=y-x,R=S-c,N=w-_,P=M-x,L=p*P-N*v,H=v*R-P*m,D=m*N-R*p,B=C*L+O*H+I*D;if(Math.abs(B)<=gt)continue;const F=u-c,z=h-_,V=f-x,G=F*L+z*H+V*D;if(B>0){if(G<0||G>B)continue}else if(G>0||G<B)continue;const U=z*I-O*V,W=V*C-I*F,j=F*O-C*z,q=m*U+p*W+v*j;if(B>0){if(q<0||G+q>B)continue}else if(q>0||G+q<B)continue;const k=(R*U+N*W+P*j)/B;k>=0&&d(k,t,g?ht(C,O,I,R,N,P,lt):null)}}(t,r,0,c,l.indices,l.data,l.stride,s,n,o,a)}}const lt=(0,u.vt)();const ct=(0,u.vt)(),dt=(0,u.vt)(),ut=(0,u.vt)();function ht(e,t,r,i,n,o,a){return(0,d.s)(mt,e,t,r),(0,d.s)(pt,i,n,o),(0,d.b)(a,mt,pt),(0,d.n)(a,a),a}function ft(e){return(0,d.z)(mt,e[1],e[0]),(0,d.z)(pt,e[2],e[0]),(0,d.b)(lt,mt,pt),(0,d.n)(lt,lt),lt}const mt=(0,u.vt)(),pt=(0,u.vt)(),vt=1e3,gt=1e-7,_t=(0,u.vt)(),xt=[(0,u.vt)(),(0,u.vt)(),(0,u.vt)()];var Tt,bt;(bt=Tt||(Tt={}))[bt.INTEGRATED_MESH=0]="INTEGRATED_MESH",bt[bt.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",bt[bt.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",bt[bt.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",bt[bt.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",bt[bt.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",bt[bt.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",bt[bt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",bt[bt.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",bt[bt.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",bt[bt.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",bt[bt.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",bt[bt.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",bt[bt.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",bt[bt.HUD_MATERIAL=14]="HUD_MATERIAL",bt[bt.LABEL_MATERIAL=15]="LABEL_MATERIAL",bt[bt.LINE_CALLOUTS=16]="LINE_CALLOUTS",bt[bt.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",bt[bt.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",bt[bt.DRAPED_WATER=19]="DRAPED_WATER",bt[bt.VOXEL=20]="VOXEL",bt[bt.MAX_SLOTS=21]="MAX_SLOTS";var At=r(76412),yt=r(57005);const Et=new class{constructor(e=0){this.offset=e,this.sphere=(0,At.c)(),this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,n=(0,d.s)(St,e,t,r),o=(0,d.h)(n,n,i),a=this.offset/(0,d.l)(o);(0,d.r)(o,o,o,a);const s=this.objectTransform.inverse;return(0,d.h)(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,d.l)(e);(0,d.r)(e,e,e,r);const i=this.offset/(0,d.l)(t);(0,d.r)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,d.l)((0,At.g)(e)),r=this.offset/t;return(0,d.r)((0,At.g)(this.sphere),(0,At.g)(e),(0,At.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,u.vt)(),this._tmpMbs=(0,At.c)(),this._tmpObb=new yt.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,d.l)(e)}applyToVertex(e,t,r){const i=(0,d.s)(St,e,t,r),n=(0,d.s)(wt,e,t,r+this.componentLocalOriginLength),o=this._totalOffset/(0,d.l)(n);return(0,d.r)(this._tmpVertex,i,n,o),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*o))*Math.min(l,u),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(d,f),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,f),T=Math.sqrt(m*m+p*p+v*v),b=Math.sign(l+r),A=Math.sign(c+i),y=Math.sign(d+n),E=Math.sign(u+o),S=Math.sign(h+a),w=Math.sign(f+s),M=this._totalOffset;if(T<M)return e[0]-=(1-b)*M,e[1]-=(1-A)*M,e[2]-=(1-y)*M,e[3]+=E*M,e[4]+=S*M,e[5]+=w*M,e;const C=M/Math.sqrt(g*g+_*_+x*x),O=M/T,I=O-C,R=-I;return e[0]+=r*(b*R+O),e[1]+=i*(A*R+O),e[2]+=n*(y*R+O),e[3]+=o*(E*I+C),e[4]+=a*(S*I+C),e[5]+=s*(w*I+C),e}applyToMbs(e){const t=(0,d.l)((0,At.g)(e)),r=this._totalOffset/t;return(0,d.r)((0,At.g)(this._tmpMbs),(0,At.g)(e),(0,At.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,yt.gm)(e,this._totalOffset,this._totalOffset,Fe.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const i=(0,d.s)(St,e,t,r),n=(0,d.g)(wt,i,this.localOrigin),o=this.offset/(0,d.l)(n);return(0,d.r)(this.tmpVertex,i,n,o),this.tmpVertex}applyToAabb(e){const t=Mt,r=Ct,i=Ot;for(let n=0;n<3;++n)t[n]=e[0+n]+this.localOrigin[n],r[n]=e[3+n]+this.localOrigin[n],i[n]=t[n];const n=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=n[t],e[t+3]=n[t];const o=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let n=0;n<3;++n)i[n]=e&1<<n?r[n]:t[n];o(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let n=0;n<3;++n)i[n]=a&1<<n?0:e&1<<n?t[n]:r[n];o(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const St=(0,u.vt)(),wt=(0,u.vt)(),Mt=(0,u.vt)(),Ct=(0,u.vt)(),Ot=(0,u.vt)();function It(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let e=0;e<s;++e){const t=2*n[e];o[r]=i[t],o[r+1]=i[t+1],r+=a}}function Rt(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}}function Nt(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let e=0;e<l;++e){const t=4*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}}function Pt(e,t,r,i,n=1){const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<r;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function Lt(e,t,r,i,n,o){switch(e){case ne.r.POSITION:{(0,U.vA)(3===t.size);const i=n.getField(e,m.xs);(0,U.vA)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void Rt(e,r,i,n);const{data:o,indices:a}=e,l=r.typedBuffer,c=r.typedBufferStride,d=a.length,u=t[0],h=t[1],f=t[2],m=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],A=t[14];i*=c;let y=0,E=0,S=0;const w=(0,s.tZ)(t)?e=>{y=o[e]+T,E=o[e+1]+b,S=o[e+2]+A}:e=>{const t=o[e],r=o[e+1],i=o[e+2];y=u*t+m*r+g*i+T,E=h*t+p*r+_*i+b,S=f*t+v*r+x*i+A};if(1===n)for(let e=0;e<d;++e)w(3*a[e]),l[i]=y,l[i+1]=E,l[i+2]=S,i+=c;else for(let e=0;e<d;++e){w(3*a[e]);for(let e=0;e<n;++e)l[i]=y,l[i+1]=E,l[i+2]=S,i+=c}}(t,r,i,o);break}case ne.r.NORMAL:{(0,U.vA)(3===t.size);const r=n.getField(e,m.xs);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,n=1){if(!t)return void Rt(e,r,i,n);const{data:o,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],f=l[1],m=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.ut)(l),A=1e-6,y=1-A;i*=d;let E=0,S=0,w=0;const M=(0,s.tZ)(l)?e=>{E=o[e],S=o[e+1],w=o[e+2]}:e=>{const t=o[e],r=o[e+1],i=o[e+2];E=h*t+p*r+_*i,S=f*t+v*r+x*i,w=m*t+g*r+T*i};if(1===n)if(b)for(let e=0;e<u;++e){M(3*a[e]);const t=E*E+S*S+w*w;if(t<y&&t>A){const e=1/Math.sqrt(t);c[i]=E*e,c[i+1]=S*e,c[i+2]=w*e}else c[i]=E,c[i+1]=S,c[i+2]=w;i+=d}else for(let e=0;e<u;++e)M(3*a[e]),c[i]=E,c[i+1]=S,c[i+2]=w,i+=d;else for(let e=0;e<u;++e){if(M(3*a[e]),b){const e=E*E+S*S+w*w;if(e<y&&e>A){const t=1/Math.sqrt(e);E*=t,S*=t,w*=t}}for(let e=0;e<n;++e)c[i]=E,c[i+1]=S,c[i+2]=w,i+=d}}(t,i,r,o);break}case ne.r.NORMALCOMPRESSED:{(0,U.vA)(2===t.size);const r=n.getField(e,m.mJ);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&It(t,r,o);break}case ne.r.UV0:{(0,U.vA)(2===t.size);const r=n.getField(e,m.gH);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&It(t,r,o);break}case ne.r.COLOR:case ne.r.SYMBOLCOLOR:{const r=n.getField(e,m.XP);(0,U.vA)(!!r,`No buffer view for ${e}`),(0,U.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,i,n=1){const{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}(t,t.size,r,o);break}case ne.r.COLORFEATUREATTRIBUTE:{const r=n.getField(e,m.Y$);(0,U.vA)(!!r,`No buffer view for ${e}`),(0,U.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let e=0;e<s;++e)o[r]=l,r+=a}(t,r,o);break}case ne.r.TANGENT:{(0,U.vA)(4===t.size);const i=n.getField(e,m.Eq);(0,U.vA)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void Nt(e,r,i,n);const{data:o,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],f=l[1],m=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.ut)(l),A=1e-6,y=1-A;if(i*=d,1===n)for(let e=0;e<u;++e){const t=4*a[e],r=o[t],n=o[t+1],s=o[t+2],l=o[t+3];let u=h*r+p*n+_*s,E=f*r+v*n+x*s,S=m*r+g*n+T*s;if(b){const e=u*u+E*E+S*S;if(e<y&&e>A){const t=1/Math.sqrt(e);u*=t,E*=t,S*=t}}c[i]=u,c[i+1]=E,c[i+2]=S,c[i+3]=l,i+=d}else for(let e=0;e<u;++e){const t=4*a[e],r=o[t],s=o[t+1],l=o[t+2],u=o[t+3];let E=h*r+p*s+_*l,S=f*r+v*s+x*l,w=m*r+g*s+T*l;if(b){const e=E*E+S*S+w*w;if(e<y&&e>A){const t=1/Math.sqrt(e);E*=t,S*=t,w*=t}}for(let e=0;e<n;++e)c[i]=E,c[i+1]=S,c[i+2]=w,c[i+3]=u,i+=d}}(t,r,i,o);break}case ne.r.PROFILERIGHT:case ne.r.PROFILEUP:case ne.r.PROFILEVERTEXANDNORMAL:case ne.r.FEATUREVALUE:{(0,U.vA)(4===t.size);const r=n.getField(e,m.Eq);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&Nt(t,r,o)}}}class Ht{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(ne.r.POSITION).indices.length}write(e,t,r,i,n){!function(e,t,r,i,n,o){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)Lt(a,t,r,i,n,o);else if(a===ne.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(ne.r.POSITION)?.indices;if(t){const r=t.length,i=n.getField(a,m.XP);Pt(e.objectAndLayerIdColor,i,r,o)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var Dt=r(13752),Bt=r(91829),Ft=r(53466),zt=r(72824),Vt=r(97220),Gt=r(84867),Ut=r(39341),Wt=r(34886);pe.MT.LESS,pe.MT.ALWAYS;const jt={mask:255},qt={function:{func:pe.MT.ALWAYS,ref:F.dd.OutlineVisualElementMask,mask:F.dd.OutlineVisualElementMask},operation:{fail:pe.eA.KEEP,zFail:pe.eA.KEEP,zPass:pe.eA.ZERO}},kt={function:{func:pe.MT.ALWAYS,ref:F.dd.OutlineVisualElementMask,mask:F.dd.OutlineVisualElementMask},operation:{fail:pe.eA.KEEP,zFail:pe.eA.KEEP,zPass:pe.eA.REPLACE}};pe.MT.EQUAL,F.dd.OutlineVisualElementMask,F.dd.OutlineVisualElementMask,pe.eA.KEEP,pe.eA.KEEP,pe.eA.KEEP,pe.MT.NOTEQUAL,F.dd.OutlineVisualElementMask,F.dd.OutlineVisualElementMask,pe.eA.KEEP,pe.eA.KEEP,pe.eA.KEEP;const $t=[1,1,.5],Xt=[0,.6,.2],Yt=[0,1,.2];var Zt=r(28491);class Jt extends zt.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.ci)($t),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=F.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=u.uY,this.instancedDoublePrecision=!1,this.normalType=Ge.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.fA)(.2,.2,.2),this.diffuse=(0,u.fA)(.8,.8,.8),this.externalColor=(0,Bt.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=F.it.Less,this.textureAlphaMode=F.sf.Blend,this.textureAlphaCutoff=qe.Q,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=$e.m$.Occlude,this.isDecoration=!1}}zt.gy;class Kt extends Gt.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===Fe.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.emissionSource===Ue.ZX.Texture||t.hasOcclusionTexture||t.hasNormalTexture?Ft.I.Default:Ft.I.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Kt.shader)}_initializeProgram(e,t){return new Wt.B(e.rctx,t.get().build(this.configuration),Ut.D)}_makePipeline(e,t){const{output:r,transparent:i,cullFace:n,customDepthTest:o,writeDepth:a,hasOccludees:s,enableOffset:l}=this.configuration,c=e===Xe.y.NONE,d=e===Xe.y.FrontFace;return(0,Ye.Ey)({blending:r!==Ve.V.Color&&r!==Ve.V.ColorEmission||!i?null:Ke(e),culling:er(this.configuration)?(0,Ye.Xt)(n):null,depthTest:{func:tt(e,Qt(o))},depthWrite:(c||d)&&a?Ye.kn:null,drawBuffers:r===Ve.V.Depth?{buffers:[pe.Hr.NONE]}:rt(e,r),colorWrite:Ye.wE,stencilWrite:s?jt:null,stencilTest:s?t?kt:qt:null,polygonOffset:c||d?null:et(l)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Qt(e){return e===F.it.Lequal?pe.MT.LEQUAL:pe.MT.LESS}function er(e){return e.cullFace!==F.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Kt.shader=new Vt.$(Zt.D,(()=>r.e(5141).then(r.bind(r,5141))));var tr=r(90237),rr=r(99769),ir=r(82991),nr=r(46263);class or extends ir.nW{}(0,tr._)([(0,rr.W)({constValue:!0})],or.prototype,"hasSliceHighlight",void 0),(0,tr._)([(0,rr.W)({constValue:!1})],or.prototype,"hasSliceInVertexProgram",void 0),(0,tr._)([(0,rr.W)({constValue:nr.c.Pass})],or.prototype,"bindType",void 0);class ar extends or{constructor(){super(...arguments),this.output=Ve.V.Color,this.alphaDiscardMode=F.sf.Opaque,this.doubleSidedMode=We.W.None,this.pbrMode=je.A9.Disabled,this.cullFace=F.s2.None,this.transparencyPassType=Xe.y.NONE,this.normalType=Ge.W.Attribute,this.textureCoordinateType=Ft.I.None,this.customDepthTest=F.it.Less,this.emissionSource=Ue.ZX.None,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.discardInvisibleFragments=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,tr._)([(0,rr.W)({count:Ve.V.COUNT})],ar.prototype,"output",void 0),(0,tr._)([(0,rr.W)({count:F.sf.COUNT})],ar.prototype,"alphaDiscardMode",void 0),(0,tr._)([(0,rr.W)({count:We.W.COUNT})],ar.prototype,"doubleSidedMode",void 0),(0,tr._)([(0,rr.W)({count:je.A9.COUNT})],ar.prototype,"pbrMode",void 0),(0,tr._)([(0,rr.W)({count:F.s2.COUNT})],ar.prototype,"cullFace",void 0),(0,tr._)([(0,rr.W)({count:Xe.y.COUNT})],ar.prototype,"transparencyPassType",void 0),(0,tr._)([(0,rr.W)({count:Ge.W.COUNT})],ar.prototype,"normalType",void 0),(0,tr._)([(0,rr.W)({count:Ft.I.COUNT})],ar.prototype,"textureCoordinateType",void 0),(0,tr._)([(0,rr.W)({count:F.it.COUNT})],ar.prototype,"customDepthTest",void 0),(0,tr._)([(0,rr.W)({count:Ue.ZX.COUNT})],ar.prototype,"emissionSource",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"spherical",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasVertexColors",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasSymbolColors",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasVerticalOffset",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasSlicePlane",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasSliceHighlight",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasColorTexture",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasMetallicRoughnessTexture",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasOcclusionTexture",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasNormalTexture",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasScreenSizePerspective",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasVertexTangents",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasOccludees",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"multipassEnabled",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasModelTransformation",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"offsetBackfaces",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"vvSize",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"vvColor",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"receiveShadows",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"receiveAmbientOcclusion",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"textureAlphaPremultiplied",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"instanced",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"instancedColor",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"objectAndLayerIdColorInstanced",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"instancedDoublePrecision",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"writeDepth",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"transparent",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"discardInvisibleFragments",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"enableOffset",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"cullAboveGround",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"snowCover",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasColorTextureTransform",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasEmissionTextureTransform",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasNormalTextureTransform",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasOcclusionTextureTransform",void 0),(0,tr._)([(0,rr.W)()],ar.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,tr._)([(0,rr.W)({constValue:!1})],ar.prototype,"occlusionPass",void 0),(0,tr._)([(0,rr.W)({constValue:!0})],ar.prototype,"hasVvInstancing",void 0),(0,tr._)([(0,rr.W)({constValue:!1})],ar.prototype,"useCustomDTRExponentForWater",void 0),(0,tr._)([(0,rr.W)({constValue:!0})],ar.prototype,"useFillLights",void 0);var sr=r(57323);class lr extends Kt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.emissionSource=Ue.ZX.None,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Ge.W.Attribute,t.doubleSidedMode=We.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,lr.shader)}}lr.shader=new Vt.$(sr.R,(()=>r.e(9933).then(r.bind(r,39933))));class cr extends $e.im{constructor(e){super(e,ur),this._configuration=new ar,this.supportsEdges=!0,this.produces=new Map([[Tt.OPAQUE_MATERIAL,e=>(e===Ve.V.ColorEmission||(0,Ve.XY)(e)||(0,Ve.PJ)(e))&&!this.parameters.transparent],[Tt.TRANSPARENT_MATERIAL,e=>(e===Ve.V.ColorEmission||(0,Ve.XY)(e)||(0,Ve.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Tt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,Ve.XY)(e)||(0,Ve.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,ze.BP)().vec3f(ne.r.POSITION);return e.normalType===Ge.W.Compressed?t.vec2i16(ne.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(ne.r.NORMAL),e.hasVertexTangents&&t.vec4f(ne.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(ne.r.UV0),e.hasVertexColors&&t.vec4u8(ne.r.COLOR),e.hasSymbolColors&&t.vec4u8(ne.r.SYMBOLCOLOR),(0,ae.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ne.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Ve.V.Shadow&&e!==Ve.V.ShadowExcludeHighlight&&e!==Ve.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<qe.Q)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o=t||n||i,a="replace"===e.colorMixMode,s=e.opacity>=qe.Q;if(r&&o)return a||s;const l=e.externalColor&&e.externalColor[3]>=qe.Q;return r?a?l:s:o?a||s:a?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,d.e)(this.parameters.emissiveFactor,u.uY)}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.discardInvisibleFragments=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?F.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==Ve.V.Color&&e!==Ve.V.ColorEmission||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=We.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?We.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?We.W.WindingOrder:We.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?je.A9.Schematic:je.A9.Normal:je.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.emissionSource=null!=this.parameters.emissiveTextureId?Ue.ZX.Texture:this.parameters.usePBR&&!this.parameters.isSchematic?Ue.ZX.Value:Ue.ZX.None,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,o){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,d.s)(gr,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case Fe.RT.Global:o=(0,d.n)(pr,gr);break;case Fe.RT.Local:o=(0,d.c)(pr,mr)}let a=0;const s=(0,d.f)(_r,gr,e.eye),l=(0,d.l)(s),c=(0,d.j)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,d.m)(o,c)),a+=(0,Dt.kE)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,d.j)(o,o,a),(0,d.t)(vr,o,r.transform.inverseRotation),i=(0,d.f)(hr,i,vr),n=(0,d.f)(fr,n,vr)}var a;ot(e,r,i,n,null!=(a=r.verticalOffset)?(Et.offset=a,Et):null,o)}createGLMaterial(e){return new dr(e)}createBufferWriter(){return new Ht(this._vertexBufferLayout)}}class dr extends ke.m8{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==Ve.V.Color&&this._output!==Ve.V.ColorEmission||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,d.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?lr:Kt,e)}}class ur extends Jt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const hr=(0,u.vt)(),fr=(0,u.vt)(),mr=(0,u.fA)(0,0,1),pr=(0,u.vt)(),vr=(0,u.vt)(),gr=(0,u.vt)(),_r=(0,u.vt)(),xr=()=>R.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Tr(e){throw new I.A("",`Request for object resource failed: ${e}`)}function br(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(xr().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(xr().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(xr().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(xr().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else xr().warn("Indexed geometries must specify faces"),i=!1;break}default:xr().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(xr().warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(xr().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Ar(e){const t=(0,h.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,h.iT)(t,r.bbMin),(0,h.iT)(t,r.bbMax))})),t}function yr(e){switch(e){case"mask":return F.sf.Mask;case"maskAndTransparency":return F.sf.MaskBlend;case"none":return F.sf.Opaque;default:return F.sf.Blend}}function Er(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Sr=new L.R(1,2,"wosr");var wr=r(61765);async function Mr(e,t){const a=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.EM)(e));if("wosr"===a.fileType){const e=await(t.cache?t.cache.loadWOSR(a.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,C.Ke)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,P.QP)(i.error),Tr(i.error.details.url)}(e,r,t);const i=await(0,C.Ke)((0,M.A)(e,t));if(!0===i.ok)return i.value.data;(0,P.QP)(i.error),Tr(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const n=e[i],o=n.images[0].data;if(!o){xr().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+o,s="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:pe.pF.REPEAT,t:pe.pF.REPEAT},preMultiplyAlpha:yr(l)!==F.sf.Opaque},d=t?.disableTextures?Promise.resolve(null):D(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}(r.textureDefinitions??{},t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:n+(0,O.iL)(r)}}(a.url,t)),{engineResources:r,referenceBoundingBox:i}=function(e,t){const r=new Array,i=new Array,n=new Array,o=new N,a=e.resource,s=L.R.parse(a.version||"1.0","wosr");Sr.validate(s);const l=a.model.name,c=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let f=0;const m=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!br(a))continue;const s=Er(a),l=a.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[ne.r.POSITION],_=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,i=v(e)??(0,H.tM)(_);p.push([e,new B.n(r,i,t.valuesPerElement,!0)])}const x=s.texture,T=h&&h[x];if(T&&!m.has(x)){const{image:e,parameters:t}=T,r=new He(e,t);i.push(r),m.set(x,r)}const b=m.get(x),A=b?b.id:void 0,y=s.material;let E=o.get(y,x);if(null==E){const e=d[y.slice(y.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=T?yr(T.alphaChannelUsage):void 0,a={ambient:(0,u.ci)(e.diffuse),diffuse:(0,u.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:F.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),E=new cr(a),o.set(y,x,E)}n.push(E);const S=new oe(E,p);f+=p.find((e=>e[0]===ne.r.POSITION))?.[1]?.indices.length??0,r.push(S)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Ar(r)}}(e,t);return{lods:r,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}let y;if(t.cache)y=await t.cache.loadGLTF(a.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(4399).then(r.bind(r,4399));y=await e(new T.R(t.streamDataRequester),a.url,t,t.usePBR)}const S=y.model.meta?.ESRI_proxyEllipsoid,I=y.meta.isEsriSymbolResource&&null!=S&&"EsriRealisticTreesStyle"===y.meta.ESRI_webstyle;I&&!y.customMeta.esriTreeRendering&&(y.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if(null==i)return;const o=n.attributes.position,a=o.count,c=(0,u.vt)(),h=(0,u.vt)(),f=(0,u.vt)(),p=new Uint8Array(4*a),v=new Float64Array(3*a),g=(0,s.B8)((0,l.vt)(),n.transform);let _=0,x=0;for(let s=0;s<a;s++){o.getVec(s,h),i.getVec(s,c),(0,d.h)(h,h,n.transform),(0,d.f)(f,h,t.center),(0,d.D)(f,f,t.radius);const a=f[2],l=(0,d.l)(f),u=Math.min(.45+.55*l*l,1);(0,d.D)(f,f,t.radius),null!==g&&(0,d.h)(f,f,g),(0,d.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.o)(f,f,c,a>-1?.2:Math.min(-4*a-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*u,p[x+1]=255*u,p[x+2]=255*u,p[x+3]=255,x+=4}n.attributes.normal=new m.xs(v),n.attributes.color=new m.XP(p)}}}(y,S));const R=!!t.usePBR,z=y.meta.isEsriSymbolResource?{usePBR:R,isSchematic:!1,treeRendering:I,mrrFactors:[...Yt]}:{usePBR:R,isSchematic:!1,treeRendering:!1,mrrFactors:[...$t]},V={...t.materialParameters,treeRendering:I},{engineResources:G,referenceBoundingBox:U}=function(e,t,r,i){const a=e.model,s=new Array,l=new Map,T=new Map,y=a.lods.length,S=(0,h.Ie)();return a.lods.forEach(((e,M)=>{const C=!0===i.skipHighLods&&(y>1&&0===M||y>3&&1===M)||!1===i.skipHighLods&&null!=i.singleLodIndex&&M!==i.singleLodIndex;if(C&&0!==M)return;const O=new w(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=C?new cr({}):function(e,t,r,i,n,o,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),h=null!=t.attributes.texCoord0,f=null!=t.attributes.normal;if(null==l)return null;const m=function(e){switch(e){case"BLEND":return F.sf.Blend;case"MASK":return F.sf.Mask;case"OPAQUE":case null:case void 0:return F.sf.Opaque}}(l.alphaMode);if(!o.has(s)){if(h){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new He((0,A.x3)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,A.x3)(e)&&r,encoding:(0,A.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,m!==F.sf.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/wr.T),p=l.color[1]**(1/wr.T),v=l.color[2]**(1/wr.T),g=l.emissiveFactor[0]**(1/wr.T),_=l.emissiveFactor[1]**(1/wr.T),x=l.emissiveFactor[2]**(1/wr.T),T=null!=l.textureColor&&h?a.get(l.textureColor):null,b=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:n,emissiveFactor:o,occlusionTexture:a}){return null==e&&null==t&&null==n&&(null==o||(0,d.e)(o,u.uY))&&null==a&&(null==i||1===i)&&(null==r||1===r)}({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),y=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:c.Un;o.set(s,new cr({...i,transparent:m===F.sf.Blend,customDepthTest:F.it.Lequal,textureAlphaMode:m,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,p,v],ambient:[r,p,v],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?F.s2.None:F.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:f?Ge.W.Attribute:Ge.W.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&h?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&h?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&h?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&h?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[g,_,x],mrrFactors:b?[...Xt]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:E(l.colorTextureTransform),normalTextureTransformMatrix:E(l.normalTextureTransform),scale:[y[0],y[1]],occlusionTextureTransformMatrix:E(l.occlusionTextureTransform),emissiveTextureTransformMatrix:E(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:E(l.metallicRoughnessTextureTransform),...n}))}const p=o.get(s);if(r.stageResources.materials.push(p),h){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return p}(a,e,O,t,r,l,T),{geometry:s,vertexCount:y}=function(e,t){const r=e.attributes.position.count,i=(0,b.x)(e.indices||r,e.primitiveType),a=(0,f.oe)(3*r),{typedBuffer:s,typedBufferStride:l}=e.attributes.position;(0,p.a)(a,s,e.transform,3,l);const c=[[ne.r.POSITION,new B.n(a,i,3,!0)]];if(null!=e.attributes.normal){const t=(0,f.oe)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.normal;(0,o.Ge)(Cr,e.transform),(0,p.t)(t,a,Cr,3,s),(0,n.or)(Cr)&&(0,p.n)(t,t),c.push([ne.r.NORMAL,new B.n(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=(0,f.oe)(4*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.tangent;(0,o.z0)(Cr,e.transform),(0,v.t)(t,a,Cr,4,s),(0,n.or)(Cr)&&(0,p.n)(t,t,4),c.push([ne.r.TANGENT,new B.n(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,f.oe)(2*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.texCoord0;(0,g.a)(t,n,2,o),c.push([ne.r.UV0,new B.n(t,i,2,!0)])}const d=e.attributes.color;if(null!=d){const t=new Uint8Array(4*r);4===d.elementCount?d instanceof m.Eq?(0,v.b)(t,d,255):d instanceof m.XP?(0,x.a)(t,d):d instanceof m.Uz&&(0,v.b)(t,d,1/256):(t.fill(255),d instanceof m.xs?(0,p.f)(t,d.typedBuffer,255,4,d.typedBufferStride):e.attributes.color instanceof m.eI?(0,_.c)(t,d.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,p.f)(t,d.typedBuffer,1/256,4,d.typedBufferStride)),c.push([ne.r.COLOR,new B.n(t,i,4,!0)])}return{geometry:new oe(t,c),vertexCount:r}}(e,null!=i?i:new cr({})),w=s.boundingInfo;null!=w&&0===M&&((0,h.iT)(S,w.bbMin),(0,h.iT)(S,w.bbMax)),null!=i&&(O.stageResources.geometries.push(s),O.numberOfVertices+=y)})),C||s.push(O)})),{engineResources:s,referenceBoundingBox:S}}(y,z,V,t.skipHighLods&&null==a.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:a.specifiedLodIndex});return{lods:G,referenceBoundingBox:U,isEsriSymbolResource:y.meta.isEsriSymbolResource,isWosr:!1}}const Cr=(0,a.vt)()},66104:(e,t,r)=>{var i,n;r.d(t,{k5:()=>i}),r(34727),(n=i||(i={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"},42583:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(66104),n=r(2597);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},46686:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var i=r(49255),n=r(33752),o=r(47286),a=r(2597);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
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
  `)}},49255:(e,t,r)=>{var i;function n(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function o(e){return function(e){return function(e){return s(e)||a(e)}(e)||l(e)}(e)||e===i.Normal}function a(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function s(e){return e===i.Color}function l(e){return e===i.Depth}r.d(t,{PJ:()=>n,V:()=>i,XY:()=>o}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(i||(i={}))},76591:(e,t,r)=>{r.d(t,{HQ:()=>c});var i=r(58083),n=r(9093),o=r(38954),a=r(51850),s=r(40710),l=(r(33079),r(2597));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}const i=l.H`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,o=t.hasSliceHighlight?l.H`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(i),e.fragment.uniforms.add(...r).code.add(i),e.fragment.code.add(o)}(e,t,new s.W("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.uY;const i=d(e,t,r),n=u(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,o.h)(p,n,s):n}(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>f(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>f(t,e,r,r.slicePlane?.basis2))))}function d(e,t,r){return e.instancedDoublePrecision?(0,o.s)(m,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function u(e,t){return null!=e?(0,o.f)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Tl)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r,i){if(null==i||null==r.slicePlane)return a.uY;const n=d(e,t,r),s=u(n,r.slicePlane),l=h(e,n,r);return null!=l?((0,o.g)(v,i,s),(0,o.h)(p,s,l),(0,o.h)(v,v,l),(0,o.f)(v,v,p)):i}l.Y;const m=(0,a.vt)(),p=(0,a.vt)(),v=(0,a.vt)(),g=(0,n.vt)()},76597:(e,t,r)=>{r.d(t,{d:()=>o});var i=r(46686),n=r(2597);function o(e){(0,i.i$)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},82991:(e,t,r)=>{r.d(t,{BK:()=>b,nW:()=>x});var i=r(90237),n=r(77690),o=r(29242),a=r(9093),s=r(38954),l=r(51850),c=r(49255),d=r(26425),u=r(20693),h=r(40710),f=r(2597),m=r(35644),p=r(40095),v=r(99769),g=r(46540),_=r(28449);class x extends v.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.W)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.W)()],x.prototype,"hasModelTransformation",void 0),f.Y;const T=(0,o.vt)();function b(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.X("model",(e=>e.modelTransformation??a.zK))),e.vertex.uniforms.add(new m.k("normalLocalOriginFromModel",(e=>((0,n.Ge)(T,e.modelTransformation??a.zK),T))))),t.instanced&&i&&(e.attributes.add(g.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.r.INSTANCEMODEL,"mat3"),e.attributes.add(g.r.INSTANCEMODELNORMAL,"mat3"));const o=e.vertex;i&&(o.include(d.u,t),o.uniforms.add(new h.W("viewOriginHi",((e,t)=>(0,_.Zo)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))),new h.W("viewOriginLo",((e,t)=>(0,_.jA)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))))),o.code.add(f.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?f.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(f.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,u.S7)(o),o.code.add(f.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add(f.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const A=(0,l.vt)()},96336:(e,t,r)=>{r.d(t,{W:()=>i,Y:()=>l});var i,n,o=r(21818),a=r(2597),s=r(46540);function l(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,o.Xb)(t.normalType);case i.COUNT:case i.Ground:}}(n=i||(i={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.Ground=2]="Ground",n[n.ScreenDerivative=3]="ScreenDerivative",n[n.COUNT=4]="COUNT"},10764:(e,t,r)=>{r.d(t,{I:()=>o});var i=r(2597),n=r(46540);function o(e){e.attributes.add(n.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},39014:(e,t,r)=>{r.d(t,{K:()=>l});var i=r(42583),n=r(93588),o=r(2597),a=r(46540),s=r(13752);function l(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
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
void forwardNormalizedVertexColor() {}`)}},72824:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>f});var i=r(21818),n=r(29242),o=r(91829),a=r(96336),s=r(33752),l=r(2597),c=r(98353),d=r(35644);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.Ground:e.include(s.em,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.H`normalize(vPositionWorldCameraRelative);`:l.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.vt)()}}class f extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.vt)(),this.toMapSpace=(0,o.vt)()}}},33752:(e,t,r)=>{r.d(t,{EM:()=>v,dO:()=>p,em:()=>m});var i=r(29242),n=r(9093),o=r(51850),a=r(10764),s=r(26425),l=r(40710),c=r(33079),d=r(2597),u=r(98353),h=r(35644),f=r(40095);function m(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.vt)(),this.transformWorldFromViewTL=(0,o.vt)(),this.transformViewFromCameraRelativeRS=(0,i.vt)(),this.transformProjFromView=(0,n.vt)()}}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.vt)(),this.transformWorldFromModelTH=(0,o.vt)(),this.transformWorldFromModelTL=(0,o.vt)()}}},99208:(e,t,r)=>{r.d(t,{r:()=>a});var i=r(53466),n=r(2597);function o(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
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
  `)}},54154:(e,t,r)=>{r.d(t,{G:()=>f});var i=r(87317),n=r(91829),o=r(38954),a=r(51850),s=r(33079),l=r(2597);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const d=(0,a.vt)();var u=r(20693),h=r(71988);function f(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new h.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(m,o*s,a,r,n)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.t("screenSizePerspectiveAlignment",(e=>function(e){return(0,o.s)(d,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,u.yu)(e.vertex,t)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const m=(0,n.vt)()},9169:(e,t,r)=>{r.d(t,{E:()=>b});var i=r(46686),n=r(49255),o=r(76591),a=r(76597),s=r(96336),l=r(2597),c=r(46540);function d(e,t){if(t.output!==n.V.ObjectAndLayerIdColor)return e.vertex.code.add(l.H`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(l.H`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?c.r.INSTANCEOBJECTANDLAYERIDCOLOR:c.r.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(l.H`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(l.H`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}var u=r(53466),h=r(72824),f=r(80730);function m(e,t){switch(t.output){case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:e.fragment.include(f.U),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var p=r(76662),v=r(986),g=r(11955),_=r(20693),x=r(63761),T=r(89192);function b(e,t){const{vertex:r,fragment:c}=e,f=t.hasColorTexture&&t.alphaDiscardMode!==T.sf.Opaque,{output:b,normalType:A,hasColorTextureTransform:y}=t;switch(b){case n.V.Depth:(0,_.NB)(r,t),e.include(a.d,t),e.include(o.HQ,t),e.include(u.U,t),f&&c.uniforms.add(new x.N("tex",(e=>e.texture))),r.main.add(l.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(g.S,t),c.main.add(l.H`
          discardBySlice(vpos);
          ${(0,l.If)(f,l.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:case n.V.ObjectAndLayerIdColor:(0,_.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(v.A,t),e.include(m,t),e.include(o.HQ,t),e.include(d,t),(0,i.xJ)(e),e.varyings.add("depth","float"),f&&c.uniforms.add(new x.N("tex",(e=>e.texture))),r.main.add(l.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(g.S,t),c.main.add(l.H`
          discardBySlice(vpos);
          ${(0,l.If)(f,l.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${b===n.V.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}`);break;case n.V.Normal:{(0,_.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(h.Mh,t),e.include(u.U,t),e.include(v.A,t),f&&c.uniforms.add(new x.N("tex",(e=>e.texture))),A===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=A===s.W.Attribute||A===s.W.Compressed;r.main.add(l.H`
          vpos = getVertexInLocalOriginSpace();
          ${i?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(o.HQ,t),e.include(g.S,t),c.main.add(l.H`
          discardBySlice(vpos);
          ${(0,l.If)(f,l.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${A===s.W.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case n.V.Highlight:(0,_.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(v.A,t),f&&c.uniforms.add(new x.N("tex",(e=>e.texture))),r.main.add(l.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(o.HQ,t),e.include(g.S,t),e.include(p.Q,t),c.main.add(l.H`
          discardBySlice(vpos);
          ${(0,l.If)(f,l.H`vec4 texColor = texture(tex, ${y?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          outputHighlight();`)}}},22911:(e,t,r)=>{r.d(t,{NL:()=>f,ZX:()=>i});var i,n,o=r(49255),a=r(99208),s=r(40710),l=r(33079),c=r(2597),d=r(15976),u=r(63761),h=r(46263);function f(e,t){if(t.output!==o.V.ColorEmission&&t.output!==o.V.Color)return;const{emissionSource:r,hasEmissiveTextureTransform:n,bindType:f}=t,m=r===i.Texture;m&&(e.include(a.r,t),e.fragment.uniforms.add(f===h.c.Pass?new u.N("texEmission",(e=>e.textureEmissive)):new d.o("texEmission",(e=>e.textureEmissive))));const p=r===i.Value||m;p&&e.fragment.uniforms.add(f===h.c.Pass?new l.t("emissionFactor",(e=>e.emissiveFactor)):new s.W("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(c.H`
    vec4 getEmissions() {
      vec4 emissions = ${p?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,c.If)(m,`emissions *= textureLookup(texEmission, ${n?"emissiveUV":"vuv0"})`)};
      return emissions;
    }
  `)}r(25634),(n=i||(i={}))[n.None=0]="None",n[n.Value=1]="Value",n[n.Texture=2]="Texture",n[n.COUNT=3]="COUNT"},76662:(e,t,r)=>{r.d(t,{Q:()=>s});var i=r(49255),n=r(93588),o=r(2597),a=r(63761);function s(e,t){t.output===i.V.Highlight?(e.fragment.uniforms.add(new a.N("depthTexture",((e,t)=>t.mainDepth))),e.fragment.uniforms.add(new a.N("highlightTexture",((e,t)=>t.highlightTexture))),e.fragment.uniforms.add(new n.c("highlightLevel",((e,t)=>t.highlightLevel))),e.outputs.add("fragHighlight","vec4",0),e.fragment.code.add(o.H`void outputHighlightNet(bool occluded) {
int ll = highlightLevel & 3;
int newI = 0;
newI |= 1 << (ll*2);
if (occluded) { newI |= 2 << (ll*2); }
vec4 prevHighlight = texelFetch(highlightTexture, ivec2(gl_FragCoord.xy), 0);
int li = (highlightLevel >> 2) & 3;
int prevI = int(prevHighlight[li] * 255.0);
int cI = newI | prevI;
float cf = float(cI) / 255.0;
vec4 combinedHighlight = prevHighlight;
combinedHighlight[li] = cf;
fragHighlight = combinedHighlight;
}
void outputHighlight() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
bool occluded = gl_FragCoord.z > sceneDepth + 5e-5;
outputHighlightNet(occluded);
}`)):e.fragment.code.add(o.H`void outputHighlight() {}`)}},52540:(e,t,r)=>{r.d(t,{E:()=>s});var i=r(37585),n=r(48163),o=(r(26835),r(47286)),a=r(2597);function s(e){e.uniforms.add(new o.G("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,i.hZ)(l,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
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
}`)}const l=(0,n.vt)()},77695:(e,t,r)=>{r.d(t,{W:()=>p});var i=r(29242),n=r(48163),o=r(53466),a=r(99208),s=r(62602),l=r(47286),c=r(2597),d=r(35644),u=r(15976),h=r(63761),f=r(46263),m=r(46540);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(m.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
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
}`),t.textureCoordinateType!==o.I.None&&(e.include(a.r,t),r.uniforms.add(t.bindType===f.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??n.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},3452:(e,t,r)=>{r.d(t,{n:()=>G});var i,n,o,a=r(2597),s=r(63761),l=r(90237),c=r(34727),d=r(97768),u=r(36708),h=r(78659),f=r(10107),m=(r(44208),r(53966),r(87811),r(40608)),p=r(37585);(o=i||(i={}))[o.RED=0]="RED",o[o.RG=1]="RG",o[o.RGBA4=2]="RGBA4",o[o.RGBA=3]="RGBA",o[o.RGBA_MIPMAP=4]="RGBA_MIPMAP",o[o.R16F=5]="R16F",o[o.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(n||(n={}));var v=r(69622),g=r(49186),_=r(89192);let x=class extends v.A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this.requireGeometryDepth=!1,this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,u.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),u.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new g.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===_.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this._context}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,l._)([(0,f.MZ)({constructOnly:!0})],x.prototype,"view",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],x.prototype,"consumes",void 0),(0,l._)([(0,f.MZ)()],x.prototype,"produces",void 0),x=(0,l._)([(0,m.$)("esri.views.3d.webgl.RenderNode")],x);const T=x;var b=r(97220),A=r(84867),y=r(39341),E=r(34886),S=r(95774),w=r(90644);class M extends A.w{initializeProgram(e){return new E.B(e.rctx,M.shader.get().build(),y.D)}initializePipeline(){return(0,w.Ey)({colorWrite:w.wE})}}M.shader=new b.$(S.S,(()=>r.e(9384).then(r.bind(r,59384))));var C=r(48163);class O extends a.Y{constructor(){super(...arguments),this.projScale=1}}class I extends O{constructor(){super(...arguments),this.intensity=1}}class R extends a.Y{}class N extends R{constructor(){super(...arguments),this.blurSize=(0,C.vt)()}}var P=r(15581);class L extends A.w{initializeProgram(e){return new E.B(e.rctx,L.shader.get().build(),y.D)}initializePipeline(){return(0,w.Ey)({colorWrite:w.wE})}}L.shader=new b.$(P.S,(()=>r.e(191).then(r.bind(r,90191))));var H=r(63907),D=r(21231),B=r(67171);const F=2;let z=class extends T{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,h.l5)(0),this._passParameters=new I,this._drawParameters=new N}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new B.R;t.wrapMode=H.pF.CLAMP_TO_EDGE,t.pixelFormat=H.Ab.RGB,t.wrapMode=H.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new D.g(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(L),this._blurTechnique=this.techniques.acquire(M),this.addHandles((0,u.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,h.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,d.WD)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),n=r?.getTexture(),o=r?.getTexture(H.nI),a=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/F),f=Math.round(d/F);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,h.l5)(performance.now()),this.requestRender(),a.acquire(u,f,"ssao",i.RED);0===this._enableTime&&(this._enableTime=(0,h.l5)(performance.now()));const m=this.renderingContext,v=this.view.qualitySettings.fadeDuration,g=s.relativeElevation,x=(0,c.qE)((5e5-g)/2e5,0,1),T=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,b=T*x;this._passParameters.normalTexture=n,this._passParameters.depthTexture=o,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*V/(0,P.g)(s)**6*b;const A=a.acquire(l,d,"ssao input",i.RG);m.bindFramebuffer(A.fbo),m.setViewport(0,0,l,d),m.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),m.screen.draw();const y=a.acquire(u,f,"ssao blur",i.RED);m.bindFramebuffer(y.fbo),this._drawParameters.colorTexture=A.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,0,F/d),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,u,f),m.screen.draw(),A.release();const E=a.acquire(u,f,"ssao",i.RED);return m.bindFramebuffer(E.fbo),m.setViewport(0,0,l,d),m.setClearColor(1,1,1,0),m.clear(H.NV.COLOR),this._drawParameters.colorTexture=y.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,F/l,0),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,u,f),m.screen.draw(),m.setViewport4fv(s.fullViewport),y.release(),T<1&&this.requestRender(_.C7.UPDATE),E}};(0,l._)([(0,f.MZ)()],z.prototype,"consumes",void 0),(0,l._)([(0,f.MZ)()],z.prototype,"produces",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],z.prototype,"techniques",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],z.prototype,"isEnabled",void 0),z=(0,l._)([(0,m.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],z);const V=.5;function G(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new s.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/F),r.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},8881:(e,t,r)=>{r.d(t,{kA:()=>w,a8:()=>E,eU:()=>S});var i=r(21818),n=r(38954),o=r(51850),a=r(87317),s=r(91829),l=r(59469),c=r(33079),d=r(71988),u=r(2597);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==l.A9.Normal&&t.pbrMode!==l.A9.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,o.vt)(),m=(0,s.vt)();var p=r(3452),v=r(98619),g=r(22393),_=r(89786),x=r(39589),T=r(46263);class b extends x.n{constructor(e,t){super(e,"bool",T.c.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}var A=r(20304);r(34727),(0,o.vt)();const y=.4;function E(e){e.constants.add("ambientBoostFactor","float",y)}function S(e){e.uniforms.add(new A.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function w(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==l.A9.Disabled&&e.include(g.c,t),e.include(h,t),e.include(_.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),E(r),S(r),(0,v.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(v.qU),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new A.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
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
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:e.include(v.qU),r.code.add(u.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,i.Xb)(t.pbrMode);case l.A9.COUNT:}}(0,o.vt)()},98619:(e,t,r)=>{r.d(t,{Gc:()=>o,O4:()=>a,qU:()=>s});var i=r(33079),n=r(2597);function o(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},51343:(e,t,r)=>{r.d(t,{Q:()=>a});var i=r(52540),n=r(2597),o=r(63761);function a(e,t){if(!t.multipassEnabled)return void e.fragment.code.add(n.H`#define terrainDepthTest(fragmentDepth) {}`);e.fragment.include(i.E);const r=t.occlusionPass;e.fragment.uniforms.add(new o.N("terrainDepthTexture",((e,t)=>t.multipassTerrain.depth?.attachment))).code.add(n.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?n.H`return fragmentDepth < linearDepth && depth < 1.0;`:n.H`if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth) discard;`}
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
}`))}},59469:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>h});var i,n,o=r(99208),a=r(40710),s=r(33079),l=r(2597),c=r(15976),d=r(63761),u=r(46263);function h(e,t){const r=t.pbrMode,n=e.fragment;if(r!==i.Schematic&&r!==i.Disabled&&r!==i.Normal)return void n.code.add(l.H`void applyPBRFactors() {}`);if(r===i.Disabled)return void n.code.add(l.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===i.Schematic)return void n.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:h,hasMetallicRoughnessTextureTransform:f,hasOcclusionTexture:m,hasOcclusionTextureTransform:p,bindType:v}=t;(h||m)&&e.include(o.r,t),n.code.add(l.H`vec3 mrr;
float occlusion;`),h&&n.uniforms.add(v===u.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),m&&n.uniforms.add(v===u.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new c.o("texOcclusion",(e=>e.textureOcclusion))),n.uniforms.add(v===u.c.Pass?new s.t("mrrFactors",(e=>e.mrrFactors)):new a.W("mrrFactors",(e=>e.mrrFactors))),n.code.add(l.H`
    ${(0,l.If)(h,l.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;

            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,l.If)(m,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
        return ${m?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,l.If)(h,`applyMetallicRoughness(${f?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,l.If)(m,`applyOcclusion(${p?"occlusionUV":"vuv0"});`)}
    }
  `)}r(25634),(n=i||(i={}))[n.Disabled=0]="Disabled",n[n.Normal=1]="Normal",n[n.Schematic=2]="Schematic",n[n.Water=3]="Water",n[n.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",n[n.Simplified=5]="Simplified",n[n.TerrainWithWater=6]="TerrainWithWater",n[n.COUNT=7]="COUNT"},89786:(e,t,r)=>{function i(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}r.d(t,{p:()=>i})},25618:(e,t,r)=>{r.d(t,{Bz:()=>f,G:()=>h}),r(9093),r(51850);var i=r(80730),n=r(71988),o=r(93588),a=r(2597),s=r(39589),l=r(46263);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var u=r(63761);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new o.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
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
}`)}a.Y,a.Y},51406:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var i=r(29242),n=r(53466),o=r(2597),a=r(35644);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.zK))).code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK))).code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.zK))).code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.zK))).code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.zK))).code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){}`)}},986:(e,t,r)=>{r.d(t,{A:()=>A});var i=r(33079),n=r(39589),o=r(46263);class a extends n.n{constructor(e,t,r){super(e,"vec4",o.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.n{constructor(e,t,r){super(e,"float",o.c.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var l=r(2597),c=r(35644),d=r(46540),u=(r(44208),r(34727),r(77690),r(29242),r(58083),r(9093)),h=(r(38954),r(51850)),f=(r(31756),r(90237)),m=r(69622),p=r(10107),v=(r(53966),r(87811),r(40608));let g=class extends m.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var _,x,T;(0,f._)([(0,p.MZ)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"SHOW_POI",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,f._)([(0,p.MZ)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,f._)([(0,v.$)("esri.views.3d.support.debugFlags")],g),new g,(T=_||(_={}))[T.Undefined=0]="Undefined",T[T.DefinedSize=1]="DefinedSize",T[T.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={})),l.Y,(0,u.vt)(),(0,h.vt)(),(0,u.vt)(),r(14903);const b=8;function A(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",b),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),b),new a("vvColorColors",(e=>e.vvColor.colors),b)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},35093:(e,t,r)=>{r.d(t,{Q:()=>i});const i=1/256},34845:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(37585),n=r(48163),o=r(87317),a=r(91829),s=r(47286),l=r(71988),c=r(2597);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,o.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.hZ)(h,0,1):(0,i.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
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
}`)}},11955:(e,t,r)=>{r.d(t,{S:()=>l});var i=r(35093),n=r(39589);r(46263),n.n;var o=r(20304),a=r(2597),s=r(89192);function l(e,t){!function(e,t,r){const n=e.fragment;switch(t.alphaDiscardMode){case s.sf.Blend:e.fragment.code.add(a.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(i.Q)}) { discard; } }
      `);break;case s.sf.Opaque:n.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.sf.Mask:n.uniforms.add(r).code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.sf.MaskBlend:n.uniforms.add(r).code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new o.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},26425:(e,t,r)=>{r.d(t,{u:()=>n});var i=r(2597);function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},27950:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(66104),n=r(63365),o=r(2597);function a(e){e.include(n.a),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
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
      // workaround for artifacts in OSX using Intel Iris Pro
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
}`)}},26835:(e,t,r)=>{r(2597)},20693:(e,t,r)=>{r.d(t,{yu:()=>f,NB:()=>m,S7:()=>g});var i=r(58083),n=r(9093),o=r(38954),a=r(51850),s=r(40710),l=r(33079),c=(r(20304),r(39589)),d=r(46263);class u extends c.n{constructor(e,t){super(e,"mat4",d.c.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var h=r(40095);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new h.X("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const p=(0,n.vt)(),v=(0,a.vt)();function g(e){e.uniforms.add(new h.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},68259:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},47286:(e,t,r)=>{r.d(t,{G:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},40710:(e,t,r)=>{r.d(t,{W:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec3",n.c.Draw,((r,i,n,o)=>r.setUniform3fv(e,t(i,n,o))))}}},33079:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec3",n.c.Pass,((r,i,n)=>r.setUniform3fv(e,t(i,n))))}}},71988:(e,t,r)=>{r.d(t,{E:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"vec4",n.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},20304:(e,t,r)=>{r.d(t,{m:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"float",n.c.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}}},93588:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"int",n.c.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},98353:(e,t,r)=>{r.d(t,{h:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"mat3",n.c.Draw,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},35644:(e,t,r)=>{r.d(t,{k:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"mat3",n.c.Pass,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},40095:(e,t,r)=>{r.d(t,{X:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"mat4",n.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}},85977:(e,t,r)=>{r.d(t,{N5:()=>l});var i=r(49186),n=(r(44208),r(53966)),o=r(46263),a=r(620);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class l extends s{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new f,this.varyings=new m,this.extensions=new p,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s=n.main.generateSource(),l="vertex"===e?x:_,c=n.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${l}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${d.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,o,t,n)}}}class c{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else n.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new i.A("Shader does not contain main function body.")}}class u{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class h extends s{constructor(){super(...arguments),this.uniforms=new c(this),this.main=new d(this),this.code=new u(this),this.constants=new g(this)}get builder(){return this}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},15976:(e,t,r)=>{r.d(t,{o:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Draw,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},63761:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(39589),n=r(46263);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},39589:(e,t,r)=>{r.d(t,{n:()=>n});var i=r(46263);class n{constructor(e,t,r,n,o=null){if(this.name=e,this.type=t,this.arraySize=o,this.bind={[i.c.Pass]:null,[i.c.Draw]:null},n)switch(r){case i.c.Pass:this.bind[i.c.Pass]=n;break;case i.c.Draw:this.bind[i.c.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},2597:(e,t,r)=>{r.d(t,{H:()=>n,If:()=>o,Y:()=>i});const i=class{};function n(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function o(e,t,r=""){return e?t:r}var a;(a=n||(n={})).int=function(e){return Math.round(e).toString()},a.float=function(e){return e.toPrecision(8)}},97220:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},84867:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(97768),n=r(63907);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.WD)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.WR.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},99769:(e,t,r)=>{r.d(t,{K:()=>o,W:()=>a});var i=r(49186),n=r(2597);class o extends n.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function a(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const n=t._parameterNames.length-1,o=e.count||2,a=Math.ceil(Math.log2(o)),s=t._parameterBits??[0];let l=0;for(;s[l]+a>16;)l++,l>=s.length&&s.push(0);t._parameterBits=s;const c=s[l],d=(1<<a)-1<<c;s[l]+=a,Object.defineProperty(t,r,{get(){return this[n]},set(t){if(this[n]!==t)if(this[n]=t,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+t<<c&d,"number"==typeof t){if(null==e.count)throw new i.A(`Configuration value for ${r} must provide a count option`)}else if("boolean"!=typeof t)throw new i.A(`Configuration value for ${r} must be boolean or number, got ${typeof t}`)}})}}}},69720:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(24326);class n{constructor(){this.id=(0,i.c)()}}},96672:(e,t,r)=>{var i;r.d(t,{X:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},39341:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(46540);const n=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.CENTEROFFSETANDDISTANCE,5],[i.r.SYMBOLCOLOR,5],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.ROTATION,8],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},25634:(e,t,r)=>{r.d(t,{m8:()=>l});var i=r(97768),n=r(74887),o=r(2597),a=r(89192);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,t){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Am.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new d(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,n.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.Y{constructor(e=null){super(),this.textureEmissive=e}}class d extends c{constructor(e=null,t=null,r=null,i=null,n=null,o,a){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}}},14903:(e,t,r)=>{r.d(t,{im:()=>h,m$:()=>i});var i,n,o=r(51850),a=r(2597),s=r(89192),l=r(69720),c=r(96672),d=r(39341),u=r(13752);class h extends l.J{constructor(e,t){super(),this.type=c.X.Material,this.supportsEdges=!1,this._renderPriority=0,this._vertexAttributeLocations=d.D,this._pp0=(0,o.fA)(0,0,1),this._pp1=(0,o.fA)(0,0,0),this._parameters=new t,(0,u.MB)(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,u.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===s.ID.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}(n=i||(i={}))[n.None=0]="None",n[n.Occlude=1]="Occlude",n[n.Transparent=2]="Transparent",n[n.OccludeAndTransparent=4]="OccludeAndTransparent",n[n.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",n[n.Opaque=16]="Opaque",a.Y},34886:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(3694),n=r(94656);class o{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,n.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},14327:(e,t,r)=>{var i;r.d(t,{y:()=>i}),function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"}(i||(i={}))},89192:(e,t,r)=>{var i,n,o,a,s,l,c,d,u;r.d(t,{Am:()=>a,C7:()=>o,ID:()=>d,JS:()=>u,Mg:()=>l,dd:()=>s,it:()=>n,s2:()=>i,sf:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}))},61765:(e,t,r)=>{r.d(t,{T:()=>i});const i=2.1},13752:(e,t,r)=>{r.d(t,{Um:()=>Y,MB:()=>X,kE:()=>$});var i=r(4576),n=r(34727),o=(r(44208),r(53966)),a=r(4341),s=r(58083),l=r(9093),c=r(38954),d=r(51850),u=r(19419),h=r(88582),f=r(11964),m=r(240),p=r(71351),v=r(44280),g=r(32114);const _=()=>o.A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function x(e=B){return{plane:(0,m.vt)(e.plane),origin:(0,d.o8)(e.origin),basis1:(0,d.o8)(e.basis1),basis2:(0,d.o8)(e.basis2)}}function T(e,t=x()){return b(e.origin,e.basis1,e.basis2,t)}function b(e,t,r,i=x()){return(0,c.c)(i.origin,e),(0,c.c)(i.basis1,t),(0,c.c)(i.basis2,r),A(i),function(e,t){Math.abs((0,c.m)(e.basis1,e.basis2)/((0,c.l)(e.basis1)*(0,c.l)(e.basis2)))>1e-6&&_().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,c.m)(e.basis1,N(e)))>1e-6&&_().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,c.m)(N(e),e.origin)-e.plane[3])>1e-6&&_().warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function A(e){(0,m.mR)(e.basis2,e.basis1,e.origin,e.plane)}function y(e,t,r){e!==r&&T(e,r);const i=(0,c.j)(g.rq.get(),N(e),t);return(0,c.g)(r.origin,r.origin,i),r.plane[3]-=t,r}function E(e,t=x()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return(0,c.s)(t.origin,e[0]+r,e[1]+i,0),(0,c.s)(t.basis1,r,0,0),(0,c.s)(t.basis2,0,i,0),(0,m.fA)(0,0,1,0,t.plane),t}function S(e,t,r){return!!(0,m.Ui)(e.plane,t,r)&&P(e,r)}function w(e,t,r){const i=F.get();D(e,t,i,F.get());let o=Number.POSITIVE_INFINITY;for(const a of U){const s=H(e,a,z.get()),l=g.rq.get();if((0,m.T7)(i,s,l)){const e=(0,c.E)(g.rq.get(),t.origin,l),i=Math.abs((0,n.XM)((0,c.m)(t.direction,e)));i<o&&(o=i,(0,c.c)(r,l))}}return o===Number.POSITIVE_INFINITY?M(e,t,r):r}function M(e,t,r){if(S(e,t,r))return r;const i=F.get(),n=F.get();D(e,t,i,n);let o=Number.POSITIVE_INFINITY;for(const a of U){const s=H(e,a,z.get()),l=g.rq.get();if((0,m.gv)(i,s,l)){const e=(0,p.kb)(t,l);if(!(0,m.Tj)(n,l))continue;e<o&&(o=e,(0,c.c)(r,l))}}return I(e,t.origin)<o&&C(e,t.origin,r),r}function C(e,t,r){const i=(0,m._I)(e.plane,t,g.rq.get()),n=(0,f.H6)(L(e,e.basis1),i,-1,1,g.rq.get()),o=(0,f.H6)(L(e,e.basis2),i,-1,1,g.rq.get());return(0,c.f)(r,(0,c.g)(g.rq.get(),n,o),e.origin),r}function O(e,t,r){const{origin:i,basis1:n,basis2:o}=e,a=(0,c.f)(g.rq.get(),t,i),s=(0,v.gr)(n,a),l=(0,v.gr)(o,a),d=(0,v.gr)(N(e),a);return(0,c.s)(r,s,l,d)}function I(e,t){const r=O(e,t,g.rq.get()),{basis1:i,basis2:n}=e,o=(0,c.l)(i),a=(0,c.l)(n),s=Math.max(Math.abs(r[0])-o,0),l=Math.max(Math.abs(r[1])-a,0),d=r[2];return s*s+l*l+d*d}function R(e,t){const r=-e.plane[3];return(0,v.gr)(N(e),t)-r}function N(e){return(0,m.Qj)(e.plane)}function P(e,t){const r=(0,c.f)(g.rq.get(),t,e.origin),i=(0,c.q)(e.basis1),n=(0,c.q)(e.basis2),o=(0,c.m)(e.basis1,r),a=(0,c.m)(e.basis2,r);return-o-i<0&&o-i<0&&-a-n<0&&a-n<0}function L(e,t){const r=z.get();return(0,c.c)(r.origin,e.origin),(0,c.c)(r.vector,t),r}function H(e,t,r){const{basis1:i,basis2:n,origin:o}=e,a=(0,c.j)(g.rq.get(),i,t.origin[0]),s=(0,c.j)(g.rq.get(),n,t.origin[1]);(0,c.g)(r.origin,a,s),(0,c.g)(r.origin,r.origin,o);const l=(0,c.j)(g.rq.get(),i,t.direction[0]),d=(0,c.j)(g.rq.get(),n,t.direction[1]);return(0,c.j)(r.vector,(0,c.g)(l,l,d),2),r}function D(e,t,r,i){const n=N(e);(0,m.mR)(n,t.direction,t.origin,r),(0,m.mR)((0,m.Qj)(r),n,t.origin,i)}const B={plane:(0,m.vt)(),origin:(0,d.fA)(0,0,0),basis1:(0,d.fA)(1,0,0),basis2:(0,d.fA)(0,1,0)},F=new a.I(m.vt),z=new a.I(f.vt),V=(0,d.vt)(),G=new a.I((()=>x())),U=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],W=(0,l.vt)(),j=(0,l.vt)();Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=(0,m.vt)(),this.origin=(0,d.vt)(),this.basis1=(0,d.vt)(),this.basis2=(0,d.vt)()}},altitudeAt:R,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case h._.X:(0,c.c)(r,e.basis1),(0,c.n)(r,r);break;case h._.Y:(0,c.c)(r,e.basis2),(0,c.n)(r,r);break;case h._.Z:(0,c.c)(r,N(e))}return r}(e,r,i)},cameraFrustumCoverage:function(e,t){return(t-e)/t},closestPoint:M,closestPointOnSilhouette:w,copy:T,copyWithoutVerify:function(e,t){(0,c.c)(t.origin,e.origin),(0,c.c)(t.basis1,e.basis1),(0,c.c)(t.basis2,e.basis2),(0,m.C)(t.plane,e.plane)},create:x,distance:function(e,t){return Math.sqrt(I(e,t))},distance2:I,distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of U){const n=H(e,i,z.get()),o=(0,f.kb)(n,t);o>r&&(r=o)}return Math.sqrt(r)},elevate:y,equals:function(e,t){return(0,c.e)(e.basis1,t.basis1)&&(0,c.e)(e.basis2,t.basis2)&&(0,c.e)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,m.Tj)(e.plane,t)&&P(e,t)},fromAABoundingRect:E,fromValues:b,getExtent:function(e,t){const r=e.basis1[0],i=e.basis2[1],[n,o]=e.origin;return(0,u.fA)(n-r,o-i,n+i,o+i,t)},intersectRay:S,intersectRayClosestSilhouette:function(e,t,r){if(S(e,t,r))return r;const i=w(e,t,g.rq.get());return(0,c.g)(r,t.origin,(0,c.j)(g.rq.get(),t.direction,(0,c.p)(t.origin,i)/(0,c.l)(t.direction))),r},normal:N,projectPoint:C,projectPointLocal:O,rotate:function(e,t,r,i){return e!==i&&T(e,i),(0,s.$0)(j,t,r),(0,c.h)(i.basis1,e.basis1,j),(0,c.h)(i.basis2,e.basis2,j),A(i),i},setAltitudeAt:function(e,t,r,i){const n=R(e,t),o=(0,c.j)(V,N(e),r-n);return(0,c.g)(i,t,o),i},setExtent:function(e,t,r){return E(t,r),y(r,R(e,e.origin),r),r},transform:function(e,t,r){return e!==r&&T(e,r),(0,s.B8)(W,t),(0,s.mg)(W,W),(0,c.h)(r.basis1,e.basis1,W),(0,c.h)(r.basis2,e.basis2,W),(0,c.h)((0,m.Qj)(r.plane),(0,m.Qj)(e.plane),W),(0,c.h)(r.origin,e.origin,t),(0,m.mP)(r.plane,r.plane,r.origin),r},up:B,updateUnboundedPlane:A,wrap:function(e,t,r){const i=G.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=(0,m.LV)(0,0,0,0),A(i),i}},Symbol.toStringTag,{value:"Module"}));var q=r(76412);r(24151),(0,n.kU)(10),(0,n.kU)(12),(0,n.kU)(70),(0,n.kU)(40);const k={scale:0,factor:0,minScaleFactor:0};function $(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;null!=o&&(a=function(e,t,r,i){return function(e,t){return(0,n.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}(e,function(e,t,r){const i=r.parameters;return k.scale=Math.min(i.divisor/(t-i.offset),1),k.factor=function(e){return Math.abs(e*e*e)}(e),k}(t,r,i))}(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.qE)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function X(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?Array.isArray(e[n])&&(0,i.aI)(o,e[n])||(e[n]=o.slice(),r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}(0,q.c)();const Y={multiply:1,ignore:2,replace:3,tint:4}},60517:(e,t,r)=>{r.d(t,{z:()=>d});var i=r(49255),n=r(22911),o=r(76662),a=r(35093),s=r(63365),l=r(2597),c=r(14327);function d(e,t){e.include(o.Q,t),e.include(n.NL,t),e.fragment.include(s.a);const r=t.output===i.V.ObjectAndLayerIdColor,d=t.output===i.V.ColorEmission,u=(t.output===i.V.Color||d)&&t.transparencyPassType===c.y.ColorAlpha,h=(t.output===i.V.Color||d)&&t.transparencyPassType!==c.y.ColorAlpha,f=t.discardInvisibleFragments;let m=0;(h||d||u)&&e.outputs.add("fragColor","vec4",m++),d&&e.outputs.add("fragEmission","vec4",m++),u&&e.outputs.add("fragAlpha","float",m++),e.fragment.code.add(l.H`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,l.If)(r,l.H`finalColor.a = 1.0;`)}

      ${(0,l.If)(f,l.H`if (finalColor.a < ${l.H.float(a.Q)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,l.If)(u,l.H`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,l.If)(h,"fragColor = finalColor;")}
      ${(0,l.If)(d,"fragEmission = getEmissions();")}
      outputHighlight();
      ${(0,l.If)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}},28449:(e,t,r)=>{function i(e,t){const r=e.length;for(let i=0;i<r;++i)o[0]=e[i],t[i]=o[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)o[0]=e[i],o[1]=e[i]-o[0],t[i]=o[1];return t}r.d(t,{Zo:()=>i,jA:()=>n});const o=new Float32Array(2)},90644:(e,t,r)=>{r.d(t,{Ey:()=>T,Xt:()=>l,kn:()=>c,p3:()=>o,wE:()=>d});var i=r(89192),n=r(63907);function o(e,t,r,i,o=n.Tb.ADD,a=n.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const a={face:n.Y7.BACK,mode:n.Ac.CCW},s={face:n.Y7.FRONT,mode:n.Ac.CCW},l=e=>e===i.s2.Back?a:e===i.s2.Front?s:null,c={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function u(e){return y.intern(e)}function h(e){return S.intern(e)}function f(e){return M.intern(e)}function m(e){return O.intern(e)}function p(e){return R.intern(e)}function v(e){return P.intern(e)}function g(e){return H.intern(e)}function _(e){return B.intern(e)}function x(e){return z.intern(e)}function T(e){return G.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function A(e){return"["+e.join(",")+"]"}const y=new b(E,(e=>({__tag:"Blending",...e})));function E(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const S=new b(w,(e=>({__tag:"Culling",...e})));function w(e){return e?A([e.face,e.mode]):null}const M=new b(C,(e=>({__tag:"PolygonOffset",...e})));function C(e){return e?A([e.factor,e.units]):null}const O=new b(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?A([e.func]):null}const R=new b(N,(e=>({__tag:"StencilTest",...e})));function N(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const P=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?A([e.r,e.g,e.b,e.a]):null}const B=new b(F,(e=>({__tag:"StencilWrite",...e})));function F(e){return e?A([e.mask]):null}const z=new b(V,(e=>({__tag:"DrawBuffers",...e})));function V(e){return e?A(e.buffers):null}const G=new b((function(e){return e?A([E(e.blending),w(e.culling),C(e.polygonOffset),I(e.depthTest),N(e.stencilTest),L(e.depthWrite),D(e.colorWrite),F(e.stencilWrite),V(e.drawBuffers)]):null}),(e=>({blending:u(e.blending),culling:h(e.culling),polygonOffset:f(e.polygonOffset),depthTest:m(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:v(e.depthWrite),colorWrite:g(e.colorWrite),stencilWrite:_(e.stencilWrite),drawBuffers:x(e.drawBuffers)})))}}]);