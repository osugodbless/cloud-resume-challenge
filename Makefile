.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec Godbless --no-session -- sam deploy

deploy-site:
	aws-vault exec Godbless --no-session -- aws s3 sync ./website-content s3://cloud-resume-website-v1

invoke-put:
	sam build && aws-vault exec Godbless --no-session -- sam local invoke CountPutFunction

manual-testing:
	aws-vault exec Godbless -- aws cloudwatch set-alarm-state --alarm-name "<input-alarm-name-here>" --state-value ALARM --state-reason "manual testing"
	aws-vault exec Godbless -- aws cloudwatch set-alarm-state --alarm-name "Lambda-Post-Error-Alarm" --state-value ALARM --state-reason "manual testing"