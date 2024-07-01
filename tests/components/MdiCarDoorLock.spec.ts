
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarDoorLock from "../../src/components/MdiCarDoorLock.vue";

test("MdiCarDoorLock snapshot", () => {
  const wrapper = mount(MdiCarDoorLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
