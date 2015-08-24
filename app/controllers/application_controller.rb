class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :configure_permitted_parameters, if: :devise_controller?

  protect_from_forgery with: :exception
	
	protected
    	def configure_permitted_parameters
      	devise_parameter_sanitizer.for(:sign_up) << :name
        devise_parameter_sanitizer.for(:account_update) << :job
      	devise_parameter_sanitizer.for(:account_update) << :avatar
    end

    private 

  	def after_sign_out_path_for(resource_or_scope)
    # If it's admin 
     if user_signed_in? 
        coworks_path
    # Otherwise
     else
        coworks_path
     end
  end
end
