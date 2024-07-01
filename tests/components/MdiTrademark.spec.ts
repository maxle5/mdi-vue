
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrademark from "../../src/components/MdiTrademark.vue";

test("MdiTrademark snapshot", () => {
  const wrapper = mount(MdiTrademark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
