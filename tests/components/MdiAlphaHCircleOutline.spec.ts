
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaHCircleOutline from "../../src/components/MdiAlphaHCircleOutline.vue";

test("MdiAlphaHCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaHCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
