
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartPlus from "../../src/components/MdiHeartPlus.vue";

test("MdiHeartPlus snapshot", () => {
  const wrapper = mount(MdiHeartPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
