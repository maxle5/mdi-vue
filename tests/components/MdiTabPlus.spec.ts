
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabPlus from "../../src/components/MdiTabPlus.vue";

test("MdiTabPlus snapshot", () => {
  const wrapper = mount(MdiTabPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
