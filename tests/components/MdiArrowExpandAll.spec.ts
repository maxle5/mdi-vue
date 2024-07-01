
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandAll from "../../src/components/MdiArrowExpandAll.vue";

test("MdiArrowExpandAll snapshot", () => {
  const wrapper = mount(MdiArrowExpandAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
