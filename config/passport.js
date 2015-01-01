var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var LdapStrategy = require('passport-ldapauth').Strategy;

var app = express();

passport.use(new LdapStrategy({
  server: {
    url: 'ldap://localhost:389',
    bindDn: 'cn=root',
    bindCredentials: 'secret',
    searchBase: 'ou=passport-ldapauth',
    searchFilter: '(uid={{username}})'
  }
}));

module.exports = passport;
