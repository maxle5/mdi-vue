
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandHorizontal from "../../src/components/MdiArrowExpandHorizontal.vue";

test("MdiArrowExpandHorizontal snapshot", () => {
  const wrapper = mount(MdiArrowExpandHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
