
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeskLamp from "../../src/components/MdiDeskLamp.vue";

test("MdiDeskLamp snapshot", () => {
  const wrapper = mount(MdiDeskLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
