
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrbit from "../../src/components/MdiOrbit.vue";

test("MdiOrbit snapshot", () => {
  const wrapper = mount(MdiOrbit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
