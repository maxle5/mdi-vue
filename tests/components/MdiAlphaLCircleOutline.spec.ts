
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaLCircleOutline from "../../src/components/MdiAlphaLCircleOutline.vue";

test("MdiAlphaLCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaLCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
