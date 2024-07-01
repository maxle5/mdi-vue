
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTire from "../../src/components/MdiTire.vue";

test("MdiTire snapshot", () => {
  const wrapper = mount(MdiTire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
