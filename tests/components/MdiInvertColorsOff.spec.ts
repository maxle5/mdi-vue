
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvertColorsOff from "../../src/components/MdiInvertColorsOff.vue";

test("MdiInvertColorsOff snapshot", () => {
  const wrapper = mount(MdiInvertColorsOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
