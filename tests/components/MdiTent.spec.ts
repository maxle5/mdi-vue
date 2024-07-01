
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTent from "../../src/components/MdiTent.vue";

test("MdiTent snapshot", () => {
  const wrapper = mount(MdiTent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
