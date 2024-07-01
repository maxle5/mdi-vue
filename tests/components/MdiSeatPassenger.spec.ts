
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatPassenger from "../../src/components/MdiSeatPassenger.vue";

test("MdiSeatPassenger snapshot", () => {
  const wrapper = mount(MdiSeatPassenger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
