
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaUCircleOutline from "../../src/components/MdiAlphaUCircleOutline.vue";

test("MdiAlphaUCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaUCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
