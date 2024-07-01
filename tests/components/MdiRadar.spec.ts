
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadar from "../../src/components/MdiRadar.vue";

test("MdiRadar snapshot", () => {
  const wrapper = mount(MdiRadar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
