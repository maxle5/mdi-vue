
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftCircleOutline from "../../src/components/MdiArrowLeftCircleOutline.vue";

test("MdiArrowLeftCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
