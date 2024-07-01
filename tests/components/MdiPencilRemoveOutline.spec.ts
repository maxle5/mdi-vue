
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilRemoveOutline from "../../src/components/MdiPencilRemoveOutline.vue";

test("MdiPencilRemoveOutline snapshot", () => {
  const wrapper = mount(MdiPencilRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
