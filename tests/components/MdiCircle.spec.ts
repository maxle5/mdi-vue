
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircle from "../../src/components/MdiCircle.vue";

test("MdiCircle snapshot", () => {
  const wrapper = mount(MdiCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
