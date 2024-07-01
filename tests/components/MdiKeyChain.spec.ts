
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyChain from "../../src/components/MdiKeyChain.vue";

test("MdiKeyChain snapshot", () => {
  const wrapper = mount(MdiKeyChain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
