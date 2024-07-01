
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipImage from "../../src/components/MdiTooltipImage.vue";

test("MdiTooltipImage snapshot", () => {
  const wrapper = mount(MdiTooltipImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
