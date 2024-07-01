
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftBoldOutline from "../../src/components/MdiArrowTopLeftBoldOutline.vue";

test("MdiArrowTopLeftBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
