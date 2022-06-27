"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[128],{65630:(e,t,r)=>{r.d(t,{D:()=>q,b:()=>W});var i=r(92026),o=r(81949),n=r(22357),a=r(83734),s=r(71011),l=r(33280),c=r(94951),d=r(81221),u=r(73782),h=r(52276),p=r(53230),m=r(60113),f=r(48655),v=r(85380),g=r(71410),x=r(93629),_=r(38171),T=r(30694),b=r(75395),A=r(18211),S=r(96658),C=r(2116),M=r(41481),y=r(87920),w=r(10758),O=r(26461),E=r(65974),P=r(14282),R=r(98082),I=r(82552),N=r(49450),L=r(95276),H=r(58406),D=r(98634),F=r(8654),B=r(64201),z=r(19253),V=r(68401),G=r(4760),U=r(70754);function W(e){const t=new B.kG,r=t.vertex.code,W=t.fragment.code;t.include(P.a,{name:"Default Material Shader",output:e.output});const q=(0,I.S)(t,e);return t.include(h.f),t.varyings.add("vpos","vec3"),t.include(w.k,e),t.include(d.f,e),t.include(g.L,e),e.output!==s.H.Color&&e.output!==s.H.Alpha||((0,I.h)(t.vertex,e),t.include(u.O,e),t.include(c.w,{linearDepth:!1,hasModelTransformation:e.hasModelTransformation}),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(_.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(m.D,e),t.include(n.q,e),t.include(p.R,e),t.include(f.c,e),t.vertex.uniforms.add(new L.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),e.hasModelTransformation&&t.vertex.uniforms.add(new F.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I))),r.add(D.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${D.H.float(O.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?D.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(E.z,e),t.include(A.l,e),t.fragment.uniforms.add([new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&t.fragment.uniforms.add(new z.A("tex",(e=>e.texture))),t.fragment.include(R.y),W.add(D.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?D.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?D.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:D.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(b.X,e),t.include(T.K,e),t.include(E.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(A.l,e),(0,I.h)(t.fragment,e),t.fragment.uniforms.add([q,new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity)),new H.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new N.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",U.V),e.hasColorTexture&&t.fragment.uniforms.add(new z.A("tex",(e=>e.texture))),t.include(M.jV,e),t.include(C.T,e),t.fragment.include(R.y),t.include(S.k,e),W.add(D.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?D.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?D.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:D.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===M.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?D.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:D.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?D.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:D.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?D.H`normalize(vpos + localOrigin);`:D.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?D.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===M.f7.Normal||e.pbrMode===M.f7.Schematic?D.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?D.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:D.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===V.Am.Color?D.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const q=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,r)=>{r.d(t,{R:()=>B,b:()=>F});var i=r(22357),o=r(83734),n=r(71011),a=r(33280),s=r(94951),l=r(81221),c=r(73782),d=r(52276),u=r(53230),h=r(60113),p=r(48655),m=r(71410),f=r(93629),v=r(30694),g=r(75395),x=r(18211),_=r(2116),T=r(41481),b=r(87920),A=r(10758),S=r(26461),C=r(65974),M=r(98082),y=r(82552),w=r(49450),O=r(95276),E=r(58406),P=r(98634),R=r(54118),I=r(64201),N=r(19253),L=r(68401),H=r(4760),D=r(70754);function F(e){const t=new I.kG,r=t.vertex.code,F=t.fragment.code,B=(0,y.S)(t,e);return t.include(d.f),t.varyings.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||((0,y.h)(t.vertex,e),t.include(c.O,e),t.include(s.w),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),t.include(h.D,e),t.include(i.q,e),t.include(u.R,e),t.include(p.c,e),t.vertex.uniforms.add(new O.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),r.add(P.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
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
      `)),e.output===n.H.Alpha&&(t.include(a.f5,e),t.include(C.z,e),t.include(x.l,e),t.fragment.uniforms.add([new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity)),new R.B("view")]),e.hasColorTexture&&t.fragment.uniforms.add(new N.A("tex",(e=>e.texture))),t.fragment.include(M.y),F.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(a.f5,e),t.include(g.X,e),t.include(v.K,e),t.include(C.z,e),t.include(e.instancedDoublePrecision?b.hb:b.XE,e),t.include(x.l,e),(0,y.h)(t.fragment,e),t.fragment.uniforms.add([B,new w.J("ambient",(e=>e.ambient)),new w.J("diffuse",(e=>e.diffuse)),new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity)),new R.B("view"),new E.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new w.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",D.V),e.hasColorTexture&&t.fragment.uniforms.add(new N.A("tex",(e=>e.texture))),t.include(T.jV,e),t.include(_.T,e),t.fragment.include(M.y),t.extensions.add("GL_OES_standard_derivatives"),F.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
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
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?e.spherical?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?P.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.Am.Color?P.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:P.H``}
      }
    `)),t.include(f.s,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},11873:(e,t,r)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>o,c:()=>i});Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,i,o,n,a,s,l){return[e,t,r,i,o,n,a,s,l]},createView:o},Symbol.toStringTag,{value:"Module"}))},81949:(e,t,r)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>a,a:()=>n,b:()=>o,c:()=>i});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:o,fromValues:function(e,t,r,i,o,n,a,s,l,c,d,u,h,p,m,f){return[e,t,r,i,o,n,a,s,l,c,d,u,h,p,m,f]},createView:n,IDENTITY:a},Symbol.toStringTag,{value:"Module"}))},48976:(e,t,r)=>{r.d(t,{c:()=>p,g:()=>d,j:()=>O,k:()=>f,m:()=>u,s:()=>c});var i=r(11873),o=r(98131),n=r(71353),a=r(26277),s=r(11186),l=r(90045);function c(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>a.E?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function u(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=r[0],l=r[1],c=r[2],d=r[3];return e[0]=i*d+a*s+o*c-n*l,e[1]=o*d+a*l+n*s-i*c,e[2]=n*d+a*c+i*l-o*s,e[3]=a*d-i*s-o*l-n*c,e}function h(e,t,r,i){const o=t[0],n=t[1],s=t[2],l=t[3];let c,d,u,h,p,m=r[0],f=r[1],v=r[2],g=r[3];return d=o*m+n*f+s*v+l*g,d<0&&(d=-d,m=-m,f=-f,v=-v,g=-g),1-d>a.E?(c=Math.acos(d),u=Math.sin(c),h=Math.sin((1-i)*c)/u,p=Math.sin(i*c)/u):(h=1-i,p=i),e[0]=h*o+p*m,e[1]=h*n+p*f,e[2]=h*s+p*v,e[3]=h*l+p*g,e}function p(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const o=(r+1)%3,n=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*o+o]-t[3*n+n]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*o+n]-t[3*n+o])*i,e[o]=(t[3*o+r]+t[3*r+o])*i,e[n]=(t[3*n+r]+t[3*r+n])*i}return e}function f(e,t,r,i){const o=.5*Math.PI/180;t*=o,r*=o,i*=o;const n=Math.sin(t),a=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(i),d=Math.cos(i);return e[0]=n*l*d-a*s*c,e[1]=a*s*d+n*l*c,e[2]=a*l*c-n*s*d,e[3]=a*l*d+n*s*c,e}const v=l.c,g=l.s,x=l.a,_=u,T=l.b,b=l.d,A=l.l,S=l.e,C=S,M=l.f,y=M,w=l.n,O=l.g,E=l.h;const P=(0,n.c)(),R=(0,n.f)(1,0,0),I=(0,n.f)(0,1,0);const N=(0,o.a)(),L=(0,o.a)();const H=(0,i.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:c,getAxisAngle:d,multiply:u,rotateX:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=o*l+n*s,e[2]=n*l-o*s,e[3]=a*l-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-n*s,e[1]=o*l+a*s,e[2]=n*l+i*s,e[3]=a*l-o*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=o*l-i*s,e[2]=n*l+a*s,e[3]=a*l-n*s,e},calculateW:function(e,t){const r=t[0],i=t[1],o=t[2];return e[0]=r,e[1]=i,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-o*o)),e},slerp:h,random:function(e){const t=(0,a.R)(),r=(0,a.R)(),i=(0,a.R)(),o=Math.sqrt(1-t),n=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=n*Math.sin(2*Math.PI*i),e[3]=n*Math.cos(2*Math.PI*i),e},invert:function(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=r*r+i*i+o*o+n*n,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-o*s,e[3]=n*s,e},conjugate:p,fromMat3:m,fromEuler:f,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:v,set:g,add:x,mul:_,scale:T,dot:b,lerp:A,length:S,len:C,squaredLength:M,sqrLen:y,normalize:w,exactEquals:O,equals:E,rotationTo:function(e,t,r){const i=(0,s.e)(t,r);return i<-.999999?((0,s.f)(P,R,t),(0,s.u)(P)<1e-6&&(0,s.f)(P,I,t),(0,s.n)(P,P),c(e,P,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.f)(P,t,r),e[0]=P[0],e[1]=P[1],e[2]=P[2],e[3]=1+i,w(e,e))},sqlerp:function(e,t,r,i,o,n){return h(N,t,o,n),h(L,r,i,n),h(e,N,L,2*n*(1-n)),e},setAxes:function(e,t,r,i){const o=H;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=i[0],o[4]=i[1],o[7]=i[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],w(e,m(e,o))}},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,r)=>{function i(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>a,a:()=>i,b:()=>o,c:()=>n});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:o,fromValues:function(e,t,r,i){return[e,t,r,i]},createView:n,IDENTITY:a},Symbol.toStringTag,{value:"Module"}))},71417:(e,t,r)=>{r.d(t,{b:()=>g,c:()=>v,d:()=>x,g:()=>_,i:()=>A,m:()=>E});r(93169);var i,o=r(32718),n=r(16889),a=r(92026),s=r(14226),l=r(11186),c=r(71353),d=r(90045),u=r(67077);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(i||(i={}));var h=r(40885),p=r(40927),m=r(11185);const f=o.Z.getLogger("esri.geometry.support.sphere");function v(){return(0,u.c)()}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v();return(0,d.c)(t,e)}function x(e){return e[3]}function _(e){return e}function T(e,t,r){if((0,a.Wi)(t))return!1;const{origin:i,direction:o}=t,n=b;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],l=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),c=l*l-4*s*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(c<0)return!1;const d=Math.sqrt(c);let u=(-l-d)/(2*s);const h=(-l+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0)&&(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),!0)}const b=(0,c.c)();function A(e,t){return T(e,t,null)}function S(e,t,r){const i=m.WM.get(),o=m.MP.get();(0,l.f)(i,t.origin,t.direction);const n=x(e);(0,l.f)(r,i,t.origin),(0,l.g)(r,r,1/(0,l.l)(r)*n);const a=M(e,t.origin),c=(0,p.EU)(t.origin,r);return(0,s.d)(o,c+a,i),(0,l.m)(r,r,o),r}function C(e,t,r){const i=(0,l.b)(m.WM.get(),t,e),o=(0,l.g)(m.WM.get(),i,e[3]/(0,l.l)(i));return(0,l.a)(r,o,e)}function M(e,t){const r=(0,l.b)(m.WM.get(),t,e),i=(0,l.l)(r),o=x(e),a=o+Math.abs(o-i);return(0,n.ZF)(o/a)}const y=(0,c.c)();function w(e,t,r,o){const a=(0,l.b)(y,t,e);switch(r){case i.X:{const e=(0,n.jE)(a,y)[2];return(0,l.s)(o,-Math.sin(e),Math.cos(e),0)}case i.Y:{const e=(0,n.jE)(a,y),t=e[1],r=e[2],i=Math.sin(t);return(0,l.s)(o,-i*Math.cos(r),-i*Math.sin(r),Math.cos(t))}case i.Z:return(0,l.n)(o,a);default:return}}function O(e,t){const r=(0,l.b)(P,t,e);return(0,l.l)(r)-e[3]}function E(e,t){const r=(0,l.d)(e,t),i=x(e);return r<=i*i}const P=(0,c.c)(),R=v();Object.freeze(Object.defineProperty({__proto__:null,create:v,copy:g,fromCenterAndRadius:function(e,t){return(0,u.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},getRadius:x,getCenter:_,fromValues:function(e,t,r,i){return(0,u.f)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&(0,l.c)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return f.error("sphere.setExtent is not yet supported"),e===r?r:g(e,r)},intersectRay:T,intersectsRay:A,intersectRayClosestSilhouette:function(e,t,r){if(T(e,t,r))return r;const i=S(e,t,m.WM.get());return(0,l.a)(r,t.origin,(0,l.g)(m.WM.get(),t.direction,(0,l.i)(t.origin,i)/(0,l.l)(t.direction))),r},closestPointOnSilhouette:S,closestPoint:function(e,t,r){return T(e,t,r)?r:((0,h.JI)(t,e,r),C(e,r,r))},projectPoint:C,distanceToSilhouette:function(e,t){const r=(0,l.b)(m.WM.get(),t,e),i=(0,l.p)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:M,axisAt:w,altitudeAt:O,setAltitudeAt:function(e,t,r,o){const n=O(e,t),a=w(e,t,i.Z,P),s=(0,l.g)(P,a,r-n);return(0,l.a)(o,t,s)},containsPoint:E,tmpSphere:R},Symbol.toStringTag,{value:"Module"}))},32035:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>l,n:()=>s,s:()=>a,t:()=>o});var i=r(77873);function o(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],l=r[4],c=r[5],d=r[6],u=r[8],h=r[9],p=r[10],m=r[12],f=r[13],v=r[14],g=e.typedBuffer,x=e.typedBufferStride,_=t.typedBuffer,T=t.typedBufferStride;for(let i=0;i<o;i++){const e=i*x,t=i*T,r=_[t],o=_[t+1],b=_[t+2];g[e]=n*r+l*o+u*b+m,g[e+1]=a*r+c*o+h*b+f,g[e+2]=s*r+d*o+p*b+v}}function n(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],p=r[8],m=e.typedBuffer,f=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let i=0;i<o;i++){const e=i*f,t=i*g,r=v[t],o=v[t+1],x=v[t+2];m[e]=n*r+l*o+u*x,m[e+1]=a*r+c*o+h*x,m[e+2]=s*r+d*o+p*x}}function a(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*n,t=l*s;o[e]=r*a[t],o[e+1]=r*a[t+1],o[e+2]=r*a[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*o,t=s*a,r=n[t],l=n[t+1],c=n[t+2],d=r*r+l*l+c*c;if(d>0){const t=1/Math.sqrt(d);i[e]=t*r,i[e+1]=t*l,i[e+2]=t*c}}}function l(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*n,t=l*s;o[e]=a[t]>>r,o[e+1]=a[t+1]>>r,o[e+2]=a[t+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:o,transformMat3:n,scale:a,normalize:s,shiftRight:l},Symbol.toStringTag,{value:"Module"}))},92770:(e,t,r)=>{function i(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d)i[l]=n[c],i[l+1]=n[c+1],i[l+2]=n[c+2],l+=o,c+=a}function o(e,t,r,i,o){const n=e.typedBuffer,a=e.typedBufferStride,s=o?.count??e.count;let l=(o?.dstIndex??0)*a;for(let c=0;c<s;++c)n[l]=t,n[l+1]=r,n[l+2]=i,l+=a}r.d(t,{c:()=>i,f:()=>o});Object.freeze(Object.defineProperty({__proto__:null,copy:i,fill:o},Symbol.toStringTag,{value:"Module"}))},8229:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function n(){return i()}function a(){return o(1,1,1)}function s(){return o(1,0,0)}function l(){return o(0,1,0)}function c(){return o(0,0,1)}r.d(t,{c:()=>i,f:()=>o});const d=n(),u=a(),h=s(),p=l(),m=c();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:n,ones:a,unitX:s,unitY:l,unitZ:c,ZEROS:d,ONES:u,UNIT_X:h,UNIT_Y:p,UNIT_Z:m},Symbol.toStringTag,{value:"Module"}))},71277:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>i,pJ:()=>o});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},77873:(e,t,r)=>{r.d(t,{c:()=>i});const i=r(32718).Z.getLogger("esri.views.3d.support.buffer.math")},40885:(e,t,r)=>{r.d(t,{JI:()=>l,Ue:()=>a,re:()=>s});r(63780);var i=r(21530),o=r(11186),n=r(71353);r(11185);function a(e){return e?{origin:(0,n.a)(e.origin),direction:(0,n.a)(e.direction)}:{origin:(0,n.c)(),direction:(0,n.c)()}}function s(e,t){const r=c.get();return r.origin=e,r.direction=t,r}function l(e,t,r){const i=(0,o.e)(e.direction,(0,o.b)(r,t,e.origin));return(0,o.a)(r,e.origin,(0,o.g)(r,e.direction,i)),r}const c=new i.x((function(){return{origin:null,direction:null}}))},40927:(e,t,r)=>{r.d(t,{EU:()=>a});var i=r(16889),o=r(11186),n=r(71353);function a(e,t){const r=(0,o.e)(e,t)/((0,o.l)(e)*(0,o.l)(t));return-(0,i.ZF)(r)}(0,n.c)(),(0,n.c)()},38330:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(76200);async function o(e,t){const{data:r}=await(0,i.default)(e,{responseType:"image",...t});return r}},50128:(e,t,r)=>{r.r(t),r.d(t,{fetch:()=>Gt,gltfToEngineResources:()=>Wt,parseUrl:()=>Ut});var i=r(71277),o=r(92026),n=r(22753),a=r(11873),s=r(14226),l=r(81949),c=r(11186),d=r(71353),u=r(41414),h=r(25158),p=r(32035),m=r(19093),f=r(17054),v=r(27053),g=r(55798),x=r(32315),_=r(76200),T=r(14921),b=r(10064),A=r(32718),S=r(66978),C=r(49901),M=r(38330),y=r(68401),w=r(27546),O=r(97731);class E{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,d.c)(),(0,O.hu)(e.length>=1),(0,O.hu)(r.length%this._numIndexPerPrimitive==0),(0,O.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,O.hu)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];P.clear(),P.push(s),this.bbMin=(0,d.f)(o[s],o[s+1],o[s+2]),this.bbMax=(0,d.a)(this.bbMin);for(let c=0;c<a;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[t+e],P.push(s);let i=o[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=o[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=o[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}(0,c.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let c=0;c<P.length;++c){s=P.getItemAt(c);const e=o[s]-this.center[0],t=o[s+1]-this.center[1],r=o[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=l)continue;const n=Math.sqrt(i),a=.5*(n-this.radius);this.radius=this.radius+a,l=this.radius*this.radius;const d=a/n;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=r*d}P.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.d)(this.bbMin,this.bbMax)>1){const e=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:o,size:n}=this.position;for(let l=0;l<t;++l){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=n*this.indices[a],c=o[s],d=o[s+1],u=o[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=n*this.indices[a+e];const t=o[s],r=o[s+1],i=o[s+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[l]=t,++i[t]}let a=0;for(let l=0;l<8;++l)i[l]>0&&++a;if(a<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];s[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==s[l]&&(this._children[l]=new E(s[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){P.prune()}}const P=new w.Z({deallocator:null});var R=r(1395),I=r(79100),N=r(81935),L=r(4760);class H extends R.c{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.MX.Triangle,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=I.U.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,n]of e)n&&this._vertexAttributes.set(o,{...n});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,N.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[o,n]of t)n&&(this._indices.set(o,D(n)),o===L.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}cloneShallow(){const e=new H([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>{t.set(r,e)})),this._indices.forEach(((e,t)=>{r.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===y.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(L.T.POSITION),r=this.vertexAttributes.get(L.T.POSITION);return(0,N.cM)(r,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(L.T.POSITION),r=this.vertexAttributes.get(L.T.POSITION);return(0,N.NO)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(L.T.POSITION);if(0===e.length)return null;const t=this.primitiveType===y.MX.Triangle?3:1;(0,O.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,N.p)(e.length/t),i=this.vertexAttributes.get(L.T.POSITION);return new E(r,t,e,i)}}function D(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var F=r(41644),B=r(91505),z=r(16889),V=r(18722),G=r(35995),U=r(5640),W=r(65905);let q;var k;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(k||(k={}));var $=r(8548),j=r(51378),X=r(3384);let J=null,K=null;async function Z(){return(0,o.Wi)(K)&&(K=function(){if((0,o.Wi)(q)){const e=e=>(0,W.V)(`esri/libs/basisu/${e}`);q=r.e(1562).then(r.bind(r,61562)).then((e=>e.b)).then((t=>{let{default:r}=t;return r({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))}))}return q}(),J=await K),K}function Y(e,t,r,i,o){const n=(0,X.RG)(t?$.q_.COMPRESSED_RGBA8_ETC2_EAC:$.q_.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Q(e){return e.getNumImages()>=1&&!e.isUASTC()}function ee(e){return e.getFaces()>=1&&e.isETC1S()}function te(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[k.ETC2_RGBA,$.q_.COMPRESSED_RGBA8_ETC2_EAC]:[k.ETC1_RGB,$.q_.COMPRESSED_RGB8_ETC2]:c?i?[k.BC3_RGBA,$.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[k.BC1_RGB,$.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[k.RGBA32,$.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),p=[];for(let g=0;g<h;g++)p.push(new Uint8Array(a(g,d))),s(g,d,p[g]);const m=p.length>1,f=m?$.cw.LINEAR_MIPMAP_LINEAR:$.cw.LINEAR,v={...t,samplingMode:f,hasMipmap:m,internalFormat:u,width:o,height:n};return new j.x(e,v,{type:"compressed",levels:p})}const re=A.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ie=542327876,oe=131072;function ne(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ae=ne("DXT1"),se=ne("DXT3"),le=ne("DXT5");function ce(e,t,r){const{textureData:i,internalFormat:o,width:n,height:a}=function(e,t){const r=new Int32Array(e,0,31);if(r[0]!==ie)return re.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return re.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case ae:o=8,n=$.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case se:o=16,n=$.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case le:o=16,n=$.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return re.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(re.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[2]&oe&&!1!==t&&(a=Math.max(1,r[7])),1===a||(0,z.wt)(s)&&(0,z.wt)(l)||(re.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let p=r[1]+4;const m=[];for(let f=0;f<a;++f)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,p,h),m.push(u),p+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:n,width:c,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?$.cw.LINEAR_MIPMAP_LINEAR:$.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=n,t.height=a,new j.x(e,t,i)}var de=r(7566),ue=r(61109);new ue.G(L.T.POSITION,3,$.g.FLOAT,0,12),new ue.G(L.T.POSITION,3,$.g.FLOAT,0,20),new ue.G(L.T.UV0,2,$.g.FLOAT,12,20),new ue.G(L.T.POSITION,3,$.g.FLOAT,0,32),new ue.G(L.T.NORMAL,3,$.g.FLOAT,12,32),new ue.G(L.T.UV0,2,$.g.FLOAT,24,32),new ue.G(L.T.POSITION,3,$.g.FLOAT,0,16),new ue.G(L.T.COLOR,4,$.g.UNSIGNED_BYTE,12,16);const he=[new ue.G(L.T.POSITION,2,$.g.FLOAT,0,8)],pe=[new ue.G(L.T.POSITION,2,$.g.FLOAT,0,16),new ue.G(L.T.UV0,2,$.g.FLOAT,8,16)];var me=r(44070),fe=r(45412);var ve,ge=r(53634),xe=r(30308);class _e extends R.c{constructor(e,t){super(),this.data=e,this.type=I.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new B.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:$.e8.REPEAT,t:$.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||y.CE.STRETCH,this.estimatedTexMemRequired=_e._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,o.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,G.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,G.HK)(e.src)||(0,G.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.Wi)(e))return 0;if((0,V.eP)(e)||(0,V.lq)(e))return t.encoding===_e.KTX2_ENCODING?function(e,t){if((0,o.Wi)(J))return e.byteLength;const r=new J.KTX2File(new Uint8Array(e)),i=ee(r)?Y(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===_e.BASIS_ENCODING?function(e,t){if((0,o.Wi)(J))return e.byteLength;const r=new J.BasisFile(new Uint8Array(e)),i=Q(r)?Y(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?_e._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:$.No.TEXTURE_2D,pixelFormat:$.VI.RGBA,dataType:$.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?$.cw.LINEAR_MIPMAP_LINEAR:$.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,o.pC)(this._glTexture))return this._glTexture;if((0,o.pC)(this._loadingPromise))return this._loadingPromise;const r=this.data;return(0,o.Wi)(r)?(this._glTexture=new j.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,V.eP)(r)||(0,V.lq)(r))&&this.params.encoding===_e.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):((0,V.eP)(r)||(0,V.lq)(r))&&this.params.encoding===_e.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):((0,V.eP)(r)||(0,V.lq)(r))&&this.params.encoding===_e.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):(0,V.lq)(r)?this._loadFromPixelData(e,r):(0,V.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,o.Wi)(this._glTexture))return r;if(this.data.readyState<ve.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=ce(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(J)&&(J=await Z());const i=new J.KTX2File(new Uint8Array(r));if(!ee(i))return null;i.startTranscoding();const n=te(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(J)&&(J=await Z());const i=new J.BasisFile(new Uint8Array(r));if(!Q(i))return null;i.startTranscoding();const n=te(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,O.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?$.VI.LUMINANCE:3===this.params.components?$.VI.RGB:$.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new j.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await(0,M.t)(r,{signal:i});return(0,S.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await(0,U.fY)(r,r.src,!1,i);return(0,S.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=ve.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,o.hw)(d)},l=()=>{r.readyState>=ve.HAVE_CURRENT_DATA&&(s(),n(this._loadFromImage(e,r,t)))},c=e=>{s(),a(e||new b.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=(0,S.fu)(i,(()=>c((0,S.zE)())))}))))}_loadFromImage(e,t,r){const i=_e._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?$.VI.RGB:$.VI.RGBA,!this._requiresPowerOfTwo(e,o)||(0,z.wt)(i.width)&&(0,z.wt)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new j.x(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=$.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,xe.Z)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,z.Sf)(n),l=(0,z.Sf)(a);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case y.CE.PAD:i.textureCoordinateScaleFactor=[n/s,a/l],c=new j.x(e,i),c.updateData(0,0,0,n,a,t);break;case y.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,o());break;default:(0,F.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const o=new j.x(e,r),n=new ge.X(e,{colorTarget:$.Lm.TEXTURE,depthStencilTarget:$.OU.NONE},o),a=new j.x(e,{target:$.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:$.Br.UNSIGNED_BYTE,wrapMode:$.e8.CLAMP_TO_EDGE,samplingMode:$.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:de.i,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=null;return n=t===pe?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new fe.U(e,r,{geometry:t},{geometry:me.f.createVertex(e,$.l1.STATIC_DRAW,n)})}(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,r,i,o,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=e.bindTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture("tex",o),e.bindVAO(i),e.drawArrays($.MX.TRIANGLE_STRIP,0,(0,X._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}_e.DDS_ENCODING="image/vnd-ms.dds",_e.KTX2_ENCODING="image/ktx2",_e.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ve||(ve={}));var Te,be,Ae=r(50951),Se=r(55158),Ce=r(71011),Me=r(73782),ye=r(96658),we=r(41481),Oe=r(25278),Ee=r(56529),Pe=r(78041);!function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT"}(Te||(Te={})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(be||(be={}));var Re=r(48976),Ie=r(98131),Ne=r(8229),Le=r(71417);const He=(0,d.c)(),De=(0,d.c)(),Fe=(0,d.c)();const Be=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.sphere=(0,Le.c)(),this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.componentLocalOriginLength=0,this._tmpVertex=(0,d.c)(),this._mbs=(0,Le.c)(),this._obb={center:(0,d.c)(),halfSize:(0,Ne.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),d=Math.sqrt(s*s+l*l+c*c);if(d<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const u=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),p=Math.max(Math.abs(i),Math.abs(a)),m=Math.sqrt(u*u+h*h+p*p),f=this._totalOffset/m,v=this._totalOffset/d;return e[0]+=t*(t>0?f:v),e[1]+=r*(r>0?f:v),e[2]+=i*(i>0?f:v),e[3]+=o*(o<0?f:v),e[4]+=n*(n<0?f:v),e[5]+=a*(a<0?f:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,c.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,c.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,c.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Re.c)(ze,e.quaternion),(0,c.q)(this._obb.halfSize,this._obb.halfSize,ze),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let o=0;o<3;++o)He[o]=e[0+o]+this.localOrigin[o],De[o]=e[3+o]+this.localOrigin[o],Fe[o]=He[o];const t=this.applyToVertex(He[0],He[1],He[2]);for(let o=0;o<3;++o)e[o]=t[o],e[o+3]=t[o];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let i=0;i<3;++i)e[i+0]=Math.min(e[i+0],r[i]),e[i+3]=Math.max(e[i+3],r[i])};for(let o=1;o<8;++o){for(let e=0;e<3;++e)Fe[e]=0==(o&1<<e)?He[e]:De[e];r(Fe)}let i=0;for(let o=0;o<3;++o)He[o]*De[o]<0&&(i|=1<<o);if(0!==i&&7!==i)for(let o=0;o<8;++o)if(0==(i&o)){for(let e=0;e<3;++e)i[e]?Fe[e]=0:Fe[e]=0!=(o&1<<e)?He[e]:De[e];r(Fe)}for(let o=0;o<3;++o)e[o+0]-=this.localOrigin[o],e[o+3]-=this.localOrigin[o];return e}};const ze=(0,Ie.a)();function Ve(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let s=0;s<a;++s){const r=2*e[s];o[i]=t[r],o[i+1]=t[r+1],i+=n}}function Ge(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let l=0;l<s;++l){const r=3*e[l];n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],i+=a}else for(let l=0;l<s;++l){const r=3*e[l];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],i+=a}}function Ue(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let l=0;l<s;++l){const r=4*e[l];n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],n[i+3]=t[r+3],i+=a}else for(let l=0;l<s;++l){const r=4*e[l];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],n[i+3]=t[r+3],i+=a}}function We(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(!r)return void Ge(e,t,i,o,n);const a=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],h=r[4],p=r[5],m=r[6],f=r[8],v=r[9],g=r[10],x=r[12],_=r[13],T=r[14];if(o*=s,1===n)for(let b=0;b<l;++b){const r=3*e[b],i=t[r],n=t[r+1],l=t[r+2];a[o]=c*i+h*n+f*l+x,a[o+1]=d*i+p*n+v*l+_,a[o+2]=u*i+m*n+g*l+T,o+=s}else for(let b=0;b<l;++b){const r=3*e[b],i=t[r],l=t[r+1],A=t[r+2],S=c*i+h*l+f*A+x,C=d*i+p*l+v*A+_,M=u*i+m*l+g*A+T;for(let e=0;e<n;++e)a[o]=S,a[o+1]=C,a[o+2]=M,o+=s}}function qe(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(!r)return void Ge(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],p=a[2],m=a[4],f=a[5],v=a[6],g=a[8],x=a[9],_=a[10],T=!(0,s.p)(a),b=1e-6,A=1-b;if(o*=c,1===n)for(let s=0;s<d;++s){const r=3*e[s],i=t[r],n=t[r+1],a=t[r+2];let d=u*i+m*n+g*a,S=h*i+f*n+x*a,C=p*i+v*n+_*a;if(T){const e=d*d+S*S+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);d*=t,S*=t,C*=t}}l[o+0]=d,l[o+1]=S,l[o+2]=C,o+=c}else for(let s=0;s<d;++s){const r=3*e[s],i=t[r],a=t[r+1],d=t[r+2];let S=u*i+m*a+g*d,C=h*i+f*a+x*d,M=p*i+v*a+_*d;if(T){const e=S*S+C*C+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}for(let e=0;e<n;++e)l[o+0]=S,l[o+1]=C,l[o+2]=M,o+=c}}function ke(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;if(!r)return void Ue(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],p=a[2],m=a[4],f=a[5],v=a[6],g=a[8],x=a[9],_=a[10],T=!(0,s.p)(a),b=1e-6,A=1-b;if(o*=c,1===n)for(let s=0;s<d;++s){const r=4*e[s],i=t[r],n=t[r+1],a=t[r+2],d=t[r+3];let S=u*i+m*n+g*a,C=h*i+f*n+x*a,M=p*i+v*n+_*a;if(T){const e=S*S+C*C+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}l[o+0]=S,l[o+1]=C,l[o+2]=M,l[o+3]=d,o+=c}else for(let s=0;s<d;++s){const r=4*e[s],i=t[r],a=t[r+1],d=t[r+2],S=t[r+3];let C=u*i+m*a+g*d,M=h*i+f*a+x*d,y=p*i+v*a+_*d;if(T){const e=C*C+M*M+y*y;if(e<A&&e>b){const t=1/Math.sqrt(e);C*=t,M*=t,y*=t}}for(let e=0;e<n;++e)l[o+0]=C,l[o+1]=M,l[o+2]=y,l[o+3]=S,o+=c}}function $e(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===n){if(4===r)for(let c=0;c<l;++c){const r=4*e[c];a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=t[r+3],o+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=255,o+=s}}else if(4===r)for(let c=0;c<l;++c){const r=4*e[c];for(let e=0;e<n;++e)a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=t[r+3],o+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];for(let e=0;e<n;++e)a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=255,o+=s}}var je=r(45639),Xe=r(67077),Je=r(60113),Ke=r(85380),Ze=r(26461),Ye=r(27254);class Qe{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}var et=r(99340),tt=r(37825);class rt{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new w.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(et.P.Pass,this),this.bindDraw=t.generateBind(et.P.Draw,this),this._fragmentUniforms=(0,tt.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2f(e,t,r){this._glProgram.setUniform2f(e,t,r)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3f(e,t,r,i){this._glProgram.setUniform3f(e,t,r,i)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4f(e,t,r,i,o){this._glProgram.setUniform4f(e,t,r,i,o)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,o.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,o.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}$.wb.LESS,$.wb.ALWAYS;const it={mask:255},ot={function:{func:$.wb.ALWAYS,ref:y.hU.OutlineVisualElementMask,mask:y.hU.OutlineVisualElementMask},operation:{fail:$.xS.KEEP,zFail:$.xS.KEEP,zPass:$.xS.ZERO}},nt={function:{func:$.wb.ALWAYS,ref:y.hU.OutlineVisualElementMask,mask:y.hU.OutlineVisualElementMask},operation:{fail:$.xS.KEEP,zFail:$.xS.KEEP,zPass:$.xS.REPLACE}};$.wb.EQUAL,y.hU.OutlineVisualElementMask,y.hU.OutlineVisualElementMask,$.xS.KEEP,$.xS.KEEP,$.xS.KEEP,$.wb.NOTEQUAL,y.hU.OutlineVisualElementMask,y.hU.OutlineVisualElementMask,$.xS.KEEP,$.xS.KEEP,$.xS.KEEP;var at=r(65630),st=r(36207);class lt extends Ke.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,d.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=y.Vr.Back,this.emissiveFactor=(0,d.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,d.f)(.2,.2,.2),this.diffuse=(0,d.f)(.8,.8,.8),this.externalColor=(0,Xe.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,d.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=y.Gv.Less,this.textureAlphaMode=y.JJ.Blend,this.textureAlphaCutoff=Ze.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ee.yD.Occlude}}class ct extends class{constructor(e,t,r){this.release=r,t&&(this.initializeConfiguration(e,t),this._configuration=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,o.O3)(this._program),this._pipeline=this._configuration=null}reload(e){(0,o.O3)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPass(e,t){this.program.bindPass(e,t)}bindDraw(e,t){this.program.bindDraw(e,t),this.program.rebindTextures()}bindPipelineState(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0;e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return $.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ae.JY.Global,t.doublePrecisionRequiresObfuscation=(0,Ye.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Je.N.Default:Je.N.None}initializeProgram(e){return this._initializeProgram(e,ct.shader)}_initializeProgram(e,t){const r=t.get().build(this.configuration);return new rt(e.rctx,r,de.i)}_convertDepthTestFunction(e){return e===y.Gv.Lequal?$.wb.LEQUAL:$.wb.LESS}_setPipeline(e,t){const r=this.configuration,i=e===y.Am.NONE,o=e===y.Am.FrontFace;return(0,st.sm)({blending:r.output!==Ce.H.Color&&r.output!==Ce.H.Alpha||!r.transparent?null:i?Pe.wu:(0,Pe.j7)(e),culling:dt(r)&&(0,st.zp)(r.cullFace),depthTest:{func:(0,Pe.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||o?r.writeDepth&&st.LZ:null,colorWrite:st.BK,stencilWrite:r.hasOccludees?it:null,stencilTest:r.hasOccludees?t?nt:ot:null,polygonOffset:i||o?null:(0,Pe.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function dt(e){return e.cullFace!==y.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}ct.shader=new Qe(at.D,(()=>r.e(294).then(r.bind(r,40294))));var ut=r(27366);function ht(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}}class pt extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{}(0,ut._)([ht({constValue:!0})],pt.prototype,"hasSliceHighlight",void 0),(0,ut._)([ht({constValue:!1})],pt.prototype,"hasSliceInVertexProgram",void 0),(0,ut._)([ht({constValue:!1})],pt.prototype,"instancedDoublePrecision",void 0),(0,ut._)([ht({constValue:!1})],pt.prototype,"isGround",void 0),(0,ut._)([ht({constValue:et.P.Pass})],pt.prototype,"pbrTextureBindType",void 0);class mt extends pt{constructor(){super(...arguments),this.output=Ce.H.Color,this.alphaDiscardMode=y.JJ.Opaque,this.doubleSidedMode=ye.q.None,this.pbrMode=we.f7.Disabled,this.cullFace=y.Vr.None,this.transparencyPassType=y.Am.NONE,this.normalType=Me.h.Attribute,this.textureCoordinateType=Je.N.None,this.customDepthTest=y.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}(0,ut._)([ht({count:Ce.H.COUNT})],mt.prototype,"output",void 0),(0,ut._)([ht({count:y.JJ.COUNT})],mt.prototype,"alphaDiscardMode",void 0),(0,ut._)([ht({count:ye.q.COUNT})],mt.prototype,"doubleSidedMode",void 0),(0,ut._)([ht({count:we.f7.COUNT})],mt.prototype,"pbrMode",void 0),(0,ut._)([ht({count:y.Vr.COUNT})],mt.prototype,"cullFace",void 0),(0,ut._)([ht({count:y.Am.COUNT})],mt.prototype,"transparencyPassType",void 0),(0,ut._)([ht({count:Me.h.COUNT})],mt.prototype,"normalType",void 0),(0,ut._)([ht({count:Je.N.COUNT})],mt.prototype,"textureCoordinateType",void 0),(0,ut._)([ht({count:y.Gv.COUNT})],mt.prototype,"customDepthTest",void 0),(0,ut._)([ht()],mt.prototype,"spherical",void 0),(0,ut._)([ht()],mt.prototype,"hasVertexColors",void 0),(0,ut._)([ht()],mt.prototype,"hasSymbolColors",void 0),(0,ut._)([ht()],mt.prototype,"hasVerticalOffset",void 0),(0,ut._)([ht()],mt.prototype,"hasSlicePlane",void 0),(0,ut._)([ht()],mt.prototype,"hasSliceHighlight",void 0),(0,ut._)([ht()],mt.prototype,"hasColorTexture",void 0),(0,ut._)([ht()],mt.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,ut._)([ht()],mt.prototype,"hasEmissionTexture",void 0),(0,ut._)([ht()],mt.prototype,"hasOcclusionTexture",void 0),(0,ut._)([ht()],mt.prototype,"hasNormalTexture",void 0),(0,ut._)([ht()],mt.prototype,"hasScreenSizePerspective",void 0),(0,ut._)([ht()],mt.prototype,"hasVertexTangents",void 0),(0,ut._)([ht()],mt.prototype,"hasOccludees",void 0),(0,ut._)([ht()],mt.prototype,"hasMultipassTerrain",void 0),(0,ut._)([ht()],mt.prototype,"hasModelTransformation",void 0),(0,ut._)([ht()],mt.prototype,"offsetBackfaces",void 0),(0,ut._)([ht()],mt.prototype,"vvSize",void 0),(0,ut._)([ht()],mt.prototype,"vvColor",void 0),(0,ut._)([ht()],mt.prototype,"receiveShadows",void 0),(0,ut._)([ht()],mt.prototype,"receiveAmbientOcclusion",void 0),(0,ut._)([ht()],mt.prototype,"textureAlphaPremultiplied",void 0),(0,ut._)([ht()],mt.prototype,"instanced",void 0),(0,ut._)([ht()],mt.prototype,"instancedColor",void 0),(0,ut._)([ht()],mt.prototype,"instancedDoublePrecision",void 0),(0,ut._)([ht()],mt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,ut._)([ht()],mt.prototype,"writeDepth",void 0),(0,ut._)([ht()],mt.prototype,"transparent",void 0),(0,ut._)([ht()],mt.prototype,"enableOffset",void 0),(0,ut._)([ht()],mt.prototype,"cullAboveGround",void 0),(0,ut._)([ht()],mt.prototype,"snowCover",void 0),(0,ut._)([ht({constValue:!0})],mt.prototype,"hasVvInstancing",void 0),(0,ut._)([ht({constValue:!1})],mt.prototype,"useCustomDTRExponentForWater",void 0),(0,ut._)([ht({constValue:!1})],mt.prototype,"supportsTextureAtlas",void 0),(0,ut._)([ht({constValue:!0})],mt.prototype,"useFillLights",void 0);var ft=r(40563);class vt extends ct{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetalnessAndRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Me.h.Attribute,t.doubleSidedMode=ye.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,vt.shader)}}vt.shader=new Qe(ft.R,(()=>r.e(601).then(r.bind(r,50601))));class gt extends Ee.F5{constructor(e){super(e,_t),this.supportsEdges=!0,this.techniqueConfig=new mt,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,Se.U$)().vec3f(L.T.POSITION).vec3f(L.T.NORMAL);return e.hasVertexTangents&&r.vec4f(L.T.TANGENT),t&&r.vec2f(L.T.UV0),e.hasVertexColors&&r.vec4u8(L.T.COLOR),e.hasSymbolColors&&r.vec4u8(L.T.SYMBOLCOLOR),r}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=(0,Se.U$)();return t=e.instancedDoublePrecision?t.vec3f(L.T.MODELORIGINHI).vec3f(L.T.MODELORIGINLO).mat3f(L.T.MODEL).mat3f(L.T.MODELNORMAL):t.mat4f(L.T.MODEL).mat4f(L.T.MODELNORMAL),(0,o.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(L.T.INSTANCECOLOR)),(0,o.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(L.T.INSTANCEFEATUREATTRIBUTE)),t}(this.parameters):null}isVisibleInPass(e){return e!==Te.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Te.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Te.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:i,vvColorEnabled:n}=e,a=(0,o.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||n||i)?!!s||l:r?s?c:l:a||n||i?!!s||l:s?c:l}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=(0,o.pC)(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=(0,o.pC)(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?Me.h.ScreenDerivative:Me.h.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,o.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?y.Vr.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,o.pC)(this.parameters.modelTransformation),e!==Ce.H.Color&&e!==Ce.H.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=ye.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?ye.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?ye.q.WindingOrder:ye.q.None,this.techniqueConfig.instancedColor=(0,o.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?we.f7.Schematic:we.f7.Normal:we.f7.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Pe.ve,this.techniqueConfig.snowCover=this.hasSnowCover(t)),this.techniqueConfig}hasSnowCover(e){return(0,o.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,a,s){if((0,o.pC)(this.parameters.verticalOffset)){const e=i.camera;(0,c.s)(yt,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case Ae.JY.Global:t=(0,c.n)(Ct,yt);break;case Ae.JY.Local:t=(0,c.c)(Ct,St)}let o=0;const s=(0,c.b)(wt,yt,e.eye),l=(0,c.l)(s),d=(0,c.g)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,c.e)(t,d)),o+=(0,je.Hx)(e,l,this.parameters.verticalOffset,u,this.parameters.screenSizePerspective),(0,c.g)(t,t,o),(0,c.t)(Mt,t,i.transform.inverseRotation),n=(0,c.b)(bt,n,Mt),a=(0,c.b)(At,a,Mt)}(0,je.Bw)(e,t,i,n,a,function(e){return(0,o.pC)(e)?(Be.offset=e,Be):null}(i.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?be.TRANSPARENT_MATERIAL:be.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:be.OPAQUE_MATERIAL)||e===be.DRAPED_MATERIAL}createGLMaterial(e){return e.output===Ce.H.Color||e.output===Ce.H.Alpha||e.output===Ce.H.Depth||e.output===Ce.H.Normal||e.output===Ce.H.Shadow||e.output===Ce.H.Highlight?new xt(e):null}createBufferWriter(){return new Tt(this.vertexBufferLayout,this.instanceBufferLayout)}}class xt extends Oe.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?vt:ct,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==Ce.H.Color&&this._output!==Ce.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}const _t=new class extends lt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class Tt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(L.T.POSITION).length}write(e,t,r,i){!function(e,t,r,i,o,n){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case L.T.POSITION:{(0,O.hu)(3===t.size);const e=o.getField(a,h.ct);e&&We(s,t.data,r,e,n);break}case L.T.NORMAL:{(0,O.hu)(3===t.size);const e=o.getField(a,h.ct);e&&qe(s,t.data,i,e,n);break}case L.T.UV0:{(0,O.hu)(2===t.size);const e=o.getField(a,h.Eu);e&&Ve(s,t.data,e,n);break}case L.T.COLOR:{(0,O.hu)(3===t.size||4===t.size);const e=o.getField(a,h.mc);e&&$e(s,t.data,t.size,e,n);break}case L.T.SYMBOLCOLOR:{(0,O.hu)(3===t.size||4===t.size);const e=o.getField(a,h.mc);e&&$e(s,t.data,t.size,e,n);break}case L.T.TANGENT:{(0,O.hu)(4===t.size);const e=o.getField(a,h.ek);e&&ke(s,t.data,i,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const bt=(0,d.c)(),At=(0,d.c)(),St=(0,d.f)(0,0,1),Ct=(0,d.c)(),Mt=(0,d.c)(),yt=(0,d.c)(),wt=(0,d.c)(),Ot=A.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Et(e,t){const r=await async function(e,t){const r=(0,o.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,T.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,S.r9)(i.error),Pt(i.error.details.url)}(e,r,t);const i=await(0,T.q6)((0,_.default)(e,(0,o.Wg)(t)));if(!0===i.ok)return i.value.data;(0,S.r9)(i.error),Pt(i.error)}(e,t);return{resource:r,textures:await Nt(r.textureDefinitions,t)}}function Pt(e){throw new b.Z("",`Request for object resource failed: ${e}`)}function Rt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ot.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ot.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ot.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ot.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ot.warn("Indexed geometries must specify faces"),i=!1;break}default:Ot.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ot.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const n in o)o[n].values||(Ot.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function It(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.pC)(r)&&((0,u.pp)(t,r.getBBMin()),(0,u.pp)(t,r.getBBMax()))})),t}async function Nt(e,t){const r=[];for(const a in e){const i=e[a],n=i.images[0].data;if(!n){Ot.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+n,l="/textureDefinitions/"+a,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:$.e8.REPEAT,t:$.e8.REPEAT},preMultiplyAlpha:Lt(c)!==y.JJ.Opaque},u=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,M.t)(s,t);r.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const i=await Promise.all(r),n={};for(const o of i)n[o.refId]=o;return n}function Lt(e){switch(e){case"mask":return y.JJ.Mask;case"maskAndTransparency":return y.JJ.MaskBlend;case"none":return y.JJ.Opaque;default:return y.JJ.Blend}}function Ht(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Dt=new C.G(1,2,"wosr");var Ft=r(68845),Bt=r(19131),zt=r(69618),Vt=r(92770);async function Gt(e,t){const r=Ut((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Et(r.url,t)),i=function(e,t){const r=[],i=[],n=[],a=[],s=e.resource,l=C.G.parse(s.version||"1.0","wosr");Dt.validate(l);const c=s.model.name,u=s.model.geometries,h=s.materialDefinitions,p=e.textures;let m=0;const f=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!Rt(e))continue;const s=Ht(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],r=e.values;c.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=p&&p[s.texture];if(x&&!f.has(s.texture)){const{image:e,params:t}=x,r=new _e(e,t);a.push(r),f.set(s.texture,r)}const _=f.get(s.texture),T=_?_.id:void 0;let b=n[s.material]?n[s.material][s.texture]:null;if(!b){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=x?Lt(x.alphaChannelUsage):void 0,l={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:y.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),b=new gt(l),n[s.material]||(n[s.material]={}),n[s.material][s.texture]=b}i.push(b);const A=new H(c,g);m+=g.position?g.position.length:0,r.push(A)}return{name:c,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:It(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,g.z)(new v.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,o.U2)(n.model.meta,"ESRI_proxyEllipsoid");n.meta.isEsriSymbolResource&&(0,o.pC)(a)&&n.meta.uri.includes("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const n of i.parts){const i=n.attributes.normal;if((0,o.Wi)(i))return;const a=n.attributes.position,u=a.count,p=(0,d.c)(),m=(0,d.c)(),v=(0,d.c)(),g=(0,f.gS)(h.mc,u),x=(0,f.gS)(h.ct,u),_=(0,s.a)((0,l.c)(),n.transform);for(let o=0;o<u;o++){a.getVec(o,m),i.getVec(o,p),(0,c.m)(m,m,n.transform),(0,c.b)(v,m,t.center),(0,c.G)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),d=Math.min(.45+.55*l*l,1);(0,c.G)(v,v,t.radius),(0,c.m)(v,v,_),(0,c.n)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(v,v,p,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(o,v),g.set(o,0,255*d),g.set(o,1,255*d),g.set(o,2,255*d),g.set(o,3,255)}n.attributes.normal=x,n.attributes.color=g}}}(n,a);const u=n.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:!!n.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:!!n.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Wt(n,u,p,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Wt(n,u,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}const m=Wt(n,u,p);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}function Ut(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Wt(e,t,r,i){const s=e.model,l=(0,a.c)(),c=new Array,d=new Map,v=new Map;return s.lods.forEach(((e,a)=>{if(void 0!==i&&a!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,o.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};c.push(g),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=s.materials.get(e.material),c=(0,o.pC)(e.attributes.texCoord0),_=(0,o.pC)(e.attributes.normal),T=function(e){switch(e){case"BLEND":return y.JJ.Blend;case"MASK":return y.JJ.Mask;case"OPAQUE":case null:case void 0:return y.JJ.Opaque}}(a.alphaMode);if(!d.has(i)){if(c){if((0,o.pC)(a.textureColor)&&!v.has(a.textureColor)){const e=s.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:T!==y.JJ.Opaque};v.set(a.textureColor,new _e(e.data,t))}if((0,o.pC)(a.textureNormal)&&!v.has(a.textureNormal)){const e=s.textures.get(a.textureNormal);v.set(a.textureNormal,new _e(e.data,e.parameters))}if((0,o.pC)(a.textureOcclusion)&&!v.has(a.textureOcclusion)){const e=s.textures.get(a.textureOcclusion);v.set(a.textureOcclusion,new _e(e.data,e.parameters))}if((0,o.pC)(a.textureEmissive)&&!v.has(a.textureEmissive)){const e=s.textures.get(a.textureEmissive);v.set(a.textureEmissive,new _e(e.data,e.parameters))}if((0,o.pC)(a.textureMetallicRoughness)&&!v.has(a.textureMetallicRoughness)){const e=s.textures.get(a.textureMetallicRoughness);v.set(a.textureMetallicRoughness,new _e(e.data,e.parameters))}}const n=a.color[0]**(1/Ft.K),l=a.color[1]**(1/Ft.K),u=a.color[2]**(1/Ft.K),h=a.emissiveFactor[0]**(1/Ft.K),p=a.emissiveFactor[1]**(1/Ft.K),m=a.emissiveFactor[2]**(1/Ft.K),f=(0,o.pC)(a.textureColor)&&c?v.get(a.textureColor):null;d.set(i,new gt({...t,transparent:T===y.JJ.Blend,customDepthTest:y.Gv.Lequal,textureAlphaMode:T,textureAlphaCutoff:a.alphaCutoff,diffuse:[n,l,u],ambient:[n,l,u],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?y.Vr.None:y.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:_?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(f)?f.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,o.pC)(a.textureNormal)&&c?v.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.pC)(f)&&!!f.params.preMultiplyAlpha,occlusionTextureId:(0,o.pC)(a.textureOcclusion)&&c?v.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(a.textureEmissive)&&c?v.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(a.textureMetallicRoughness)&&c?v.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[h,p,m],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const b=function(e,t){switch(t){case $.MX.TRIANGLES:return(0,x.nh)(e);case $.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case $.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),A=e.attributes.position.count,S=(0,f.gS)(h.ct,A);(0,p.t)(S,e.attributes.position,e.transform);const C=[[L.T.POSITION,{data:S.typedBuffer,size:S.elementCount,exclusive:!0}]],M=[[L.T.POSITION,b]];if((0,o.pC)(e.attributes.normal)){const t=(0,f.gS)(h.ct,A);(0,n.a)(l,e.transform),(0,p.a)(t,e.attributes.normal,l),C.push([L.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([L.T.NORMAL,b])}if((0,o.pC)(e.attributes.tangent)){const t=(0,f.gS)(h.ek,A);(0,n.a)(l,e.transform),(0,m.t)(t,e.attributes.tangent,l),C.push([L.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([L.T.TANGENT,b])}if((0,o.pC)(e.attributes.texCoord0)){const t=(0,f.gS)(h.Eu,A);(0,Bt.n)(t,e.attributes.texCoord0),C.push([L.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([L.T.UV0,b])}if((0,o.pC)(e.attributes.color)){const t=(0,f.gS)(h.mc,A);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,zt.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,zt.f)(t,255,255,255,255);const r=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,p.s)(r,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,Vt.c)(r,e.attributes.color):e.attributes.color instanceof h.mw&&(0,p.s)(r,e.attributes.color,1/256)}C.push([L.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push([L.T.COLOR,b])}const w=new H(C,M);g.stageResources.geometries.push(w),g.stageResources.materials.push(d.get(i)),c&&((0,o.pC)(a.textureColor)&&g.stageResources.textures.push(v.get(a.textureColor)),(0,o.pC)(a.textureNormal)&&g.stageResources.textures.push(v.get(a.textureNormal)),(0,o.pC)(a.textureOcclusion)&&g.stageResources.textures.push(v.get(a.textureOcclusion)),(0,o.pC)(a.textureEmissive)&&g.stageResources.textures.push(v.get(a.textureEmissive)),(0,o.pC)(a.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(a.textureMetallicRoughness))),g.numberOfVertices+=A;const O=w.boundingInfo;(0,o.pC)(O)&&((0,u.pp)(g.boundingBox,O.getBBMin()),(0,u.pp)(g.boundingBox,O.getBBMax()))}))})),c}},49420:(e,t,r)=>{r.d(t,{a9:()=>i});var i;r(16889);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},55158:(e,t,r)=>{r.d(t,{U$:()=>s});var i=r(25158),o=r(48734);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,o.n1)(t.ElementType),n=this.stride;this.fields.set(e,{size:i,constructor:t,offset:n,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},22357:(e,t,r)=>{r.d(t,{q:()=>s});var i=r(71011),o=r(74058),n=r(82999),a=r(98634);function s(e,t){t.output===i.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===i.H.Depth||t.output===i.H.Shadow?(e.include(o.up,t),e.varyings.add("linearDepth","float"),e.vertex.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar))),e.vertex.code.add(a.H`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(a.H`void forwardLinearDepth() {}`)}},83734:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(98634);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},71011:(e,t,r)=>{var i;r.d(t,{H:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(i||(i={}))},33280:(e,t,r)=>{r.d(t,{f5:()=>d});var i=r(92026),o=r(14226),n=r(81949),a=r(11186),s=r(71353),l=r(86471),c=(r(49450),r(98634));function d(e,t){u(e,t,[new l.B("slicePlaneOrigin",((e,r)=>f(t,e,r))),new l.B("slicePlaneBasis1",((e,r)=>v(t,e,r,(0,i.Wg)(r.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,r)=>v(t,e,r,(0,i.Wg)(r.slicePlane)?.basis2)))])}function u(e,t,r){if(!t.hasSlicePlane){const r=c.H`#define rejectBySlice(_pos_) false
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
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}function h(e,t,r){return e.instancedDoublePrecision?(0,a.s)(g,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function p(e,t){return(0,i.pC)(e)?(0,a.b)(x,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?(0,i.pC)(t)?(0,o.j)(T,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r){if((0,i.Wi)(r.slicePlane))return s.Z;const o=h(e,t,r),n=p(o,r.slicePlane),l=m(e,o,r);return(0,i.pC)(l)?(0,a.m)(x,n,l):n}function v(e,t,r,o){if((0,i.Wi)(o)||(0,i.Wi)(r.slicePlane))return s.Z;const n=h(e,t,r),l=p(n,r.slicePlane),c=m(e,n,r);return(0,i.pC)(c)?((0,a.a)(_,o,l),(0,a.m)(x,l,c),(0,a.m)(_,_,c),(0,a.b)(_,_,x)):o}const g=(0,s.c)(),x=(0,s.c)(),_=(0,s.c)(),T=(0,n.c)()},94951:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(98634);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasModelTransformation:!1,linearDepth:!1};if(t.hasModelTransformation)return t.linearDepth?void e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.linearDepth?e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},81221:(e,t,r)=>{r.d(t,{f:()=>h});var i=r(11186),o=r(71353),n=r(71011),a=r(27254),s=r(86471),l=r(98634),c=r(8654),d=r(4760),u=r(43411);function h(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(d.T.MODELORIGINHI,"vec3"),e.attributes.add(d.T.MODELORIGINLO,"vec3"),e.attributes.add(d.T.MODEL,"mat3"),e.attributes.add(d.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(a.$,t),r.uniforms.add(new s.B("viewOriginHi",((e,t)=>(0,u.U8)((0,i.s)(p,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),p)))),r.uniforms.add(new s.B("viewOriginLo",((e,t)=>(0,u.GB)((0,i.s)(p,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),p))))),r.code.add(l.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(l.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?l.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(l.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===n.H.Normal&&(r.uniforms.add(new c.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),r.code.add(l.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(l.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const p=(0,o.c)()},73782:(e,t,r)=>{r.d(t,{O:()=>s,h:()=>n});var i=r(98634);function o(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var n,a=r(4760);function s(e,t){t.normalType===n.Attribute&&(e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),t.normalType===n.CompressedAttribute&&(e.include(o),e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===n.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(n||(n={}))},52276:(e,t,r)=>{r.d(t,{f:()=>n});var i=r(98634),o=r(4760);function n(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},53230:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(49420),o=r(98634);function n(e){e.vertex.code.add(o.H`
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
  `)}var a=r(99339),s=r(4760),l=r(45639);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},60113:(e,t,r)=>{r.d(t,{D:()=>s,N:()=>i});var i,o=r(41644),n=r(98634),a=r(4760);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case i.None:return void e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);default:(0,o.Bg)(t.textureCoordinateType);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(i||(i={}))},48655:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(98634),o=r(4760);function n(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85380:(e,t,r)=>{r.d(t,{Bb:()=>c,d4:()=>d});var i=r(11873),o=(r(67077),r(73782)),n=r(74058),a=r(98634),s=r(82644),l=r(35522);function c(e,t){t.normalType===o.h.Attribute||t.normalType===o.h.CompressedAttribute?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new s.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(a.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===o.h.Ground?(e.include(n.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?a.H`normalize(vPositionWorldCameraRelative);`:a.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(a.H`void forwardNormal() {}`)}class d extends n.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.c)()}}},74058:(e,t,r)=>{r.d(t,{su:()=>f,up:()=>m});var i=r(11873),o=r(81949),n=(r(8229),r(71353)),a=r(52276),s=r(27254),l=r(86471),c=r(49450),d=r(98634),u=r(82644),h=r(35522),p=r(8654);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new p.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
}`)}class f extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(41644),o=r(60113),n=r(98634);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.H`#ifndef GL_EXT_shader_texture_lod
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
  `),t.textureCoordinateType){case o.N.Default:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
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
}`)}function l(e){return(0,i.s)(c,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const c=(0,o.c)();var d=r(82552);function u(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new n.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(h,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new n.N("screenSizePerspectiveAlignment",(e=>l(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,d.h)(e.vertex,t)),r.code.add(a.H`
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
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const h=(0,o.c)()},93629:(e,t,r)=>{r.d(t,{s:()=>b});var i=r(71011),o=r(33280),n=r(94951),a=r(73782),s=r(60113),l=r(85380),c=r(78980),d=r(98634);function u(e,t){e.fragment.include(c.n),t.output===i.H.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===i.H.Depth&&e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}r(6394);var h=r(67077),p=r(82999),m=r(19253);const f=(0,h.f)(1,1,0,1),v=(0,h.f)(1,0,1,1);function g(e){e.fragment.uniforms.add(new m.A("depthTex",((e,t)=>t.highlightDepthTexture))),e.fragment.uniforms.add(new p.A("highlightViewportPixelSz",((e,t)=>t.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",f).add("unoccludedHighlightFlag","vec4",v),e.fragment.code.add(d.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}var x=r(10758),_=r(65974),T=r(82552);function b(e,t){const r=e.vertex.code,c=e.fragment.code,h=t.hasModelTransformation;t.output!==i.H.Depth&&t.output!==i.H.Shadow||((0,T.S)(e,t),e.include(n.w,{linearDepth:!0,hasModelTransformation:h}),e.include(s.D,t),e.include(x.k,t),e.include(u,t),e.include(o.f5,t),e.vertex.uniforms.add(new p.A("nearFar",((e,t)=>t.camera.nearFar))),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),r.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${h?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(_.z,t),c.add(d.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===i.H.Normal&&((0,T.S)(e,t),e.include(n.w,{linearDepth:!1,hasModelTransformation:h}),e.include(a.O,t),e.include(l.Bb,t),e.include(s.D,t),e.include(x.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===a.h.Attribute?d.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.f5,t),e.include(_.z,t),c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===a.h.ScreenDerivative?d.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===i.H.Highlight&&((0,T.S)(e,t),e.include(n.w,{linearDepth:!1,hasModelTransformation:h}),e.include(s.D,t),e.include(x.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),r.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.f5,t),e.include(_.z,t),e.include(g),c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},38171:(e,t,r)=>{r.d(t,{Q:()=>u});var i=r(60113),o=r(27284),n=r(96658),a=r(98634),s=r(69253),l=r(19253),c=r(99340),d=r(4760);function u(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(d.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.q.WindingOrder?r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),t.textureCoordinateType!==i.N.None){e.include(o.i,t);const i=t.supportsTextureAtlas;r.uniforms.add(t.pbrTextureBindType===c.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),i):(0,s.F)("normalTexture",(e=>e.textureNormal),i)),r.code.add(a.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},30694:(e,t,r)=>{r.d(t,{K:()=>l});var i=r(90045),o=r(67077),n=r(95276),a=r(98634),s=r(19253);function l(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add([new s.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture)),new n.N("viewportPixelSz",((e,t)=>(0,i.s)(c,t.camera.fullViewport[0],t.camera.fullViewport[1],1/t.ssaoHelper.width,1/t.ssaoHelper.height)))]),r.code.add(a.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):r.code.add(a.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const c=(0,o.c)()},75395:(e,t,r)=>{r.d(t,{X:()=>S});var i=r(11186),o=r(71353),n=r(90045),a=r(67077),s=r(41481),l=r(49450),c=r(95276),d=r(98634);function u(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,i.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add([new c.N("lightingAmbientSH_R",((e,t)=>(0,n.s)(p,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.N("lightingAmbientSH_G",((e,t)=>(0,n.s)(p,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.N("lightingAmbientSH_B",((e,t)=>(0,n.s)(p,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(r.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,i.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.N("lightingAmbientSH_R1",((e,t)=>(0,n.s)(p,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.N("lightingAmbientSH_G1",((e,t)=>(0,n.s)(p,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.N("lightingAmbientSH_B1",((e,t)=>(0,n.s)(p,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.N("lightingAmbientSH_R2",((e,t)=>(0,n.s)(p,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.N("lightingAmbientSH_G2",((e,t)=>(0,n.s)(p,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.N("lightingAmbientSH_B2",((e,t)=>(0,n.s)(p,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,o.c)(),p=(0,a.c)();var m=r(30694),f=r(58406);function v(e,t){const r=e.fragment;t.isGround?r.uniforms.add(new f.p("lightingFixedFactor",((e,t)=>(1-t.lighting.groundLightingFactor)*(1-t.lighting.globalFactor)))):r.constants.add("lightingFixedFactor","float",0),r.uniforms.add([new l.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new l.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),r.code.add(d.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var g=r(2116),x=r(85586),_=r(61809),T=r(99340);class b extends _.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var A=r(70754);function S(e,t){const r=e.fragment;e.include(m.K,t),t.pbrMode!==s.f7.Disabled&&e.include(g.T,t),e.include(u,t),r.constants.add("ambientBoostFactor","float",A.V),e.include(x.e),r.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===s.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.uniforms.add(new l.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),r.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.uniforms.add([new f.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new l.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),r.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===s.f7.Disabled||t.pbrMode===s.f7.WaterOnIntegratedMesh?(e.include(v,t),r.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||(r.code.add(d.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
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
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new f.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new f.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===s.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},18211:(e,t,r)=>{r.d(t,{l:()=>l});var i=r(78980),o=r(98634);function n(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}var a=r(82999),s=r(19253);function l(e,t){t.hasMultipassTerrain&&(e.fragment.include(n),e.fragment.uniforms.add(new s.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new a.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(o.H`
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
}`)}var n=r(41481),a=r(85586);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode===n.f7.Water||t.pbrMode===n.f7.WaterOnIntegratedMesh?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
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
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
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
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
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
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>u,jV:()=>h});var i=r(8229),o=r(27284),n=r(86471),a=r(49450),s=r(98634),l=r(69253),c=r(19253),d=r(99340);r(25278);(0,i.f)(0,.6,.2);var u;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(u||(u={}));function h(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===u.Normal&&i&&e.include(o.i,t),t.pbrMode!==u.Schematic)if(t.pbrMode!==u.Disabled){if(t.pbrMode===u.Normal){r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas,o=t.pbrTextureBindType;t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add(o===d.P.Pass?(0,c.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(s.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(o===d.P.Pass?(0,c.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(s.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(o===d.P.Pass?(0,c.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(s.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(o===d.P.Pass?[new a.J("emissionFactor",(e=>e.emissiveFactor)),new a.J("mrrFactors",(e=>e.mrrFactors))]:[new n.B("emissionFactor",(e=>e.emissiveFactor)),new n.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},85586:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(98634);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},87920:(e,t,r)=>{r.d(t,{XE:()=>p,hb:()=>h});r(71353);var i=r(78980),o=r(95276),n=r(58406),a=r(99339),s=r(98634),l=r(61809),c=r(99340);class d extends l.x{constructor(e,t,r,i){switch(t){case c.P.Pass:case c.P.Draw:return void super(e,"mat4",t,((t,i,o)=>t.setUniformMatrix4fv(e,r(i,o))),i)}}}var u=r(19253);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",c.P.Pass,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",c.P.Draw,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(i.n),t.uniforms.add([new u.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances)),new n.p("depthHalfPixelSz",((e,t)=>.5/t.shadowMap.textureSize))]),t.code.add(s.H`int chooseCascade(float depth, out mat4 mat) {
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
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
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
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
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
}`);break;case s.JJ.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},27254:(e,t,r)=>{r.d(t,{$:()=>n,I:()=>a});var i=r(93169),o=r(98634);function n(e,t){let{code:r}=e;t.doublePrecisionRequiresObfuscation?r.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}function a(e){return!!(0,i.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},14282:(e,t,r)=>{r.d(t,{a:()=>a});var i=r(71011),o=r(98634),n=r(37825);function a(e,t){const r=o.H`
  /*
  *  ${t.name}
  *  ${t.output===i.H.Color?"RenderOutput: Color":t.output===i.H.Depth?"RenderOutput: Depth":t.output===i.H.Shadow?"RenderOutput: Shadow":t.output===i.H.Normal?"RenderOutput: Normal":t.output===i.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,n.CG)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},98082:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(49420),o=r(98634);function n(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}},82552:(e,t,r)=>{r.d(t,{h:()=>p,S:()=>m});var i=r(14226),o=r(92733),n=r(11186),a=r(71353),s=r(86471),l=r(49450),c=r(61809),d=r(99340);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var h=r(8654);function p(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,n.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(e.vertex.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix))),t.instancedDoublePrecision){const t=(e,t)=>(0,n.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]);e.vertex.uniforms.add(new h.g("view",((e,r)=>(0,i.j)(f,r.camera.viewMatrix,t(e,r)))));const r=new l.J("localOrigin",t);return e.vertex.uniforms.add(r),r}e.vertex.uniforms.add(new u("view",((e,t)=>(0,i.j)(f,t.camera.viewMatrix,e.origin))));const r=new s.B("localOrigin",(e=>e.origin));return e.vertex.uniforms.add(r),r}const f=(0,o.c)(),v=(0,a.c)()},82999:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},86471:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Draw,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},49450:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},95276:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"vec4",o.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},58406:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"float",o.P.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},99339:(e,t,r)=>{r.d(t,{_:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"int",o.P.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},82644:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},35522:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},8654:(e,t,r)=>{r.d(t,{g:()=>n});var i=r(61809),o=r(99340);class n extends i.x{constructor(e,t){super(e,"mat4",o.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},54118:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(61809);class o extends i.x{constructor(e){super(e,"mat4")}}},64201:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(10064),o=r(32718),n=r(92026);const a=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this.includedModules=new Map}include(e,t){if(this.includedModules.has(e)){const r=this.includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this.includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new p,this.extensions=new m,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?g:v,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,n.pC)(i)&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,n.pC)(i)&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r)=>{for(let n=0;n<o;++n)i[n](t,e,r)}}}class c{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}_add(e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}generateSource(){return Array.from(this._entries.values()).map((e=>(0,n.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new d,this.constants=new f}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class p{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=f._numberToFloatStr(r);break;case"int":i=f._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])},                            ${f._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])},                            ${f._numberToFloatStr(r[2])},                            ${f._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])},                             ${f._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])},                             ${f._numberToIntStr(r[2])},                             ${f._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>f._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"},69253:(e,t,r)=>{r.d(t,{F:()=>d});var i=r(92026),o=r(88396),n=r(6394),a=r(61809),s=r(99340);class l extends a.x{constructor(e,t){super(e,"vec2",s.P.Draw,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}class c extends a.x{constructor(e,t){super(e,"sampler2D",s.P.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function d(e,t,r){const a=[new c(e,t)];if(r){const r=e+"Size";a.push(new l(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.a)(u,a.descriptor.width,a.descriptor.height):n.Z})))}return a}const u=(0,n.a)()},19253:(e,t,r)=>{r.d(t,{A:()=>c,J:()=>d});var i=r(92026),o=r(88396),n=r(6394),a=r(82999),s=r(61809),l=r(99340);class c extends s.x{constructor(e,t){super(e,"sampler2D",l.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function d(e,t,r){const s=[new c(e,t)];if(r){const r=e+"Size";s.push(new a.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.a)(u,a.descriptor.width,a.descriptor.height):n.Z})))}return s}const u=(0,n.a)()},61809:(e,t,r)=>{r.d(t,{x:()=>n});var i=r(92026),o=r(99340);class n{constructor(e,t,r,n){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.name=e,this.type=t,this.arraySize=a,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},(0,i.pC)(r)&&(0,i.pC)(n)&&(this.bind[r]=n)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},98634:(e,t,r)=>{r.d(t,{H:()=>o,K:()=>i});class i{}function o(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];let o="";for(let n=0;n<r.length;n++)o+=e[n]+r[n];return o+=e[e.length-1],o}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},99340:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},1395:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(95439);class o{constructor(){this.id=(0,i.D)()}unload(){}}},79100:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(i||(i={}))},7566:(e,t,r)=>{r.d(t,{i:()=>o});var i=r(4760);const o=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},25278:(e,t,r)=>{r.d(t,{F:()=>s});var i=r(92026),o=r(66978),n=r(98634),a=r(68401);class s extends class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._output;return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(r,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new l((0,i.pC)(this._texture)?this._texture.glTexture:null,(0,i.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,i.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,i.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,i.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,i.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,i.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,o.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends n.K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},56529:(e,t,r)=>{r.d(t,{F5:()=>c,yD:()=>i});var i,o=r(92026),n=(r(98634),r(1395)),a=r(79100),s=r(7566),l=r(45639);class c extends n.c{constructor(e,t){super(),this.type=a.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=s.i,this._parameters=(0,l.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,l.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,o.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(i||(i={}))},78041:(e,t,r)=>{r.d(t,{Bh:()=>p,IB:()=>l,j7:()=>c,je:()=>h,ve:()=>d,wu:()=>a});var i=r(68401),o=r(8548),n=r(36207);const a=(0,n.wK)(o.zi.SRC_ALPHA,o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA,o.zi.ONE_MINUS_SRC_ALPHA),s=(0,n.if)(o.zi.ONE,o.zi.ONE),l=(0,n.if)(o.zi.ZERO,o.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.Am.FrontFace?null:e===i.Am.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.wb.LESS;return e===i.Am.NONE||e===i.Am.FrontFace?t:o.wb.LEQUAL}},97731:(e,t,r)=>{r.d(t,{hu:()=>o,yK:()=>n});r(6394),r(90045);(0,r(67077).c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new i(t)}function n(e,t,r,i){let o,n=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];n>a&&(o=n,n=a,a=o);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(o=s,s=l,l=o),n>l||s>a)return!1;s>n&&(n=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(o=c,c=d,d=o),!(n>d||c>a)&&(d<a&&(a=d),!(a<0))}},4760:(e,t,r)=>{var i;r.d(t,{T:()=>i}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(i||(i={}))},68401:(e,t,r)=>{var i,o,n,a,s,l,c,d,u,h,p,m,f,v;r.d(t,{Am:()=>a,CE:()=>p,Gv:()=>o,JJ:()=>f,MX:()=>h,Rw:()=>l,Vr:()=>i,hU:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(n||(n={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(a||(a={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(d||(d={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(p||(p={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(m||(m={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(f||(f={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},70754:(e,t,r)=>{r.d(t,{V:()=>o});r(11186);var i=r(71353);r(16889);(0,i.c)();const o=.4;(0,i.c)()},45639:(e,t,r)=>{r.d(t,{FZ:()=>P,Uf:()=>w,Bw:()=>x,LO:()=>O,Hx:()=>y});var i=r(63780),o=r(16889),n=r(92026),a=r(11186),s=r(71353),l=r(41414),c=r(68401);r(50951);function d(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return p.scale=Math.min(i.divisor/(t-i.offset),1),p.factor=function(e){return Math.abs(e*e*e)}(e),p.minPixelSize=i.minPixelSize,p.paddingPixels=o,p}function u(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function h(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),u(e,t))}(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const p={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var m=r(97731),f=r(4760),v=(r(14226),r(81949));r(43411);new Float64Array(3),new Float32Array(6),(0,v.c)();const g=(0,l.Ue)();function x(e,t,r,i,o,a,s){if(!function(e){return!!(0,n.pC)(e)&&!e.visible}(t))if(e.boundingInfo){(0,m.hu)(e.primitiveType===c.MX.Triangle);const t=r.tolerance;T(e.boundingInfo,i,o,t,a,s)}else{const t=e.indices.get(f.T.POSITION),r=e.vertexAttributes.get(f.T.POSITION);A(i,o,0,t.length/3,t,r,void 0,a,s)}}const _=(0,s.c)();function T(e,t,r,i,o,s){if((0,n.Wi)(e))return;const c=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,_);if((0,l.op)(g,e.getBBMin()),(0,l.Tn)(g,e.getBBMax()),(0,n.pC)(o)&&o.applyToAabb(g),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<o)}(e,t,r,i,1/0)}(g,t,c,i)){const{primitiveIndices:n,indices:a,position:l}=e,c=n?n.length:a.length/3;if(c>R){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&T(n[e],t,r,i,o,s);return}}A(t,r,0,c,a,l,n,o,s)}}const b=(0,s.c)();function A(e,t,r,i,o,a,s,l,c){if(s)return function(e,t,r,i,o,a,s,l,c){const d=a.data,u=a.stride||a.size,h=e[0],p=e[1],m=e[2],f=t[0]-h,v=t[1]-p,g=t[2]-m;for(let x=r;x<i;++x){const e=s[x];let t=3*e,r=u*o[t++],i=d[r++],a=d[r++],_=d[r];r=u*o[t++];let T=d[r++],A=d[r++],S=d[r];r=u*o[t];let C=d[r++],y=d[r++],w=d[r];(0,n.pC)(l)&&([i,a,_]=l.applyToVertex(i,a,_,x),[T,A,S]=l.applyToVertex(T,A,S,x),[C,y,w]=l.applyToVertex(C,y,w,x));const O=T-i,E=A-a,P=S-_,R=C-i,I=y-a,N=w-_,L=v*N-I*g,H=g*R-N*f,D=f*I-R*v,F=O*L+E*H+P*D;if(Math.abs(F)<=Number.EPSILON)continue;const B=h-i,z=p-a,V=m-_,G=B*L+z*H+V*D;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const U=z*P-E*V,W=V*O-P*B,q=B*E-O*z,k=f*U+v*W+g*q;if(F>0){if(k<0||G+k>F)continue}else if(k>0||G+k<F)continue;const $=(R*U+I*W+N*q)/F;$>=0&&c($,M(O,E,P,R,I,N,b),e,!1)}}(e,t,r,i,o,a,s,l,c);const d=a.data,u=a.stride||a.size,h=e[0],p=e[1],m=e[2],f=t[0]-h,v=t[1]-p,g=t[2]-m;for(let x=r,_=3*r;x<i;++x){let e=u*o[_++],t=d[e++],r=d[e++],i=d[e];e=u*o[_++];let a=d[e++],s=d[e++],T=d[e];e=u*o[_++];let A=d[e++],S=d[e++],C=d[e];(0,n.pC)(l)&&([t,r,i]=l.applyToVertex(t,r,i,x),[a,s,T]=l.applyToVertex(a,s,T,x),[A,S,C]=l.applyToVertex(A,S,C,x));const y=a-t,w=s-r,O=T-i,E=A-t,P=S-r,R=C-i,I=v*R-P*g,N=g*E-R*f,L=f*P-E*v,H=y*I+w*N+O*L;if(Math.abs(H)<=Number.EPSILON)continue;const D=h-t,F=p-r,B=m-i,z=D*I+F*N+B*L;if(H>0){if(z<0||z>H)continue}else if(z>0||z<H)continue;const V=F*O-w*B,G=B*y-O*D,U=D*w-y*F,W=f*V+v*G+g*U;if(H>0){if(W<0||z+W>H)continue}else if(W>0||z+W<H)continue;const q=(E*V+P*G+R*U)/H;q>=0&&c(q,M(y,w,O,E,P,R,b),x,!1)}}const S=(0,s.c)(),C=(0,s.c)();function M(e,t,r,i,o,n,s){return(0,a.s)(S,e,t,r),(0,a.s)(C,i,o,n),(0,a.f)(s,S,C),(0,a.n)(s,s),s}function y(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;(0,n.pC)(a)&&(s=function(e,t,r,i){return h(e,d(t,r,i))}(s,i,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function w(e,t){const r=t?w(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=E(t)),null==t&&i in r||(r[i]=t)}return r}function O(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.Vx)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function E(e){const t=[];return e.forEach((e=>t.push(e))),t}const P={multiply:1,ignore:2,replace:3,tint:4},R=1e3},61109:(e,t,r)=>{r.d(t,{G:()=>i});class i{constructor(e,t,r,i,o){let n=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=o,this.normalized=n,this.divisor=a}}},43411:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:()=>n,LF:()=>i,U8:()=>o});const a=new Float32Array(2)},36207:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>n,jp:()=>V,sm:()=>T,wK:()=>a,zp:()=>c});var i=r(68401),o=r(8548);function n(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.db.ADD,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.db.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o.db.ADD,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function p(e){return M.intern(e)}function m(e){return w.intern(e)}function f(e){return E.intern(e)}function v(e){return R.intern(e)}function g(e){return N.intern(e)}function x(e){return H.intern(e)}function _(e){return F.intern(e)}function T(e){return z.intern(e)}class b{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function A(e){return"["+e.join(",")+"]"}const S=new b(C,(e=>({__tag:"Blending",...e})));function C(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const M=new b(y,(e=>({__tag:"Culling",...e})));function y(e){return e?A([e.face,e.mode]):null}const w=new b(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?A([e.factor,e.units]):null}const E=new b(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?A([e.func]):null}const R=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?A([e.r,e.g,e.b,e.a]):null}const F=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?A([e.mask]):null}const z=new b((function(e){return e?A([C(e.blending),y(e.culling),O(e.polygonOffset),P(e.depthTest),I(e.stencilTest),L(e.depthWrite),D(e.colorWrite),B(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:p(e.culling),polygonOffset:m(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:_(e.stencilWrite)})));class V{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=128.5f23d4e0.chunk.js.map