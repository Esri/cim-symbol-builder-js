"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[706],{32078:(e,t,r)=>{r.d(t,{D:()=>j,b:()=>$});var i=r(21787),o=r(46521),n=r(13598),a=r(1391),s=r(62707),l=r(55039),c=r(51546),u=r(77171),d=r(47624),h=r(60624),m=r(37099),f=r(76056),p=r(135),g=r(11317),v=r(15719),_=r(92555),T=r(89136),x=r(15817),b=r(95134),E=r(89753),A=r(5802),S=r(42001),w=r(19419),R=r(26322),C=r(85504),y=r(22539),O=r(57806),M=r(92302),P=r(96310),I=r(85787),N=r(90692),L=r(62062),D=r(172),H=r(71250),F=r(21437),B=r(74709),U=r(19850),z=r(8319),V=r(33680),G=r(98069),W=r(93144),k=r(35065);function $(e){const t=new V.kG,{vertex:r,fragment:$,varyings:j}=t;if((0,L.Sv)(r,e),t.include(m.f),j.add("vpos","vec3"),t.include(M.k,e),t.include(d.f,e),t.include(_.L,e),e.hasColorTextureTransform&&t.include(O.av),e.output===l.H.Color||e.output===l.H.Alpha){e.hasNormalTextureTransform&&t.include(O.NI),e.hasEmissionTextureTransform&&t.include(O.R5),e.hasOcclusionTextureTransform&&t.include(O.jF),e.hasMetallicRoughnessTextureTransform&&t.include(O.DT),(0,L.hY)(r,e),t.include(h.O,e),t.include(u.w,e);const l=e.normalType===h.r.Attribute||e.normalType===h.r.Compressed;l&&e.offsetBackfaces&&t.include(s.w),t.include(x.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(k.T.INSTANCECOLOR,"vec4"),j.add("vPositionLocal","vec3"),t.include(p.D,e),t.include(a.qj,e),t.include(f.R,e),t.include(g.c,e),r.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),j.add("vcolorExt","vec4"),e.hasMultipassTerrain&&j.add("depth","float");const c=e.hasModelTransformation;if(c){const e=(0,o.c)();r.uniforms.add(new z.g("model",(e=>e.modelTransformation??n.I))),r.uniforms.add(new U.c("normalTransform",(t=>((0,i.b)(e,t.modelTransformation??n.I),e))))}r.code.add(B.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${B.H.float(P.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${c?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${l?B.H`vNormalWorld = ${c?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${l&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?B.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?B.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?B.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?B.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?B.H`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case l.H.Alpha:t.include(c.f5,e),t.include(I.z,e),t.include(S.l,e),$.uniforms.add(new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&$.uniforms.add(new G.A("tex",(e=>e.texture))),$.include(N.y),$.code.add(B.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?B.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?B.H`colorUV`:B.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:B.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?B.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:B.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case l.H.Color:t.include(c.f5,e),t.include(E.XP,e),t.include(b.K,e),t.include(I.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(S.l,e),(0,L.hY)($,e),$.uniforms.add(r.uniforms.get("localOrigin"),new D.J("ambient",(e=>e.ambient)),new D.J("diffuse",(e=>e.diffuse)),new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&$.uniforms.add(new G.A("tex",(e=>e.texture))),t.include(C.jV,e),t.include(R.T,e),$.include(N.y),t.include(w.k,e),(0,E.PN)($),(0,E.sC)($),(0,A.F1)($),$.code.add(B.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?B.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?B.H`colorUV`:B.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:B.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===h.r.ScreenDerivative?B.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:B.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===C.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?B.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:B.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?B.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?B.H`normalUV`:"vuv0"});`:B.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?B.H`normalize(posWorld);`:B.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?B.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===C.f7.Normal||e.pbrMode===C.f7.Schematic?B.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?B.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:B.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===W.A.Color?B.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(T.s,e),t}const j=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"}))},41846:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>H});var i=r(1391),o=r(62707),n=r(55039),a=r(51546),s=r(77171),l=r(47624),c=r(60624),u=r(37099),d=r(76056),h=r(135),m=r(11317),f=r(92555),p=r(89136),g=r(95134),v=r(89753),_=r(5802),T=r(42001),x=r(26322),b=r(85504),E=r(22539),A=r(92302),S=r(96310),w=r(85787),R=r(90692),C=r(62062),y=r(172),O=r(71250),M=r(21437),P=r(74709),I=r(33680),N=r(98069),L=r(93144),D=r(35065);function H(e){const t=new I.kG,{vertex:r,fragment:H,varyings:F}=t;return(0,C.Sv)(r,e),t.include(u.f),F.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(f.L,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||((0,C.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(D.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.hasMultipassTerrain&&F.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(d.R,e),t.include(m.c,e),r.uniforms.add(new O.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(P.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${P.H.float(S.b)}) {
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
          ${e.hasMultipassTerrain?P.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(a.f5,e),t.include(w.z,e),t.include(T.l,e),H.uniforms.add(new M.p("opacity",(e=>e.opacity)),new M.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&H.uniforms.add(new N.A("tex",(e=>e.texture))),H.include(R.y),H.code.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?P.H`colorUV`:P.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(a.f5,e),t.include(v.XP,e),t.include(g.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?E.hb:E.XE,e),t.include(T.l,e),(0,C.hY)(t.fragment,e),(0,_.Pe)(H),(0,v.PN)(H),(0,v.sC)(H),H.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new y.J("ambient",(e=>e.ambient)),new y.J("diffuse",(e=>e.diffuse)),new M.p("opacity",(e=>e.opacity)),new M.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&H.uniforms.add(new N.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(x.T,e),H.include(R.y),(0,_.F1)(H),H.code.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?P.H`colorUV`:P.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?P.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?P.H`albedo = mix(albedo, vec3(1), 0.9);`:P.H``}
        ${P.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?P.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.A.Color?P.H`fragColor = premultiplyAlpha(fragColor);`:P.H``}
      }
    `)),t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:H},Symbol.toStringTag,{value:"Module"}))},25377:(e,t,r)=>{r.d(t,{S:()=>v,b:()=>f,g:()=>p});var i=r(4307),o=r(97323),n=r(51666),a=r(5543),s=r(20787),l=r(19693),c=r(21437),u=r(74709),d=r(33680),h=r(98069);const m=16;function f(){const e=new d.kG,t=e.fragment;return e.include(n.k),t.include(a.S),e.include(s.G),t.uniforms.add(new c.p("radius",((e,t)=>p(t.camera)))),t.code.add(u.H`vec3 sphere[16];
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
}`),t.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.A("nearFar",((e,t)=>t.camera.nearFar)),new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new l.A("zScale",((e,t)=>(0,s.R)(t))),new c.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,i.s)(g,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,i.s)(g,t.camera.fullWidth,t.camera.fullHeight)))),t.code.add(u.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(m)}; ++i) {
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

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const g=(0,o.a)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},59915:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>f});var i=r(17896),o=r(51666),n=r(5543),a=r(98925),s=r(19693),l=r(21437),c=r(74709),u=r(33680),d=r(16374),h=r(98069);const m=4;function f(){const e=new u.kG,t=e.fragment;e.include(o.k);const r=(m+1)/2,f=1/(2*r*r);return t.include(n.S),t.uniforms.add(new h.A("depthMap",(e=>e.depthTexture)),new d.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,i.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(m)}; r <= ${c.H.int(m)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},14682:(e,t,r)=>{function i(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function o(e,t,r,i,o,n,a,s,l){const c=new Float32Array(9);return c[0]=e,c[1]=t,c[2]=r,c[3]=i,c[4]=o,c[5]=n,c[6]=a,c[7]=s,c[8]=l,c}r.d(t,{c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){const t=new Float32Array(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},create:i,createView:function(e,t){return new Float32Array(e,t,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},1265:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function n(){return i()}function a(){return o(1,1)}function s(){return o(1,0)}function l(){return o(0,1)}r.d(t,{O:()=>u,Z:()=>c,c:()=>i,f:()=>o});const c=n(),u=a(),d=s(),h=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:u,UNIT_X:d,UNIT_Y:h,ZEROS:c,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},create:i,createView:function(e,t){return new Float32Array(e,t,2)},fromValues:o,ones:a,unitX:s,unitY:l,zeros:n},Symbol.toStringTag,{value:"Module"}))},20773:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>a,c:()=>o,d:()=>u,e:()=>l,n:()=>d,s:()=>c,t:()=>n});var i=r(72220);function o(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return i.c.error("source and destination buffers need to have the same number of elements"),e;const a=e.length/o,s=r[0],l=r[1],c=r[2],u=r[4],d=r[5],h=r[6],m=r[8],f=r[9],p=r[10],g=r[12],v=r[13],_=r[14];let T=0,x=0;for(let r=0;r<a;r++){const r=t[T],i=t[T+1],a=t[T+2];e[x]=s*r+u*i+m*a+g,e[x+1]=l*r+d*i+f*a+v,e[x+2]=c*r+h*i+p*a+_,T+=n,x+=o}return e}function a(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,o=3,n=o){if(e.length/o!==Math.ceil(t.length/n))return void i.c.error("source and destination buffers need to have the same number of elements");const a=e.length/o,s=r[0],l=r[1],c=r[2],u=r[3],d=r[4],h=r[5],m=r[6],f=r[7],p=r[8];let g=0,v=0;for(let r=0;r<a;r++){const r=t[g],i=t[g+1],a=t[g+2];e[v]=s*r+u*i+m*a,e[v+1]=l*r+d*i+f*a,e[v+2]=c*r+h*i+p*a,g+=n,v+=o}}function l(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,i=3){const o=Math.min(e.length/i,t.count),n=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<o;t++)e[l]=r*n[s],e[l+1]=r*n[s+1],e[l+2]=r*n[s+2],s+=a,l+=i}function u(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,r=3,i=r){const o=Math.min(e.length/r,t.length/i);let n=0,a=0;for(let s=0;s<o;s++){const o=t[n],s=t[n+1],l=t[n+2],c=o*o+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*o,e[a+1]=t*s,e[a+2]=t*l}n+=i,a+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:d,normalizeView:u,scale:c,scaleView:l,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<i;e++)o[c]=a[l]>>r,o[c+1]=a[l+1]>>r,o[c+2]=a[l+2]>>r,l+=s,c+=n},transformMat3:s,transformMat3View:a,transformMat4:n,transformMat4View:o},Symbol.toStringTag,{value:"Module"}))},23670:(e,t,r)=>{r.d(t,{G:()=>o});var i=r(20102);let o=class{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new o(this.major,this.minor,this._context)}static parse(e,t=""){const[r,n]=e.split("."),a=/^\s*\d+\s*$/;if(!r||!r.match||!a.test(r))throw new i.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!n||!n.match||!a.test(n))throw new i.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),l=parseInt(n,10);return new o(s,l,t)}}},43090:(e,t,r)=>{function i(e){return 32+e.length}function o(e){if(!e)return 0;let t=l;for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(typeof o){case"string":t+=i(o);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function n(e){if(!e)return 0;if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;let r=c;for(let i=0;i<t;i++)r+=a(e[i]);return r}(e);let t=l;for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r]));return t}function a(e){switch(typeof e){case"object":return n(e);case"string":return i(e);case"number":return 16;case"boolean":return 4;default:return 8}}function s(e,t){return c+e.length*t}r.d(t,{Ul:()=>n,do:()=>s,f2:()=>o});const l=32,c=32},32243:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>i,pJ:()=>o});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},72220:(e,t,r)=>{r.d(t,{c:()=>i});const i=r(92604).Z.getLogger("esri.views.3d.support.buffer.math")},16996:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>u,zk:()=>c});var i=r(22021),o=r(22807),n=r(17896),a=r(65617),s=r(12981);function l(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function c(e,t,r=l()){return(0,n.c)(r.origin,e),(0,n.b)(r.vector,t,e),r}function u(e,t,r){return function(e,t,r,o,a){const{vector:l,origin:c}=e,u=(0,n.b)(s.WM.get(),t,c),d=(0,n.e)(l,u)/(0,n.p)(l);return(0,n.g)(a,l,(0,i.uZ)(d,0,1)),(0,n.a)(a,a,e.origin)}(e,t,0,0,r)}(0,a.c)(),(0,a.c)(),new o.x((()=>l()))},40706:(e,t,r)=>{r.d(t,{fetch:()=>lr});var i=r(32243),o=r(21787),n=r(46521),a=r(52138),s=r(13598),l=r(17896),c=r(65617),u=r(60437),d=r(1533);function h(e,t=!1){return e<=d.DB?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}var m=r(56481),f=r(20773),p=r(11077),g=r(10816),v=r(56067),_=r(75488),T=r(40270),x=r(91695),b=r(91911),E=r(15317),A=r(14682),S=r(1265);function w(e){if(null==e)return null;const t=null!=e.offset?e.offset:S.Z,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:S.O,n=(0,A.f)(1,0,0,0,1,0,t[0],t[1],1),a=(0,A.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=(0,A.f)(i[0],0,0,0,i[1],0,0,0,1),l=(0,A.c)();return(0,o.m)(l,a,s),(0,o.m)(l,n,l),l}class R{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class C{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new R,this.numberOfVertices=0}}var y=r(3172),O=r(66643),M=r(43090),P=r(20102),I=r(92604);class N{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var L=r(95330),D=r(23670);async function H(e,t){const{data:r}=await(0,y.default)(e,{responseType:"image",...t});return r}var F=r(51417),B=r(47026),U=r(24882);function z(e){if(e.length<d.DB)return Array.from(e);if((0,d.kJ)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,d.Uc)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var V=r(44553),G=r(11726);class W{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this._children=void 0,(0,G.hu)(e.length>=1),(0,G.hu)(r.length%this._numIndexPerPrimitive==0),(0,G.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,G.hu)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];k.clear(),k.push(s);const u=(0,c.f)(o[s],o[s+1],o[s+2]),d=(0,c.a)(u);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],k.push(s);let t=o[s];u[0]=Math.min(t,u[0]),d[0]=Math.max(t,d[0]),t=o[s+1],u[1]=Math.min(t,u[1]),d[1]=Math.max(t,d[1]),t=o[s+2],u[2]=Math.min(t,u[2]),d[2]=Math.max(t,d[2])}}this.bbMin=u,this.bbMax=d;const h=(0,l.h)((0,c.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let m=this.radius*this.radius;for(let e=0;e<k.length;++e){s=k.at(e);const t=o[s]-h[0],r=o[s+1]-h[1],i=o[s+2]-h[2],n=t*t+r*r+i*i;if(n<=m)continue;const a=Math.sqrt(n),l=.5*(a-this.radius);this.radius=this.radius+l,m=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=i*c}this.center=h,k.clear()}getChildren(){if(this._children||(0,l.d)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,l.h)((0,c.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n*this.indices[s],c=o[l],u=o[l+1],d=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<u&&(u=r),i<d&&(d=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==s[e]&&this._children.push(new W(s[e],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){k.prune()}}const k=new V.Z({deallocator:null});var $=r(17662),j=r(4726),q=r(22807),X=r(16996);function Y(e,t,r){return(0,l.b)(J,t,e),(0,l.b)(Z,r,e),(0,l.l)((0,l.f)(J,J,Z))/2}r(12981),new q.x(X.Ue),new q.x((()=>{return e?{p0:(0,c.a)(e.p0),p1:(0,c.a)(e.p1),p2:(0,c.a)(e.p2)}:{p0:(0,c.c)(),p1:(0,c.c)(),p2:(0,c.c)()};var e}));const J=(0,c.c)(),Z=(0,c.c)(),K=(0,c.c)(),Q=(0,c.c)(),ee=(0,c.c)(),te=(0,c.c)();var re=r(99001);class ie{constructor(e){this.channel=e,this.id=(0,re.D)()}}var oe=r(35065);r(9820),(0,c.c)(),new Float32Array(6);class ne extends $.c{constructor(e,t,r=[],i=null,o=j.U.Mesh,n=null,a=-1){super(),this.material=e,this.mapPositions=i,this.type=o,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,r]of t)r&&this._vertexAttributes.set(e,{...r});if(null==r||0===r.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,U.KF)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,t]of r)t&&(this._indices.set(e,(0,U.mi)(t)),e===oe.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}instantiate(e={}){const t=new ne(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,r)=>{e.exclusive=!1,t._vertexAttributes.set(r,e)})),this._indices.forEach(((e,r)=>t._indices.set(r,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:z(t.data)},this._vertexAttributes.set(e,t)),t}setAttributeData(e,t){const r=this._vertexAttributes.get(e);r&&this._vertexAttributes.set(e,{...r,exclusive:!0,data:t})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===j.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===j.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,l.m)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(oe.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0),(0,l.s)(te,0,0,0);let n=0,a=0;for(let e=0;e<t.length-2;e+=3){const s=t[e]*i,c=t[e+1]*i,u=t[e+2]*i;(0,l.s)(K,o[s],o[s+1],o[s+2]),(0,l.s)(Q,o[c],o[c+1],o[c+2]),(0,l.s)(ee,o[u],o[u+1],o[u+2]);const d=Y(K,Q,ee);d?((0,l.a)(K,K,Q),(0,l.a)(K,K,ee),(0,l.g)(K,K,1/3*d),(0,l.a)(r,r,K),n+=d):((0,l.a)(te,te,K),(0,l.a)(te,te,Q),(0,l.a)(te,te,ee),a+=3)}return!(0===a&&0===n||(0!==n?((0,l.g)(r,r,1/n),0):0===a||((0,l.g)(r,te,1/a),0)))}(this.vertexAttributes.get(oe.T.POSITION),t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(oe.T.POSITION),r=this.indices.get(oe.T.POSITION);return function(e,t,r,i){if(!e)return!1;(0,l.s)(i,0,0,0),(0,l.s)(te,0,0,0);let o=0,n=0;const{size:a,data:s}=e,c=t?t.length-1:s.length/a-1,u=c+(r?2:0);for(let e=0;e<u;e+=2){const r=e<c?e:c,u=e<c?e+1:0,d=(t?t[r]:r)*a,h=(t?t[u]:u)*a;K[0]=s[d],K[1]=s[d+1],K[2]=s[d+2],Q[0]=s[h],Q[1]=s[h+1],Q[2]=s[h+2],(0,l.g)(K,(0,l.a)(K,K,Q),.5);const m=(0,l.j)(K,Q);m>0?((0,l.a)(i,i,(0,l.g)(K,K,m)),o+=m):0===o&&((0,l.a)(te,te,K),n++)}return 0!==o?((0,l.g)(i,i,1/o),!0):0!==n&&((0,l.g)(i,te,1/n),!0)}(t,r,r&&function(e,t,r){return!(!("isClosed"in e)||!e.isClosed)&&(r?r.length>2:t.data.length>6)}(this.material.parameters,t,r),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(oe.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,l.s)(r,0,0,0);let n=-1,a=0;for(let e=0;e<t.length;e++){const s=t[e]*i;n!==s&&(r[0]+=o[s],r[1]+=o[s+1],r[2]+=o[s+2],a++),n=s}return a>1&&(0,l.g)(r,r,1/a),a>0}(this.vertexAttributes.get(oe.T.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(oe.T.POSITION),t=this.vertexAttributes.get(oe.T.POSITION);if(!e||0===e.length||!t)return null;const r=this.type===j.U.Mesh?3:1;(0,G.hu)(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=(0,U.KF)(e.length/r);return new W(i,r,e,t)}get transformation(){return this._transformation??s.I}set transformation(e){this._transformation=e&&e!==s.I?(0,s.b)(e):null}get shaderTransformation(){return null!=this._shaderTransformer?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return null!=this._shaderTransformer}addHighlight(){const e=new ie(B.V_.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var ae=r(80442),se=r(32448),le=r(70586),ce=r(81271),ue=r(85958),de=r(99880);let he;var me,fe;(fe=me||(me={}))[fe.ETC1_RGB=0]="ETC1_RGB",fe[fe.ETC2_RGBA=1]="ETC2_RGBA",fe[fe.BC1_RGB=2]="BC1_RGB",fe[fe.BC3_RGBA=3]="BC3_RGBA",fe[fe.BC4_R=4]="BC4_R",fe[fe.BC5_RG=5]="BC5_RG",fe[fe.BC7_M6_RGB=6]="BC7_M6_RGB",fe[fe.BC7_M5_RGBA=7]="BC7_M5_RGBA",fe[fe.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",fe[fe.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",fe[fe.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",fe[fe.ATC_RGB=11]="ATC_RGB",fe[fe.ATC_RGBA=12]="ATC_RGBA",fe[fe.FXT1_RGB=17]="FXT1_RGB",fe[fe.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",fe[fe.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",fe[fe.ETC2_EAC_R11=20]="ETC2_EAC_R11",fe[fe.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",fe[fe.RGBA32=13]="RGBA32",fe[fe.RGB565=14]="RGB565",fe[fe.BGR565=15]="BGR565",fe[fe.RGBA4444=16]="RGBA4444";var pe=r(35371),ge=r(57088),ve=r(45762);let _e=null,Te=null;async function xe(){return null==Te&&(Te=function(){if(null==he){const e=e=>(0,de.V)(`esri/libs/basisu/${e}`);he=r.e(1421).then(r.bind(r,21421)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return he}(),_e=await Te),Te}function be(e,t,r,i,o){const n=(0,ve.RG)(t?pe.q_.COMPRESSED_RGBA8_ETC2_EAC:pe.q_.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Ee(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ae(e){return e.getFaces()>=1&&e.isETC1S()}function Se(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?i?[me.ETC2_RGBA,pe.q_.COMPRESSED_RGBA8_ETC2_EAC]:[me.ETC1_RGB,pe.q_.COMPRESSED_RGB8_ETC2]:c?i?[me.BC3_RGBA,pe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[me.BC1_RGB,pe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[me.RGBA32,pe.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,u))),s(e,u,m[e]);return t.internalFormat=d,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?pe.cw.LINEAR_MIPMAP_LINEAR:pe.cw.LINEAR,t.width=o,t.height=n,new ge.x(e,t,{type:"compressed",levels:m})}const we=I.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Re(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Ce=Re("DXT1"),ye=Re("DXT3"),Oe=Re("DXT5");var Me,Pe,Ie=r(47859);class Ne extends $.c{constructor(e,t){super(),this._data=e,this.type=j.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new se.Z,this.parameters=t||{},this.parameters.mipmap=!1!==this.parameters.mipmap,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:pe.e8.REPEAT,t:pe.e8.REPEAT},this._startPreload(e)}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ce.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ce.HK)(e.src)||(0,ce.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const t=new Ie.X;return t.wrapMode=this.parameters.wrap??pe.e8.REPEAT,t.flipped=!this.parameters.noUnpackFlip,t.samplingMode=this.parameters.mipmap?pe.cw.LINEAR_MIPMAP_LINEAR:pe.cw.LINEAR,t.hasMipmap=!!this.parameters.mipmap,t.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,t.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||function(e,t){if(null==e)return 0;if((0,d.eP)(e)||(0,d.lq)(e))return t.encoding===B.Ti.KTX2_ENCODING?function(e,t){if(null==_e)return e.byteLength;const r=new _e.KTX2File(new Uint8Array(e)),i=Ae(r)?be(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===B.Ti.BASIS_ENCODING?function(e,t){if(null==_e)return e.byteLength;const r=new _e.BasisFile(new Uint8Array(e)),i=Ee(r)?be(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Le(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this.parameters)}load(e){if(null!=this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ge.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,d.eP)(t)||(0,d.lq)(t))&&this.parameters.encoding===B.Ti.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,t)):((0,d.eP)(t)||(0,d.lq)(t))&&this.parameters.encoding===B.Ti.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,t)):((0,d.eP)(t)||(0,d.lq)(t))&&this.parameters.encoding===B.Ti.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,t)):(0,d.lq)(t)?this._loadFromPixelData(e,t):(0,d.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&null!=this._glTexture?this._data.readyState<Me.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return we.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return we.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case Ce:o=8,n=pe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ye:o=16,n=pe.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Oe:o=16,n=pe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return we.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(we.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let d,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*o,d=new Uint8Array(e,m,h),f.push(d),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:n,width:c,height:u}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?pe.cw.LINEAR_MIPMAP_LINEAR:pe.cw.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new ge.x(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==_e&&(_e=await xe());const i=new _e.KTX2File(new Uint8Array(r));if(!Ae(i))return null;i.startTranscoding();const o=Se(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==_e&&(_e=await xe());const i=new _e.BasisFile(new Uint8Array(r));if(!Ee(i))return null;i.startTranscoding();const o=Se(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,G.hu)(this.parameters.width>0&&this.parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.parameters.components?pe.VI.LUMINANCE:3===this.parameters.components?pe.VI.RGB:pe.VI.RGBA,r.width=this.parameters.width??0,r.height=this.parameters.height??0,this._glTexture=new ge.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await H(t,{signal:r});return(0,L.k_)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,ue.fY)(t,t.src,!1,r);return(0,L.k_)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Me.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,le.hw)(l)},a=()=>{t.readyState>=Me.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,t)))},s=e=>{n(),o(e||new P.Z("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,L.fu)(r,(()=>s((0,L.zE)())))}))))}_loadFromImage(e,t){const r=Le(t);this.parameters.width=r.width,this.parameters.height=r.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this.parameters.components?pe.VI.RGB:pe.VI.RGBA,i.width=r.width,i.height=r.height,this._glTexture=new ge.x(e,i,t),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,le.M2)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Le(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(Pe=Me||(Me={}))[Pe.HAVE_NOTHING=0]="HAVE_NOTHING",Pe[Pe.HAVE_METADATA=1]="HAVE_METADATA",Pe[Pe.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",Pe[Pe.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",Pe[Pe.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var De=r(64822),He=r(65576),Fe=r(55039),Be=r(60624),Ue=r(19419),ze=r(85504),Ve=r(60537),Ge=r(82791),We=r(93144),ke=r(27097);const $e=(0,ke.wK)(pe.zi.SRC_ALPHA,pe.zi.ONE,pe.zi.ONE_MINUS_SRC_ALPHA,pe.zi.ONE_MINUS_SRC_ALPHA),je=(0,ke.if)(pe.zi.ONE,pe.zi.ONE),qe=(0,ke.if)(pe.zi.ZERO,pe.zi.ONE_MINUS_SRC_ALPHA);function Xe(e){return e===We.A.FrontFace?null:e===We.A.Alpha?qe:je}const Ye={factor:-1,units:-2};function Je(e,t=pe.wb.LESS){return e===We.A.NONE||e===We.A.FrontFace?t:pe.wb.LEQUAL}var Ze,Ke;(Ke=Ze||(Ze={}))[Ke.INTEGRATED_MESH=0]="INTEGRATED_MESH",Ke[Ke.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",Ke[Ke.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",Ke[Ke.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",Ke[Ke.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",Ke[Ke.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",Ke[Ke.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",Ke[Ke.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",Ke[Ke.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",Ke[Ke.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",Ke[Ke.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",Ke[Ke.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",Ke[Ke.LASERLINES=12]="LASERLINES",Ke[Ke.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",Ke[Ke.HUD_MATERIAL=14]="HUD_MATERIAL",Ke[Ke.LABEL_MATERIAL=15]="LABEL_MATERIAL",Ke[Ke.LINE_CALLOUTS=16]="LINE_CALLOUTS",Ke[Ke.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",Ke[Ke.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",Ke[Ke.DRAPED_WATER=19]="DRAPED_WATER",Ke[Ke.VOXEL=20]="VOXEL",Ke[Ke.MAX_SLOTS=21]="MAX_SLOTS";var Qe=r(51305),et=r(94961),tt=r(72119),rt=r(29268);const it=(0,c.c)(),ot=(0,c.c)(),nt=(0,c.c)(),at=new class{constructor(e=0){this.offset=e,this.sphere=(0,rt.c)(),this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,c.c)(),this._mbs=(0,rt.c)(),this._obb={center:(0,c.c)(),halfSize:(0,tt.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),u=Math.sqrt(s*s+l*l+c*c);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const d=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),m=Math.max(Math.abs(i),Math.abs(a)),f=Math.sqrt(d*d+h*h+m*m),p=this._totalOffset/f,g=this._totalOffset/u;return e[0]+=t*(t>0?p:g),e[1]+=r*(r>0?p:g),e[2]+=i*(i>0?p:g),e[3]+=o*(o<0?p:g),e[4]+=n*(n<0?p:g),e[5]+=a*(a<0?p:g),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,l.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,l.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,l.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Qe.c)(st,e.quaternion),(0,l.q)(this._obb.halfSize,this._obb.halfSize,st),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)it[t]=e[0+t]+this.localOrigin[t],ot[t]=e[3+t]+this.localOrigin[t],nt[t]=it[t];const t=this.applyToVertex(it[0],it[1],it[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)nt[t]=0==(e&1<<t)?it[t]:ot[t];r(nt)}let i=0;for(let e=0;e<3;++e)it[e]*ot[e]<0&&(i|=1<<e);if(0!==i&&7!==i)for(let e=0;e<8;++e)if(0==(i&e)){for(let t=0;t<3;++t)nt[t]=0!=(i&1<<t)?0:0!=(e&1<<t)?it[t]:ot[t];r(nt)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const st=(0,et.a)();function lt(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function ct(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function ut(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}function dt(e,t,r,i,o,n=1){if(!r)return void ct(e,t,i,o,n);const s=i.typedBuffer,l=i.typedBufferStride,c=e.length,u=r[0],d=r[1],h=r[2],m=r[4],f=r[5],p=r[6],g=r[8],v=r[9],_=r[10],T=r[12],x=r[13],b=r[14];o*=l;let E=0,A=0,S=0;const w=(0,a.y)(r)?e=>{E=t[e]+T,A=t[e+1]+x,S=t[e+2]+b}:e=>{const r=t[e],i=t[e+1],o=t[e+2];E=u*r+m*i+g*o+T,A=d*r+f*i+v*o+x,S=h*r+p*i+_*o+b};if(1===n)for(let t=0;t<c;++t)w(3*e[t]),s[o]=E,s[o+1]=A,s[o+2]=S,o+=l;else for(let t=0;t<c;++t){w(3*e[t]);for(let e=0;e<n;++e)s[o]=E,s[o+1]=A,s[o+2]=S,o+=l}}function ht(e,t,r,i,o,n=1){if(!r)return void ct(e,t,i,o,n);const s=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=s[0],h=s[1],m=s[2],f=s[4],p=s[5],g=s[6],v=s[8],_=s[9],T=s[10],x=!(0,a.z)(s),b=1e-6,E=1-b;o*=c;let A=0,S=0,w=0;const R=(0,a.y)(s)?e=>{A=t[e],S=t[e+1],w=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];A=d*r+f*i+v*o,S=h*r+p*i+_*o,w=m*r+g*i+T*o};if(1===n)if(x)for(let t=0;t<u;++t){R(3*e[t]);const r=A*A+S*S+w*w;if(r<E&&r>b){const e=1/Math.sqrt(r);l[o]=A*e,l[o+1]=S*e,l[o+2]=w*e}else l[o]=A,l[o+1]=S,l[o+2]=w;o+=c}else for(let t=0;t<u;++t)R(3*e[t]),l[o]=A,l[o+1]=S,l[o+2]=w,o+=c;else for(let t=0;t<u;++t){if(R(3*e[t]),x){const e=A*A+S*S+w*w;if(e<E&&e>b){const t=1/Math.sqrt(e);A*=t,S*=t,w*=t}}for(let e=0;e<n;++e)l[o]=A,l[o+1]=S,l[o+2]=w,o+=c}}function mt(e,t,r,i,o,n=1){if(!r)return void ut(e,t,i,o,n);const s=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=s[0],h=s[1],m=s[2],f=s[4],p=s[5],g=s[6],v=s[8],_=s[9],T=s[10],x=!(0,a.z)(s),b=1e-6,E=1-b;if(o*=c,1===n)for(let r=0;r<u;++r){const i=4*e[r],n=t[i],a=t[i+1],s=t[i+2],u=t[i+3];let A=d*n+f*a+v*s,S=h*n+p*a+_*s,w=m*n+g*a+T*s;if(x){const e=A*A+S*S+w*w;if(e<E&&e>b){const t=1/Math.sqrt(e);A*=t,S*=t,w*=t}}l[o]=A,l[o+1]=S,l[o+2]=w,l[o+3]=u,o+=c}else for(let r=0;r<u;++r){const i=4*e[r],a=t[i],s=t[i+1],u=t[i+2],A=t[i+3];let S=d*a+f*s+v*u,w=h*a+p*s+_*u,R=m*a+g*s+T*u;if(x){const e=S*S+w*w+R*R;if(e<E&&e>b){const t=1/Math.sqrt(e);S*=t,w*=t,R*=t}}for(let e=0;e<n;++e)l[o]=S,l[o+1]=w,l[o+2]=R,l[o+3]=A,o+=c}}function ft(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,r!==t.length||4!==r)if(1!==n)if(4!==r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}else for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else{if(4===r){for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}return}for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else{a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,c=e[o/=4];o+=r;const u=l*n;for(let t=1;t<u;++t)e[o]=c,o+=r}}function pt(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length,s=t[0];i*=n;for(let e=0;e<a;++e)o[i]=s,i+=n}function gt(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}class vt{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(oe.T.POSITION).length}write(e,t,r,i,o){!function(e,t,r,i,o,n){for(const a of t.fields.keys()){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case oe.T.POSITION:{(0,G.hu)(3===t.size);const e=o.getField(a,m.ct);(0,G.hu)(!!e,`No buffer view for ${a}`),e&&dt(s,t.data,r,e,n);break}case oe.T.NORMAL:{(0,G.hu)(3===t.size);const e=o.getField(a,m.ct);(0,G.hu)(!!e,`No buffer view for ${a}`),e&&ht(s,t.data,i,e,n);break}case oe.T.NORMALCOMPRESSED:{(0,G.hu)(2===t.size);const e=o.getField(a,m.or);(0,G.hu)(!!e,`No buffer view for ${a}`),e&&lt(s,t.data,e,n);break}case oe.T.UV0:{(0,G.hu)(2===t.size);const e=o.getField(a,m.Eu);(0,G.hu)(!!e,`No buffer view for ${a}`),e&&lt(s,t.data,e,n);break}case oe.T.COLOR:case oe.T.SYMBOLCOLOR:{const e=o.getField(a,m.mc);(0,G.hu)(!!e,`No buffer view for ${a}`),(0,G.hu)(3===t.size||4===t.size),!e||3!==t.size&&4!==t.size||ft(s,t.data,t.size,e,n);break}case oe.T.COLORFEATUREATTRIBUTE:{const e=o.getField(a,m.ly);(0,G.hu)(!!e,`No buffer view for ${a}`),(0,G.hu)(1===t.size),e&&1===t.size&&pt(s,t.data,e,n);break}case oe.T.TANGENT:{(0,G.hu)(4===t.size);const e=o.getField(a,m.ek);(0,G.hu)(!!e,`No buffer view for ${a}`),e&&mt(s,t.data,i,e,n);break}case oe.T.PROFILERIGHT:case oe.T.PROFILEUP:case oe.T.PROFILEVERTEXANDNORMAL:case oe.T.FEATUREVALUE:{(0,G.hu)(4===t.size);const e=o.getField(a,m.ek);(0,G.hu)(!!e,`No buffer view for ${a}`),e&&ut(s,t.data,e,n)}}else if(a===oe.T.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.indices.get(oe.T.POSITION);if((0,G.hu)(!!t,`No buffer view for ${a}`),t){const r=t.length,i=o.getField(a,m.mc);gt(e.objectAndLayerIdColor,i,r,n)}}}}(r,this.vertexBufferLayout,e,t,i,o)}}var _t=r(57790),Tt=r(88669),xt=r(135),bt=r(15719),Et=r(96310),At=r(78869),St=r(14589),wt=r(83475),Rt=r(59377);pe.wb.LESS,pe.wb.ALWAYS;const Ct={mask:255},yt={function:{func:pe.wb.ALWAYS,ref:B.hU.OutlineVisualElementMask,mask:B.hU.OutlineVisualElementMask},operation:{fail:pe.xS.KEEP,zFail:pe.xS.KEEP,zPass:pe.xS.ZERO}},Ot={function:{func:pe.wb.ALWAYS,ref:B.hU.OutlineVisualElementMask,mask:B.hU.OutlineVisualElementMask},operation:{fail:pe.xS.KEEP,zFail:pe.xS.KEEP,zPass:pe.xS.REPLACE}};pe.wb.EQUAL,B.hU.OutlineVisualElementMask,B.hU.OutlineVisualElementMask,pe.xS.KEEP,pe.xS.KEEP,pe.xS.KEEP,pe.wb.NOTEQUAL,B.hU.OutlineVisualElementMask,B.hU.OutlineVisualElementMask,pe.xS.KEEP,pe.xS.KEEP,pe.xS.KEEP;const Mt=[1,1,.5],Pt=[0,.6,.2],It=[0,1,.2];var Nt=r(32078);class Lt extends bt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.g)(Mt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=B.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Be.r.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.f)(.2,.2,.2),this.diffuse=(0,c.f)(.8,.8,.8),this.externalColor=(0,Tt.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=B.Gv.Less,this.textureAlphaMode=B.JJ.Blend,this.textureAlphaCutoff=Et.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ge.yD.Occlude}}class Dt extends St.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===De.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?xt.N.Default:xt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Dt.shader)}_initializeProgram(e,t){return new Rt.$(e.rctx,t.get().build(this.configuration),wt.i)}_convertDepthTestFunction(e){return e===B.Gv.Lequal?pe.wb.LEQUAL:pe.wb.LESS}_makePipeline(e,t){const r=this.configuration,i=e===We.A.NONE,o=e===We.A.FrontFace;return(0,ke.sm)({blending:r.output!==Fe.H.Color&&r.output!==Fe.H.Alpha||!r.transparent?null:i?$e:Xe(e),culling:Ht(r)?(0,ke.zp)(r.cullFace):null,depthTest:{func:Je(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?ke.LZ:null,colorWrite:ke.BK,stencilWrite:r.hasOccludees?Ct:null,stencilTest:r.hasOccludees?t?Ot:yt:null,polygonOffset:i||o?null:(n=r.enableOffset,n?Ye:null)});var n}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Ht(e){return e.cullFace!==B.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Dt.shader=new At.J(Nt.D,(()=>r.e(9291).then(r.bind(r,79291))));var Ft=r(43697),Bt=r(51354),Ut=r(67498);class zt extends Bt.m{}(0,Ft._)([(0,Bt.o)({constValue:!0})],zt.prototype,"hasSliceHighlight",void 0),(0,Ft._)([(0,Bt.o)({constValue:!1})],zt.prototype,"hasSliceInVertexProgram",void 0),(0,Ft._)([(0,Bt.o)({constValue:!1})],zt.prototype,"instancedDoublePrecision",void 0),(0,Ft._)([(0,Bt.o)({constValue:!1})],zt.prototype,"hasModelTransformation",void 0),(0,Ft._)([(0,Bt.o)({constValue:Ut.P.Pass})],zt.prototype,"pbrTextureBindType",void 0);class Vt extends zt{constructor(){super(...arguments),this.output=Fe.H.Color,this.alphaDiscardMode=B.JJ.Opaque,this.doubleSidedMode=Ue.q.None,this.pbrMode=ze.f7.Disabled,this.cullFace=B.Vr.None,this.transparencyPassType=We.A.NONE,this.normalType=Be.r.Attribute,this.textureCoordinateType=xt.N.None,this.customDepthTest=B.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Ft._)([(0,Bt.o)({count:Fe.H.COUNT})],Vt.prototype,"output",void 0),(0,Ft._)([(0,Bt.o)({count:B.JJ.COUNT})],Vt.prototype,"alphaDiscardMode",void 0),(0,Ft._)([(0,Bt.o)({count:Ue.q.COUNT})],Vt.prototype,"doubleSidedMode",void 0),(0,Ft._)([(0,Bt.o)({count:ze.f7.COUNT})],Vt.prototype,"pbrMode",void 0),(0,Ft._)([(0,Bt.o)({count:B.Vr.COUNT})],Vt.prototype,"cullFace",void 0),(0,Ft._)([(0,Bt.o)({count:We.A.COUNT})],Vt.prototype,"transparencyPassType",void 0),(0,Ft._)([(0,Bt.o)({count:Be.r.COUNT})],Vt.prototype,"normalType",void 0),(0,Ft._)([(0,Bt.o)({count:xt.N.COUNT})],Vt.prototype,"textureCoordinateType",void 0),(0,Ft._)([(0,Bt.o)({count:B.Gv.COUNT})],Vt.prototype,"customDepthTest",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"spherical",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasVertexColors",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasSymbolColors",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasVerticalOffset",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasSlicePlane",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasSliceHighlight",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasColorTexture",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasMetallicRoughnessTexture",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasEmissionTexture",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasOcclusionTexture",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasNormalTexture",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasScreenSizePerspective",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasVertexTangents",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasOccludees",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasMultipassTerrain",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasModelTransformation",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"offsetBackfaces",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"vvSize",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"vvColor",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"receiveShadows",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"receiveAmbientOcclusion",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"textureAlphaPremultiplied",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"instanced",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"instancedColor",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"instancedDoublePrecision",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"writeDepth",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"transparent",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"enableOffset",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"cullAboveGround",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"snowCover",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasColorTextureTransform",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasEmissionTextureTransform",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasNormalTextureTransform",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasOcclusionTextureTransform",void 0),(0,Ft._)([(0,Bt.o)()],Vt.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Ft._)([(0,Bt.o)({constValue:!0})],Vt.prototype,"hasVvInstancing",void 0),(0,Ft._)([(0,Bt.o)({constValue:!1})],Vt.prototype,"useCustomDTRExponentForWater",void 0),(0,Ft._)([(0,Bt.o)({constValue:!1})],Vt.prototype,"supportsTextureAtlas",void 0),(0,Ft._)([(0,Bt.o)({constValue:!0})],Vt.prototype,"useFillLights",void 0);var Gt=r(41846);class Wt extends Dt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Be.r.Attribute,t.doubleSidedMode=Ue.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Wt.shader)}}Wt.shader=new At.J(Gt.R,(()=>r.e(8096).then(r.bind(r,38096))));class kt extends Ge.F5{constructor(e){super(e,jt),this.supportsEdges=!0,this._configuration=new Vt,this._vertexBufferLayout=function(e){const t=(0,He.U$)().vec3f(oe.T.POSITION);return e.normalType===Be.r.Compressed?t.vec2i16(oe.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(oe.T.NORMAL),e.hasVertexTangents&&t.vec4f(oe.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(oe.T.UV0),e.hasVertexColors&&t.vec4u8(oe.T.COLOR),e.hasSymbolColors&&t.vec4u8(oe.T.SYMBOLCOLOR),(0,ae.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(oe.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Fe.H.Shadow&&e!==Fe.H.ShadowExcludeHighlight&&e!==Fe.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||o||i;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?B.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==Fe.H.Color&&e!==Fe.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Ue.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ue.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ue.q.WindingOrder:Ue.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?ze.f7.Schematic:ze.f7.Normal:ze.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,o,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Kt,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case De.JY.Global:n=(0,l.n)(Jt,Kt);break;case De.JY.Local:n=(0,l.c)(Jt,Yt)}let a=0;const s=(0,l.b)(Qt,Kt,e.eye),c=(0,l.l)(s),u=(0,l.g)(s,s,1/c);let d=null;this.parameters.screenSizePerspective&&(d=(0,l.e)(n,u)),a+=(0,_t.Hx)(e,c,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective),(0,l.g)(n,n,a),(0,l.t)(Zt,n,r.transform.inverseRotation),i=(0,l.b)(qt,i,Zt),o=(0,l.b)(Xt,o,Zt)}(0,_t.Bw)(e,r,i,o,function(e){return null!=e?(at.offset=e,at):null}(r.verticalOffset),n)}requiresSlot(e,t){return!(t!==Fe.H.Color&&t!==Fe.H.Alpha&&t!==Fe.H.Depth&&t!==Fe.H.Normal&&t!==Fe.H.Shadow&&t!==Fe.H.ShadowHighlight&&t!==Fe.H.ShadowExcludeHighlight&&t!==Fe.H.Highlight&&t!==Fe.H.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?Ze.TRANSPARENT_MATERIAL:Ze.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ze.OPAQUE_MATERIAL)&&e!==Ze.DRAPED_MATERIAL)}createGLMaterial(e){return new $t(e)}createBufferWriter(){return new vt(this._vertexBufferLayout)}}class $t extends Ve.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==Fe.H.Color&&this._output!==Fe.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Wt:Dt,e)}}const jt=new class extends Lt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},qt=(0,c.c)(),Xt=(0,c.c)(),Yt=(0,c.f)(0,0,1),Jt=(0,c.c)(),Zt=(0,c.c)(),Kt=(0,c.c)(),Qt=(0,c.c)(),er=I.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function tr(e){throw new P.Z("",`Request for object resource failed: ${e}`)}function rr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(er.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(er.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(er.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(er.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else er.warn("Indexed geometries must specify faces"),i=!1;break}default:er.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(er.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(er.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function ir(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,u.pp)(t,r.bbMin),(0,u.pp)(t,r.bbMax))})),t}function or(e){switch(e){case"mask":return B.JJ.Mask;case"maskAndTransparency":return B.JJ.MaskBlend;case"none":return B.JJ.Opaque;default:return B.JJ.Blend}}function nr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ar=new D.G(1,2,"wosr");var sr=r(57758);async function lr(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=null!=t&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,O.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,L.r9)(i.error),tr(i.error.details.url)}(e,r,t);const i=await(0,O.q6)((0,y.default)(e,t));if(!0===i.ok)return i.value.data;(0,L.r9)(i.error),tr(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const o=e[i],n=o.images[0].data;if(!n){er.warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+n,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:pe.e8.REPEAT,t:pe.e8.REPEAT},preMultiplyAlpha:or(l)!==B.JJ.Opaque},u=null!=t&&t.disableTextures?Promise.resolve(null):H(a,t);r.push(u.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:o+(0,M.Ul)(r)}}(r.url,t)),{engineResources:i,referenceBoundingBox:o}=function(e,t){const r=new Array,i=new Array,o=new Array,n=new N,a=e.resource,s=D.G.parse(a.version||"1.0","wosr");ar.validate(s);const l=a.model.name,u=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let e=0;e<u.length;e++){const a=u[e];if(!rr(a))continue;const s=nr(a),l=a.params.vertexAttributes,p=[];for(const e in l){const t=l[e],r=t.values;p.push([e,new F.a(r,t.valuesPerElement,!0)])}const g=[];if("PerAttributeArray"!==a.params.topology){const e=a.params.faces;for(const t in e)g.push([t,e[t].values])}const v=s.texture,_=h&&h[v];if(_&&!f.has(v)){const{image:e,parameters:t}=_,r=new Ne(e,t);i.push(r),f.set(v,r)}const T=f.get(v),x=T?T.id:void 0,b=s.material;let E=n.get(b,v);if(null==E){const e=d[b.substring(b.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=_&&_.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=_?or(_.alphaChannelUsage):void 0,a={ambient:(0,c.g)(e.diffuse),diffuse:(0,c.g)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:x,initTextureTransparent:!0,doubleSided:!0,cullFace:B.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:_?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(a,t.materialParamsMixin),E=new kt(a),n.set(b,v,E)}o.push(E);const A=new ne(E,p,g);m+=g.find((e=>e[0]===oe.T.POSITION))?.[1].length??0,r.push(A)}return{engineResources:[{name:l,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:ir(r)}}(e,t);return{lods:i,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,x.Q)(new T.C(t.streamDataRequester),r.url,t,t.usePBR)),d=n.model.meta?.ESRI_proxyEllipsoid,A=n.meta.isEsriSymbolResource&&null!=d&&n.meta.uri.includes("/RealisticTrees/");A&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if(null==i)return;const n=o.attributes.position,u=n.count,d=(0,c.c)(),h=(0,c.c)(),f=(0,c.c)(),p=new Uint8Array(4*u),g=new Float64Array(3*u),v=(0,a.a)((0,s.c)(),o.transform);let _=0,T=0;for(let a=0;a<u;a++){n.getVec(a,h),i.getVec(a,d),(0,l.m)(h,h,o.transform),(0,l.b)(f,h,t.center),(0,l.D)(f,f,t.radius);const s=f[2],c=(0,l.l)(f),u=Math.min(.45+.55*c*c,1);(0,l.D)(f,f,t.radius),null!==v&&(0,l.m)(f,f,v),(0,l.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.h)(f,f,d,s>-1?.2:Math.min(-4*s-3.8,1)),g[_]=f[0],g[_+1]=f[1],g[_+2]=f[2],_+=3,p[T]=255*u,p[T+1]=255*u,p[T+2]=255*u,p[T+3]=255,T+=4}o.attributes.normal=new m.ct(g),o.attributes.color=new m.mc(p)}}}(n,d));const S=!!t.usePBR,R=n.meta.isEsriSymbolResource?{usePBR:S,isSchematic:!1,treeRendering:A,mrrFactors:[...It]}:{usePBR:S,isSchematic:!1,treeRendering:!1,mrrFactors:[...Mt]},P={...t.materialParamsMixin,treeRendering:A},{engineResources:I,referenceBoundingBox:U}=function(e,t,r,i){const n=e.model,a=new Array,s=new Map,d=new Map,T=n.lods.length,x=(0,u.cS)();return n.lods.forEach(((e,A)=>{const S=!0===i.skipHighLods&&(T>1&&0===A||T>3&&1===A)||!1===i.skipHighLods&&null!=i.singleLodIndex&&A!==i.singleLodIndex;if(S&&0!==A)return;const R=new C(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=S?new kt({}):function(e,t,r,i,o,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),u=e.materials.get(t.material),d=null!=t.attributes.texCoord0,h=null!=t.attributes.normal;if(null==u)return null;const m=function(e){switch(e){case"BLEND":return B.JJ.Blend;case"MASK":return B.JJ.Mask;case"OPAQUE":case null:case void 0:return B.JJ.Opaque}}(u.alphaMode);if(!n.has(s)){if(d){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new Ne((0,E.$A)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,E.$A)(e)&&r,encoding:(0,E.$A)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(u.textureColor,m!==B.JJ.Opaque),t(u.textureNormal),t(u.textureOcclusion),t(u.textureEmissive),t(u.textureMetallicRoughness)}const r=u.color[0]**(1/sr.K),f=u.color[1]**(1/sr.K),p=u.color[2]**(1/sr.K),g=u.emissiveFactor[0]**(1/sr.K),v=u.emissiveFactor[1]**(1/sr.K),_=u.emissiveFactor[2]**(1/sr.K),T=null!=u.textureColor&&d?a.get(u.textureColor):null,x=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==o&&(null==n||(0,l.k)(n,c.Z))&&null==a&&(null==i||1===i)&&(null==r||1===r||0===r)}({normalTexture:u.textureNormal,metallicRoughnessTexture:u.textureMetallicRoughness,metallicFactor:u.metallicFactor,roughnessFactor:u.roughnessFactor,emissiveTexture:u.textureEmissive,emissiveFactor:u.emissiveFactor,occlusionTexture:u.textureOcclusion});n.set(s,new kt({...i,transparent:m===B.JJ.Blend,customDepthTest:B.Gv.Lequal,textureAlphaMode:m,textureAlphaCutoff:u.alphaCutoff,diffuse:[r,f,p],ambient:[r,f,p],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?B.Vr.None:B.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?Be.r.Attribute:Be.r.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:null!=T?T.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:null!=u.textureNormal&&d?a.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=u.textureOcclusion&&d?a.get(u.textureOcclusion).id:void 0,emissiveTextureId:null!=u.textureEmissive&&d?a.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=u.textureMetallicRoughness&&d?a.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[g,v,_],mrrFactors:x?[...Pt]:[u.metallicFactor,u.roughnessFactor,i.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:w(u.colorTextureTransform),normalTextureTransformMatrix:w(u.normalTextureTransform),occlusionTextureTransformMatrix:w(u.occlusionTextureTransform),emissiveTextureTransformMatrix:w(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:w(u.metallicRoughnessTextureTransform),...o}))}const f=n.get(s);if(r.stageResources.materials.push(f),d){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(u.textureColor),e(u.textureNormal),e(u.textureOcclusion),e(u.textureEmissive),e(u.textureMetallicRoughness)}return f}(n,e,R,t,r,s,d),{geometry:a,vertexCount:T}=function(e,t){const r=e.attributes.position.count,i=(0,b.p)(e.indices||r,e.primitiveType),n=h(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,f.t)(n,a,e.transform,3,s);const l=[[oe.T.POSITION,new F.a(n,3,!0)]],c=[[oe.T.POSITION,i]];if(null!=e.attributes.normal){const t=h(3*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.normal;(0,o.b)(cr,e.transform),(0,f.a)(t,n,cr,3,a),l.push([oe.T.NORMAL,new F.a(t,3,!0)]),c.push([oe.T.NORMAL,i])}if(null!=e.attributes.tangent){const t=h(4*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.tangent;(0,o.b)(cr,e.transform),(0,p.t)(t,n,cr,4,a),l.push([oe.T.TANGENT,new F.a(t,4,!0)]),c.push([oe.T.TANGENT,i])}if(null!=e.attributes.texCoord0){const t=h(2*r),{typedBuffer:o,typedBufferStride:n}=e.attributes.texCoord0;(0,g.n)(t,o,2,n),l.push([oe.T.UV0,new F.a(t,2,!0)]),c.push([oe.T.UV0,i])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof m.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,_.c)(t,e.attributes.color):e.attributes.color instanceof m.v6&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof m.ct?(0,f.s)(t,e.attributes.color,255,4):e.attributes.color instanceof m.ne?(0,v.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.mw&&(0,f.s)(t,e.attributes.color,1/256,4)),l.push([oe.T.COLOR,new F.a(t,4,!0)]),c.push([oe.T.COLOR,i])}return{geometry:new ne(t,l,c),vertexCount:r}}(e,null!=i?i:new kt({})),C=a.boundingInfo;null!=C&&0===A&&((0,u.pp)(x,C.bbMin),(0,u.pp)(x,C.bbMax)),null!=i&&(R.stageResources.geometries.push(a),R.numberOfVertices+=T)})),S||a.push(R)})),{engineResources:a,referenceBoundingBox:x}}(n,R,P,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:I,referenceBoundingBox:U,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}const cr=(0,n.c)()},1391:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>u});var i=r(55039),o=r(2095),n=r(19693),a=r(74709);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){const{vertex:r}=e;switch(t.output){case i.H.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExcludeHighlight:return e.include(o.up,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},62707:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(74709);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},51666:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(74709),o=r(35065);function n(e,t=!0){e.attributes.add(o.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},55039:(e,t,r)=>{var i;r.d(t,{H:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},51546:(e,t,r)=>{r.d(t,{f5:()=>c});var i=r(52138),o=r(13598),n=r(17896),a=r(65617),s=r(70582),l=(r(172),r(74709));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.H`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,n=t.hasSliceHighlight?l.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,new s.B("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.Z;const i=u(e,t,r),o=d(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,n.m)(p,o,s):o}(t,e,r))),new s.B("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.B("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function u(e,t,r){return e.instancedDoublePrecision?(0,n.s)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function d(e,t){return null!=e?(0,n.b)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.w)(v,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,i){if(null==i||null==r.slicePlane)return a.Z;const o=u(e,t,r),s=d(o,r.slicePlane),l=h(e,o,r);return null!=l?((0,n.a)(g,i,s),(0,n.m)(p,s,l),(0,n.m)(g,g,l),(0,n.b)(g,g,p)):i}const f=(0,a.c)(),p=(0,a.c)(),g=(0,a.c)(),v=(0,o.c)()},77171:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(1391),o=r(74709);function n(e){(0,i.bA)(e),e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},47624:(e,t,r)=>{r.d(t,{f:()=>p});var i=r(43697),o=r(17896),n=r(65617),a=r(55039),s=r(89243),l=r(62062),c=r(70582),u=r(74709),d=r(51354),h=r(35065),m=r(9820);class f extends d.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,m.U8)((0,o.s)(g,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),g))),new c.B("viewOriginLo",((e,t)=>(0,m.GB)((0,o.s)(g,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),g))))),r.code.add(u.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(u.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?u.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(u.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&((0,l._8)(r),r.code.add(u.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(u.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,i._)([(0,d.o)()],f.prototype,"instancedDoublePrecision",void 0);const g=(0,n.c)()},60624:(e,t,r)=>{r.d(t,{O:()=>l,r:()=>i});var i,o,n=r(74085),a=r(74709),s=r(35065);function l(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case i.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Bg)(t.normalType);case i.COUNT:case i.Ground:}}(o=i||(i={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},37099:(e,t,r)=>{r.d(t,{f:()=>n});var i=r(74709),o=r(35065);function n(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},76056:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(6206),o=r(74709);function n(e){e.vertex.code.add(o.H`
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
  `)}var a=r(15736),s=r(35065),l=r(57790);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},135:(e,t,r)=>{r.d(t,{D:()=>l,N:()=>i});var i,o,n=r(74085),a=r(74709),s=r(35065);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(o=i||(i={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT"},11317:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(74709),o=r(35065);function n(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},15719:(e,t,r)=>{r.d(t,{Bb:()=>u,d4:()=>d});var i=r(74085),o=r(46521),n=(r(88669),r(60624)),a=r(2095),s=r(74709),l=r(52114),c=r(19850);function u(e,t){switch(t.normalType){case n.r.Attribute:case n.r.Compressed:e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.r.Ground:e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case n.r.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case n.r.COUNT:}}class d extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.c)()}}},2095:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>f});var i=r(46521),o=r(13598),n=r(65617),a=r(37099),s=r(89243),l=r(70582),c=r(172),u=r(74709),d=r(52114),h=r(19850),m=r(8319);function f(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(u.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}},91982:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(74085),o=r(135),n=r(74709);function a(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(o.D,t),t.textureCoordinateType){case o.N.Default:case o.N.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case o.N.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case o.N.None:case o.N.COUNT:return}}},92555:(e,t,r)=>{r.d(t,{L:()=>u});var i=r(98766),o=r(88669),n=r(71250),a=r(74709);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`)}const l=(0,o.c)();var c=r(62062);function u(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new n.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new n.N("screenSizePerspectiveAlignment",(e=>function(e){return(0,i.s)(l,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,c.hY)(e.vertex,t)),r.code.add(a.H`
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
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,o.c)()},89136:(e,t,r)=>{r.d(t,{s:()=>O});var i=r(21787),o=r(46521),n=r(13598),a=r(1391),s=r(55039),l=r(51546),c=r(77171),u=r(60624),d=r(74709),h=r(35065);function m(e,t){const r=t.output===s.H.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(h.T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(h.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(d.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?d.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d.H``} }`),e.fragment.code.add(d.H`
      void outputObjectAndLayerIdColor() {
        ${r?d.H`fragColor = objectAndLayerIdColorVarying;`:d.H``} }`)}var f=r(135),p=r(15719),g=r(20285);function v(e,t){switch(e.fragment.include(g.n),t.output){case s.H.Shadow:case s.H.ShadowHighlight:case s.H.ShadowExcludeHighlight:e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case s.H.Depth:e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var _=r(88669),T=r(98069);const x=(0,_.f)(1,1,0,1),b=(0,_.f)(1,0,1,1);function E(e){e.fragment.uniforms.add(new T.A("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",x).add("unoccludedHighlightFlag","vec4",b),e.fragment.code.add(d.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var A=r(92302),S=r(85787),w=r(62062),R=r(19850),C=r(8319),y=r(47026);function O(e,t){const{vertex:r,fragment:h}=e,g=t.hasModelTransformation;if(g){const e=(0,o.c)();r.uniforms.add(new C.g("model",(e=>e.modelTransformation??n.I))),r.uniforms.add(new R.c("normalTransform",(t=>((0,i.b)(e,t.modelTransformation??n.I),e))))}const _=t.hasColorTexture&&t.alphaDiscardMode!==y.JJ.Opaque;switch(t.output){case s.H.Depth:case s.H.Shadow:case s.H.ShadowHighlight:case s.H.ShadowExcludeHighlight:case s.H.ObjectAndLayerIdColor:(0,w.Sv)(r,t),e.include(c.w,t),e.include(f.D,t),e.include(A.k,t),e.include(v,t),e.include(l.f5,t),e.include(m,t),(0,a.Zu)(e),e.varyings.add("depth","float"),_&&h.uniforms.add(new T.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            ${g?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(S.z,t),h.code.add(d.H`
          void main(void) {
            discardBySlice(vpos);
            ${_?d.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===s.H.ObjectAndLayerIdColor?d.H`outputObjectAndLayerIdColor();`:d.H`outputDepth(depth);`}
          }
        `);break;case s.H.Normal:{(0,w.Sv)(r,t),e.include(c.w,t),e.include(u.O,t),e.include(p.Bb,t),e.include(f.D,t),e.include(A.k,t),_&&h.uniforms.add(new T.A("tex",(e=>e.texture))),t.normalType===u.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===u.r.Attribute||t.normalType===u.r.Compressed;r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            ${g?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${i?d.H`vNormalWorld = ${g?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:d.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(l.f5,t),e.include(S.z,t),h.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${_?d.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===u.r.ScreenDerivative?d.H`vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case s.H.Highlight:(0,w.Sv)(r,t),e.include(c.w,t),e.include(f.D,t),e.include(A.k,t),_&&h.uniforms.add(new T.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            ${g?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(l.f5,t),e.include(S.z,t),e.include(E,t),h.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${_?d.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},5543:(e,t,r)=>{r.d(t,{S:()=>n});var i=r(20285),o=r(74709);function n(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}},15817:(e,t,r)=>{r.d(t,{Q:()=>d});var i=r(135),o=r(91982),n=r(19419),a=r(74709),s=r(16374),l=r(98069),c=r(67498),u=r(35065);function d(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(u.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.q.WindingOrder?r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==i.N.None&&(e.include(o.i,t),r.uniforms.add(t.pbrTextureBindType===c.P.Pass?new l.A("normalTexture",(e=>e.textureNormal)):new s.R("normalTexture",(e=>e.textureNormal))),r.code.add(a.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},95134:(e,t,r)=>{r.d(t,{K:()=>D});var i=r(74709),o=r(98069),n=(r(4307),r(83475)),a=r(35065),s=r(35371),l=r(21968);new l.G(a.T.POSITION,3,s.g.FLOAT,0,12),new l.G(a.T.POSITION,3,s.g.FLOAT,0,20),new l.G(a.T.UV0,2,s.g.FLOAT,12,20),new l.G(a.T.POSITION,3,s.g.FLOAT,0,32),new l.G(a.T.NORMAL,3,s.g.FLOAT,12,32),new l.G(a.T.UV0,2,s.g.FLOAT,24,32),new l.G(a.T.POSITION,3,s.g.FLOAT,0,16),new l.G(a.T.COLOR,4,s.g.UNSIGNED_BYTE,12,16),new l.G(a.T.POSITION,2,s.g.FLOAT,0,8),new l.G(a.T.POSITION,2,s.g.FLOAT,0,16),new l.G(a.T.UV0,2,s.g.FLOAT,8,16);var c=r(92604),u=r(1533),d=r(45762);c.Z.getLogger("esri.views.webgl.VertexArrayObject");var h=r(67676),m=r(70586),f=r(49300),p=r(7575);const g=c.Z.getLogger("esri.views.webgl.BufferObject");class v{static createIndex(e,t,r){return new v(e,s.w0.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new v(e,s.w0.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==p.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new v(e,s.w0.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=s.l1.STREAM_READ,r){if(e.type!==p.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new v(e,s.w0.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=s.l1.STREAM_DRAW,r){if(e.type!==p.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new v(e,s.w0.PIXEL_UNPACK_BUFFER,t,r)}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(s._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,f.zu)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===s.w0.ELEMENT_ARRAY_BUFFER?this._indexType===s.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===s.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===s.w0.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(s._g.BufferObject,this),this._context=(0,m.wN)(this._context)):this._glName&&g.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&g.error("Buffer size needs to be positive!"),this.bufferType===s.w0.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case s.g.UNSIGNED_SHORT:e*=2;break;case s.g.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===s.w0.ELEMENT_ARRAY_BUFFER&&((0,u.Uc)(e)&&(t/=2,this._indexType=s.g.UNSIGNED_SHORT),(0,u.ZY)(e)&&(t/=4,this._indexType=s.g.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,f.zu)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteLength)&&g.error("offset is out of range!"),r>=i&&g.error("end must be bigger than start!"),(t+(i-r))*e.BYTES_PER_ELEMENT>this.byteLength&&g.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===p.zO.WEBGL2)n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const o=0===r&&i===e.length?e:e.subarray(r,i);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,o)}(0,f.zu)(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,i){if(this._context.type!==p.zO.WEBGL2)return void g.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void g.error("Problem getting subdata: offset and length were less than zero!");const o=function(e){return(0,h.zG)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(o*((r??0)+(i??0))>e.byteLength)return void g.error("Problem getting subdata: offset and length exceeded destination size!");t+o*(i??0)>this.byteLength&&g.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,s.w0.COPY_READ_BUFFER),n.getBufferSubData(s.w0.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(s.w0.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===p.zO.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):g.error("Get buffer subdata is supported in WebGL2 only!")}}var _=r(57088);r(47859);var T=r(78869),x=r(14589),b=r(59377),E=r(59915),A=r(27097);class S extends x.A{initializeProgram(e){return new b.$(e.rctx,S.shader.get().build(),n.i)}initializePipeline(){return(0,A.sm)({colorWrite:A.BK})}}S.shader=new T.J(E.S,(()=>r.e(8092).then(r.bind(r,88092))));var w=r(25377);class R extends x.A{initializeProgram(e){return new b.$(e.rctx,R.shader.get().build(),n.i)}initializePipeline(){return(0,A.sm)({colorWrite:A.BK})}}R.shader=new T.J(w.S,(()=>r.e(9243).then(r.bind(r,49243)))),r(97323),r(80442);var C=r(4375);class y{constructor(e,t){this._context=e,this._descriptor=t,this.type=C.B.RenderBuffer,this._context.instanceCounter.increment(s._g.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:i,height:o,internalFormat:n,multisampled:a}=t;if(a){if(this._context.type!==p.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n,i,o)}else r.renderbufferStorage(r.RENDERBUFFER,n,i,o)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get gpuMemoryUsage(){return(e=this._descriptor).width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(0,d.RG)(e.internalFormat);var e}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(s._g.Renderbuffer,this),this._context=(0,m.wN)(this._context))}}const O=c.Z.getLogger("esri.views.webgl.FramebufferObject");class M{constructor(e,t,r=null){this._context=e,this._glName=null,this._colorAttachments=new Map,this._depthBuffer=null,this._stencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,e.instanceCounter.increment(s._g.FramebufferObject,this);const i=P(t)?t:new _.x(this._context,t);if(this._colorAttachments.set(s.VY.COLOR_ATTACHMENT0,i),this._validateTextureDescriptor(i.descriptor),this._validateColorAttachmentPoint(s.VY.COLOR_ATTACHMENT0),null!=r)if(function(e){return P(e)||null!=e&&"pixelFormat"in e}(r))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=P(r)?r:new _.x(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const e=function(e){return null!=e&&"type"in e&&e.type===C.B.RenderBuffer}(r)?r:new y(this._context,r),t=e.descriptor;t.internalFormat===s.Tg.STENCIL_INDEX8?this._stencilBuffer=e:this._depthBuffer=e,this._validateRenderBufferDescriptor(t)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const e=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((e,t)=>this.detachColorTexture(t)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(s._g.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(s.VY.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthBuffer||this._stencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const e=this._colorAttachments.get(s.VY.COLOR_ATTACHMENT0);return e?.descriptor?.width??0}get height(){const e=this._colorAttachments.get(s.VY.COLOR_ATTACHMENT0);return e?.descriptor?.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((e,[t,r])=>e+r.gpuMemoryUsage),this.depthStencilAttachment?.gpuMemoryUsage??0)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&P(t)?t:null}attachColorTexture(e,t=s.VY.COLOR_ATTACHMENT0){if(!e)return;this._validateColorAttachmentPoint(t);const r=e.descriptor;this._validateTextureDescriptor(r),this.detachColorTexture(t)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e)}detachColorTexture(e=s.VY.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(t)return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),t}setColorTextureTarget(e,t=s.VY.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);r&&this._framebufferTexture2D(r.glName,t,e)}attachDepthStencil(e){if(e)switch(e.type){case C.B.Texture:return this._attachDepthStencilTexture(e);case C.B.RenderBuffer:return this._attachDepthStencilBuffer(e)}}_attachDepthStencilTexture(e){if(null==e)return;const t=e.descriptor;t.pixelFormat!==s.VI.DEPTH_STENCIL&&t.pixelFormat!==s.VI.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==s.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(t),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,s.Lu)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,s.Lu)),this._depthStencilTexture=null,e}_attachDepthStencilBuffer(e){if(null==e)return;const t=e.descriptor;if(t.internalFormat!==s.Tg.DEPTH_STENCIL&&t.internalFormat!==s.Tg.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),this._validateRenderBufferDescriptor(t),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,i=this._getGLAttachmentPoint(t);r.framebufferRenderbuffer(s.qi.FRAMEBUFFER,i,r.RENDERBUFFER,e.glName)}this._depthBuffer?.dispose(),this._depthBuffer=e}detachDepthStencilBuffer(){const e=this._depthBuffer;if(e&&this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=this._getGLAttachmentPoint(e.descriptor);t.framebufferRenderbuffer(s.qi.FRAMEBUFFER,r,t.RENDERBUFFER,null),e.dispose()}return this._depthBuffer=null,e}copyToTexture(e,t,r,i,o,n,a){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const l=a.descriptor;a.descriptor.target!==s.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==l?.width||null==l?.height||e+r>this.width||t+i>this.height||o+r>l.width||n+i>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,u=c.bindTexture(a,_.x.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(_.x.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(s.No.TEXTURE_2D,0,o,n,e,t,r,i),c.bindTexture(u,_.x.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,n,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,n,a)}async readPixelsAsync(e,t,r,i,o,n,a){if(this._context.type!==p.zO.WEBGL2)return(0,f.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,t,r,i,o,n,a);const l=this._context.gl,c=v.createPixelPack(this._context,s.l1.STREAM_READ,a.byteLength);this._context.bindBuffer(c),this._context.bindFramebuffer(this),l.readPixels(e,t,r,i,o,n,0),this._context.unbindBuffer(s.w0.PIXEL_PACK_BUFFER),await c.getSubDataAsync(a),c.dispose()}resize(e,t){if(this.width===e&&this.height===t)return;const r={width:e,height:t};I(r,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((e=>e.resize(r.width,r.height))),this._depthStencilTexture?.resize(r.width,r.height),this._initialized&&(I(r,this._context.parameters.maxRenderbufferSize),this._depthBuffer?.resize(r.width,r.height),this._stencilBuffer?.resize(r.width,r.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(e=s.qi.FRAMEBUFFER){const t=this._context.gl;if(this._initialized)return void t.bindFramebuffer(e,this.glName);this._glName&&t.deleteFramebuffer(this._glName);const r=t.createFramebuffer();t.bindFramebuffer(e,r),this._colorAttachments.forEach(((t,r)=>this._framebufferTexture2D(t.glName,r,N(t),e)));const i=this._depthBuffer||this._stencilBuffer;if(i){const r=this._getGLAttachmentPoint(i.descriptor);t.framebufferRenderbuffer(e,r,t.RENDERBUFFER,i.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,t.DEPTH_STENCIL_ATTACHMENT,N(this._depthStencilTexture),e);(0,f.hZ)()&&t.checkFramebufferStatus(e)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(e,t=s.VY.COLOR_ATTACHMENT0,r=s.No.TEXTURE_2D,i=s.qi.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(i,t,r,e,o)}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthBuffer){if(this._initialized){this._context.bindFramebuffer(this);const t=this._getGLAttachmentPoint(this._depthBuffer.descriptor);e.framebufferRenderbuffer(s.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthBuffer=(0,m.M2)(this._depthBuffer)}this._stencilBuffer&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(s.qi.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilBuffer=(0,m.M2)(this._stencilBuffer)),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,m.M2)(this._depthStencilTexture))}_validateTextureDescriptor(e){e.target!==s.No.TEXTURE_2D&&e.target!==s.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),I(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}_validateRenderBufferDescriptor(e){I(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}_validateBufferDimensions(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(e){switch(e.internalFormat){case s.Tg.DEPTH_COMPONENT16:case s.Tg.DEPTH_COMPONENT24:case s.Tg.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case s.Tg.DEPTH24_STENCIL8:case s.Tg.DEPTH32F_STENCIL8:case s.Tg.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case s.Tg.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===M._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;M._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else M._MAX_COLOR_ATTACHMENTS=1}const t=e-s.VY.COLOR_ATTACHMENT0;t+1>M._MAX_COLOR_ATTACHMENTS&&c.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${M._MAX_COLOR_ATTACHMENTS} color attachments`)}}function P(e){return null!=e&&"type"in e&&e.type===C.B.Texture}function I(e,t){const r=Math.max(e.width,e.height);if(r>t){O.warn(`Resizing FBO attachment size ${e.width}x${e.height} to device limit ${t}`);const i=t/r;return e.width=Math.round(e.width*i),e.height=Math.round(e.height*i),!1}return!0}function N(e){return e.descriptor.target===s.No.TEXTURE_CUBE_MAP?s.No.TEXTURE_CUBE_MAP_POSITIVE_X:s.No.TEXTURE_2D}M._MAX_COLOR_ATTACHMENTS=-1;const L=2;function D(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new o.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture))),r.constants.add("blurSizePixelsInverse","float",1/L),r.code.add(i.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(i.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},89753:(e,t,r)=>{r.d(t,{XP:()=>R,PN:()=>S,sC:()=>w});var i=r(74085),o=r(17896),n=r(65617),a=r(98766),s=r(88669),l=r(85504),c=r(172),u=r(71250),d=r(74709);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new u.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new u.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new u.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new u.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new u.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new u.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new u.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new u.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new u.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,n.c)(),f=(0,s.c)();var p=r(95134),g=r(5802),v=r(26322),_=r(27754),T=r(79884),x=r(67498);class b extends T.x{constructor(e,t){super(e,"bool",x.P.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var E=r(21437);r(22021),(0,n.c)();const A=.4;function S(e){e.constants.add("ambientBoostFactor","float",A)}function w(e){e.uniforms.add(new E.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function R(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(v.T,t),e.include(h,t),e.include(_.e),r.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),S(r),w(r),(0,g.Pe)(r),r.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,g.F1)(r),r.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(g.kR),r.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(d.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(d.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new E.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new E.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(g.kR),r.code.add(d.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}(0,n.c)()},5802:(e,t,r)=>{r.d(t,{F1:()=>a,Pe:()=>n,kR:()=>s});var i=r(172),o=r(74709);function n(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){n(e.fragment),a(e.fragment),e.fragment.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},42001:(e,t,r)=>{r.d(t,{l:()=>s});var i=r(5543),o=r(19693),n=r(74709),a=r(98069);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.S),e.fragment.uniforms.add(new a.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new o.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},19419:(e,t,r)=>{r.d(t,{k:()=>s,q:()=>i});var i,o,n=r(74085),a=r(74709);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},26322:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(74709);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var n=r(85504),a=r(27754);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic&&t.pbrMode!==n.f7.Terrain&&t.pbrMode!==n.f7.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
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
}`))}},85504:(e,t,r)=>{r.d(t,{f7:()=>i,jV:()=>h});var i,o,n=r(91982),a=r(70582),s=r(172),l=r(74709),c=r(16374),u=r(98069),d=r(67498);function h(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&o&&e.include(n.i,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.P.Pass?new u.A("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.R("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(l.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.P.Pass?new u.A("texEmission",(e=>e.textureEmissive)):new c.R("texEmission",(e=>e.textureEmissive))),r.code.add(l.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.P.Pass?new u.A("texOcclusion",(e=>e.textureOcclusion)):new c.R("texOcclusion",(e=>e.textureOcclusion))),r.code.add(l.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),e===d.P.Pass?r.uniforms.add(new s.J("emissionFactor",(e=>e.emissiveFactor)),new s.J("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new a.B("emissionFactor",(e=>e.emissiveFactor)),new a.B("mrrFactors",(e=>e.mrrFactors))),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?l.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?l.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?l.H`applyEmission(${t.hasEmissiveTextureTransform?l.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?l.H`applyOcclusion(${t.hasOcclusionTextureTransform?l.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(60537),(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.Terrain=5]="Terrain",o[o.TerrainWithWater=6]="TerrainWithWater",o[o.COUNT=7]="COUNT"},27754:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(74709);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},22539:(e,t,r)=>{r.d(t,{XE:()=>m,hb:()=>h}),r(13598),r(65617);var i=r(20285),o=r(71250),n=r(15736),a=r(74709),s=r(79884),l=r(67498);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class u extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var d=r(98069);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.n),t.uniforms.add(new d.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new n._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
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
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
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
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}},57806:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>s,R5:()=>l,av:()=>a,jF:()=>c});var i=r(14682),o=r(74709),n=r(19850);function a(e){e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,i.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(e){e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,i.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,i.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,i.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,i.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},92302:(e,t,r)=>{r.d(t,{k:()=>E});var i=r(172),o=r(79884),n=r(67498);class a extends o.x{constructor(e,t,r){super(e,"vec4",n.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.x{constructor(e,t,r){super(e,"float",n.P.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var l=r(74709),c=r(19850),u=r(35065),d=(r(80442),r(22021),r(21787),r(46521),r(52138),r(13598)),h=(r(17896),r(65617)),m=(r(99282),r(43697)),f=r(92036),p=r(5600),g=(r(75215),r(67676),r(52011));let v=class extends f.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var _,T,x;(0,m._)([(0,p.Cb)()],v.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.Cb)()],v.prototype,"LINE_WIREFRAMES",void 0),v=(0,m._)([(0,g.j)("esri.views.3d.support.DebugFlags")],v),new v,(x=_||(_={}))[x.Undefined=0]="Undefined",x[x.DefinedSize=1]="DefinedSize",x[x.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(T||(T={})),(0,d.c)(),(0,h.c)(),(0,d.c)(),r(82791);const b=8;function E(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(u.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
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
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},96310:(e,t,r)=>{r.d(t,{F:()=>i,b:()=>o});const i=.1,o=.001},85787:(e,t,r)=>{r.d(t,{z:()=>l});var i=r(96310),o=r(74709);function n(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.b)}) { discard; } }
  `)}r(79884),r(67498);var a=r(21437),s=r(47026);function l(e,t){!function(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(n);case s.JJ.Opaque:i.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},20787:(e,t,r)=>{r.d(t,{G:()=>u,R:()=>h});var i=r(4307),o=r(97323),n=r(98766),a=r(88669),s=r(19693),l=r(71250),c=r(74709);function u(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,n.s)(d,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(d,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>h(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const d=(0,a.c)();function h(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(m,0,1):(0,i.s)(m,1,0)}const m=(0,o.a)()},89243:(e,t,r)=>{r.d(t,{$:()=>o});var i=r(74709);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}},90692:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(6206),o=r(74709);function n(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
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
  `)}},20285:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(74709);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
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
}`)}},62062:(e,t,r)=>{r.d(t,{hY:()=>x,Sv:()=>b,_8:()=>S});var i,o,n,a,s,l,c,u=r(52138),d=r(13598),h=r(17896),m=r(65617);r(24470),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(n||(n={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(a||(a={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(s||(s={})),r(47026),(c=l||(l={}))[c.None=0]="None",c[c.ColorAndWater=1]="ColorAndWater",c[c.Highlight=2]="Highlight",c[c.Occluded=3]="Occluded",c[c.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor";var f=r(70582),p=r(172),g=(r(21437),r(79884)),v=r(67498);class _ extends g.x{constructor(e,t){super(e,"mat4",v.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var T=r(8319);function x(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",m.Z):e.uniforms.add(new f.B("cameraPosition",((e,t)=>(0,h.s)(A,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function b(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new T.g("proj",((e,t)=>t.camera.projectionMatrix)),new _("view",((e,t)=>(0,u.w)(E,t.camera.viewMatrix,e.origin))),new f.B("localOrigin",(e=>e.origin)));const r=e=>(0,h.s)(A,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new T.g("proj",((e,t)=>t.camera.projectionMatrix)),new T.g("view",((e,t)=>(0,u.w)(E,t.camera.viewMatrix,r(t)))),new p.J("localOrigin",((e,t)=>r(t))))}const E=(0,d.c)(),A=(0,m.c)();function S(e){e.uniforms.add(new T.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},98925:(e,t,r)=>{r.d(t,{q:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},19693:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},70582:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}},172:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},71250:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec4",o.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},21437:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"float",o.P.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},15736:(e,t,r)=>{r.d(t,{_:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"int",o.P.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},52114:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},19850:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},8319:(e,t,r)=>{r.d(t,{g:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"mat4",o.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},33680:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(20102),o=r(92604),n=r(11726);const a=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new d,this.fragment=new d,this.attributes=new h,this.varyings=new m,this.extensions=new f,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?v:g,l=this.constants.generateSource().concat(o.constants.generateSource());return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r,n)=>{for(let a=0;a<o;++a)i[a](t,e,r,n)}}}class c{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else a.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class d extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new u,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,n.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class f{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?f.ALLOWLIST_VERTEX:f.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}f.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],f.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p._numberToFloatStr(r);break;case"int":i=p._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif\n\nout vec4 fragColor;",v="precision highp float;\nprecision highp sampler2D;"},16374:(e,t,r)=>{r.d(t,{R:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"sampler2D",o.P.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},98069:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"sampler2D",o.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},79884:(e,t,r)=>{r.d(t,{x:()=>o});var i=r(67498);class o{constructor(e,t,r,o,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[i.P.Pass]:null,[i.P.Draw]:null},null!=r&&null!=o&&(this.bind[r]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},74709:(e,t,r)=>{r.d(t,{H:()=>o,K:()=>i});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var n;(n=o||(o={})).int=function(e){return Math.round(e).toString()},n.float=function(e){return e.toPrecision(8)}},67498:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},78869:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},14589:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(70586),o=r(35371);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},51354:(e,t,r)=>{r.d(t,{m:()=>o,o:()=>n});var i=r(74709);class o extends i.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},17662:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(99001);class o{constructor(){this.id=(0,i.D)()}unload(){}}},4726:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},83475:(e,t,r)=>{r.d(t,{i:()=>o});var i=r(35065);const o=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.NORMALCOMPRESSED,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.COLORFEATUREATTRIBUTE,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},60537:(e,t,r)=>{r.d(t,{F:()=>l});var i=r(70586),o=r(95330),n=r(74709),a=r(47026);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,o.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends n.K{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},82791:(e,t,r)=>{r.d(t,{F5:()=>u,yD:()=>i});var i,o,n=r(65617),a=(r(74709),r(17662)),s=r(4726),l=r(83475),c=r(57790);class u extends a.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=l.i,this._pp0=(0,n.f)(0,0,1),this._pp1=(0,n.f)(0,0,0),this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){null!=this.repository&&this.repository.materialChanged(this)}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}(o=i||(i={}))[o.None=0]="None",o[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque"},59377:(e,t,r)=>{r.d(t,{$:()=>a});var i=r(44553),o=r(67498),n=r(49300);class a{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(o.P.Pass,this),this.bindDraw=t.generateBind(o.P.Draw,this),this._fragmentUniforms=(0,n.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},93144:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},57790:(e,t,r)=>{r.d(t,{FZ:()=>R,Uf:()=>A,Bw:()=>f,LO:()=>S,Hx:()=>E});var i=r(67676),o=r(22021),n=r(17896),a=r(65617),s=r(60437),l=r(4726);function c(e,t,r,i){return function(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=o,u}(t,r,i))}r(64822),(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var d=r(11726),h=r(35065);const m=(0,s.Ue)();function f(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,d.hu)(e.type===l.U.Mesh);const a=t.tolerance;g(e.boundingInfo,r,i,a,o,n)}else{const t=e.indices.get(h.T.POSITION),a=e.vertexAttributes.get(h.T.POSITION);_(r,i,0,t.length/3,t,a,void 0,o,n)}}const p=(0,a.c)();function g(e,t,r,i,o,a){if(null==e)return;const l=function(e,t,r){return(0,n.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,p);if((0,s.op)(m,e.bbMin),(0,s.Tn)(m,e.bbMax),null!=o&&o.applyToAabb(m),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(s=Math.max(s,Math.min(d,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(m,t,l,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>C){const n=e.getChildren();if(void 0!==n){for(const e of n)g(e,t,r,i,o,a);return}}_(t,r,0,c,s,l,n,o,a)}}const v=(0,a.c)();function _(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const{data:c,stride:u}=n,d=e[0],h=e[1],m=e[2],f=t[0]-d,p=t[1]-h,g=t[2]-m;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=u*o[r++],n=c[i++],_=c[i++],T=c[i];i=u*o[r++];let x=c[i++],E=c[i++],A=c[i];i=u*o[r];let S=c[i++],w=c[i++],R=c[i];null!=s&&([n,_,T]=s.applyToVertex(n,_,T,e),[x,E,A]=s.applyToVertex(x,E,A,e),[S,w,R]=s.applyToVertex(S,w,R,e));const C=x-n,y=E-_,O=A-T,M=S-n,P=w-_,I=R-T,N=p*I-P*g,L=g*M-I*f,D=f*P-M*p,H=C*N+y*L+O*D;if(Math.abs(H)<=Number.EPSILON)continue;const F=d-n,B=h-_,U=m-T,z=F*N+B*L+U*D;if(H>0){if(z<0||z>H)continue}else if(z>0||z<H)continue;const V=B*O-y*U,G=U*C-O*F,W=F*y-C*B,k=f*V+p*G+g*W;if(H>0){if(k<0||z+k>H)continue}else if(k>0||z+k<H)continue;const $=(M*V+P*G+I*W)/H;$>=0&&l($,b(C,y,O,M,P,I,v),t,!1)}}(e,t,r,i,o,n,a,s,l);const{data:c,stride:u}=n,d=e[0],h=e[1],m=e[2],f=t[0]-d,p=t[1]-h,g=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=u*o[t++],i=c[r++],n=c[r++],a=c[r];r=u*o[t++];let _=c[r++],T=c[r++],x=c[r];r=u*o[t++];let E=c[r++],A=c[r++],S=c[r];null!=s&&([i,n,a]=s.applyToVertex(i,n,a,e),[_,T,x]=s.applyToVertex(_,T,x,e),[E,A,S]=s.applyToVertex(E,A,S,e));const w=_-i,R=T-n,C=x-a,y=E-i,O=A-n,M=S-a,P=p*M-O*g,I=g*y-M*f,N=f*O-y*p,L=w*P+R*I+C*N;if(Math.abs(L)<=Number.EPSILON)continue;const D=d-i,H=h-n,F=m-a,B=D*P+H*I+F*N;if(L>0){if(B<0||B>L)continue}else if(B>0||B<L)continue;const U=H*C-R*F,z=F*w-C*D,V=D*R-w*H,G=f*U+p*z+g*V;if(L>0){if(G<0||B+G>L)continue}else if(G>0||B+G<L)continue;const W=(y*U+O*z+M*V)/L;W>=0&&l(W,b(w,R,C,y,O,M,v),e,!1)}}const T=(0,a.c)(),x=(0,a.c)();function b(e,t,r,i,o,a,s){return(0,n.s)(T,e,t,r),(0,n.s)(x,i,o,a),(0,n.f)(s,T,x),(0,n.n)(s,s),s}function E(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;null!=n&&(a=c(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function A(e,t){const r=t?A(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=w(i)),null==i&&t in r||(r[t]=i)}return r}function S(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.Vx)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function w(e){const t=[];return e.forEach((e=>t.push(e))),t}const R={multiply:1,ignore:2,replace:3,tint:4},C=1e3},4375:(e,t,r)=>{var i;r.d(t,{B:()=>i}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(i||(i={}))},57088:(e,t,r)=>{r.d(t,{x:()=>d});var i=r(20102),o=(r(80442),r(22021)),n=r(49300),a=r(7575),s=r(35371),l=r(4375),c=r(47859);class u extends c.X{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case s.lP.R16F:case s.lP.R16I:case s.lP.R16UI:case s.lP.R32F:case s.lP.R32I:case s.lP.R32UI:case s.lP.R8_SNORM:case s.lP.R8:case s.lP.R8I:case s.lP.R8UI:this.pixelFormat=s.VI.RED}}static validate(e,t){return new u(e,t)}}let d=class{constructor(e,t=null,r=null){if(this.type=l.B.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,r=t;else{const r=u.validate(e,t);if(!r)throw new i.Z("Texture descriptor invalid");this._descriptor=r}if(this._descriptor.context.instanceCounter.increment(s._g.Texture,this),this._descriptor.context.type!==a.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),v(this._descriptor.target)))throw new i.Z("3D and array textures are not supported in WebGL1");this._descriptor.target===s.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return T.delete(this),(0,c.G)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(s._g.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.Z("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===s.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=s.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=s.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._descriptor.context||!this._descriptor.context.gl)return;const r=this._descriptor.context.gl;(0,n.zu)(r),this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null);const o=this._descriptor,a=t??o.target,l=v(a);null===e&&(o.width=o.width||4,o.height=o.height||4,l&&(o.depth=o.depth??1));const c=this._descriptor.context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),h(this._descriptor.context,o),this._configurePixelStorage(),(0,n.zu)(r);const u=this._deriveInternalFormat();if(g(e)){let t=e.width,i=e.height;const s=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,i=e.videoHeight),o.width&&o.height,l&&o.depth,o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,u,o.hasMipmap,t,i,s),this._texImage(a,0,u,t,i,s,e),(0,n.zu)(r),o.hasMipmap&&this.generateMipmap(),o.width||(o.width=t),o.height||(o.height=i),l&&!o.depth&&(o.depth=s)}else{const{width:t,height:c,depth:d}=o;if(null==t||null==c)throw new i.Z("Width and height must be specified!");if(l&&null==d)throw new i.Z("Depth must be specified!");if(o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,u,o.hasMipmap,t,c,d),p(e)){const n=e.levels,l=_(a,t,c,d),h=Math.min(l-1,n.length-1);null!=this._descriptor.context.gl2?r.texParameteri(o.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,h):o.hasMipmap=o.hasMipmap&&l===n.length;const m=u;if(!(m in s.q_))throw new i.Z("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const o=n[Math.min(e,n.length-1)];this._compressedTexImage(a,e,m,t,r,i,o)}),h)}else this._texImage(a,0,u,t,c,d,e),(0,n.zu)(r),o.hasMipmap&&this.generateMipmap()}m(r,this._descriptor),f(r,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),(0,n.zu)(r),this._descriptor.context.bindTexture(c,d.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,o,n,a,s=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor.context.gl,c=this._descriptor.context.gl2,u=this._descriptor,h=this._deriveInternalFormat(),{pixelFormat:m,dataType:f,target:v,isImmutable:_}=u;if(_&&!this._wasImmutablyAllocated)throw new i.Z("Cannot update immutable texture before allocation!");const T=this._descriptor.context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||r<0||o>u.width||n>u.height||t+o>u.width||r+n>u.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),s){if(!c)return void console.error("Webgl2 must be enabled to use dataRowOffset!");l.pixelStorei(c.UNPACK_SKIP_ROWS,s)}if(g(a)?c?c.texSubImage2D(v,e,t,r,o,n,m,f,a):l.texSubImage2D(v,e,t,r,m,f,a):p(a)?l.compressedTexSubImage2D(v,e,t,r,o,n,h,a.levels[e]):l.texSubImage2D(v,e,t,r,o,n,m,f,a),s){if(!c)return void console.error("Webgl2 must be enabled to use dataRowOffset!");l.pixelStorei(c.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(T,d.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,r,o,n,a,s,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._descriptor.context.gl2;if(null==c)throw new i.Z("3D textures are not supported in WebGL1");const u=this._descriptor,h=this._deriveInternalFormat(),{pixelFormat:m,dataType:f,isImmutable:g,target:_}=u;if(g&&!this._wasImmutablyAllocated)throw new i.Z("Cannot update immutable texture before allocation!");v(_)||console.warn("Attempting to set 3D texture data on a non-3D texture");const T=this._descriptor.context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),(t<0||r<0||o<0||n>u.width||a>u.height||s>u.depth||t+n>u.width||r+a>u.height||o+s>u.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),p(l))l=l.levels[e],c.compressedTexSubImage3D(_,e,t,r,o,n,a,s,h,l);else{const i=l;c.texSubImage3D(_,e,t,r,o,n,a,s,m,f,i)}this._descriptor.context.bindTexture(T,d.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new i.Z("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,h(this._descriptor.context,e)}e.samplingMode===s.cw.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=s.cw.LINEAR_MIPMAP_NEAREST):e.samplingMode===s.cw.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=s.cw.NEAREST_MIPMAP_NEAREST);const t=this._descriptor.context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(t,d.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,h(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor.context.gl,t=this._descriptor;this._samplingModeDirty&&(m(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(f(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===a.zO.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===s.VI.DEPTH_STENCIL&&(this._descriptor.internalFormat=s.VI.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case s.Br.FLOAT:switch(this._descriptor.pixelFormat){case s.VI.RGBA:return this._descriptor.internalFormat=s.lP.RGBA32F;case s.VI.RGB:return this._descriptor.internalFormat=s.lP.RGB32F;default:throw new i.Z("Unable to derive format")}case s.Br.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case s.VI.RGBA:return this._descriptor.internalFormat=s.lP.RGBA8;case s.VI.RGB:return this._descriptor.internalFormat=s.lP.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===s.VI.DEPTH_STENCIL?s.VI.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,o,n,a){const l=this._descriptor.context.gl2;if(null==l)throw new i.Z("Immutable textures are not supported in WebGL1");if(!(t in s.lP))throw new i.Z("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=r?_(e,o,n,a):1;if(v(e)){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");l.texStorage3D(e,c,t,o,n,a)}else l.texStorage2D(e,c,t,o,n);this._wasImmutablyAllocated=!0}_texImage(e,t,r,o,n,s,l){const c=this._descriptor.context.gl,u=v(e),{isImmutable:d,pixelFormat:h,dataType:m}=this._descriptor,f=this._descriptor.context.type===a.zO.WEBGL2,p=f?c:null;if(f||!g(l))if(d){if(null!=l){const r=l;if(u){if(null==s)throw new i.Z("Missing depth dimension for 3D texture upload");p.texSubImage3D(e,t,0,0,0,o,n,s,h,m,r)}else c.texSubImage2D(e,t,0,0,o,n,h,m,r)}}else{const a=l;if(u){if(null==s)throw new i.Z("Missing depth dimension for 3D texture upload");p.texImage3D(e,t,r,o,n,s,0,h,m,a)}else c.texImage2D(e,t,r,o,n,0,h,m,a)}else c.texImage2D(e,0,r,h,m,l)}_compressedTexImage(e,t,r,o,n,s,l){const c=this._descriptor.context.gl;let u=null;const d=v(e),h=this._descriptor.isImmutable;if(d){if(this._descriptor.context.type!==a.zO.WEBGL2)throw new i.Z("3D textures are not supported in WebGL1");u=c}if(h){if(null!=l)if(d){if(null==s)throw new i.Z("Missing depth dimension for 3D texture upload");u.compressedTexSubImage3D(e,t,0,0,0,o,n,s,r,l)}else c.compressedTexSubImage2D(e,t,0,0,o,n,r,l)}else if(d){if(null==s)throw new i.Z("Missing depth dimension for 3D texture upload");u.compressedTexImage3D(e,t,r,o,n,s,0,l)}else c.compressedTexImage2D(e,t,r,o,n,0,l)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:o,depth:n,hasMipmap:a,target:l}=this._descriptor;const c=l===s.No.TEXTURE_3D;if(null==r||null==o||c&&null==n)throw new i.Z("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,o,n),a&&(1!==r||1!==o||c&&1!==n)&&!(i>=t);++i)r=Math.max(1,r>>1),o=Math.max(1,o>>1),c&&(n=Math.max(1,n>>1))}};function h(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=e.type===a.zO.WEBGL2;r||!t.isImmutable&&!v(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||null!=t.width&&(0,o.wt)(t.width)&&null!=t.height&&(0,o.wt)(t.height)||("number"==typeof t.wrapMode?t.wrapMode!==s.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===s.e8.CLAMP_TO_EDGE&&t.wrapMode.t===s.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function m(e,t){let r=t.samplingMode,i=t.samplingMode;r===s.cw.LINEAR_MIPMAP_NEAREST||r===s.cw.LINEAR_MIPMAP_LINEAR?(r=s.cw.LINEAR,t.hasMipmap||(i=s.cw.LINEAR)):r!==s.cw.NEAREST_MIPMAP_NEAREST&&r!==s.cw.NEAREST_MIPMAP_LINEAR||(r=s.cw.NEAREST,t.hasMipmap||(i=s.cw.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function f(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function p(e){return null!=e&&"type"in e&&"compressed"===e.type}function g(e){return null!=e&&!p(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function v(e){return e===s.No.TEXTURE_3D||e===s.No.TEXTURE_2D_ARRAY}function _(e,t,r,i=1){let o=Math.max(t,r);return e===s.No.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}d.TEXTURE_UNIT_FOR_UPDATES=0;const T=new Map},47859:(e,t,r)=>{r.d(t,{G:()=>a,X:()=>n});var i=r(35371),o=r(45762);class n{constructor(e=0,t=e){this.width=e,this.height=t,this.target=i.No.TEXTURE_2D,this.pixelFormat=i.VI.RGBA,this.dataType=i.Br.UNSIGNED_BYTE,this.samplingMode=i.cw.LINEAR,this.wrapMode=i.e8.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function a(e){return e.width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(e.hasMipmap?4/3:1)*(0,o.RG)(e.internalFormat)}},45762:(e,t,r)=>{r.d(t,{RG:()=>o}),r(80442);var i=r(35371);function o(e){switch(e){case i.VI.ALPHA:case i.VI.LUMINANCE:case i.VI.RED:case i.VI.RED_INTEGER:case i.lP.R8:case i.lP.R8I:case i.lP.R8UI:case i.lP.R8_SNORM:case i.Tg.STENCIL_INDEX8:return 1;case i.VI.LUMINANCE_ALPHA:case i.VI.RG:case i.VI.RG_INTEGER:case i.lP.RGBA4:case i.lP.R16F:case i.lP.R16I:case i.lP.R16UI:case i.lP.RG8:case i.lP.RG8I:case i.lP.RG8UI:case i.lP.RG8_SNORM:case i.lP.RGB565:case i.lP.RGB5_A1:case i.Tg.DEPTH_COMPONENT16:return 2;case i.VI.DEPTH_COMPONENT:case i.VI.RGB:case i.VI.RGB_INTEGER:case i.lP.RGB8:case i.lP.RGB8I:case i.lP.RGB8UI:case i.lP.RGB8_SNORM:case i.lP.SRGB8:case i.Tg.DEPTH_COMPONENT24:return 3;case i.VI.DEPTH_STENCIL:case i.VI.DEPTH24_STENCIL8:case i.VI.RGBA:case i.VI.RGBA_INTEGER:case i.lP.RGBA8:case i.lP.R32F:case i.lP.R11F_G11F_B10F:case i.lP.RG16F:case i.lP.R32I:case i.lP.R32UI:case i.lP.RG16I:case i.lP.RG16UI:case i.lP.RGBA8I:case i.lP.RGBA8UI:case i.lP.RGBA8_SNORM:case i.lP.SRGB8_ALPHA8:case i.lP.RGB9_E5:case i.lP.RGB10_A2UI:case i.lP.RGB10_A2:case i.Tg.DEPTH_STENCIL:case i.Tg.DEPTH_COMPONENT32F:case i.Tg.DEPTH24_STENCIL8:return 4;case i.Tg.DEPTH32F_STENCIL8:return 5;case i.lP.RGB16F:case i.lP.RGB16I:case i.lP.RGB16UI:return 6;case i.lP.RG32F:case i.lP.RG32I:case i.lP.RG32UI:case i.lP.RGBA16F:case i.lP.RGBA16I:case i.lP.RGBA16UI:return 8;case i.lP.RGB32F:case i.lP.RGB32I:case i.lP.RGB32UI:return 12;case i.lP.RGBA32F:case i.lP.RGBA32I:case i.lP.RGBA32UI:return 16;case i.q_.COMPRESSED_RGB_S3TC_DXT1_EXT:case i.q_.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case i.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT:case i.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case i.q_.COMPRESSED_R11_EAC:case i.q_.COMPRESSED_SIGNED_R11_EAC:case i.q_.COMPRESSED_RGB8_ETC2:case i.q_.COMPRESSED_SRGB8_ETC2:case i.q_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case i.q_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case i.q_.COMPRESSED_RG11_EAC:case i.q_.COMPRESSED_SIGNED_RG11_EAC:case i.q_.COMPRESSED_RGBA8_ETC2_EAC:case i.q_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},49300:(e,t,r)=>{r.d(t,{hZ:()=>s,zu:()=>l});var i=r(20102),o=r(80442);const n=r(92604).Z.getLogger("esri.views.webgl.checkWebGLError"),a=!!(0,o.Z)("enable-feature:webgl-debug");function s(){return a}function l(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;n.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:o}))}}}},7575:(e,t,r)=>{r.d(t,{Sh:()=>a,kr:()=>n,zO:()=>i});var i,o=r(80442);function n(e,t,r={}){const o=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const t of o){const i=e.getContext(t,r);if(i)return i}return null}function a(e){if("3d"===e)return[i.WEBGL2];const t=(0,o.Z)("esri-force-webgl");return t===i.WEBGL1||t===i.WEBGL2?[t]:(0,o.Z)("mac")&&(0,o.Z)("chrome")?[i.WEBGL1,i.WEBGL2]:[i.WEBGL2,i.WEBGL1]}!function(e){e[e.WEBGL1=1]="WEBGL1",e[e.WEBGL2=2]="WEBGL2"}(i||(i={}))},9820:(e,t,r)=>{function i(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],t[i]=n[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],n[1]=e[i]-n[0],t[i]=n[1];return t}r.d(t,{GB:()=>o,U8:()=>i});const n=new Float32Array(2)},27097:(e,t,r)=>{r.d(t,{BK:()=>d,LZ:()=>u,if:()=>n,sm:()=>x,wK:()=>a,zp:()=>c});var i=r(47026),o=r(35371);function n(e,t,r=o.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.db.ADD,a=o.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function m(e){return w.intern(e)}function f(e){return C.intern(e)}function p(e){return O.intern(e)}function g(e){return P.intern(e)}function v(e){return N.intern(e)}function _(e){return D.intern(e)}function T(e){return F.intern(e)}function x(e){return U.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function E(e){return"["+e.join(",")+"]"}const A=new b(S,(e=>({__tag:"Blending",...e})));function S(e){return e?E([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(R,(e=>({__tag:"Culling",...e})));function R(e){return e?E([e.face,e.mode]):null}const C=new b(y,(e=>({__tag:"PolygonOffset",...e})));function y(e){return e?E([e.factor,e.units]):null}const O=new b(M,(e=>({__tag:"DepthTest",...e})));function M(e){return e?E([e.func]):null}const P=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?E([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?E([e.zNear,e.zFar]):null}const D=new b(H,(e=>({__tag:"ColorWrite",...e})));function H(e){return e?E([e.r,e.g,e.b,e.a]):null}const F=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?E([e.mask]):null}const U=new b((function(e){return e?E([S(e.blending),R(e.culling),y(e.polygonOffset),M(e.depthTest),I(e.stencilTest),L(e.depthWrite),H(e.colorWrite),B(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:g(e.stencilTest),depthWrite:v(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:T(e.stencilWrite)})))}}]);