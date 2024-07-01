
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUUpLeft from "../../src/components/MdiArrowUUpLeft.vue";

test("MdiArrowUUpLeft snapshot", () => {
  const wrapper = mount(MdiArrowUUpLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
