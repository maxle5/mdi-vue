
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUDownLeft from "../../src/components/MdiArrowUDownLeft.vue";

test("MdiArrowUDownLeft snapshot", () => {
  const wrapper = mount(MdiArrowUDownLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
