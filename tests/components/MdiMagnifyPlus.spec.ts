
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyPlus from "../../src/components/MdiMagnifyPlus.vue";

test("MdiMagnifyPlus snapshot", () => {
  const wrapper = mount(MdiMagnifyPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
