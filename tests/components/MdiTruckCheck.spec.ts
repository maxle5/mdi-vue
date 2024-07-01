
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckCheck from "../../src/components/MdiTruckCheck.vue";

test("MdiTruckCheck snapshot", () => {
  const wrapper = mount(MdiTruckCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
