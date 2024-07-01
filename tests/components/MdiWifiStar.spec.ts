
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStar from "../../src/components/MdiWifiStar.vue";

test("MdiWifiStar snapshot", () => {
  const wrapper = mount(MdiWifiStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
