
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTram from "../../src/components/MdiTram.vue";

test("MdiTram snapshot", () => {
  const wrapper = mount(MdiTram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
