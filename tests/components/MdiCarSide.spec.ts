
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSide from "../../src/components/MdiCarSide.vue";

test("MdiCarSide snapshot", () => {
  const wrapper = mount(MdiCarSide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
