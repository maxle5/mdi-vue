
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilOffOutline from "../../src/components/MdiPencilOffOutline.vue";

test("MdiPencilOffOutline snapshot", () => {
  const wrapper = mount(MdiPencilOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
