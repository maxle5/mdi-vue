
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHome from "../../src/components/MdiHome.vue";

test("MdiHome snapshot", () => {
  const wrapper = mount(MdiHome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
