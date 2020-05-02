namespace :webpacker do
  task :check_npm do
    begin
      npm_version = `npm --version`
      raise Errno::ENOENT if npm_version.blank?
      version = Gem::Version.new(npm_version)

      package_json_path = Rails.root.join("package.json")
      npm_requirement = JSON.parse(File.read(package_json_path)).dig('engines', 'npm')
      requirement = Gem::Requirement.new(npm_requirement)

      unless requirement.satisfied_by?(version)
        $stderr.puts "webpacker requires npm #{requirement} and you are using #{version}"
      end
    rescue Errno::ENOENT
      $stderr.puts 'npm not installed'
    end
  end

  task :npm_install do
    `npm install`
  end
end
