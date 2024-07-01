
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlurOff from "../../src/components/MdiBlurOff.vue";

test("MdiBlurOff snapshot", () => {
  const wrapper = mount(MdiBlurOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
