
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSphere from "../../src/components/MdiSphere.vue";

test("MdiSphere snapshot", () => {
  const wrapper = mount(MdiSphere, {});
  expect(wrapper.html()).toMatchSnapshot();
});
