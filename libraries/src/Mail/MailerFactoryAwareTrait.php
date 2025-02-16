<?php

/**
 * Joomla! Content Management System
 *
 * @copyright  (C) 2023 Open Source Matters, Inc. <https://www.joomla.org>
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

namespace Joomla\CMS\Mail;

// phpcs:disable PSR1.Files.SideEffects
\defined('_JEXEC') or die;
// phpcs:enable PSR1.Files.SideEffects

/**
 * Defines the trait for a MailerFactoryInterface aware class.
 *
 * @since  __DEPLOY_VERSION__
 */
trait MailerFactoryAwareTrait
{
    /**
     * MailerFactoryInterface
     *
     * @var    MailerFactoryInterface
     * @since  __DEPLOY_VERSION__
     */
    private $mailerFactory;

    /**
     * Get the MailerFactoryInterface.
     *
     * @return  MailerFactoryInterface
     *
     * @since   __DEPLOY_VERSION__
     * @throws  \UnexpectedValueException May be thrown if the MailerFactory has not been set.
     */
    protected function getMailerFactory(): MailerFactoryInterface
    {
        if ($this->mailerFactory) {
            return $this->mailerFactory;
        }

        throw new \UnexpectedValueException('MailerFactory not set in ' . __CLASS__);
    }

    /**
     * Set the mailer factory to use.
     *
     * @param   ?MailerFactoryInterface  $mailerFactory  The mailer factory to use.
     *
     * @return  void
     *
     * @since   __DEPLOY_VERSION__
     */
    public function setMailerFactory(?MailerFactoryInterface $mailerFactory = null): void
    {
        $this->mailerFactory = $mailerFactory;
    }
}
