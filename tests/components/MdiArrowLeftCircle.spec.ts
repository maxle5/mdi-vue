
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftCircle from "../../src/components/MdiArrowLeftCircle.vue";

test("MdiArrowLeftCircle snapshot", () => {
  const wrapper = mount(MdiArrowLeftCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
