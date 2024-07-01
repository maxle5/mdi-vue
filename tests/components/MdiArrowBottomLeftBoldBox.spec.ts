
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeftBoldBox from "../../src/components/MdiArrowBottomLeftBoldBox.vue";

test("MdiArrowBottomLeftBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeftBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
