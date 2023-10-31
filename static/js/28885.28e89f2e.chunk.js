"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[28885],{65630:(e,t,r)=>{r.d(t,{D:()=>V,b:()=>G});var o=r(22357),i=r(83734),a=r(37081),n=r(33280),s=r(94951),l=r(81221),c=r(16010),d=r(52276),u=r(53230),h=r(60113),m=r(48655),f=r(85380),p=r(71410),v=r(86419),g=r(38171),_=r(49672),x=r(80919),T=r(92395),b=r(15226),E=r(96658),S=r(2116),A=r(41481),y=r(58335),w=r(79154),C=r(66472),M=r(26461),R=r(65974),O=r(98082),I=r(82552),H=r(49450),P=r(95276),N=r(58406),L=r(98634),F=r(64201),D=r(19253),B=r(25920),z=r(4760);function G(e){const t=new F.kG,{vertex:r,fragment:G,varyings:V}=t;if((0,I.Sv)(r,e),t.include(d.f),V.add("vpos","vec3"),t.include(C.k,e),t.include(l.fQ,e),t.include(p.L,e),e.hasColorTextureTransform&&t.include(w.av),e.output===a.H.Color||e.output===a.H.Alpha){e.hasNormalTextureTransform&&t.include(w.NI),e.hasEmissionTextureTransform&&t.include(w.R5),e.hasOcclusionTextureTransform&&t.include(w.jF),e.hasMetallicRoughnessTextureTransform&&t.include(w.DT),(0,I.hY)(r,e),t.include(c.O,e),t.include(s.w,e);const a=e.normalType===c.r.Attribute||e.normalType===c.r.Compressed;a&&e.offsetBackfaces&&t.include(i.w),t.include(g.Q,e),t.include(f.Bb,e),e.instancedColor&&t.attributes.add(z.T.INSTANCECOLOR,"vec4"),V.add("vPositionLocal","vec3"),t.include(h.D,e),t.include(o.qj,e),t.include(u.R,e),t.include(m.c,e),r.uniforms.add(new P.N("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),e.multipassEnabled&&V.add("depth","float"),r.code.add(L.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${L.H.float(M.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?L.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?L.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?L.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?L.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?L.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?L.H`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case a.H.Alpha:t.include(n.f5,e),t.include(R.z,e),t.include(b.l,e),G.uniforms.add(new N.p("opacity",(e=>e.opacity)),new N.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&G.uniforms.add(new D.A("tex",(e=>e.texture))),G.include(O.y),G.code.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?L.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?L.H`colorUV`:L.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?L.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:L.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case a.H.Color:t.include(n.f5,e),t.include(x.XP,e),t.include(_.K,e),t.include(R.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(b.l,e),(0,I.hY)(G,e),G.uniforms.add(r.uniforms.get("localOrigin"),new H.J("ambient",(e=>e.ambient)),new H.J("diffuse",(e=>e.diffuse)),new N.p("opacity",(e=>e.opacity)),new N.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&G.uniforms.add(new D.A("tex",(e=>e.texture))),t.include(A.jV,e),t.include(S.T,e),G.include(O.y),t.include(E.k,e),(0,x.PN)(G),(0,x.sC)(G),(0,T.F1)(G),G.code.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?L.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?L.H`colorUV`:L.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.r.ScreenDerivative?L.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:L.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===A.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?L.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:L.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?L.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?L.H`normalUV`:"vuv0"});`:L.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?L.H`normalize(posWorld);`:L.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?L.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===A.f7.Normal||e.pbrMode===A.f7.Schematic?L.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?L.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:L.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.A.Color?L.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(v.s,e),t}const V=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,r)=>{r.d(t,{R:()=>D,b:()=>F});var o=r(22357),i=r(83734),a=r(37081),n=r(33280),s=r(94951),l=r(81221),c=r(16010),d=r(52276),u=r(53230),h=r(60113),m=r(48655),f=r(71410),p=r(86419),v=r(49672),g=r(80919),_=r(92395),x=r(15226),T=r(2116),b=r(41481),E=r(58335),S=r(66472),A=r(26461),y=r(65974),w=r(98082),C=r(82552),M=r(49450),R=r(95276),O=r(58406),I=r(98634),H=r(64201),P=r(19253),N=r(25920),L=r(4760);function F(e){const t=new H.kG,{vertex:r,fragment:F,varyings:D}=t;return(0,C.Sv)(r,e),t.include(d.f),D.add("vpos","vec3"),t.include(S.k,e),t.include(l.fQ,e),t.include(f.L,e),e.output!==a.H.Color&&e.output!==a.H.Alpha||((0,C.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(i.w),e.instancedColor&&t.attributes.add(L.T.INSTANCECOLOR,"vec4"),D.add("vNormalWorld","vec3"),D.add("localvpos","vec3"),e.multipassEnabled&&D.add("depth","float"),t.include(h.D,e),t.include(o.qj,e),t.include(u.R,e),t.include(m.c,e),r.uniforms.add(new R.N("externalColor",(e=>e.externalColor))),D.add("vcolorExt","vec4"),r.code.add(I.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${I.H.float(A.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?I.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===a.H.Alpha&&(t.include(n.f5,e),t.include(y.z,e),t.include(x.l,e),F.uniforms.add(new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&F.uniforms.add(new P.A("tex",(e=>e.texture))),F.include(w.y),F.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?I.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===a.H.Color&&(t.include(n.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(y.z,e),t.include(e.instancedDoublePrecision?E.hb:E.XE,e),t.include(x.l,e),(0,C.hY)(t.fragment,e),(0,_.Pe)(F),(0,g.PN)(F),(0,g.sC)(F),F.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.J("ambient",(e=>e.ambient)),new M.J("diffuse",(e=>e.diffuse)),new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&F.uniforms.add(new P.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),F.include(w.y),(0,_.F1)(F),F.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?I.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?I.H`albedo = mix(albedo, vec3(1), 0.9);`:I.H``}
        ${I.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?I.H`vec3 normalGround = normalize(vpos + localOrigin);`:I.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:I.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?I.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?I.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===N.A.Color?I.H`fragColor = premultiplyAlpha(fragColor);`:I.H``}
      }
    `)),t.include(p.s,e),t}const D=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},46516:(e,t,r)=>{r.d(t,{S:()=>v,b:()=>m,g:()=>f});var o=r(88396),i=r(6394),a=r(24967),n=r(21002),s=r(96415),l=r(82999),c=r(58406),d=r(98634),u=r(64201),h=r(19253);function m(){const e=new u.kG,t=e.fragment;return e.include(a.k),t.include(n.S),e.include(s.GZ),t.uniforms.add(new c.p("radius",((e,t)=>f(t.camera)))),t.code.add(d.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.A("nearFar",((e,t)=>t.camera.nearFar)),new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new c.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,o.s)(p,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,o.s)(p,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function f(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const p=(0,i.a)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:f},Symbol.toStringTag,{value:"Module"}))},97727:(e,t,r)=>{r.d(t,{S:()=>f,b:()=>m});var o=r(11186),i=r(24967),a=r(21002),n=r(22527),s=r(82999),l=r(58406),c=r(98634),d=r(64201),u=r(78050),h=r(19253);function m(){const e=new d.kG,t=e.fragment;e.include(i.k);return t.include(a.S),t.uniforms.add(new h.A("depthMap",(e=>e.depthTexture)),new u.R("tex",(e=>e.colorTexture)),new n.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,o.o)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(4)}; r <= ${c.H.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},48976:(e,t,r)=>{r.d(t,{a:()=>m,c:()=>v,g:()=>d,j:()=>M,k:()=>p,m:()=>u,s:()=>c});var o=r(11873),i=r(98131),a=r(71353),n=r(26277),s=r(11186),l=r(90045);function c(e,t,r){r*=.5;const o=Math.sin(r);return e[0]=o*t[0],e[1]=o*t[1],e[2]=o*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),o=Math.sin(r/2);return o>(0,n.g)()?(e[0]=t[0]/o,e[1]=t[1]/o,e[2]=t[2]/o):(e[0]=1,e[1]=0,e[2]=0),r}function u(e,t,r){const o=t[0],i=t[1],a=t[2],n=t[3],s=r[0],l=r[1],c=r[2],d=r[3];return e[0]=o*d+n*s+i*c-a*l,e[1]=i*d+n*l+a*s-o*c,e[2]=a*d+n*c+o*l-i*s,e[3]=n*d-o*s-i*l-a*c,e}function h(e,t,r,o){const i=t[0],a=t[1],s=t[2],l=t[3];let c,d,u,h,m,f=r[0],p=r[1],v=r[2],g=r[3];return d=i*f+a*p+s*v+l*g,d<0&&(d=-d,f=-f,p=-p,v=-v,g=-g),1-d>(0,n.g)()?(c=Math.acos(d),u=Math.sin(c),h=Math.sin((1-o)*c)/u,m=Math.sin(o*c)/u):(h=1-o,m=o),e[0]=h*i+m*f,e[1]=h*a+m*p,e[2]=h*s+m*v,e[3]=h*l+m*g,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function f(e,t){const r=t[0]+t[4]+t[8];let o;if(r>0)o=Math.sqrt(r+1),e[3]=.5*o,o=.5/o,e[0]=(t[5]-t[7])*o,e[1]=(t[6]-t[2])*o,e[2]=(t[1]-t[3])*o;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const i=(r+1)%3,a=(r+2)%3;o=Math.sqrt(t[3*r+r]-t[3*i+i]-t[3*a+a]+1),e[r]=.5*o,o=.5/o,e[3]=(t[3*i+a]-t[3*a+i])*o,e[i]=(t[3*i+r]+t[3*r+i])*o,e[a]=(t[3*a+r]+t[3*r+a])*o}return e}function p(e,t,r,o){const i=.5*Math.PI/180;t*=i,r*=i,o*=i;const a=Math.sin(t),n=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(o),d=Math.cos(o);return e[0]=a*l*d-n*s*c,e[1]=n*s*d+a*l*c,e[2]=n*l*c-a*s*d,e[3]=n*l*d+a*s*c,e}const v=l.c,g=l.s,_=l.a,x=u,T=l.b,b=l.d,E=l.l,S=l.f,A=S,y=l.g,w=y,C=l.n,M=l.h,R=l.e;const O=(0,a.c)(),I=(0,a.f)(1,0,0),H=(0,a.f)(0,1,0);const P=(0,i.a)(),N=(0,i.a)();const L=(0,o.a)();Object.freeze(Object.defineProperty({__proto__:null,add:_,calculateW:function(e,t){const r=t[0],o=t[1],i=t[2];return e[0]=r,e[1]=o,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-o*o-i*i)),e},conjugate:m,copy:v,dot:b,equals:R,exactEquals:M,fromEuler:p,fromMat3:f,getAxisAngle:d,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){const r=t[0],o=t[1],i=t[2],a=t[3],n=r*r+o*o+i*i+a*a,s=n?1/n:0;return e[0]=-r*s,e[1]=-o*s,e[2]=-i*s,e[3]=a*s,e},len:A,length:S,lerp:E,mul:x,multiply:u,normalize:C,random:function(e){const t=n.R,r=t(),o=t(),i=t(),a=Math.sqrt(1-r),s=Math.sqrt(r);return e[0]=a*Math.sin(2*Math.PI*o),e[1]=a*Math.cos(2*Math.PI*o),e[2]=s*Math.sin(2*Math.PI*i),e[3]=s*Math.cos(2*Math.PI*i),e},rotateX:function(e,t,r){r*=.5;const o=t[0],i=t[1],a=t[2],n=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=o*l+n*s,e[1]=i*l+a*s,e[2]=a*l-i*s,e[3]=n*l-o*s,e},rotateY:function(e,t,r){r*=.5;const o=t[0],i=t[1],a=t[2],n=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=o*l-a*s,e[1]=i*l+n*s,e[2]=a*l+o*s,e[3]=n*l-i*s,e},rotateZ:function(e,t,r){r*=.5;const o=t[0],i=t[1],a=t[2],n=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=o*l+i*s,e[1]=i*l-o*s,e[2]=a*l+n*s,e[3]=n*l-a*s,e},rotationTo:function(e,t,r){const o=(0,s.j)(t,r);return o<-.999999?((0,s.b)(O,I,t),(0,s.k)(O)<1e-6&&(0,s.b)(O,H,t),(0,s.n)(O,O),c(e,O,Math.PI),e):o>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.b)(O,t,r),e[0]=O[0],e[1]=O[1],e[2]=O[2],e[3]=1+o,C(e,e))},scale:T,set:g,setAxes:function(e,t,r,o){const i=L;return i[0]=r[0],i[3]=r[1],i[6]=r[2],i[1]=o[0],i[4]=o[1],i[7]=o[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],C(e,f(e,i))},setAxisAngle:c,slerp:h,sqlerp:function(e,t,r,o,i,a){return h(P,t,i,a),h(N,r,o,a),h(e,P,N,2*a*(1-a)),e},sqrLen:w,squaredLength:y,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},59447:(e,t,r)=>{r.d(t,{r:()=>o});class o{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const o=this._outer.get(e);o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},71277:(e,t,r)=>{function o(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>o,pJ:()=>i});const a=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,n,/^jsapps.esri.com$/,s,l]},38330:(e,t,r)=>{r.d(t,{t:()=>i});var o=r(76200);async function i(e,t){const{data:r}=await(0,o.Z)(e,{responseType:"image",...t});return r}},28885:(e,t,r)=>{r.r(t),r.d(t,{fetch:()=>jt,gltfToEngineResources:()=>kt,parseUrl:()=>qt});var o=r(71277),i=r(22753),a=r(11873),n=r(14226),s=r(81949),l=r(11186),c=r(71353),d=r(41414),u=r(18722);function h(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=u.c8?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}var m=r(25158),f=r(32035),p=r(19093),v=r(19131),g=r(92770),_=r(69618),x=r(27053),T=r(57516),b=r(32315),E=r(57661),S=r(23588),A=r(15245);function y(e){if(null==e)return null;const t=null!=e.offset?e.offset:A.Z,r=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:A.O,a=(0,S.f)(1,0,0,0,1,0,t[0],t[1],1),n=(0,S.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=(0,S.f)(o[0],0,0,0,o[1],0,0,0,1),l=(0,S.c)();return(0,i.m)(l,n,s),(0,i.m)(l,a,l),l}class w{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class C{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new w,this.numberOfVertices=0}}var M=r(76200),R=r(14921),O=r(59896),I=r(10064),H=r(32718),P=r(59447),N=r(66978),L=r(49901),F=r(39406),D=r(38330),B=r(91526),z=r(68401),G=r(28328),V=r(93169),U=r(91505),W=r(92026),j=r(35995),q=r(5640),k=r(65905);let $;var J;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(J||(J={}));var Y=r(8548),X=r(57808),Z=r(3384);let K=null,Q=null;async function ee(){return null==Q&&(Q=function(){if(null==$){const e=e=>(0,k.V)(`esri/libs/basisu/${e}`);$=r.e(61562).then(r.bind(r,61562)).then((e=>e.b)).then((t=>{let{default:r}=t;return r({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))}))}return $}(),K=await Q),Q}function te(e,t,r,o,i){const a=(0,Z.RG)(t?Y.q_.COMPRESSED_RGBA8_ETC2_EAC:Y.q_.COMPRESSED_RGB8_ETC2),n=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*a*n)}function re(e){return e.getNumImages()>=1&&!e.isUASTC()}function oe(e){return e.getFaces()>=1&&e.isETC1S()}function ie(e,t,r,o,i,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?o?[J.ETC2_RGBA,Y.q_.COMPRESSED_RGBA8_ETC2_EAC]:[J.ETC1_RGB,Y.q_.COMPRESSED_RGB8_ETC2]:c?o?[J.BC3_RGBA,Y.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[J.BC1_RGB,Y.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[J.RGBA32,Y.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let f=0;f<h;f++)m.push(new Uint8Array(n(f,d))),s(f,d,m[f]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?Y.cw.LINEAR_MIPMAP_LINEAR:Y.cw.LINEAR,t.width=i,t.height=a,new X.x(e,t,{type:"compressed",levels:m})}var ae=r(1395),ne=r(79100);const se=H.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),le=542327876,ce=131072;function de(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ue=de("DXT1"),he=de("DXT3"),me=de("DXT5");function fe(e,t,r){const o=function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==le)return se.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return se.error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let i,a;switch(o){case ue:i=8,a=Y.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case he:i=16,a=Y.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case me:i=16,a=Y.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return se.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(o)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(se.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[2]&ce&&!1!==t&&(n=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let p=0;p<n;++p)h=(s+3>>2)*(l+3>>2)*i,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:a,width:c,height:d}}(r,t.hasMipmap??!1);if(null==o)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:s}=o;return t.samplingMode=i.levels.length>1?Y.cw.LINEAR_MIPMAP_LINEAR:Y.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=n,t.height=s,new X.x(e,t,i)}function pe(e,t,r){if(e instanceof ImageData)return pe(ve(e),t,r);const o=document.createElement("canvas");return o.width=t,o.height=r,o.getContext("2d").drawImage(e,0,0,o.width,o.height),o}function ve(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new I.Z("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var ge,_e=r(97731),xe=r(52311);class Te extends ae.c{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=ne.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new U.Z,this._parameters={...Ee,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,j.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,j.HK)(e.src)||(0,j.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new xe.X;return t.wrapMode=this._parameters.wrap??Y.e8.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?Y.cw.LINEAR_MIPMAP_LINEAR:Y.cw.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||function(e,t){if(null==e)return 0;if((0,u.eP)(e)||(0,u.lq)(e))return t.encoding===z.Ti.KTX2_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.KTX2File(new Uint8Array(e)),o=oe(r)?te(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):t.encoding===z.Ti.BASIS_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.BasisFile(new Uint8Array(e)),o=re(r)?te(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?be(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new X.x(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,u.eP)(t)||(0,u.lq)(t))&&this._parameters.encoding===z.Ti.DDS_ENCODING?this._loadFromDDSData(e,t):((0,u.eP)(t)||(0,u.lq)(t))&&this._parameters.encoding===z.Ti.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,u.eP)(t)||(0,u.lq)(t))&&this._parameters.encoding===z.Ti.BASIS_ENCODING?this._loadFromBasis(e,t):(0,u.lq)(t)?this._loadFromPixelData(e,t):(0,u.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<ge.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=fe(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const o=new K.KTX2File(new Uint8Array(r));if(!oe(o))return null;o.startTranscoding();const i=ie(e,t,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),((e,t)=>o.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>o.transcodeImage(r,e,0,0,t,0,-1,-1)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const o=new K.BasisFile(new Uint8Array(r));if(!re(o))return null;o.startTranscoding();const i=ie(e,t,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),((e,t)=>o.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>o.transcodeImage(r,0,e,t,0,0)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,_e.hu)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?Y.VI.LUMINANCE:3===this._parameters.components?Y.VI.RGB:Y.VI.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new X.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const o=await(0,D.t)(t,{signal:r});return(0,N.k_)(r),this._loadFromImage(e,o)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const o=await(0,q.fY)(t,t.src,!1,r);return(0,N.k_)(r),this._loadFromImage(e,o)}))}_loadFromVideoElement(e,t){return t.readyState>=ge.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((o,i)=>{const a=()=>{t.removeEventListener("loadeddata",n),t.removeEventListener("error",s),(0,W.hw)(l)},n=()=>{t.readyState>=ge.HAVE_CURRENT_DATA&&(a(),o(this._loadFromImage(e,t)))},s=e=>{a(),i(e||new I.Z("Failed to load video"))};t.addEventListener("loadeddata",n),t.addEventListener("error",s);const l=(0,N.fu)(r,(()=>s((0,N.zE)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?ve(e):e;let o=e.width,i=e.height;do{o=Math.ceil(o/2),i=Math.ceil(i/2),r=o*i}while(r>1048576||null!=t&&(o>t||i>t));return pe(e,o,i)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const o=t/r;return pe(e,Math.round(e.width*o),Math.round(e.height*o))}(r,t)}const o=be(r);this._parameters.width=o.width,this._parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this._parameters.components?Y.VI.RGB:Y.VI.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new X.x(e,i,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const o=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}unload(){if(this._glTexture=(0,W.M2)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function be(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ge||(ge={}));const Ee={wrap:{s:Y.e8.REPEAT,t:Y.e8.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var Se=r(4760),Ae=r(50951),ye=r(55158),we=r(37081),Ce=r(16010),Me=r(96658),Re=r(41481),Oe=r(25278),Ie=r(56529),He=r(78041),Pe=r(93822),Ne=r(23470),Le=r(94219);const Fe=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.sphere=(0,Ne.c)(),this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const o=this.objectTransform.transform,i=(0,l.s)(De,e,t,r),a=(0,l.e)(i,i,o),n=this.offset/(0,l.l)(a);(0,l.q)(a,a,a,n);const s=this.objectTransform.inverse;return(0,l.e)(this.tmpVertex,a,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,l.l)(e);(0,l.q)(e,e,e,r);const o=this.offset/(0,l.l)(t);(0,l.q)(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,l.l)(e),r=this.offset/t;return(0,l.q)(this.sphere,e,e,r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.componentLocalOriginLength=0,this._tmpVertex=(0,c.c)(),this._mbs=(0,Ne.c)(),this._obb=(0,Le.Ue)(),this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,l.l)(e)}applyToVertex(e,t,r){const o=(0,l.s)(De,e,t,r),i=(0,l.s)(Be,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,l.l)(i);return(0,l.q)(this._tmpVertex,o,i,a),this._tmpVertex}applyToAabb(e){const t=(0,l.s)(De,e[0],e[1],e[2]+this.componentLocalOriginLength),r=(0,l.s)(Be,e[3],e[4],e[5]+this.componentLocalOriginLength),o=(0,l.z)(ze,t),i=(0,l.z)(Ge,r),a=(0,l.w)(Ve,t),n=(0,l.w)(Ue,r),s=(0,l.x)(We,a,n);s[0]=o[0]*i[0]<0?0:s[0],s[1]=o[1]*i[1]<0?0:s[1],s[2]=o[2]*i[2]<0?0:s[2];const c=(0,l.l)(s);if(c<this._totalOffset)return e[0]-=t[0]<0?this._totalOffset:0,e[1]-=t[1]<0?this._totalOffset:0,e[2]-=t[2]<0?this._totalOffset:0,e[3]+=r[0]>0?this._totalOffset:0,e[4]+=r[1]>0?this._totalOffset:0,e[5]+=r[2]>0?this._totalOffset:0,e;const d=(0,l.D)(We,a,n),u=(0,l.l)(d),h=this._totalOffset/u,m=this._totalOffset/c;return e[0]+=t[0]*(t[0]>0?h:m),e[1]+=t[1]*(t[1]>0?h:m),e[2]+=t[2]*(t[2]>0?h:m),e[3]+=r[0]*(r[0]<0?h:m),e[4]+=r[1]*(r[1]<0?h:m),e[5]+=r[2]*(r[2]<0?h:m),e}applyToMbs(e){const t=(0,l.l)(e),r=this._totalOffset/t;return(0,l.q)(this._mbs,e,e,r),this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){return(0,Le.gI)(e,this._totalOffset,this._totalOffset,Ae.JY.Global,this._obb),this._obb}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const o=(0,l.s)(De,e,t,r),i=(0,l.g)(Be,o,this.localOrigin),a=this.offset/(0,l.l)(i);return(0,l.q)(this.tmpVertex,o,i,a),this.tmpVertex}applyToAabb(e){const t=ze,r=Ge,o=Ve;for(let s=0;s<3;++s)t[s]=e[0+s]+this.localOrigin[s],r[s]=e[3+s]+this.localOrigin[s],o[s]=t[s];const i=this.applyToVertex(t[0],t[1],t[2]);for(let s=0;s<3;++s)e[s]=i[s],e[s+3]=i[s];const a=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let o=0;o<3;++o)e[o]=Math.min(e[o],r[o]),e[o+3]=Math.max(e[o+3],r[o])};for(let s=1;s<8;++s){for(let e=0;e<3;++e)o[e]=0==(s&1<<e)?t[e]:r[e];a(o)}let n=0;for(let s=0;s<3;++s)t[s]*r[s]<0&&(n|=1<<s);if(0!==n&&7!==n)for(let s=0;s<8;++s)if(0==(n&s)){for(let e=0;e<3;++e)o[e]=0!=(n&1<<e)?0:0!=(s&1<<e)?t[e]:r[e];a(o)}for(let s=0;s<3;++s)e[s]-=this.localOrigin[s],e[s+3]-=this.localOrigin[s];return e}};const De=(0,c.c)(),Be=(0,c.c)(),ze=(0,c.c)(),Ge=(0,c.c)(),Ve=(0,c.c)(),Ue=(0,c.c)(),We=(0,c.c)();function je(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,s=i.length;r*=n;for(let l=0;l<s;++l){const e=2*i[l];a[r]=o[e],a[r+1]=o[e+1],r+=n}}function qe(e,t,r,o){const{data:i,indices:a}=e,n=t.typedBuffer,s=t.typedBufferStride,l=a.length;if(r*=s,null==o||1===o)for(let c=0;c<l;++c){const e=3*a[c];n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],r+=s}else for(let c=0;c<l;++c){const e=3*a[c];for(let t=0;t<o;++t)n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],r+=s}}function ke(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const{data:i,indices:a}=e,n=t.typedBuffer,s=t.typedBufferStride,l=a.length;if(r*=s,1===o)for(let c=0;c<l;++c){const e=4*a[c];n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],n[r+3]=i[e+3],r+=s}else for(let c=0;c<l;++c){const e=4*a[c];for(let t=0;t<o;++t)n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],n[r+3]=i[e+3],r+=s}}function $e(e,t,r,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const a=t.typedBuffer,n=t.typedBufferStride;if(o*=n,1===i)for(let s=0;s<r;++s)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n;else for(let s=0;s<r;++s)for(let t=0;t<i;++t)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n}function Je(e,t,r,o,i,a){switch(e){case Se.T.POSITION:{(0,_e.hu)(3===t.size);const o=i.getField(e,m.ct);(0,_e.hu)(!!o,`No buffer view for ${e}`),o&&function(e,t,r,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void qe(e,r,o,i);const{data:a,indices:s}=e,l=r.typedBuffer,c=r.typedBufferStride,d=s.length,u=t[0],h=t[1],m=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],E=t[14];o*=c;let S=0,A=0,y=0;const w=(0,n.y)(t)?e=>{S=a[e]+T,A=a[e+1]+b,y=a[e+2]+E}:e=>{const t=a[e],r=a[e+1],o=a[e+2];S=u*t+f*r+g*o+T,A=h*t+p*r+_*o+b,y=m*t+v*r+x*o+E};if(1===i)for(let n=0;n<d;++n)w(3*s[n]),l[o]=S,l[o+1]=A,l[o+2]=y,o+=c;else for(let n=0;n<d;++n){w(3*s[n]);for(let e=0;e<i;++e)l[o]=S,l[o+1]=A,l[o+2]=y,o+=c}}(t,r,o,a);break}case Se.T.NORMAL:{(0,_e.hu)(3===t.size);const r=i.getField(e,m.ct);(0,_e.hu)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void qe(e,r,o,i);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,n.z)(l),E=1e-6,S=1-E;o*=d;let A=0,y=0,w=0;const C=(0,n.y)(l)?e=>{A=a[e],y=a[e+1],w=a[e+2]}:e=>{const t=a[e],r=a[e+1],o=a[e+2];A=h*t+p*r+_*o,y=m*t+v*r+x*o,w=f*t+g*r+T*o};if(1===i)if(b)for(let n=0;n<u;++n){C(3*s[n]);const e=A*A+y*y+w*w;if(e<S&&e>E){const t=1/Math.sqrt(e);c[o]=A*t,c[o+1]=y*t,c[o+2]=w*t}else c[o]=A,c[o+1]=y,c[o+2]=w;o+=d}else for(let n=0;n<u;++n)C(3*s[n]),c[o]=A,c[o+1]=y,c[o+2]=w,o+=d;else for(let n=0;n<u;++n){if(C(3*s[n]),b){const e=A*A+y*y+w*w;if(e<S&&e>E){const t=1/Math.sqrt(e);A*=t,y*=t,w*=t}}for(let e=0;e<i;++e)c[o]=A,c[o+1]=y,c[o+2]=w,o+=d}}(t,o,r,a);break}case Se.T.NORMALCOMPRESSED:{(0,_e.hu)(2===t.size);const r=i.getField(e,m.or);(0,_e.hu)(!!r,`No buffer view for ${e}`),r&&je(t,r,a);break}case Se.T.UV0:{(0,_e.hu)(2===t.size);const r=i.getField(e,m.Eu);(0,_e.hu)(!!r,`No buffer view for ${e}`),r&&je(t,r,a);break}case Se.T.COLOR:case Se.T.SYMBOLCOLOR:{const r=i.getField(e,m.mc);(0,_e.hu)(!!r,`No buffer view for ${e}`),(0,_e.hu)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const{data:a,indices:n}=e,s=r.typedBuffer,l=r.typedBufferStride,c=n.length;if(o*=l,t!==a.length||4!==t)if(1!==i)if(4!==t)for(let d=0;d<c;++d){const e=3*n[d];for(let t=0;t<i;++t)s[o]=a[e],s[o+1]=a[e+1],s[o+2]=a[e+2],s[o+3]=255,o+=l}else for(let d=0;d<c;++d){const e=4*n[d];for(let t=0;t<i;++t)s[o]=a[e],s[o+1]=a[e+1],s[o+2]=a[e+2],s[o+3]=a[e+3],o+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*n[e];s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=a[t+3],o+=l}return}for(let e=0;e<c;++e){const t=3*n[e];s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=255,o+=l}}else{s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,n=e[o/=4];o+=t;const d=c*i;for(let r=1;r<d;++r)e[o]=n,o+=t}}(t,t.size,r,a);break}case Se.T.COLORFEATUREATTRIBUTE:{const r=i.getField(e,m.ly);(0,_e.hu)(!!r,`No buffer view for ${e}`),(0,_e.hu)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,s=i.length,l=o[0];r*=n;for(let c=0;c<s;++c)a[r]=l,r+=n}(t,r,a);break}case Se.T.TANGENT:{(0,_e.hu)(4===t.size);const r=i.getField(e,m.ek);(0,_e.hu)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void ke(e,r,o,i);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,n.z)(l),E=1e-6,S=1-E;if(o*=d,1===i)for(let n=0;n<u;++n){const e=4*s[n],t=a[e],r=a[e+1],i=a[e+2],l=a[e+3];let u=h*t+p*r+_*i,A=m*t+v*r+x*i,y=f*t+g*r+T*i;if(b){const e=u*u+A*A+y*y;if(e<S&&e>E){const t=1/Math.sqrt(e);u*=t,A*=t,y*=t}}c[o]=u,c[o+1]=A,c[o+2]=y,c[o+3]=l,o+=d}else for(let n=0;n<u;++n){const e=4*s[n],t=a[e],r=a[e+1],l=a[e+2],u=a[e+3];let A=h*t+p*r+_*l,y=m*t+v*r+x*l,w=f*t+g*r+T*l;if(b){const e=A*A+y*y+w*w;if(e<S&&e>E){const t=1/Math.sqrt(e);A*=t,y*=t,w*=t}}for(let a=0;a<i;++a)c[o]=A,c[o+1]=y,c[o+2]=w,c[o+3]=u,o+=d}}(t,o,r,a);break}case Se.T.PROFILERIGHT:case Se.T.PROFILEUP:case Se.T.PROFILEVERTEXANDNORMAL:case Se.T.FEATUREVALUE:{(0,_e.hu)(4===t.size);const r=i.getField(e,m.ek);(0,_e.hu)(!!r,`No buffer view for ${e}`),r&&ke(t,r,a)}}}class Ye{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(Se.T.POSITION).indices.length}write(e,t,r,o,i){!function(e,t,r,o,i,a){for(const n of t.fields.keys()){const t=e.attributes.get(n),s=t?.indices;if(t&&s)Je(n,t,r,o,i,a);else if(n===Se.T.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(Se.T.POSITION)?.indices;if(t){const r=t.length,o=i.getField(n,m.mc);$e(e.objectAndLayerIdColor,o,r,a)}}}}(r,this.vertexBufferLayout,e,t,o,i)}}var Xe=r(80026),Ze=r(67077),Ke=r(60113),Qe=r(85380),et=r(26461),tt=r(82144),rt=r(31132),ot=r(7566),it=r(27627);Y.wb.LESS,Y.wb.ALWAYS;const at={mask:255},nt={function:{func:Y.wb.ALWAYS,ref:z.hU.OutlineVisualElementMask,mask:z.hU.OutlineVisualElementMask},operation:{fail:Y.xS.KEEP,zFail:Y.xS.KEEP,zPass:Y.xS.ZERO}},st={function:{func:Y.wb.ALWAYS,ref:z.hU.OutlineVisualElementMask,mask:z.hU.OutlineVisualElementMask},operation:{fail:Y.xS.KEEP,zFail:Y.xS.KEEP,zPass:Y.xS.REPLACE}};Y.wb.EQUAL,z.hU.OutlineVisualElementMask,z.hU.OutlineVisualElementMask,Y.xS.KEEP,Y.xS.KEEP,Y.xS.KEEP,Y.wb.NOTEQUAL,z.hU.OutlineVisualElementMask,z.hU.OutlineVisualElementMask,Y.xS.KEEP,Y.xS.KEEP,Y.xS.KEEP;var lt=r(25920);const ct=[1,1,.5],dt=[0,.6,.2],ut=[0,1,.2];var ht=r(65630),mt=r(36207);class ft extends Qe.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.e)(ct),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=z.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Ce.r.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.f)(.2,.2,.2),this.diffuse=(0,c.f)(.8,.8,.8),this.externalColor=(0,Ze.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=z.Gv.Less,this.textureAlphaMode=z.JJ.Blend,this.textureAlphaCutoff=et.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ie.yD.Occlude,this.isDecoration=!1}}class pt extends rt.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ae.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Ke.N.Default:Ke.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,pt.shader)}_initializeProgram(e,t){return new it.$(e.rctx,t.get().build(this.configuration),ot.i)}_convertDepthTestFunction(e){return e===z.Gv.Lequal?Y.wb.LEQUAL:Y.wb.LESS}_makePipeline(e,t){const r=this.configuration,o=e===lt.A.NONE,i=e===lt.A.FrontFace;return(0,mt.sm)({blending:r.output!==we.H.Color&&r.output!==we.H.Alpha||!r.transparent?null:o?He.wu:(0,He.j7)(e),culling:vt(r)?(0,mt.zp)(r.cullFace):null,depthTest:{func:(0,He.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(o||i)&&r.writeDepth?mt.LZ:null,colorWrite:mt.BK,stencilWrite:r.hasOccludees?at:null,stencilTest:r.hasOccludees?t?st:nt:null,polygonOffset:o||i?null:(0,He.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function vt(e){return e.cullFace!==z.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}pt.shader=new tt.J(ht.D,(()=>r.e(40294).then(r.bind(r,40294))));var gt=r(27366),_t=r(33559),xt=r(81221),Tt=r(99340);class bt extends xt.PO{}(0,gt._)([(0,_t.o)({constValue:!0})],bt.prototype,"hasSliceHighlight",void 0),(0,gt._)([(0,_t.o)({constValue:!1})],bt.prototype,"hasSliceInVertexProgram",void 0),(0,gt._)([(0,_t.o)({constValue:Tt.P.Pass})],bt.prototype,"pbrTextureBindType",void 0);class Et extends bt{constructor(){super(...arguments),this.output=we.H.Color,this.alphaDiscardMode=z.JJ.Opaque,this.doubleSidedMode=Me.q.None,this.pbrMode=Re.f7.Disabled,this.cullFace=z.Vr.None,this.transparencyPassType=lt.A.NONE,this.normalType=Ce.r.Attribute,this.textureCoordinateType=Ke.N.None,this.customDepthTest=z.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,gt._)([(0,_t.o)({count:we.H.COUNT})],Et.prototype,"output",void 0),(0,gt._)([(0,_t.o)({count:z.JJ.COUNT})],Et.prototype,"alphaDiscardMode",void 0),(0,gt._)([(0,_t.o)({count:Me.q.COUNT})],Et.prototype,"doubleSidedMode",void 0),(0,gt._)([(0,_t.o)({count:Re.f7.COUNT})],Et.prototype,"pbrMode",void 0),(0,gt._)([(0,_t.o)({count:z.Vr.COUNT})],Et.prototype,"cullFace",void 0),(0,gt._)([(0,_t.o)({count:lt.A.COUNT})],Et.prototype,"transparencyPassType",void 0),(0,gt._)([(0,_t.o)({count:Ce.r.COUNT})],Et.prototype,"normalType",void 0),(0,gt._)([(0,_t.o)({count:Ke.N.COUNT})],Et.prototype,"textureCoordinateType",void 0),(0,gt._)([(0,_t.o)({count:z.Gv.COUNT})],Et.prototype,"customDepthTest",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"spherical",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasVertexColors",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasSymbolColors",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasVerticalOffset",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasSlicePlane",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasSliceHighlight",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasColorTexture",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasMetallicRoughnessTexture",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasEmissionTexture",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasOcclusionTexture",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasNormalTexture",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasScreenSizePerspective",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasVertexTangents",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasOccludees",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"multipassEnabled",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasModelTransformation",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"offsetBackfaces",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"vvSize",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"vvColor",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"receiveShadows",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"receiveAmbientOcclusion",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"textureAlphaPremultiplied",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"instanced",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"instancedColor",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"objectAndLayerIdColorInstanced",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"instancedDoublePrecision",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"writeDepth",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"transparent",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"enableOffset",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"cullAboveGround",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"snowCover",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasColorTextureTransform",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasEmissionTextureTransform",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasNormalTextureTransform",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasOcclusionTextureTransform",void 0),(0,gt._)([(0,_t.o)()],Et.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,gt._)([(0,_t.o)({constValue:!1})],Et.prototype,"occlusionPass",void 0),(0,gt._)([(0,_t.o)({constValue:!0})],Et.prototype,"hasVvInstancing",void 0),(0,gt._)([(0,_t.o)({constValue:!1})],Et.prototype,"useCustomDTRExponentForWater",void 0),(0,gt._)([(0,_t.o)({constValue:!1})],Et.prototype,"supportsTextureAtlas",void 0),(0,gt._)([(0,_t.o)({constValue:!0})],Et.prototype,"useFillLights",void 0);var St=r(40563);class At extends pt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Ce.r.Attribute,t.doubleSidedMode=Me.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,At.shader)}}At.shader=new tt.J(St.R,(()=>r.e(50601).then(r.bind(r,50601))));class yt extends Ie.F5{constructor(e){super(e,Ct),this.supportsEdges=!0,this._configuration=new Et,this._vertexBufferLayout=function(e){const t=(0,ye.U$)().vec3f(Se.T.POSITION);return e.normalType===Ce.r.Compressed?t.vec2i16(Se.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(Se.T.NORMAL),e.hasVertexTangents&&t.vec4f(Se.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(Se.T.UV0),e.hasVertexColors&&t.vec4u8(Se.T.COLOR),e.hasSymbolColors&&t.vec4u8(Se.T.SYMBOLCOLOR),(0,V.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(Se.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==we.H.Shadow&&e!==we.H.ShadowExcludeHighlight&&e!==we.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:o,vvColor:i}=e,a="replace"===e.colorMixMode,n=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||i||o;return r&&l?a||n:r?a?s:n:l?a||n:a?s:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?z.Vr.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==we.H.Color&&e!==we.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Me.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Me.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Me.q.WindingOrder:Me.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Re.f7.Schematic:Re.f7.Normal:Re.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<He.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,o,i,a){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Pt,t[12],t[13],t[14]);let a=null;switch(r.viewingMode){case Ae.JY.Global:a=(0,l.n)(It,Pt);break;case Ae.JY.Local:a=(0,l.c)(It,Ot)}let n=0;const s=(0,l.f)(Nt,Pt,e.eye),c=(0,l.l)(s),d=(0,l.i)(s,s,1/c);let u=null;this.parameters.screenSizePerspective&&(u=(0,l.j)(a,d)),n+=(0,Xe.Hx)(e,c,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,l.i)(a,a,n),(0,l.t)(Ht,a,r.transform.inverseRotation),o=(0,l.f)(Mt,o,Ht),i=(0,l.f)(Rt,i,Ht)}(0,Xe.Bw)(e,r,o,i,function(e){return null!=e?(Fe.offset=e,Fe):null}(r.verticalOffset),a)}produces(e,t){return(t===we.H.Color||t===we.H.Alpha||t===we.H.Depth||t===we.H.Normal||t===we.H.Shadow||t===we.H.ShadowHighlight||t===we.H.ShadowExcludeHighlight||t===we.H.Highlight||t===we.H.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?Pe.r.TRANSPARENT_MATERIAL:Pe.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Pe.r.OPAQUE_MATERIAL)||e===Pe.r.DRAPED_MATERIAL)}createGLMaterial(e){return new wt(e)}createBufferWriter(){return new Ye(this._vertexBufferLayout)}}class wt extends Oe.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==we.H.Color&&this._output!==we.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?At:pt,e)}}const Ct=new class extends ft{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Mt=(0,c.c)(),Rt=(0,c.c)(),Ot=(0,c.f)(0,0,1),It=(0,c.c)(),Ht=(0,c.c)(),Pt=(0,c.c)(),Nt=(0,c.c)(),Lt=H.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ft(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const o=await(0,R.q6)(t.request(e,"json",r));if(!0===o.ok)return o.value;(0,N.r9)(o.error),Dt(o.error.details.url)}(e,r,t);const o=await(0,R.q6)((0,M.Z)(e,t));if(!0===o.ok)return o.value.data;(0,N.r9)(o.error),Dt(o.error)}(e,t),o=await async function(e,t){const r=new Array;for(const a in e){const o=e[a],i=o.images[0].data;if(!i){Lt.warn("Externally referenced texture data is not yet supported");continue}const n=o.encoding+";base64,"+i,s="/textureDefinitions/"+a,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Y.e8.REPEAT,t:Y.e8.REPEAT},preMultiplyAlpha:Gt(l)!==z.JJ.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):(0,D.t)(n,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}(r.textureDefinitions??{},t);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const e=o[a];i+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:o,size:i+(0,O.Ul)(r)}}function Dt(e){throw new I.Z("",`Request for object resource failed: ${e}`)}function Bt(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(Lt.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Lt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Lt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(Lt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else Lt.warn("Indexed geometries must specify faces"),o=!1;break}default:Lt.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(Lt.warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const a in i)i[a].values||(Lt.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function zt(e){const t=(0,d.cS)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.pp)(t,r.bbMin),(0,d.pp)(t,r.bbMax))})),t}function Gt(e){switch(e){case"mask":return z.JJ.Mask;case"maskAndTransparency":return z.JJ.MaskBlend;case"none":return z.JJ.Opaque;default:return z.JJ.Blend}}function Vt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ut=new L.G(1,2,"wosr");var Wt=r(68845);async function jt(e,t){const r=qt((0,o.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Ft(r.url,t)),{engineResources:o,referenceBoundingBox:i}=function(e,t){const r=new Array,o=new Array,i=new Array,a=new P.r,n=e.resource,s=L.G.parse(n.version||"1.0","wosr");Ut.validate(s);const l=n.model.name,d=n.model.geometries,u=n.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let p=0;p<d.length;p++){const e=d[p];if(!Bt(e))continue;const n=Vt(e),s=e.params.vertexAttributes,l=[],v=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},g=s[Se.T.POSITION],_=g.values.length/g.valuesPerElement;for(const t in s){const e=s[t],r=e.values,o=v(t)??(0,F.KF)(_);l.push([t,new B.a(r,o,e.valuesPerElement,!0)])}const x=n.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new Te(e,t);o.push(r),f.set(x,r)}const b=f.get(x),E=b?b.id:void 0,S=n.material;let A=a.get(S,x);if(null==A){const e=u[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,i=T?Gt(T.alphaChannelUsage):void 0,n={ambient:(0,c.e)(e.diffuse),diffuse:(0,c.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:E,initTextureTransparent:!0,doubleSided:!0,cullFace:z.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),A=new yt(n),a.set(S,x,A)}i.push(A);const y=new G.Z(A,l);m+=l.find((e=>e[0]===Se.T.POSITION))?.[1]?.indices.length??0,r.push(y)}return{engineResources:[{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:zt(r)}}(e,t);return{lods:o,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,T.Q)(new x.C(t.streamDataRequester),r.url,t,t.usePBR)),a=i.model.meta?.ESRI_proxyEllipsoid,d=i.meta.isEsriSymbolResource&&null!=a&&i.meta.uri.includes("/RealisticTrees/");d&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const i of o.parts){const o=i.attributes.normal;if(null==o)return;const a=i.attributes.position,d=a.count,u=(0,c.c)(),h=(0,c.c)(),f=(0,c.c)(),p=new Uint8Array(4*d),v=new Float64Array(3*d),g=(0,n.i)((0,s.a)(),i.transform);let _=0,x=0;for(let n=0;n<d;n++){a.getVec(n,h),o.getVec(n,u),(0,l.e)(h,h,i.transform),(0,l.f)(f,h,t.center),(0,l.B)(f,f,t.radius);const s=f[2],c=(0,l.l)(f),d=Math.min(.45+.55*c*c,1);(0,l.B)(f,f,t.radius),null!==g&&(0,l.e)(f,f,g),(0,l.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.p)(f,f,u,s>-1?.2:Math.min(-4*s-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*d,p[x+1]=255*d,p[x+2]=255*d,p[x+3]=255,x+=4}i.attributes.normal=new m.ct(v),i.attributes.color=new m.mc(p)}}}(i,a));const u=!!t.usePBR,h=i.meta.isEsriSymbolResource?{usePBR:u,isSchematic:!1,treeRendering:d,mrrFactors:[...ut]}:{usePBR:u,isSchematic:!1,treeRendering:!1,mrrFactors:[...ct]},f={...t.materialParameters,treeRendering:d},{engineResources:p,referenceBoundingBox:v}=kt(i,h,f,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:p,referenceBoundingBox:v,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function qt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function kt(e,t,r,o){const a=e.model,n=new Array,s=new Map,u=new Map,x=a.lods.length,T=(0,d.cS)();return a.lods.forEach(((e,S)=>{const A=!0===o.skipHighLods&&(x>1&&0===S||x>3&&1===S)||!1===o.skipHighLods&&null!=o.singleLodIndex&&S!==o.singleLodIndex;if(A&&0!==S)return;const w=new C(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=A?new yt({}):function(e,t,r,o,i,a,n){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),d=e.materials.get(t.material),u=null!=t.attributes.texCoord0,h=null!=t.attributes.normal;if(null==d)return null;const m=function(e){switch(e){case"BLEND":return z.JJ.Blend;case"MASK":return z.JJ.Mask;case"OPAQUE":case null:case void 0:return z.JJ.Opaque}}(d.alphaMode);if(!a.has(s)){if(u){const t=function(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t&&!n.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;n.set(t,new Te((0,E.$A)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,E.$A)(e)&&r,encoding:(0,E.$A)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(d.textureColor,m!==z.JJ.Opaque),t(d.textureNormal),t(d.textureOcclusion),t(d.textureEmissive),t(d.textureMetallicRoughness)}const r=d.color[0]**(1/Wt.j),f=d.color[1]**(1/Wt.j),p=d.color[2]**(1/Wt.j),v=d.emissiveFactor[0]**(1/Wt.j),g=d.emissiveFactor[1]**(1/Wt.j),_=d.emissiveFactor[2]**(1/Wt.j),x=null!=d.textureColor&&u?n.get(d.textureColor):null,T=function(e){let{normalTexture:t,metallicRoughnessTexture:r,metallicFactor:o,roughnessFactor:i,emissiveTexture:a,emissiveFactor:n,occlusionTexture:s}=e;return null==t&&null==r&&null==a&&(null==n||(0,l.h)(n,c.Z))&&null==s&&(null==i||1===i)&&(null==o||1===o||0===o)}({normalTexture:d.textureNormal,metallicRoughnessTexture:d.textureMetallicRoughness,metallicFactor:d.metallicFactor,roughnessFactor:d.roughnessFactor,emissiveTexture:d.textureEmissive,emissiveFactor:d.emissiveFactor,occlusionTexture:d.textureOcclusion});a.set(s,new yt({...o,transparent:m===z.JJ.Blend,customDepthTest:z.Gv.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[r,f,p],ambient:[r,f,p],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?z.Vr.None:z.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?Ce.r.Attribute:Ce.r.ScreenDerivative,castShadows:!0,textureId:null!=x?x.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:null!=d.textureNormal&&u?n.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=d.textureOcclusion&&u?n.get(d.textureOcclusion).id:void 0,emissiveTextureId:null!=d.textureEmissive&&u?n.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=d.textureMetallicRoughness&&u?n.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,_],mrrFactors:T?[...dt]:[d.metallicFactor,d.roughnessFactor,o.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:y(d.colorTextureTransform),normalTextureTransformMatrix:y(d.normalTextureTransform),occlusionTextureTransformMatrix:y(d.occlusionTextureTransform),emissiveTextureTransformMatrix:y(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:y(d.metallicRoughnessTextureTransform),...i}))}const f=a.get(s);if(r.stageResources.materials.push(f),u){const e=e=>{null!=e&&r.stageResources.textures.push(n.get(e))};e(d.textureColor),e(d.textureNormal),e(d.textureOcclusion),e(d.textureEmissive),e(d.textureMetallicRoughness)}return f}(a,e,w,t,r,s,u),{geometry:n,vertexCount:x}=function(e,t){const r=e.attributes.position.count,o=(0,b.p)(e.indices||r,e.primitiveType),a=h(3*r),{typedBuffer:n,typedBufferStride:s}=e.attributes.position;(0,f.t)(a,n,e.transform,3,s);const l=[[Se.T.POSITION,new B.a(a,o,3,!0)]];if(null!=e.attributes.normal){const t=h(3*r),{typedBuffer:a,typedBufferStride:n}=e.attributes.normal;(0,i.n)($t,e.transform),(0,f.a)(t,a,$t,3,n),l.push([Se.T.NORMAL,new B.a(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=h(4*r),{typedBuffer:a,typedBufferStride:n}=e.attributes.tangent;(0,i.n)($t,e.transform),(0,p.t)(t,a,$t,4,n),l.push([Se.T.TANGENT,new B.a(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=h(2*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.texCoord0;(0,v.n)(t,i,2,a),l.push([Se.T.UV0,new B.a(t,o,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof m.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,_.c)(t,e.attributes.color):e.attributes.color instanceof m.v6&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof m.ct?(0,f.s)(t,e.attributes.color,255,4):e.attributes.color instanceof m.ne?(0,g.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.mw&&(0,f.s)(t,e.attributes.color,1/256,4)),l.push([Se.T.COLOR,new B.a(t,o,4,!0)])}return{geometry:new G.Z(t,l),vertexCount:r}}(e,null!=o?o:new yt({})),C=n.boundingInfo;null!=C&&0===S&&((0,d.pp)(T,C.bbMin),(0,d.pp)(T,C.bbMax)),null!=o&&(w.stageResources.geometries.push(n),w.numberOfVertices+=x)})),A||n.push(w)})),{engineResources:n,referenceBoundingBox:T}}const $t=(0,a.a)()},49420:(e,t,r)=>{r.d(t,{a9:()=>o});var o;r(16889);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(o||(o={}))},55158:(e,t,r)=>{r.d(t,{Gw:()=>c,U$:()=>l});var o=r(25158),i=r(48734),a=r(97731);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fields.keys()){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.count;const i=this.stride;if(i%4==0){const a=new Uint32Array(e.buffer,t*i,o*i/4);new Uint32Array(this.buffer,r*i,o*i/4).set(a)}else{const a=new Uint8Array(e.buffer,t*i,o*i);new Uint8Array(this.buffer,r*i,o*i).set(a)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}vec2f(e,t){return this._appendField(e,o.Eu,t),this}vec2f64(e,t){return this._appendField(e,o.q6,t),this}vec3f(e,t){return this._appendField(e,o.ct,t),this}vec3f64(e,t){return this._appendField(e,o.fP,t),this}vec4f(e,t){return this._appendField(e,o.ek,t),this}vec4f64(e,t){return this._appendField(e,o.Cd,t),this}mat3f(e,t){return this._appendField(e,o.gK,t),this}mat3f64(e,t){return this._appendField(e,o.ey,t),this}mat4f(e,t){return this._appendField(e,o.bj,t),this}mat4f64(e,t){return this._appendField(e,o.O1,t),this}vec4u8(e,t){return this._appendField(e,o.mc,t),this}f32(e,t){return this._appendField(e,o.ly,t),this}f64(e,t){return this._appendField(e,o.oS,t),this}u8(e,t){return this._appendField(e,o.D_,t),this}u16(e,t){return this._appendField(e,o.av,t),this}i8(e,t){return this._appendField(e,o.Hz,t),this}vec2i8(e,t){return this._appendField(e,o.Vs,t),this}vec2i16(e,t){return this._appendField(e,o.or,t),this}vec2u8(e,t){return this._appendField(e,o.xA,t),this}vec4u16(e,t){return this._appendField(e,o.v6,t),this}u32(e,t){return this._appendField(e,o.Nu,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,a.hu)(!1,`${e} already added to vertex buffer layout`);const o=t.ElementCount*(0,i.n1)(t.ElementType),n=this._stride;this._stride+=o,this._fields.set(e,{size:o,constructor:t,offset:n,optional:r})}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,i.n1)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[o.ly,o.Eu,o.ct,o.ek,o.gK,o.bj,o.oS,o.q6,o.fP,o.Cd,o.ey,o.O1,o.D_,o.xA,o.ne,o.mc,o.av,o.TS,o.mw,o.v6,o.Nu,o.qt,o.G5,o.hu,o.Hz,o.Vs,o.P_,o.ir,o.o7,o.or,o.n1,o.zO,o.Jj,o.wA,o.PP,o.TN];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return m.get(e)}const m=new Map;d.forEach((e=>m.set(u(e),e)))},94219:(e,t,r)=>{r.d(t,{Ue:()=>d,gI:()=>u});r(22753);var o=r(11873),i=r(48976),a=r(98131),n=r(11186),s=r(71353),l=(r(90045),r(67077)),c=(r(41414),r(76146),r(50951));(0,a.a)(),(0,s.c)(),(0,s.c)(),(0,l.c)(),(0,o.a)();function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[-1,-1,-1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.a)();return{center:(0,s.g)(e),halfSize:(0,s.g)(t),quaternion:(0,a.b)(r)}}(()=>{const e=new Int8Array(162);let t=0;const r=r=>{for(let o=0;o<r.length;o++)e[t+o]=r[o];t+=6};r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4])})();function u(e,t,r,o,a){if((0,i.c)(a.quaternion,e.quaternion),o===c.JY.Global){(0,i.a)(p,e.quaternion),(0,n.v)(h,e.center,p),(0,n.w)(m,h),(0,n.x)(f,m,e.halfSize),(0,n.u)(f,m,f);const o=(0,n.l)(f);(0,n.g)(f,m,e.halfSize);const s=(0,n.l)(f);if(o<r)(0,n.c)(a.center,e.center),(0,n.s)(h,r,r,r),(0,n.g)(a.halfSize,e.halfSize,h);else{const i=s>0?1+t/s:1,l=o>0?1+r/o:1,c=(l+i)/2,d=(l-i)/2;(0,n.i)(a.halfSize,m,d),(0,n.q)(a.halfSize,a.halfSize,e.halfSize,c),(0,n.i)(a.center,m,c),(0,n.q)(a.center,a.center,e.halfSize,d),(0,n.z)(h,h),(0,n.A)(a.center,a.center,h),(0,n.v)(a.center,a.center,a.quaternion)}}else{const o=(0,n.s)(h,0,0,1);(0,n.q)(a.center,e.center,o,(r+t)/2),(0,i.a)(p,e.quaternion),(0,n.v)(o,o,p),(0,n.w)(o,o),(0,n.q)(a.halfSize,e.halfSize,o,(r-t)/2)}return a}const h=(0,s.c)(),m=(0,s.c)(),f=(0,s.c)(),p=(0,a.a)()},22357:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var o=r(37081),i=r(74058),a=r(82999),n=r(98634);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(n.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case o.H.Color:if(t.receiveShadows)return s(e),void r.code.add(n.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case o.H.Depth:case o.H.Shadow:case o.H.ShadowHighlight:case o.H.ShadowExcludeHighlight:return e.include(i.up,t),s(e),l(e),c(e),void r.code.add(n.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(n.H`void forwardLinearDepth() {}`)}},83734:(e,t,r)=>{r.d(t,{w:()=>i});var o=r(98634);function i(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},24967:(e,t,r)=>{r.d(t,{k:()=>a});var o=r(98634),i=r(4760);function a(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.attributes.add(i.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(o.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},37081:(e,t,r)=>{var o;r.d(t,{H:()=>o}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.CompositeColor=9]="CompositeColor",e[e.COUNT=10]="COUNT"}(o||(o={}))},33280:(e,t,r)=>{r.d(t,{f5:()=>c});var o=r(14226),i=r(81949),a=r(11186),n=r(71353),s=r(86471),l=(r(49450),r(98634));function c(e,t){d(e,t,new s.B("slicePlaneOrigin",((e,r)=>f(t,e,r))),new s.B("slicePlaneBasis1",((e,r)=>p(t,e,r,r.slicePlane?.basis1))),new s.B("slicePlaneBasis2",((e,r)=>p(t,e,r,r.slicePlane?.basis2))))}function d(e,t){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...o),e.fragment.uniforms.add(...o);const a=l.H`struct SliceFactors {
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
}`,s=t.hasSliceHighlight?l.H`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(s)}function u(e,t,r){return e.instancedDoublePrecision?(0,a.s)(v,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return null!=e?(0,a.f)(g,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,o.w)(x,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r){if(null==r.slicePlane)return n.Z;const o=u(e,t,r),i=h(o,r.slicePlane),s=m(e,o,r);return null!=s?(0,a.e)(g,i,s):i}function p(e,t,r,o){if(null==o||null==r.slicePlane)return n.Z;const i=u(e,t,r),s=h(i,r.slicePlane),l=m(e,i,r);return null!=l?((0,a.g)(_,o,s),(0,a.e)(g,s,l),(0,a.e)(_,_,l),(0,a.f)(_,_,g)):o}const v=(0,n.c)(),g=(0,n.c)(),_=(0,n.c)(),x=(0,i.a)()},94951:(e,t,r)=>{r.d(t,{w:()=>a});var o=r(22357),i=r(98634);function a(e){(0,o.bA)(e),e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},81221:(e,t,r)=>{r.d(t,{PO:()=>x,fQ:()=>b});var o=r(27366),i=r(22753),a=r(11873),n=r(81949),s=r(11186),l=r(71353),c=r(37081),d=r(27254),u=r(82552),h=r(86471),m=r(98634),f=r(35522),p=r(8654),v=r(33559),g=r(4760),_=r(43411);class x extends v.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,o._)([(0,v.o)()],x.prototype,"instancedDoublePrecision",void 0),(0,o._)([(0,v.o)()],x.prototype,"hasModelTransformation",void 0);const T=(0,a.a)();function b(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.g("model",(e=>e.modelTransformation??n.I))),e.vertex.uniforms.add(new f.c("normalLocalOriginFromModel",(e=>((0,i.n)(T,e.modelTransformation??n.I),T))))),t.instanced&&o&&(e.attributes.add(g.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.T.INSTANCEMODEL,"mat3"),e.attributes.add(g.T.INSTANCEMODELNORMAL,"mat3"));const a=e.vertex;o&&(a.include(d.$,t),a.uniforms.add(new h.B("viewOriginHi",((e,t)=>(0,_.U8)((0,s.s)(E,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),E))),new h.B("viewOriginLo",((e,t)=>(0,_.GB)((0,s.s)(E,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),E))))),a.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),a.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.H.Normal&&((0,u._8)(a),a.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&a.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const E=(0,l.c)()},16010:(e,t,r)=>{r.d(t,{O:()=>s,r:()=>o});var o,i=r(41644),a=r(98634),n=r(4760);function s(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(n.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case o.Attribute:e.attributes.add(n.T.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(t.normalType);case o.COUNT:case o.Ground:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(o||(o={}))},52276:(e,t,r)=>{r.d(t,{f:()=>a});var o=r(98634),i=r(4760);function a(e){e.attributes.add(i.T.POSITION,"vec3"),e.vertex.code.add(o.H`vec3 positionModel() { return position; }`)}},53230:(e,t,r)=>{r.d(t,{R:()=>c});var o=r(49420),i=r(98634);function a(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(o.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(o.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(o.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(o.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=r(99339),s=r(4760),l=r(80026);function c(e,t){t.hasSymbolColors?(e.include(a),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},60113:(e,t,r)=>{r.d(t,{D:()=>s,N:()=>o});var o,i=r(41644),a=r(98634),n=r(4760);function s(e,t){switch(t.textureCoordinateType){case o.Default:return e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o.Compressed:return e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case o.Atlas:return e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(n.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,i.Bg)(t.textureCoordinateType);case o.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case o.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(o||(o={}))},48655:(e,t,r)=>{r.d(t,{c:()=>a});var o=r(98634),i=r(4760);function a(e,t){t.hasVertexColors?(e.attributes.add(i.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85380:(e,t,r)=>{r.d(t,{Bb:()=>d,d4:()=>u});var o=r(41644),i=r(11873),a=(r(67077),r(16010)),n=r(74058),s=r(98634),l=r(82644),c=r(35522);function d(e,t){switch(t.normalType){case a.r.Attribute:case a.r.Compressed:e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.r.Ground:e.include(n.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.r.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,o.Bg)(t.normalType);case a.r.COUNT:}}class u extends n.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.a)()}}},74058:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>f});var o=r(11873),i=r(81949),a=r(71353),n=r(52276),s=r(27254),l=r(86471),c=r(49450),d=r(98634),u=r(82644),h=r(35522),m=r(8654);function f(e,t){e.include(n.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,a.c)(),this.transformWorldFromViewTL=(0,a.c)(),this.transformViewFromCameraRelativeRS=(0,o.a)(),this.transformProjFromView=(0,i.a)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>s});var o=r(41644),i=r(60113),a=r(98634);function n(e){e.fragment.code.add(a.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(i.D,t),t.textureCoordinateType){case i.N.Default:case i.N.Compressed:return void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case i.N.Atlas:return e.include(n),void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,o.Bg)(t.textureCoordinateType);case i.N.None:case i.N.COUNT:return}}},71410:(e,t,r)=>{r.d(t,{L:()=>f});var o=r(90045),i=r(67077),a=r(11186),n=r(71353),s=r(49450),l=r(98634);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
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
}`)}function d(e){return(0,a.s)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,n.c)();var h=r(82552),m=r(95276);function f(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new m.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,o.s)(p,a*s,n,r,i)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.J("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,h.hY)(e.vertex,t)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=(0,i.c)()},86419:(e,t,r)=>{r.d(t,{s:()=>y});var o=r(22357),i=r(37081),a=r(33280),n=r(94951),s=r(16010),l=r(98634),c=r(4760);function d(e,t){const r=t.output===i.H.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(c.T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?o?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(60113),h=r(85380),m=r(24842),f=r(78980);function p(e,t){switch(t.output){case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExcludeHighlight:e.fragment.include(m.f),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case i.H.Depth:e.fragment.include(f.n),e.fragment.code.add(l.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var v=r(67077),g=r(19253);const _=(0,v.f)(1,1,0,1),x=(0,v.f)(1,0,1,1);function T(e){e.fragment.uniforms.add(new g.A("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",_).add("unoccludedHighlightFlag","vec4",x),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var b=r(66472),E=r(65974),S=r(82552),A=r(68401);function y(e,t){const{vertex:r,fragment:c}=e,m=t.hasColorTexture&&t.alphaDiscardMode!==A.JJ.Opaque;switch(t.output){case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExcludeHighlight:case i.H.ObjectAndLayerIdColor:(0,S.Sv)(r,t),e.include(n.w,t),e.include(u.D,t),e.include(b.k,t),e.include(p,t),e.include(a.f5,t),e.include(d,t),(0,o.Zu)(e),e.varyings.add("depth","float"),m&&c.uniforms.add(new g.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(E.z,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===i.H.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case i.H.Normal:{(0,S.Sv)(r,t),e.include(n.w,t),e.include(s.O,t),e.include(h.Bb,t),e.include(u.D,t),e.include(b.k,t),m&&c.uniforms.add(new g.A("tex",(e=>e.texture))),t.normalType===s.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=t.normalType===s.r.Attribute||t.normalType===s.r.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(a.f5,t),e.include(E.z,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.r.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case i.H.Highlight:(0,S.Sv)(r,t),e.include(n.w,t),e.include(u.D,t),e.include(b.k,t),m&&c.uniforms.add(new g.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(a.f5,t),e.include(E.z,t),e.include(T,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},21002:(e,t,r)=>{r.d(t,{S:()=>a});var o=r(78980),i=r(98634);function a(e){e.include(o.n),e.code.add(i.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}},38171:(e,t,r)=>{r.d(t,{Q:()=>u});var o=r(60113),i=r(27284),a=r(96658),n=r(98634),s=r(78050),l=r(19253),c=r(99340),d=r(4760);function u(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(d.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===a.q.WindingOrder?r.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==o.N.None&&(e.include(i.i,t),r.uniforms.add(t.pbrTextureBindType===c.P.Pass?new l.A("normalTexture",(e=>e.textureNormal)):new s.R("normalTexture",(e=>e.textureNormal))),r.code.add(n.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},49672:(e,t,r)=>{r.d(t,{K:()=>X});var o=r(98634),i=r(19253),a=r(27366),n=r(92026),s=r(94172),l=r(38499),c=r(49861),d=(r(25243),r(63780),r(93169),r(69912)),u=r(88396);r(18759);r(27546);var h,m=r(8548),f=(r(53634),r(15880),r(3479)),p=r(57808),v=r(52311);!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(h||(h={}));const g=new v.X;g.pixelFormat=m.VI.RED,g.internalFormat=m.lP.R8,g.wrapMode=m.e8.CLAMP_TO_EDGE;const _=new v.X;_.pixelFormat=m.VI.RG,_.internalFormat=m.lP.RG8,_.wrapMode=m.e8.CLAMP_TO_EDGE;const x=new v.X;x.internalFormat=m.lP.RGBA4,x.dataType=m.Br.UNSIGNED_SHORT_4_4_4_4,x.wrapMode=m.e8.CLAMP_TO_EDGE;const T=new v.X;T.wrapMode=m.e8.CLAMP_TO_EDGE;const b=new v.X;b.wrapMode=m.e8.CLAMP_TO_EDGE,b.samplingMode=m.cw.LINEAR_MIPMAP_LINEAR,b.hasMipmap=!0,b.maxAnisotropy=8;const E=new v.X;E.pixelFormat=m.VI.RED,E.dataType=m.Br.HALF_FLOAT,E.internalFormat=m.lP.R16F,E.samplingMode=m.cw.NEAREST;const S=new v.X;S.dataType=m.Br.HALF_FLOAT,S.internalFormat=m.lP.RGBA16F,S.samplingMode=m.cw.NEAREST;h.RED,h.RG,h.RGBA4,h.RGBA,h.RGBA_MIPMAP,h.R16F,h.RGBA16F;var A;!function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",e[e.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",e[e.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"}(A||(A={}));const y=new v.X;y.pixelFormat=m.VI.DEPTH_STENCIL,y.dataType=m.Br.UNSIGNED_INT_24_8,y.samplingMode=m.cw.NEAREST,y.wrapMode=m.e8.CLAMP_TO_EDGE;A.DEPTH_STENCIL_TEXTURE,A.DEPTH_STENCIL_BUFFER,new f.Y(m.Tg.DEPTH24_STENCIL8,4),A.DEPTH24_BUFFER,new f.Y(m.Tg.DEPTH_COMPONENT24,4),A.DEPTH16_BUFFER,new f.Y(m.Tg.DEPTH_COMPONENT16,4);var w=r(7138),C=r(37081);const M={required:[]},R=(C.H.Depth,C.H.CompositeColor,C.H.Highlight,{required:[C.H.Depth,C.H.Normal]});class O extends w.Z{consumes(){return M}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}}class I extends O{}var H=r(82144),P=r(31132),N=r(7566),L=r(27627),F=r(97727),D=r(36207);class B extends P.A{initializeProgram(e){return new L.$(e.rctx,B.shader.get().build(),N.i)}initializePipeline(){return(0,D.sm)({colorWrite:D.BK})}}B.shader=new H.J(F.S,(()=>r.e(81843).then(r.bind(r,81843))));var z=r(6394);class G extends o.K{constructor(){super(...arguments),this.projScale=1}}class V extends G{constructor(){super(...arguments),this.intensity=1}}class U extends o.K{}class W extends U{constructor(){super(...arguments),this.blurSize=(0,z.a)()}}var j=r(46516);class q extends P.A{initializeProgram(e){return new L.$(e.rctx,q.shader.get().build(),N.i)}initializePipeline(){return(0,D.sm)({colorWrite:D.BK})}}q.shader=new H.J(j.S,(()=>r.e(49956).then(r.bind(r,49956))));var k;r(75248);!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(k||(k={}));var $=r(93822);let J=class extends I{constructor(e){super(e),this._context=null,this._passParameters=new V,this._drawParameters=new W,this.produces=new Map([[$.r.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?R:M}initializeRenderContext(e){this._context=e,this.addHandles([(0,s.YP)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(k.SSAO)),(e=>e?this._enable():this._disable()),s.tX)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,n.M2)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new v.X;t.wrapMode=m.e8.CLAMP_TO_EDGE,t.pixelFormat=m.VI.RGB,t.wrapMode=m.e8.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new p.x(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(q)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(B)),this._enableTime=(0,l.HA)(0),this._context?.requestRender()}renderNode(e,t,r){const o=e.bindParameters,i=o.linearDepth?.colorTexture,a=r?.normal?.colorTexture;if(null==this._enableTime||null==this._context||null==i||!a)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const n=e.rctx,s=o.camera,l=this.view.qualitySettings.fadeDuration,c=l>0?Math.min(l,e.time-this._enableTime)/l:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Y/(0,j.g)(s)**6*c;const d=s.fullViewport[2],f=s.fullViewport[3],p=Math.round(d/2),v=Math.round(f/2),g=this._context.fbos,_=g.acquire(h.RED,d,f);n.bindFramebuffer(_.fbo),n.setViewport(0,0,d,f),n.bindTechnique(this._ssaoTechnique,this._passParameters,o).bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw();const x=n.bindTechnique(this._blurTechnique,this._passParameters,o);n.setViewport(0,0,p,v);const T=g.acquire(h.RED,p,v);n.bindFramebuffer(T.fbo),this._drawParameters.colorTexture=_.colorTexture,(0,u.s)(this._drawParameters.blurSize,0,2/f),x.bindDraw(this._drawParameters,o,this._passParameters),n.setViewport(0,0,p,v),n.screen.draw(),_.release();const b=g.acquire(h.RED,p,v);return n.bindFramebuffer(b.fbo),n.setViewport(0,0,d,f),n.setClearColor(1,1,1,0),n.clear(m.lk.COLOR_BUFFER_BIT),n.setViewport(0,0,p,v),this._drawParameters.colorTexture=T.colorTexture,(0,u.s)(this._drawParameters.blurSize,2/d,0),x.bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw(),n.setViewport4fv(s.fullViewport),T.release(),c<1&&this._context.requestRender(),b}};(0,a._)([(0,c.Cb)({constructOnly:!0})],J.prototype,"view",void 0),(0,a._)([(0,c.Cb)()],J.prototype,"_context",void 0),J=(0,a._)([(0,d.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],J);const Y=.5;function X(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new i.A("ssaoTex",((e,t)=>t.ssao?.colorTexture))),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},80919:(e,t,r)=>{r.d(t,{XP:()=>y,PN:()=>S,sC:()=>A});var o=r(41644),i=r(11186),a=r(71353),n=r(90045),s=r(67077),l=r(41481),c=r(49450),d=r(95276),u=r(98634);function h(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new d.N("lightingAmbientSH_R",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.N("lightingAmbientSH_G",((e,t)=>(0,n.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.N("lightingAmbientSH_B",((e,t)=>(0,n.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,n.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,n.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,n.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,n.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,n.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,n.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,a.c)(),f=(0,s.c)();var p=r(49672),v=r(92395),g=r(2116),_=r(85586),x=r(61809),T=r(99340);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,o,i)=>r.setUniform1b(e,t(o,i))))}}var E=r(58406);r(16889);(0,a.c)();(0,a.c)();function S(e){e.constants.add("ambientBoostFactor","float",.4)}function A(e){e.uniforms.add(new E.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function y(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),S(r),A(r),(0,v.Pe)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.kR),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
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
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new E.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new E.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
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
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.f7.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(v.kR),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
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
}`);break;default:(0,o.Bg)(t.pbrMode);case l.f7.COUNT:}}},92395:(e,t,r)=>{r.d(t,{F1:()=>n,Pe:()=>a,kR:()=>s});var o=r(49450),i=r(98634);function a(e){e.uniforms.add(new o.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function n(e){e.uniforms.add(new o.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){a(e.fragment),n(e.fragment),e.fragment.code.add(i.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},15226:(e,t,r)=>{r.d(t,{l:()=>s});var o=r(21002),i=r(82999),a=r(98634),n=r(19253);function s(e,t){if(!t.multipassEnabled)return;e.fragment.include(o.S),e.fragment.uniforms.add(new n.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.colorTexture))),e.fragment.uniforms.add(new i.A("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(a.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?a.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:a.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},96658:(e,t,r)=>{r.d(t,{k:()=>n,q:()=>o});var o,i=r(41644),a=r(98634);function n(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case o.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case o.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case o.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Bg)(t.doubleSidedMode);case o.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(o||(o={}))},2116:(e,t,r)=>{r.d(t,{T:()=>s});var o=r(98634);function i(e){const t=e.fragment.code;t.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var a=r(41481),n=r(85586);function s(e,t){const r=e.fragment.code;e.include(n.e),t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic&&t.pbrMode!==a.f7.Terrain&&t.pbrMode!==a.f7.TerrainWithWater||(r.add(o.H`float normalDistribution(float NdotH, float roughness)
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
}`)),t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||(e.include(i),r.add(o.H`struct PBRShadingInfo
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
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>o,jV:()=>u});var o,i=r(27284),a=r(86471),n=r(49450),s=r(98634),l=r(78050),c=r(19253),d=r(99340);r(25278);!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(o||(o={}));function u(e,t){const r=e.fragment,u=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===o.Normal&&u&&e.include(i.i,t),t.pbrMode!==o.Schematic)if(t.pbrMode!==o.Disabled){if(t.pbrMode===o.Normal){r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.P.Pass?new c.A("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.R("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(s.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.P.Pass?new c.A("texEmission",(e=>e.textureEmissive)):new l.R("texEmission",(e=>e.textureEmissive))),r.code.add(s.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.P.Pass?new c.A("texOcclusion",(e=>e.textureOcclusion)):new l.R("texOcclusion",(e=>e.textureOcclusion))),r.code.add(s.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),e===d.P.Pass?r.uniforms.add(new n.J("emissionFactor",(e=>e.emissiveFactor)),new n.J("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new a.B("emissionFactor",(e=>e.emissiveFactor)),new a.B("mrrFactors",(e=>e.mrrFactors))),r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s.H`applyEmission(${t.hasEmissiveTextureTransform?s.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s.H`applyOcclusion(${t.hasOcclusionTextureTransform?s.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},85586:(e,t,r)=>{r.d(t,{e:()=>i});var o=r(98634);function i(e){e.vertex.code.add(o.H`const float PI = 3.141592653589793;`),e.fragment.code.add(o.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},58335:(e,t,r)=>{r.d(t,{XE:()=>m,hb:()=>h});r(81949),r(71353);var o=r(24842),i=r(95276),a=r(99339),n=r(98634),s=r(61809),l=r(99340);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,o,i,a)=>r.setUniformMatrix4fv(e,t(o,i,a))),r)}}class d extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))),r)}}var u=r(19253);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(o.f),t.uniforms.add(new u.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new i.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(n.H`int chooseCascade(float depth, out mat4 mat) {
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
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}},79154:(e,t,r)=>{r.d(t,{DT:()=>d,NI:()=>s,R5:()=>l,av:()=>n,jF:()=>c});var o=r(23588),i=r(98634),a=r(35522);function n(e){e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,o.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(e){e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,o.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,o.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,o.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,o.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},66472:(e,t,r)=>{r.d(t,{k:()=>T});var o=r(49450),i=r(61809),a=r(99340);class n extends i.x{constructor(e,t,r){super(e,"vec4",a.P.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))),r)}}class s extends i.x{constructor(e,t,r){super(e,"float",a.P.Pass,((r,o,i)=>r.setUniform1fv(e,t(o,i))),r)}}var l=r(98634),c=r(35522),d=r(4760),u=(r(93169),r(16889),r(22753),r(11873),r(14226),r(81949)),h=(r(11186),r(71353)),m=(r(49229),r(27366)),f=r(7138),p=r(49861),v=(r(25243),r(63780),r(69912));let g=class extends f.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,m._)([(0,p.Cb)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,m._)([(0,v.j)("esri.views.3d.support.DebugFlags")],g);new g;var _,x;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(_||(_={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={}));(0,u.a)(),(0,h.c)(),(0,u.a)();r(56529);function T(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new o.J("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new o.J("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new o.J("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new o.J("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new o.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),8),new n("vvColorColors",(e=>e.vvColor.colors),8)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},26461:(e,t,r)=>{r.d(t,{F:()=>o,b:()=>i});const o=.1,i=.001},65974:(e,t,r)=>{r.d(t,{z:()=>l});var o=r(26461),i=r(98634);function a(e){e.fragment.code.add(i.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(o.b)}) { discard; } }
  `)}r(61809),r(99340);var n=r(58406),s=r(68401);function l(e,t){c(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(a);case s.JJ.Opaque:o.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:o.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},96415:(e,t,r)=>{r.d(t,{GZ:()=>d});var o=r(88396),i=r(6394),a=r(90045),n=r(67077),s=r(82999),l=r(95276),c=r(98634);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,a.s)(u,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,a.s)(u,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>function(e){return 0===e.camera.projectionMatrix[11]?(0,o.s)(h,0,1):(0,o.s)(h,1,0)}(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,n.c)();const h=(0,i.a)()},27254:(e,t,r)=>{r.d(t,{$:()=>i});var o=r(98634);function i(e,t){let{code:r}=e;t.doublePrecisionRequiresObfuscation?r.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):r.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},98082:(e,t,r)=>{r.d(t,{y:()=>n});var o=r(49420),i=r(98634);function a(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function n(e){e.include(a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(o.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(o.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.a9.Replace)}) {
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

      if (mode == ${i.H.int(o.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},24842:(e,t,r)=>{r.d(t,{f:()=>i});var o=r(98634);function i(e){e.code.add(o.H`const float MAX_RGBA4_FLOAT =
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
}`)}},78980:(e,t,r)=>{r.d(t,{n:()=>i});var o=r(98634);function i(e){e.code.add(o.H`const float MAX_RGBA_FLOAT =
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
}`)}},82552:(e,t,r)=>{r.d(t,{hY:()=>m,Sv:()=>f,_8:()=>g});var o=r(14226),i=r(81949),a=r(11186),n=r(71353),s=r(86471),l=r(49450),c=(r(58406),r(61809)),d=r(99340);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}}var h=r(8654);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",n.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,a.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function f(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,o.w)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin)));const r=e=>(0,a.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,o.w)(p,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t))))}const p=(0,i.a)(),v=(0,n.c)();function g(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},22527:(e,t,r)=>{r.d(t,{q:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"vec2",i.P.Draw,((r,o,i,a)=>r.setUniform2fv(e,t(o,i,a))))}}},82999:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"vec2",i.P.Pass,((r,o,i)=>r.setUniform2fv(e,t(o,i))))}}},86471:(e,t,r)=>{r.d(t,{B:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"vec3",i.P.Draw,((r,o,i,a)=>r.setUniform3fv(e,t(o,i,a))))}}},49450:(e,t,r)=>{r.d(t,{J:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"vec3",i.P.Pass,((r,o,i)=>r.setUniform3fv(e,t(o,i))))}}},95276:(e,t,r)=>{r.d(t,{N:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"vec4",i.P.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))))}}},58406:(e,t,r)=>{r.d(t,{p:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"float",i.P.Pass,((r,o,i)=>r.setUniform1f(e,t(o,i))))}}},99339:(e,t,r)=>{r.d(t,{_:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"int",i.P.Pass,((r,o,i)=>r.setUniform1i(e,t(o,i))))}}},82644:(e,t,r)=>{r.d(t,{j:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"mat3",i.P.Draw,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}}},35522:(e,t,r)=>{r.d(t,{c:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"mat3",i.P.Pass,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}}},8654:(e,t,r)=>{r.d(t,{g:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"mat4",i.P.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}}},64201:(e,t,r)=>{r.d(t,{kG:()=>c});var o=r(10064),i=r(32718),a=r(99340),n=r(97731);const s=i.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const o of Object.keys(r))r[o]!==e[o]&&t.add(o);for(const o of Object.keys(e))r[o]!==e[o]&&t.add(o);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends l{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new p,this.constants=new g,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(e),i="vertex"===e?this.vertex:this.fragment,a=i.uniforms.generateSource(),n=i.code.generateSource(),s="vertex"===e?x:_,l=this.constants.generateSource().concat(i.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${c.join("\n")}\n\n${n.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i)=>{for(let a=0;a<o;++a)r[a](e,t,i)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i,a)=>{for(let n=0;n<o;++n)r[n](e,t,i,a)}}}class d{constructor(){this._entries=new Map}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];for(const o of t)this._add(o)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new o.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else s.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class h extends l{constructor(){super(...arguments),this.uniforms=new d,this.code=new u,this.constants=new g}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,n.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,o)=>t.push("vertex"===e?`out ${r} ${o};`:`in ${r} ${o};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const o=this._entries.get(r);o?(0,n.hu)(o.name===e&&o.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(){this._entries=new Set}add(e,t,r){let o="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":o=g._numberToFloatStr(r);break;case"int":o=g._numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},78050:(e,t,r)=>{r.d(t,{R:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"sampler2D",i.P.Draw,((r,o,i)=>r.bindTexture(e,t(o,i))))}}},19253:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(61809),i=r(99340);class a extends o.x{constructor(e,t){super(e,"sampler2D",i.P.Pass,((r,o,i)=>r.bindTexture(e,t(o,i))))}}},61809:(e,t,r)=>{r.d(t,{x:()=>i});var o=r(99340);class i{constructor(e,t,r,i){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=e,this.type=t,this.arraySize=a,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},i)switch(r){case o.P.Pass:this.bind[o.P.Pass]=i;break;case o.P.Draw:this.bind[o.P.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},98634:(e,t,r)=>{r.d(t,{H:()=>i,K:()=>o});const o=class{};function i(e){let t="";for(let r=0;r<(arguments.length<=1?0:arguments.length-1);r++)t+=e[r]+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]);return t+=e[e.length-1],t}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},99340:(e,t,r)=>{var o;r.d(t,{P:()=>o}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(o||(o={}))},82144:(e,t,r)=>{r.d(t,{J:()=>o});class o{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},31132:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(92026),i=r(8548);class a{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,o.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,o.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return i.MX.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},33559:(e,t,r)=>{r.d(t,{m:()=>i,o:()=>a});var o=r(98634);class i extends o.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const o=t._parameterNames.length-1,i=e.count||2,a=Math.ceil(Math.log2(i)),n=t._parameterBits??[0];let s=0;for(;n[s]+a>16;)s++,s>=n.length&&n.push(0);t._parameterBits=n;const l=n[s],c=(1<<a)-1<<l;n[s]+=a,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},91526:(e,t,r)=>{r.d(t,{U:()=>o,a:()=>i});class o{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;this.data=e,this.size=t,this.stride=r}}class i extends o{constructor(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];super(e,r,arguments.length>4&&void 0!==arguments[4]?arguments[4]:r),this.indices=t,this.exclusive=o}}},7566:(e,t,r)=>{r.d(t,{i:()=>i});var o=r(4760);const i=new Map([[o.T.POSITION,0],[o.T.NORMAL,1],[o.T.NORMALCOMPRESSED,1],[o.T.UV0,2],[o.T.COLOR,3],[o.T.COLORFEATUREATTRIBUTE,3],[o.T.SIZE,4],[o.T.TANGENT,4],[o.T.AUXPOS1,5],[o.T.SYMBOLCOLOR,5],[o.T.AUXPOS2,6],[o.T.FEATUREATTRIBUTE,6],[o.T.INSTANCEFEATUREATTRIBUTE,6],[o.T.INSTANCECOLOR,7],[o.T.OBJECTANDLAYERIDCOLOR,7],[o.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[o.T.INSTANCEMODEL,8],[o.T.INSTANCEMODELNORMAL,12],[o.T.INSTANCEMODELORIGINHI,11],[o.T.INSTANCEMODELORIGINLO,15]])},25278:(e,t,r)=>{r.d(t,{F:()=>s});var o=r(92026),i=r(66978),a=r(98634),n=r(68401);class s extends class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return n.Rw.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,o.RY)(this._texture),this._textureNormal=(0,o.RY)(this._textureNormal),this._textureEmissive=(0,o.RY)(this._textureEmissive),this._textureOcclusion=(0,o.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,o.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?n.Rw.LOADED:n.Rw.LOADING}get textureBindParameters(){return new l(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,o.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,i.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,o.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends a.K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=o,this.textureMetallicRoughness=i}}},56529:(e,t,r)=>{r.d(t,{F5:()=>d,yD:()=>o});var o,i=r(71353),a=(r(98634),r(68401)),n=r(1395),s=r(79100),l=r(7566),c=r(80026);class d extends n.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=l.i,this._pp0=(0,i.f)(0,0,1),this._pp1=(0,i.f)(0,0,0),this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===a.Iq.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}intersectDraped(e,t,r,o,i,a){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(o||(o={}))},78041:(e,t,r)=>{r.d(t,{Bh:()=>m,IB:()=>l,j7:()=>c,je:()=>h,ve:()=>d,wu:()=>n});var o=r(25920),i=r(8548),a=r(36207);const n=(0,a.wK)(i.zi.SRC_ALPHA,i.zi.ONE,i.zi.ONE_MINUS_SRC_ALPHA,i.zi.ONE_MINUS_SRC_ALPHA),s=(0,a.if)(i.zi.ONE,i.zi.ONE),l=(0,a.if)(i.zi.ZERO,i.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===o.A.FrontFace?null:e===o.A.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.wb.LESS;return e===o.A.NONE||e===o.A.FrontFace?t:i.wb.LEQUAL}},27627:(e,t,r)=>{r.d(t,{$:()=>a});var o=r(27546),i=r(37825);class a{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,i.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},93822:(e,t,r)=>{var o;r.d(t,{r:()=>o}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.ANTIALIASING=10]="ANTIALIASING",e[e.COMPOSITE=11]="COMPOSITE",e[e.BLIT=12]="BLIT",e[e.SSAO=13]="SSAO",e[e.HIGHLIGHT=14]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=18]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=20]="HUD_MATERIAL",e[e.LABEL_MATERIAL=21]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=22]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",e[e.DRAPED_WATER=25]="DRAPED_WATER",e[e.VOXEL=26]="VOXEL",e[e.MAX_SLOTS=27]="MAX_SLOTS"}(o||(o={}))},25920:(e,t,r)=>{var o;r.d(t,{A:()=>o}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(o||(o={}))},80026:(e,t,r)=>{r.d(t,{FZ:()=>M,Uf:()=>y,Bw:()=>v,LO:()=>w,Hx:()=>A});var o=r(63780),i=r(16889),a=r(11186),n=r(71353),s=r(41414),l=r(79100);r(50951);function c(e,t,r){const o=r.parameters;return h.scale=Math.min(o.divisor/(t-o.offset),1),h.factor=function(e){return Math.abs(e*e*e)}(e),h}function d(e,t){return(0,i.t7)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function u(e,t,r,o){return d(e,c(t,r,o))}(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const h={scale:0,factor:0,minScaleFactor:0};var m=r(97731),f=r(4760);const p=(0,s.Ue)();function v(e,t,r,o,i,a){if(e.visible)if(e.boundingInfo){(0,m.hu)(e.type===l.U.Mesh);const n=t.tolerance;_(e.boundingInfo,r,o,n,i,a)}else{const t=e.attributes.get(f.T.POSITION),n=t.indices;T(r,o,0,n.length/3,n,t,void 0,i,a)}}const g=(0,n.c)();function _(e,t,r,o,i,n){if(null==e)return;const l=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,g);if((0,s.op)(p,e.bbMin),(0,s.Tn)(p,e.bbMax),null!=i&&i.applyToAabb(p),function(e,t,r,o){return function(e,t,r,o,i){const a=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-o-t[2])*r[2],h=(e[5]+o-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<i)}(e,t,r,o,1/0)}(p,t,l,o)){const{primitiveIndices:a,position:s}=e,l=a?a.length:s.indices.length/3;if(l>R){const a=e.getChildren();if(void 0!==a){for(const e of a)_(e,t,r,o,i,n);return}}T(t,r,0,l,s.indices,s,a,i,n)}}const x=(0,n.c)();function T(e,t,r,o,i,a,n,s,l){if(n)return function(e,t,r,o,i,a,n,s,l){const{data:c,stride:d}=a,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let g=r;g<o;++g){const e=n[g];let t=3*e,r=d*i[t++],o=c[r++],a=c[r++],_=c[r];r=d*i[t++];let T=c[r++],b=c[r++],E=c[r];r=d*i[t];let A=c[r++],y=c[r++],w=c[r];null!=s&&([o,a,_]=s.applyToVertex(o,a,_,g),[T,b,E]=s.applyToVertex(T,b,E,g),[A,y,w]=s.applyToVertex(A,y,w,g));const C=T-o,M=b-a,R=E-_,O=A-o,I=y-a,H=w-_,P=p*H-I*v,N=v*O-H*f,L=f*I-O*p,F=C*P+M*N+R*L;if(Math.abs(F)<=Number.EPSILON)continue;const D=u-o,B=h-a,z=m-_,G=D*P+B*N+z*L;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const V=B*R-M*z,U=z*C-R*D,W=D*M-C*B,j=f*V+p*U+v*W;if(F>0){if(j<0||G+j>F)continue}else if(j>0||G+j<F)continue;const q=(O*V+I*U+H*W)/F;q>=0&&l(q,S(C,M,R,O,I,H,x),e,!1)}}(e,t,r,o,i,a,n,s,l);const{data:c,stride:d}=a,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let g=r,_=3*r;g<o;++g){let e=d*i[_++],t=c[e++],r=c[e++],o=c[e];e=d*i[_++];let a=c[e++],n=c[e++],T=c[e];e=d*i[_++];let b=c[e++],E=c[e++],A=c[e];null!=s&&([t,r,o]=s.applyToVertex(t,r,o,g),[a,n,T]=s.applyToVertex(a,n,T,g),[b,E,A]=s.applyToVertex(b,E,A,g));const y=a-t,w=n-r,C=T-o,M=b-t,R=E-r,O=A-o,I=p*O-R*v,H=v*M-O*f,P=f*R-M*p,N=y*I+w*H+C*P;if(Math.abs(N)<=Number.EPSILON)continue;const L=u-t,F=h-r,D=m-o,B=L*I+F*H+D*P;if(N>0){if(B<0||B>N)continue}else if(B>0||B<N)continue;const z=F*C-w*D,G=D*y-C*L,V=L*w-y*F,U=f*z+p*G+v*V;if(N>0){if(U<0||B+U>N)continue}else if(U>0||B+U<N)continue;const W=(M*z+R*G+O*V)/N;W>=0&&l(W,S(y,w,C,M,R,O,x),g,!1)}}const b=(0,n.c)(),E=(0,n.c)();function S(e,t,r,o,i,n,s){return(0,a.s)(b,e,t,r),(0,a.s)(E,o,i,n),(0,a.b)(s,b,E),(0,a.n)(s,s),s}function A(e,t,r,o,a){let n=(r.screenLength||0)*e.pixelRatio;null!=a&&(n=u(n,o,t,a));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function y(e,t){const r=t?y(t):{};for(const o in e){let t=e[o];t?.forEach&&(t=C(t)),null==t&&o in r||(r[o]=t)}return r}function w(e,t){let r=!1;for(const i in t){const a=t[i];void 0!==a&&(Array.isArray(a)?null===e[i]?(e[i]=a.slice(),r=!0):(0,o.Vx)(e[i],a)&&(r=!0):e[i]!==a&&(r=!0,e[i]=a))}return r}function C(e){const t=[];return e.forEach((e=>t.push(e))),t}const M={multiply:1,ignore:2,replace:3,tint:4},R=1e3},75248:(e,t,r)=>{var o;r.d(t,{n:()=>o}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(o||(o={}))},36207:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>a,jp:()=>W,sm:()=>b,wK:()=>n,zp:()=>c});var o=r(68401),i=r(8548);function a(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.db.ADD,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}function n(e,t,r,o){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i.db.ADD,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:i.db.ADD,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:o,opRgb:a,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:i.LR.BACK,mode:i.Wf.CCW},l={face:i.LR.FRONT,mode:i.Wf.CCW},c=e=>e===o.Vr.Back?s:e===o.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function m(e){return w.intern(e)}function f(e){return M.intern(e)}function p(e){return O.intern(e)}function v(e){return H.intern(e)}function g(e){return N.intern(e)}function _(e){return F.intern(e)}function x(e){return B.intern(e)}function T(e){return G.intern(e)}function b(e){return U.intern(e)}class E{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const A=new E(y,(e=>({__tag:"Blending",...e})));function y(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new E(C,(e=>({__tag:"Culling",...e})));function C(e){return e?S([e.face,e.mode]):null}const M=new E(R,(e=>({__tag:"PolygonOffset",...e})));function R(e){return e?S([e.factor,e.units]):null}const O=new E(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?S([e.func]):null}const H=new E(P,(e=>({__tag:"StencilTest",...e})));function P(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new E(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?S([e.zNear,e.zFar]):null}const F=new E(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?S([e.r,e.g,e.b,e.a]):null}const B=new E(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?S([e.mask]):null}const G=new E(V,(e=>({__tag:"DrawBuffers",...e})));function V(e){return e?S(e.buffers):null}const U=new E((function(e){return e?S([y(e.blending),C(e.culling),R(e.polygonOffset),I(e.depthTest),P(e.stencilTest),L(e.depthWrite),D(e.colorWrite),z(e.stencilWrite),V(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})));class W{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,o){return(r||e!==t)&&(o(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=28885.28e89f2e.chunk.js.map