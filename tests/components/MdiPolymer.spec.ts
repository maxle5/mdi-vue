
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPolymer from "../../src/components/MdiPolymer.vue";

test("MdiPolymer snapshot", () => {
  const wrapper = mount(MdiPolymer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
