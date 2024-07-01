
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatReclineExtra from "../../src/components/MdiSeatReclineExtra.vue";

test("MdiSeatReclineExtra snapshot", () => {
  const wrapper = mount(MdiSeatReclineExtra, {});
  expect(wrapper.html()).toMatchSnapshot();
});
