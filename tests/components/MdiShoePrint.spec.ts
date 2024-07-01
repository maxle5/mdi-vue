
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoePrint from "../../src/components/MdiShoePrint.vue";

test("MdiShoePrint snapshot", () => {
  const wrapper = mount(MdiShoePrint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
