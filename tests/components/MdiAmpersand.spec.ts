
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAmpersand from "../../src/components/MdiAmpersand.vue";

test("MdiAmpersand snapshot", () => {
  const wrapper = mount(MdiAmpersand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
