
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBoldCircle from "../../src/components/MdiArrowLeftBoldCircle.vue";

test("MdiArrowLeftBoldCircle snapshot", () => {
  const wrapper = mount(MdiArrowLeftBoldCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
