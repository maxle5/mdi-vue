
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUDownRight from "../../src/components/MdiArrowUDownRight.vue";

test("MdiArrowUDownRight snapshot", () => {
  const wrapper = mount(MdiArrowUDownRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
