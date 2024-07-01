
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlus from "../../src/components/MdiPlus.vue";

test("MdiPlus snapshot", () => {
  const wrapper = mount(MdiPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
