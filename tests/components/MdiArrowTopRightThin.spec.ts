
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightThin from "../../src/components/MdiArrowTopRightThin.vue";

test("MdiArrowTopRightThin snapshot", () => {
  const wrapper = mount(MdiArrowTopRightThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
