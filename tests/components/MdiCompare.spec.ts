
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompare from "../../src/components/MdiCompare.vue";

test("MdiCompare snapshot", () => {
  const wrapper = mount(MdiCompare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
