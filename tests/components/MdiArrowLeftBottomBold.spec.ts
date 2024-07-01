
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBottomBold from "../../src/components/MdiArrowLeftBottomBold.vue";

test("MdiArrowLeftBottomBold snapshot", () => {
  const wrapper = mount(MdiArrowLeftBottomBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
