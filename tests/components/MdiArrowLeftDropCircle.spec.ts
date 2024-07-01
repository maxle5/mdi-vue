
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftDropCircle from "../../src/components/MdiArrowLeftDropCircle.vue";

test("MdiArrowLeftDropCircle snapshot", () => {
  const wrapper = mount(MdiArrowLeftDropCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
