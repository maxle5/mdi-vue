
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterPlus from "../../src/components/MdiFilterPlus.vue";

test("MdiFilterPlus snapshot", () => {
  const wrapper = mount(MdiFilterPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
