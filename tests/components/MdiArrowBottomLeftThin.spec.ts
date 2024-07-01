
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeftThin from "../../src/components/MdiArrowBottomLeftThin.vue";

test("MdiArrowBottomLeftThin snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeftThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
