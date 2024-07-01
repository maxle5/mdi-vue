
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNut from "../../src/components/MdiNut.vue";

test("MdiNut snapshot", () => {
  const wrapper = mount(MdiNut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
