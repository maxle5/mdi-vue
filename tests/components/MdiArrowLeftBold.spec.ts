
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBold from "../../src/components/MdiArrowLeftBold.vue";

test("MdiArrowLeftBold snapshot", () => {
  const wrapper = mount(MdiArrowLeftBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
