
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPipeValve from "../../src/components/MdiPipeValve.vue";

test("MdiPipeValve snapshot", () => {
  const wrapper = mount(MdiPipeValve, {});
  expect(wrapper.html()).toMatchSnapshot();
});
