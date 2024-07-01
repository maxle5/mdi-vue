
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTablePlus from "../../src/components/MdiTablePlus.vue";

test("MdiTablePlus snapshot", () => {
  const wrapper = mount(MdiTablePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
