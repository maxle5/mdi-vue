
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarArrowRight from "../../src/components/MdiCarArrowRight.vue";

test("MdiCarArrowRight snapshot", () => {
  const wrapper = mount(MdiCarArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
