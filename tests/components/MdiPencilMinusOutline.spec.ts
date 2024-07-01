
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilMinusOutline from "../../src/components/MdiPencilMinusOutline.vue";

test("MdiPencilMinusOutline snapshot", () => {
  const wrapper = mount(MdiPencilMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
