
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeftBoldOutline from "../../src/components/MdiArrowBottomLeftBoldOutline.vue";

test("MdiArrowBottomLeftBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeftBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
