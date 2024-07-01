
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPatioHeater from "../../src/components/MdiPatioHeater.vue";

test("MdiPatioHeater snapshot", () => {
  const wrapper = mount(MdiPatioHeater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
