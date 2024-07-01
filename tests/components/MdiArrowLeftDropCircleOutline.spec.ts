
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftDropCircleOutline from "../../src/components/MdiArrowLeftDropCircleOutline.vue";

test("MdiArrowLeftDropCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftDropCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
