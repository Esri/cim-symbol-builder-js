"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[9900],{65630:(e,t,r)=>{r.d(t,{D:()=>$,b:()=>W});var i=r(92026),o=r(81949),n=r(22357),a=r(83734),s=r(37081),l=r(33280),c=r(94951),d=r(81221),u=r(73782),h=r(52276),f=r(53230),m=r(60113),p=r(48655),v=r(85380),g=r(71410),_=r(86419),x=r(38171),T=r(70332),b=r(80919),S=r(92395),A=r(15226),y=r(96658),w=r(2116),C=r(41481),M=r(58335),O=r(79154),P=r(10758),I=r(26461),R=r(65974),E=r(98082),L=r(82552),N=r(49450),H=r(95276),D=r(58406),F=r(98634),z=r(8654),B=r(64201),V=r(19253),U=r(25920),G=r(4760);function W(e){const t=new B.kG,{vertex:r,fragment:W,varyings:$}=t;return(0,L.Sv)(r,e),t.include(h.f),$.add("vpos","vec3"),t.include(P.k,e),t.include(d.f,e),t.include(g.L,e),e.hasColorTextureTransform&&t.include(O.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(O.NI),e.hasEmissionTextureTransform&&t.include(O.R5),e.hasOcclusionTextureTransform&&t.include(O.jF),e.hasMetallicRoughnessTextureTransform&&t.include(O.DT),(0,L.hY)(r,e),t.include(u.O,e),t.include(c.w,e),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(x.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),$.add("localvpos","vec3"),t.include(m.D,e),t.include(n.qj,e),t.include(f.R,e),t.include(p.c,e),r.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),$.add("vcolorExt","vec4"),e.hasMultipassTerrain&&$.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new z.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I))),r.code.add(F.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${F.H.float(I.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?F.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?F.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?F.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?F.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?F.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?F.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(R.z,e),t.include(A.l,e),W.uniforms.add([new D.p("opacity",(e=>e.opacity)),new D.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new V.A("tex",(e=>e.texture))),W.include(E.y),W.code.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?F.H`colorUV`:F.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?F.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(b.XP,e),t.include(T.K,e),t.include(R.z,e),t.include(e.instancedDoublePrecision?M.hb:M.XE,e),t.include(A.l,e),(0,L.hY)(W,e),W.uniforms.add([r.uniforms.get("localOrigin"),new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new D.p("opacity",(e=>e.opacity)),new D.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new V.A("tex",(e=>e.texture))),t.include(C.jV,e),t.include(w.T,e),W.include(E.y),t.include(y.k,e),(0,b.PN)(W),(0,b.sC)(W),(0,S.F1)(W),W.code.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?F.H`colorUV`:F.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?F.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:F.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===C.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?F.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?F.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:F.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?F.H`normalize(posWorld);`:F.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?F.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===C.f7.Normal||e.pbrMode===C.f7.Schematic?F.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?F.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:F.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===U.A.Color?F.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(_.s,e),t}const $=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(22357),o=r(83734),n=r(37081),a=r(33280),s=r(94951),l=r(81221),c=r(73782),d=r(52276),u=r(53230),h=r(60113),f=r(48655),m=r(71410),p=r(86419),v=r(70332),g=r(80919),_=r(92395),x=r(15226),T=r(2116),b=r(41481),S=r(58335),A=r(10758),y=r(26461),w=r(65974),C=r(98082),M=r(82552),O=r(49450),P=r(95276),I=r(58406),R=r(98634),E=r(64201),L=r(19253),N=r(25920),H=r(4760);function D(e){const t=new E.kG,{vertex:r,fragment:D,varyings:F}=t;return(0,M.Sv)(r,e),t.include(d.f),F.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||((0,M.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.hasMultipassTerrain&&F.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new P.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(y.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(a.f5,e),t.include(w.z,e),t.include(x.l,e),D.uniforms.add([new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&D.uniforms.add(new L.A("tex",(e=>e.texture))),D.include(C.y),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(a.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?S.hb:S.XE,e),t.include(x.l,e),(0,M.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new O.J("ambient",(e=>e.ambient)),new O.J("diffuse",(e=>e.diffuse)),new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&D.uniforms.add(new L.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),D.include(C.y),t.extensions.add("GL_OES_standard_derivatives"),(0,_.F1)(D),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===N.A.Color?R.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:R.H``}
      }
    `)),t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},46516:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m,g:()=>p});var i=r(92026),o=r(88396),n=r(6394),a=r(24967),s=r(21002),l=r(96415),c=r(82999),d=r(58406),u=r(98634),h=r(64201),f=r(19253);function m(){const e=new h.kG,t=e.fragment;return e.include(a.k),t.include(s.S),e.include(l.G),t.uniforms.add(new d.p("radius",((e,t)=>p(t.camera)))),t.code.add(u.H`vec3 sphere[16];
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
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new c.A("nearFar",((e,t)=>t.camera.nearFar)),new f.A("normalMap",(e=>e.normalTexture)),new f.A("depthMap",(e=>e.depthTexture)),new c.A("zScale",((e,t)=>(0,l.R)(t))),new d.p("projScale",(e=>e.projScale)),new f.A("rnm",(e=>e.noiseTexture)),new c.A("rnmScale",((e,t)=>(0,o.s)(v,t.camera.fullWidth/(0,i.Wg)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,i.Wg)(e.noiseTexture).descriptor.height))),new d.p("intensity",(e=>e.intensity)),new c.A("screenSize",((e,t)=>(0,o.s)(v,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(u.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(16)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}function p(e){return Math.max(10,20*e.computeRenderPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.a)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},97727:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>f});var i=r(11186),o=r(24967),n=r(21002),a=r(22527),s=r(82999),l=r(58406),c=r(98634),d=r(64201),u=r(78050),h=r(19253);function f(){const e=new d.kG,t=e.fragment;e.include(o.k);return t.include(n.S),t.uniforms.add([new h.A("depthMap",(e=>e.depthTexture)),new u.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,i.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(c.H`
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

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},11873:(e,t,r)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(e,t,r,i,o,n,a,s,l){return[e,t,r,i,o,n,a,s,l]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>n,c:()=>i,f:()=>o});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:i,createView:n,fromValues:o},Symbol.toStringTag,{value:"Module"}))},81949:(e,t,r)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:i,createView:n,fromValues:function(e,t,r,i,o,n,a,s,l,c,d,u,h,f,m,p){return[e,t,r,i,o,n,a,s,l,c,d,u,h,f,m,p]}},Symbol.toStringTag,{value:"Module"}))},48976:(e,t,r)=>{r.d(t,{c:()=>f,g:()=>d,j:()=>O,k:()=>p,m:()=>u,s:()=>c});var i=r(11873),o=r(98131),n=r(71353),a=r(26277),s=r(11186),l=r(90045);function c(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>(0,a.g)()?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function u(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=r[0],l=r[1],c=r[2],d=r[3];return e[0]=i*d+a*s+o*c-n*l,e[1]=o*d+a*l+n*s-i*c,e[2]=n*d+a*c+i*l-o*s,e[3]=a*d-i*s-o*l-n*c,e}function h(e,t,r,i){const o=t[0],n=t[1],s=t[2],l=t[3];let c,d,u,h,f,m=r[0],p=r[1],v=r[2],g=r[3];return d=o*m+n*p+s*v+l*g,d<0&&(d=-d,m=-m,p=-p,v=-v,g=-g),1-d>(0,a.g)()?(c=Math.acos(d),u=Math.sin(c),h=Math.sin((1-i)*c)/u,f=Math.sin(i*c)/u):(h=1-i,f=i),e[0]=h*o+f*m,e[1]=h*n+f*p,e[2]=h*s+f*v,e[3]=h*l+f*g,e}function f(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const o=(r+1)%3,n=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*o+o]-t[3*n+n]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*o+n]-t[3*n+o])*i,e[o]=(t[3*o+r]+t[3*r+o])*i,e[n]=(t[3*n+r]+t[3*r+n])*i}return e}function p(e,t,r,i){const o=.5*Math.PI/180;t*=o,r*=o,i*=o;const n=Math.sin(t),a=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(i),d=Math.cos(i);return e[0]=n*l*d-a*s*c,e[1]=a*s*d+n*l*c,e[2]=a*l*c-n*s*d,e[3]=a*l*d+n*s*c,e}const v=l.c,g=l.s,_=l.a,x=u,T=l.b,b=l.d,S=l.l,A=l.e,y=A,w=l.f,C=w,M=l.n,O=l.g,P=l.h;const I=(0,n.c)(),R=(0,n.f)(1,0,0),E=(0,n.f)(0,1,0);const L=(0,o.a)(),N=(0,o.a)();const H=(0,i.c)();Object.freeze(Object.defineProperty({__proto__:null,add:_,calculateW:function(e,t){const r=t[0],i=t[1],o=t[2];return e[0]=r,e[1]=i,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-o*o)),e},conjugate:f,copy:v,dot:b,equals:P,exactEquals:O,fromEuler:p,fromMat3:m,getAxisAngle:d,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=r*r+i*i+o*o+n*n,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-o*s,e[3]=n*s,e},len:y,length:A,lerp:S,mul:x,multiply:u,normalize:M,random:function(e){const t=a.R,r=t(),i=t(),o=t(),n=Math.sqrt(1-r),s=Math.sqrt(r);return e[0]=n*Math.sin(2*Math.PI*i),e[1]=n*Math.cos(2*Math.PI*i),e[2]=s*Math.sin(2*Math.PI*o),e[3]=s*Math.cos(2*Math.PI*o),e},rotateX:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=o*l+n*s,e[2]=n*l-o*s,e[3]=a*l-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-n*s,e[1]=o*l+a*s,e[2]=n*l+i*s,e[3]=a*l-o*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=o*l-i*s,e[2]=n*l+a*s,e[3]=a*l-n*s,e},rotationTo:function(e,t,r){const i=(0,s.e)(t,r);return i<-.999999?((0,s.f)(I,R,t),(0,s.u)(I)<1e-6&&(0,s.f)(I,E,t),(0,s.n)(I,I),c(e,I,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.f)(I,t,r),e[0]=I[0],e[1]=I[1],e[2]=I[2],e[3]=1+i,M(e,e))},scale:T,set:g,setAxes:function(e,t,r,i){const o=H;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=i[0],o[4]=i[1],o[7]=i[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],M(e,m(e,o))},setAxisAngle:c,slerp:h,sqlerp:function(e,t,r,i,o,n){return h(L,t,o,n),h(N,r,i,n),h(e,L,N,2*n*(1-n)),e},sqrLen:C,squaredLength:w,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,r)=>{function i(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>a,a:()=>i,b:()=>o,c:()=>n});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:i,createView:n,fromValues:function(e,t,r,i){return[e,t,r,i]}},Symbol.toStringTag,{value:"Module"}))},71417:(e,t,r)=>{r.d(t,{a:()=>g,c:()=>p,g:()=>_,h:()=>v,j:()=>b,m:()=>O});r(93169);var i,o=r(32718),n=r(16889),a=r(92026),s=r(14226),l=r(11186),c=r(71353),d=r(90045),u=r(67077);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(i||(i={}));var h=r(40885),f=r(40927),m=r(51378);function p(){return(0,u.c)()}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p();return(0,d.c)(t,e)}function g(e){return e[3]}function _(e){return e}function x(e,t,r){if((0,a.Wi)(t))return!1;const{origin:i,direction:o}=t,n=T;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const l=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),c=l*l-4*s*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(c<0)return!1;const d=Math.sqrt(c);let u=(-l-d)/(2*s);const h=(-l+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0)&&(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),!0)}const T=(0,c.c)();function b(e,t){return x(e,t,null)}function S(e,t,r){const i=m.WM.get(),o=m.MP.get();(0,l.f)(i,t.origin,t.direction);const n=g(e);(0,l.f)(r,i,t.origin),(0,l.g)(r,r,1/(0,l.l)(r)*n);const a=y(e,t.origin),c=(0,f.EU)(t.origin,r);return(0,s.d)(o,c+a,i),(0,l.m)(r,r,o),r}function A(e,t,r){const i=(0,l.b)(m.WM.get(),t,e),o=(0,l.g)(m.WM.get(),i,e[3]/(0,l.l)(i));return(0,l.a)(r,o,e)}function y(e,t){const r=(0,l.b)(m.WM.get(),t,e),i=(0,l.l)(r),o=g(e),a=o+Math.abs(o-i);return(0,n.ZF)(o/a)}const w=(0,c.c)();function C(e,t,r,o){const a=(0,l.b)(w,t,e);switch(r){case i.X:{const e=(0,n.jE)(a,w)[2];return(0,l.s)(o,-Math.sin(e),Math.cos(e),0)}case i.Y:{const e=(0,n.jE)(a,w),t=e[1],r=e[2],i=Math.sin(t);return(0,l.s)(o,-i*Math.cos(r),-i*Math.sin(r),Math.cos(t))}case i.Z:return(0,l.n)(o,a);default:return}}function M(e,t){const r=(0,l.b)(P,t,e);return(0,l.l)(r)-e[3]}function O(e,t){const r=(0,l.d)(e,t),i=g(e);return r<=i*i}const P=(0,c.c)(),I=p();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:M,angleToSilhouette:y,axisAt:C,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return x(e,t,r)?r:((0,h.JI)(t,e,r),A(e,r,r))},closestPointOnSilhouette:S,containsPoint:O,copy:v,create:p,distanceToSilhouette:function(e,t){const r=(0,l.b)(m.WM.get(),t,e),i=(0,l.p)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},elevate:function(e,t,r){return e!==r&&(0,l.c)(r,e),r[3]=e[3]+t,r},fromCenterAndRadius:function(e,t){return(0,u.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,r,i){return(0,u.f)(e,t,r,i)},getCenter:_,getRadius:g,intersectRay:x,intersectRayClosestSilhouette:function(e,t,r){if(x(e,t,r))return r;const i=S(e,t,m.WM.get());return(0,l.a)(r,t.origin,(0,l.g)(m.WM.get(),t.direction,(0,l.i)(t.origin,i)/(0,l.l)(t.direction))),r},intersectsRay:b,projectPoint:A,setAltitudeAt:function(e,t,r,o){const n=M(e,t),a=C(e,t,i.Z,P),s=(0,l.g)(P,a,r-n);return(0,l.a)(o,t,s)},setExtent:function(e,t,r){return o.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:v(e,r)},tmpSphere:I,wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},32035:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>l,n:()=>s,s:()=>a,t:()=>o});var i=r(77873);function o(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],l=r[4],c=r[5],d=r[6],u=r[8],h=r[9],f=r[10],m=r[12],p=r[13],v=r[14],g=e.typedBuffer,_=e.typedBufferStride,x=t.typedBuffer,T=t.typedBufferStride;for(let i=0;i<o;i++){const e=i*_,t=i*T,r=x[t],o=x[t+1],b=x[t+2];g[e]=n*r+l*o+u*b+m,g[e+1]=a*r+c*o+h*b+p,g[e+2]=s*r+d*o+f*b+v}}function n(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let i=0;i<o;i++){const e=i*p,t=i*g,r=v[t],o=v[t+1],_=v[t+2];m[e]=n*r+l*o+u*_,m[e+1]=a*r+c*o+h*_,m[e+2]=s*r+d*o+f*_}}function a(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*n,t=l*s;o[e]=r*a[t],o[e+1]=r*a[t+1],o[e+2]=r*a[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*o,t=s*a,r=n[t],l=n[t+1],c=n[t+2],d=r*r+l*l+c*c;if(d>0){const t=1/Math.sqrt(d);i[e]=t*r,i[e+1]=t*l,i[e+2]=t*c}}}function l(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*n,t=l*s;o[e]=a[t]>>r,o[e+1]=a[t+1]>>r,o[e+2]=a[t+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,scale:a,shiftRight:l,transformMat3:n,transformMat4:o},Symbol.toStringTag,{value:"Module"}))},92770:(e,t,r)=>{function i(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d)i[l]=n[c],i[l+1]=n[c+1],i[l+2]=n[c+2],l+=o,c+=a}function o(e,t,r,i,o){const n=e.typedBuffer,a=e.typedBufferStride,s=o?.count??e.count;let l=(o?.dstIndex??0)*a;for(let c=0;c<s;++c)n[l]=t,n[l+1]=r,n[l+2]=i,l+=a}r.d(t,{c:()=>i,f:()=>o});Object.freeze(Object.defineProperty({__proto__:null,copy:i,fill:o},Symbol.toStringTag,{value:"Module"}))},8229:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function a(){return i()}function s(){return n(1,1,1)}function l(){return n(1,0,0)}function c(){return n(0,1,0)}function d(){return n(0,0,1)}r.d(t,{b:()=>o,c:()=>i,f:()=>n});const u=a(),h=s(),f=l(),m=c(),p=d();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_X:f,UNIT_Y:m,UNIT_Z:p,ZEROS:u,clone:o,create:i,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:n,ones:s,unitX:l,unitY:c,unitZ:d,zeros:a},Symbol.toStringTag,{value:"Module"}))},59447:(e,t,r)=>{r.d(t,{r:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},21530:(e,t,r)=>{r.d(t,{x:()=>o});var i=r(70758);class o{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*n);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,n));e++)this._items.push(this._allocator())}}const n=1024},77873:(e,t,r)=>{r.d(t,{c:()=>i});const i=r(32718).Z.getLogger("esri.views.3d.support.buffer.math")},85981:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>d,zk:()=>c});var i=r(16889),o=r(21530),n=r(11186),a=r(71353),s=r(51378);function l(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,n.c)(r.origin,e),(0,n.b)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,o,a){const{vector:l,origin:c}=e,d=(0,n.b)(s.WM.get(),t,c),u=(0,n.e)(l,d)/(0,n.p)(l);return(0,n.g)(a,l,(0,i.uZ)(u,r,o)),(0,n.a)(a,a,e.origin)}(e,t,0,1,r)}(0,a.c)(),(0,a.c)(),new o.x((()=>l()))},40885:(e,t,r)=>{r.d(t,{JI:()=>c,Ue:()=>a,re:()=>l});r(63780);var i=r(21530),o=r(11186),n=r(71353);r(51378);function a(e){return e?s((0,n.a)(e.origin),(0,n.a)(e.direction)):s((0,n.c)(),(0,n.c)())}function s(e,t){return{origin:e,direction:t}}function l(e,t){const r=d.get();return r.origin=e,r.direction=t,r}function c(e,t,r){const i=(0,o.e)(e.direction,(0,o.b)(r,t,e.origin));return(0,o.a)(r,e.origin,(0,o.g)(r,e.direction,i)),r}const d=new i.x((()=>a()))},40927:(e,t,r)=>{r.d(t,{EU:()=>a});var i=r(16889),o=r(11186),n=r(71353);function a(e,t){const r=(0,o.e)(e,t)/((0,o.l)(e)*(0,o.l)(t));return-(0,i.ZF)(r)}(0,n.c)(),(0,n.c)()},51378:(e,t,r)=>{r.d(t,{MP:()=>m,WM:()=>f});var i=r(59896),o=r(70758),n=r(11873),a=r(81949),s=r(98131),l=r(6394),c=r(71353),d=r(67077);class u{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,o.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new u(16,l.c,e)}static createVec3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new u(24,c.b,e)}static createVec4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new u(32,d.a,e)}static createMat3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new u(72,n.a,e)}static createMat4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new u(128,a.a,e)}static createQuatf64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return new u(32,s.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*i.Y8.KILOBYTES,f=(u.createVec2f64(),u.createVec3f64()),m=(u.createVec4f64(),u.createMat3f64(),u.createMat4f64());u.createQuatf64()},38330:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(76200);async function o(e,t){const{data:r}=await(0,i.default)(e,{responseType:"image",...t});return r}},59900:(e,t,r)=>{r.r(t),r.d(t,{fetch:()=>dr,gltfToEngineResources:()=>hr,parseUrl:()=>ur});var i=r(71277),o=r(92026),n=r(22753),a=r(11873),s=r(14226),l=r(81949),c=r(11186),d=r(71353),u=r(41414),h=r(25158),f=r(32035),m=r(19093),p=r(17054),v=r(27053),g=r(57516),_=r(32315),x=r(57661),T=r(23588),b=r(15245);function S(e){if((0,o.Wi)(e))return null;const t=(0,o.pC)(e.offset)?e.offset:b.Z,r=(0,o.pC)(e.rotation)?e.rotation:0,i=(0,o.pC)(e.scale)?e.scale:b.O,a=(0,T.f)(1,0,0,0,1,0,t[0],t[1],1),s=(0,T.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,T.f)(i[0],0,0,0,i[1],0,0,0,1),c=(0,T.c)();return(0,n.m)(c,s,l),(0,n.m)(c,a,c),c}class A{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class y{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new A,this.numberOfVertices=0}}var w=r(76200),C=r(14921),M=r(59896),O=r(10064),P=r(32718),I=r(59447),R=r(66978),E=r(49901),L=r(38330),N=r(91526),H=r(68401),D=r(18722);function F(e){if(e.length<D.DB)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return Uint16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var z=r(27546),B=r(97731);class V{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this._children=void 0,(0,B.hu)(e.length>=1),(0,B.hu)(r.length%this._numIndexPerPrimitive==0),(0,B.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,B.hu)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];U.clear(),U.push(s);const l=(0,d.f)(o[s],o[s+1],o[s+2]),u=(0,d.a)(l);for(let c=0;c<a;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[t+e],U.push(s);let i=o[s];l[0]=Math.min(i,l[0]),u[0]=Math.max(i,u[0]),i=o[s+1],l[1]=Math.min(i,l[1]),u[1]=Math.max(i,u[1]),i=o[s+2],l[2]=Math.min(i,l[2]),u[2]=Math.max(i,u[2])}}this.bbMin=l,this.bbMax=u;const h=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-l[0],u[1]-l[1]),u[2]-l[2]);let f=this.radius*this.radius;for(let c=0;c<U.length;++c){s=U.getItemAt(c);const e=o[s]-h[0],t=o[s+1]-h[1],r=o[s+2]-h[2],i=e*e+t*t+r*r;if(i<=f)continue;const n=Math.sqrt(i),a=.5*(n-this.radius);this.radius=this.radius+a,f=this.radius*this.radius;const l=a/n;h[0]+=e*l,h[1]+=t*l,h[2]+=r*l}this.center=h,U.clear()}getChildren(){if(this._children||(0,c.d)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:o,size:n}=this.position;for(let l=0;l<t;++l){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=n*this.indices[a],c=o[s],d=o[s+1],u=o[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=n*this.indices[a+e];const t=o[s],r=o[s+1],i=o[s+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[l]=t,++i[t]}let a=0;for(let l=0;l<8;++l)i[l]>0&&++a;if(a<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];s[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array;for(let l=0;l<8;++l)void 0!==s[l]&&this._children.push(new V(s[l],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){U.prune()}}const U=new z.Z({deallocator:null});var G=r(1395),W=r(79100),$=r(21530),k=r(85981);r(51378);function j(e){return e?{p0:(0,d.a)(e.p0),p1:(0,d.a)(e.p1),p2:(0,d.a)(e.p2)}:{p0:(0,d.c)(),p1:(0,d.c)(),p2:(0,d.c)()}}function q(e,t,r){return(0,c.b)(J,t,e),(0,c.b)(X,r,e),(0,c.l)((0,c.f)(J,J,X))/2}new $.x(k.Ue),new $.x((()=>j()));const J=(0,d.c)(),X=(0,d.c)();const K=(0,d.c)(),Y=(0,d.c)(),Z=(0,d.c)(),Q=(0,d.c)();var ee=r(72838),te=r(95439);class re{constructor(e){this.channel=e,this.id=(0,te.D)()}}var ie=r(4760);r(43411);(0,d.c)(),new Float32Array(6);class oe extends G.c{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:W.U.Mesh,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-1;super(),this.material=e,this.mapPositions=i,this.type=o,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,l]of t)l&&this._vertexAttributes.set(s,{...l});if(null==r||0===r.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,ee.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[s,l]of r)l&&(this._indices.set(s,(0,ee.mi)(l)),s===ie.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength))}instantiate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new oe(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,r)=>{e.exclusive=!1,t._vertexAttributes.set(r,e)})),this._indices.forEach(((e,r)=>t._indices.set(r,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:F(t.data)},this._vertexAttributes.set(e,t)),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===W.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===W.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&((0,o.pC)(this._transformation)&&(0,c.m)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(ie.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,c.s)(r,0,0,0),(0,c.s)(Q,0,0,0);let n=0,a=0;for(let s=0;s<t.length-2;s+=3){const e=t[s+0]*i,l=t[s+1]*i,d=t[s+2]*i;(0,c.s)(K,o[e+0],o[e+1],o[e+2]),(0,c.s)(Y,o[l+0],o[l+1],o[l+2]),(0,c.s)(Z,o[d+0],o[d+1],o[d+2]);const u=q(K,Y,Z);u?((0,c.a)(K,K,Y),(0,c.a)(K,K,Z),(0,c.g)(K,K,1/3*u),(0,c.a)(r,r,K),n+=u):((0,c.a)(Q,Q,K),(0,c.a)(Q,Q,Y),(0,c.a)(Q,Q,Z),a+=3)}return(0!==a||0!==n)&&(0!==n?((0,c.g)(r,r,1/n),!0):0!==a&&((0,c.g)(r,Q,1/a),!0))}(this.vertexAttributes.get(ie.T.POSITION),t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(ie.T.POSITION),r=this.indices.get(ie.T.POSITION);return function(e,t,r,i){if(!e)return!1;(0,c.s)(i,0,0,0),(0,c.s)(Q,0,0,0);let o=0,n=0;const{size:a,data:s}=e,l=t?t.length-1:s.length/a-1,d=l+(r?2:0);for(let u=0;u<d;u+=2){const e=u<l?u:l,r=u<l?u+1:0,d=(t?t[e]:e)*a,h=(t?t[r]:r)*a;K[0]=s[d],K[1]=s[d+1],K[2]=s[d+2],Y[0]=s[h],Y[1]=s[h+1],Y[2]=s[h+2],(0,c.g)(K,(0,c.a)(K,K,Y),.5);const f=(0,c.j)(K,Y);f>0?((0,c.a)(i,i,(0,c.g)(K,K,f)),o+=f):0===o&&((0,c.a)(Q,Q,K),n++)}return 0!==o?((0,c.g)(i,i,1/o),!0):0!==n&&((0,c.g)(i,Q,1/n),!0)}(t,r,r&&function(e,t,r){return!(!("isClosed"in e)||!e.isClosed)&&(r?r.length>2:t.data.length>6)}(this.material.parameters,t,r),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(ie.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,c.s)(r,0,0,0);let n=-1,a=0;for(let s=0;s<t.length;s++){const e=t[s]*i;n!==e&&(r[0]+=o[e+0],r[1]+=o[e+1],r[2]+=o[e+2],a++),n=e}return a>1&&(0,c.g)(r,r,1/a),a>0}(this.vertexAttributes.get(ie.T.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(ie.T.POSITION),t=this.vertexAttributes.get(ie.T.POSITION);if(!e||0===e.length||!t)return null;const r=this.type===W.U.Mesh?3:1;(0,B.hu)(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=(0,ee.p)(e.length/r);return new V(i,r,e,t)}get transformation(){return(0,o.Pt)(this._transformation,l.I)}set transformation(e){this._transformation=e&&e!==l.I?(0,l.b)(e):null}get shaderTransformation(){return(0,o.pC)(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return(0,o.pC)(this._shaderTransformer)}addHighlight(){const e=new re(H.V_.Highlight);return this.highlights=function(e,t){return(0,o.Wi)(e)&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if((0,o.Wi)(e))return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var ne=r(41644),ae=r(91505),se=r(16889),le=r(35995),ce=r(5640),de=r(67077),ue=r(24967),he=r(95276),fe=r(98634),me=r(64201),pe=r(19253);class ve extends fe.K{constructor(){super(...arguments),this.color=(0,de.f)(1,1,1,1)}}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:ve,build:function(){const e=new me.kG;return e.include(ue.k),e.fragment.uniforms.add([new pe.A("tex",(e=>e.texture)),new he.N("uColor",(e=>e.color))]),e.fragment.code.add(fe.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}},Symbol.toStringTag,{value:"Module"}));var ge=r(65905);let _e;var xe;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(xe||(xe={}));var Te=r(8548),be=r(371),Se=r(3384);let Ae=null,ye=null;async function we(){return(0,o.Wi)(ye)&&(ye=function(){if((0,o.Wi)(_e)){const e=e=>(0,ge.V)(`esri/libs/basisu/${e}`);_e=r.e(1562).then(r.bind(r,61562)).then((e=>e.b)).then((t=>{let{default:r}=t;return r({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))}))}return _e}(),Ae=await ye),ye}function Ce(e,t,r,i,o){const n=(0,Se.RG)(t?Te.q_.COMPRESSED_RGBA8_ETC2_EAC:Te.q_.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Me(e){return e.getNumImages()>=1&&!e.isUASTC()}function Oe(e){return e.getFaces()>=1&&e.isETC1S()}function Pe(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[xe.ETC2_RGBA,Te.q_.COMPRESSED_RGBA8_ETC2_EAC]:[xe.ETC1_RGB,Te.q_.COMPRESSED_RGB8_ETC2]:c?i?[xe.BC3_RGBA,Te.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[xe.BC1_RGB,Te.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[xe.RGBA32,Te.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let g=0;g<h;g++)f.push(new Uint8Array(a(g,d))),s(g,d,f[g]);const m=f.length>1,p=m?Te.cw.LINEAR_MIPMAP_LINEAR:Te.cw.LINEAR,v={...t,samplingMode:p,hasMipmap:m,internalFormat:u,width:o,height:n};return new be.x(e,v,{type:"compressed",levels:f})}const Ie=P.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Re=542327876,Ee=131072;function Le(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Ne=Le("DXT1"),He=Le("DXT3"),De=Le("DXT5");function Fe(e,t,r){const{textureData:i,internalFormat:n,width:a,height:s}=(0,o.s3)(function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==Re)return Ie.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Ie.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case Ne:o=8,n=Te.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case He:o=16,n=Te.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case De:o=16,n=Te.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ie.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(Ie.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[2]&Ee&&!1!==t&&(a=Math.max(1,r[7])),1===a||(0,se.wt)(s)&&(0,se.wt)(l)||(Ie.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[1]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,f,h),m.push(u),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:n,width:c,height:d}}(r,t.hasMipmap??!1));return t.samplingMode=i.levels.length>1?Te.cw.LINEAR_MIPMAP_LINEAR:Te.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new be.x(e,t,i)}var ze,Be=r(33341),Ve=r(49800),Ue=r(53634);class Ge extends G.c{constructor(e,t){super(),this._data=e,this.type=W.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new ae.Z,this._passParameters=new ve,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Te.e8.REPEAT,t:Te.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||H.CE.STRETCH,this.estimatedTexMemRequired=Ge._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;(0,o.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,le.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,le.HK)(e.src)||(0,le.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.Wi)(e))return 0;if((0,D.eP)(e)||(0,D.lq)(e))return t.encoding===H.Ti.KTX2_ENCODING?function(e,t){if((0,o.Wi)(Ae))return e.byteLength;const r=new Ae.KTX2File(new Uint8Array(e)),i=Oe(r)?Ce(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===H.Ti.BASIS_ENCODING?function(e,t){if((0,o.Wi)(Ae))return e.byteLength;const r=new Ae.BasisFile(new Uint8Array(e)),i=Me(r)?Ce(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ge._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:Te.No.TEXTURE_2D,pixelFormat:Te.VI.RGBA,dataType:Te.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Te.cw.LINEAR_MIPMAP_LINEAR:Te.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,o.pC)(this._glTexture))return this._glTexture;if((0,o.pC)(this._loadingPromise))return this._loadingPromise;const r=this._data;return(0,o.Wi)(r)?(this._glTexture=new be.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,D.eP)(r)||(0,D.lq)(r))&&this.params.encoding===H.Ti.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):((0,D.eP)(r)||(0,D.lq)(r))&&this.params.encoding===H.Ti.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):((0,D.eP)(r)||(0,D.lq)(r))&&this.params.encoding===H.Ti.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):(0,D.lq)(r)?this._loadFromPixelData(e,r):(0,D.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this._data instanceof HTMLVideoElement)||(0,o.Wi)(this._glTexture))return r;if(this._data.readyState<ze.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this._data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,t){return this._glTexture=Fe(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(Ae)&&(Ae=await we());const i=new Ae.KTX2File(new Uint8Array(r));if(!Oe(i))return null;i.startTranscoding();const n=Pe(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(Ae)&&(Ae=await we());const i=new Ae.BasisFile(new Uint8Array(r));if(!Me(i))return null;i.startTranscoding();const n=Pe(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,B.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?Te.VI.LUMINANCE:3===this.params.components?Te.VI.RGB:Te.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new be.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await(0,L.t)(r,{signal:i});return(0,R.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await(0,ce.fY)(r,r.src,!1,i);return(0,R.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=ze.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,o.hw)(d)},l=()=>{r.readyState>=ze.HAVE_CURRENT_DATA&&(s(),n(this._loadFromImage(e,r,t)))},c=e=>{s(),a(e||new O.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=(0,R.fu)(i,(()=>c((0,R.zE)())))}))))}_loadFromImage(e,t,r){const i=Ge._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?Te.VI.RGB:Te.VI.RGBA,!this._requiresPowerOfTwo(e,o)||(0,se.wt)(i.width)&&(0,se.wt)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new be.x(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=Te.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return e.type===Ve.zO.WEBGL1&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,se.Sf)(n),l=(0,se.Sf)(a);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case H.CE.PAD:i.textureCoordinateScaleFactor=[n/s,a/l],c=new be.x(e,i),c.updateData(0,0,0,n,a,t);break;case H.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,o());break;default:(0,ne.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const o=new be.x(e,r),n=new Ue.X(e,{colorTarget:Te.Lm.TEXTURE,depthStencilTarget:Te.OU.NONE},o),a=new be.x(e,{target:Te.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:Te.Br.UNSIGNED_BYTE,wrapMode:Te.e8.CLAMP_TO_EDGE,samplingMode:Te.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,Be.ow)(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,r,i,o,n){this._passParameters.texture=o,e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(i),e.drawArrays(Te.MX.TRIANGLE_STRIP,0,(0,Se._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height),this._passParameters.texture=null}unload(){if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ze||(ze={}));var We,$e=r(93169),ke=r(50951),je=r(55158),qe=r(37081),Je=r(96658),Xe=r(41481),Ke=r(25278),Ye=r(56529),Ze=r(78041);!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(We||(We={}));var Qe=r(48976),et=r(98131),tt=r(8229),rt=r(71417);const it=(0,d.c)(),ot=(0,d.c)(),nt=(0,d.c)();const at=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.sphere=(0,rt.c)(),this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.componentLocalOriginLength=0,this._tmpVertex=(0,d.c)(),this._mbs=(0,rt.c)(),this._obb={center:(0,d.c)(),halfSize:(0,tt.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),d=Math.sqrt(s*s+l*l+c*c);if(d<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const u=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),f=Math.max(Math.abs(i),Math.abs(a)),m=Math.sqrt(u*u+h*h+f*f),p=this._totalOffset/m,v=this._totalOffset/d;return e[0]+=t*(t>0?p:v),e[1]+=r*(r>0?p:v),e[2]+=i*(i>0?p:v),e[3]+=o*(o<0?p:v),e[4]+=n*(n<0?p:v),e[5]+=a*(a<0?p:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,c.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,c.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,c.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Qe.c)(st,e.quaternion),(0,c.q)(this._obb.halfSize,this._obb.halfSize,st),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let o=0;o<3;++o)it[o]=e[0+o]+this.localOrigin[o],ot[o]=e[3+o]+this.localOrigin[o],nt[o]=it[o];const t=this.applyToVertex(it[0],it[1],it[2]);for(let o=0;o<3;++o)e[o]=t[o],e[o+3]=t[o];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let i=0;i<3;++i)e[i+0]=Math.min(e[i+0],r[i]),e[i+3]=Math.max(e[i+3],r[i])};for(let o=1;o<8;++o){for(let e=0;e<3;++e)nt[e]=0==(o&1<<e)?it[e]:ot[e];r(nt)}let i=0;for(let o=0;o<3;++o)it[o]*ot[o]<0&&(i|=1<<o);if(0!==i&&7!==i)for(let o=0;o<8;++o)if(0==(i&o)){for(let e=0;e<3;++e)i[e]?nt[e]=0:nt[e]=0!=(o&1<<e)?it[e]:ot[e];r(nt)}for(let o=0;o<3;++o)e[o+0]-=this.localOrigin[o],e[o+3]-=this.localOrigin[o];return e}};const st=(0,et.a)();function lt(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let s=0;s<a;++s){const r=2*e[s];o[i]=t[r],o[i+1]=t[r+1],i+=n}}function ct(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let l=0;l<s;++l){const r=3*e[l];n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],i+=a}else for(let l=0;l<s;++l){const r=3*e[l];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],i+=a}}function dt(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let l=0;l<s;++l){const r=4*e[l];n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],n[i+3]=t[r+3],i+=a}else for(let l=0;l<s;++l){const r=4*e[l];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],n[i+3]=t[r+3],i+=a}}function ut(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(!r)return void ct(e,t,i,o,n);const a=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=r[0],u=r[1],h=r[2],f=r[4],m=r[5],p=r[6],v=r[8],g=r[9],_=r[10],x=r[12],T=r[13],b=r[14];o*=l;let S=0,A=0,y=0;const w=(0,s.y)(r)?e=>{S=t[e]+x,A=t[e+1]+T,y=t[e+2]+b}:e=>{const r=t[e],i=t[e+1],o=t[e+2];S=d*r+f*i+v*o+x,A=u*r+m*i+g*o+T,y=h*r+p*i+_*o+b};if(1===n)for(let s=0;s<c;++s)w(3*e[s]),a[o]=S,a[o+1]=A,a[o+2]=y,o+=l;else for(let s=0;s<c;++s){w(3*e[s]);for(let e=0;e<n;++e)a[o]=S,a[o+1]=A,a[o+2]=y,o+=l}}function ht(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(!r)return void ct(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],_=a[9],x=a[10],T=!(0,s.z)(a),b=1e-6,S=1-b;o*=c;let A=0,y=0,w=0;const C=(0,s.y)(a)?e=>{A=t[e],y=t[e+1],w=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];A=u*r+m*i+g*o,y=h*r+p*i+_*o,w=f*r+v*i+x*o};if(1===n)if(T)for(let s=0;s<d;++s){C(3*e[s]);const t=A*A+y*y+w*w;if(t<S&&t>b){const e=1/Math.sqrt(t);l[o]=A*e,l[o+1]=y*e,l[o+2]=w*e}else l[o]=A,l[o+1]=y,l[o+2]=w;o+=c}else for(let s=0;s<d;++s)C(3*e[s]),l[o]=A,l[o+1]=y,l[o+2]=w,o+=c;else for(let s=0;s<d;++s){if(C(3*e[s]),T){const e=A*A+y*y+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,y*=t,w*=t}}for(let e=0;e<n;++e)l[o]=A,l[o+1]=y,l[o+2]=w,o+=c}}function ft(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(!r)return void dt(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],_=a[9],x=a[10],T=!(0,s.z)(a),b=1e-6,S=1-b;if(o*=c,1===n)for(let s=0;s<d;++s){const r=4*e[s],i=t[r],n=t[r+1],a=t[r+2],d=t[r+3];let A=u*i+m*n+g*a,y=h*i+p*n+_*a,w=f*i+v*n+x*a;if(T){const e=A*A+y*y+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,y*=t,w*=t}}l[o]=A,l[o+1]=y,l[o+2]=w,l[o+3]=d,o+=c}else for(let s=0;s<d;++s){const r=4*e[s],i=t[r],a=t[r+1],d=t[r+2],A=t[r+3];let y=u*i+m*a+g*d,w=h*i+p*a+_*d,C=f*i+v*a+x*d;if(T){const e=y*y+w*w+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);y*=t,w*=t,C*=t}}for(let e=0;e<n;++e)l[o]=y,l[o+1]=w,l[o+2]=C,l[o+3]=A,o+=c}}function mt(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,r!==t.length||4!==r)if(1!==n)if(4!==r)for(let c=0;c<l;++c){const r=3*e[c];for(let e=0;e<n;++e)a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=255,o+=s}else for(let c=0;c<l;++c){const r=4*e[c];for(let e=0;e<n;++e)a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=t[r+3],o+=s}else{if(4===r){for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}return}for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else{a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,c=e[o/=4];o+=r;const d=l*n;for(let t=1;t<d;++t)e[o]=c,o+=r}}function pt(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let s=0;s<r;++s)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let s=0;s<r;++s)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}class vt{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(ie.T.POSITION).length}write(e,t,r,i,n){!function(e,t,r,i,n,a){for(const s of t.fieldNames){const t=e.vertexAttributes.get(s),l=e.indices.get(s);if(t&&l)switch(s){case ie.T.POSITION:{(0,B.hu)(3===t.size);const e=n.getField(s,h.ct);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&ut(l,t.data,r,e,a);break}case ie.T.NORMAL:{(0,B.hu)(3===t.size);const e=n.getField(s,h.ct);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&ht(l,t.data,i,e,a);break}case ie.T.UV0:{(0,B.hu)(2===t.size);const e=n.getField(s,h.Eu);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&lt(l,t.data,e,a);break}case ie.T.COLOR:case ie.T.SYMBOLCOLOR:{(0,B.hu)(3===t.size||4===t.size);const e=n.getField(s,h.mc);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&mt(l,t.data,t.size,e,a);break}case ie.T.TANGENT:{(0,B.hu)(4===t.size);const e=n.getField(s,h.ek);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&ft(l,t.data,i,e,a);break}case ie.T.PROFILERIGHT:case ie.T.PROFILEUP:case ie.T.PROFILEVERTEXANDNORMAL:case ie.T.FEATUREVALUE:{(0,B.hu)(4===t.size);const e=n.getField(s,h.ek);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&dt(l,t.data,e,a)}}else if(s===ie.T.OBJECTANDLAYERIDCOLOR&&(0,o.pC)(e.objectAndLayerIdColor)){const t=e.indices.get(ie.T.POSITION);if((0,B.hu)(!!t,`No buffer view for ${s}`),t){const r=t.length,i=n.getField(s,h.mc);pt(e.objectAndLayerIdColor,i,r,a)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var gt=r(80026),_t=r(73782),xt=r(60113),Tt=r(85380),bt=r(26461),St=r(82144),At=r(31132),yt=r(7566),wt=r(27627);Te.wb.LESS,Te.wb.ALWAYS;const Ct={mask:255},Mt={function:{func:Te.wb.ALWAYS,ref:H.hU.OutlineVisualElementMask,mask:H.hU.OutlineVisualElementMask},operation:{fail:Te.xS.KEEP,zFail:Te.xS.KEEP,zPass:Te.xS.ZERO}},Ot={function:{func:Te.wb.ALWAYS,ref:H.hU.OutlineVisualElementMask,mask:H.hU.OutlineVisualElementMask},operation:{fail:Te.xS.KEEP,zFail:Te.xS.KEEP,zPass:Te.xS.REPLACE}};Te.wb.EQUAL,H.hU.OutlineVisualElementMask,H.hU.OutlineVisualElementMask,Te.xS.KEEP,Te.xS.KEEP,Te.xS.KEEP,Te.wb.NOTEQUAL,H.hU.OutlineVisualElementMask,H.hU.OutlineVisualElementMask,Te.xS.KEEP,Te.xS.KEEP,Te.xS.KEEP;var Pt=r(25920),It=r(65630),Rt=r(36207);class Et extends Tt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,d.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=H.Vr.Back,this.emissiveFactor=(0,d.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=_t.h.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,d.f)(.2,.2,.2),this.diffuse=(0,d.f)(.8,.8,.8),this.externalColor=(0,de.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,d.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=H.Gv.Less,this.textureAlphaMode=H.JJ.Blend,this.textureAlphaCutoff=bt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ye.yD.Occlude}}class Lt extends At.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Ve.zO.WEBGL2,t.spherical=e.viewingMode===ke.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?xt.N.Default:xt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Lt.shader)}_initializeProgram(e,t){return new wt.$(e.rctx,t.get().build(this.configuration),yt.i)}_convertDepthTestFunction(e){return e===H.Gv.Lequal?Te.wb.LEQUAL:Te.wb.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Pt.A.NONE,o=e===Pt.A.FrontFace;return(0,Rt.sm)({blending:r.output!==qe.H.Color&&r.output!==qe.H.Alpha||!r.transparent?null:i?Ze.wu:(0,Ze.j7)(e),culling:Nt(r)?(0,Rt.zp)(r.cullFace):null,depthTest:{func:(0,Ze.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?Rt.LZ:null,colorWrite:Rt.BK,stencilWrite:r.hasOccludees?Ct:null,stencilTest:r.hasOccludees?t?Ot:Mt:null,polygonOffset:i||o?null:(0,Ze.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Nt(e){return e.cullFace!==H.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Lt.shader=new St.J(It.D,(()=>r.e(294).then(r.bind(r,40294))));var Ht=r(27366),Dt=r(33559),Ft=r(99340);class zt extends Dt.m{constructor(){super(...arguments),this.hasWebGL2Context=!1}}(0,Ht._)([(0,Dt.o)({constValue:!0})],zt.prototype,"hasSliceHighlight",void 0),(0,Ht._)([(0,Dt.o)({constValue:!1})],zt.prototype,"hasSliceInVertexProgram",void 0),(0,Ht._)([(0,Dt.o)({constValue:!1})],zt.prototype,"instancedDoublePrecision",void 0),(0,Ht._)([(0,Dt.o)({constValue:!1})],zt.prototype,"useLegacyTerrainShading",void 0),(0,Ht._)([(0,Dt.o)({constValue:!1})],zt.prototype,"hasModelTransformation",void 0),(0,Ht._)([(0,Dt.o)({constValue:Ft.P.Pass})],zt.prototype,"pbrTextureBindType",void 0),(0,Ht._)([(0,Dt.o)()],zt.prototype,"hasWebGL2Context",void 0);class Bt extends zt{constructor(){super(...arguments),this.output=qe.H.Color,this.alphaDiscardMode=H.JJ.Opaque,this.doubleSidedMode=Je.q.None,this.pbrMode=Xe.f7.Disabled,this.cullFace=H.Vr.None,this.transparencyPassType=Pt.A.NONE,this.normalType=_t.h.Attribute,this.textureCoordinateType=xt.N.None,this.customDepthTest=H.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Ht._)([(0,Dt.o)({count:qe.H.COUNT})],Bt.prototype,"output",void 0),(0,Ht._)([(0,Dt.o)({count:H.JJ.COUNT})],Bt.prototype,"alphaDiscardMode",void 0),(0,Ht._)([(0,Dt.o)({count:Je.q.COUNT})],Bt.prototype,"doubleSidedMode",void 0),(0,Ht._)([(0,Dt.o)({count:Xe.f7.COUNT})],Bt.prototype,"pbrMode",void 0),(0,Ht._)([(0,Dt.o)({count:H.Vr.COUNT})],Bt.prototype,"cullFace",void 0),(0,Ht._)([(0,Dt.o)({count:Pt.A.COUNT})],Bt.prototype,"transparencyPassType",void 0),(0,Ht._)([(0,Dt.o)({count:_t.h.COUNT})],Bt.prototype,"normalType",void 0),(0,Ht._)([(0,Dt.o)({count:xt.N.COUNT})],Bt.prototype,"textureCoordinateType",void 0),(0,Ht._)([(0,Dt.o)({count:H.Gv.COUNT})],Bt.prototype,"customDepthTest",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"spherical",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasVertexColors",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasSymbolColors",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasVerticalOffset",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasSlicePlane",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasSliceHighlight",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasColorTexture",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasMetallicRoughnessTexture",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasEmissionTexture",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasOcclusionTexture",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasNormalTexture",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasScreenSizePerspective",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasVertexTangents",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasOccludees",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasMultipassTerrain",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasModelTransformation",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"offsetBackfaces",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"vvSize",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"vvColor",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"receiveShadows",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"receiveAmbientOcclusion",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"textureAlphaPremultiplied",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"instanced",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"instancedColor",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"instancedDoublePrecision",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"writeDepth",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"transparent",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"enableOffset",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"cullAboveGround",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"snowCover",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasColorTextureTransform",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasEmissionTextureTransform",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasNormalTextureTransform",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasOcclusionTextureTransform",void 0),(0,Ht._)([(0,Dt.o)()],Bt.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Ht._)([(0,Dt.o)({constValue:!0})],Bt.prototype,"hasVvInstancing",void 0),(0,Ht._)([(0,Dt.o)({constValue:!1})],Bt.prototype,"useCustomDTRExponentForWater",void 0),(0,Ht._)([(0,Dt.o)({constValue:!1})],Bt.prototype,"supportsTextureAtlas",void 0),(0,Ht._)([(0,Dt.o)({constValue:!0})],Bt.prototype,"useFillLights",void 0);var Vt=r(40563);class Ut extends Lt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=_t.h.Attribute,t.doubleSidedMode=Je.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Ut.shader)}}Ut.shader=new St.J(Vt.R,(()=>r.e(601).then(r.bind(r,50601))));class Gt extends Ye.F5{constructor(e){super(e,$t),this.supportsEdges=!0,this._configuration=new Bt,this._vertexBufferLayout=function(e){const t=(0,je.U$)().vec3f(ie.T.POSITION).vec3f(ie.T.NORMAL),r=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(ie.T.TANGENT),r&&t.vec2f(ie.T.UV0),e.hasVertexColors&&t.vec4u8(ie.T.COLOR),e.hasSymbolColors&&t.vec4u8(ie.T.SYMBOLCOLOR),(0,$e.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ie.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==qe.H.Shadow&&e!==qe.H.ShadowExcludeHighlight&&e!==qe.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:i,vvColorEnabled:n}=e,a=(0,o.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||n||i)?!!s||l:r?s?c:l:a||n||i?!!s||l:s?c:l}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,o.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,o.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,o.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?H.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,o.pC)(this.parameters.modelTransformation),e!==qe.H.Color&&e!==qe.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Je.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Je.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Je.q.WindingOrder:Je.q.None,this._configuration.instancedColor=(0,o.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Xe.f7.Schematic:Xe.f7.Normal:Xe.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Ze.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,o.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,a){if((0,o.pC)(this.parameters.verticalOffset)){const e=r.camera;(0,c.s)(Kt,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case ke.JY.Global:o=(0,c.n)(Jt,Kt);break;case ke.JY.Local:o=(0,c.c)(Jt,qt)}let a=0;const s=(0,c.b)(Yt,Kt,e.eye),l=(0,c.l)(s),d=(0,c.g)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,c.e)(o,d)),a+=(0,gt.Hx)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,c.g)(o,o,a),(0,c.t)(Xt,o,r.transform.inverseRotation),i=(0,c.b)(kt,i,Xt),n=(0,c.b)(jt,n,Xt)}(0,gt.Bw)(e,r,i,n,function(e){return(0,o.pC)(e)?(at.offset=e,at):null}(r.verticalOffset),a)}requiresSlot(e,t){return(t===qe.H.Color||t===qe.H.Alpha||t===qe.H.Depth||t===qe.H.Normal||t===qe.H.Shadow||t===qe.H.ShadowHighlight||t===qe.H.ShadowExcludeHighlight||t===qe.H.Highlight||t===qe.H.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?We.TRANSPARENT_MATERIAL:We.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:We.OPAQUE_MATERIAL)||e===We.DRAPED_MATERIAL)}createGLMaterial(e){return new Wt(e)}createBufferWriter(){return new vt(this._vertexBufferLayout)}}class Wt extends Ke.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==qe.H.Color&&this._output!==qe.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Ut:Lt,e)}}const $t=new class extends Et{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const kt=(0,d.c)(),jt=(0,d.c)(),qt=(0,d.f)(0,0,1),Jt=(0,d.c)(),Xt=(0,d.c)(),Kt=(0,d.c)(),Yt=(0,d.c)(),Zt=P.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Qt(e,t){const r=await async function(e,t){const r=(0,o.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,C.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,R.r9)(i.error),er(i.error.details.url)}(e,r,t);const i=await(0,C.q6)((0,w.default)(e,(0,o.Wg)(t)));if(!0===i.ok)return i.value.data;(0,R.r9)(i.error),er(i.error)}(e,t),i=await async function(e,t){const r=[];for(const a in e){const i=e[a],n=i.images[0].data;if(!n){Zt.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+n,l="/textureDefinitions/"+a,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:Te.e8.REPEAT,t:Te.e8.REPEAT},preMultiplyAlpha:ir(c)!==H.JJ.Opaque},u=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,L.t)(s,t);r.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const i=await Promise.all(r),n={};for(const o of i)n[o.refId]=o;return n}(r.textureDefinitions??{},t);let n=0;for(const o in i)if(i.hasOwnProperty(o)){const e=i[o];n+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:i,size:n+(0,M.Ul)(r)}}function er(e){throw new O.Z("",`Request for object resource failed: ${e}`)}function tr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Zt.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Zt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Zt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Zt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Zt.warn("Indexed geometries must specify faces"),i=!1;break}default:Zt.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Zt.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const n in o)o[n].values||(Zt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function rr(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.pC)(r)&&((0,u.pp)(t,r.bbMin),(0,u.pp)(t,r.bbMax))})),t}function ir(e){switch(e){case"mask":return H.JJ.Mask;case"maskAndTransparency":return H.JJ.MaskBlend;case"none":return H.JJ.Opaque;default:return H.JJ.Blend}}function or(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const nr=new E.G(1,2,"wosr");var ar=r(68845),sr=r(19131),lr=r(69618),cr=r(92770);async function dr(e,t){const r=ur((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Qt(r.url,t)),{engineResources:i,referenceBoundingBox:n}=function(e,t){const r=new Array,i=new Array,n=new Array,a=new I.r,s=e.resource,l=E.G.parse(s.version||"1.0","wosr");nr.validate(l);const c=s.model.name,u=s.model.geometries,h=s.materialDefinitions??{},f=e.textures;let m=0;const p=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!tr(e))continue;const s=or(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],r=e.values;c.push([t,new N.a(r,e.valuesPerElement,!0)])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,t[e].values])}const _=s.texture,x=f&&f[_];if(x&&!p.has(_)){const{image:e,params:t}=x,r=new Ge(e,t);i.push(r),p.set(_,r)}const T=p.get(_),b=T?T.id:void 0,S=s.material;let A=a.get(S,_);if((0,o.Wi)(A)){const e=h[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=x?ir(x.alphaChannelUsage):void 0,s={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:H.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),A=new Gt(s),a.set(S,_,A)}n.push(A);const y=new oe(A,c,g);m+=g.position?g.position.length:0,r.push(y)}return{engineResources:[{name:c,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:rr(r)}}(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,g.Q)(new v.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,o.U2)(n.model.meta,"ESRI_proxyEllipsoid"),u=n.meta.isEsriSymbolResource&&(0,o.pC)(a)&&n.meta.uri.includes("/RealisticTrees/");u&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if((0,o.Wi)(i))return;const a=n.attributes.position,u=a.count,f=(0,d.c)(),m=(0,d.c)(),v=(0,d.c)(),g=(0,p.gS)(h.mc,u),_=(0,p.gS)(h.ct,u),x=(0,s.a)((0,l.c)(),n.transform);for(let o=0;o<u;o++){a.getVec(o,m),i.getVec(o,f),(0,c.m)(m,m,n.transform),(0,c.b)(v,m,t.center),(0,c.C)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),d=Math.min(.45+.55*l*l,1);(0,c.C)(v,v,t.radius),null!==x&&(0,c.m)(v,v,x),(0,c.n)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(v,v,f,s>-1?.2:Math.min(-4*s-3.8,1)),_.setVec(o,v),g.set(o,0,255*d),g.set(o,1,255*d),g.set(o,2,255*d),g.set(o,3,255)}n.attributes.normal=_,n.attributes.color=g}}}(n,a));const f=!!t.usePBR,m=n.meta.isEsriSymbolResource?{usePBR:f,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:f,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},_={...t.materialParamsMixin,treeRendering:u},{engineResources:x,referenceBoundingBox:T}=hr(n,m,_,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:x,referenceBoundingBox:T,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function ur(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function hr(e,t,r,i){const a=e.model,s=new Array,l=new Map,c=new Map,d=a.lods.length,v=(0,u.cS)();return a.lods.forEach(((e,g)=>{const T=!0===i.skipHighLods&&(d>1&&0===g||d>3&&1===g)||!1===i.skipHighLods&&null!=i.singleLodIndex&&g!==i.singleLodIndex;if(T&&0!==g)return;const b=new y(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=T?new Gt({}):function(e,t,r,i,n,a,s){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),d=(0,o.pC)(t.attributes.texCoord0),u=(0,o.pC)(t.attributes.normal);if((0,o.Wi)(c))return null;const h=function(e){switch(e){case"BLEND":return H.JJ.Blend;case"MASK":return H.JJ.Mask;case"OPAQUE":case null:case void 0:return H.JJ.Opaque}}(c.alphaMode);if(!a.has(l)){if(d){const t=function(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,o.pC)(t)&&!s.has(t)){const i=e.textures.get(t);if((0,o.pC)(i)){const e=i.data;s.set(t,new Ge((0,x.$A)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,x.$A)(e)&&r,encoding:(0,x.$A)(e)&&(0,o.pC)(e.encoding)?e.encoding:void 0}))}}};t(c.textureColor,h!==H.JJ.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/ar.K),f=c.color[1]**(1/ar.K),m=c.color[2]**(1/ar.K),p=c.emissiveFactor[0]**(1/ar.K),v=c.emissiveFactor[1]**(1/ar.K),g=c.emissiveFactor[2]**(1/ar.K),_=(0,o.pC)(c.textureColor)&&d?s.get(c.textureColor):null;a.set(l,new Gt({...i,transparent:h===H.JJ.Blend,customDepthTest:H.Gv.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,f,m],ambient:[r,f,m],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?H.Vr.None:H.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?_t.h.Attribute:_t.h.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(_)?_.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:(0,o.pC)(c.textureNormal)&&d?s.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.pC)(_)&&!!_.params.preMultiplyAlpha,occlusionTextureId:(0,o.pC)(c.textureOcclusion)&&d?s.get(c.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(c.textureEmissive)&&d?s.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(c.textureMetallicRoughness)&&d?s.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[p,v,g],mrrFactors:[c.metallicFactor,c.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:S(c.colorTextureTransform),normalTextureTransformMatrix:S(c.normalTextureTransform),occlusionTextureTransformMatrix:S(c.occlusionTextureTransform),emissiveTextureTransformMatrix:S(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(c.metallicRoughnessTextureTransform),...n}))}const f=a.get(l);if(r.stageResources.materials.push(f),d){const e=e=>{(0,o.pC)(e)&&r.stageResources.textures.push(s.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return f}(a,e,b,t,r,l,c),{geometry:s,vertexCount:d}=function(e,t){const r=e.attributes.position.count,i=function(e,t){switch(t){case Te.MX.TRIANGLES:return(0,_.nh)(e);case Te.MX.TRIANGLE_STRIP:return(0,_.DA)(e);case Te.MX.TRIANGLE_FAN:return(0,_.jX)(e)}}(e.indices||r,e.primitiveType),a=(0,p.gS)(h.ct,r);(0,f.t)(a,e.attributes.position,e.transform);const s=[[ie.T.POSITION,new N.a(a.typedBuffer,a.elementCount,!0)]],l=[[ie.T.POSITION,i]];if((0,o.pC)(e.attributes.normal)){const t=(0,p.gS)(h.ct,r);(0,n.b)(fr,e.transform),(0,f.a)(t,e.attributes.normal,fr),s.push([ie.T.NORMAL,new N.a(t.typedBuffer,t.elementCount,!0)]),l.push([ie.T.NORMAL,i])}if((0,o.pC)(e.attributes.tangent)){const t=(0,p.gS)(h.ek,r);(0,n.b)(fr,e.transform),(0,m.t)(t,e.attributes.tangent,fr),s.push([ie.T.TANGENT,new N.a(t.typedBuffer,t.elementCount,!0)]),l.push([ie.T.TANGENT,i])}if((0,o.pC)(e.attributes.texCoord0)){const t=(0,p.gS)(h.Eu,r);(0,sr.n)(t,e.attributes.texCoord0),s.push([ie.T.UV0,new N.a(t.typedBuffer,t.elementCount,!0)]),l.push([ie.T.UV0,i])}if((0,o.pC)(e.attributes.color)){const t=(0,p.gS)(h.mc,r);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,lr.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,lr.f)(t,255,255,255,255);const r=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(r,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,cr.c)(r,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(r,e.attributes.color,1/256)}s.push([ie.T.COLOR,new N.a(t.typedBuffer,t.elementCount,!0)]),l.push([ie.T.COLOR,i])}return{geometry:new oe(t,s,l),vertexCount:r}}(e,(0,o.pC)(i)?i:new Gt({})),A=s.boundingInfo;(0,o.pC)(A)&&0===g&&((0,u.pp)(v,A.bbMin),(0,u.pp)(v,A.bbMax)),(0,o.pC)(i)&&(b.stageResources.geometries.push(s),b.numberOfVertices+=d)})),T||s.push(b)})),{engineResources:s,referenceBoundingBox:v}}const fr=(0,a.c)()},49420:(e,t,r)=>{r.d(t,{a9:()=>i});var i;r(16889);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},55158:(e,t,r)=>{r.d(t,{U$:()=>s});var i=r(25158),o=r(48734);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,o.n1)(t.ElementType),n=this.stride;this.fields.set(e,{size:i,constructor:t,offset:n,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},22357:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var i=r(37081),o=r(74058),n=r(82999),a=r(98634);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.H.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExcludeHighlight:return e.include(o.up,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},83734:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(98634);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},24967:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(98634),o=r(4760);function n(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.attributes.add(o.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},37081:(e,t,r)=>{var i;r.d(t,{H:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},33280:(e,t,r)=>{r.d(t,{f5:()=>d});var i=r(92026),o=r(14226),n=r(81949),a=r(11186),s=r(71353),l=r(86471),c=(r(49450),r(98634));function d(e,t){u(e,t,[new l.B("slicePlaneOrigin",((e,r)=>p(t,e,r))),new l.B("slicePlaneBasis1",((e,r)=>v(t,e,r,(0,i.Wg)(r.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,r)=>v(t,e,r,(0,i.Wg)(r.slicePlane)?.basis2)))])}function u(e,t,r){if(!t.hasSlicePlane){const r=c.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(r),e.fragment.uniforms.add(r);const i=c.H`struct SliceFactors {
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
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}function h(e,t,r){return e.instancedDoublePrecision?(0,a.s)(g,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function f(e,t){return(0,i.pC)(e)?(0,a.b)(_,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?(0,i.pC)(t)?(0,o.w)(T,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function p(e,t,r){if((0,i.Wi)(r.slicePlane))return s.Z;const o=h(e,t,r),n=f(o,r.slicePlane),l=m(e,o,r);return(0,i.pC)(l)?(0,a.m)(_,n,l):n}function v(e,t,r,o){if((0,i.Wi)(o)||(0,i.Wi)(r.slicePlane))return s.Z;const n=h(e,t,r),l=f(n,r.slicePlane),c=m(e,n,r);return(0,i.pC)(c)?((0,a.a)(x,o,l),(0,a.m)(_,l,c),(0,a.m)(x,x,c),(0,a.b)(x,x,_)):o}const g=(0,s.c)(),_=(0,s.c)(),x=(0,s.c)(),T=(0,n.c)()},94951:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(22357),o=r(98634);function n(e,t){if((0,i.bA)(e),t.hasModelTransformation)return e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},81221:(e,t,r)=>{r.d(t,{f:()=>p});var i=r(27366),o=r(11186),n=r(71353),a=r(37081),s=r(27254),l=r(82552),c=r(86471),d=r(98634),u=r(33559),h=r(4760),f=r(43411);class m extends u.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,f.U8)((0,o.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v)))),r.uniforms.add(new c.B("viewOriginLo",((e,t)=>(0,f.GB)((0,o.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v))))),r.code.add(d.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(d.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?d.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(d.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&((0,l._8)(r),r.code.add(d.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(d.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,i._)([(0,u.o)()],m.prototype,"instancedDoublePrecision",void 0);const v=(0,n.c)()},73782:(e,t,r)=>{r.d(t,{O:()=>l,h:()=>a});var i=r(41644),o=r(98634);function n(e){const t=o.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}var a,s=r(4760);function l(e,t){switch(t.normalType){case a.CompressedAttribute:e.include(n),e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(o.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case a.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(o.H`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(t.normalType);case a.COUNT:case a.Ground:}}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(a||(a={}))},52276:(e,t,r)=>{r.d(t,{f:()=>n});var i=r(98634),o=r(4760);function n(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},53230:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(49420),o=r(98634);function n(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(99339),s=r(4760),l=r(80026);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},60113:(e,t,r)=>{r.d(t,{D:()=>s,N:()=>i});var i,o=r(41644),n=r(98634),a=r(4760);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,o.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(i||(i={}))},48655:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(98634),o=r(4760);function n(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85380:(e,t,r)=>{r.d(t,{Bb:()=>d,d4:()=>u});var i=r(41644),o=r(11873),n=(r(67077),r(73782)),a=r(74058),s=r(98634),l=r(82644),c=r(35522);function d(e,t){switch(t.normalType){case n.h.Attribute:case n.h.CompressedAttribute:e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.h.Ground:e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case n.h.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case n.h.COUNT:}}class u extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.c)()}}},74058:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>m});var i=r(11873),o=r(81949),n=(r(8229),r(71353)),a=r(52276),s=r(27254),l=r(86471),c=r(49450),d=r(98634),u=r(82644),h=r(35522),f=r(8654);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(41644),o=r(60113),n=r(98634);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function s(e,t){switch(e.include(o.D,t),e.fragment.code.add(n.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case o.N.Default:case o.N.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o.N.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case o.N.None:case o.N.COUNT:return}}},71410:(e,t,r)=>{r.d(t,{L:()=>u});var i=r(90045),o=r(67077),n=r(95276),a=r(98634);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){return(0,i.s)(c,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const c=(0,o.c)();var d=r(82552);function u(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new n.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(h,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new n.N("screenSizePerspectiveAlignment",(e=>l(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,d.hY)(e.vertex,t)),r.code.add(a.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const h=(0,o.c)()},86419:(e,t,r)=>{r.d(t,{s:()=>P});var i=r(92026),o=r(81949),n=r(22357),a=r(37081),s=r(33280),l=r(94951),c=r(73782),d=r(98634),u=r(4760);function h(e,t){const r=t.output===a.H.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(u.T.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(u.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(d.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d.H``} }`),e.fragment.code.add(d.H`
      void outputObjectAndLayerIdColor() {
        ${r?d.H`gl_FragColor = objectAndLayerIdColorVarying;`:d.H``} }`)}var f=r(60113),m=r(85380),p=r(78980);function v(e,t){switch(e.fragment.include(p.n),t.output){case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExcludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case a.H.Depth:e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}var g=r(67077),_=r(75993),x=r(19253),T=r(97528);const b=(0,g.f)(1,1,0,1),S=(0,g.f)(1,0,1,1);function A(e,t){e.fragment.uniforms.add((0,x.J)("depthTex",((e,t)=>t.highlightDepthTexture),t.hasWebGL2Context?T.D.None:T.D.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",b).add("unoccludedHighlightFlag","vec4",S),e.fragment.code.add(d.H`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${(0,_.b6)(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}var y=r(10758),w=r(65974),C=r(82552),M=r(8654),O=r(68401);function P(e,t){const{vertex:r,fragment:u}=e,p=t.hasModelTransformation;p&&r.uniforms.add(new M.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I)));const g=t.hasColorTexture&&t.alphaDiscardMode!==O.JJ.Opaque;switch(t.output){case a.H.Depth:case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExcludeHighlight:case a.H.ObjectAndLayerIdColor:(0,C.Sv)(r,t),e.include(l.w,t),e.include(f.D,t),e.include(y.k,t),e.include(v,t),e.include(s.f5,t),e.include(h,t),(0,n.Zu)(e),e.varyings.add("depth","float"),g&&u.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(w.z,t),u.code.add(d.H`
          void main(void) {
            discardBySlice(vpos);
            ${g?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===a.H.ObjectAndLayerIdColor?d.H`outputObjectAndLayerIdColor();`:d.H`outputDepth(depth);`}
          }
        `);break;case a.H.Normal:(0,C.Sv)(r,t),e.include(l.w,t),e.include(c.O,t),e.include(m.Bb,t),e.include(f.D,t),e.include(y.k,t),g&&u.uniforms.add(new x.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===c.h.Attribute?d.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),u.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${g?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===c.h.ScreenDerivative?d.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case a.H.Highlight:(0,C.Sv)(r,t),e.include(l.w,t),e.include(f.D,t),e.include(y.k,t),g&&u.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),e.include(A,t),u.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${g?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},21002:(e,t,r)=>{r.d(t,{S:()=>n});var i=r(78980),o=r(98634);function n(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},38171:(e,t,r)=>{r.d(t,{Q:()=>f});var i=r(60113),o=r(27284),n=r(96658),a=r(75993),s=r(98634),l=r(78050),c=r(19253),d=r(97528),u=r(99340),h=r(4760);function f(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.q.WindingOrder?r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),t.textureCoordinateType!==i.N.None){e.include(o.i,t);const i=t.supportsTextureAtlas?t.hasWebGL2Context?d.D.None:d.D.Size:d.D.None;r.uniforms.add(t.pbrTextureBindType===u.P.Pass?(0,c.J)("normalTexture",(e=>e.textureNormal),i):(0,l.F)("normalTexture",(e=>e.textureNormal),i)),r.code.add(s.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,a.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},70332:(e,t,r)=>{r.d(t,{K:()=>v});var i=r(75993),o=r(98634),n=r(19253),a=r(97528),s=(r(88396),r(33341),r(82144)),l=r(31132),c=r(7566),d=r(27627),u=r(97727),h=r(36207);class f extends l.A{initializeProgram(e){return new d.$(e.rctx,f.shader.get().build(),c.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}f.shader=new s.J(u.S,(()=>r.e(1843).then(r.bind(r,81843))));var m=r(46516);class p extends l.A{initializeProgram(e){return new d.$(e.rctx,p.shader.get().build(),c.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}p.shader=new s.J(m.S,(()=>r.e(9956).then(r.bind(r,49956))));r(6394);r(8548),r(53634),r(371),r(3384);function v(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add((0,n.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?a.D.None:a.D.InvSize)),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add(o.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,i.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},80919:(e,t,r)=>{r.d(t,{XP:()=>w,PN:()=>A,sC:()=>y});var i=r(41644),o=r(11186),n=r(71353),a=r(90045),s=r(67077),l=r(41481),c=r(49450),d=r(95276),u=r(98634);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add([new d.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add([new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const f=(0,n.c)(),m=(0,s.c)();var p=r(70332),v=r(92395),g=r(2116),_=r(85586),x=r(61809),T=r(99340);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var S=r(58406);r(16889);(0,n.c)();(0,n.c)();function A(e){e.constants.add("ambientBoostFactor","float",.4)}function y(e){e.uniforms.add(new S.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function w(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),A(r),y(r),(0,v.Pe)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.kR,t),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
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
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new S.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new S.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(v.kR,t),r.code.add(u.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}},92395:(e,t,r)=>{r.d(t,{F1:()=>s,Pe:()=>a,kR:()=>l});var i=r(49450),o=r(58406),n=r(98634);function a(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function s(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function l(e,t){const r=e.fragment;a(r),s(r),function(e,t){t.useLegacyTerrainShading?e.uniforms.add(new o.p("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}(r,t),r.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},15226:(e,t,r)=>{r.d(t,{l:()=>s});var i=r(21002),o=r(82999),n=r(98634),a=r(19253);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.S),e.fragment.uniforms.add(new a.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new o.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},96658:(e,t,r)=>{r.d(t,{k:()=>a,q:()=>i});var i,o=r(41644),n=r(98634);function a(e,t){const r=e.fragment;switch(r.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,o.Bg)(t.doubleSidedMode);case i.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(i||(i={}))},2116:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(98634);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var n=r(41481),a=r(85586);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic&&t.pbrMode!==n.f7.Terrain&&t.pbrMode!==n.f7.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
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
}`)),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
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
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>f,jV:()=>m});var i=r(8229),o=r(27284),n=r(75993),a=r(86471),s=r(49450),l=r(98634),c=r(78050),d=r(19253),u=r(97528),h=r(99340);r(25278);(0,i.f)(0,.6,.2);var f;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(f||(f={}));function m(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===f.Normal&&i&&e.include(o.i,t),t.pbrMode!==f.Schematic)if(t.pbrMode!==f.Disabled){if(t.pbrMode===f.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?u.D.None:u.D.Size:u.D.None,o=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(o===h.P.Pass?(0,d.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,c.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(l.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(o===h.P.Pass?(0,d.J)("texEmission",(e=>e.textureEmissive),e):(0,c.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(l.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(o===h.P.Pass?(0,d.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,c.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(l.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(o===h.P.Pass?[new s.J("emissionFactor",(e=>e.emissiveFactor)),new s.J("mrrFactors",(e=>e.mrrFactors))]:[new a.B("emissionFactor",(e=>e.emissiveFactor)),new a.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?l.H`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?l.H`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?l.H`
                vtc.size = ${(0,n.w_)(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:l.H`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?l.H`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?l.H`
                vtc.size = ${(0,n.w_)(t,"texEmission")};
                applyEmission(vtc);`:l.H`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?l.H`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?l.H`
                vtc.size = ${(0,n.w_)(t,"texOcclusion")};
                applyOcclusion(vtc);`:l.H`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},85586:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(98634);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},58335:(e,t,r)=>{r.d(t,{XE:()=>p,hb:()=>m});r(71353);var i=r(78980),o=r(75993),n=r(95276),a=r(99339),s=r(98634),l=r(61809),c=r(99340);class d extends l.x{constructor(e,t,r){super(e,"mat4",c.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}class u extends l.x{constructor(e,t,r){super(e,"mat4",c.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var h=r(19253),f=r(97528);function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e,t))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e,t))}function v(e,t){const r=e.fragment;r.include(i.n),r.uniforms.add([...(0,h.J)("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?f.D.None:f.D.Size),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(s.H`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${(0,o.w_)(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}},79154:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var i=r(92026),o=r(23588),n=r(98634),a=r(35522);function s(e){e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>(0,i.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,o.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(n.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>(0,i.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,o.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(n.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>(0,i.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,o.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(n.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>(0,i.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,o.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(n.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>(0,i.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,o.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},10758:(e,t,r)=>{r.d(t,{k:()=>u});var i=r(49450),o=r(61809),n=r(99340);class a extends o.x{constructor(e,t,r){super(e,"vec4",n.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.x{constructor(e,t,r){super(e,"float",n.P.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var l=r(98634),c=r(35522),d=r(4760);r(11873),r(71353),r(56529);function u(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),t.hasVvInstancing&&r.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),8),new a("vvColorColors",(e=>e.vvColorColors),8)]),r.code.add(l.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},26461:(e,t,r)=>{r.d(t,{F:()=>i,b:()=>o});const i=.1,o=.001},65974:(e,t,r)=>{r.d(t,{z:()=>l});var i=r(26461),o=r(98634);function n(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.b)}) { discard; } }
  `)}r(61809),r(99340);var a=r(58406),s=r(68401);function l(e,t){c(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(n);case s.JJ.Opaque:i.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},96415:(e,t,r)=>{r.d(t,{G:()=>d,R:()=>h});var i=r(88396),o=r(6394),n=r(90045),a=r(67077),s=r(82999),l=r(95276),c=r(98634);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,n.s)(u,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(u,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>h(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.c)();function h(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(f,0,1):(0,i.s)(f,1,0)}const f=(0,o.a)()},27254:(e,t,r)=>{r.d(t,{$:()=>o});var i=r(98634);function o(e,t){let{code:r}=e;t.doublePrecisionRequiresObfuscation?r.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):r.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},98082:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(49420),o=r(98634);function n(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function a(e){e.include(n),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
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

      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},78980:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(98634);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
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
}`)}},82552:(e,t,r)=>{r.d(t,{hY:()=>f,Sv:()=>m,_8:()=>g});var i=r(14226),o=r(92733),n=r(11186),a=r(71353),s=r(86471),l=r(49450),c=r(61809),d=r(99340);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var h=r(8654);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,n.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.w)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin))]);const r=e=>(0,n.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,i.w)(p,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t)))])}const p=(0,o.c)(),v=(0,a.c)();function g(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},75993:(e,t,r)=>{r.d(t,{aU:()=>n,b6:()=>s,o_:()=>o,w_:()=>a});var i=r(98634);const o="Size",n="InvSize";function a(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e.hasWebGL2Context){const e=i.H`vec2(textureSize(${t}, ${i.H.int(a)}))`;return r?"(1.0 / "+e+")":e}return r?t+n:t+o}function s(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(e.hasWebGL2Context)return i.H`texelFetch(${t}, ivec2(${r}), ${i.H.int(a)})`;let s=i.H`texture2D(${t}, ${r} * `;return s+=o?i.H`(${o}))`:i.H`${t+n})`,s}},22527:(e,t,r)=>{r.d(t,{q:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},82999:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},86471:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}},49450:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},95276:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec4",o.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},58406:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"float",o.P.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},99339:(e,t,r)=>{r.d(t,{_:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"int",o.P.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},82644:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},35522:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},8654:(e,t,r)=>{r.d(t,{g:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"mat4",o.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},64201:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(10064),o=r(32718),n=r(92026);const a=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?g:v,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,n.pC)(i)&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,n.pC)(i)&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r,n)=>{for(let a=0;a<o;++a)i[a](t,e,r,n)}}}class c{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if((0,n.Wi)(e))a.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>(0,n.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new d,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p._numberToFloatStr(r);break;case"int":i=p._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"},78050:(e,t,r)=>{r.d(t,{F:()=>h,R:()=>u});var i=r(92026),o=r(88396),n=r(6394),a=r(75993),s=r(22527),l=r(97528),c=r(61809),d=r(99340);class u extends c.x{constructor(e,t){super(e,"sampler2D",d.P.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.D.None;const c=[new u(e,t)];if(r&l.D.Size){const r=e+a.o_;c.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,a.descriptor.width,a.descriptor.height):n.Z})))}if(r&l.D.InvSize){const r=e+a.aU;c.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,1/a.descriptor.width,1/a.descriptor.height):n.Z})))}return c}const f=(0,n.a)()},19253:(e,t,r)=>{r.d(t,{A:()=>u,J:()=>h});var i=r(92026),o=r(88396),n=r(6394),a=r(75993),s=r(82999),l=r(97528),c=r(61809),d=r(99340);class u extends c.x{constructor(e,t){super(e,"sampler2D",d.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.D.None;const c=[new u(e,t)];if(r&l.D.Size){const r=e+a.o_;c.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,a.descriptor.width,a.descriptor.height):n.Z})))}if(r&l.D.InvSize){const r=e+a.aU;c.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,1/a.descriptor.width,1/a.descriptor.height):n.Z})))}return c}const f=(0,n.a)()},97528:(e,t,r)=>{var i;r.d(t,{D:()=>i}),function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"}(i||(i={}))},61809:(e,t,r)=>{r.d(t,{x:()=>n});var i=r(92026),o=r(99340);class n{constructor(e,t,r,n){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.name=e,this.type=t,this.arraySize=a,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},(0,i.pC)(r)&&(0,i.pC)(n)&&(this.bind[r]=n)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},98634:(e,t,r)=>{r.d(t,{H:()=>o,K:()=>i});const i=class{};function o(e){let t="";for(let r=0;r<(arguments.length<=1?0:arguments.length-1);r++)t+=e[r]+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]);return t+=e[e.length-1],t}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},99340:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},82144:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},31132:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(92026),o=r(8548);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0;e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},33559:(e,t,r)=>{r.d(t,{m:()=>o,o:()=>n});var i=r(98634);class o extends i.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},91526:(e,t,r)=>{r.d(t,{a:()=>i});class i{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;this.data=e,this.size=t,this.exclusive=r,this.stride=i}}},1395:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(95439);class o{constructor(){this.id=(0,i.D)()}unload(){}}},79100:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},7566:(e,t,r)=>{r.d(t,{i:()=>o});var i=r(4760);const o=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},25278:(e,t,r)=>{r.d(t,{F:()=>s});var i=r(92026),o=r(66978),n=r(98634),a=r(68401);class s extends class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new l((0,i.pC)(this._texture)?this._texture.glTexture:null,(0,i.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,i.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,i.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,i.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,i.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,i.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,o.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends n.K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},72838:(e,t,r)=>{r.d(t,{$z:()=>n,DX:()=>d,mi:()=>o,p:()=>c});var i=r(18722);function o(e){if(Array.isArray(e)){if(e.length<i.DB)return e;for(const t of e)if(t>=65536)return new Uint32Array(e);return new Uint16Array(e)}if(e.length<i.DB)return Array.from(e);if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}function n(e){const t=3*e;return t<=i.DB?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=[0],l=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return s;if(e<i.DB)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}function d(e){if(1===e)return s;if(e<i.DB)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.slice(0,e));if(e>a.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(a.slice(0,e))}},56529:(e,t,r)=>{r.d(t,{F5:()=>d,yD:()=>i});var i,o=r(92026),n=r(71353),a=(r(98634),r(1395)),s=r(79100),l=r(7566),c=r(80026);class d extends a.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=l.i,this._pp0=(0,n.f)(0,0,1),this._pp1=(0,n.f)(0,0,0),this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,o.pC)(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(i||(i={}))},78041:(e,t,r)=>{r.d(t,{Bh:()=>f,IB:()=>l,j7:()=>c,je:()=>h,ve:()=>d,wu:()=>a});var i=r(25920),o=r(8548),n=r(36207);const a=(0,n.wK)(o.zi.SRC_ALPHA,o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA,o.zi.ONE_MINUS_SRC_ALPHA),s=(0,n.if)(o.zi.ONE,o.zi.ONE),l=(0,n.if)(o.zi.ZERO,o.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.A.FrontFace?null:e===i.A.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.wb.LESS;return e===i.A.NONE||e===i.A.FrontFace?t:o.wb.LEQUAL}},27627:(e,t,r)=>{r.d(t,{$:()=>s});var i=r(92026),o=r(27546),n=r(99340),a=r(37825);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(n.P.Pass,this),this.bindDraw=t.generateBind(n.P.Draw,this),this._fragmentUniforms=(0,a.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,i.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,i.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},25920:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},97731:(e,t,r)=>{r.d(t,{hu:()=>o,yK:()=>n});r(6394),r(90045);(0,r(67077).c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new i(`${t} at ${e}`)}}function n(e,t,r,i){let o,n=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];n>a&&(o=n,n=a,a=o);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(o=s,s=l,l=o),n>l||s>a)return!1;s>n&&(n=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(o=c,c=d,d=o),!(n>d||c>a)&&(d<a&&(a=d),!(a<0))}},4760:(e,t,r)=>{var i;r.d(t,{T:()=>i}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(i||(i={}))},33341:(e,t,r)=>{r.d(t,{ow:()=>h});var i=r(7566),o=r(4760),n=r(8548),a=r(61109);new a.G(o.T.POSITION,3,n.g.FLOAT,0,12),new a.G(o.T.POSITION,3,n.g.FLOAT,0,20),new a.G(o.T.UV0,2,n.g.FLOAT,12,20),new a.G(o.T.POSITION,3,n.g.FLOAT,0,32),new a.G(o.T.NORMAL,3,n.g.FLOAT,12,32),new a.G(o.T.UV0,2,n.g.FLOAT,24,32),new a.G(o.T.POSITION,3,n.g.FLOAT,0,16),new a.G(o.T.COLOR,4,n.g.UNSIGNED_BYTE,12,16);const s=[new a.G(o.T.POSITION,2,n.g.FLOAT,0,8)],l=[new a.G(o.T.POSITION,2,n.g.FLOAT,0,16),new a.G(o.T.UV0,2,n.g.FLOAT,8,16)];var c=r(45412);class d extends c.U{}var u=r(44070);r(371);function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,c=null;return c=t===l?new Float32Array([o,o,0,0,a,o,1,0,o,a,0,1,a,a,1,1]):new Float32Array([o,o,a,o,o,a,a,a]),new d(e,r,{geometry:t},{geometry:u.f.createVertex(e,n.l1.STATIC_DRAW,c)})}},80026:(e,t,r)=>{r.d(t,{FZ:()=>I,Uf:()=>M,Bw:()=>_,LO:()=>O,Hx:()=>C});var i=r(63780),o=r(16889),n=r(92026),a=r(11186),s=r(71353),l=r(41414),c=r(79100);r(50951);function d(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return m.scale=Math.min(i.divisor/(t-i.offset),1),m.factor=function(e){return Math.abs(e*e*e)}(e),m.minPixelSize=i.minPixelSize,m.paddingPixels=o,m}function u(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function h(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),u(e,t))}function f(e,t,r,i){return h(e,d(t,r,i))}(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const m={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var p=r(97731),v=r(4760);const g=(0,l.Ue)();function _(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,p.hu)(e.type===c.U.Mesh);const a=t.tolerance;T(e.boundingInfo,r,i,a,o,n)}else{const t=e.indices.get(v.T.POSITION),a=e.vertexAttributes.get(v.T.POSITION);S(r,i,0,t.length/3,t,a,void 0,o,n)}}const x=(0,s.c)();function T(e,t,r,i,o,s){if((0,n.Wi)(e))return;const c=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,x);if((0,l.op)(g,e.bbMin),(0,l.Tn)(g,e.bbMax),(0,n.pC)(o)&&o.applyToAabb(g),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<o)}(e,t,r,i,1/0)}(g,t,c,i)){const{primitiveIndices:n,indices:a,position:l}=e,c=n?n.length:a.length/3;if(c>R){const n=e.getChildren();if(void 0!==n){for(const e of n)T(e,t,r,i,o,s);return}}S(t,r,0,c,a,l,n,o,s)}}const b=(0,s.c)();function S(e,t,r,i,o,a,s,l,c){if(s)return function(e,t,r,i,o,a,s,l,c){const{data:d,stride:u}=a,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let _=r;_<i;++_){const e=s[_];let t=3*e,r=u*o[t++],i=d[r++],a=d[r++],x=d[r];r=u*o[t++];let T=d[r++],S=d[r++],A=d[r];r=u*o[t];let y=d[r++],C=d[r++],M=d[r];(0,n.pC)(l)&&([i,a,x]=l.applyToVertex(i,a,x,_),[T,S,A]=l.applyToVertex(T,S,A,_),[y,C,M]=l.applyToVertex(y,C,M,_));const O=T-i,P=S-a,I=A-x,R=y-i,E=C-a,L=M-x,N=v*L-E*g,H=g*R-L*p,D=p*E-R*v,F=O*N+P*H+I*D;if(Math.abs(F)<=Number.EPSILON)continue;const z=h-i,B=f-a,V=m-x,U=z*N+B*H+V*D;if(F>0){if(U<0||U>F)continue}else if(U>0||U<F)continue;const G=B*I-P*V,W=V*O-I*z,$=z*P-O*B,k=p*G+v*W+g*$;if(F>0){if(k<0||U+k>F)continue}else if(k>0||U+k<F)continue;const j=(R*G+E*W+L*$)/F;j>=0&&c(j,w(O,P,I,R,E,L,b),e,!1)}}(e,t,r,i,o,a,s,l,c);const{data:d,stride:u}=a,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let _=r,x=3*r;_<i;++_){let e=u*o[x++],t=d[e++],r=d[e++],i=d[e];e=u*o[x++];let a=d[e++],s=d[e++],T=d[e];e=u*o[x++];let S=d[e++],A=d[e++],y=d[e];(0,n.pC)(l)&&([t,r,i]=l.applyToVertex(t,r,i,_),[a,s,T]=l.applyToVertex(a,s,T,_),[S,A,y]=l.applyToVertex(S,A,y,_));const C=a-t,M=s-r,O=T-i,P=S-t,I=A-r,R=y-i,E=v*R-I*g,L=g*P-R*p,N=p*I-P*v,H=C*E+M*L+O*N;if(Math.abs(H)<=Number.EPSILON)continue;const D=h-t,F=f-r,z=m-i,B=D*E+F*L+z*N;if(H>0){if(B<0||B>H)continue}else if(B>0||B<H)continue;const V=F*O-M*z,U=z*C-O*D,G=D*M-C*F,W=p*V+v*U+g*G;if(H>0){if(W<0||B+W>H)continue}else if(W>0||B+W<H)continue;const $=(P*V+I*U+R*G)/H;$>=0&&c($,w(C,M,O,P,I,R,b),_,!1)}}const A=(0,s.c)(),y=(0,s.c)();function w(e,t,r,i,o,n,s){return(0,a.s)(A,e,t,r),(0,a.s)(y,i,o,n),(0,a.f)(s,A,y),(0,a.n)(s,s),s}function C(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;(0,n.pC)(a)&&(s=f(s,i,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function M(e,t){const r=t?M(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=P(t)),null==t&&i in r||(r[i]=t)}return r}function O(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.Vx)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function P(e){const t=[];return e.forEach((e=>t.push(e))),t}const I={multiply:1,ignore:2,replace:3,tint:4},R=1e3},61109:(e,t,r)=>{r.d(t,{G:()=>i});class i{constructor(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=o,this.normalized=n,this.divisor=a}}},43411:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:()=>n,LF:()=>i,U8:()=>o});const a=new Float32Array(2)},36207:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>n,jp:()=>V,sm:()=>T,wK:()=>a,zp:()=>c});var i=r(68401),o=r(8548);function n(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.db.ADD,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.db.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o.db.ADD,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function f(e){return w.intern(e)}function m(e){return M.intern(e)}function p(e){return P.intern(e)}function v(e){return R.intern(e)}function g(e){return L.intern(e)}function _(e){return H.intern(e)}function x(e){return F.intern(e)}function T(e){return B.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const A=new b(y,(e=>({__tag:"Blending",...e})));function y(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(C,(e=>({__tag:"Culling",...e})));function C(e){return e?S([e.face,e.mode]):null}const M=new b(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?S([e.factor,e.units]):null}const P=new b(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?S([e.func]):null}const R=new b(E,(e=>({__tag:"StencilTest",...e})));function E(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const L=new b(N,(e=>({__tag:"DepthWrite",...e})));function N(e){return e?S([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?S([e.r,e.g,e.b,e.a]):null}const F=new b(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?S([e.mask]):null}const B=new b((function(e){return e?S([y(e.blending),C(e.culling),O(e.polygonOffset),I(e.depthTest),E(e.stencilTest),N(e.depthWrite),D(e.colorWrite),z(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite)})));class V{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=9900.62c5cf84.chunk.js.map