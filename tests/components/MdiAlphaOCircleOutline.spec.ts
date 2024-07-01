
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaOCircleOutline from "../../src/components/MdiAlphaOCircleOutline.vue";

test("MdiAlphaOCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaOCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
