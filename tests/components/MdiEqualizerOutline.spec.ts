
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEqualizerOutline from "../../src/components/MdiEqualizerOutline.vue";

test("MdiEqualizerOutline snapshot", () => {
  const wrapper = mount(MdiEqualizerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
