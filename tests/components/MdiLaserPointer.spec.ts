
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLaserPointer from "../../src/components/MdiLaserPointer.vue";

test("MdiLaserPointer snapshot", () => {
  const wrapper = mount(MdiLaserPointer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
