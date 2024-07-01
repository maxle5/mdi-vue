
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableBorder from "../../src/components/MdiTableBorder.vue";

test("MdiTableBorder snapshot", () => {
  const wrapper = mount(MdiTableBorder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
