
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength2Lock from "../../src/components/MdiWifiStrength2Lock.vue";

test("MdiWifiStrength2Lock snapshot", () => {
  const wrapper = mount(MdiWifiStrength2Lock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
