
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatLegroomExtra from "../../src/components/MdiSeatLegroomExtra.vue";

test("MdiSeatLegroomExtra snapshot", () => {
  const wrapper = mount(MdiSeatLegroomExtra, {});
  expect(wrapper.html()).toMatchSnapshot();
});
