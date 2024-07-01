
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartArrowRight from "../../src/components/MdiCartArrowRight.vue";

test("MdiCartArrowRight snapshot", () => {
  const wrapper = mount(MdiCartArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
