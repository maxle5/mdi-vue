
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaACircleOutline from "../../src/components/MdiAlphaACircleOutline.vue";

test("MdiAlphaACircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaACircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
