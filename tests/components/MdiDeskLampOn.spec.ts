
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeskLampOn from "../../src/components/MdiDeskLampOn.vue";

test("MdiDeskLampOn snapshot", () => {
  const wrapper = mount(MdiDeskLampOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
