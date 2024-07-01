
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatReclineNormal from "../../src/components/MdiSeatReclineNormal.vue";

test("MdiSeatReclineNormal snapshot", () => {
  const wrapper = mount(MdiSeatReclineNormal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
