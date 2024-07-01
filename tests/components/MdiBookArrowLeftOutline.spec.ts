
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowLeftOutline from "../../src/components/MdiBookArrowLeftOutline.vue";

test("MdiBookArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiBookArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
