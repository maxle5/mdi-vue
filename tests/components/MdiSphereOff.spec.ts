
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSphereOff from "../../src/components/MdiSphereOff.vue";

test("MdiSphereOff snapshot", () => {
  const wrapper = mount(MdiSphereOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
