
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaS from "../../src/components/MdiAlphaS.vue";

test("MdiAlphaS snapshot", () => {
  const wrapper = mount(MdiAlphaS, {});
  expect(wrapper.html()).toMatchSnapshot();
});
