
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartOff from "../../src/components/MdiHeartOff.vue";

test("MdiHeartOff snapshot", () => {
  const wrapper = mount(MdiHeartOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
