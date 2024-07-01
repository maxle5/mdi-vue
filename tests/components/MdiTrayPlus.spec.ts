
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayPlus from "../../src/components/MdiTrayPlus.vue";

test("MdiTrayPlus snapshot", () => {
  const wrapper = mount(MdiTrayPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
