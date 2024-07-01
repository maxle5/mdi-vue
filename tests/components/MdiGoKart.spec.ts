
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoKart from "../../src/components/MdiGoKart.vue";

test("MdiGoKart snapshot", () => {
  const wrapper = mount(MdiGoKart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
