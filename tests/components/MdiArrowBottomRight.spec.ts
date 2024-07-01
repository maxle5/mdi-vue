
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRight from "../../src/components/MdiArrowBottomRight.vue";

test("MdiArrowBottomRight snapshot", () => {
  const wrapper = mount(MdiArrowBottomRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
