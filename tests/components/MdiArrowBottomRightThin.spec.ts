
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRightThin from "../../src/components/MdiArrowBottomRightThin.vue";

test("MdiArrowBottomRightThin snapshot", () => {
  const wrapper = mount(MdiArrowBottomRightThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
