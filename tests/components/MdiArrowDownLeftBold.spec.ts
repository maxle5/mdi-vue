
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownLeftBold from "../../src/components/MdiArrowDownLeftBold.vue";

test("MdiArrowDownLeftBold snapshot", () => {
  const wrapper = mount(MdiArrowDownLeftBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
