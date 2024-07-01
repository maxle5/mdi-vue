
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisArrow from "../../src/components/MdiAxisArrow.vue";

test("MdiAxisArrow snapshot", () => {
  const wrapper = mount(MdiAxisArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
