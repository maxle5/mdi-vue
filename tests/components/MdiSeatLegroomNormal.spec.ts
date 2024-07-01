
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatLegroomNormal from "../../src/components/MdiSeatLegroomNormal.vue";

test("MdiSeatLegroomNormal snapshot", () => {
  const wrapper = mount(MdiSeatLegroomNormal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
