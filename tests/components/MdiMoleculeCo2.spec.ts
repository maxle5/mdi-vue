
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoleculeCo2 from "../../src/components/MdiMoleculeCo2.vue";

test("MdiMoleculeCo2 snapshot", () => {
  const wrapper = mount(MdiMoleculeCo2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
