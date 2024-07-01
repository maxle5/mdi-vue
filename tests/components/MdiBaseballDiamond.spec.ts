
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaseballDiamond from "../../src/components/MdiBaseballDiamond.vue";

test("MdiBaseballDiamond snapshot", () => {
  const wrapper = mount(MdiBaseballDiamond, {});
  expect(wrapper.html()).toMatchSnapshot();
});
