
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRvTruck from "../../src/components/MdiRvTruck.vue";

test("MdiRvTruck snapshot", () => {
  const wrapper = mount(MdiRvTruck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
