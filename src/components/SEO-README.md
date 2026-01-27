# Componentes de SEO e GEO

## Componentes Criados

### 1. SEO.tsx
Componente reutilizável para meta tags de SEO e redes sociais.

**Props:**
- `title`: Título da página (opcional)
- `description`: Descrição da página (opcional)
- `image`: URL da imagem para redes sociais (opcional)
- `url`: URL canônica da página (opcional)
- `type`: Tipo de conteúdo Open Graph (opcional)

**Uso:**
```tsx
<SEO 
  title="Página Específica - Lucas Salles"
  description="Descrição específica da página"
  image="/caminho/para/imagem.jpg"
  url="https://lucassalles.dev/pagina"
/>
```

### 2. StructuredData.tsx
Componente para dados estruturados JSON-LD (Schema.org) otimizado para GEO.

**Schemas Implementados:**
- **Person**: Perfil profissional completo
- **WebSite**: Informações do site
- **ProfessionalService**: Serviços oferecidos

**Props Principais:**
- `name`: Nome completo
- `jobTitle`: Cargo/função
- `alumniOf`: Instituição de ensino
- `knowsAbout`: Array de habilidades/conhecimentos
- `description`: Descrição profissional
- `sameAs`: Array de links de redes sociais

## Benefícios para SEO

1. **Meta Tags Otimizadas**: Title, description, keywords
2. **Open Graph**: Compartilhamento otimizado em redes sociais
3. **Twitter Cards**: Visualização rica no Twitter
4. **Canonical URLs**: Evita conteúdo duplicado
5. **Robots Meta**: Controle de indexação

## Benefícios para GEO (Generative Engine Optimization)

1. **Schema.org Person**: IAs entendem seu perfil profissional
2. **Ocupações Múltiplas**: Developer + Cultural Producer
3. **Habilidades Estruturadas**: Lista clara de competências
4. **Educação**: Associação com UNIFEI
5. **Conquistas**: R$ 1 Milhão em recursos captados
6. **Contexto Cultural**: Ponte entre tecnologia e cultura

## Implementação

Os componentes já estão implementados na página principal (`Index.tsx`) e o `HelmetProvider` foi configurado no `App.tsx`.

Para usar em outras páginas, simplesmente importe e use:

```tsx
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

// Na sua página
<SEO title="Título da Página" />
<StructuredData /> // Usa dados padrão
```

## Próximos Passos

1. **Sitemap**: Gerar sitemap.xml com vite-ssg
2. **robots.txt**: Configurar regras para crawlers
3. **Performance**: Otimizar Core Web Vitals
4. **Analytics**: Implementar Google Analytics/Search Console