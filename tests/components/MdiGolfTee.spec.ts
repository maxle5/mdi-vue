
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGolfTee from "../../src/components/MdiGolfTee.vue";

test("MdiGolfTee snapshot", () => {
  const wrapper = mount(MdiGolfTee, {});
  expect(wrapper.html()).toMatchSnapshot();
});
