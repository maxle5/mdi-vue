
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFootPrint from "../../src/components/MdiFootPrint.vue";

test("MdiFootPrint snapshot", () => {
  const wrapper = mount(MdiFootPrint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
