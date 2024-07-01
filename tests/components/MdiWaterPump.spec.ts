
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPump from "../../src/components/MdiWaterPump.vue";

test("MdiWaterPump snapshot", () => {
  const wrapper = mount(MdiWaterPump, {});
  expect(wrapper.html()).toMatchSnapshot();
});
