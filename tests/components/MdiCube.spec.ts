
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCube from "../../src/components/MdiCube.vue";

test("MdiCube snapshot", () => {
  const wrapper = mount(MdiCube, {});
  expect(wrapper.html()).toMatchSnapshot();
});
