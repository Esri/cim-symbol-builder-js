const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SSAOBlur.glsl-B0OwwfiT.js","./VertexColor.glsl-kMrlrQ7p.js","./arrayUtils-B0XE_S9U.js","./compilerUtils-v_b8Y8TS.js","./string-BMjYH0yQ.js","./typedArrayUtil-CCxBF8Zf.js","./mathUtils-DR0Fu_aL.js","./tslib.es6-qUHyP9zl.js","./Accessor-zYpqlCzJ.js","./Error-BHEe1KT4.js","./handleUtils-Vk04vr1l.js","./promiseUtils-mkxtc0w5.js","./ensureType-BFg11ELB.js","./MapUtils-deRJXRqb.js","./ObservableBase-CUXK8P9Q.js","./jsonMap-YPqQJJkw.js","./iteratorUtils-DBcVBxFg.js","./scheduling-D3L0ELcq.js","./nextTick-e2wXLyPh.js","./PooledArray-CTqJLNLZ.js","./time-DFRR6PQm.js","./vec2-BA-LEgcg.js","./common-P5YjxI0E.js","./mat3-AUeZxTOE.js","./mat3f64-0nIg8LsN.js","./screenUtils-xZ_8ydnt.js","./Polygon-BWq3jBFs.js","./Extent-Bv-n5CVC.js","./Point-DjO8cDZ0.js","./JSONSupport-hTVhdGMF.js","./SpatialReference-CIyCFrUG.js","./units-DwR45CpH.js","./Ellipsoid-Co4rBm1M.js","./spatialReferenceUtils-Bh6NHsAv.js","./pe-BLpm-Z-V.js","./assets-runngMVa.js","./request-CxKUGKEk.js","./centroid-DeYgFA4E.js","./coordsUtils-CAt0z213.js","./curveUtils-Cl8O0kR9.js","./zmUtils-Dz9p0SjY.js","./boundsUtils-Cx2FmC0g.js","./aaBoundingRect-CUZ-ALsn.js","./curveExtent-BbfGh2oh.js","./ellipticArc7Utils-aZnhA3FX.js","./vec4-Xgyc9IxX.js","./vec4f64-BVLRhYcJ.js","./guards-1OFa44Mn.js","./vec3f64-CbPwldcz.js","./mat4-CmtBNVDy.js","./vec3-mgEpaRyZ.js","./mat4f64-E_FXCKxO.js","./aaBoundingBox-px6nwz1j.js","./DoubleArray-3j18yY5S.js","./lengthUtils-Bb2QXcO9.js","./Texture-D1O_kIYy.js","./enums-DkCFWTlr.js","./vec2f64-C5Ma3aci.js","./Indices-CLqnxyCN.js","./vectorStacks-BrpRk3Kn.js","./quatf64-k5wgVIIU.js","./ray-BoVkESg_.js","./lineSegment-BKC_hj3F.js","./getEmissions.glsl-yL67a6JD.js","./NoParameters-ZDc3QXO4.js","./Texture2DPassUniform-DmlRZeJi.js","./colorUtils-DAQ0jxKw.js","./sphere-aA8i3Ck5.js","./plane-DxF7WFg4.js","./mathUtils-DNa5017A.js","./InterleavedLayout-DCoaJu4J.js","./BufferView-DLXj3zbm.js","./types-Ct5BpG05.js","./VertexElementDescriptor-DVcI4qMB.js","./VertexAttributeLocations-DIdXoBZ2.js","./AlphaCutoff-oLlTLP5G.js","./RenderingContext-DII_kTco.js","./ProgramCache-Bch_IMWe.js","./VertexArrayObject-UvwJjR8z.js","./VertexBuffer-DfXDjebB.js","./DebugRendererInfo-IzJAyK7D.js","./doublePrecisionUtils-Cq7UTe-C.js","./GLTextureMaterial-4zQZ_zQR.js","./intersectWithPolygonOffset-Cb5WCdc0.js","./frustumPlanes-DgXNUe6h.js","./SSAO.glsl-oiCrdVRj.js"])))=>i.map(i=>d[i]);
import{S as e,d as t,f as n,g as r,l as i,m as a,p as o,s,v as c,x as l,y as u}from"./GLTextureMaterial-4zQZ_zQR.js";import{a as d,i as f}from"./Texture2DPassUniform-DmlRZeJi.js";import{At as p,Ot as m,W as h,pt as g}from"./VertexColor.glsl-kMrlrQ7p.js";import{r as _}from"./tslib.es6-qUHyP9zl.js";import{v}from"./mathUtils-DR0Fu_aL.js";import{D as y}from"./promiseUtils-mkxtc0w5.js";import{r as b,s as x}from"./reactiveUtils-C42zI24e.js";import{t as S}from"./time-DFRR6PQm.js";import{E as C,T as w}from"./Accessor-zYpqlCzJ.js";import{b as T}from"./vec2-BA-LEgcg.js";import{i as E,n as D,r as O,t as k}from"./ShaderTechnique-mpbe1FOx.js";import{o as A,r as j}from"./RenderingContext-DII_kTco.js";import{a as M}from"./request-CxKUGKEk.js";import{n as N}from"./vec2f64-C5Ma3aci.js";import{t as P}from"./NoParameters-ZDc3QXO4.js";import{n as ee}from"./enums-DkCFWTlr.js";import{s as F,t as I}from"./Texture-D1O_kIYy.js";import{s as L}from"./getEmissions.glsl-yL67a6JD.js";import"./vec3-mgEpaRyZ.js";import{r as R}from"./vec3f64-CbPwldcz.js";var z=class extends O{constructor(){super(...arguments),this.consumes={required:[`normals`]},this.produces=`disabled`}get enabled(){return!this.destroying&&!this.destroyed&&this.produces===E.AMBIENT_ILLUMINATION}get _belowMaxElevation(){return(this.view.state.camera.relativeElevation??1/0)<e}get _useGlobalIllumination(){return this._belowMaxElevation&&this.view.stage.renderer.isFeatureEnabled(11)}get _useSSAO(){return this._belowMaxElevation&&this.view.stage.renderer.isFeatureEnabled(3)}_enable(){this.produces=E.AMBIENT_ILLUMINATION,this.requestRender(1)}_disable(){this.produces=`disabled`,this.requestRender(1)}};_([w()],z.prototype,`consumes`,void 0),_([w()],z.prototype,`produces`,void 0),z=_([C(`esri.views.3d.webgl-engine.effects.AmbientIllumination`)],z);var B=class extends k{constructor(){super(...arguments),this.shader=new D(r,()=>M(()=>import(`./SSAOBlur.glsl-B0OwwfiT.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]),import.meta.url))}initializePipeline(){return j({colorWrite:A})}};B=_([C(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],B);var te=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`,V=class extends P{constructor(){super(...arguments),this.projScale=1}},H=class extends V{constructor(){super(...arguments),this.intensity=1}},U=class extends P{},W=class extends U{constructor(){super(...arguments),this.blurSize=N()}},G=class extends k{constructor(){super(...arguments),this.shader=new D(c,()=>M(()=>import(`./SSAO.glsl-oiCrdVRj.js`),__vite__mapDeps([85,21,6,22,57,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,82,81,83,84]),import.meta.url))}initializePipeline(){return j({colorWrite:A})}};G=_([C(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],G);var K=class extends z{constructor(e){super(e),this._enableTime=S(0),this._passParameters=new H,this._drawParameters=new W}initialize(){let e=Uint8Array.from(atob(te),e=>e.charCodeAt(0)),t=new F(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new I(this.renderingContext,t,e),this.addHandles(b(()=>this._useSSAO,e=>{this._enableTime=S(0),e?this._enable():this._disable()},x))}destroy(){this._passParameters.noiseTexture=y(this._passParameters.noiseTexture)}render(t){let n=t.find(({name:e})=>e===`normals`),r=n?.getTexture(),i=n?.getTexture(ee);if(!r||!i)return;let a=this.techniques.getCompiled(G),o=this.techniques.getCompiled(B);if(!a||!o){this._enableTime=S(performance.now()),this.requestRender(1);return}this._enableTime===0&&(this._enableTime=S(performance.now()));let s=this.renderingContext,c=this.view.qualitySettings.fadeDuration,d=this.bindParameters,f=d.camera,p=f.relativeElevation,m=v((e-p)/(e-l),0,1),h=c>0?Math.min(c,performance.now()-this._enableTime)/c:1,g=h*m;this._passParameters.normalTexture=r,this._passParameters.depthTexture=i,this._passParameters.projScale=1/f.computeScreenPixelSizeAtDistance(1),this._passParameters.intensity=4*q/u(f)**6*g;let _=f.fullViewport[2],y=f.fullViewport[3],b=this.fboCache.acquire(_,y,`ssao input`,2);s.bindFramebuffer(b.fbo),s.setViewport(0,0,_,y),s.bindTechnique(a,d,this._passParameters,this._drawParameters),s.screen.draw();let x=Math.round(_/2),C=Math.round(y/2),w=this.fboCache.acquire(x,C,`ssao blur`,0);s.bindFramebuffer(w.fbo),this._drawParameters.colorTexture=b.getTexture(),T(this._drawParameters.blurSize,0,2/y),s.bindTechnique(o,d,this._passParameters,this._drawParameters),s.setViewport(0,0,x,C),s.screen.draw(),b.release();let D=this.fboCache.acquire(x,C,E.AMBIENT_ILLUMINATION,0);return s.bindFramebuffer(D.fbo),s.setViewport(0,0,_,y),s.setClearColor(1,1,1,0),s.clear(16384),this._drawParameters.colorTexture=w.getTexture(),T(this._drawParameters.blurSize,2/_,0),s.bindTechnique(o,d,this._passParameters,this._drawParameters),s.setViewport(0,0,x,C),s.screen.draw(),s.setViewport4fv(f.fullViewport),w.release(),h<1&&this.requestRender(2),D}};K=_([C(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],K);var q=.5;function J(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new p(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(f`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(f`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Y(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new h(`hasGlobalIlluminationTexture`,e=>e.globalIllumination!=null),new p(`globalIlluminationTexture`,e=>e.globalIllumination?.getTexture())),e.constants.add(`globalIlluminationEmissionNoiseThreshold`,`float`,.01),e.code.add(f`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec3 suppressBlackNoise(vec3 color) {
float peak = max(color.r, max(color.g, color.b));
if (peak <= globalIlluminationEmissionNoiseThreshold) {
return vec3(0.0);
}
float correctedPeak = (peak - globalIlluminationEmissionNoiseThreshold) / (1.0 - globalIlluminationEmissionNoiseThreshold);
return color * (correctedPeak / peak);
}
vec4 readGlobalIlluminationEmission() {
if (!hasGlobalIlluminationTexture) {
return vec4(0.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy);
vec3 color = texelFetch(globalIlluminationTexture, texel, 0).rgb;
return vec4(suppressBlackNoise(color), 0.0);
}`)):e.code.add(f`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}var X={create(){return[0,0,0,0,0,0,0,0,0]},copy(e,t){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8]}};X.create(),X.create(),R();var Z=.4;R();function ne(e){e.code.add(f`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(f`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Q(e){e.constants.add(`ambientBoostFactor`,`float`,Z)}var $=new m(`lightingGlobalFactor`,e=>e.lighting.globalFactor);function re(e,r){let{pbrMode:c,spherical:l,hasColorTexture:u,receiveGlobalIllumination:p}=r;e.include(L),e.include(Y,r),e.include(J,r),c!==0&&e.include(s,r),e.include(a,r),e.include(i),e.include(g,r);let _=!(c===2&&!u);_&&e.include(ne),Q(e),e.uniforms.add(n,$).code.add(f`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${l?f`normalize(vPosWorld)`:f`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),e.uniforms.add(o).code.add(f`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let v=p?`globalIlluminationOcclusion`:`ssao`;switch(e.constants.add(`globalIlluminationDirectFactor`,`float`,p?.55:0),e.constants.add(`globalIlluminationAmbientFactor`,`float`,p?.85:1),e.constants.add(`mainLightIrradianceScale`,`float`,p?.75:1),e.constants.add(`ambientIrradianceScale`,`float`,p?1.5:1),p&&(e.constants.add(`globalIlluminationOcclusionBoost`,`float`,1.2),e.constants.add(`globalIlluminationEmissionBoost`,`float`,2.25),e.constants.add(`globalIlluminationEmissionCompressionWeight`,`float`,.75),e.code.add(f`vec3 evaluateGlobalIlluminationOcclusion() {
return min(globalIlluminationOcclusionBoost * readGlobalIlluminationOcclusion(), 1.0);
}
vec3 evaluateGlobalIlluminationEmission(vec3 albedoLinear) {
vec3 emission = globalIlluminationEmissionBoost * (0.75 * albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
vec3 compressedEmission = emission / (emission + 1.0);
return mix(emission, compressedEmission, globalIlluminationEmissionCompressionWeight);
}`)),c){case 0:case 4:case 3:e.include(t),e.code.add(f`
        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          ${d(p,f`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}

          vec3 mainLighting = mainLightIrradianceScale * applyShading(normal, shadow);
          vec3 ambientLighting = ambientIrradianceScale * calculateAmbientIrradiance(normal) * (1.0 - ${v});
          vec3 albedoLinear = linearizeGamma(albedo);

          vec3 totalLight = mainLighting + ambientLighting + additionalLight;
          totalLight = min(totalLight, vec3(PI));
          vec3 linearColor = vec3((albedoLinear / PI) * totalLight);
          ${d(p,`linearColor += evaluateGlobalIlluminationEmission(albedoLinear);`)}
          return delinearizeGamma(linearColor);
        }
      `);break;case 1:case 2:e.constants.add(`groundReflectance`,`float`,p?.35:.2),e.code.add(f`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;

        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo);
          ${d(p,`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}
      `),r.useFillLights?e.uniforms.add(new h(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(f`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        // Applying AO to both direct and ambient lighting enhances depth perception.
        // This is an artistic choice; physically, AO should only attenuate ambient lighting.
        vec3 directOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${v}), globalIlluminationDirectFactor);
        vec3 ambientOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${v}), globalIlluminationAmbientFactor);
        vec3 mainLightIrradianceComponent = mainLightIrradianceScale * inputs.NdotL * (1.0 - shadow) * mainLightIntensity * directOcclusionFactor;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity * directOcclusionFactor;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ambientIrradianceScale * calculateAmbientIrradiance(normal) * ambientOcclusionFactor + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new m(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new m(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(f`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${v}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.constants.add(`additionalAmbientIrradianceFactor`,`float`,.02),e.code.add(f`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 linearColor = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${d(p,`linearColor += evaluateGlobalIlluminationEmission(inputs.albedoLinear);`)}

      ${_?`linearColor = blackLevelSoftCompression(linearColor, inputs.averageAmbientRadiance);`:`linearColor = max(vec3(0.0), linearColor - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(linearColor);
      }
    `);break;case 5:case 6:e.constants.add(`terrainSpecularity`,`float`,p?.35:.5),e.uniforms.add(n,o).code.add(f`
        const float roughnessTerrain = 0.5;

        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          PBRShadingInfo inputs;
          calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

          ${d(p,`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}

          // Applying AO to both direct and ambient lighting enhances depth perception.
          // This is an artistic choice; physically, AO should only attenuate ambient lighting.
          vec3 directOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${v}), globalIlluminationDirectFactor);
          vec3 ambientOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${v}), globalIlluminationAmbientFactor);
          vec3 mainLightIrradianceComponent = mainLightIrradianceScale * (1.0 - shadow) * inputs.NdotL * mainLightIntensity * directOcclusionFactor;
          vec3 ambientLightIrradianceComponent = ambientIrradianceScale * calculateAmbientIrradiance(normal) * ambientOcclusionFactor + additionalLight;
          vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

          vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
          vec3 diffuseColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

          vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
          vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
          vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
          vec3 specularComponent = terrainSpecularity * specularColor * mainLightRadianceComponent;

          vec3 linearColor = diffuseColor + specularComponent;

          ${d(p,`linearColor += evaluateGlobalIlluminationEmission(inputs.albedoLinear);`)}

          return delinearizeGamma(linearColor);
        }
      `);break;case 7:e.code.add(f`vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDirection, vec3 upDirection) {
return albedo;
}`)}}export{J as i,Q as n,re as r,$ as t};