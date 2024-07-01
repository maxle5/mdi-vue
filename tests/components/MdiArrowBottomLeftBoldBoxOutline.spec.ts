
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeftBoldBoxOutline from "../../src/components/MdiArrowBottomLeftBoldBoxOutline.vue";

test("MdiArrowBottomLeftBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeftBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
