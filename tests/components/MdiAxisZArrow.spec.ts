
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisZArrow from "../../src/components/MdiAxisZArrow.vue";

test("MdiAxisZArrow snapshot", () => {
  const wrapper = mount(MdiAxisZArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
