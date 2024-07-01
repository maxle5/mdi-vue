
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadPlus from "../../src/components/MdiHeadPlus.vue";

test("MdiHeadPlus snapshot", () => {
  const wrapper = mount(MdiHeadPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
