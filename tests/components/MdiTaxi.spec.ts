
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTaxi from "../../src/components/MdiTaxi.vue";

test("MdiTaxi snapshot", () => {
  const wrapper = mount(MdiTaxi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
