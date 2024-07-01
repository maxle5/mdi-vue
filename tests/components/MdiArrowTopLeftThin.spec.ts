
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftThin from "../../src/components/MdiArrowTopLeftThin.vue";

test("MdiArrowTopLeftThin snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
