
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownThin from "../../src/components/MdiArrowDownThin.vue";

test("MdiArrowDownThin snapshot", () => {
  const wrapper = mount(MdiArrowDownThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
