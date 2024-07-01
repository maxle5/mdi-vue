
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilCircle from "../../src/components/MdiPencilCircle.vue";

test("MdiPencilCircle snapshot", () => {
  const wrapper = mount(MdiPencilCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
