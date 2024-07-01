
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilRemove from "../../src/components/MdiPencilRemove.vue";

test("MdiPencilRemove snapshot", () => {
  const wrapper = mount(MdiPencilRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
