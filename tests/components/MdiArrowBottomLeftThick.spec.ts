
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeftThick from "../../src/components/MdiArrowBottomLeftThick.vue";

test("MdiArrowBottomLeftThick snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeftThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
