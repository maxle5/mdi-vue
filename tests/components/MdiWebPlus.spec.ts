
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebPlus from "../../src/components/MdiWebPlus.vue";

test("MdiWebPlus snapshot", () => {
  const wrapper = mount(MdiWebPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
