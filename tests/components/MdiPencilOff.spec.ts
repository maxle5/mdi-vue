
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilOff from "../../src/components/MdiPencilOff.vue";

test("MdiPencilOff snapshot", () => {
  const wrapper = mount(MdiPencilOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
