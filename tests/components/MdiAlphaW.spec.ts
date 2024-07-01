
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaW from "../../src/components/MdiAlphaW.vue";

test("MdiAlphaW snapshot", () => {
  const wrapper = mount(MdiAlphaW, {});
  expect(wrapper.html()).toMatchSnapshot();
});
