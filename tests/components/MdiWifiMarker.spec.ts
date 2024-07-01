
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiMarker from "../../src/components/MdiWifiMarker.vue";

test("MdiWifiMarker snapshot", () => {
  const wrapper = mount(MdiWifiMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
