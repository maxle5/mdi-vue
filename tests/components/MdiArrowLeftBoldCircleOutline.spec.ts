
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBoldCircleOutline from "../../src/components/MdiArrowLeftBoldCircleOutline.vue";

test("MdiArrowLeftBoldCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftBoldCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
