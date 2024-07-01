
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarrel from "../../src/components/MdiBarrel.vue";

test("MdiBarrel snapshot", () => {
  const wrapper = mount(MdiBarrel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
