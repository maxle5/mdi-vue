
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportPlus from "../../src/components/MdiPassportPlus.vue";

test("MdiPassportPlus snapshot", () => {
  const wrapper = mount(MdiPassportPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
