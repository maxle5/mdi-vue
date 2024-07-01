
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRight from "../../src/components/MdiArrowRight.vue";

test("MdiArrowRight snapshot", () => {
  const wrapper = mount(MdiArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
