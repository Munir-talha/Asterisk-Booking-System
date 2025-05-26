const nextConfig = {
  output: 'export',       // ❌ Static export mode (no server features allowed)
  trailingSlash: true,
  serverActions: true,    // ❌ Conflicts with static export
};
