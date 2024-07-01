
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftThin from "../../src/components/MdiArrowLeftThin.vue";

test("MdiArrowLeftThin snapshot", () => {
  const wrapper = mount(MdiArrowLeftThin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
