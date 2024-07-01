
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTwoFactorAuthentication from "../../src/components/MdiTwoFactorAuthentication.vue";

test("MdiTwoFactorAuthentication snapshot", () => {
  const wrapper = mount(MdiTwoFactorAuthentication, {});
  expect(wrapper.html()).toMatchSnapshot();
});
