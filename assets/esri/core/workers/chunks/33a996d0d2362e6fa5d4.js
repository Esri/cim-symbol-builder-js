"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5916],{28491:(e,t,r)=>{r.d(t,{D:()=>D,b:()=>V});var o=r(46686),n=r(32680),i=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),f=r(92700),m=r(72824),p=r(35640),v=r(40261),g=r(77695),x=r(3452),b=r(74081),y=r(98619),M=r(51343),T=r(62602),w=r(22393),S=r(59469),_=r(25618),C=r(51406),A=r(42398),O=r(35093),I=r(11955),E=r(27950),R=r(20693),P=r(33079),N=r(71988),B=r(20304),H=r(2597),L=r(85977),z=r(63761),F=r(46540),G=r(60517);function V(e){const t=new L.N5,{vertex:r,fragment:V,varyings:D}=t,{output:j,normalType:W,offsetBackfaces:U,instancedColor:q,spherical:k,receiveShadows:Y,snowCover:$,pbrMode:Z}=e,{multipassEnabled:X,textureAlphaPremultiplied:J,instancedDoublePrecision:K,hasVertexColors:Q,hasVertexTangents:ee}=e,{hasColorTexture:te,hasNormalTexture:re,hasNormalTextureTransform:oe,hasColorTextureTransform:ne}=e;if((0,R.NB)(r,e),t.include(d.I),D.add("vpos","vec3"),t.include(A.A,e),t.include(l.BK,e),t.include(p.G,e),t.include(C.q2,e),!(0,i.RN)(j))return t.include(v.E,e),t;t.include(C.Sx,e),t.include(C.MU,e),t.include(C.O1,e),t.include(C.QM,e),(0,R.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const ie=W===c.W.Attribute||W===c.W.Compressed;return ie&&U&&t.include(n.M),t.include(g.W,e),t.include(m.Mh,e),q&&t.attributes.add(F.r.INSTANCECOLOR,"vec4"),D.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(o.oD,e),t.include(u.K,e),t.include(f.c,e),r.uniforms.add(new N.E("externalColor",(e=>e.externalColor))),D.add("vcolorExt","vec4"),X&&D.add("depth","float"),r.main.add(H.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,H.If)(q,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${H.H.float(O.Q)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        vPositionLocal = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        ${(0,H.If)(ie,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
        vpos = addVerticalOffset(vpos, localOrigin);
        ${(0,H.If)(ee,"vTangent = dpTransformVertexTangent(tangent);")}
        gl_Position = transformPosition(proj, view, vpos);
        ${ie&&U?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
      }

      ${(0,H.If)(X,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();
      forwardColorUV();
      forwardNormalUV();
      forwardEmissiveUV();
      forwardOcclusionUV();
      forwardMetallicRoughnessUV();`),t.include(b.kA,e),t.include(x.n,e),t.include(I.S,e),t.include(K?_.G:_.Bz,e),t.include(M.Q,e),t.include(a.HQ,e),t.include(G.z,e),(0,R.yu)(V,e),V.uniforms.add(r.uniforms.get("localOrigin"),new P.t("ambient",(e=>e.ambient)),new P.t("diffuse",(e=>e.diffuse)),new B.m("opacity",(e=>e.opacity)),new B.m("layerOpacity",(e=>e.layerOpacity))),te&&V.uniforms.add(new z.N("tex",(e=>e.texture))),t.include(S._Z,e),t.include(w.c,e),V.include(E.N),t.include(T.r,e),(0,b.a8)(V),(0,b.eU)(V),(0,y.O4)(V),V.main.add(H.H`
      discardBySlice(vpos);
      ${(0,H.If)(X,"terrainDepthTest(depth);")}
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
      float shadow = ${Y?"readShadowMap(vpos, linearDepth)":(0,H.If)(k,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,H.If)(Q,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,H.If)(Q,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${re?`mat3 tangentSpace = computeTangentSpace(${ee?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${oe?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${k?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,H.If)($,H.H`
              float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
              albedo = mix(albedo, vec3(1), snow);
              shadingNormal = mix(shadingNormal, normal, snow);
              ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${Z===S.A9.Normal||Z===S.A9.Schematic?H.H`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,H.If)($,H.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${$?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const D=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},57323:(e,t,r)=>{r.d(t,{R:()=>z,b:()=>L});var o=r(46686),n=r(32680),i=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),f=r(92700),m=r(35640),p=r(40261),v=r(3452),g=r(74081),x=r(98619),b=r(51343),y=r(22393),M=r(59469),T=r(25618),w=r(42398),S=r(35093),_=r(11955),C=r(27950),A=r(20693),O=r(33079),I=r(71988),E=r(20304),R=r(2597),P=r(85977),N=r(63761),B=r(46540),H=r(60517);function L(e){const t=new P.N5,{vertex:r,fragment:L,varyings:z}=t,{output:F,offsetBackfaces:G,instancedColor:V,multipassEnabled:D,pbrMode:j,snowCover:W,spherical:U}=e,q=j===M.A9.Normal||j===M.A9.Schematic;if((0,A.NB)(r,e),t.include(d.I),z.add("vpos","vec3"),t.include(w.A,e),t.include(l.BK,e),t.include(m.G,e),F===i.V.Color&&((0,A.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),G&&t.include(n.M),V&&t.attributes.add(B.r.INSTANCECOLOR,"vec4"),z.add("vNormalWorld","vec3"),z.add("localvpos","vec3"),D&&z.add("depth","float"),t.include(h.U,e),t.include(o.oD,e),t.include(u.K,e),t.include(f.c,e),r.uniforms.add(new I.E("externalColor",(e=>e.externalColor))),z.add("vcolorExt","vec4"),r.main.add(R.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,R.If)(V,"vcolorExt *= instanceColor * 0.003921568627451;")}
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
        ${(0,R.If)(G,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,R.If)(D,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),F===i.V.Color){const{hasColorTexture:o,hasColorTextureTransform:n,receiveShadows:i}=e;t.include(g.kA,e),t.include(v.n,e),t.include(_.S,e),t.include(e.instancedDoublePrecision?T.G:T.Bz,e),t.include(b.Q,e),t.include(a.HQ,e),t.include(H.z,e),(0,A.yu)(t.fragment,e),(0,x.Gc)(L),(0,g.a8)(L),(0,g.eU)(L),L.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new O.t("ambient",(e=>e.ambient)),new O.t("diffuse",(e=>e.diffuse)),new E.m("opacity",(e=>e.opacity)),new E.m("layerOpacity",(e=>e.layerOpacity))),o&&L.uniforms.add(new N.N("tex",(e=>e.texture))),t.include(M._Z,e),t.include(y.c,e),L.include(C.N),(0,x.O4)(L),L.main.add(R.H`
      discardBySlice(vpos);
      ${(0,R.If)(D,"terrainDepthTest(depth);")}
      vec4 texColor = ${o?`texture(tex, ${n?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,R.If)(o,`${(0,R.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"readShadowMap(vpos, linearDepth)":U?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
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
      ${(0,R.If)(q,`vec3 normalGround = ${U?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${q?R.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,R.If)(W,R.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${W?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.E,e),t}const z=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:"Module"}))},15581:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m,g:()=>p});var o=r(37585),n=r(48163),i=r(82048),a=r(52540),s=r(34845),l=r(47286),c=r(20304),d=r(2597),u=r(85977),h=r(63761);const f=16;function m(){const e=new u.N5,t=e.fragment;return e.include(i.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
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
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,o.hZ)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,o.hZ)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(d.H`
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

      fragOcclusion = A;`),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},95774:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>f});var o=r(38954),n=r(82048),i=r(52540),a=r(68259),s=r(20304),l=r(2597),c=r(85977),d=r(15976),u=r(63761);const h=4;function f(){const e=new c.N5,t=e.fragment;e.include(n.c);const r=(h+1)/2,f=1/(2*r*r);return t.include(i.E),t.uniforms.add(new u.N("depthMap",(e=>e.depthTexture)),new d.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new s.m("projScale",((e,t)=>{const r=(0,o.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(l.H`
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
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},97937:(e,t,r)=>{r.d(t,{c:()=>v,d:()=>b,f:()=>T,g:()=>M,h:()=>y,k:()=>A,o:()=>B}),r(44208),r(53966);var o=r(34727),n=r(58083),i=r(38954),a=r(51850),s=r(87317),l=r(91829),c=r(34304),d=r(88582),u=r(71351);function h(e,t){const r=(0,i.m)(e),n=(0,o.YN)(e[2]/r),a=Math.atan2(e[1]/r,e[0]/r);return(0,i.a)(t,r,n,a),t}var f=r(44280),m=r(32114);const p=v();function v(){return(0,l.vt)()}const g=s.e,x=s.e;function b(e,t){return(0,s.c)(t,e)}function y(e){return e[3]}function M(e){return e}function T(e,t,r,o){return(0,l.fA)(e,t,r,o)}function w(e,t,r){if(null==t)return!1;if(!_(e,t,S))return!1;let{t0:o,t1:n}=S;if((o<0||n<o&&n>0)&&(o=n),o<0)return!1;if(r){const{origin:e,direction:n}=t;r[0]=e[0]+n[0]*o,r[1]=e[1]+n[1]*o,r[2]=e[2]+n[2]*o}return!0}const S={t0:0,t1:0};function _(e,t,r){const{origin:o,direction:n}=t,i=C;i[0]=o[0]-e[0],i[1]=o[1]-e[1],i[2]=o[2]-e[2];const a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===a)return!1;const s=2*(n[0]*i[0]+n[1]*i[1]+n[2]*i[2]),l=s*s-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);return r.t0=(-s-c)/(2*a),r.t1=(-s+c)/(2*a),!0}const C=(0,a.vt)();function A(e,t){return w(e,t,null)}function O(e,t,r){const o=m.rq.get(),a=m.Rc.get();(0,i.b)(o,t.origin,t.direction);const s=y(e);(0,i.b)(r,o,t.origin),(0,i.j)(r,r,1/(0,i.m)(r)*s);const l=E(e,t.origin),c=(0,f.g7)(t.origin,r);return(0,n.$0)(a,c+l,o),(0,i.h)(r,r,a),r}function I(e,t,r){const o=(0,i.f)(m.rq.get(),t,e),n=(0,i.j)(m.rq.get(),o,e[3]/(0,i.m)(o));return(0,i.g)(r,n,e)}function E(e,t){const r=(0,i.f)(m.rq.get(),t,e),n=(0,i.m)(r),a=y(e),s=a+Math.abs(a-n);return(0,o.XM)(a/s)}const R=(0,a.vt)();function P(e,t,r,o){const n=(0,i.f)(R,t,e);switch(r){case d._.X:{const e=h(n,R)[2];return(0,i.a)(o,-Math.sin(e),Math.cos(e),0)}case d._.Y:{const e=h(n,R),t=e[1],r=e[2],a=Math.sin(t);return(0,i.a)(o,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case d._.Z:return(0,i.n)(o,n);default:return}}function N(e,t){const r=(0,i.f)(H,t,e);return(0,i.m)(r)-e[3]}function B(e,t){const r=(0,i.s)(e,t),o=y(e);return r<=o*o}const H=(0,a.vt)(),L=v();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:p,altitudeAt:N,angleToSilhouette:E,axisAt:P,cameraFrustumCoverage:function(e,t,r,o){const n=y(e),i=n*n,a=t+.5*Math.PI,s=r*r+i-2*Math.cos(a)*r*n,l=Math.sqrt(s),c=s-i;if(c<=0)return.5;const d=Math.sqrt(c),u=Math.acos(d/l)-Math.asin(n/(l/Math.sin(a)));return Math.min(1,(u+.5*o)/o)},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return w(e,t,r)?r:((0,u.oC)(t,e,r),I(e,r,r))},closestPointOnSilhouette:O,containsPoint:B,copy:b,create:v,distanceToSilhouette:function(e,t){const r=(0,i.f)(m.rq.get(),t,e),o=(0,i.q)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(o-n))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:x,exactEquals:g,fromCenterAndRadius:function(e,t){return(0,l.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:T,getCenter:M,getExtent:function(e,t){return t},getRadius:y,intersectLine:function(e,t,r){const o=(0,u.Cr)(t,r);if(!_(e,o,S))return[];const{origin:n,direction:s}=o,{t0:l,t1:d}=S,h=t=>{const r=(0,a.vt)();return(0,i.r)(r,n,s,t),I(e,r,r)};return Math.abs(l-d)<(0,c.FD)()?[h(l)]:[h(l),h(d)]},intersectRay:w,intersectRayClosestSilhouette:function(e,t,r){if(w(e,t,r))return r;const o=O(e,t,m.rq.get());return(0,i.g)(r,t.origin,(0,i.j)(m.rq.get(),t.direction,(0,i.p)(t.origin,o)/(0,i.m)(t.direction))),r},intersectsRay:A,projectPoint:I,setAltitudeAt:function(e,t,r,o){const n=N(e,t),a=P(e,t,d._.Z,H),s=(0,i.j)(H,a,r-n);return(0,i.g)(o,t,s)},setExtent:function(e,t,r){return e!==r&&b(e,r),r},tmpSphere:L,union:function(e,t,r=(0,l.vt)()){const o=(0,i.p)(e,t),n=e[3],a=t[3];return o+a<n?((0,s.c)(r,e),r):o+n<a?((0,s.c)(r,t),r):((0,i.o)(r,e,t,(o+a-n)/(2*o)),r[3]=(o+n+a)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},43609:(e,t,r)=>{r.d(t,{a:()=>i,f:()=>a,n:()=>n});var o=r(34275);function n(e,t){i(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r=2,n=r){const i=t.length/2;let a=0,s=0;if((0,o.cy)(t)||(0,o.dk)(t)){for(let o=0;o<i;++o)e[a]=t[s],e[a+1]=t[s+1],a+=r,s+=n;return}const l=(0,o.a3)(t);if((0,o.JI)(t))for(let o=0;o<i;++o)e[a]=Math.max(t[s]/l,-1),e[a+1]=Math.max(t[s+1]/l,-1),a+=r,s+=n;else for(let o=0;o<i;++o)e[a]=t[s]/l,e[a+1]=t[s+1]/l,a+=r,s+=n}function a(e,t,r,o){const n=e.typedBuffer,i=e.typedBufferStride,a=o?.count??e.count;let s=(o?.dstIndex??0)*i;for(let e=0;e<a;++e)n[s]=t,n[s+1]=r,s+=i}Object.freeze(Object.defineProperty({__proto__:null,fill:a,normalizeIntegerBuffer:i,normalizeIntegerBufferView:n},Symbol.toStringTag,{value:"Module"}))},73354:(e,t,r)=>{function o(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return e;const i=e.length/o,a=r[0],s=r[1],l=r[2],c=r[4],d=r[5],u=r[6],h=r[8],f=r[9],m=r[10],p=r[12],v=r[13],g=r[14];let x=0,b=0;for(let r=0;r<i;r++){const r=t[x],i=t[x+1],y=t[x+2];e[b]=a*r+c*i+h*y+p,e[b+1]=s*r+d*i+f*y+v,e[b+2]=l*r+u*i+m*y+g,x+=n,b+=o}return e}function i(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return;const i=e.length/o,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8];let p=0,v=0;for(let r=0;r<i;r++){const r=t[p],i=t[p+1],g=t[p+2];e[v]=a*r+c*i+h*g,e[v+1]=s*r+d*i+f*g,e[v+2]=l*r+u*i+m*g,p+=n,v+=o}}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,o=3,n=o){const i=Math.min(e.length/o,t.length/n);let a=0,s=0;for(let l=0;l<i;l++)e[s]=r*t[a],e[s+1]=r*t[a+1],e[s+2]=r*t[a+2],a+=n,s+=o;return e}function c(e,t,r,o=3,n=o){const i=e.length/o;if(i!==Math.ceil(t.length/n))return e;let a=0,s=0;for(let l=0;l<i;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=n,s+=o;return e}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r=3,o=r){const n=Math.min(e.length/r,t.length/o);let i=0,a=0;for(let s=0;s<n;s++){const n=t[i],s=t[i+1],l=t[i+2],c=n*n+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*n,e[a+1]=t*s,e[a+2]=t*l}i+=o,a+=r}}r.d(t,{a:()=>n,b:()=>c,c:()=>i,d:()=>o,e:()=>d,f:()=>l,n:()=>u,s:()=>s,t:()=>a}),r(44208),r(53966),Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:l,scaleView:s,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),n=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<o;e++)n[c]=a[l]>>r,n[c+1]=a[l+1]>>r,n[c+2]=a[l+2]>>r,l+=s,c+=i},transformMat3:a,transformMat3View:i,transformMat4:n,transformMat4View:o,translate:c},Symbol.toStringTag,{value:"Module"}))},51737:(e,t,r)=>{function o(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r=3,o=r){const n=t.length/o;let i=0,a=0;for(let s=0;s<n;++s)e[i]=t[a],e[i+1]=t[a+1],e[i+2]=t[a+2],i+=r,a+=o}function i(e,t,r,o,n){const i=e.typedBuffer,a=e.typedBufferStride,s=n?.count??e.count;let l=(n?.dstIndex??0)*a;for(let e=0;e<s;++e)i[l]=t,i[l+1]=r,i[l+2]=o,l+=a}r.d(t,{a:()=>o,c:()=>n,f:()=>i}),Object.freeze(Object.defineProperty({__proto__:null,copy:n,copyView:o,fill:i},Symbol.toStringTag,{value:"Module"}))},65686:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>l,n:()=>a,s:()=>s,t:()=>i}),r(44208);var o=r(53966);function n(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r,o=4,n=o){if(e.length/o!=t.length/n)return;const i=e.length/o,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8];let p=0,v=0;for(let r=0;r<i;r++){const r=t[p],i=t[p+1],g=t[p+2],x=t[p+3];e[v]=a*r+c*i+h*g,e[v+1]=s*r+d*i+f*g,e[v+2]=l*r+u*i+m*g,e[v+3]=x,p+=n,v+=o}}function a(e,t){const r=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*n,r=e*a,s=i[r],l=i[r+1],c=i[r+2],d=s*s+l*l+c*c;if(d>0){const e=1/Math.sqrt(d);o[t]=e*s,o[t+1]=e*l,o[t+2]=e*c}}}function s(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r,o=4){const n=Math.min(e.length/o,t.count),i=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<n;t++)e[l]=r*i[s],e[l+1]=r*i[s+1],e[l+2]=r*i[s+2],e[l+3]=r*i[s+3],s+=a,l+=o}Object.freeze(Object.defineProperty({__proto__:null,normalize:a,scale:l,scaleView:s,transformMat3:i,transformMat3View:n,transformMat4:function(e,t,r,n=4,i=n){if(e.length/n!=t.length/i)return void o.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const a=e.length/n,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],f=r[6],m=r[7],p=r[8],v=r[9],g=r[10],x=r[11],b=r[12],y=r[13],M=r[14],T=r[15];let w=0,S=0;for(let r=0;r<a;r++){const r=t[w],o=t[w+1],a=t[w+2],_=t[w+3];e[S]=s*r+u*o+p*a+b*_,e[S+1]=l*r+h*o+v*a+y*_,e[S+2]=c*r+f*o+g*a+M*_,e[S+3]=d*r+m*o+x*a+T*_,w+=i,S+=n}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const o=e.count,n=r[0],i=r[1],a=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],h=r[8],f=r[9],m=r[10],p=r[11],v=r[12],g=r[13],x=r[14],b=r[15],y=e.typedBuffer,M=e.typedBufferStride,T=t.typedBuffer,w=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*M,r=e*w,o=T[r],S=T[r+1],_=T[r+2],C=T[r+3];y[t]=n*o+l*S+h*_+v*C,y[t+1]=i*o+c*S+f*_+g*C,y[t+2]=a*o+d*S+m*_+x*C,y[t+3]=s*o+u*S+p*_+b*C}}},Symbol.toStringTag,{value:"Module"}))},78358:(e,t,r)=>{function o(e,t){n(e.typedBuffer,t,e.typedBufferStride)}function n(e,t,r=4){const o=t.typedBuffer,n=t.typedBufferStride,i=t.count;let a=0,s=0;for(let t=0;t<i;++t)e[a]=o[s],e[a+1]=o[s+1],e[a+2]=o[s+2],e[a+3]=o[s+3],a+=r,s+=n}function i(e,t,r,o,n,i){const a=e.typedBuffer,s=e.typedBufferStride,l=i?.count??e.count;let c=(i?.dstIndex??0)*s;for(let e=0;e<l;++e)a[c]=t,a[c+1]=r,a[c+2]=o,a[c+3]=n,c+=s}r.d(t,{a:()=>n,c:()=>o,f:()=>i}),Object.freeze(Object.defineProperty({__proto__:null,copy:n,copyView:o,fill:i},Symbol.toStringTag,{value:"Module"}))},4341:(e,t,r)=>{r.d(t,{I:()=>n});var o=r(26390);class n{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,o.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,i));e++)this._items.push(this._allocator())}}const i=1024},46140:(e,t,r)=>{r.d(t,{R:()=>n});var o=r(49186);let n=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[n,i]=t.split("."),a=/^\s*\d+\s*$/;if(!n?.match||!a.test(n))throw new o.A((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!i?.match||!a.test(i))throw new o.A((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const s=parseInt(n,10),l=parseInt(i,10);return new e(s,l,r)}}},61473:(e,t,r)=>{function o(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(i)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{EM:()=>n,b5:()=>o});const i=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,i,a,/^jsapps\.esri\.com$/,s,l]},88340:(e,t,r)=>{function o(){return new Float32Array(2)}function n(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function i(){return o()}function a(){return n(1,1)}function s(){return n(1,0)}function l(){return n(0,1)}r.d(t,{Un:()=>d,fA:()=>n,uY:()=>c,vt:()=>o});const c=i(),d=a(),u=s(),h=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:u,UNIT_Y:h,ZEROS:c,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},create:o,createView:function(e,t){return new Float32Array(e,t,2)},fromValues:n,ones:a,unitX:s,unitY:l,zeros:i},Symbol.toStringTag,{value:"Module"}))},11868:(e,t,r)=>{r.d(t,{oe:()=>n});var o=r(34275);function n(e,t=!1){return e<=o.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}},71351:(e,t,r)=>{r.d(t,{Cr:()=>d,LV:()=>c,kb:()=>u,oC:()=>h,vt:()=>s}),r(4576);var o=r(4341),n=r(38954),i=r(51850),a=r(32114);function s(e){return e?l((0,i.o8)(e.origin),(0,i.o8)(e.direction)):l((0,i.vt)(),(0,i.vt)())}function l(e,t){return{origin:e,direction:t}}function c(e,t){const r=f.get();return r.origin=e,r.direction=t,r}function d(e,t,r=s()){return(0,n.c)(r.origin,e),(0,n.f)(r.direction,t,e),r}function u(e,t){const r=(0,n.b)(a.rq.get(),(0,n.n)(a.rq.get(),e.direction),(0,n.f)(a.rq.get(),t,e.origin));return(0,n.l)(r,r)}function h(e,t,r){const o=(0,n.l)(e.direction,(0,n.f)(r,t,e.origin));return(0,n.g)(r,e.origin,(0,n.j)(r,e.direction,o)),r}const f=new o.I((()=>s()));(0,i.vt)()},21015:(e,t,r)=>{r.d(t,{R:()=>l});var o=r(78888),n=r(60999),i=r(49186),a=r(74887),s=r(84952);class l{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,s.DB)(e)?((0,a.Te)(t),(0,s.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,o.A)(t,{responseType:c[e]})).data;const s=await(0,n.Ke)(this._streamDataRequester.request(t,e,r));if(!0===s.ok)return s.value;throw(0,a.QP)(s.error),new i.A("",`Request for resource failed: ${s.error}`)}}const c={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},84498:(e,t,r)=>{r.d(t,{x:()=>a});var o=r(34275),n=r(97146),i=r(63907);function a(e,t){switch(t){case i.WR.TRIANGLES:return"number"==typeof(r=e)?(0,n.tM)(r):(0,o.mg)(r)?new Uint16Array(r):r;case i.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,o=(0,n.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)n%2==0?(o[t++]=e[n],o[t++]=e[n+1],o[t++]=e[n+2]):(o[t++]=e[n+1],o[t++]=e[n],o[t++]=e[n+2])}return o}(e);case i.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}const n=e[0];let i=e[1],a=0;for(let t=0;t<r;++t){const r=e[t+2];o[a++]=n,o[a++]=i,o[a++]=r,i=r}return o}(e)}var r}},51530:(e,t,r)=>{r.d(t,{KB:()=>s,Xi:()=>i,pn:()=>l,x3:()=>a});var o=r(44208),n=r(89192);class i{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=n.JS.KTX2_ENCODING}}function a(e){return"encoded-mesh-texture"===e?.type}async function s(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function l(e,t){if(t===n.JS.KTX2_ENCODING)return new i(e);const r=new Blob([e],{type:t}),a=URL.createObjectURL(r),s=new Image;if((0,o.A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{n(),e(s)},o=e=>{n(),t(e)},n=()=>{URL.revokeObjectURL(a),s.removeEventListener("load",r),s.removeEventListener("error",o)};s.addEventListener("load",r),s.addEventListener("error",o),s.src=a}));try{s.src=a,await s.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),s}},82560:(e,t,r)=>{r.d(t,{fetch:()=>zt});var o=r(61473),n=r(34727),i=r(77690),a=r(29242),s=r(58083),l=r(9093),c=r(48163),d=r(38954),u=r(51850),h=r(70328),f=r(11868),m=r(13030),p=r(73354),v=r(65686),g=r(43609),x=r(51737),b=r(78358),y=r(21015),M=r(84498),T=r(51530),w=r(88340);function S(e){if(null==e)return null;const t=null!=e.offset?e.offset:w.uY,r=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:w.Un,n=(0,a.fA)(1,0,0,0,1,0,t[0],t[1],1),s=(0,a.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,a.fA)(o[0],0,0,0,o[1],0,0,0,1),c=(0,a.vt)();return(0,i.lw)(c,s,l),(0,i.lw)(c,n,c),c}class _{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class C{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new _,this.numberOfVertices=0}}var A=r(78888),O=r(60999),I=r(86805),E=r(49186),R=r(53966),P=r(81139),N=r(74887),B=r(46140),H=r(97146),L=r(99677),z=r(46610),F=r(89192),G=r(34275);function V(e){if(e.length<G.y9)return Array.from(e);if((0,G.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,G.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var D=r(3694),j=r(620);class W{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,j.vA)(e.length>=1),(0,j.vA)(3===r.size||4===r.size);const{data:o,size:n,indices:i}=r;(0,j.vA)(i.length%this._numIndexPerPrimitive==0),(0,j.vA)(i.length>=e.length*this._numIndexPerPrimitive);const a=e.length;let s=n*i[this._numIndexPerPrimitive*e[0]];U.clear(),U.push(s);const l=(0,u.fA)(o[s],o[s+1],o[s+2]),c=(0,u.o8)(l);for(let t=0;t<a;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*i[r+e],U.push(s);let t=o[s];l[0]=Math.min(t,l[0]),c[0]=Math.max(t,c[0]),t=o[s+1],l[1]=Math.min(t,l[1]),c[1]=Math.max(t,c[1]),t=o[s+2],l[2]=Math.min(t,l[2]),c[2]=Math.max(t,c[2])}}this.bbMin=l,this.bbMax=c;const h=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-l[0],c[1]-l[1]),c[2]-l[2]);let f=this.radius*this.radius;for(let e=0;e<U.length;++e){s=U.at(e);const t=o[s]-h[0],r=o[s+1]-h[1],n=o[s+2]-h[2],i=t*t+r*r+n*n;if(i<=f)continue;const a=Math.sqrt(i),l=.5*(a-this.radius);this.radius=this.radius+l,f=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=n*c}this.center=h,U.clear()}getChildren(){if(this._children||(0,d.s)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:n,size:i,indices:a}=this.position;for(let s=0;s<t;++s){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[s];let c=i*a[l],d=n[c],u=n[c+1],h=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=i*a[l+e];const t=n[c],r=n[c+1],o=n[c+2];t<d&&(d=t),r<u&&(u=r),o<h&&(h=o)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[s]=t,++o[t]}let s=0;for(let e=0;e<8;++e)o[e]>0&&++s;if(s<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new W(l[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){U.prune()}}const U=new D.A({deallocator:null});var q=r(69720),k=r(96672),Y=r(4341),$=r(11964);function Z(e,t,r){return(0,d.f)(X,t,e),(0,d.f)(J,r,e),.5*(0,d.m)((0,d.b)(X,X,J))}r(32114),new Y.I($.vt),new Y.I((()=>{return e?{p0:(0,u.o8)(e.p0),p1:(0,u.o8)(e.p1),p2:(0,u.o8)(e.p2)}:{p0:(0,u.vt)(),p1:(0,u.vt)(),p2:(0,u.vt)()};var e}));const X=(0,u.vt)(),J=(0,u.vt)(),K=(0,u.vt)(),Q=(0,u.vt)(),ee=(0,u.vt)(),te=(0,u.vt)();var re=r(24326);class oe{constructor(e){this.channel=e,this.id=(0,re.c)()}}var ne=r(46540);r(28449),(0,u.vt)(),new Float32Array(6);class ie extends q.J{constructor(e,t,r=null,o=k.X.Mesh,n=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=o,this.objectAndLayerIdColor=n,this.edgeIndicesLength=i,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,H.Dg)(r.indices)}),e===ne.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new ie(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:V(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===k.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===k.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,d.h)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:n}=e;(0,d.a)(t,0,0,0),(0,d.a)(te,0,0,0);let i=0,a=0;for(let e=0;e<n.length-2;e+=3){const s=n[e]*r,l=n[e+1]*r,c=n[e+2]*r;(0,d.a)(K,o[s],o[s+1],o[s+2]),(0,d.a)(Q,o[l],o[l+1],o[l+2]),(0,d.a)(ee,o[c],o[c+1],o[c+2]);const u=Z(K,Q,ee);u?((0,d.g)(K,K,Q),(0,d.g)(K,K,ee),(0,d.j)(K,K,1/3*u),(0,d.g)(t,t,K),i+=u):((0,d.g)(te,te,K),(0,d.g)(te,te,Q),(0,d.g)(te,te,ee),a+=3)}return!(0===a&&0===i||(0!==i?((0,d.j)(t,t,1/i),0):0===a||((0,d.j)(t,te,1/a),0)))}(this.attributes.get(ne.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(ne.r.POSITION);return function(e,t,r){if(!e)return!1;(0,d.a)(r,0,0,0),(0,d.a)(te,0,0,0);let o=0,n=0;const{size:i,data:a,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let e=0;e<c;e+=2){const t=e<l?e+1:0,c=s[e<l?e:l]*i,u=s[t]*i;K[0]=a[c],K[1]=a[c+1],K[2]=a[c+2],Q[0]=a[u],Q[1]=a[u+1],Q[2]=a[u+2],(0,d.j)(K,(0,d.g)(K,K,Q),.5);const h=(0,d.F)(K,Q);h>0?((0,d.g)(r,r,(0,d.j)(K,K,h)),o+=h):0===o&&((0,d.g)(te,te,K),n++)}return 0!==o?((0,d.j)(r,r,1/o),!0):0!==n&&((0,d.j)(r,te,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:n}=e;(0,d.a)(t,0,0,0);let i=-1,a=0;for(let e=0;e<n.length;e++){const s=n[e]*r;i!==s&&(t[0]+=o[s],t[1]+=o[s+1],t[2]+=o[s+2],a++),i=s}return a>1&&(0,d.j)(t,t,1/a),a>0}(this.attributes.get(ne.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(ne.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===k.X.Mesh?3:1;(0,j.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,H.tM)(e.indices.length/t);return new W(r,t,e)}get transformation(){return this._transformation??l.zK}set transformation(e){this._transformation=e&&e!==l.zK?(0,l.o8)(e):null}addHighlight(){const e=new oe(F.Mg.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var ae=r(76844),se=r(44208),le=r(24151),ce=r(1843),de=r(49255),ue=r(96336),he=r(22911),fe=r(62602),me=r(59469),pe=r(35093),ve=r(25634),ge=r(14903),xe=r(33524);class be{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const ye=(0,h.vt)();function Me(e,t,r,o,n,i){if(!e.visible)return;const a=(0,d.z)(Be,o,r),s=(e,t,r)=>{i(e,r,t,!1)},l=new be(!1,t.options.normalRequired);if(e.boundingInfo){(0,j.vA)(e.type===k.X.Mesh);const o=t.tolerance;we(e.boundingInfo,r,a,o,n,l,s)}else{const t=e.attributes.get(ne.r.POSITION),o=t.indices;!function(e,t,r,o,n,i,a,s,l,c){const u=t,h=He,f=Math.abs(u[0]),m=Math.abs(u[1]),p=Math.abs(u[2]),v=f>=m?f>=p?0:2:m>=p?1:2,g=v,x=u[g]<0?2:1,b=(v+x)%3,y=(v+(3-x))%3,M=u[b]/u[g],T=u[y]/u[g],w=1/u[g],S=_e,_=Ce,C=Ae,{normalRequired:A}=l;for(let t=r;t<o;++t){const r=3*t,o=a*n[r];(0,d.a)(h[0],i[o+0],i[o+1],i[o+2]);const l=a*n[r+1];(0,d.a)(h[1],i[l+0],i[l+1],i[l+2]);const u=a*n[r+2];(0,d.a)(h[2],i[u+0],i[u+1],i[u+2]),s&&((0,d.c)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,d.c)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,d.c)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,d.z)(S,h[0],e),(0,d.z)(_,h[1],e),(0,d.z)(C,h[2],e);const f=S[b]-M*S[g],m=S[y]-T*S[g],p=_[b]-M*_[g],v=_[y]-T*_[g],x=C[b]-M*C[g],O=C[y]-T*C[g],I=x*v-O*p,E=f*O-m*x,R=p*m-v*f;if((I<0||E<0||R<0)&&(I>0||E>0||R>0))continue;const P=I+E+R;if(0===P)continue;const N=I*(w*S[g])+E*(w*_[g])+R*(w*C[g]);if(N*Math.sign(P)<0)continue;const B=N/P;B>=0&&c(B,t,A?Ie(h):null)}}(r,a,0,o.length/3,o,t.data,t.stride,n,l,s)}}const Te=(0,u.vt)();function we(e,t,r,o,n,i,a){if(null==e)return;const s=function(e,t){return(0,d.a)(t,1/e[0],1/e[1],1/e[2])}(r,Te);if((0,h.Ne)(ye,e.bbMin),(0,h.vI)(ye,e.bbMax),null!=n&&n.applyToAabb(ye),function(e,t,r,o){return function(e,t,r,o){const n=(e[0]-o-t[0])*r[0],i=(e[3]+o-t[0])*r[0];let a=Math.min(n,i),s=Math.max(n,i);const l=(e[1]-o-t[1])*r[1],c=(e[4]+o-t[1])*r[1];if(s=Math.min(s,Math.max(l,c)),s<0)return!1;if(a=Math.max(a,Math.min(l,c)),a>s)return!1;const d=(e[2]-o-t[2])*r[2],u=(e[5]+o-t[2])*r[2];return s=Math.min(s,Math.max(d,u)),!(s<0)&&(a=Math.max(a,Math.min(d,u)),!(a>s)&&a<1/0)}(e,t,r,o)}(ye,t,s,o)){const{primitiveIndices:s,position:l}=e,c=s?s.length:l.indices.length/3;if(c>Pe){const s=e.getChildren();if(void 0!==s){for(const e of s)we(e,t,r,o,n,i,a);return}}!function(e,t,r,o,n,i,a,s,l,c,d){const u=e[0],h=e[1],f=e[2],m=t[0],p=t[1],v=t[2],{normalRequired:g}=c;for(let e=0;e<o;++e){const t=s[e],r=3*t,o=a*n[r];let c=i[o],x=i[o+1],b=i[o+2];const y=a*n[r+1];let M=i[y],T=i[y+1],w=i[y+2];const S=a*n[r+2];let _=i[S],C=i[S+1],A=i[S+2];null!=l&&([c,x,b]=l.applyToVertex(c,x,b,e),[M,T,w]=l.applyToVertex(M,T,w,e),[_,C,A]=l.applyToVertex(_,C,A,e));const O=M-c,I=T-x,E=w-b,R=_-c,P=C-x,N=A-b,B=p*N-P*v,H=v*R-N*m,L=m*P-R*p,z=O*B+I*H+E*L;if(Math.abs(z)<=Ne)continue;const F=u-c,G=h-x,V=f-b,D=F*B+G*H+V*L;if(z>0){if(D<0||D>z)continue}else if(D>0||D<z)continue;const j=G*E-I*V,W=V*O-E*F,U=F*I-O*G,q=m*j+p*W+v*U;if(z>0){if(q<0||D+q>z)continue}else if(q>0||D+q<z)continue;const k=(R*j+P*W+N*U)/z;k>=0&&d(k,t,g?Oe(O,I,E,R,P,N,Se):null)}}(t,r,0,c,l.indices,l.data,l.stride,s,n,i,a)}}const Se=(0,u.vt)();const _e=(0,u.vt)(),Ce=(0,u.vt)(),Ae=(0,u.vt)();function Oe(e,t,r,o,n,i,a){return(0,d.a)(Ee,e,t,r),(0,d.a)(Re,o,n,i),(0,d.b)(a,Ee,Re),(0,d.n)(a,a),a}function Ie(e){return(0,d.z)(Ee,e[1],e[0]),(0,d.z)(Re,e[2],e[0]),(0,d.b)(Se,Ee,Re),(0,d.n)(Se,Se),Se}const Ee=(0,u.vt)(),Re=(0,u.vt)(),Pe=1e3,Ne=1e-7,Be=(0,u.vt)(),He=[(0,u.vt)(),(0,u.vt)(),(0,u.vt)()];var Le=r(13464),ze=r(97937),Fe=r(57005);const Ge=new class{constructor(e=0){this.offset=e,this.sphere=(0,ze.c)(),this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const o=this.objectTransform.transform,n=(0,d.a)(Ve,e,t,r),i=(0,d.h)(n,n,o),a=this.offset/(0,d.m)(i);(0,d.r)(i,i,i,a);const s=this.objectTransform.inverse;return(0,d.h)(this.tmpVertex,i,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,d.m)(e);(0,d.r)(e,e,e,r);const o=this.offset/(0,d.m)(t);(0,d.r)(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,d.m)((0,ze.g)(e)),r=this.offset/t;return(0,d.r)((0,ze.g)(this.sphere),(0,ze.g)(e),(0,ze.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,u.vt)(),this._tmpMbs=(0,ze.c)(),this._tmpObb=new Fe.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,d.m)(e)}applyToVertex(e,t,r){const o=(0,d.a)(Ve,e,t,r),n=(0,d.a)(De,e,t,r+this.componentLocalOriginLength),i=this._totalOffset/(0,d.m)(n);return(0,d.r)(this._tmpVertex,o,n,i),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],o=e[1],n=e[2]+t,i=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(o),d=Math.abs(n),u=Math.abs(i),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*i))*Math.min(l,u),p=.5*(1+Math.sign(o*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(d,f),g=Math.max(l,u),x=Math.max(c,h),b=Math.max(d,f),y=Math.sqrt(m*m+p*p+v*v),M=Math.sign(l+r),T=Math.sign(c+o),w=Math.sign(d+n),S=Math.sign(u+i),_=Math.sign(h+a),C=Math.sign(f+s),A=this._totalOffset;if(y<A)return e[0]-=(1-M)*A,e[1]-=(1-T)*A,e[2]-=(1-w)*A,e[3]+=S*A,e[4]+=_*A,e[5]+=C*A,e;const O=A/Math.sqrt(g*g+x*x+b*b),I=A/y,E=I-O,R=-E;return e[0]+=r*(M*R+I),e[1]+=o*(T*R+I),e[2]+=n*(w*R+I),e[3]+=i*(S*E+O),e[4]+=a*(_*E+O),e[5]+=s*(C*E+O),e}applyToMbs(e){const t=(0,d.m)((0,ze.g)(e)),r=this._totalOffset/t;return(0,d.r)((0,ze.g)(this._tmpMbs),(0,ze.g)(e),(0,ze.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,Fe.gm)(e,this._totalOffset,this._totalOffset,le.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const o=(0,d.a)(Ve,e,t,r),n=(0,d.g)(De,o,this.localOrigin),i=this.offset/(0,d.m)(n);return(0,d.r)(this.tmpVertex,o,n,i),this.tmpVertex}applyToAabb(e){const t=je,r=We,o=Ue;for(let n=0;n<3;++n)t[n]=e[0+n]+this.localOrigin[n],r[n]=e[3+n]+this.localOrigin[n],o[n]=t[n];const n=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=n[t],e[t+3]=n[t];const i=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let n=0;n<3;++n)o[n]=e&1<<n?r[n]:t[n];i(o)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let n=0;n<3;++n)o[n]=a&1<<n?0:e&1<<n?t[n]:r[n];i(o)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const Ve=(0,u.vt)(),De=(0,u.vt)(),je=(0,u.vt)(),We=(0,u.vt)(),Ue=(0,u.vt)();var qe=r(59907);class ke{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(ne.r.POSITION).indices.length}write(e,t,r,o,n,i){(0,qe.SA)(r,o,this.vertexBufferLayout,e,t,n,i)}}var Ye=r(43616),$e=r(91829),Ze=r(53466),Xe=r(72824),Je=r(97220),Ke=r(84867),Qe=r(39341),et=r(34886),tt=r(63907);tt.MT.LESS,tt.MT.ALWAYS;const rt={mask:255},ot={function:{func:tt.MT.ALWAYS,ref:F.dd.OutlineVisualElementMask,mask:F.dd.OutlineVisualElementMask},operation:{fail:tt.eA.KEEP,zFail:tt.eA.KEEP,zPass:tt.eA.ZERO}},nt={function:{func:tt.MT.ALWAYS,ref:F.dd.OutlineVisualElementMask,mask:F.dd.OutlineVisualElementMask},operation:{fail:tt.eA.KEEP,zFail:tt.eA.KEEP,zPass:tt.eA.REPLACE}};tt.MT.EQUAL,F.dd.OutlineVisualElementMask,F.dd.OutlineVisualElementMask,tt.eA.KEEP,tt.eA.KEEP,tt.eA.KEEP,tt.MT.NOTEQUAL,F.dd.OutlineVisualElementMask,F.dd.OutlineVisualElementMask,tt.eA.KEEP,tt.eA.KEEP,tt.eA.KEEP;var it=r(14327),at=r(74810),st=r(28491),lt=r(90644);class ct extends Xe.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=at.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=F.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=u.uY,this.instancedDoublePrecision=!1,this.normalType=ue.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.CN)(.2,.2,.2),this.diffuse=(0,u.CN)(.8,.8,.8),this.externalColor=(0,$e.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=F.it.Less,this.textureAlphaMode=F.sf.Blend,this.textureAlphaCutoff=pe.Q,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ge.m$.Occlude,this.isDecoration=!1}}Xe.gy;class dt extends Ke.w{constructor(e,t,r){t.spherical=e.viewingMode===le.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.emissionSource===he.ZX.Texture||t.hasOcclusionTexture||t.hasNormalTexture?Ze.I.Default:Ze.I.None,t.objectAndLayerIdColorInstanced=t.instanced,super(e,t,r)}initializeProgram(e){return this._initializeProgram(e,dt.shader)}_initializeProgram(e,t){return new et.B(e.rctx,t.get().build(this.configuration),Qe.D)}_makePipeline(e,t){const{output:r,transparent:o,cullFace:n,customDepthTest:i,writeDepth:a,hasOccludees:s,enableOffset:l}=this.configuration,c=e===it.y.NONE,d=e===it.y.FrontFace;return(0,lt.Ey)({blending:(0,de.RN)(r)&&o?(0,xe.Yf)(e):null,culling:ht(this.configuration)?(0,lt.Xt)(n):null,depthTest:{func:(0,xe.K_)(e,ut(i))},depthWrite:(c||d)&&a?lt.kn:null,drawBuffers:r===de.V.Depth?{buffers:[tt.Hr.NONE]}:(0,xe.m6)(e,r),colorWrite:lt.wE,stencilWrite:s?rt:null,stencilTest:s?t?nt:ot:null,polygonOffset:c||d?null:(0,xe.aB)(l)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function ut(e){return e===F.it.Lequal?tt.MT.LEQUAL:tt.MT.LESS}function ht(e){return e.cullFace!==F.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}dt.shader=new Je.$(st.D,(()=>r.e(5141).then(r.bind(r,5141))));var ft=r(90237),mt=r(99769),pt=r(99550);class vt extends pt.E{constructor(){super(...arguments),this.output=de.V.Color,this.alphaDiscardMode=F.sf.Opaque,this.doubleSidedMode=fe.W.None,this.pbrMode=me.A9.Disabled,this.cullFace=F.s2.None,this.transparencyPassType=it.y.NONE,this.normalType=ue.W.Attribute,this.textureCoordinateType=Ze.I.None,this.customDepthTest=F.it.Less,this.emissionSource=he.ZX.None,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.discardInvisibleFragments=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,ft._)([(0,mt.W)({count:de.V.COUNT})],vt.prototype,"output",void 0),(0,ft._)([(0,mt.W)({count:F.sf.COUNT})],vt.prototype,"alphaDiscardMode",void 0),(0,ft._)([(0,mt.W)({count:fe.W.COUNT})],vt.prototype,"doubleSidedMode",void 0),(0,ft._)([(0,mt.W)({count:me.A9.COUNT})],vt.prototype,"pbrMode",void 0),(0,ft._)([(0,mt.W)({count:F.s2.COUNT})],vt.prototype,"cullFace",void 0),(0,ft._)([(0,mt.W)({count:it.y.COUNT})],vt.prototype,"transparencyPassType",void 0),(0,ft._)([(0,mt.W)({count:ue.W.COUNT})],vt.prototype,"normalType",void 0),(0,ft._)([(0,mt.W)({count:Ze.I.COUNT})],vt.prototype,"textureCoordinateType",void 0),(0,ft._)([(0,mt.W)({count:F.it.COUNT})],vt.prototype,"customDepthTest",void 0),(0,ft._)([(0,mt.W)({count:he.ZX.COUNT})],vt.prototype,"emissionSource",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"spherical",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasVertexColors",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasSymbolColors",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasVerticalOffset",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasSlicePlane",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasSliceHighlight",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasColorTexture",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasMetallicRoughnessTexture",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasOcclusionTexture",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasNormalTexture",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasScreenSizePerspective",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasVertexTangents",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasOccludees",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"multipassEnabled",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasModelTransformation",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"offsetBackfaces",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"vvSize",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"vvColor",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"receiveShadows",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"receiveAmbientOcclusion",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"textureAlphaPremultiplied",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"instanced",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"instancedColor",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"objectAndLayerIdColorInstanced",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"instancedDoublePrecision",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"writeDepth",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"transparent",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"discardInvisibleFragments",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"enableOffset",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"cullAboveGround",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"snowCover",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasColorTextureTransform",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasEmissionTextureTransform",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasNormalTextureTransform",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasOcclusionTextureTransform",void 0),(0,ft._)([(0,mt.W)()],vt.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,ft._)([(0,mt.W)({constValue:!1})],vt.prototype,"occlusionPass",void 0),(0,ft._)([(0,mt.W)({constValue:!0})],vt.prototype,"hasVvInstancing",void 0),(0,ft._)([(0,mt.W)({constValue:!1})],vt.prototype,"useCustomDTRExponentForWater",void 0),(0,ft._)([(0,mt.W)({constValue:!0})],vt.prototype,"useFillLights",void 0);var gt=r(57323);class xt extends dt{constructor(e,t,r){t.hasMetallicRoughnessTexture=!1,t.emissionSource=he.ZX.None,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ue.W.Attribute,t.doubleSidedMode=fe.W.WindingOrder,t.hasVertexTangents=!1,super(e,t,r)}initializeProgram(e){return this._initializeProgram(e,xt.shader)}}xt.shader=new Je.$(gt.R,(()=>r.e(9933).then(r.bind(r,39933))));class bt extends ge.im{constructor(e){super(e,Mt),this._configuration=new vt,this.supportsEdges=!0,this.produces=new Map([[Le.N.OPAQUE_MATERIAL,e=>((0,de.iq)(e)||(0,de.PJ)(e))&&!this.parameters.transparent],[Le.N.TRANSPARENT_MATERIAL,e=>((0,de.iq)(e)||(0,de.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Le.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,de.XY)(e)||(0,de.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,ce.BP)().vec3f(ne.r.POSITION);return e.normalType===ue.W.Compressed?t.vec2i16(ne.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(ne.r.NORMAL),e.hasVertexTangents&&t.vec4f(ne.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(ne.r.UV0),e.hasVertexColors&&t.vec4u8(ne.r.COLOR),e.hasSymbolColors&&t.vec4u8(ne.r.SYMBOLCOLOR),(0,se.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ne.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==de.V.Shadow&&e!==de.V.ShadowExcludeHighlight&&e!==de.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<pe.Q)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:o,vvColor:n}=e,i=t||n||o,a="replace"===e.colorMixMode,s=e.opacity>=pe.Q;if(r&&i)return a||s;const l=e.externalColor&&e.externalColor[3]>=pe.Q;return r?a?l:s:i?a||s:a?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,d.e)(this.parameters.emissiveFactor,u.uY)}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.discardInvisibleFragments=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?F.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,(0,de.RN)(e)&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=fe.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?fe.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?fe.W.WindingOrder:fe.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?me.A9.Schematic:me.A9.Normal:me.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.emissionSource=null!=this.parameters.emissiveTextureId?he.ZX.Texture:this.parameters.usePBR?he.ZX.Value:he.ZX.None,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<xe.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,o,n,i){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,d.a)(At,t[12],t[13],t[14]);let i=null;switch(r.viewingMode){case le.RT.Global:i=(0,d.n)(_t,At);break;case le.RT.Local:i=(0,d.c)(_t,St)}let a=0;const s=(0,d.f)(Ot,At,e.eye),l=(0,d.m)(s),c=(0,d.j)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,d.l)(i,c)),a+=(0,Ye.kE)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,d.j)(i,i,a),(0,d.t)(Ct,i,r.transform.inverseRotation),o=(0,d.f)(Tt,o,Ct),n=(0,d.f)(wt,n,Ct)}var a;Me(e,r,o,n,null!=(a=r.verticalOffset)?(Ge.offset=a,Ge):null,i)}createGLMaterial(e){return new yt(e)}createBufferWriter(){return new ke(this._vertexBufferLayout)}}class yt extends ve.m8{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){(0,de.RN)(this._output)&&(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,d.a)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?xt:dt,e)}}class Mt extends ct{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Tt=(0,u.vt)(),wt=(0,u.vt)(),St=(0,u.fA)(0,0,1),_t=(0,u.vt)(),Ct=(0,u.vt)(),At=(0,u.vt)(),Ot=(0,u.vt)(),It=()=>R.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Et(e){throw new E.A("",`Request for object resource failed: ${e}`)}function Rt(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(It().warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(It().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(It().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(It().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else It().warn("Indexed geometries must specify faces"),o=!1;break}default:It().warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(It().warn("Geometry requires material"),o=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(It().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function Pt(e){const t=(0,h.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,h.iT)(t,r.bbMin),(0,h.iT)(t,r.bbMax))})),t}function Nt(e){switch(e){case"mask":return F.sf.Mask;case"maskAndTransparency":return F.sf.MaskBlend;case"none":return F.sf.Opaque;default:return F.sf.Blend}}function Bt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ht=new B.R(1,2,"wosr");var Lt=r(61765);async function zt(e,t){const a=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,o.EM)(e));if("wosr"===a.fileType){const e=await(t.cache?t.cache.loadWOSR(a.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const o=await(0,O.Ke)(t.request(e,"json",r));if(!0===o.ok)return o.value;(0,N.QP)(o.error),Et(o.error.details.url)}(e,r,t);const o=await(0,O.Ke)((0,A.A)(e,t));if(!0===o.ok)return o.value.data;(0,N.QP)(o.error),Et(o.error)}(e,t),o=await async function(e,t){const r=new Array;for(const o in e){const n=e[o],i=n.images[0].data;if(!i){It().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+i,s="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:tt.pF.REPEAT,t:tt.pF.REPEAT},preMultiplyAlpha:Nt(l)!==F.sf.Opaque},d=t?.disableTextures?Promise.resolve(null):(0,L.D)(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const o=await Promise.all(r),n={};for(const e of o)n[e.refId]=e;return n}(r.textureDefinitions??{},t);let n=0;for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:o,size:n+(0,I.iL)(r)}}(a.url,t)),{engineResources:r,referenceBoundingBox:o}=function(e,t){const r=new Array,o=new Array,n=new Array,i=new P.O,a=e.resource,s=B.R.parse(a.version||"1.0","wosr");Ht.validate(s);const l=a.model.name,c=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let f=0;const m=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!Rt(a))continue;const s=Bt(a),l=a.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[ne.r.POSITION],x=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,o=v(e)??(0,H.tM)(x);p.push([e,new z.n(r,o,t.valuesPerElement,!0)])}const b=s.texture,y=h&&h[b];if(y&&!m.has(b)){const{image:e,parameters:t}=y,r=new ae.g(e,t);o.push(r),m.set(b,r)}const M=m.get(b),T=M?M.id:void 0,w=s.material;let S=i.get(w,b);if(null==S){const e=d[w.slice(w.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=y&&y.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=y?Nt(y.alphaChannelUsage):void 0,a={ambient:(0,u.ci)(e.diffuse),diffuse:(0,u.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:F.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),S=new bt(a),i.set(w,b,S)}n.push(S);const _=new ie(S,p);f+=p.find((e=>e[0]===ne.r.POSITION))?.[1]?.indices.length??0,r.push(_)}return{engineResources:[{name:l,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Pt(r)}}(e,t);return{lods:r,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}let w;if(t.cache)w=await t.cache.loadGLTF(a.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(4399).then(r.bind(r,4399));w=await e(new y.R(t.streamDataRequester),a.url,t,t.usePBR)}const _=w.model.meta?.ESRI_proxyEllipsoid,E=w.meta.isEsriSymbolResource&&null!=_&&"EsriRealisticTreesStyle"===w.meta.ESRI_webstyle;E&&!w.customMeta.esriTreeRendering&&(w.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const n of o.parts){const o=n.attributes.normal;if(null==o)return;const i=n.attributes.position,a=i.count,c=(0,u.vt)(),h=(0,u.vt)(),f=(0,u.vt)(),p=new Uint8Array(4*a),v=new Float64Array(3*a),g=(0,s.B8)((0,l.vt)(),n.transform);let x=0,b=0;for(let s=0;s<a;s++){i.getVec(s,h),o.getVec(s,c),(0,d.h)(h,h,n.transform),(0,d.f)(f,h,t.center),(0,d.D)(f,f,t.radius);const a=f[2],l=(0,d.m)(f),u=Math.min(.45+.55*l*l,1);(0,d.D)(f,f,t.radius),null!==g&&(0,d.h)(f,f,g),(0,d.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.o)(f,f,c,a>-1?.2:Math.min(-4*a-3.8,1)),v[x]=f[0],v[x+1]=f[1],v[x+2]=f[2],x+=3,p[b]=255*u,p[b+1]=255*u,p[b+2]=255*u,p[b+3]=255,b+=4}n.attributes.normal=new m.xs(v),n.attributes.color=new m.XP(p)}}}(w,_));const R=!!t.usePBR,G=w.meta.isEsriSymbolResource?{usePBR:R,isSchematic:!1,treeRendering:E,mrrFactors:at.SY}:{usePBR:R,isSchematic:!1,treeRendering:!1,mrrFactors:at.mb},V={...t.materialParameters,treeRendering:E},{engineResources:D,referenceBoundingBox:j}=function(e,t,r,o){const a=e.model,s=new Array,l=new Map,d=new Map,u=a.lods.length,y=(0,h.Ie)();return a.lods.forEach(((e,w)=>{const _=!0===o.skipHighLods&&(u>1&&0===w||u>3&&1===w)||!1===o.skipHighLods&&null!=o.singleLodIndex&&w!==o.singleLodIndex;if(_&&0!==w)return;const A=new C(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=_?new bt({}):function(e,t,r,o,n,i,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),d=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==l)return null;const h=function(e){switch(e){case"BLEND":return F.sf.Blend;case"MASK":return F.sf.Mask;case"OPAQUE":case null:case void 0:return F.sf.Opaque}}(l.alphaMode);if(!i.has(s)){if(d){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;a.set(t,new ae.g((0,T.x3)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,T.x3)(e)&&r,encoding:(0,T.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,h!==F.sf.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/Lt.T),f=l.color[1]**(1/Lt.T),m=l.color[2]**(1/Lt.T),p=l.emissiveFactor[0]**(1/Lt.T),v=l.emissiveFactor[1]**(1/Lt.T),g=l.emissiveFactor[2]**(1/Lt.T),x=null!=l.textureColor&&d?a.get(l.textureColor):null,b=(0,at.Jr)({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),y=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:c.Un;i.set(s,new bt({...o,transparent:h===F.sf.Blend,customDepthTest:F.it.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,f,m],ambient:[r,f,m],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?F.s2.None:F.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?ue.W.Attribute:ue.W.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=x?x.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&d?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&d?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&d?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&d?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[p,v,g],mrrFactors:b?at.Bt:[l.metallicFactor,l.roughnessFactor,o.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:S(l.colorTextureTransform),normalTextureTransformMatrix:S(l.normalTextureTransform),scale:[y[0],y[1]],occlusionTextureTransformMatrix:S(l.occlusionTextureTransform),emissiveTextureTransformMatrix:S(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(l.metallicRoughnessTextureTransform),...n}))}const f=i.get(s);if(r.stageResources.materials.push(f),d){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return f}(a,e,A,t,r,l,d),{geometry:s,vertexCount:u}=function(e,t){const r=e.attributes.position.count,o=(0,M.x)(e.indices||r,e.primitiveType),a=(0,f.oe)(3*r),{typedBuffer:s,typedBufferStride:l}=e.attributes.position;(0,p.a)(a,s,e.transform,3,l);const c=[[ne.r.POSITION,new z.n(a,o,3,!0)]];if(null!=e.attributes.normal){const t=(0,f.oe)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.normal;(0,i.Ge)(Ft,e.transform),(0,p.t)(t,a,Ft,3,s),(0,n.or)(Ft)&&(0,p.n)(t,t),c.push([ne.r.NORMAL,new z.n(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=(0,f.oe)(4*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.tangent;(0,i.z0)(Ft,e.transform),(0,v.t)(t,a,Ft,4,s),(0,n.or)(Ft)&&(0,p.n)(t,t,4),c.push([ne.r.TANGENT,new z.n(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,f.oe)(2*r),{typedBuffer:n,typedBufferStride:i}=e.attributes.texCoord0;(0,g.a)(t,n,2,i),c.push([ne.r.UV0,new z.n(t,o,2,!0)])}const d=e.attributes.color;if(null!=d){const t=new Uint8Array(4*r);4===d.elementCount?d instanceof m.Eq?(0,v.b)(t,d,255):d instanceof m.XP?(0,b.a)(t,d):d instanceof m.Uz&&(0,v.b)(t,d,1/256):(t.fill(255),d instanceof m.xs?(0,p.f)(t,d.typedBuffer,255,4,d.typedBufferStride):e.attributes.color instanceof m.eI?(0,x.c)(t,d.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,p.f)(t,d.typedBuffer,1/256,4,d.typedBufferStride)),c.push([ne.r.COLOR,new z.n(t,o,4,!0)])}return{geometry:new ie(t,c),vertexCount:r}}(e,null!=o?o:new bt({})),C=s.boundingInfo;null!=C&&0===w&&((0,h.iT)(y,C.bbMin),(0,h.iT)(y,C.bbMax)),null!=o&&(A.stageResources.geometries.push(s),A.numberOfVertices+=u)})),_||s.push(A)})),{engineResources:s,referenceBoundingBox:y}}(w,G,V,t.skipHighLods&&null==a.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:a.specifiedLodIndex});return{lods:D,referenceBoundingBox:j,isEsriSymbolResource:w.meta.isEsriSymbolResource,isWosr:!1}}const Ft=(0,a.vt)()},66104:(e,t,r)=>{var o,n;r.d(t,{k5:()=>o}),r(34727),(n=o||(o={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"},42583:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(66104),n=r(2597);function i(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(o.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(o.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(o.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(o.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},46686:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var o=r(49255),n=r(33752),i=r(47286),a=r(2597);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new i.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case o.V.Color:case o.V.ColorEmission:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:case o.V.ViewshedShadow:return e.include(n.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},32680:(e,t,r)=>{r.d(t,{M:()=>n});var o=r(2597);function n(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},82048:(e,t,r)=>{r.d(t,{c:()=>i});var o=r(2597),n=r(46540);function i(e,t=!0){e.attributes.add(n.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(o.H`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o.H`uv = position * 0.5 + vec2(0.5);`:""}
  `)}},49255:(e,t,r)=>{var o;function n(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight||e===o.ViewshedShadow}function i(e){return function(e){return d(e)||u(e)}(e)||e===o.Normal}function a(e){return function(e){return function(e){return c(e)||s(e)}(e)||u(e)}(e)||e===o.Normal}function s(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function l(e){return e===o.Color}function c(e){return l(e)||h(e)}function d(e){return l(e)||s(e)}function u(e){return e===o.Depth}function h(e){return e===o.ColorEmission}r.d(t,{LG:()=>h,PJ:()=>n,RN:()=>c,V:()=>o,XY:()=>i,dX:()=>d,iq:()=>a}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(o||(o={}))},76597:(e,t,r)=>{r.d(t,{d:()=>i});var o=r(46686),n=r(2597);function i(e){(0,o.i$)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},96336:(e,t,r)=>{r.d(t,{W:()=>o,Y:()=>l});var o,n,i=r(21818),a=r(2597),s=r(46540);function l(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Xb)(t.normalType);case o.COUNT:}}(n=o||(o={}))[n.Attribute=0]="Attribute",n[n.Compressed=1]="Compressed",n[n.ScreenDerivative=2]="ScreenDerivative",n[n.COUNT=3]="COUNT"},39014:(e,t,r)=>{r.d(t,{K:()=>l});var o=r(42583),n=r(93588),i=r(2597),a=r(46540),s=r(43616);function l(e,t){t.hasSymbolColors?(e.include(o.A),e.attributes.add(a.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},92700:(e,t,r)=>{r.d(t,{c:()=>i});var o=r(2597),n=r(46540);function i(e,t){t.hasVertexColors?(e.attributes.add(n.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},40261:(e,t,r)=>{r.d(t,{E:()=>y});var o=r(46686),n=r(49255),i=r(76591),a=r(76597),s=r(96336),l=r(36782),c=r(53466),d=r(72824),u=r(80730),h=r(2597);function f(e,t){switch(t.output){case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:e.fragment.include(u.U),e.fragment.code.add(h.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var m=r(76662),p=r(42398),v=r(11955),g=r(20693),x=r(63761),b=r(89192);function y(e,t){const{vertex:r,fragment:u}=e,y=t.hasColorTexture&&t.alphaDiscardMode!==b.sf.Opaque,{output:M,normalType:T,hasColorTextureTransform:w}=t;switch(M){case n.V.Depth:(0,g.NB)(r,t),e.include(a.d,t),e.include(i.HQ,t),e.include(c.U,t),y&&u.uniforms.add(new x.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.S,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(y,h.H`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ViewshedShadow:case n.V.ObjectAndLayerIdColor:(0,g.NB)(r,t),e.include(a.d,t),e.include(c.U,t),e.include(p.A,t),e.include(f,t),e.include(i.HQ,t),e.include(l.g,t),(0,o.xJ)(e),e.varyings.add("depth","float"),y&&u.uniforms.add(new x.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.S,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(y,h.H`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${M===n.V.ObjectAndLayerIdColor?h.H`outputObjectAndLayerIdColor();`:h.H`outputDepth(depth);`}`);break;case n.V.Normal:{(0,g.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(p.A,t),y&&u.uniforms.add(new x.N("tex",(e=>e.texture))),T===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=T===s.W.Attribute||T===s.W.Compressed;r.main.add(h.H`
          vpos = getVertexInLocalOriginSpace();
          ${o?h.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:h.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(i.HQ,t),e.include(v.S,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(y,h.H`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${T===s.W.ScreenDerivative?h.H`vec3 normal = screenDerivativeNormal(vPositionView);`:h.H`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case n.V.Highlight:(0,g.NB)(r,t),e.include(a.d,t),e.include(c.U,t),e.include(p.A,t),y&&u.uniforms.add(new x.N("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(i.HQ,t),e.include(v.S,t),e.include(m.Q,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(y,h.H`vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          outputHighlight();`)}}},77695:(e,t,r)=>{r.d(t,{W:()=>p});var o=r(29242),n=r(48163),i=r(53466),a=r(99208),s=r(62602),l=r(47286),c=r(2597),d=r(35644),u=r(15976),h=r(63761),f=r(46263),m=r(46540);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(m.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
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
}`),t.textureCoordinateType!==i.I.None&&(e.include(a.r,t),r.uniforms.add(t.bindType===f.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??n.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},3452:(e,t,r)=>{r.d(t,{n:()=>D});var o,n,i,a=r(2597),s=r(63761),l=r(90237),c=r(34727),d=r(97768),u=r(36708),h=r(78659),f=r(10107),m=(r(44208),r(53966),r(87811),r(40608)),p=r(37585);(i=o||(o={}))[i.RED=0]="RED",i[i.RG=1]="RG",i[i.RGBA4=2]="RGBA4",i[i.RGBA=3]="RGBA",i[i.RGBA_MIPMAP=4]="RGBA_MIPMAP",i[i.R16F=5]="R16F",i[i.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(n||(n={}));var v=r(69622),g=r(49186),x=r(89192);let b=class extends v.A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this.requireGeometryDepth=!1,this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,u.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),u.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new g.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===x.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this._context}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,l._)([(0,f.MZ)({constructOnly:!0})],b.prototype,"view",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],b.prototype,"consumes",void 0),(0,l._)([(0,f.MZ)()],b.prototype,"produces",void 0),b=(0,l._)([(0,m.$)("esri.views.3d.webgl.RenderNode")],b);const y=b;var M=r(97220),T=r(84867),w=r(39341),S=r(34886),_=r(95774),C=r(90644);class A extends T.w{initializeProgram(e){return new S.B(e.rctx,A.shader.get().build(),w.D)}initializePipeline(){return(0,C.Ey)({colorWrite:C.wE})}}A.shader=new M.$(_.S,(()=>r.e(9384).then(r.bind(r,59384))));var O=r(48163);class I extends a.Y{constructor(){super(...arguments),this.projScale=1}}class E extends I{constructor(){super(...arguments),this.intensity=1}}class R extends a.Y{}class P extends R{constructor(){super(...arguments),this.blurSize=(0,O.vt)()}}var N=r(15581);class B extends T.w{initializeProgram(e){return new S.B(e.rctx,B.shader.get().build(),w.D)}initializePipeline(){return(0,C.Ey)({colorWrite:C.wE})}}B.shader=new M.$(N.S,(()=>r.e(191).then(r.bind(r,90191))));var H=r(63907),L=r(21231),z=r(67171);const F=2;let G=class extends y{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,h.l5)(0),this._passParameters=new E,this._drawParameters=new P}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new z.R;t.wrapMode=H.pF.CLAMP_TO_EDGE,t.pixelFormat=H.Ab.RGB,t.wrapMode=H.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new L.g(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(B),this._blurTechnique=this.techniques.acquire(A),this.addHandles((0,u.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,h.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,d.WD)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),n=r?.getTexture(),i=r?.getTexture(H.nI),a=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/F),f=Math.round(d/F);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,h.l5)(performance.now()),this.requestRender(),a.acquire(u,f,"ssao",o.RED);0===this._enableTime&&(this._enableTime=(0,h.l5)(performance.now()));const m=this.renderingContext,v=this.view.qualitySettings.fadeDuration,g=s.relativeElevation,b=(0,c.qE)((5e5-g)/2e5,0,1),y=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,M=y*b;this._passParameters.normalTexture=n,this._passParameters.depthTexture=i,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*V/(0,N.g)(s)**6*M;const T=a.acquire(l,d,"ssao input",o.RG);m.bindFramebuffer(T.fbo),m.setViewport(0,0,l,d),m.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),m.screen.draw();const w=a.acquire(u,f,"ssao blur",o.RED);m.bindFramebuffer(w.fbo),this._drawParameters.colorTexture=T.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,0,F/d),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,u,f),m.screen.draw(),T.release();const S=a.acquire(u,f,"ssao",o.RED);return m.bindFramebuffer(S.fbo),m.setViewport(0,0,l,d),m.setClearColor(1,1,1,0),m.clear(H.NV.COLOR),this._drawParameters.colorTexture=w.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,F/l,0),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,u,f),m.screen.draw(),m.setViewport4fv(s.fullViewport),w.release(),y<1&&this.requestRender(x.C7.UPDATE),S}};(0,l._)([(0,f.MZ)()],G.prototype,"consumes",void 0),(0,l._)([(0,f.MZ)()],G.prototype,"produces",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],G.prototype,"techniques",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],G.prototype,"isEnabled",void 0),G=(0,l._)([(0,m.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],G);const V=.5;function D(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new s.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/F),r.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},74081:(e,t,r)=>{r.d(t,{kA:()=>S,a8:()=>T,eU:()=>w});var o=r(21818),n=r(38954),i=r(51850),a=r(87317),s=r(91829),l=r(59469),c=r(33079),d=r(71988),u=r(2597);function h(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.a)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.a)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const f=(0,i.vt)(),m=(0,s.vt)();var p=r(3452),v=r(98619),g=r(22393),x=r(89786),b=r(95250),y=r(20304);r(34727),(0,i.vt)();const M=.4;function T(e){e.constants.add("ambientBoostFactor","float",M)}function w(e){e.uniforms.add(new y.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function S(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==l.A9.Disabled&&e.include(g.c,t),e.include(h,t),e.include(x.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),T(r),w(r),(0,v.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(v.Vt),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
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
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b.e("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new y.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new y.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
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
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:(0,v.Gc)(r),(0,v.O4)(r),r.code.add(u.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,o.Xb)(t.pbrMode);case l.A9.COUNT:}}(0,i.vt)()},98619:(e,t,r)=>{r.d(t,{Gc:()=>i,O4:()=>a,Vt:()=>s});var o=r(33079),n=r(2597);function i(e){e.uniforms.add(new o.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new o.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){i(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},62602:(e,t,r)=>{r.d(t,{W:()=>o,r:()=>s});var o,n,i=r(21818),a=r(2597);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case o.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case o.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case o.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case o.COUNT:}}(n=o||(o={}))[n.None=0]="None",n[n.View=1]="View",n[n.WindingOrder=2]="WindingOrder",n[n.COUNT=3]="COUNT"},22393:(e,t,r)=>{r.d(t,{c:()=>s});var o=r(2597);function n(e){const t=e.fragment.code;t.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(o.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var i=r(59469),a=r(89786);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==i.A9.Normal&&t.pbrMode!==i.A9.Schematic&&t.pbrMode!==i.A9.Simplified&&t.pbrMode!==i.A9.TerrainWithWater||(r.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==i.A9.Normal&&t.pbrMode!==i.A9.Schematic||(e.include(n),r.add(o.H`struct PBRShadingInfo
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
};`),r.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(o.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(o.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},59469:(e,t,r)=>{r.d(t,{A9:()=>o,_Z:()=>f});var o,n,i=r(99208),a=r(40710),s=r(33079),l=r(2597),c=r(15976),d=r(63761),u=r(46263),h=r(25634);function f(e,t){const r=t.pbrMode,n=e.fragment;if(r!==o.Schematic&&r!==o.Disabled&&r!==o.Normal)return void n.code.add(l.H`void applyPBRFactors() {}`);if(r===o.Disabled)return void n.code.add(l.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===o.Schematic)return void n.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:h,hasMetallicRoughnessTextureTransform:f,hasOcclusionTexture:m,hasOcclusionTextureTransform:p,bindType:v}=t;(h||m)&&e.include(i.r,t),n.code.add(l.H`vec3 mrr;
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
  `)}r(74810),(n=o||(o={}))[n.Disabled=0]="Disabled",n[n.Normal=1]="Normal",n[n.Schematic=2]="Schematic",n[n.Water=3]="Water",n[n.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",n[n.Simplified=5]="Simplified",n[n.TerrainWithWater=6]="TerrainWithWater",n[n.COUNT=7]="COUNT",h.NV},89786:(e,t,r)=>{function o(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}r.d(t,{p:()=>o})},25618:(e,t,r)=>{r.d(t,{Bz:()=>f,G:()=>h}),r(9093),r(51850);var o=r(80730),n=r(71988),i=r(93588),a=r(2597),s=r(39589),l=r(46263);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,o,n,i)=>r.setUniformMatrix4fv(e,t(o,n,i))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,o,n)=>r.setUniformMatrix4fv(e,t(o,n))),r)}}var u=r(63761);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(o.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new i.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
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
}`)}a.Y,a.Y},51406:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var o=r(29242),n=r(53466),i=r(2597),a=r(35644);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??o.zK))).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.zK))).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??o.zK))).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??o.zK))).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??o.zK))).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},34845:(e,t,r)=>{r.d(t,{Ir:()=>d});var o=r(37585),n=r(48163),i=r(87317),a=r(91829),s=r(47286),l=r(71988),c=r(2597);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,i.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,i.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,o.hZ)(h,0,1):(0,o.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)(),h=(0,n.vt)()},11955:(e,t,r)=>{r.d(t,{S:()=>l});var o=r(35093),n=r(39589);r(46263),n.n;var i=r(20304),a=r(2597),s=r(89192);function l(e,t){!function(e,t,r){const n=e.fragment;switch(t.alphaDiscardMode){case s.sf.Blend:e.fragment.code.add(a.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(o.Q)}) { discard; } }
      `);break;case s.sf.Opaque:n.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.sf.Mask:n.uniforms.add(r).code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.sf.MaskBlend:n.uniforms.add(r).code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new i.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},26425:(e,t,r)=>{r.d(t,{u:()=>n});var o=r(2597);function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},27950:(e,t,r)=>{r.d(t,{N:()=>a});var o=r(66104),n=r(63365),i=r(2597);function a(e){e.include(n.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(o.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(o.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.k5.Replace)}) {
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

      if (mode == ${i.H.int(o.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},80730:(e,t,r)=>{r.d(t,{U:()=>n});var o=r(2597);function n(e){e.code.add(o.H`const float MAX_RGBA4_FLOAT =
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
}`)}},26835:(e,t,r)=>{r.d(t,{W:()=>n});var o=r(2597);function n(e){e.code.add(o.H`const float MAX_RGBA_FLOAT =
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
}`)}},68259:(e,t,r)=>{r.d(t,{t:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"vec2",n.c.Draw,((r,o,n,i)=>r.setUniform2fv(e,t(o,n,i))))}}},40710:(e,t,r)=>{r.d(t,{W:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"vec3",n.c.Draw,((r,o,n,i)=>r.setUniform3fv(e,t(o,n,i))))}}},33079:(e,t,r)=>{r.d(t,{t:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"vec3",n.c.Pass,((r,o,n)=>r.setUniform3fv(e,t(o,n))))}}},20304:(e,t,r)=>{r.d(t,{m:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"float",n.c.Pass,((r,o,n)=>r.setUniform1f(e,t(o,n))))}}},98353:(e,t,r)=>{r.d(t,{h:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"mat3",n.c.Draw,((r,o,n)=>r.setUniformMatrix3fv(e,t(o,n))))}}},35644:(e,t,r)=>{r.d(t,{k:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"mat3",n.c.Pass,((r,o,n)=>r.setUniformMatrix3fv(e,t(o,n))))}}},40095:(e,t,r)=>{r.d(t,{X:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"mat4",n.c.Pass,((r,o,n)=>r.setUniformMatrix4fv(e,t(o,n))))}}},15976:(e,t,r)=>{r.d(t,{o:()=>i});var o=r(39589),n=r(46263);class i extends o.n{constructor(e,t){super(e,"sampler2D",n.c.Draw,((r,o,n)=>r.bindTexture(e,t(o,n))))}}},39589:(e,t,r)=>{r.d(t,{n:()=>n});var o=r(46263);class n{constructor(e,t,r,n,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[o.c.Pass]:null,[o.c.Draw]:null},n)switch(r){case o.c.Pass:this.bind[o.c.Pass]=n;break;case o.c.Draw:this.bind[o.c.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},2597:(e,t,r)=>{r.d(t,{H:()=>n,If:()=>i,Y:()=>o});const o=class{};function n(e,...t){let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r}function i(e,t,r=""){return e?t:r}var a;(a=n||(n={})).int=function(e){return Math.round(e).toString()},a.float=function(e){return e.toPrecision(8)}},46263:(e,t,r)=>{var o;r.d(t,{c:()=>o}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(o||(o={}))},61765:(e,t,r)=>{r.d(t,{T:()=>o});const o=2.1},74810:(e,t,r)=>{r.d(t,{Bt:()=>s,Jr:()=>i,SY:()=>l,mb:()=>a});var o=r(38954),n=r(51850);function i({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:a,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==a&&(null==s||(0,o.e)(s,n.uY))&&null==l&&(null==i||1===i)&&(null==r||1===r)}const a=(0,n.CN)(1,1,.5),s=(0,n.CN)(0,.6,.2),l=(0,n.CN)(0,1,.2)},60517:(e,t,r)=>{r.d(t,{z:()=>d});var o=r(49255),n=r(22911),i=r(76662),a=r(35093),s=r(63365),l=r(2597),c=r(14327);function d(e,t){e.include(i.Q,t),e.include(n.NL,t),e.fragment.include(s.a);const r=t.output===o.V.ObjectAndLayerIdColor,d=(0,o.LG)(t.output),u=(0,o.RN)(t.output)&&t.transparencyPassType===c.y.ColorAlpha,h=(0,o.RN)(t.output)&&t.transparencyPassType!==c.y.ColorAlpha,f=t.discardInvisibleFragments;let m=0;(h||d||u)&&e.outputs.add("fragColor","vec4",m++),d&&e.outputs.add("fragEmission","vec4",m++),u&&e.outputs.add("fragAlpha","float",m++),e.fragment.code.add(l.H`
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
  `)}}}]);