
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaKCircleOutline from "../../src/components/MdiAlphaKCircleOutline.vue";

test("MdiAlphaKCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaKCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
