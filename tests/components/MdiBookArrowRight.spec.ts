
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowRight from "../../src/components/MdiBookArrowRight.vue";

test("MdiBookArrowRight snapshot", () => {
  const wrapper = mount(MdiBookArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
