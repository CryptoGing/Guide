# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "pi-new_dev-onboarding"
  spec.version       = "0.1.0"
  spec.authors       = ["CryptoGing"]
  spec.email         = ["develop@minepi.com"]

  spec.summary       = %q{A guide to building on Pi}
  spec.homepage      = "https://github.com/pi-new_dev-onboarding"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|bin|_layouts|_includes|lib|Rakefile|_sass|LICENSE|README)}i) }
  spec.executables   << 'pi-new_dev_onboarding'

  spec.add_development_dependency "bundler", "~> 2.3.5"
  spec.add_runtime_dependency "jekyll", ">= 3.8.5"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
  spec.add_runtime_dependency "rake", ">= 12.3.1", "< 13.1.0"

end
