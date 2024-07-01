
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartBroken from "../../src/components/MdiHeartBroken.vue";

test("MdiHeartBroken snapshot", () => {
  const wrapper = mount(MdiHeartBroken, {});
  expect(wrapper.html()).toMatchSnapshot();
});
