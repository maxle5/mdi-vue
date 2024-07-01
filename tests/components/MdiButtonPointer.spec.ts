
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiButtonPointer from "../../src/components/MdiButtonPointer.vue";

test("MdiButtonPointer snapshot", () => {
  const wrapper = mount(MdiButtonPointer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
