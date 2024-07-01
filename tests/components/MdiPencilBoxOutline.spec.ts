
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilBoxOutline from "../../src/components/MdiPencilBoxOutline.vue";

test("MdiPencilBoxOutline snapshot", () => {
  const wrapper = mount(MdiPencilBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
