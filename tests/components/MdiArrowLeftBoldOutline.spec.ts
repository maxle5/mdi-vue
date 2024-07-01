
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBoldOutline from "../../src/components/MdiArrowLeftBoldOutline.vue";

test("MdiArrowLeftBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
