
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUUpRight from "../../src/components/MdiArrowUUpRight.vue";

test("MdiArrowUUpRight snapshot", () => {
  const wrapper = mount(MdiArrowUUpRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
