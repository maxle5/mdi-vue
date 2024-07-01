
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUDownLeftBold from "../../src/components/MdiArrowUDownLeftBold.vue";

test("MdiArrowUDownLeftBold snapshot", () => {
  const wrapper = mount(MdiArrowUDownLeftBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
