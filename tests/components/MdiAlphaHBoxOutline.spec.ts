
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaHBoxOutline from "../../src/components/MdiAlphaHBoxOutline.vue";

test("MdiAlphaHBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaHBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
