
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowRight from "../../src/components/MdiAccountArrowRight.vue";

test("MdiAccountArrowRight snapshot", () => {
  const wrapper = mount(MdiAccountArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
