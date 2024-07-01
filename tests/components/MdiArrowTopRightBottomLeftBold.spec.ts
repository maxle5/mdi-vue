
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightBottomLeftBold from "../../src/components/MdiArrowTopRightBottomLeftBold.vue";

test("MdiArrowTopRightBottomLeftBold snapshot", () => {
  const wrapper = mount(MdiArrowTopRightBottomLeftBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
