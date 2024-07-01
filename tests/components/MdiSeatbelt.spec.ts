
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatbelt from "../../src/components/MdiSeatbelt.vue";

test("MdiSeatbelt snapshot", () => {
  const wrapper = mount(MdiSeatbelt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
