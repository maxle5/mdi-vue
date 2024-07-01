
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarWash from "../../src/components/MdiCarWash.vue";

test("MdiCarWash snapshot", () => {
  const wrapper = mount(MdiCarWash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
