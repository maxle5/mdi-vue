
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBoldBoxOutline from "../../src/components/MdiArrowLeftBoldBoxOutline.vue";

test("MdiArrowLeftBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
