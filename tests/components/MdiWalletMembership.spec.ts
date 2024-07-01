
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletMembership from "../../src/components/MdiWalletMembership.vue";

test("MdiWalletMembership snapshot", () => {
  const wrapper = mount(MdiWalletMembership, {});
  expect(wrapper.html()).toMatchSnapshot();
});
