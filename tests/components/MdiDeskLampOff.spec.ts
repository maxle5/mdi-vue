
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeskLampOff from "../../src/components/MdiDeskLampOff.vue";

test("MdiDeskLampOff snapshot", () => {
  const wrapper = mount(MdiDeskLampOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
