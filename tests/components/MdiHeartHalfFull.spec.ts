
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartHalfFull from "../../src/components/MdiHeartHalfFull.vue";

test("MdiHeartHalfFull snapshot", () => {
  const wrapper = mount(MdiHeartHalfFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
