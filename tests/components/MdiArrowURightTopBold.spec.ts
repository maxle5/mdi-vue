
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowURightTopBold from "../../src/components/MdiArrowURightTopBold.vue";

test("MdiArrowURightTopBold snapshot", () => {
  const wrapper = mount(MdiArrowURightTopBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
