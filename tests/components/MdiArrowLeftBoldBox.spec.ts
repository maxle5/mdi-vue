
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBoldBox from "../../src/components/MdiArrowLeftBoldBox.vue";

test("MdiArrowLeftBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowLeftBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
