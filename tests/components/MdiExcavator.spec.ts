
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExcavator from "../../src/components/MdiExcavator.vue";

test("MdiExcavator snapshot", () => {
  const wrapper = mount(MdiExcavator, {});
  expect(wrapper.html()).toMatchSnapshot();
});
