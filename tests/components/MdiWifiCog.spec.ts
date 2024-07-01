
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiCog from "../../src/components/MdiWifiCog.vue";

test("MdiWifiCog snapshot", () => {
  const wrapper = mount(MdiWifiCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
