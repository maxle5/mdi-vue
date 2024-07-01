
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruck from "../../src/components/MdiTruck.vue";

test("MdiTruck snapshot", () => {
  const wrapper = mount(MdiTruck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
