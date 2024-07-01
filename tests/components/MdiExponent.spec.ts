
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExponent from "../../src/components/MdiExponent.vue";

test("MdiExponent snapshot", () => {
  const wrapper = mount(MdiExponent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
