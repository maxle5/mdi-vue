
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightThin from "../../src/components/MdiArrowRightThin.vue";

test("MdiArrowRightThin snapshot", () => {
  const wrapper = mount(MdiArrowRightThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
