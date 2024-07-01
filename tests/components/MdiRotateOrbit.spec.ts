
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotateOrbit from "../../src/components/MdiRotateOrbit.vue";

test("MdiRotateOrbit snapshot", () => {
  const wrapper = mount(MdiRotateOrbit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
