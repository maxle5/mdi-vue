
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxMultiple from "../../src/components/MdiPlayBoxMultiple.vue";

test("MdiPlayBoxMultiple snapshot", () => {
  const wrapper = mount(MdiPlayBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
