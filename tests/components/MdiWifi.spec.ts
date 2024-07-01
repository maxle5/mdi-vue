
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifi from "../../src/components/MdiWifi.vue";

test("MdiWifi snapshot", () => {
  const wrapper = mount(MdiWifi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
