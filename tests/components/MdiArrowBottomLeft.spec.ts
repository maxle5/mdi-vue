
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeft from "../../src/components/MdiArrowBottomLeft.vue";

test("MdiArrowBottomLeft snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
