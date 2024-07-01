
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInvertColors from "../../src/components/MdiInvertColors.vue";

test("MdiInvertColors snapshot", () => {
  const wrapper = mount(MdiInvertColors, {});
  expect(wrapper.html()).toMatchSnapshot();
});
