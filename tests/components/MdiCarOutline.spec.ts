
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarOutline from "../../src/components/MdiCarOutline.vue";

test("MdiCarOutline snapshot", () => {
  const wrapper = mount(MdiCarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
