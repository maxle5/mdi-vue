
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocket from "../../src/components/MdiPowerSocket.vue";

test("MdiPowerSocket snapshot", () => {
  const wrapper = mount(MdiPowerSocket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
