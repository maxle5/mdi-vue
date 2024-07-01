
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilCircleOutline from "../../src/components/MdiPencilCircleOutline.vue";

test("MdiPencilCircleOutline snapshot", () => {
  const wrapper = mount(MdiPencilCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
