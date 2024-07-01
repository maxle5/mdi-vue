
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGradientHorizontal from "../../src/components/MdiGradientHorizontal.vue";

test("MdiGradientHorizontal snapshot", () => {
  const wrapper = mount(MdiGradientHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
