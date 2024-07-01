
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadsetDock from "../../src/components/MdiHeadsetDock.vue";

test("MdiHeadsetDock snapshot", () => {
  const wrapper = mount(MdiHeadsetDock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
