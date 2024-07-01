
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftTopBold from "../../src/components/MdiArrowLeftTopBold.vue";

test("MdiArrowLeftTopBold snapshot", () => {
  const wrapper = mount(MdiArrowLeftTopBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
